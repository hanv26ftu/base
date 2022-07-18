import { ProvinceService } from './province.service';
export declare class ProvinceController {
    private readonly provinceService;
    constructor(provinceService: ProvinceService);
    findAll(request: any): Promise<any>;
}
