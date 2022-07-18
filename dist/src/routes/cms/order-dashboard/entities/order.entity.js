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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
let Order = class Order {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "flowerId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "addressId", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Order.prototype, "deliveryDate", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Order.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Order.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "updatedBy", void 0);
Order = __decorate([
    typeorm_1.Entity({ name: 'Order' })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map