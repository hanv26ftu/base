"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const auth_mobile_module_1 = require("../auth-mobile/auth-mobile.module");
const job_notification_service_1 = require("./job-notification.service");
const notification_providers_1 = require("./notification.providers");
const notification_service_1 = require("./notification.service");
const notificationcontroller_1 = require("./notificationcontroller");
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, auth_mobile_module_1.AuthMobileModule, axios_1.HttpModule],
        controllers: [notificationcontroller_1.NotificationController],
        providers: [...notification_providers_1.NotificationProviders, notification_service_1.NotificationService, job_notification_service_1.JobNotificationService],
        exports: [notification_service_1.NotificationService]
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;
//# sourceMappingURL=notification.module.js.map