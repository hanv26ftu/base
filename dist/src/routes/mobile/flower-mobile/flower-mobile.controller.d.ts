import { FlowerMobileService } from './flower-mobile.service';
import { GetListFlowerDto } from './dto/get-list-flower.dto';
import { GetDiscountFlowerDto } from './dto/get-discount-flower.dto';
import { GetHotFlowerDto } from './dto/get-hot-flower.dto';
import { GetHistoryFlowerDto } from './dto/get-history-flower.dto';
import { GetActiveFlowerDto } from './dto/get-active-flower.dto';
export declare class FlowerMobileController {
    private readonly flowerService;
    constructor(flowerService: FlowerMobileService);
    findActiveAll(request: any, getActiveDto: GetActiveFlowerDto): Promise<any>;
    findAll(request: any, getListFlowerDto: GetListFlowerDto): Promise<any>;
    getDiscountList(request: any, getDiscountDto: GetDiscountFlowerDto): Promise<any>;
    getHotList(request: any, gethotDto: GetHotFlowerDto): Promise<any>;
    getHistoryList(request: any, getHistoryDto: GetHistoryFlowerDto): Promise<any>;
    findOne(id: string): Promise<import("./entities/flower.entity").Flower>;
}
