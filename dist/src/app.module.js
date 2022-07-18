"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_router_1 = require("nest-router");
const schedule_1 = require("@nestjs/schedule");
const event_emitter_1 = require("@nestjs/event-emitter");
const tasks_module_1 = require("./common/schedule-tasks/tasks.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const database_module_1 = require("./common/database/database.module");
const config_1 = require("@nestjs/config");
const cms_module_1 = require("./cms/cms.module");
const routes_1 = require("./routes");
const mobile_app_module_1 = require("./mobile-app/mobile-app.module");
const auth_mobile_module_1 = require("./routes/mobile/auth-mobile/auth-mobile.module");
const context_middelware_1 = require("./common/middleware/context.middelware");
const shared_module_1 = require("./shared/shared.module");
const address_module_1 = require("./routes/mobile/address/address.module");
const auth_dashboard_module_1 = require("./routes/cms/auth-dashboard/auth-dashboard.module");
const flower_dashboard_module_1 = require("./routes/cms/flower-dashboard/flower-dashboard.module");
const flower_mobile_module_1 = require("./routes/mobile/flower-mobile/flower-mobile.module");
const order_mobile_module_1 = require("./routes/mobile/order-mobile/order-mobile.module");
const order_dashboard_module_1 = require("./routes/cms/order-dashboard/order-dashboard.module");
const flower_type_module_1 = require("./routes/cms/flower-type/flower-type.module");
const province_module_1 = require("./routes/mobile/province/province.module");
const notification_module_1 = require("./routes/mobile/notification/notification.module");
const promotion_module_1 = require("./routes/mobile/promotion/promotion.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware, context_middelware_1.contextMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule,
            database_module_1.DatabaseModule,
            schedule_1.ScheduleModule.forRoot(),
            event_emitter_1.EventEmitterModule.forRoot({
                wildcard: false,
                delimiter: '.',
                newListener: false,
                removeListener: false,
                maxListeners: 10,
                verboseMemoryLeak: true,
                ignoreErrors: false,
            }),
            nest_router_1.RouterModule.forRoutes(routes_1.routes),
            shared_module_1.SharedModule,
            mobile_app_module_1.MobileAppModule,
            cms_module_1.CmsModule,
            auth_mobile_module_1.AuthMobileModule,
            address_module_1.AddressModule,
            flower_mobile_module_1.FlowerMobileModule,
            order_mobile_module_1.OrderMobileModule,
            province_module_1.ProvinceModule,
            notification_module_1.NotificationModule,
            promotion_module_1.PromotionModule,
            auth_dashboard_module_1.AuthDashboardModule,
            flower_dashboard_module_1.FlowerDashboardModule,
            order_dashboard_module_1.OrderDashboardModule,
            flower_type_module_1.FlowerTypeModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map