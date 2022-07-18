import { JwtService } from '@nestjs/jwt';
import { RegisterUserDashboardDto } from "./dto/register-user.dto";
import { LoginUserDasboardDto } from './dto/login.dto';
import { Utility } from "src/common/utility.service";
import { Repository } from 'typeorm';
import { DashboardUser } from './entities/userDashboard.entity';
export declare class AuthDashboardService {
    private userRepository;
    private readonly jwtService;
    private util;
    constructor(userRepository: Repository<DashboardUser>, jwtService: JwtService, util: Utility);
    register(res: any, registerUserDto: RegisterUserDashboardDto): Promise<any>;
    createToken(user: DashboardUser): {
        accessToken: string;
        userInfor: {
            userId: string;
            fullName: string;
            phone: string;
        };
    };
    login(res: any, login: LoginUserDasboardDto): Promise<any>;
    findByPhone(phone: string): Promise<DashboardUser | undefined>;
    create(createUserDto: RegisterUserDashboardDto): Promise<DashboardUser>;
}
