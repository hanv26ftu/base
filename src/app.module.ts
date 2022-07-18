import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { TasksModule } from "src/common/schedule-tasks/tasks.module";
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DatabaseModule } from "src/common/database/database.module";
import { ConfigModule } from '@nestjs/config';
// import { RedisCacheModule } from './common/redis-cache/redis-cache.module';
import { CmsModule } from './cms/cms.module';
import { routes } from './routes';
import { MobileAppModule } from "./mobile-app/mobile-app.module";
import { AuthMobileModule } from './routes/mobile/auth-mobile/auth-mobile.module';
import { contextMiddleware } from './common/middleware/context.middelware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { AddressModule } from './routes/mobile/address/address.module';
import { AuthDashboardModule } from './routes/cms/auth-dashboard/auth-dashboard.module';
import { FlowerDashboardModule } from './routes/cms/flower-dashboard/flower-dashboard.module';


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: true,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    // TasksModule,
    //Auth
    // AuthModule,
    // RedisCacheModule,
    //Mobile
    RouterModule.forRoutes(routes),
    SharedModule, 
    MobileAppModule,
    CmsModule,
    AuthMobileModule,
    AddressModule,
    //Dashboard
    AuthDashboardModule,
    FlowerDashboardModule
  ],


})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware,contextMiddleware).forRoutes('*');
  }
}
