import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikeService {
  // Injecting the Bike repository to interact with the database
  constructor(
    @InjectRepository(Bike)
    private bikesRepository: Repository<Bike>,
  ) {}

  // Retrieves all bikes from the database
  findAll() {
    return this.bikesRepository.find();
  }

  // Creates a new bike entry using data from the DTO (Data Transfer Object)
  create(createBikeDto: CreateBikeDto) {
    // Creates a new bike entity from the provided data
    const newBike = this.bikesRepository.create(createBikeDto);
    // Saves the new bike into the database
    return this.bikesRepository.save(newBike);
  }

  // Updates an existing bike with new data based on its ID
  async update(id: string, updateBikeDto: UpdateBikeDto) {
    // Tries to find and preload the existing bike with new data
    const bike = await this.bikesRepository.preload({
      id,
      ...updateBikeDto,
    });
    // Throws an error if the bike is not found
    if (!bike) throw new NotFoundException(`Bike with ID ${id} not found`);
    // Saves the updated bike back to the database
    return this.bikesRepository.save(bike);
  }

  // Removes a bike from the database by its ID
  async remove(id: string) {
    // Looks for the bike in the database by its ID
    const bike = await this.bikesRepository.findOneBy({ id });
    // Throws an error if the bike is not found
    if (!bike) throw new NotFoundException(`Bike with ID ${id} not found`);
    // Deletes the bike from the database
    return this.bikesRepository.remove(bike);
  }
}
