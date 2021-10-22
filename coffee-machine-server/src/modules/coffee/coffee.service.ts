import { InjectQueue } from '@nestjs/bull';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Queue } from 'bull'
import { Connection} from 'typeorm';
import { CoffeeStatusEntity } from '../coffee-status/coffee-status.entity';
import { RolesE } from '../user/interface';
import { CoffeeEntity } from './coffee.entity';
import { CreateCoffeeDTO } from './dto/create-coffee.dto';
import { RecordCoffeeI } from './interface';

@Injectable()
export class CoffeeService {
  constructor(
    // @InjectRepository(CoffeeEntity)
    // private readonly coffeeRepository: Repository<CoffeeEntity>,
    
    @InjectQueue('makeCoffee-queue')
    private readonly queue: Queue,

    private connection: Connection,
  ) {}

  async addCoffeeToQueue(
    coffeeData: CreateCoffeeDTO,
  ) {
    console.log(coffeeData.time)
    const recordCoffee = await this.recordCoffee(coffeeData);
    
    const delay = coffeeData.time || 10 * 60 * 1000;
    const priority = this.toDeterminePriority(coffeeData.user?.role);
    console.log('priority: ', priority)
    
    return this.queue.add('makeCoffee-job', recordCoffee, {
      timeout: 15 * 60 * 1000,
      stackTraceLimit: 100,
      delay,
      priority,
    })
  }

  private async recordCoffee(
    { time, ..._coffeeData }: CreateCoffeeDTO,
  ): Promise<RecordCoffeeI> {
    const queryRunner = this.connection.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const coffeeData = {
        ..._coffeeData,
        time: new Date(Date.now() + time).toISOString().replace('T',' ').replace('Z',''),
      };
      const coffee = await queryRunner.manager.save(CoffeeEntity, coffeeData);

      const { updatedDate, createdDate, ...status }: CoffeeStatusEntity = await queryRunner.manager.save(CoffeeStatusEntity, { coffee })

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return { coffee, status };
    } catch (err) {
      console.log(err)
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      throw new BadRequestException('An error occurred during recording coffee.');
    }
  }

  private toDeterminePriority(role?: RolesE) {
    switch (role) {
      case RolesE.BOSS: return 3;
      case RolesE.CLIENT: return 5;
      default: return 10;
    }
  }
}
