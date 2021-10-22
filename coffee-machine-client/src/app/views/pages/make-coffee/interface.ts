export enum CoffeeTypeE {
  REGULAR = 'regular'
};

export interface CoffeeTypeI {
  key: keyof typeof CoffeeTypeE
  value: string
};

export interface OrderCoffeeFormI {
  type: CoffeeTypeE
  time: string
};

export interface OrderCoffeeI {
  typeOfCoffee: CoffeeTypeE
  time: number
};
