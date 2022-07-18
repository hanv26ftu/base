"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressProviders = void 0;
const constants_1 = require("../../../common/constants");
const address_entity_1 = require("./entities/address.entity");
exports.AdressProviders = [
    {
        provide: constants_1.Constants.addressReposistory,
        useFactory: (connection) => connection.getRepository(address_entity_1.Address),
        inject: [constants_1.Constants.databaseConnection],
    },
];
//# sourceMappingURL=address.providers.js.map