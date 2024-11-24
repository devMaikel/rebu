import { Injectable } from '@nestjs/common';
import { RideCreateDto, RideEstimateDto } from './dto/ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RideEntity } from './entities/ride.entity';
import { Repository } from 'typeorm';
import { DriverService } from 'src/driver/driver.service';

@Injectable()
export class RideService {
    constructor(
        @InjectRepository(RideEntity)
        private rideRepository: Repository<RideEntity>,
        private readonly driverService: DriverService
      ) { }
      
    create(ride: RideCreateDto) {
        return 'This action adds a new rider';
    }

    async estimate(ride: RideEstimateDto) {
        const drivers = await this.driverService.findOnRange(5)
        const data = {
            origin: {
                latitude: 1,
                longitude: 1
            },
            destination: {
                latitude: 1,
                longitude: 1
            },
            distance: 1,
            duration: "string ",
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
}
