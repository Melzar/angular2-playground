import { NgModule } from '@angular/core'

import { UsersAssociationsComponent } from "./associations.component";
import { AppRouting } from "../../../app.routing";
import { GridTableComponent } from "../../../components/grid_table/grid_table.component";

@NgModule({
    imports:[
        AppRouting
    ],
    declarations: [
        UsersAssociationsComponent,
        GridTableComponent
    ]
})

export class UserAssociationsModule{

}