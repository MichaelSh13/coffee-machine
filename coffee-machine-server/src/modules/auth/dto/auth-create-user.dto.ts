import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";
import { RolesE } from "src/modules/user/interface";

export class RegistrationCreateDTO {

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