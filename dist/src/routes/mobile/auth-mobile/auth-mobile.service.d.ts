import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from './dto/login.dto';
import { Utility } from "src/common/utility.service";
import { Repository } from 'typeorm';
import { MobileUser } from './entities/userMobile.entity';
import { AddressService } from '../address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthMobileService {
    private userMobileRepository;
    private readonly jwtService;
    private util;
    private addressService;
    constructor(userMobileRepository: Repository<MobileUser>, jwtService: JwtService, util: Utility, addressService: AddressService);
    register(res: any, registerUserDto: RegisterUserDto): Promise<any>;
    createToken(user: MobileUser): {
        accessToken: string;
        userInfor: {
            userId: string;
            fullName: string;
            phone: string;
        };
    };
    login(res: any, login: LoginUserDto): Promise<any>;
    findByPhone(phone: string): Promise<MobileUser | undefined>;
    create(createUserDto: RegisterUserDto): Promise<MobileUser>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<MobileUser>;
    findOne(id: string): Promise<MobileUser>;
    findAll(): Promise<any>;
}
