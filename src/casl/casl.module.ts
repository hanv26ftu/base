import { Module, forwardRef } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory';
import { CaslService } from './casl.service';

import { Utility } from 'src/common/utility.service';
@Module({
    imports: [
       ],
    providers: [CaslAbilityFactory, CaslService, Utility],
    exports: [CaslAbilityFactory, CaslService],
})
export class CaslModule { }
