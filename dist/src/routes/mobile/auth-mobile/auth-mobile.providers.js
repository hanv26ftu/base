"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMobileProviders = void 0;
const userMobile_entity_1 = require("./entities/userMobile.entity");
const constants_1 = require("../../../common/constants");
exports.authMobileProviders = [
    {
        provide: constants_1.Constants.userMobileReposistory,
        useFactory: (connection) => connection.getRepository(userMobile_entity_1.MobileUser),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=auth-mobile.providers.js.map