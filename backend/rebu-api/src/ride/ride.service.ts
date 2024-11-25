import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RideConfirmDto, RideEstimateDto, RouteApiResponse } from './dto/ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RideEntity } from './entities/ride.entity';
import { Equal, Repository } from 'typeorm';
import { DriverService } from 'src/driver/driver.service';
import { transformTime } from './utils';
import { ConfigService } from '@nestjs/config';
const { RoutesClient } = require("@googlemaps/routing").v2;

@Injectable()
export class RideService {
    constructor(
        @InjectRepository(RideEntity)
        private rideRepository: Repository<RideEntity>,
        private readonly driverService: DriverService
      ) { }
      
    async estimate(ride: RideEstimateDto) {
        const apiResponse: RouteApiResponse = await this.getGoogleApiRoute(ride.origin, ride.destination)
        const distanceInKilometers = apiResponse.distanceMeters/1000
        const drivers = await this.driverService.findDriverByKm(distanceInKilometers)
        const data = {
            origin: {
                latitude: apiResponse.legs[0].startLocation.latLng.latitude,
                longitude: apiResponse.legs[0].startLocation.latLng.longitude
            },
            destination: {
                latitude: apiResponse.legs[0].endLocation.latLng.latitude,
                longitude: apiResponse.legs[0].endLocation.latLng.longitude
            },
            distance: apiResponse.distanceMeters,
            duration: transformTime(apiResponse.duration.seconds),
            options: [
                ...drivers
            ],
            routeResponse: ride
        }
        return {
            message: "Operação realizada com sucesso",
            data
        }
    }

    async confirm(ride: RideConfirmDto) {
        const driver = await this.driverService.findDriverById(ride.driver.id)
        if(driver.name != ride.driver.name || !driver) {
            throw new HttpException(`Motorista não encontrado`, HttpStatus.NOT_FOUND);
        }
        const kmDistance = ride.distance/1000
        if(kmDistance < driver.minimum_km) {
            throw new HttpException(`Quilometragem inválida para o motorista`, HttpStatus.NOT_ACCEPTABLE);
        }
        const rideToSave = this.rideRepository.create({
            customer_id: ride.customer_id,
            origin: ride.origin,
            destination: ride.destination,
            distance: ride.distance,
            duration: ride.duration,
            value: ride.value,
            driver: driver, 
          });
          const savedRide = await this.rideRepository.save(rideToSave)
          return savedRide
    }

    async getGoogleApiRoute(origin: string, destination: string) {
        const configService = new ConfigService();
        const routingClient = await new RoutesClient({ apiKey: configService.get<string>('GOOGLE_API_KEY') });
        const request = {
            origin: {
                address: origin
            },
            destination: {
              address: destination
            },
            travelMode: 'DRIVE',
            routingPreference: 'TRAFFIC_AWARE',
            computeAlternativeRoutes: false,
            routeModifiers: {
                avoidTolls: false,
                avoidHighways: false,
                avoidFerries: false
            },
            languageCode: "en-US",
            units: "IMPERIAL"
          };
          try {
            const response = await routingClient.computeRoutes(request, {
                otherArgs: {
                    headers: {
                      "Content-Type": "application/json",
                      "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs.startLocation,routes.legs.endLocation",
                    },
                }
            })
            return response[0].routes[0]
          } catch (error) {
            console.error('Erro ao chamar o ComputeRoutes:', error.message || error);
            throw new Error('Erro ao consultar a Google Routes API.');
          }

    }

    async validateDriverId(driverId: number): Promise<boolean> {
        const driver = await this.driverService.findDriverById(driverId)
        return !!driver
    }
    
    async findRidesByUser(customerId: string, driverId?: number) {
        if(driverId) {
            const rides = await this.rideRepository.createQueryBuilder('ride')
                .leftJoinAndSelect('ride.driver', 'driver')
                .where('ride.customer_id = :customerId', { customerId })
                .andWhere(driverId ? 'ride.driver.id = :driverId' : '1=1', { driverId })
                .orderBy('ride.id', 'DESC')
                .select([
                    'ride.id',
                    'ride.customer_id',
                    'ride.origin',
                    'ride.destination',
                    'ride.distance',
                    'ride.duration',
                    'ride.value',
                    'driver.id',
                    'driver.name'
                ])
                .getMany()

            return {
                customer_id: customerId,
                rides
            }
        }

        const rides = await this.rideRepository.createQueryBuilder('ride')
                .leftJoinAndSelect('ride.driver', 'driver')
                .where('ride.customer_id = :customerId', { customerId })
                .orderBy('ride.id', 'DESC')
                .select([
                    'ride.id',
                    'ride.customer_id',
                    'ride.origin',
                    'ride.destination',
                    'ride.distance',
                    'ride.duration',
                    'ride.value',
                    'driver.id',
                    'driver.name'
                ])
                .getMany()

        return {
            customer_id: customerId,
            rides
        }
    }
}
