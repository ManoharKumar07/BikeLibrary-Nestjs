import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // This decorator marks the class as a database entity
export class TripDetails {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  person: string;

  @Column() 
  destination: string;

  @Column() 
  biketype: number;

  @Column() 
  weather: string;
}
