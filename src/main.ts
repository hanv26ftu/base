import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { MobileAppModule } from "./mobile-app/mobile-app.module";
// import { HttpExceptionFilter } from "./common/filter/http-exception.filter";
import { AllExceptionsFilter } from "./common/filter/all-exception.filter";
import { ValidationPipe } from "./common/pipe/validation-pipe";
import { LoggingInterceptor } from "./common/interceptor/logging.interceptor";
import { TransformInterceptor } from "./common/interceptor/transform.interceptor";
import { TimeoutInterceptor } from "./common/interceptor/timeout.interceptor";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactoryStatic } from '@nestjs/core/nest-factory';
import { ExpressAdapter } from '@nestjs/platform-express';
// import express, { Request, Response } from 'express';
// import express = require('express');
// import * as http from 'http';

async function bootstrap() {
  // const server = express();
  // const adapter = new ExpressAdapter(server);
  // const appFactory = new NestFactoryStatic();
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  // app.setGlobalPrefix('/cms');
  // Config Swagger
  const config = new DocumentBuilder()
    .setTitle('Melinh API Document')
    .setDescription('Melinh API for web admin module')
    .setVersion('1.0')
    // .addTag('Web admin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  // Enable CORS for other domain request
  app.enableCors({
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
  });
  await app.listen(8081);
  // await mobileApp.listen(1992);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
