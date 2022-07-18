import { Inject, Injectable } from '@nestjs/common';
import { Constants } from 'src/common/constants';
import { DeleteResult, getManager, Repository } from 'typeorm';
import { MobileUser } from '../auth-mobile/entities/userMobile.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { v4 as uuidv4 } from 'uuid';
import { Province } from '../province/entities/province.entity';

@Injectable()
export class AddressService {
  constructor(@Inject(Constants.addressReposistory)
  private addressRepository: Repository<Address>) {

  }

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    createAddressDto.id=uuidv4();
    console.log(createAddressDto)
    return await this.addressRepository.save(createAddressDto);
  }

  async findAll(userId: string): Promise<any> {
    const manager = getManager();
    const totalDetails = await manager.createQueryBuilder(Address, "adress")
      .select("count(adress.id) as total")
      .where("adress.userId=:userId", { userId: userId })
      .getRawOne();
    const list = await manager.createQueryBuilder(Address, "adress")
      .select("adress.id", "id")
      .addSelect("adress.fullName", "fullName")
      .addSelect("adress.phone", "phone")
      .addSelect("adress.address", "address")
      .addSelect("user.firebaseId", "firebaseId")
      .addSelect("province.id", "provinceId")
      .addSelect("province.code", "provinceCode")
      .addSelect("province.province", "province")
      .where("adress.userId=:userId", { userId: userId })
      .leftJoin(Province, "province", "province.id=adress.provinceId")
      .leftJoin(MobileUser, "user", "user.id=adress.userId")
      .getRawMany();
    return { total: parseInt(totalDetails.total), list: list };
  }

  async findOne(id: string): Promise<Address> {
    return await this.addressRepository.findOne(id);
  }

  async update(id: string, updateAdressDto: UpdateAddressDto): Promise<Address> {
    await this.addressRepository.update(id, updateAdressDto);
    return await this.addressRepository.findOne(id);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.addressRepository.delete(id);
  }
}
