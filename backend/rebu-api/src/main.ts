import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { config } from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  // Configura o dotenv para carregar o .env da raiz do repositório
  // config({ path: join(__dirname, '../../../.env') });

  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT;
  await app.listen(port ?? 3000);
}
bootstrap();
