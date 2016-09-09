import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }    from "./app/authentication/login.component";
import { UsersDashboardComponent } from "./app/users/dashboard/dashboard.component";
import { UsersOffersComponent } from "./app/users/offers/offers.component";
import { UsersAssociationsComponent } from "./app/users/associations/associations.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersDashboardComponent
    },
    {
        path: 'users/offers',
        component: UsersOffersComponent
    },
    {
        path: 'users/associations',
        component: UsersAssociationsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });