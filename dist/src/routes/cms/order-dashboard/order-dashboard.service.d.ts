import { DeleteResult, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { GetListOrderDto } from './dto/get-list-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderDashboardService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    findAll(getListOrderDto: GetListOrderDto): Promise<any>;
    getDate(date?: any): string;
    findOne(id: string): Promise<Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: string): Promise<DeleteResult>;
}
