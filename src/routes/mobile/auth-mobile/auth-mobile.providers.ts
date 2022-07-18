import { Connection } from 'typeorm';
import {  MobileUser } from './entities/userMobile.entity';
import { Constants } from "src/common/constants";

export const authMobileProviders = [
    {
        provide: Constants.userMobileReposistory,
        useFactory: (connection: Connection) => connection.getRepository(MobileUser),
        inject: [Constants.databaseConnection],
    },
];
