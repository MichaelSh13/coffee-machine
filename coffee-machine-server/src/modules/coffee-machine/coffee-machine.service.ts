import { Injectable } from '@nestjs/common';
import { CoffeeEntity } from '../coffee/coffee.entity';

@Injectable()
export class CoffeeMachineService {
  constructor() {}

  async createCoffee(coffee: CoffeeEntity) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')
      }, 10 * 1000);
    })
  }

  cancel(coffee: CoffeeEntity) {
    console.log('cancel')
  }
}
