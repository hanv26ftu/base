"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const cms_module_1 = require("./cms/cms.module");
const mobile_app_module_1 = require("./mobile-app/mobile-app.module");
const auth_dashboard_module_1 = require("./routes/cms/auth-dashboard/auth-dashboard.module");
const flower_dashboard_module_1 = require("./routes/cms/flower-dashboard/flower-dashboard.module");
const flower_type_module_1 = require("./routes/cms/flower-type/flower-type.module");
const order_dashboard_module_1 = require("./routes/cms/order-dashboard/order-dashboard.module");
const address_module_1 = require("./routes/mobile/address/address.module");
const auth_mobile_module_1 = require("./routes/mobile/auth-mobile/auth-mobile.module");
const flower_mobile_module_1 = require("./routes/mobile/flower-mobile/flower-mobile.module");
const notification_module_1 = require("./routes/mobile/notification/notification.module");
const order_mobile_module_1 = require("./routes/mobile/order-mobile/order-mobile.module");
const promotion_module_1 = require("./routes/mobile/promotion/promotion.module");
const province_module_1 = require("./routes/mobile/province/province.module");
exports.routes = [
    {
        path: '/mobile',
        module: mobile_app_module_1.MobileAppModule,
        children: [
            { path: '/', module: auth_mobile_module_1.AuthMobileModule },
            { path: '/', module: address_module_1.AddressModule },
            { path: '/', module: flower_mobile_module_1.FlowerMobileModule },
            { path: '/', module: order_mobile_module_1.OrderMobileModule },
            { path: '/', module: province_module_1.ProvinceModule },
            { path: '/', module: notification_module_1.NotificationModule },
            { path: '/', module: promotion_module_1.PromotionModule },
        ]
    },
    {
        path: '/cms',
        module: cms_module_1.CmsModule,
        children: [
            { path: '/', module: auth_dashboard_module_1.AuthDashboardModule },
            { path: '/', module: flower_dashboard_module_1.FlowerDashboardModule },
            { path: '/', module: order_dashboard_module_1.OrderDashboardModule },
            { path: '/', module: flower_type_module_1.FlowerTypeModule },
        ],
    }
];
//# sourceMappingURL=routes.js.map