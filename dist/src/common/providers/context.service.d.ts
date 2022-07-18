export declare class ContextService {
    private static readonly _nameSpace;
    static _authUserKey: string;
    static get<T>(key: string): T;
    static set(key: string, value: any): void;
    private static _getKeyWithNamespace;
}
