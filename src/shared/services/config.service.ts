import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { IAwsConfig } from 'src/common/interfaces/IAwsConfig';



export class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;
        if (nodeEnv === 'development') {
            dotenv.config({
                path: `.${nodeEnv}.env`,
            });
        }

        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    public get(key: string): string {
        return process.env[key];
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get nodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }

 

    get awsS3Config(): IAwsConfig {
        return {
            accessKeyId: this.get('AWS_S3_ACCESS_KEY_ID'),
            secretAccessKey: this.get('AWS_S3_SECRET_ACCESS_KEY'),
            bucket: this.get('S3_BUCKET_NAME'),
            region: this.get('S3_REGION')
        };
    }

    get databaseConfig(): any {
        return {
            type: this.get('DB_TYPE'),
            port: this.get('DB_PORT'),
            host: this.get('DB_HOST'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get('DB_DATABASE')
        };
    }

    public static searchConfig(url: string): any {
        return {
            node: url,
            maxRetries: 5,
            requestTimeout: 60000,
            sniffOnStart: true,
        };
    }
}
