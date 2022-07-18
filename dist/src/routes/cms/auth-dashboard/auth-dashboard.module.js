"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDashboardModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const database_module_1 = require("../../../common/database/database.module");
const constants_1 = require("../../../common/jwt/constants");
const jwt_strategy_1 = require("../../../common/jwt/jwt.strategy");
const utility_service_1 = require("../../../common/utility.service");
const auth_dashboard_controller_1 = require("./auth-dashboard.controller");
const auth_dashboard_providers_1 = require("./auth-dashboard.providers");
const auth_dashboard_service_1 = require("./auth-dashboard.service");
let AuthDashboardModule = class AuthDashboardModule {
};
AuthDashboardModule = __decorate([
    common_1.Module({ imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: constants_1.jwtConstants.expiredTime },
            }),
            database_module_1.DatabaseModule,
        ],
        controllers: [auth_dashboard_controller_1.AuthDashboardController],
        providers: [...auth_dashboard_providers_1.authDashboardProviders, auth_dashboard_service_1.AuthDashboardService, jwt_strategy_1.JwtStrategy, utility_service_1.Utility],
        exports: [auth_dashboard_service_1.AuthDashboardService, jwt_strategy_1.JwtStrategy],
    })
], AuthDashboardModule);
exports.AuthDashboardModule = AuthDashboardModule;
//# sourceMappingURL=auth-dashboard.module.js.map