import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripdetailsModule } from './tripdetails/tripdetails.module';

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
    TripdetailsModule,
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
