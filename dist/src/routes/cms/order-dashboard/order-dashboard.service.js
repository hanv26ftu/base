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
exports.OrderDashboardService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const flower_entity_1 = require("../flower-dashboard/entities/flower.entity");
const userMobile_entity_1 = require("../../mobile/auth-mobile/entities/userMobile.entity");
const address_entity_1 = require("../../mobile/address/entities/address.entity");
const province_entity_1 = require("../../mobile/province/entities/province.entity");
let OrderDashboardService = class OrderDashboardService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async findAll(getListOrderDto) {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(order_entity_1.Order, "Order")
            .select("count(Order.id) as total")
            .getRawOne();
        const list = await manager.createQueryBuilder(order_entity_1.Order, "Order")
            .select("Order.id", "id")
            .addSelect("Order.quantity", "quantity")
            .addSelect("Order.status", "status")
            .addSelect("Order.deliveryDate", "deliveryDate")
            .addSelect("Order.createdDate", "createdDate")
            .addSelect("Order.createdBy", "createdBy")
            .addSelect("Order.updatedDate", "updatedDate")
            .addSelect("flower.id", "flowerId")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .addSelect("flower.status", "statusFlower")
            .addSelect("MobileUser.id", "userId")
            .addSelect("MobileUser.fullName", "orderName")
            .addSelect("MobileUser.phone", "orderPhone")
            .addSelect("MobileUser.address", "orderAddress")
            .addSelect("Address.id", "addressId")
            .addSelect("Address.fullName", "recieverName")
            .addSelect("Address.phone", "recieverPhone")
            .addSelect("Address.address", "recieverAddress")
            .addSelect("province.id", "provinceId")
            .addSelect("province.code", "provinceCode")
            .addSelect("province.province", "province")
            .leftJoin(flower_entity_1.Flower, "flower", "flower.id=Order.flowerId")
            .leftJoin(userMobile_entity_1.MobileUser, "MobileUser", "MobileUser.id=Order.userId")
            .leftJoin(address_entity_1.Address, "Address", "Address.id=Order.addressId")
            .leftJoin(province_entity_1.Province, "province", "province.id=Address.provinceId")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    getDate(date) {
        let d = date ? new Date(date) : new Date();
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    async findOne(id) {
        return await this.orderRepository.findOne(id);
    }
    async update(id, updateOrderDto) {
        await this.orderRepository.update(id, updateOrderDto);
        return await this.orderRepository.findOne(id);
    }
    async remove(id) {
        return await this.orderRepository.delete(id);
    }
};
OrderDashboardService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.orderDashboardReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrderDashboardService);
exports.OrderDashboardService = OrderDashboardService;
//# sourceMappingURL=order-dashboard.service.js.map