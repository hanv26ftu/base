import { Ability } from '@casl/ability';
import { CaslService } from "./casl.service";
export declare type AppAbility = Ability<[string, string]>;
export declare class CaslAbilityFactory {
    private caslService;
    constructor(caslService: CaslService);
    createForUser(user: any): Promise<Ability<[string, string], import("@casl/ability").MongoQuery<import("@casl/ability/dist/types/types").AnyObject>>>;
}
