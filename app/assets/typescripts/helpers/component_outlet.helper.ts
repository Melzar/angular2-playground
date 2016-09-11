import { Directive, Component, NgModule, Input, ViewContainerRef, Compiler, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HelpersModule } from "./_helpers.wrapper.module";
import {BaseFieldCellComponent} from "../components/grid_table/grid_table_cells/grid_table_body_cells/base_field_cell.component";

@Directive({
    selector: 'component-outlet'
})
export class ComponentOutlet {
    @Input() context:Object;
    @Input() metaData:Object;
    @Input() asComponent:Object;

    constructor(private vcRef:ViewContainerRef) {
    }

    ngOnChanges() {

        const asComponent = this.asComponent;

        if(!asComponent) return;

        asComponent['context'] = this.context;
        asComponent['metaData'] = this.metaData;

        @NgModule({
            imports: [
                CommonModule,
                HelpersModule
            ],
            declarations: [BaseFieldCellComponent]
        })
        class DynamicHtmlModule {}

    }


}