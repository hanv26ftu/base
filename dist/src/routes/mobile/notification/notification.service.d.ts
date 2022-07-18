import { DeleteResult, Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { AuthMobileService } from '../auth-mobile/auth-mobile.service';
import { NotificationArrayDto } from './dto/notification.array.dto';
export declare class NotificationService {
    private notificationRepository;
    private authMobileService;
    constructor(notificationRepository: Repository<Notification>, authMobileService: AuthMobileService);
    findAll(user: any): Promise<any>;
    findOne(id: string): Promise<Notification>;
    remove(id: string): Promise<DeleteResult>;
    create(notificationDto: NotificationArrayDto): Promise<Notification>;
    getDate(date?: any): string;
}
