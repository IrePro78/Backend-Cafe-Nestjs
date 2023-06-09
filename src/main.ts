import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setBaseViewsDir(join(__dirname, '..', 'report'));
  app.setViewEngine('ejs');
  app.enableCors({
    origin: ['http://localhost:8000'],
    credentials: true,
  });
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}

bootstrap();
