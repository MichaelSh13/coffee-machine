import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './modules/database/database.module';
import { JobSchedulerModule } from './modules/job-scheduler/job-scheduler.module';
import { BullQueueModule } from './modules/bull-queue/bull-queue.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { CoffeeModule } from './modules/coffee/coffee.module';
import { UserModule } from './modules/user/user.module';
import { CoffeeStatusModule } from './modules/coffee-status/coffee-status.module';
import { CoffeeMachineModule } from './modules/coffee-machine/coffee-machine.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt/jwt-guard';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    BullQueueModule,
    CoffeeModule,
    UserModule,
    JobSchedulerModule,
    AuthModule,
    CoffeeStatusModule,
    CoffeeMachineModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
