import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsNumber, IsOptional } from "class-validator";
import { DefaultValueDecorator } from "src/decorators/roles.decorator";
import { UserEntity } from "src/modules/user/user.entity";
import { TypeOfCoffeeE } from "../interface";

export class DescribeCoffeeDTO {

  @IsOptional()
  @IsEnum(TypeOfCoffeeE)
  // @DefaultValueDecorator(TypeOfCoffeeE.REGULAR)
  readonly typeOfCoffee?: TypeOfCoffeeE;

  @IsOptional()
  @IsNumber()
  readonly time?: number;
  
};

export class CreateCoffeeDTO extends DescribeCoffeeDTO {

  @IsOptional()
  @Type(() => UserEntity)
  readonly user?: UserEntity;
  
};
