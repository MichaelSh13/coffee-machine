import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { CoffeeService } from './coffee.service';
import { DescribeCoffeeDTO } from './dto/create-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(
    private readonly coffeeService: CoffeeService,
  ) {}  

  @Post()
  async addCoffeeToQueue(
    @Body() coffeeData: DescribeCoffeeDTO,
    @Req() { user }: { user: UserEntity },
  ) {
    return this.coffeeService.addCoffeeToQueue({
      user, ...coffeeData
    });
  }
}
