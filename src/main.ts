import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

 app.useGlobalPipes(new ValidationPipe());

  // Swagger documentation 
  const config = new DocumentBuilder()
    .setTitle('Bike Library API') 
    .setDescription('API for managing a bike library') 
    .setVersion('1.0') 
    .build();

  // Swagger documentation based on the configuration
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

 
  await app.listen(3000);
}

bootstrap();
