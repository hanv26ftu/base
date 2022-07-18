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
exports.ProvinceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const province_service_1 = require("./province.service");
let ProvinceController = class ProvinceController {
    constructor(provinceService) {
        this.provinceService = provinceService;
    }
    findAll(request) {
        return this.provinceService.findAll();
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "findAll", null);
ProvinceController = __decorate([
    swagger_1.ApiTags('province'),
    common_1.Controller('province'),
    __metadata("design:paramtypes", [province_service_1.ProvinceService])
], ProvinceController);
exports.ProvinceController = ProvinceController;
//# sourceMappingURL=provincecontroller.js.map