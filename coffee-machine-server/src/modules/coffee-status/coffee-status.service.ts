import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusOfCoffeeE } from '../coffee/interface';
import { CoffeeStatusEntity } from './coffee-status.entity';
import { StatusI } from './interface';

@Injectable()
export class CoffeeStatusService {
  constructor(
    @InjectRepository(CoffeeStatusEntity)
    private readonly coffeeStatusRepository: Repository<CoffeeStatusEntity>
  ) {}

  toProcessing({ id, ...status }: StatusI) {
    this.coffeeStatusRepository.insert({
      ...status,
      status: StatusOfCoffeeE.PROCESSING,
    })
  }

  toCompleted({ id, ...status }: StatusI) {
    this.coffeeStatusRepository.insert({
      ...status,
      status: StatusOfCoffeeE.COMPLETED,
    })
  }

  toFailed(
    { id, ...status }: StatusI,
    message: string,
  ) {
    this.coffeeStatusRepository.insert({
      ...status,
      status: StatusOfCoffeeE.FAILED,
      message,
    })
  }
}
