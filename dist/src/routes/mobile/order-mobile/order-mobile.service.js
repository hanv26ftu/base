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
exports.OrderMobileService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let OrderMobileService = class OrderMobileService {
    constructor(flowerRepository) {
        this.flowerRepository = flowerRepository;
    }
    async create(makeOrderDto, user) {
        let array = makeOrderDto.orderList;
        let orderArray = array.map((ele) => {
            return {
                id: uuid_1.v4(),
                userId: user.userId,
                phone: user.phone,
                addressId: makeOrderDto.addressId,
                status: "NEW",
                deliveryDate: makeOrderDto.deliveryDate,
                flowerId: ele.flowerId,
                quantity: ele.quantity,
                createdDate: this.getDate(),
                createdBy: user.fullName,
                updatedDate: this.getDate(),
                updatedBy: user.fullName
            };
        });
        const manager = typeorm_1.getManager();
        var query = "INSERT INTO melinh.Order(id, flowerId, userId, phone, addressId, quantity, status, deliveryDate, createdDate, createdBy, updatedDate, updatedBy) VALUES ";
        orderArray.forEach((c, idx) => {
            query += "('" + c.id + "','" + c.flowerId + "','" + c.userId + "','" + c.phone + "','" + c.addressId + "','" + c.quantity + "','" + c.status + "','" + c.deliveryDate + "','" + c.createdDate + "','" + c.createdBy + "','" + c.updatedDate + "','" + c.updatedBy + "')";
            if (idx < orderArray.length - 1) {
                query += " , ";
            }
        });
        console.log(query);
        return await manager.query(query);
    }
    getDate(date) {
        let d = date ? new Date(date) : new Date();
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
};
OrderMobileService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.orderMobileReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrderMobileService);
exports.OrderMobileService = OrderMobileService;
//# sourceMappingURL=order-mobile.service.js.map