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
exports.CreateFlowerDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFlowerDto {
}
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "avaUrl", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "imageList", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Number)
], CreateFlowerDto.prototype, "currentPrice", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Number)
], CreateFlowerDto.prototype, "oldPrice", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "category", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "typeId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "description", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "status", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Date)
], CreateFlowerDto.prototype, "createdDate", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "createdBy", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Date)
], CreateFlowerDto.prototype, "updatedDate", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], CreateFlowerDto.prototype, "updatedBy", void 0);
exports.CreateFlowerDto = CreateFlowerDto;
//# sourceMappingURL=create-flower.dto.js.map