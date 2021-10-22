import { StatusI } from "../coffee-status/interface";
import { CoffeeEntity } from "./coffee.entity";

export enum TypeOfCoffeeE {
  REGULAR = 'regular'
};

export enum StatusOfCoffeeE {
  RECORDED = 'recorded',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed' 
};

export interface RecordCoffeeI {
  coffee: CoffeeEntity,
  status: StatusI,
};
