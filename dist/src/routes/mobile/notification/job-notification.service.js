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
exports.JobNotificationService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const constants_1 = require("../../../common/constants");
const typeorm_1 = require("typeorm");
const auth_mobile_service_1 = require("../auth-mobile/auth-mobile.service");
const notification_service_1 = require("./notification.service");
let JobNotificationService = class JobNotificationService {
    constructor(notificationRepository, authMobileService, httpService, notificationService) {
        this.notificationRepository = notificationRepository;
        this.authMobileService = authMobileService;
        this.httpService = httpService;
        this.notificationService = notificationService;
    }
    async handleCron() {
        const result = await this.authMobileService.findAll();
        let array = [];
        result.list.forEach(element => {
            if (element.firebaseId) {
                array.push({
                    to: element.firebaseId,
                    title: "Đặt hoa nhận ngay ưu đãi",
                    body: "Giảm ngay 10% cho tất cả các đơn hàng khi đặt qua APP Hoa Tươi Mê Linh từ ngày 15/07/2022 đến 15/08/2022"
                });
            }
        });
        const sendNotifi = await this.httpService.post('https://api.expo.dev/v2/push/send', array).subscribe(async (res) => {
            let notificationList = [];
            array.forEach(ele => {
                notificationList.push({
                    firebaseId: ele.to,
                    title: ele.title,
                    descripition: ele.body
                });
            });
            let body = {
                notificationList: notificationList
            };
            const result = await this.notificationService.create(body);
        }, err => {
        });
    }
};
__decorate([
    schedule_1.Cron('0 9 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobNotificationService.prototype, "handleCron", null);
JobNotificationService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.Constants.notificationReposistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        auth_mobile_service_1.AuthMobileService,
        axios_1.HttpService,
        notification_service_1.NotificationService])
], JobNotificationService);
exports.JobNotificationService = JobNotificationService;
//# sourceMappingURL=job-notification.service.js.map