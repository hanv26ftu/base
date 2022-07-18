import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { CachePermission } from "./interfaces/cache-permission.interface";
import { Utility } from 'src/common/utility.service';
import { resolve } from 'path';
@Injectable()
export class CaslService {
    constructor(

         private util: Utility) {

    }

    // async loadPermissions(roleId: number): Promise<CachePermission[]> {
    //     const key = 'silkline_permission_' + roleId.toString();
    //     // const cachePermissions = await this.cacheService.get(key);
    //     // var permissions: CachePermission[] = [];
    //     // // console.log(roleSysType);
    //     // if (cachePermissions) {
    //     //     permissions = JSON.parse(cachePermissions);
    //     //     console.log('Load permisson from cache!');
    //     // } else {
    //     //     console.log('Load permisson from DB!');
    //     //     permissions = await this.roleService.findPermission(roleId);

    //     //     if (permissions.length > 0) {
    //     //         await this.cacheService.set(key, JSON.stringify(permissions));
    //     //     }
    //     // }
    //     return permissions;
    // }

    async findPermissions(roleIds: any): Promise<any> {

        return Promise.all(roleIds.map(roleId => {
            // return this.loadPermissions(roleId);
        })).then(resolve => {
            var allPermissions = [];
            allPermissions = allPermissions.concat(resolve[0] ? resolve[0] : []);
            allPermissions = allPermissions.concat(resolve[1] ? resolve[1] : []);
            return allPermissions.filter(this.util.onlyUnique);
        });
    }
}
