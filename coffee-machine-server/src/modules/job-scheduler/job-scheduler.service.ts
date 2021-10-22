import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CoffeeService } from '../coffee/coffee.service';

@Injectable()
export class JobSchedulerService {

  constructor(
    private readonly coffeeService: CoffeeService,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  // @Cron(CronExpression.EVERY_5_SECONDS)
  triggerCoffeEveryTenMinutes() {
    this.coffeeService.addCoffeeToQueue({});
  }
  
}
