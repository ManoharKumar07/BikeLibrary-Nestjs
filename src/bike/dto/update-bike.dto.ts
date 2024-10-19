import { PartialType } from '@nestjs/mapped-types';
import { CreateBikeDto } from './create-bike.dto'; 


export class UpdateBikeDto extends PartialType(CreateBikeDto) {
  // This class will inherit all properties from CreateBikeDto
}
