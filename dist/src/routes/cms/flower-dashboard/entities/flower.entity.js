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
exports.Flower = void 0;
const typeorm_1 = require("typeorm");
let Flower = class Flower {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Flower.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 2000 }),
    __metadata("design:type", String)
], Flower.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Flower.prototype, "avaUrl", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 4000 }),
    __metadata("design:type", String)
], Flower.prototype, "imageList", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], Flower.prototype, "currentPrice", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], Flower.prototype, "oldPrice", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Flower.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Flower.prototype, "typeId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 4000 }),
    __metadata("design:type", String)
], Flower.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Flower.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Flower.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Flower.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Flower.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Flower.prototype, "updatedBy", void 0);
Flower = __decorate([
    typeorm_1.Entity({ name: 'Flower' })
], Flower);
exports.Flower = Flower;
//# sourceMappingURL=flower.entity.js.map