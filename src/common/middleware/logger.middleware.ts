import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log(req.method, req.baseUrl, req.method === "GET" ? req.query : req.body);
        next();
    }
}
