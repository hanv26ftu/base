import { Connection } from 'typeorm';
import { FlowerType } from './entities/flowerType.entity';
export declare const FlowerTypeProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<FlowerType>;
    inject: string[];
}[];
