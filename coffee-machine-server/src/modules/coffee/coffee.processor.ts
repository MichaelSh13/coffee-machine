import { OnQueueActive, OnQueueCompleted, OnQueueError, OnQueueFailed, OnQueuePaused, OnQueueRemoved, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { CoffeeMachineService } from "../coffee-machine/coffee-machine.service";
import { CoffeeStatusService } from "../coffee-status/coffee-status.service";
import { RecordCoffeeI } from "./interface";

@Processor('makeCoffee-queue')
export class MakeCoffeeProcessor {
  constructor (
    private readonly coffeeStatusService: CoffeeStatusService,
    
    private readonly coffeeMachine: CoffeeMachineService,
  ) {}
  
  @Process('makeCoffee-job')
  async makeCoffeeJob({ data: { coffee } }: Job<RecordCoffeeI>) {
    console.log('makeCoffeeJob')
    await this.coffeeMachine.createCoffee(coffee);
  }

  @OnQueueActive()
  async onQueueActive({ data: { status } }: Job<RecordCoffeeI>) {
    console.log('onQueueActive')
    this.coffeeStatusService.toProcessing(status);
  }

  @OnQueueCompleted()
  async onQueueCompleted({ data: { status } }: Job<RecordCoffeeI>) {
    console.log('onQueueCompleted')
    this.coffeeStatusService.toCompleted(status);
  }

  @OnQueueFailed()
  async onQueueFailed({
    data: { status, coffee },
    failedReason: message,
  }: Job<RecordCoffeeI>) {
    console.log('onQueueFailed')
    this.coffeeStatusService.toFailed(status, message);
    this.coffeeMachine.cancel(coffee);
  }

  @OnQueueRemoved()
  asdjkhefgj() {
    console.log('remove')
  }

  @OnQueuePaused()
  sdfasdjkhefgj() {
    console.log('paused')
  }

  @OnQueueError()
  jhukhvjmbklku(e: any) {
    console.log(e)
  }
}
