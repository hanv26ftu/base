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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const userMobile_entity_1 = require("../auth-mobile/entities/userMobile.entity");
const address_entity_1 = require("./entities/address.entity");
const uuid_1 = require("uuid");
const province_entity_1 = require("../province/entities/province.entity");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async create(createAddressDto) {
        createAddressDto.id = uuid_1.v4();
        console.log(createAddressDto);
        return await this.addressRepository.save(createAddressDto);
    }
    async findAll(userId) {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(address_entity_1.Address, "adress")
            .select("count(adress.id) as total")
            .where("adress.userId=:userId", { userId: userId })
            .getRawOne();
        const list = await manager.createQueryBuilder(address_entity_1.Address, "adress")
            .select("adress.id", "id")
            .addSelect("adress.fullName", "fullName")
            .addSelect("adress.phone", "phone")
            .addSelect("adress.address", "address")
            .addSelect("user.firebaseId", "firebaseId")
            .addSelect("province.id", "provinceId")
            .addSelect("province.code", "provinceCode")
            .addSelect("province.province", "province")
            .where("adress.userId=:userId", { userId: userId })
            .leftJoin(province_entity_1.Province, "province", "province.id=adress.provinceId")
            .leftJoin(userMobile_entity_1.MobileUser, "user", "user.id=adress.userId")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async findOne(id) {
        return await this.addressRepository.findOne(id);
    }
    async update(id, updateAdressDto) {
        await this.addressRepository.update(id, updateAdressDto);
        return await this.addressRepository.findOne(id);
    }
    async remove(id) {
        return await this.addressRepository.delete(id);
    }
};
AddressService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.addressReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map