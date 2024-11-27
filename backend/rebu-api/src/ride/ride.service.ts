import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RideConfirmDto, RideData, RideEstimateDto } from './dto/ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RideEntity } from './entities/ride.entity';
import { Repository } from 'typeorm';
import { DriverService } from 'src/driver/driver.service';
import { transformTime } from './utils';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { RoutesClient } = require('@googlemaps/routing').v2;

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(RideEntity)
    private rideRepository: Repository<RideEntity>,
    private readonly driverService: DriverService,
  ) {}

  async estimate(ride: RideEstimateDto) {
    const apiResponse = await this.getGoogleApiRoute(
      ride.origin,
      ride.destination,
    );
    const data: RideData = apiResponse[0].routes[0];
    const distanceInKilometers = data.distanceMeters / 1000;
    const drivers =
      await this.driverService.findDriverByKm(distanceInKilometers);
    const driversWithValue = drivers.map((e) => ({
      ...e,
      value: (e.price_km * distanceInKilometers).toFixed(2),
    }));
    const dataFormatted = {
      origin: {
        latitude: data.legs[0].startLocation.latLng.latitude,
        longitude: data.legs[0].startLocation.latLng.longitude,
      },
      destination: {
        latitude: data.legs[0].endLocation.latLng.latitude,
        longitude: data.legs[0].endLocation.latLng.longitude,
      },
      distance: data.distanceMeters,
      duration: transformTime(data.duration.seconds),
      options: [...driversWithValue],
      routeResponse: apiResponse[0],
    };
    return dataFormatted;
  }

  async confirm(ride: RideConfirmDto) {
    const driver = await this.driverService.findDriverById(ride.driver.id);
    if (driver.name != ride.driver.name || !driver) {
      throw new HttpException(
        {
          error_code: 'DRIVER_NOT_FOUND',
          error_description: 'Motorista não encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const kmDistance = ride.distance / 1000;
    if (kmDistance < driver.minimum_km) {
      throw new HttpException(
        {
          error_code: 'INVALID_DISTANCE',
          error_description: 'Quilometragem inválida para o motorista',
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const rideToSave = this.rideRepository.create({
      customer_id: ride.customer_id,
      date: ride.date,
      origin: ride.origin,
      destination: ride.destination,
      distance: ride.distance,
      duration: ride.duration,
      value: ride.value,
      driver: driver,
    });
    const savedRide = await this.rideRepository.save(rideToSave);
    return savedRide;
  }

  async getGoogleApiRoute(origin: string, destination: string) {
    const configService = new ConfigService();
    const routingClient = await new RoutesClient({
      apiKey: configService.get<string>('GOOGLE_API_KEY'),
    });
    const request = {
      origin: {
        address: origin,
      },
      destination: {
        address: destination,
      },
      travelMode: 'DRIVE',
      routingPreference: 'TRAFFIC_AWARE',
      computeAlternativeRoutes: false,
      routeModifiers: {
        avoidTolls: false,
        avoidHighways: false,
        avoidFerries: false,
      },
      languageCode: 'en-US',
      units: 'IMPERIAL',
    };
    try {
      const response = await routingClient.computeRoutes(request, {
        otherArgs: {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-FieldMask': '*',
          },
        },
      });
      return response;
    } catch (error) {
      console.error('Erro ao chamar o ComputeRoutes:', error.message || error);
      throw new Error('Erro ao consultar a Google Routes API.');
    }
  }

  async validateDriverId(driverId: number): Promise<boolean> {
    const driver = await this.driverService.findDriverById(driverId);
    return !!driver;
  }

  async findRidesByUser(customerId: string, driverId?: number) {
    if (driverId) {
      const rides = await this.rideRepository
        .createQueryBuilder('ride')
        .leftJoinAndSelect('ride.driver', 'driver')
        .where('ride.customer_id = :customerId', { customerId })
        .andWhere(driverId ? 'ride.driver.id = :driverId' : '1=1', { driverId })
        .orderBy('ride.id', 'DESC')
        .select([
          'ride.id',
          'ride.customer_id',
          'ride.date',
          'ride.origin',
          'ride.destination',
          'ride.distance',
          'ride.duration',
          'ride.value',
          'driver.id',
          'driver.name',
        ])
        .getMany();
      if (rides.length < 1) {
        throw new HttpException(
          {
            error_code: 'NO_RIDES_FOUND',
            error_description: 'Nenhum registro encontrado',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        customer_id: customerId,
        rides,
      };
    }

    const rides = await this.rideRepository
      .createQueryBuilder('ride')
      .leftJoinAndSelect('ride.driver', 'driver')
      .where('ride.customer_id = :customerId', { customerId })
      .orderBy('ride.id', 'DESC')
      .select([
        'ride.id',
        'ride.customer_id',
        'ride.date',
        'ride.origin',
        'ride.destination',
        'ride.distance',
        'ride.duration',
        'ride.value',
        'driver.id',
        'driver.name',
      ])
      .getMany();
    if (rides.length < 1) {
      throw new HttpException(
        {
          error_code: 'NO_RIDES_FOUND',
          error_description: 'Nenhum registro encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      customer_id: customerId,
      rides,
    };
  }
}
