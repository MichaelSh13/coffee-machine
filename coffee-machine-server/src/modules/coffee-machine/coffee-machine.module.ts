import { Module } from '@nestjs/common';
import { CoffeeMachineService } from './coffee-machine.service';

@Module({
  providers: [CoffeeMachineService],
  exports: [CoffeeMachineService],
})
export class CoffeeMachineModule {}
