import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { FlowerDashboardController } from './flower-dashborad.controller';
import { FlowerDashboardProviders } from './flower-dashborad.providers';
import { FlowerDashboardService } from './flower-dashborad.service';

@Module({
    imports: [DatabaseModule],
    controllers: [FlowerDashboardController],
    providers: [...FlowerDashboardProviders,FlowerDashboardService],
    exports:[FlowerDashboardService]
})
export class FlowerDashboardModule {}
