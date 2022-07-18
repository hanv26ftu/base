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
exports.Utility = void 0;
const crypto = require('crypto');
const common_1 = require("@nestjs/common");
let Utility = class Utility {
    constructor() {
        this.sumReducer = (accumulator, currentValue) => accumulator + currentValue;
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    sha1(data) {
        var generator = crypto.createHash('sha1');
        generator.update(data);
        return generator.digest('hex');
    }
    enSha1(data) {
        var generator = crypto.createHash('sha1');
        generator.update(data);
        return generator.digest('hex');
    }
    today() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var strMonth = month < 10 ? `0${month}` : `${month}`;
        var strDay = day < 10 ? `0${day}` : `${day}`;
        return year + '-' + strMonth + '-' + strDay;
    }
    tomorrow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        var year = tomorrow.getFullYear();
        var month = tomorrow.getMonth() + 1;
        var day = tomorrow.getDate();
        var strMonth = month < 10 ? `0${month}` : `${month}`;
        var strDay = day < 10 ? `0${day}` : `${day}`;
        return year + '-' + strMonth + '-' + strDay;
    }
    now() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var strMonth = month < 10 ? `0${month}` : `${month}`;
        var strDay = day < 10 ? `0${day}` : `${day}`;
        var strHour = hour < 10 ? `0${hour}` : `${hour}`;
        var strMinute = minute < 10 ? `0${minute}` : `${minute}`;
        var strSecond = second < 10 ? `0${second}` : `${second}`;
        return year + '-' + strMonth + '-' + strDay + ' ' + strHour + ':' + strMinute + ':' + strSecond;
    }
    diff_minutes(d1, d2) {
        return (d2.getTime() - d1.getTime()) / 60000;
    }
    getLastDateByMonth(month, year) {
        var isExtraYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return '31';
            case 2:
                return isExtraYear ? '29' : '28';
            default:
                return '30';
        }
    }
    calcTimekeepingMinutes(sBeginTime, sFinishTime) {
        const beginTime = new Date(sBeginTime);
        const finishTime = new Date(sFinishTime);
        const year = beginTime.getFullYear().toString();
        const month = beginTime.getMonth() + 1 > 9 ? (beginTime.getMonth() + 1).toString() : '0' + (beginTime.getMonth() + 1).toString();
        const day = beginTime.getDay() > 9 ? beginTime.getDay().toString() : '0' + beginTime.getDay().toString();
        const formattedDate = year + '-' + month + '-' + day;
        var listBreakTimes = [{
                start: new Date(formattedDate + ' 12:00:00'),
                end: new Date(formattedDate + ' 12:30:00')
            }, {
                start: new Date(formattedDate + ' 18:00:00'),
                end: new Date(formattedDate + ' 18:30:00')
            }];
        var workingMinutes = this.diff_minutes(beginTime, finishTime);
        listBreakTimes.forEach(t => {
            if (t.start.getTime() >= beginTime.getTime() && finishTime.getTime() >= t.end.getTime()) {
                workingMinutes -= this.diff_minutes(t.start, t.end);
            }
            else if (t.start.getTime() < beginTime.getTime() && t.end.getTime() > beginTime.getTime() && t.end.getTime() < finishTime.getTime()) {
                workingMinutes += this.diff_minutes(beginTime, t.end);
            }
            else if (t.start.getTime() > beginTime.getTime() && t.start.getTime() < finishTime.getTime() && t.end.getTime() > finishTime.getTime()) {
                workingMinutes += this.diff_minutes(finishTime, t.start);
            }
        });
        return workingMinutes;
    }
};
Utility = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], Utility);
exports.Utility = Utility;
//# sourceMappingURL=utility.service.js.map