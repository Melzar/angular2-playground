import { NgModule } from '@angular/core'

import {UsersOffersComponent} from "./offers.component";
import {AppRouting} from "../../../app.routing";

@NgModule({
    imports:[
        AppRouting
    ],
    declarations: [
        UsersOffersComponent
    ]
})

export class UsersOffersModule{

}