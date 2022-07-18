import { Connection } from 'typeorm';
import { DashboardUser } from './entities/userDashboard.entity';
export declare const authDashboardProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<DashboardUser>;
    inject: string[];
}[];
