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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./entities/notification.entity");
const uuid_1 = require("uuid");
const auth_mobile_service_1 = require("../auth-mobile/auth-mobile.service");
let NotificationService = class NotificationService {
    constructor(notificationRepository, authMobileService) {
        this.notificationRepository = notificationRepository;
        this.authMobileService = authMobileService;
    }
    async findAll(user) {
        const users = await this.authMobileService.findOne(user.userId);
        const manager = typeorm_1.getManager();
        const totalDetails = await manager.createQueryBuilder(notification_entity_1.Notification, "notification")
            .select("count(notification.id) as total")
            .where("notification.firebaseId=:firebaseId", { firebaseId: users.firebaseId })
            .getRawOne();
        const list = await manager.createQueryBuilder(notification_entity_1.Notification, "notification")
            .select("notification.id", "id")
            .addSelect("notification.firebaseId", "firebaseId")
            .addSelect("notification.title", "title")
            .addSelect("notification.descripition", "descripition")
            .where("notification.firebaseId=:firebaseId", { firebaseId: users.firebaseId })
            .orderBy("notification.createdDate", 'DESC')
            .limit(10)
            .offset(0)
            .getRawMany();
        return { total: parseInt(totalDetails.total), list: list };
    }
    async findOne(id) {
        return await this.notificationRepository.findOne(id);
    }
    async remove(id) {
        return await this.notificationRepository.delete(id);
    }
    async create(notificationDto) {
        let array = notificationDto.notificationList;
        let orderArray = array.map((ele) => {
            return {
                id: uuid_1.v4(),
                firebaseId: ele.firebaseId,
                title: ele.title,
                descripition: ele.descripition,
                createdDate: this.getDate(),
                createdBy: 'ADMIN',
                updatedDate: this.getDate(),
                updatedBy: 'ADMIN',
            };
        });
        const manager = typeorm_1.getManager();
        var query = "INSERT INTO melinh.Notification(id, firebaseId, title, descripition, createdDate, createdBy, updatedDate, updatedBy) VALUES ";
        orderArray.forEach((c, idx) => {
            query += "('" + c.id + "','" + c.firebaseId + "','" + c.title + "','" + c.descripition + "','" + c.createdDate + "','" + c.createdBy + "','" + c.updatedDate + "','" + c.updatedBy + "')";
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
NotificationService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.notificationReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        auth_mobile_service_1.AuthMobileService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map