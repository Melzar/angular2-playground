import { NgModule } from '@angular/core'

import { GridTableComponent } from "./grid_table.component";
import { HelpersModule } from "../../helpers/_helpers.wrapper.module";

@NgModule({
    imports:[
        HelpersModule
    ],
    declarations: [
      GridTableComponent
    ],
    exports: [
      GridTableComponent
    ]
})

export class GridTableModule {

}