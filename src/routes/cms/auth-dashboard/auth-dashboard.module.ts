import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/common/database/database.module';
import { jwtConstants } from 'src/common/jwt/constants';
import { JwtStrategy } from 'src/common/jwt/jwt.strategy';
import { Utility } from 'src/common/utility.service';
import { AuthDashboardController } from './auth-dashboard.controller';
import { authDashboardProviders } from './auth-dashboard.providers';
import { AuthDashboardService } from './auth-dashboard.service';

@Module({imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiredTime },
    }),
    DatabaseModule,
  ],
  controllers: [AuthDashboardController],
  providers: [...authDashboardProviders,AuthDashboardService, JwtStrategy, Utility],
  exports: [AuthDashboardService, JwtStrategy],
})
export class AuthDashboardModule {}
