import { Controller, Get, Req } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
  ) {}

  @Get()
  async getUserData(
    @Req() { user }: { user: UserEntity }
  ) {
    const result = await this.userService.findUserById(user.id)
    return result
  }
  
}
