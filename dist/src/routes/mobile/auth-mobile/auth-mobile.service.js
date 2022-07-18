"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMobileService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const utility_service_1 = require("../../../common/utility.service");
const typeorm_1 = require("typeorm");
const constants_1 = require("../../../common/jwt/constants");
const constants_2 = require("../../../common/constants");
const userMobile_entity_1 = require("./entities/userMobile.entity");
const uuid_1 = require("uuid");
const address_service_1 = require("../address/address.service");
let AuthMobileService = class AuthMobileService {
    constructor(userMobileRepository, jwtService, util, addressService) {
        this.userMobileRepository = userMobileRepository;
        this.jwtService = jwtService;
        this.util = util;
        this.addressService = addressService;
    }
    async register(res, registerUserDto) {
        const user = await this.findByPhone(registerUserDto.phone);
        if (user) {
            throw new common_1.HttpException('User is existed', common_1.HttpStatus.BAD_REQUEST);
        }
        const result = await this.create(registerUserDto);
        if (result) {
            let payload = {
                id: uuid_1.v4(),
                userId: result.id,
                fullName: result.fullName,
                provinceId: registerUserDto.provinceId,
                address: result.address,
                phone: result.phone
            };
            await this.addressService.create(payload);
            const token = this.createToken(result);
            return res.status(common_1.HttpStatus.OK).json({ data: token });
        }
    }
    createToken(user) {
        const expiresIn = constants_1.jwtConstants.expiredTime;
        const payload = {
            userId: user.id,
            fullName: user.fullName,
            phone: user.phone
        };
        const accessToken = this.jwtService.sign(payload);
        const userInfor = __rest(payload, []);
        return {
            accessToken,
            userInfor
        };
    }
    async login(res, login) {
        let user = await this.findByPhone(login.phone);
        if (!user) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        const success = user.passWord == this.util.sha1(login.passWord);
        if (success) {
            const token = this.createToken(user);
            if (login.firebaseId && login.firebaseId != user.firebaseId) {
                let newUser = Object.assign(Object.assign({}, user), { firebaseId: login.firebaseId });
                const update = await this.update(user.id, newUser);
            }
            return res.status(common_1.HttpStatus.OK).json({ data: token });
        }
        else {
            throw new common_1.HttpException('Password Is Incorrect', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByPhone(phone) {
        return await typeorm_1.getManager().createQueryBuilder(userMobile_entity_1.MobileUser, "user")
            .where("user.phone=:phone", { phone: phone })
            .getOne();
    }
    async create(createUserDto) {
        createUserDto.passWord = this.util.sha1(createUserDto.passWord);
        createUserDto.id = uuid_1.v4();
        return await this.userMobileRepository.save(createUserDto);
    }
    async update(id, updateUserDto) {
        await this.userMobileRepository.update(id, updateUserDto);
        return await this.userMobileRepository.findOne(id);
    }
    async findOne(id) {
        return await this.userMobileRepository.findOne(id);
    }
    async findAll() {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(userMobile_entity_1.MobileUser, "mobileUser")
            .select("count(mobileUser.id) as total")
            .getRawOne();
        const list = await manager.createQueryBuilder(userMobile_entity_1.MobileUser, "mobileUser")
            .select("mobileUser.firebaseId", "firebaseId")
            .addSelect("mobileUser.id", "userId")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
};
AuthMobileService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_2.Constants.userMobileReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService,
        utility_service_1.Utility,
        address_service_1.AddressService])
], AuthMobileService);
exports.AuthMobileService = AuthMobileService;
//# sourceMappingURL=auth-mobile.service.js.map