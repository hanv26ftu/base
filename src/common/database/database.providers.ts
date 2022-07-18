
import { createConnection } from 'typeorm';
import { Constants } from "src/common/constants";
export const databaseProviders = [
    {
        provide: Constants.databaseConnection,
        useFactory: async () => await createConnection({
            // type: 'mysql',
            // port: 3306,
            // host: '34.142.189.32',
            // username: 'melinh',
            // password: 'Melinh2022',
            // database: 'melinh',
            // timezone: '+07:00',
            dateStrings: true,
            bigNumberStrings: false,
            entities: [
                __dirname + "/../../**/*.entity{.ts,.js}",

            ],
            synchronize: false,//Need to set to false in production mode
        }),
    },
];
