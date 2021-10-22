import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeStatusService } from './coffee-status.service';

describe('CoffeeStatusService', () => {
  let service: CoffeeStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeStatusService],
    }).compile();

    service = module.get<CoffeeStatusService>(CoffeeStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
