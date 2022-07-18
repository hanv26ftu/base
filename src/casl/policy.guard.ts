import { SetMetadata, CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { PolicyHandler, CHECK_POLICIES_KEY } from "src/casl/interfaces/policy-handler.interface";
import { CaslAbilityFactory, AppAbility } from "src/casl/casl-ability.factory";
import { Reflector } from "@nestjs/core";

@Injectable()
export class PoliciesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private caslAbilityFactory: CaslAbilityFactory,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const policyHandlers =
            this.reflector.get<PolicyHandler[]>(
                CHECK_POLICIES_KEY,
                context.getHandler(),
            ) || [];

        const { user } = context.switchToHttp().getRequest();// request.user assign after JWT token validate
        // console.log(user);
        const ability = await this.caslAbilityFactory.createForUser(user);

        return policyHandlers.every((handler) =>
            this.execPolicyHandler(handler, ability),
        );
    }

    private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
        if (typeof handler === 'function') {
            return handler(ability);
        }
        return handler.handle(ability);
    }
}
