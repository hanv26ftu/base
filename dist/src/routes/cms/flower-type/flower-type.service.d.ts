import { Repository } from 'typeorm';
import { FlowerType } from './entities/flowerType.entity';
import { GetFlowerTypeDto } from './dto/get-flower-type.dto';
export declare class FlowerTypeService {
    private flowerRepository;
    constructor(flowerRepository: Repository<FlowerType>);
    findAll(getFlowerDto: GetFlowerTypeDto): Promise<any>;
}
