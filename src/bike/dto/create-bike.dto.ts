import { IsString, IsNumber } from 'class-validator'; // Importing validation decorators for DTO properties

// Data Transfer Object (DTO) for creating a bike
export class CreateBikeDto {
  // Property to hold the make of the bike, should be a string
  @IsString()
  make: string;

  // Property to hold the model of the bike, should be a string
  @IsString()
  model: string;

  // Property to hold the year of the bike, should be a number
  @IsNumber()
  year: number;

  // Property to hold the type of the bike, should be a string
  @IsString()
  type: string;
}
