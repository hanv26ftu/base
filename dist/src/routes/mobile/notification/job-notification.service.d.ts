import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { AuthMobileService } from '../auth-mobile/auth-mobile.service';
import { NotificationService } from './notification.service';
export declare class JobNotificationService {
    private notificationRepository;
    private authMobileService;
    private readonly httpService;
    private notificationService;
    constructor(notificationRepository: Repository<Notification>, authMobileService: AuthMobileService, httpService: HttpService, notificationService: NotificationService);
    handleCron(): Promise<void>;
}
