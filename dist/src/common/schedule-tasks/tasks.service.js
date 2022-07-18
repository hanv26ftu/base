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
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const utility_service_1 = require("../utility.service");
let TasksService = TasksService_1 = class TasksService {
    constructor(util) {
        this.util = util;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async handleCron() {
    }
    handleTimeout() {
        this.logger.debug('Called once after 1 seconds');
    }
};
__decorate([
    schedule_1.Cron('00 23 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCron", null);
__decorate([
    schedule_1.Timeout(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "handleTimeout", null);
TasksService = TasksService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [utility_service_1.Utility])
], TasksService);
exports.TasksService = TasksService;
class Stage {
    constructor(no, machine, manday, order, cluster) {
        this.no = no;
        this.machine = machine;
        this.manday = manday;
        this.order = order;
        this.cluster = cluster;
    }
}
class Location {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}
//# sourceMappingURL=tasks.service.js.map