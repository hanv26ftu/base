// import { CacheModule, Module } from '@nestjs/common';
// import { RedisCacheService } from './redis-cache.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import * as redisStore from 'cache-manager-redis-store';

// @Module({
//     imports: [
//         CacheModule.registerAsync({
//             imports: [ConfigModule],
//             inject: [ConfigService],
//             useFactory: async (configService: ConfigService) => ({
//                 store: redisStore,
//                 host: 'localhost',
//                 port: 6379,
//                 ttl: 300,
//                 // max: configService.get('MAX_ITEM_IN_CACHE')
//             })
//         })
//     ],
//     providers: [RedisCacheService],
//     exports: [RedisCacheService]
// })

// @Module({
//     providers: [RedisCacheService]
// })
// export class RedisCacheModule { }
