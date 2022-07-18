"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const IAwsConfig_1 = require("../../common/interfaces/IAwsConfig");
class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;
        if (nodeEnv === 'development') {
            dotenv.config({
                path: `.${nodeEnv}.env`,
            });
        }
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }
    get(key) {
        return process.env[key];
    }
    getNumber(key) {
        return Number(this.get(key));
    }
    get nodeEnv() {
        return this.get('NODE_ENV') || 'development';
    }
    get awsS3Config() {
        return {
            accessKeyId: this.get('AWS_S3_ACCESS_KEY_ID'),
            secretAccessKey: this.get('AWS_S3_SECRET_ACCESS_KEY'),
            bucket: this.get('S3_BUCKET_NAME'),
            region: this.get('S3_REGION')
        };
    }
    get databaseConfig() {
        return {
            type: this.get('DB_TYPE'),
            port: this.get('DB_PORT'),
            host: this.get('DB_HOST'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get('DB_DATABASE')
        };
    }
    static searchConfig(url) {
        return {
            node: url,
            maxRetries: 5,
            requestTimeout: 60000,
            sniffOnStart: true,
        };
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map