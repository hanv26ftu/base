import { CreateOrderDto } from "./create-order.dto";
export declare class MakeOrderDto {
    orderList: CreateOrderDto[];
    addressId: string;
    deliveryDate: Date;
}
