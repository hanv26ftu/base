
const crypto = require('crypto');
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class Utility {
    constructor() { }
    onlyUnique(value, index, self): boolean {
        return self.indexOf(value) === index;
    }

    sha1(data: string): string {
        var generator = crypto.createHash('sha1');
        generator.update(data)
        return generator.digest('hex');
    }
    enSha1(data: string): string {
        var generator = crypto.createHash('sha1');
        generator.update(data)
        return generator.digest('hex');
    }

    sumReducer = (accumulator, currentValue) => accumulator + currentValue;

    today(): string {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var strMonth = month < 10 ? `0${month}` : `${month}`;
        var strDay = day < 10 ? `0${day}` : `${day}`;
        return year + '-' + strMonth + '-' + strDay;
    }

    tomorrow(): string {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        var year = tomorrow.getFullYear();
        var month = tomorrow.getMonth() + 1;
        var day = tomorrow.getDate();
        var strMonth = month < 10 ? `0${month}` : `${month}`;
        var strDay = day < 10 ? `0${day}` : `${day}`;
        return year + '-' + strMonth + '-' + strDay;
    }
    now(): string {
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

    diff_minutes(d1: Date, d2: Date) {
        return (d2.getTime() - d1.getTime()) / 60000;
    }

    getLastDateByMonth(month: number, year: number) {
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
    calcTimekeepingMinutes(sBeginTime: string, sFinishTime: string) {
        const beginTime = new Date(sBeginTime);
        const finishTime = new Date(sFinishTime);
        const year = beginTime.getFullYear().toString();
        const month = beginTime.getMonth() + 1 > 9 ? (beginTime.getMonth() + 1).toString() : '0' + (beginTime.getMonth() + 1).toString()
        const day = beginTime.getDay() > 9 ? beginTime.getDay().toString() : '0' + beginTime.getDay().toString();
        const formattedDate = year + '-' + month + '-' + day
        // const lunchBreakStart = new Date(formattedDate + ' 11:30:00');
        // const lunchBreakEnd = new Date(formattedDate + ' 12:30:00');
        var listBreakTimes = [{
            start: new Date(formattedDate + ' 12:00:00'),
            end: new Date(formattedDate + ' 12:30:00')
        }, {
            start: new Date(formattedDate + ' 18:00:00'),
            end: new Date(formattedDate + ' 18:30:00')
        }]
        // console.log(this.diff_minutes(lunchBreakStart, lunchBreakEnd));
        // console.log(this.diff_minutes(finishTime, beginTime));
        var workingMinutes = this.diff_minutes(beginTime, finishTime);
        listBreakTimes.forEach(t => {
            if (t.start.getTime() >= beginTime.getTime() && finishTime.getTime() >= t.end.getTime()) {
                // break time is between working time
                workingMinutes -= this.diff_minutes(t.start, t.end);
            } else if (t.start.getTime() < beginTime.getTime() && t.end.getTime() > beginTime.getTime() && t.end.getTime() < finishTime.getTime()) {
                // begin working time is between break time
                workingMinutes += this.diff_minutes(beginTime, t.end);
            } else if (t.start.getTime() > beginTime.getTime() && t.start.getTime() < finishTime.getTime() && t.end.getTime() > finishTime.getTime()) {
                // finish working time is between break time
                workingMinutes += this.diff_minutes(finishTime, t.start);
            }
        })

        return workingMinutes;
    }
}






