import { Routes } from 'nest-router';
import { CmsModule } from './cms/cms.module';
import { MobileAppModule } from "./mobile-app/mobile-app.module";
import { AuthDashboardModule } from './routes/cms/auth-dashboard/auth-dashboard.module';
import { FlowerDashboardModule } from './routes/cms/flower-dashboard/flower-dashboard.module';
import { AddressModule } from './routes/mobile/address/address.module';
import { AuthMobileModule } from './routes/mobile/auth-mobile/auth-mobile.module';

export const routes: Routes = [
    {
        path: '/mobile',
        module: MobileAppModule,
        children: [
            { path: '/', module: AuthMobileModule },
            { path: '/', module: AddressModule },
            
        ]
    },
    {
        path: '/cms',
        module: CmsModule,
        children: [
            { path: '/', module: AuthDashboardModule },
            { path: '/', module: FlowerDashboardModule }    
        ],
    }
   

];
