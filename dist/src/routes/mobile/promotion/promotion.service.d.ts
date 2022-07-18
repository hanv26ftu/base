import { DeleteResult, Repository } from 'typeorm';
import { Promotion } from './entities/promotion.entity';
export declare class PromotionService {
    private promotionRepository;
    constructor(promotionRepository: Repository<Promotion>);
    findAll(): Promise<any>;
    findOne(id: string): Promise<Promotion>;
    remove(id: string): Promise<DeleteResult>;
}
