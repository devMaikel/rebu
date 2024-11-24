import { Injectable } from '@nestjs/common';
import { DriverDto } from './dto/driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverEntity } from 'src/driver/entities/driver.entity';
import { LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class DriverService {

    constructor(
        @InjectRepository(DriverEntity)
        private driverRepository: Repository<DriverEntity>,
      ) { }
      
    create(driver: DriverDto) {
        return 'This action adds a new driver';
    }

    async findOnRange(km: number) {
        const drivers = await this.driverRepository.find({
            where: {
              minimum_km: LessThanOrEqual(km),
            },
          });

        console.log("motorista encontrado: ", drivers)
        return drivers
    }

    findAll() {
        return `This action returns all drivers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} driver`;
    }

    update(id: number, driver: DriverDto) {
        return `This action updates a #${id} driver`;
    }

    remove(id: number) {
        return `This action removes a #${id} driver`;
    }
}
