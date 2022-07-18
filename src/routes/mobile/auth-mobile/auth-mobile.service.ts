import { Injectable, HttpException, HttpStatus, Inject, ExecutionContext } from '@nestjs/common';
// import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from './dto/login.dto';
import { Utility } from "src/common/utility.service";
import { getManager, Repository } from 'typeorm';
import { jwtConstants } from 'src/common/jwt/constants';
import { Constants } from "src/common/constants";
import { MobileUser } from './entities/userMobile.entity';
import { v4 as uuidv4 } from 'uuid';
import { AddressService } from '../address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class AuthMobileService {
    constructor(
        @Inject(Constants.userMobileReposistory)
        private userMobileRepository: Repository<MobileUser>,
        private readonly jwtService: JwtService,
        private util: Utility,
        private addressService: AddressService
        ) { }

    async register(res: any, registerUserDto: RegisterUserDto) {
       
        const user: MobileUser = await this.findByPhone(registerUserDto.phone);
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
                provinceId: registerUserDto.provinceId,
                address: result.address,
                phone:result.phone
            }
            await this.addressService.create(payload)
            const token = this.createToken(result);
            return res.status(HttpStatus.OK).json({ data: token });
        }

    }

    createToken(user: MobileUser) {
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



    async login(res: any, login: LoginUserDto) {
        let user: MobileUser = await this.findByPhone(login.phone);
        if (!user) {
            throw new HttpException('User Not Found'
                , HttpStatus.BAD_REQUEST);
        }
        const success = user.passWord==this.util.sha1(login.passWord);
        if (success) {
            //debug('start getting the token');
            const token = this.createToken(user);
            if(login.firebaseId&&login.firebaseId!=user.firebaseId){
                let newUser: MobileUser = {
                    ...user,
                    firebaseId:login.firebaseId
                }
                const update: MobileUser = await this.update(user.id,newUser);
            }

            //debug(token.accessToken);
            return res.status(HttpStatus.OK).json({ data: token });
        } else {
            throw new HttpException('Password Is Incorrect'
                , HttpStatus.BAD_REQUEST);
        }
    }

    async findByPhone(phone: string): Promise<MobileUser | undefined> {
        return await getManager().createQueryBuilder(MobileUser, "user")
            .where("user.phone=:phone", { phone: phone })
            .getOne();
    }
    
    async create(createUserDto: RegisterUserDto): Promise<MobileUser> {
        createUserDto.passWord = this.util.sha1(createUserDto.passWord);
        createUserDto.id = uuidv4();
        return await this.userMobileRepository.save(createUserDto);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<MobileUser> {
        await this.userMobileRepository.update(id, updateUserDto);
        return await this.userMobileRepository.findOne(id);
      }

 async findOne(id: string): Promise<MobileUser> {
    return await this.userMobileRepository.findOne(id);
  }

  async findAll(): Promise<any> {

    const manager = getManager();
    const totalDetails = await manager.createQueryBuilder(MobileUser, "mobileUser")
      .select("count(mobileUser.id) as total")
      .getRawOne();
    const list = await manager.createQueryBuilder(MobileUser, "mobileUser")
      .select("mobileUser.firebaseId", "firebaseId")
      .addSelect("mobileUser.id", "userId")
      .getRawMany();
    return { total: parseInt(totalDetails.total), list: list };
  }

}
