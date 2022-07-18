import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MobileAppService } from './mobile-app.service';
import { MobileAppController } from './mobile-app.controller';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [MobileAppController],
  providers: [MobileAppService]
})

export class MobileAppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware).forRoutes('*');
  // }
}
