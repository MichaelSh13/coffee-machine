import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {};

  createUser(createUserData: CreateUserDto): Promise<UserEntity> {    
    return this.userRepository.save(createUserData);
  }
  
  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({ email });
  };

  async findUserById(id: string): Promise<Omit<UserEntity, 'password'>> {
    const { password, ...user } = await this.userRepository.findOneOrFail({ id });
    return user;
  };

  findUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  };

};
