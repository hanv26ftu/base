"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const promotion_providers_1 = require("./promotion.providers");
const promotion_service_1 = require("./promotion.service");
const promotioncontroller_1 = require("./promotioncontroller");
let PromotionModule = class PromotionModule {
};
PromotionModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [promotioncontroller_1.PromotionController],
        providers: [...promotion_providers_1.PromotionProviders, promotion_service_1.PromotionService],
        exports: [promotion_service_1.PromotionService]
    })
], PromotionModule);
exports.PromotionModule = PromotionModule;
//# sourceMappingURL=promotion.module.js.map