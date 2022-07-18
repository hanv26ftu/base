"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerTypeProviders = void 0;
const constants_1 = require("../../../common/constants");
const flowerType_entity_1 = require("./entities/flowerType.entity");
exports.FlowerTypeProviders = [
    {
        provide: constants_1.Constants.flowerTypeReposistory,
        useFactory: (connection) => connection.getRepository(flowerType_entity_1.FlowerType),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=flower-type.providers.js.map