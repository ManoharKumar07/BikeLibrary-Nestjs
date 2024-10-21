import { Test, TestingModule } from '@nestjs/testing';
import { TripdetailsController } from './tripdetails.controller';

describe('TripdetailsController', () => {
  let controller: TripdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripdetailsController],
    }).compile();

    controller = module.get<TripdetailsController>(TripdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
