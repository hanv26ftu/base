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
exports.FlowerDashboardService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const flower_entity_1 = require("./entities/flower.entity");
const uuid_1 = require("uuid");
const order_entity_1 = require("../order-dashboard/entities/order.entity");
let FlowerDashboardService = class FlowerDashboardService {
    constructor(flowerRepository) {
        this.flowerRepository = flowerRepository;
    }
    async create(createDto) {
        createDto.id = uuid_1.v4();
        createDto.status = createDto.status ? createDto.status : "ACTIVE";
        createDto.createdDate = new Date();
        createDto.updatedDate = new Date();
        createDto.createdBy = "ADMIN";
        createDto.updatedBy = "ADMIN";
        return await this.flowerRepository.save(createDto);
    }
    async findAll(getListFlowerDto) {
        let category = getListFlowerDto.category;
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(flower_entity_1.Flower, "flower")
            .select("count(flower.id) as total")
            .where("flower.category=:category", { category: category })
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
            .addSelect("SUM(order.quantity)", "totalOrder")
            .leftJoin(order_entity_1.Order, "order", "flower.id=order.flowerId")
            .where("flower.category=:category", { category: category })
            .groupBy("flower.id")
            .addGroupBy("flower.title")
            .addGroupBy("flower.avaUrl")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async findOne(id) {
        return await this.flowerRepository.findOne(id);
    }
    async update(id, updateDto) {
        await this.flowerRepository.update(id, updateDto);
        return await this.flowerRepository.findOne(id);
    }
    async remove(id) {
        return await this.flowerRepository.delete(id);
    }
};
FlowerDashboardService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.flowerDashboardReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FlowerDashboardService);
exports.FlowerDashboardService = FlowerDashboardService;
//# sourceMappingURL=flower-dashborad.service.js.map