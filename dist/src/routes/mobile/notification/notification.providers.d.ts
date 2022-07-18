import { Connection } from 'typeorm';
import { Notification } from './entities/notification.entity';
export declare const NotificationProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Notification>;
    inject: string[];
}[];
