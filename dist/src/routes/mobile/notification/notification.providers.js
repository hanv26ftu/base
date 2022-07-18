"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationProviders = void 0;
const constants_1 = require("../../../common/constants");
const notification_entity_1 = require("./entities/notification.entity");
exports.NotificationProviders = [
    {
        provide: constants_1.Constants.notificationReposistory,
        useFactory: (connection) => connection.getRepository(notification_entity_1.Notification),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=notification.providers.js.map