import {
    Controller,
    UseGuards,
    HttpStatus,
    Response,
    Request,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Query,
    ExecutionContext,
} from '@nestjs/common';
import { AuthDashboardService } from './auth-dashboard.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
// 
import { PoliciesGuard } from "src/casl/policy.guard";
import { Action } from "src/casl/action.enum";
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import { LoginUserDasboardDto } from './dto/login.dto';
import { RegisterUserDashboardDto } from './dto/register-user.dto';


//Add resource tag for Swagger
@ApiTags('auth')
@Controller('auth')
export class AuthDashboardController {
    constructor(
        private readonly authService: AuthDashboardService
    ) { }

    // @UseGuards(JwtAuthGuard)
    @Post('register')
    public async register(@Response() res, @Body() registerUserDto: RegisterUserDashboardDto) {
        return this.authService.register(res, registerUserDto);
    }

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Response() res, @Body() login: LoginUserDasboardDto) {
        return this.authService.login(res, login);
    }
}
