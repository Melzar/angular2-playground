import { NgModule } from '@angular/core'

import {GridTableModule} from "../../../components/grid_table/grid_table.module";

import { UsersAssociationsComponent } from "./associations.component";
import { AppRouting } from "../../../app.routing";
import { GridTableComponent } from "../../../components/grid_table/grid_table.component";

@NgModule({
    imports:[
        AppRouting,
        GridTableModule
    ],
    declarations: [
        UsersAssociationsComponent
    ]
})

export class UserAssociationsModule{

}