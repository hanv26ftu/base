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
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const promotion_entity_1 = require("./entities/promotion.entity");
let PromotionService = class PromotionService {
    constructor(promotionRepository) {
        this.promotionRepository = promotionRepository;
    }
    async findAll() {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(promotion_entity_1.Promotion, "promotion")
            .select("count(promotion.id) as total")
            .getRawOne();
        const list = await manager.createQueryBuilder(promotion_entity_1.Promotion, "promotion")
            .select("promotion.id", "id")
            .addSelect("promotion.descripition", "descripition")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async findOne(id) {
        return await this.promotionRepository.findOne(id);
    }
    async remove(id) {
        return await this.promotionRepository.delete(id);
    }
};
PromotionService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.promotionReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PromotionService);
exports.PromotionService = PromotionService;
//# sourceMappingURL=promotion.service.js.map