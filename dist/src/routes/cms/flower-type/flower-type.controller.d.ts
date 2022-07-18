import { FlowerTypeService } from './flower-type.service';
import { GetFlowerTypeDto } from './dto/get-flower-type.dto';
export declare class FlowerTypeController {
    private readonly flowerService;
    constructor(flowerService: FlowerTypeService);
    findAll(request: any, getFlowerDto: GetFlowerTypeDto): Promise<any>;
}
