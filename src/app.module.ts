import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';

@Module({
  imports: [
    // Configuring the TypeORM to use SQLite as the database
    TypeOrmModule.forRoot({
      type: 'sqlite', // SQLite database type
      database: 'database.db', // Name of the SQLite database file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Auto-load all entity files (for ORM mapping)
      synchronize: true, // Automatically sync database schema with entities (useful in development)
    }),
    // Importing the BikeModule to manage bike-related features in the app
    BikeModule,
  ],
})
export class AppModule {}
