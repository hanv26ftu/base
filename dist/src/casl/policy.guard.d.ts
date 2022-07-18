import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CaslAbilityFactory } from "src/casl/casl-ability.factory";
import { Reflector } from "@nestjs/core";
export declare class PoliciesGuard implements CanActivate {
    private reflector;
    private caslAbilityFactory;
    constructor(reflector: Reflector, caslAbilityFactory: CaslAbilityFactory);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private execPolicyHandler;
}
