import { Component, Input } from '@angular/core'

@Component({
    selector: 'base-field-cell',
    templateUrl: 'components/grid_table/grid_body_cell/base_field_cell.html'
})

export class BaseFieldCellComponent {
    @Input() context: Object;
    @Input() metaData: Object;

    constructor(){

    }
}