import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideEntity } from './entities/ride.entity';
import { DriverService } from 'src/driver/driver.service';
import { DriverEntity } from 'src/driver/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RideEntity, DriverEntity])],
  providers: [RideService, DriverService],
  controllers: [RideController]
})
export class RideModule {}
