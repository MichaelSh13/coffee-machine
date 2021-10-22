import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoffeeModule } from '../coffee/coffee.module';
import { JobSchedulerService } from './job-scheduler.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CoffeeModule,
  ],
  providers: [JobSchedulerService],
  exports: [JobSchedulerService]
})
export class JobSchedulerModule {};
