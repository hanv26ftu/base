"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerTypeModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../../common/database/database.module");
const flower_type_controller_1 = require("./flower-type.controller");
const flower_type_providers_1 = require("./flower-type.providers");
const flower_type_service_1 = require("./flower-type.service");
let FlowerTypeModule = class FlowerTypeModule {
};
FlowerTypeModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [flower_type_controller_1.FlowerTypeController],
        providers: [...flower_type_providers_1.FlowerTypeProviders, flower_type_service_1.FlowerTypeService],
        exports: [flower_type_service_1.FlowerTypeService]
    })
], FlowerTypeModule);
exports.FlowerTypeModule = FlowerTypeModule;
//# sourceMappingURL=flower-type.module.js.map