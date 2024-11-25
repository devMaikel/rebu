import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { RideModule } from './ride/ride.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { SeederModule } from './db/seeders/seeder.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DriverModule,
    RideModule,
    DbModule,
    SeederModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
