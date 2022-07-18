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
exports.CaslAbilityFactory = void 0;
const common_1 = require("@nestjs/common");
const ability_1 = require("@casl/ability");
const action_enum_1 = require("./action.enum");
const resource_enum_1 = require("./resource.enum");
const casl_service_1 = require("./casl.service");
let CaslAbilityFactory = class CaslAbilityFactory {
    constructor(caslService) {
        this.caslService = caslService;
    }
    async createForUser(user) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        const permissions = await this.caslService.findPermissions(user.roles.map(m => m.roleId));
        permissions.forEach(p => {
            can(p.action, p.resource);
        });
        return build();
    }
};
CaslAbilityFactory = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [casl_service_1.CaslService])
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
//# sourceMappingURL=casl-ability.factory.js.map