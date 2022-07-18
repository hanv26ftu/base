import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { getConnection, getManager } from "typeorm";
import { Utility } from '../utility.service';

@Injectable()
export class TasksService {
    constructor(private util: Utility) { }

    private readonly logger = new Logger(TasksService.name);

    // Auto create daily target for next day
    @Cron('00 23 * * *')
    async handleCron() {
        // this.logger.debug('Called when 23 hour pass');
        // // Get all order run today and have not completed yet
        // const manager = getManager();
        // const runningOrder = await manager.createQueryBuilder(DailyQualityLineAggregate, "dailyAggregate")
        //     .select("dailyTarget.assignedOrderItemId", "assignedOrderItemId")
        //     .addSelect("dailyTarget.totalWorker", "totalWorker")
        //     .addSelect("dailyTarget.percentage", "percentage")
        //     .addSelect("dailyTarget.remarks", "remarks")
        //     .addSelect("dailyTarget.startTime", "startTime")
        //     .addSelect("dailyTarget.finishTime", "finishTime")
        //     .addSelect("dailyTarget.allowOvertime", "allowOvertime")
        //     .innerJoin(DailyTarget, "dailyTarget", "dailyTarget.assignedOrderItemId=dailyAggregate.assignedOrderItemId AND dailyTarget.targetDate=CURDATE()")
        //     .where("dailyAggregate.aggregateDate=CURDATE()").getRawMany();
        // var insertDailyTarget: CreateDailyTargetDto[] = [];
        // runningOrder.forEach(o => {
        //     var target: CreateDailyTargetDto = new CreateDailyTargetDto();
        //     target.assignedOrderItemId = o.assignedOrderItemId;
        //     target.totalWorker = o.totalWorker;
        //     target.percentage = o.percentage;
        //     target.remarks = o.remarks;
        //     target.startTime = o.startTime;
        //     target.finishTime = o.finishTime;
        //     target.allowOvertime = o.allowOvertime;
        //     target.targetDate = new Date(this.util.tomorrow());
        //     insertDailyTarget.push(target);
        // });
        // await manager.createQueryBuilder().insert().into(DailyTarget).values(insertDailyTarget).execute();
    }

    // @Interval(60000)
    // handleInterval() {
    //     this.logger.debug('Called every 10 seconds');
    // }

    @Timeout(1000)
    handleTimeout() {
        this.logger.debug('Called once after 1 seconds');
        // var list1K = this.stages.filter(f => f.machine == '1K');
        // console.log(list1K);

    }
}

class Stage {
    no: number;
    machine: string;
    manday: number;
    order: number;
    cluster: number;
    constructor(no: number, machine: string, manday: number, order: number, cluster: number) {
        this.no = no;
        this.machine = machine;
        this.manday = manday;
        this.order = order;
        this.cluster = cluster;
    }
}

class Location {
    row: number;
    col: number;
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
}
