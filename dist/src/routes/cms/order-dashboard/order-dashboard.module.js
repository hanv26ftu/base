"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDashboardModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const order_dashboard_controller_1 = require("./order-dashboard.controller");
const order_dashboard_providers_1 = require("./order-dashboard.providers");
const order_dashboard_service_1 = require("./order-dashboard.service");
let OrderDashboardModule = class OrderDashboardModule {
};
OrderDashboardModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [order_dashboard_controller_1.OrderDashboardController],
        providers: [...order_dashboard_providers_1.OrderDashboardProviders, order_dashboard_service_1.OrderDashboardService],
        exports: [order_dashboard_service_1.OrderDashboardService]
    })
], OrderDashboardModule);
exports.OrderDashboardModule = OrderDashboardModule;
//# sourceMappingURL=order-dashboard.module.js.map