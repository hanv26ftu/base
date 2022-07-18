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
exports.NotificationDto = void 0;
const common_1 = require("@nestjs/common");
class NotificationDto {
}
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "id", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "firebaseId", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "title", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "descripition", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Date)
], NotificationDto.prototype, "createdDate", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "createdBy", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", Date)
], NotificationDto.prototype, "updatedDate", void 0);
__decorate([
    common_1.Optional(),
    __metadata("design:type", String)
], NotificationDto.prototype, "updatedBy", void 0);
exports.NotificationDto = NotificationDto;
//# sourceMappingURL=notification.dto.js.map