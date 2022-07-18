/**
 * This module is used for other resources module to create async db connection and obtain its own reposistory
 */
import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { databaseProviders } from './database.providers';

@Module({
    imports:[SharedModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders],//Need to export the provider for other modules to use
})
export class DatabaseModule {
}
