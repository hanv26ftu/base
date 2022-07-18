"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerMobileProviders = void 0;
const constants_1 = require("../../../common/constants");
const flower_entity_1 = require("./entities/flower.entity");
exports.FlowerMobileProviders = [
    {
        provide: constants_1.Constants.flowerMobileReposistory,
        useFactory: (connection) => connection.getRepository(flower_entity_1.Flower),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=flower-mobile.providers.js.map