import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeStatusEntity } from './coffee-status.entity';
import { CoffeeStatusService } from './coffee-status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoffeeStatusEntity]),
  ],
  providers: [CoffeeStatusService],
  exports: [CoffeeStatusService],
})
export class CoffeeStatusModule {}
