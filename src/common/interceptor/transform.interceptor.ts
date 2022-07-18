import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {


    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(data => {
                let _request = context.switchToHttp().getRequest();
                let response = context.switchToHttp().getResponse();
                return { statusCode: (data == null && _request.method !== 'DELETE') ? 404 : response.statusCode, data: data, message: (data == null && _request.method !== 'DELETE') ? 'Not found' : '' };
            })
        );
    }
}
