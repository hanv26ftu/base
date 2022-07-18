import { AuthMobileService } from './auth-mobile.service';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from "./dto/register-user.dto";
export declare class AuthMobileController {
    private readonly authService;
    constructor(authService: AuthMobileService);
    register(res: any, registerUserDto: RegisterUserDto): Promise<any>;
    login(res: any, login: LoginUserDto): Promise<any>;
}
