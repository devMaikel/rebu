import { NestFactory } from '@nestjs/core';
import { SeederService } from './driver.seeder.service';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seederService = app.get(SeederService);

  await seederService.seedDrivers();

  await app.close();
}

bootstrap();
