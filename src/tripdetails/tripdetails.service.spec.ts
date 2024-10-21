import { Test, TestingModule } from '@nestjs/testing';
import { TripdetailsService } from './tripdetails.service';

describe('TripdetailsService', () => {
  let service: TripdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripdetailsService],
    }).compile();

    service = module.get<TripdetailsService>(TripdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
