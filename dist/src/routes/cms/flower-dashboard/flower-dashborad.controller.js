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
exports.FlowerDashboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const flower_dashborad_service_1 = require("./flower-dashborad.service");
const create_flower_dto_1 = require("./dto/create-flower.dto");
const update_flower_dto_1 = require("./dto/update-flower.dto");
const get_list_flower_dto_1 = require("./dto/get-list-flower.dto");
const aws_s3_service_1 = require("../../../shared/services/aws-s3.service");
const get_signedUrl_dto_1 = require("./dto/get-signedUrl.dto");
let FlowerDashboardController = class FlowerDashboardController {
    constructor(flowerService, _s3Service) {
        this.flowerService = flowerService;
        this._s3Service = _s3Service;
    }
    create(request, createDto) {
        return this.flowerService.create(createDto);
    }
    findAll(request, getListFlowerDto) {
        return this.flowerService.findAll(getListFlowerDto);
    }
    getSignedUrl(request, getSignedUrlDto) {
        let mimetype = getSignedUrlDto.mimetype;
        return this._s3Service.getSignedUrl(mimetype);
    }
    findOne(id) {
        return this.flowerService.findOne(id);
    }
    update(id, updateDto) {
        return this.flowerService.update(id, updateDto);
    }
    remove(id) {
        return this.flowerService.remove(id);
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully create' }),
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_flower_dto_1.CreateFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "create", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getlist' }),
    common_1.Post('getlist'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_list_flower_dto_1.GetListFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "findAll", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully sign' }),
    common_1.Post('signedUrl'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_signedUrl_dto_1.GetSignedUrlDto]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "getSignedUrl", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getdetail' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "findOne", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully update' }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flower_dto_1.UpdateFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "update", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully delete' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowerDashboardController.prototype, "remove", null);
FlowerDashboardController = __decorate([
    swagger_1.ApiHeader({
        name: 'Authorization',
        description: 'Access token',
    }),
    swagger_1.ApiTags('flower'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('flower'),
    __metadata("design:paramtypes", [flower_dashborad_service_1.FlowerDashboardService, aws_s3_service_1.AwsS3Service])
], FlowerDashboardController);
exports.FlowerDashboardController = FlowerDashboardController;
//# sourceMappingURL=flower-dashborad.controller.js.map