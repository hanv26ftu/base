import { Injectable } from '@nestjs/common';
import { Ability, AbilityBuilder, AbilityClass } from '@casl/ability';
import { Action } from "src/casl/action.enum";
import { Resource } from "src/casl/resource.enum";
import { CaslService } from "./casl.service";
import { CachePermission } from './interfaces/cache-permission.interface';

export type AppAbility = Ability<[string, string]>;

@Injectable()
export class CaslAbilityFactory {
    constructor(private caslService: CaslService) {

    }

    async createForUser(user: any) {
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[string, string]>
        >(Ability as AbilityClass<AppAbility>);
        // Get all user's abilities from redis to check permissions
        const permissions = await this.caslService.findPermissions(user.roles.map(m => m.roleId));
        // console.log(permissions);
        permissions.forEach(p => {
            can(p.action, p.resource);
        })
        return build();
    }
}
