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
exports.FlowerMobileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const flower_mobile_service_1 = require("./flower-mobile.service");
const get_list_flower_dto_1 = require("./dto/get-list-flower.dto");
const get_discount_flower_dto_1 = require("./dto/get-discount-flower.dto");
const get_hot_flower_dto_1 = require("./dto/get-hot-flower.dto");
const get_history_flower_dto_1 = require("./dto/get-history-flower.dto");
const get_active_flower_dto_1 = require("./dto/get-active-flower.dto");
let FlowerMobileController = class FlowerMobileController {
    constructor(flowerService) {
        this.flowerService = flowerService;
    }
    findActiveAll(request, getActiveDto) {
        return this.flowerService.findActiveAll(getActiveDto);
    }
    findAll(request, getListFlowerDto) {
        return this.flowerService.findAll(getListFlowerDto);
    }
    getDiscountList(request, getDiscountDto) {
        return this.flowerService.getDiscountList(getDiscountDto);
    }
    getHotList(request, gethotDto) {
        return this.flowerService.getHotList(gethotDto);
    }
    getHistoryList(request, getHistoryDto) {
        return this.flowerService.getHistoryList(getHistoryDto, request.user);
    }
    findOne(id) {
        return this.flowerService.findOne(id);
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getlist' }),
    common_1.Post('getlistActive'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_active_flower_dto_1.GetActiveFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "findActiveAll", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getlist' }),
    common_1.Post('getlist'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_list_flower_dto_1.GetListFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "findAll", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getDiscountList' }),
    common_1.Post('getDiscountList'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_discount_flower_dto_1.GetDiscountFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "getDiscountList", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getHotList' }),
    common_1.Post('getHotList'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_hot_flower_dto_1.GetHotFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "getHotList", null);
__decorate([
    swagger_1.ApiHeader({
        name: 'Authorization',
        description: 'Access token',
    }),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOkResponse({ description: 'Successfully getHistoryList' }),
    common_1.Post('getHistoryList'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_history_flower_dto_1.GetHistoryFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "getHistoryList", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getdetail' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowerMobileController.prototype, "findOne", null);
FlowerMobileController = __decorate([
    swagger_1.ApiTags('flower'),
    common_1.Controller('flower'),
    __metadata("design:paramtypes", [flower_mobile_service_1.FlowerMobileService])
], FlowerMobileController);
exports.FlowerMobileController = FlowerMobileController;
//# sourceMappingURL=flower-mobile.controller.js.map