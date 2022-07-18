"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const province_providers_1 = require("./province.providers");
const province_service_1 = require("./province.service");
const provincecontroller_1 = require("./provincecontroller");
let ProvinceModule = class ProvinceModule {
};
ProvinceModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [provincecontroller_1.ProvinceController],
        providers: [...province_providers_1.ProvinceProviders, province_service_1.ProvinceService],
        exports: [province_service_1.ProvinceService]
    })
], ProvinceModule);
exports.ProvinceModule = ProvinceModule;
//# sourceMappingURL=province.module.js.map