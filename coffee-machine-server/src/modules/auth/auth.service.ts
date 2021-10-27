import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcryptjs from 'bcryptjs'
import { RegistrationCreateDTO } from './dto/auth-create-user.dto';
import { JwtPayloadI, SuccessRegistration } from './interface';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthService {  
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    
    if ( user && await bcryptjs.compare(password, user.password) ) {      
      return user;
    }

    return null;
  }

  async login(user: UserEntity) {
    const payload = {
      name: user.name,
      sub: user.id,
      role: user.role,
    } as JwtPayloadI;

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async registerUser({ password, ...registrationCreateData }: RegistrationCreateDTO): Promise<SuccessRegistration> {
    const salt = await bcryptjs.genSalt(Number.parseInt(this.configService.get('saltRaound')));
    const passwordHash = await bcryptjs.hash(password, salt);
    await this.usersService.createUser({ password: passwordHash, ...registrationCreateData });
    
    return { data: 'success' };
  }

}
