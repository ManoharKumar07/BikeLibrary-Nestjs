import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Controller('bikes') // This decorator defines the route prefix for all endpoints in this controller
export class BikeController {
  constructor(private readonly bikesService: BikeService) {} // The constructor injects the BikeService to use its methods

  @Get() // This decorator handles GET requests to the '/bikes' endpoint
  findAll() {
    return this.bikesService.findAll(); // Calls the service method to retrieve all bikes
  }

  @Post() // This decorator handles POST requests to the '/bikes' endpoint
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto); // Calls the service method to create a new bike
  }

  @Put(':id') // This decorator handles PUT requests to the '/bikes/:id' endpoint, where ':id' is a variable parameter
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(id, updateBikeDto); // Calls the service method to update an existing bike by ID
  }

  @Delete(':id') // This decorator handles DELETE requests to the '/bikes/:id' endpoint
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id); // Calls the service method to remove a bike by ID
  }
}
