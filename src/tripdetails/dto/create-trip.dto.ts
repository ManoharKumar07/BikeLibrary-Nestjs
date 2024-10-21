import { IsString, IsNumber } from 'class-validator'; 


export class CreateTripDto {
  
  @IsString()
  person: string;

  
  @IsString()
  destination: string;

  
  @IsNumber()
  biketype: number;

  
  @IsString()
  weather: string;
}
