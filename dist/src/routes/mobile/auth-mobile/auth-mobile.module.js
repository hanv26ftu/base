"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMobileModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const database_module_1 = require("../../../common/database/database.module");
const constants_1 = require("../../../common/jwt/constants");
const jwt_strategy_1 = require("../../../common/jwt/jwt.strategy");
const utility_service_1 = require("../../../common/utility.service");
const address_module_1 = require("../address/address.module");
const auth_mobile_controller_1 = require("./auth-mobile.controller");
const auth_mobile_providers_1 = require("./auth-mobile.providers");
const auth_mobile_service_1 = require("./auth-mobile.service");
let AuthMobileModule = class AuthMobileModule {
};
AuthMobileModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: constants_1.jwtConstants.expiredTime },
            }),
            database_module_1.DatabaseModule,
            address_module_1.AddressModule
        ],
        controllers: [auth_mobile_controller_1.AuthMobileController],
        providers: [...auth_mobile_providers_1.authMobileProviders, auth_mobile_service_1.AuthMobileService, jwt_strategy_1.JwtStrategy, utility_service_1.Utility],
        exports: [auth_mobile_service_1.AuthMobileService, jwt_strategy_1.JwtStrategy],
    })
], AuthMobileModule);
exports.AuthMobileModule = AuthMobileModule;
//# sourceMappingURL=auth-mobile.module.js.map