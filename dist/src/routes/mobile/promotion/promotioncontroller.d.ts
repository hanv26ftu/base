import { PromotionService } from './promotion.service';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    findAll(request: any): Promise<any>;
}
