import { NgModule } from '@angular/core'

import { UsersDashboardComponent } from "./dashboard.component";
import {AppRouting} from "../../../app.routing";

@NgModule({
    imports:[
        AppRouting
    ],
    declarations: [
        UsersDashboardComponent
    ]
})

export class UsersDashboardModule {

}