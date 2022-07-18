import { AuthDashboardService } from './auth-dashboard.service';
import { LoginUserDasboardDto } from './dto/login.dto';
import { RegisterUserDashboardDto } from './dto/register-user.dto';
export declare class AuthDashboardController {
    private readonly authService;
    constructor(authService: AuthDashboardService);
    register(res: any, registerUserDto: RegisterUserDashboardDto): Promise<any>;
    login(res: any, login: LoginUserDasboardDto): Promise<any>;
}
