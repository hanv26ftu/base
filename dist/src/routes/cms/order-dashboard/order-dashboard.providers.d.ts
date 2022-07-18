import { Connection } from 'typeorm';
import { Order } from './entities/order.entity';
export declare const OrderDashboardProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Order>;
    inject: string[];
}[];
