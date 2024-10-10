import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Controller('bikes')
export class BikeController {
  constructor(private readonly bikesService: BikeService) {}

  @Get()
  findAll() {
    return this.bikesService.findAll();
  }

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id);
  }
}
