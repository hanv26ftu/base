import { DeleteResult, Repository } from 'typeorm';
import { Flower } from './entities/flower.entity';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
import { GetDiscountFlowerDto } from './dto/get-discount-flower.dto';
import { GetHotFlowerDto } from './dto/get-hot-flower.dto';
import { GetHistoryFlowerDto } from './dto/get-history-flower.dto';
import { GetActiveFlowerDto } from './dto/get-active-flower.dto';
export declare class FlowerMobileService {
    private flowerRepository;
    constructor(flowerRepository: Repository<Flower>);
    findAll(getListFlowerDto: GetListFlowerDto): Promise<any>;
    findActiveAll(getActiveDto: GetActiveFlowerDto): Promise<any>;
    getDiscountList(getDiscountrDto: GetDiscountFlowerDto): Promise<any>;
    getHotList(getHotFlowerDto: GetHotFlowerDto): Promise<any>;
    getHistoryList(getHistoryFlowerDto: GetHistoryFlowerDto, user: any): Promise<any>;
    findOne(id: string): Promise<Flower>;
    remove(id: string): Promise<DeleteResult>;
}
