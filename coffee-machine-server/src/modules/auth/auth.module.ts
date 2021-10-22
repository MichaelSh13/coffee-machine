import { Module } from '@nestjs/common';
import { JwtModule} from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { RolesGuard } from './guards/roles/roles.guard';
import { JwtAuthGuard } from './guards/jwt/jwt-guard';
import { JwtStrategy } from './guards/jwt/jwt-strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './guards/local/local.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => (
                configService.get('jwt')
            ),
        })
    ],
    providers: [
        AuthService,
        RolesGuard,
        JwtAuthGuard,
        JwtStrategy,
        LocalStrategy
    ],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule { }