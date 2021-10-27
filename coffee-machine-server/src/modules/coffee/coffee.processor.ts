import { OnQueueActive, OnQueueCleaned, OnQueueCompleted, OnQueueDrained, OnQueueError, OnQueueFailed, OnQueuePaused, OnQueueProgress, OnQueueRemoved, OnQueueResumed, OnQueueStalled, OnQueueWaiting, Process, Processor } from "@nestjs/bull";
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
    console.log('something')
    await this.coffeeMachine.createCoffee(coffee);
  }

  @OnQueueActive()
  async onQueueActive({ data: { status } }: Job<RecordCoffeeI>) {
    console.log('something')
    this.coffeeStatusService.toProcessing(status);
  }

  @OnQueueCompleted()
  async onQueueCompleted({ data: { status } }: Job<RecordCoffeeI>) {
    console.log('something')
    this.coffeeStatusService.toCompleted(status);
  }

  @OnQueueFailed()
  async onQueueFailed({
    data: { status, coffee },
    failedReason: message,
  }: Job<RecordCoffeeI>) {
    console.log('something')
    this.coffeeStatusService.toFailed(status, message);
    this.coffeeMachine.cancel(coffee);
  }

  @OnQueueError()
  onQueueError_1() {
    console.log('OnQueueError')
  }

  @OnQueueWaiting()
  onQueueWaiting_1() {
    console.log('OnQueueWaiting')
  }

  @OnQueueActive()
  onQueueActive_1() {
    console.log('OnQueueActive')
  }

  @OnQueueStalled()
  onQueueStalled_1() {
    console.log('OnQueueStalled')
  }

  @OnQueueProgress()
  onQueueProgress_1() {
    console.log('OnQueueProgress')
  }

  @OnQueueCompleted()
  onQueueCompleted_1() {
    console.log('OnQueueCompleted')
  }

  @OnQueueFailed()
  onQueueFailed_1() {
    console.log('OnQueueFailed')
  }

  @OnQueuePaused()
  onQueuePaused_1() {
    console.log('OnQueuePaused')
  }

  @OnQueueResumed()
  onQueueResumed_1() {
    console.log('OnQueueResumed')
  }

  @OnQueueCleaned()
  onQueueCleaned_1() {
    console.log('OnQueueCleaned')
  }

  @OnQueueDrained()
  onQueueDrained_1() {
    console.log('OnQueueDrained')
  }

  @OnQueueRemoved()
  onQueueRemoved_1() {
    console.log('OnQueueRemoved')
  }

}
