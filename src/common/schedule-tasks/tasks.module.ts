import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Utility } from '../utility.service';

@Module({
    providers: [TasksService, Utility],
})
export class TasksModule { }
