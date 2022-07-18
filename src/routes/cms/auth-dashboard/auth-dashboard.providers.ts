import { Connection } from 'typeorm';
import {  DashboardUser } from './entities/userDashboard.entity';
import { Constants } from "src/common/constants";

export const authDashboardProviders = [
    {
        provide: Constants.userDashboardReposistory,
        useFactory: (connection: Connection) => connection.getRepository(DashboardUser),
        inject: [Constants.databaseConnection],
    },
];
