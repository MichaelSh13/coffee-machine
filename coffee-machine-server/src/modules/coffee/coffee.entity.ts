import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CoffeeStatusEntity } from "../coffee-status/coffee-status.entity";
import { UserEntity } from "../user/user.entity";
import { TypeOfCoffeeE } from "./interface";

@Entity()
export class CoffeeEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: 'time',
    nullable: true,
  })
  time: Date|null;
  
  @Column({
    enum: TypeOfCoffeeE,
    default: TypeOfCoffeeE.REGULAR,
  })
  typeOfCoffee: TypeOfCoffeeE;

  @OneToMany(() => CoffeeStatusEntity, (status: CoffeeStatusEntity) => status.coffee)
  statuses: CoffeeStatusEntity[]; 

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.coffees)
  user: UserEntity; 
  
  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;
  
}