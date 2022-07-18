"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerDashboardProviders = void 0;
const constants_1 = require("../../../common/constants");
const flower_entity_1 = require("./entities/flower.entity");
exports.FlowerDashboardProviders = [
    {
        provide: constants_1.Constants.flowerDashboardReposistory,
        useFactory: (connection) => connection.getRepository(flower_entity_1.Flower),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=flower-dashborad.providers.js.map