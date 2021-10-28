import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CoffeeEntity } from "../coffee/models/coffee.entity";
import { RolesE } from "./interface";

@Entity()
export class UserEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column({
    type: "enum",
    enum: RolesE,
    default: RolesE.CLIENT,
  })
  role: RolesE;
  
  @Column({
    type: "varchar",
    unique: true,
  })
  email: string;

  @Column("varchar", { length: 200 })
  name: string;
  
  @Column("varchar")
  password: string;

  @OneToMany(() => CoffeeEntity, (coffee: CoffeeEntity) => coffee.user)
  coffees: CoffeeEntity[];
  
  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;
  
}