import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { AdressProviders } from './address.providers';
import { AddressService } from './address.service';
import { AddressController } from './addresscontroller';

@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers: [...AdressProviders,AddressService],
    exports:[AddressService]
})
export class AddressModule {}
