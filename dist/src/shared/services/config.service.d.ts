import { IAwsConfig } from 'src/common/interfaces/IAwsConfig';
export declare class ConfigService {
    constructor();
    get(key: string): string;
    getNumber(key: string): number;
    get nodeEnv(): string;
    get awsS3Config(): IAwsConfig;
    get databaseConfig(): any;
    static searchConfig(url: string): any;
}
