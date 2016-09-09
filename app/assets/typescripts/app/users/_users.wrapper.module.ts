import { NgModule } from '@angular/core';

import { UsersDashboardModule } from "./dashboard/_dashboard.wrapper.module";
import { UserAssociationsModule } from "./associations/_associations.wrapper.module";
import { UsersOffersModule } from "./offers/_offers.wrapper.module";

@NgModule({
    imports: [
        UsersDashboardModule,
        UserAssociationsModule,
        UsersOffersModule
    ]
})

export class UsersModule {

}