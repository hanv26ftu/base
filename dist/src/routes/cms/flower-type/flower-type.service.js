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
exports.FlowerTypeService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const flowerType_entity_1 = require("./entities/flowerType.entity");
let FlowerTypeService = class FlowerTypeService {
    constructor(flowerRepository) {
        this.flowerRepository = flowerRepository;
    }
    async findAll(getFlowerDto) {
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(flowerType_entity_1.FlowerType, "flower")
            .select("count(flower.id) as total")
            .getRawOne();
        const list = await manager.createQueryBuilder(flowerType_entity_1.FlowerType, "flower")
            .select("flower.id", "id")
            .addSelect("flower.flowerType", "flowerType")
            .addSelect("flower.descripition", "descripition")
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
};
FlowerTypeService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.flowerTypeReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FlowerTypeService);
exports.FlowerTypeService = FlowerTypeService;
//# sourceMappingURL=flower-type.service.js.map