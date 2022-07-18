import { Utility } from '../utility.service';
export declare class TasksService {
    private util;
    constructor(util: Utility);
    private readonly logger;
    handleCron(): Promise<void>;
    handleTimeout(): void;
}
