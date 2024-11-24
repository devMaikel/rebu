import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from '../../driver/entities/driver.entity';
import { SeederService } from './driver.seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
