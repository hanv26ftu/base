"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMobileModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const order_mobile_controller_1 = require("./order-mobile.controller");
const order_mobile_providers_1 = require("./order-mobile.providers");
const order_mobile_service_1 = require("./order-mobile.service");
let OrderMobileModule = class OrderMobileModule {
};
OrderMobileModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [order_mobile_controller_1.OrderMobileController],
        providers: [...order_mobile_providers_1.OrderMobileProviders, order_mobile_service_1.OrderMobileService],
        exports: [order_mobile_service_1.OrderMobileService]
    })
], OrderMobileModule);
exports.OrderMobileModule = OrderMobileModule;
//# sourceMappingURL=order-mobile.module.js.map