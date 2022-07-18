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
exports.OrderDashboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const get_list_order_dto_1 = require("./dto/get-list-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const order_dashboard_service_1 = require("./order-dashboard.service");
let OrderDashboardController = class OrderDashboardController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    findAll(request, getListOrderDto) {
        return this.orderService.findAll(getListOrderDto);
    }
    update(id, updateOrderDto) {
        return this.orderService.update(id, updateOrderDto);
    }
    remove(id) {
        return this.orderService.remove(id);
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ description: 'Successfully getlist' }),
    common_1.Post('getlist'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_list_order_dto_1.GetListOrderDto]),
    __metadata("design:returntype", void 0)
], OrderDashboardController.prototype, "findAll", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderDashboardController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderDashboardController.prototype, "remove", null);
OrderDashboardController = __decorate([
    swagger_1.ApiHeader({
        name: 'Authorization',
        description: 'Access token',
    }),
    swagger_1.ApiTags('order'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('order'),
    __metadata("design:paramtypes", [order_dashboard_service_1.OrderDashboardService])
], OrderDashboardController);
exports.OrderDashboardController = OrderDashboardController;
//# sourceMappingURL=order-dashboard.controller.js.map