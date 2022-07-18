import { Connection } from 'typeorm';

import { Constants } from "src/common/constants";
import { Flower } from './entities/flower.entity';


export const FlowerDashboardProviders = [
    {
        provide: Constants.flowerDashboardReposistory,
        useFactory: (connection: Connection) => connection.getRepository(Flower),
        inject: [Constants.databaseConnection],
    },
];
