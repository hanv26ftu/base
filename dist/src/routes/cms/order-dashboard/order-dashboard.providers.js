"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDashboardProviders = void 0;
const constants_1 = require("../../../common/constants");
const order_entity_1 = require("./entities/order.entity");
exports.OrderDashboardProviders = [
    {
        provide: constants_1.Constants.orderDashboardReposistory,
        useFactory: (connection) => connection.getRepository(order_entity_1.Order),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=order-dashboard.providers.js.map