"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslModule = void 0;
const common_1 = require("@nestjs/common");
const casl_ability_factory_1 = require("./casl-ability.factory");
const casl_service_1 = require("./casl.service");
const utility_service_1 = require("../common/utility.service");
let CaslModule = class CaslModule {
};
CaslModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [casl_ability_factory_1.CaslAbilityFactory, casl_service_1.CaslService, utility_service_1.Utility],
        exports: [casl_ability_factory_1.CaslAbilityFactory, casl_service_1.CaslService],
    })
], CaslModule);
exports.CaslModule = CaslModule;
//# sourceMappingURL=casl.module.js.map