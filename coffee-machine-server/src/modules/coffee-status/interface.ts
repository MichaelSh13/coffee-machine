import { CoffeeStatusEntity } from "./coffee-status.entity";

export interface StatusI extends
  Omit<CoffeeStatusEntity, (
    'updatedDate'|'createdDate'
  )> {};
