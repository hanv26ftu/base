import { Connection } from 'typeorm';
import { Promotion } from './entities/promotion.entity';
export declare const PromotionProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Promotion>;
    inject: string[];
}[];
