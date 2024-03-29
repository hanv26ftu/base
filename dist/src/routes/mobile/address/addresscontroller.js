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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const address_service_1 = require("./address.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    create(request, createAddressDto) {
        console.log(request.user);
        createAddressDto.userId = request.user.userId;
        console.log(createAddressDto);
        return this.addressService.create(createAddressDto);
    }
    findAll(request) {
        console.log(request.user);
        return this.addressService.findAll(request.user.userId);
    }
    findOne(id) {
        return this.addressService.findOne(id);
    }
    update(id, updateAddressDto) {
        return this.addressService.update(id, updateAddressDto);
    }
    remove(id) {
        return this.addressService.remove(id);
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "create", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findAll", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findOne", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "remove", null);
AddressController = __decorate([
    swagger_1.ApiHeader({
        name: 'Authorization',
        description: 'Access token',
    }),
    swagger_1.ApiTags('address'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=addresscontroller.js.map