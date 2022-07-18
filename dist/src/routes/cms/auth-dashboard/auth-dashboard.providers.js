"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDashboardProviders = void 0;
const userDashboard_entity_1 = require("./entities/userDashboard.entity");
const constants_1 = require("../../../common/constants");
exports.authDashboardProviders = [
    {
        provide: constants_1.Constants.userDashboardReposistory,
        useFactory: (connection) => connection.getRepository(userDashboard_entity_1.DashboardUser),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=auth-dashboard.providers.js.map