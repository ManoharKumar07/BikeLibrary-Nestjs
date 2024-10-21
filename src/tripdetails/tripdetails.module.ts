import { Module } from '@nestjs/common';
import { TripdetailsController } from './tripdetails.controller';
import { TripdetailsService } from './tripdetails.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripDetails } from './tripdetails.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[TypeOrmModule.forFeature([TripDetails,HttpModule])],
  controllers: [TripdetailsController],
  providers: [TripdetailsService]
})
export class TripdetailsModule {}
