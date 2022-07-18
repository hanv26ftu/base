import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/common/database/database.module';
import { jwtConstants } from 'src/common/jwt/constants';
import { JwtStrategy } from 'src/common/jwt/jwt.strategy';
import { Utility } from 'src/common/utility.service';
import { AddressModule } from '../address/address.module';
import { AuthMobileController } from './auth-mobile.controller';
import { authMobileProviders } from './auth-mobile.providers';
import { AuthMobileService } from './auth-mobile.service';

@Module({
    imports: [
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expiredTime },
      }),
      DatabaseModule,
      AddressModule
    ],
    controllers: [AuthMobileController],
    providers: [...authMobileProviders,AuthMobileService, JwtStrategy, Utility],
    exports: [AuthMobileService, JwtStrategy],
  })
export class AuthMobileModule {}
