import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripDetails } from './tripdetails.entity';
import { Repository } from 'typeorm';
import { CreateTripDto } from './dto/create-trip.dto';

import { HttpService } from '@nestjs/axios';



@Injectable()
export class TripdetailsService {
    constructor(@InjectRepository(TripDetails)
private triprepository:Repository<TripDetails>,private readonly httpService: HttpService){}

async createTrip(createTripDto:CreateTripDto){
   
    const weather=this.httpService.get('curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m');
    console.log(weather);


    const trip= await this.triprepository.create(createTripDto);
    return this.triprepository.save(trip);

}

}
