import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';
export declare class ProvinceService {
    private provinceRepository;
    constructor(provinceRepository: Repository<Province>);
    findAll(): Promise<any>;
}
