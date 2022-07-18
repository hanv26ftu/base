import { GetListOrderDto } from './dto/get-list-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderDashboardService } from './order-dashboard.service';
export declare class OrderDashboardController {
    private readonly orderService;
    constructor(orderService: OrderDashboardService);
    findAll(request: any, getListOrderDto: GetListOrderDto): Promise<any>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("./entities/order.entity").Order>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
