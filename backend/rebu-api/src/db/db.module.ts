import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from 'src/driver/entities/driver.entity';
import { RideEntity } from 'src/ride/entities/ride.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [DriverEntity, RideEntity],
        migrations: [__dirname + 'migrations/*.ts'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
})
export class DbModule {}
