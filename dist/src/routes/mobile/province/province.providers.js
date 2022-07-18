"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceProviders = void 0;
const constants_1 = require("../../../common/constants");
const province_entity_1 = require("./entities/province.entity");
exports.ProvinceProviders = [
    {
        provide: constants_1.Constants.provinceReposistory,
        useFactory: (connection) => connection.getRepository(province_entity_1.Province),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=province.providers.js.map