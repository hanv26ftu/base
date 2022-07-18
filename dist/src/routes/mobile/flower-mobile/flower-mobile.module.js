"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerMobileModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const flower_mobile_controller_1 = require("./flower-mobile.controller");
const flower_mobile_providers_1 = require("./flower-mobile.providers");
const flower_mobile_service_1 = require("./flower-mobile.service");
let FlowerMobileModule = class FlowerMobileModule {
};
FlowerMobileModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [flower_mobile_controller_1.FlowerMobileController],
        providers: [...flower_mobile_providers_1.FlowerMobileProviders, flower_mobile_service_1.FlowerMobileService],
        exports: [flower_mobile_service_1.FlowerMobileService]
    })
], FlowerMobileModule);
exports.FlowerMobileModule = FlowerMobileModule;
//# sourceMappingURL=flower-mobile.module.js.map