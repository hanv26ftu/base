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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDashboardDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
class RegisterUserDashboardDto {
}
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], RegisterUserDashboardDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], RegisterUserDashboardDto.prototype, "fullName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], RegisterUserDashboardDto.prototype, "passWord", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], RegisterUserDashboardDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], RegisterUserDashboardDto.prototype, "address", void 0);
exports.RegisterUserDashboardDto = RegisterUserDashboardDto;
//# sourceMappingURL=register-user.dto.js.map