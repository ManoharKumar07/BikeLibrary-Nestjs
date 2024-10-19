import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';

@Module({
  imports: [
    // Configuring the TypeORM to use SQLite database
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'database.db', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    // Importing the BikeModule to manage bike-related features in the app
    BikeModule,
  ],
})
export class AppModule {}
