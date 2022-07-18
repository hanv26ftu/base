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
exports.FlowerMobileService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const flower_entity_1 = require("./entities/flower.entity");
const order_entity_1 = require("../order-mobile/entities/order.entity");
let FlowerMobileService = class FlowerMobileService {
    constructor(flowerRepository) {
        this.flowerRepository = flowerRepository;
    }
    async findAll(getListFlowerDto) {
        let category = getListFlowerDto.category;
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("count(flower.id) as total")
            .where("flower.category=:category", { category: category })
            .andWhere("flower.status=:status", { status: 'ACTIVE' })
            .getRawOne();
        const list = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("flower.id", "id")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .addSelect("flower.status", "status")
            .where("flower.category=:category", { category: category })
            .andWhere("flower.status=:status", { status: 'ACTIVE' })
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async findActiveAll(getActiveDto) {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("count(flower.id) as total")
            .andWhere("flower.status=:status", { status: 'ACTIVE' })
            .getRawOne();
        const list = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("flower.id", "id")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .addSelect("flower.status", "status")
            .addSelect(("((flower.oldPrice-flower.currentPrice)/flower.oldPrice)*100"), "discountPercent")
            .where("flower.status=:status", { status: 'ACTIVE' })
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async getDiscountList(getDiscountrDto) {
        const manager = typeorm_1.getManager();
        const totalDetails = 10;
        const list = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("flower.id", "id")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect(("((flower.oldPrice-flower.currentPrice)/flower.oldPrice)*100"), "discountPercent")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .addSelect("flower.status", "status")
            .andWhere("flower.status=:status", { status: 'ACTIVE' })
            .orderBy('discountPercent', 'DESC')
            .limit(10)
            .offset(0)
            .getRawMany();
        return { total: totalDetails, list: list };
    }
    async getHotList(getHotFlowerDto) {
        const manager = typeorm_1.getManager();
        const totalDetails = 10;
        const list = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("flower.id", "id")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect(("((flower.oldPrice-flower.currentPrice)/flower.oldPrice)*100"), "discountPercent")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .addSelect("SUM(order.quantity)", "totalOrder")
            .leftJoin(order_entity_1.Order, "order", "flower.id=order.flowerId")
            .where("flower.status=:status", { status: 'ACTIVE' })
            .groupBy("flower.id")
            .addGroupBy("flower.title")
            .addGroupBy("flower.avaUrl")
            .orderBy('totalOrder', 'DESC')
            .limit(10)
            .offset(0)
            .getRawMany();
        return { total: totalDetails, list: list };
    }
    async getHistoryList(getHistoryFlowerDto, user) {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("count(flower.id) as total")
            .leftJoin(order_entity_1.Order, "order", "flower.id=order.flowerId")
            .where("flower.status=:status", { status: 'ACTIVE' })
            .andWhere("order.userId=:userId", { userId: user.userId })
            .getRawOne();
        const list = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("flower.id", "id")
            .addSelect("flower.title", "title")
            .addSelect("flower.avaUrl", "avaUrl")
            .addSelect("flower.imageList", "imageList")
            .addSelect("flower.currentPrice", "currentPrice")
            .addSelect("flower.oldPrice", "oldPrice")
            .addSelect(("((flower.oldPrice-flower.currentPrice)/flower.oldPrice)*100"), "discountPercent")
            .addSelect("flower.category", "category")
            .addSelect("flower.description", "description")
            .leftJoin(order_entity_1.Order, "order", "flower.id=order.flowerId")
            .where("flower.status=:status", { status: 'ACTIVE' })
            .andWhere("order.userId=:userId", { userId: user.userId })
            .getRawMany();
        return { total: totalDetails, list: list };
    }
    async findOne(id) {
        return await this.flowerRepository.findOne(id);
    }
    async remove(id) {
        return await this.flowerRepository.delete(id);
    }
};
FlowerMobileService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.flowerMobileReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FlowerMobileService);
exports.FlowerMobileService = FlowerMobileService;
//# sourceMappingURL=flower-mobile.service.js.map