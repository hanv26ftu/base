import { MakeOrderDto } from './dto/make-order.dto';
import { OrderMobileService } from './order-mobile.service';
export declare class OrderMobileController {
    private readonly orderService;
    constructor(orderService: OrderMobileService);
    create(request: any, makeOrderDto: MakeOrderDto): Promise<import("./entities/order.entity").Order>;
}
