export declare class UtilsService {
    static generateRandomString(length: number): string;
    static validateHash(password: string, hash: string): Promise<boolean>;
}
