"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./app/authentication/login.component");
var dashboard_component_1 = require("./app/users/dashboard/dashboard.component");
var offers_component_1 = require("./app/users/offers/offers.component");
var associations_component_1 = require("./app/users/associations/associations.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: dashboard_component_1.UsersDashboardComponent
    },
    {
        path: 'users/offers',
        component: offers_component_1.UsersOffersComponent
    },
    {
        path: 'users/associations',
        component: associations_component_1.UsersAssociationsComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map