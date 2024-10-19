import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // This decorator marks the class as a database entity
export class Bike {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  make: string;

  @Column() 
  model: string;

  @Column() 
  year: number;

  @Column() 
  type: string;
}
