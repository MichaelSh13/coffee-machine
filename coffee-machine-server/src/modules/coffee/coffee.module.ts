import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeMachineModule } from '../coffee-machine/coffee-machine.module';
import { CoffeeStatusModule } from '../coffee-status/coffee-status.module';
import { CoffeeController } from './controllers/coffee.controller';
import { CoffeeEntity } from './models/coffee.entity';
import { MakeCoffeeProcessor } from './jobs/coffee.processor';
import { CoffeeService } from './services/coffee.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoffeeEntity]),
    BullModule.registerQueue({
      name: 'makeCoffee-queue'
    }),
    CoffeeStatusModule,
    CoffeeMachineModule,
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService, MakeCoffeeProcessor],
  exports: [CoffeeService],
})
export class CoffeeModule {}
