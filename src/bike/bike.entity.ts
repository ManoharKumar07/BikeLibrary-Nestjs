import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // This decorator marks the class as a database entity
export class Bike {
  @PrimaryGeneratedColumn('uuid') // This decorator indicates that 'id' is the primary key and will be auto-generated as a UUID
  id: string;

  @Column() // This decorator marks 'make' as a column in the database
  make: string;

  @Column() // This decorator marks 'model' as a column in the database
  model: string;

  @Column() // This decorator marks 'year' as a column in the database
  year: number;

  @Column() // This decorator marks 'type' as a column in the database
  type: string;
}
