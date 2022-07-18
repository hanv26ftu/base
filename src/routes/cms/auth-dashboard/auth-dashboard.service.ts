import { Injectable, HttpException, HttpStatus, Inject, ExecutionContext } from '@nestjs/common';
// import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDashboardDto } from "./dto/register-user.dto";
import { LoginUserDasboardDto } from './dto/login.dto';
import { Utility } from "src/common/utility.service";
import { getManager, Repository } from 'typeorm';
import { jwtConstants } from 'src/common/jwt/constants';
import { Constants } from "src/common/constants";
import { DashboardUser } from './entities/userDashboard.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthDashboardService {
    constructor(
        @Inject(Constants.userDashboardReposistory)
        private userRepository: Repository<DashboardUser>,
        private readonly jwtService: JwtService,
        private util: Utility
        ) { }

    async register(res: any, registerUserDto: RegisterUserDashboardDto) {
       
        const user: DashboardUser = await this.findByPhone(registerUserDto.phone);
        if (user) {
            throw new HttpException('User is existed'
                , HttpStatus.BAD_REQUEST);
        }
        const result = await this.create(registerUserDto);
        
        // return res.status(HttpStatus.OK).json({ data: result });
        if(result){
            let payload = {
                id:uuidv4(),
                userId:result.id,
                fullName: result.fullName,
                address: result.address,
                phone:result.phone
            }
            const token = this.createToken(result);
            return res.status(HttpStatus.OK).json({ data: token });
        }

    }

    createToken(user: DashboardUser) {
        //debug('get the expiration');
        const expiresIn = jwtConstants.expiredTime;
        //debug('sign the token');
        //debug(user);
        const payload = {
            userId: user.id,
            fullName: user.fullName,
            phone:user.phone
        };
        const accessToken = this.jwtService.sign(
            payload
        );
        //debug('return the token');
        //debug(accessToken);
        const {...userInfor } = payload
        // const { roleId, ...userInfor } = payload
        return {
            // expiresIn,
            accessToken,
            userInfor
        };
    }



    async login(res: any, login: LoginUserDasboardDto) {
        const user: DashboardUser = await this.findByPhone(login.phone);
        if (!user) {
            throw new HttpException('User Not Found'
                , HttpStatus.BAD_REQUEST);
        }
        const success = user.passWord==this.util.sha1(login.passWord);
        if (success) {
            //debug('start getting the token');
            const token = this.createToken(user);
            //debug(token.accessToken);
            return res.status(HttpStatus.OK).json({ data: token });
        } else {
            throw new HttpException('Password Is Incorrect'
                , HttpStatus.BAD_REQUEST);
        }
    }

    async findByPhone(phone: string): Promise<DashboardUser | undefined> {
        return await getManager().createQueryBuilder(DashboardUser, "user")
            .where("user.phone=:phone", { phone: phone })
            .getOne();
    }
    
    async create(createUserDto: RegisterUserDashboardDto): Promise<DashboardUser> {
        createUserDto.passWord = this.util.sha1(createUserDto.passWord);
        createUserDto.id = uuidv4();
        return await this.userRepository.save(createUserDto);
    }

}
