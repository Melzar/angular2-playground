import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { UsersComponent }    from './users/users.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'

    },
    {
        path: 'users',
        component: UsersComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });