"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionProviders = void 0;
const constants_1 = require("../../../common/constants");
const promotion_entity_1 = require("./entities/promotion.entity");
exports.PromotionProviders = [
    {
        provide: constants_1.Constants.promotionReposistory,
        useFactory: (connection) => connection.getRepository(promotion_entity_1.Promotion),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=promotion.providers.js.map