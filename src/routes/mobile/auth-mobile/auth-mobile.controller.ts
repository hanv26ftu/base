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
import { AuthMobileService } from './auth-mobile.service';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from "./dto/register-user.dto";
import { ApiHeader, ApiTags } from '@nestjs/swagger';
// 
import { PoliciesGuard } from "src/casl/policy.guard";
import { Action } from "src/casl/action.enum";
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';


//Add resource tag for Swagger
@ApiTags('auth')
@Controller('auth')
export class AuthMobileController {
    constructor(
        private readonly authService: AuthMobileService
    ) { }

    // @UseGuards(JwtAuthGuard)
    @Post('register')
    public async register(@Response() res, @Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(res, registerUserDto);
    }

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Response() res, @Body() login: LoginUserDto) {
        return this.authService.login(res, login);
    }
}
