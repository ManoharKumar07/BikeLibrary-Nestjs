

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { TripDetails } from './tripdetails.entity';
import { TripdetailsService } from './tripdetails.service';
import { CreateTripDto } from './dto/create-trip.dto';



  
@Controller('tripdetails')
export class TripdetailsController {
    constructor(private readonly tripService: TripdetailsService) {}
@Post()
PostTrip(@Body() createTripDto:CreateTripDto){
    return this.tripService.createTrip(createTripDto);
}

}
