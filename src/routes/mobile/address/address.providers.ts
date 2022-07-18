import { Connection } from 'typeorm';

import { Constants } from "src/common/constants";
import { Address } from './entities/address.entity';


export const AdressProviders = [
    {
        provide: Constants.addressReposistory,
        useFactory: (connection: Connection) => connection.getRepository(Address),
        inject: [Constants.databaseConnection],
    },
];
