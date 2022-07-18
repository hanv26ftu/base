import { Connection } from 'typeorm';
import { Flower } from './entities/flower.entity';
export declare const FlowerDashboardProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Flower>;
    inject: string[];
}[];
