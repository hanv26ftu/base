import { DeleteResult, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: Repository<Address>);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAll(userId: string): Promise<any>;
    findOne(id: string): Promise<Address>;
    update(id: string, updateAdressDto: UpdateAddressDto): Promise<Address>;
    remove(id: string): Promise<DeleteResult>;
}
