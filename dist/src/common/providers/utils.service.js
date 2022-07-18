"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const bcrypt = require("bcrypt");
class UtilsService {
    static generateRandomString(length) {
        return Math.random()
            .toString(36)
            .replace(/[^a-zA-Z0-9]+/g, '')
            .substr(0, length);
    }
    static validateHash(password, hash) {
        return bcrypt.compare(password, hash || '');
    }
}
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map