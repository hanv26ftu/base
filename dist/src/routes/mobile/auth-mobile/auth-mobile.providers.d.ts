import { Connection } from 'typeorm';
import { MobileUser } from './entities/userMobile.entity';
export declare const authMobileProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<MobileUser>;
    inject: string[];
}[];
