"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMobileProviders = void 0;
const constants_1 = require("../../../common/constants");
const order_entity_1 = require("./entities/order.entity");
exports.OrderMobileProviders = [
    {
        provide: constants_1.Constants.orderMobileReposistory,
        useFactory: (connection) => connection.getRepository(order_entity_1.Order),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=order-mobile.providers.js.map