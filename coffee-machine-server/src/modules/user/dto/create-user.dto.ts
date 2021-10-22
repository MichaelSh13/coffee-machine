import { RolesE } from "../interface";
import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @MinLength(1)
  readonly name: string;

  @IsEnum(RolesE)
  readonly role: RolesE;
  
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;

}