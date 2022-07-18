import { Connection } from 'typeorm';
import { Address } from './entities/address.entity';
export declare const AdressProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Address>;
    inject: string[];
}[];
