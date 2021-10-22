import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeMachineService } from './coffee-machine.service';

describe('CoffeeMachineService', () => {
  let service: CoffeeMachineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeMachineService],
    }).compile();

    service = module.get<CoffeeMachineService>(CoffeeMachineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
