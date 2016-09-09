import { NgModule } from '@angular/core'

import { LoginComponent } from "./login.component";
import {AppRouting} from "../../app.routing";

@NgModule({
    imports:[
        AppRouting
    ],
    declarations: [
        LoginComponent
    ]
})

export class AuthenticationModule {

}