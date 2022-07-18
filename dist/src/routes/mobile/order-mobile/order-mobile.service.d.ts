import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { MakeOrderDto } from './dto/make-order.dto';
export declare class OrderMobileService {
    private flowerRepository;
    constructor(flowerRepository: Repository<Order>);
    create(makeOrderDto: MakeOrderDto, user: any): Promise<Order>;
    getDate(date?: any): string;
}
