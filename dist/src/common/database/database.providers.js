"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: constants_1.Constants.databaseConnection,
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            port: 3306,
            host: '34.142.189.32',
            username: 'melinh',
            password: 'Melinh2022',
            database: 'melinh',
            dateStrings: true,
            bigNumberStrings: false,
            entities: [
                __dirname + "/../../**/*.entity{.ts,.js}",
            ],
            synchronize: false,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map