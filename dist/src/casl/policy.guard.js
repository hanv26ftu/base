"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesGuard = void 0;
const common_1 = require("@nestjs/common");
const policy_handler_interface_1 = require("./interfaces/policy-handler.interface");
const casl_ability_factory_1 = require("./casl-ability.factory");
const core_1 = require("@nestjs/core");
let PoliciesGuard = class PoliciesGuard {
    constructor(reflector, caslAbilityFactory) {
        this.reflector = reflector;
        this.caslAbilityFactory = caslAbilityFactory;
    }
    async canActivate(context) {
        const policyHandlers = this.reflector.get(policy_handler_interface_1.CHECK_POLICIES_KEY, context.getHandler()) || [];
        const { user } = context.switchToHttp().getRequest();
        const ability = await this.caslAbilityFactory.createForUser(user);
        return policyHandlers.every((handler) => this.execPolicyHandler(handler, ability));
    }
    execPolicyHandler(handler, ability) {
        if (typeof handler === 'function') {
            return handler(ability);
        }
        return handler.handle(ability);
    }
};
PoliciesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector,
        casl_ability_factory_1.CaslAbilityFactory])
], PoliciesGuard);
exports.PoliciesGuard = PoliciesGuard;
//# sourceMappingURL=policy.guard.js.map