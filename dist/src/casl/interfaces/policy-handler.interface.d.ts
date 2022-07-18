import { AppAbility } from '../casl-ability.factory';
interface IPolicyHandler {
    handle(ability: AppAbility): boolean;
}
declare type PolicyHandlerCallback = (ability: AppAbility) => boolean;
export declare type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
export declare const CHECK_POLICIES_KEY = "check_policy";
export declare const CheckPolicies: (...handlers: PolicyHandler[]) => import("@nestjs/common").CustomDecorator<string>;
export {};
