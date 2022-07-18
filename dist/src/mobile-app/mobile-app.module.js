"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAppModule = void 0;
const common_1 = require("@nestjs/common");
const mobile_app_service_1 = require("./mobile-app.service");
const mobile_app_controller_1 = require("./mobile-app.controller");
let MobileAppModule = class MobileAppModule {
};
MobileAppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [mobile_app_controller_1.MobileAppController],
        providers: [mobile_app_service_1.MobileAppService]
    })
], MobileAppModule);
exports.MobileAppModule = MobileAppModule;
//# sourceMappingURL=mobile-app.module.js.map