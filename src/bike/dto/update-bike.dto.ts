import { PartialType } from '@nestjs/mapped-types'; // Importing PartialType to create a DTO that can have optional properties
import { CreateBikeDto } from './create-bike.dto'; // Importing the CreateBikeDto to extend it

// UpdateBikeDto class that allows partial updates to a bike
export class UpdateBikeDto extends PartialType(CreateBikeDto) {
  // This class will inherit all properties from CreateBikeDto
  // but will make them optional for updating a bike
}
