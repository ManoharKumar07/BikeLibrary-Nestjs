import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // NestJS application instance using the AppModule
  const app = await NestFactory.create(AppModule);

 app.useGlobalPipes(new ValidationPipe());

  // Swagger documentation with basic details about the API
  const config = new DocumentBuilder()
    .setTitle('Bike Library API') // title of the API documentation
    .setDescription('API for managing a bike library') // short description of what the API does
    .setVersion('1.0') // Version of the API
    .build();

  // Swagger documentation based on the configuration
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI at the '/api' endpoint to allow users to interact with the API
  SwaggerModule.setup('api', app, document);

  // Listen for incoming requests on port 3000
  await app.listen(3000);
}

// Starting the app by calling the bootstrap function
bootstrap();
