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
exports.MobileUser = void 0;
const typeorm_1 = require("typeorm");
let MobileUser = class MobileUser {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], MobileUser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], MobileUser.prototype, "passWord", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], MobileUser.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], MobileUser.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 4000 }),
    __metadata("design:type", String)
], MobileUser.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], MobileUser.prototype, "firebaseId", void 0);
MobileUser = __decorate([
    typeorm_1.Entity({ name: 'MobileUser' })
], MobileUser);
exports.MobileUser = MobileUser;
//# sourceMappingURL=userMobile.entity.js.map