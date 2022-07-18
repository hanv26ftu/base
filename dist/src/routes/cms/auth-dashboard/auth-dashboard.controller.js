"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDashboardController = void 0;
const common_1 = require("@nestjs/common");
const auth_dashboard_service_1 = require("./auth-dashboard.service");
const swagger_1 = require("@nestjs/swagger");
const policy_guard_1 = require("../../../casl/policy.guard");
const action_enum_1 = require("../../../casl/action.enum");
const jwt_auth_guard_1 = require("../../../common/jwt/jwt-auth.guard");
const login_dto_1 = require("./dto/login.dto");
const register_user_dto_1 = require("./dto/register-user.dto");
let AuthDashboardController = class AuthDashboardController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(res, registerUserDto) {
        return this.authService.register(res, registerUserDto);
    }
    async login(res, login) {
        return this.authService.login(res, login);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, register_user_dto_1.RegisterUserDashboardDto]),
    __metadata("design:returntype", Promise)
], AuthDashboardController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginUserDasboardDto]),
    __metadata("design:returntype", Promise)
], AuthDashboardController.prototype, "login", null);
AuthDashboardController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_dashboard_service_1.AuthDashboardService])
], AuthDashboardController);
exports.AuthDashboardController = AuthDashboardController;
//# sourceMappingURL=auth-dashboard.controller.js.map