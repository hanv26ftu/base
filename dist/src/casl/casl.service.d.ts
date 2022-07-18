import { Utility } from 'src/common/utility.service';
export declare class CaslService {
    private util;
    constructor(util: Utility);
    findPermissions(roleIds: any): Promise<any>;
}
