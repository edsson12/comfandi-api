import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/filters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.setGlobalPrefix('api');

  const docs = new DocumentBuilder()
    .setTitle('Comfandi api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('comfandi')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, docs);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(config.PORT);
}

bootstrap();