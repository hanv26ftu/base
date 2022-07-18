import { Connection } from 'typeorm';
import { Province } from './entities/province.entity';
export declare const ProvinceProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Province>;
    inject: string[];
}[];
