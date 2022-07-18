import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        var status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;
        status = exception.code == 'ER_DUP_ENTRY' ? 400 : status;
        if (status == 500) {
            console.error(request.method, request.url, exception.message);
        }
        // const res = exception instanceof HttpException ? exception.getResponse() : '';
        const msg =
            response.status(status).json({
                statusCode: status,
                message: exception.code == 'ER_DUP_ENTRY' ? 'Dữ liệu đã tồn tại' : exception.message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}
