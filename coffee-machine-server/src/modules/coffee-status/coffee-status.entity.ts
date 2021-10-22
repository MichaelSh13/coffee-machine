import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CoffeeEntity } from "../coffee/coffee.entity";
import { StatusOfCoffeeE } from "../coffee/interface";

@Entity()
export class CoffeeStatusEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    enum: StatusOfCoffeeE,
    default: StatusOfCoffeeE.RECORDED,
  })
  status: StatusOfCoffeeE;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  message?: string;

  @ManyToOne(() => CoffeeEntity, (coffee: CoffeeEntity) => coffee.statuses)
  coffee: CoffeeEntity; 
  
  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;
  
}