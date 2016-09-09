import { NgModule } from '@angular/core'

import { UsersAssociationsComponent } from "./associations.component";
import {AppRouting} from "../../../app.routing";

@NgModule({
    imports:[
        AppRouting
    ],
    declarations: [
        UsersAssociationsComponent
    ]
})

export class UserAssociationsModule{

}