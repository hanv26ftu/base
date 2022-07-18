import { DeleteResult, Repository } from 'typeorm';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower } from './entities/flower.entity';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
export declare class FlowerDashboardService {
    private flowerRepository;
    constructor(flowerRepository: Repository<Flower>);
    create(createDto: CreateFlowerDto): Promise<Flower>;
    findAll(getListFlowerDto: GetListFlowerDto): Promise<any>;
    findOne(id: string): Promise<Flower>;
    update(id: string, updateDto: UpdateFlowerDto): Promise<Flower>;
    remove(id: string): Promise<DeleteResult>;
}
