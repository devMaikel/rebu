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
  //   TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '123456',
  //   database: 'rebu',
  //   entities: [],
  //   synchronize: true,
  // }),
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
