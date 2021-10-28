import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { RegistrationCreateDTO } from './dto/auth-create-user.dto';
import { LocalAuthGuard } from './guards/local/local.guard';
import { SuccessRegistration } from './interface';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/roles.decorator';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('registration')
  registerUser(
    @Body() registrationCreateData: RegistrationCreateDTO
  ): Promise<SuccessRegistration> {   
    return this.authService.registerUser(registrationCreateData);
  }
  
};
