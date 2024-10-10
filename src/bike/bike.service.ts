import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)
    private bikesRepository: Repository<Bike>,
  ) {}

  findAll() {
    return this.bikesRepository.find();
  }

  create(createBikeDto: CreateBikeDto) {
    const newBike = this.bikesRepository.create(createBikeDto);
    return this.bikesRepository.save(newBike);
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    const bike = await this.bikesRepository.preload({
      id,
      ...updateBikeDto,
    });
    if (!bike) throw new NotFoundException(`Bike with ID ${id} not found`);
    return this.bikesRepository.save(bike);
  }

  async remove(id: string) {
    const bike = await this.bikesRepository.findOneBy({ id });
    if (!bike) throw new NotFoundException(`Bike with ID ${id} not found`);
    return this.bikesRepository.remove(bike);
  }
}
