import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MobileUser } from 'src/routes/mobile/auth-mobile/entities/userMobile.entity';


import { ContextService } from '../providers/context.service';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        // console.log(request.user)
        const user = <MobileUser>request.user;
        ContextService.set(ContextService._authUserKey, user);
    
        return next.handle();
    }
}
