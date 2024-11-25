import { Injectable } from '@nestjs/common';
import { DriverDto } from './dto/driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverEntity } from 'src/driver/entities/driver.entity';
import { Equal, LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class DriverService {
    constructor(
        @InjectRepository(DriverEntity)
        private driverRepository: Repository<DriverEntity>,
      ) { }

    async findDriverByKm(km: number) {
        const drivers = await this.driverRepository.find({
            where: {
              minimum_km: LessThanOrEqual(km),
            },
          });
        return drivers
    }

    async findDriverById(id: number) {
        const driver = await this.driverRepository.findOne({
            where: {
                id: Equal(id)
            }
        })
        return driver
    }
}
