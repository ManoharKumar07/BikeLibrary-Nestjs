import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { Bike } from './bike.entity';

@Module({
  // Registers the Bike entity with TypeORM so it can interact with the database
  imports: [TypeOrmModule.forFeature([Bike])],
  // Specifies the controller for handling incoming HTTP requests
  controllers: [BikeController],
  // Provides the BikeService for dependency injection throughout the module
  providers: [BikeService],
})
export class BikeModule {}
