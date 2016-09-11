import { Component, OnInit, Input } from '@angular/core'

import { BaseTableConfig } from "./models/grid_table.config.model";

@Component({
    selector: 'grid-table',
    templateUrl: 'components/grid_table/grid_table.html'
})

export class GridTableComponent implements OnInit{

    @Input() tableConfig : BaseTableConfig;
    @Input() tableAdapter: Object;
    @Input() tableMetaData: Object;
    @Input() tableData: Object;
    @Input() tableActions: Object;

    /* Constructor */
    constructor(){

    }

    /* Public Methods */
    ngOnInit(){

    }

    applyTableHeaderTemplate(): string {
        return this.tableConfig.tableHeaderTemplate;
    }

    applyTableBodyTemplate(): string {
        return this.tableConfig.tableBodyTemplate;
    }

    applyFieldHeaderCellTemplate(field: string): string{
        return this.tableConfig.tableFieldHeaderCellTemplate[field] ?
            this.tableConfig.tableFieldHeaderCellTemplate[field] : this.tableConfig.tableFieldHeaderCellTemplateDefault;
    }

    applyFieldCellTemplate(field: string): string{
        return this.tableConfig.tableFieldCellTemplate[field] ?
            this.tableConfig.tableFieldCellTemplate[field] : this.tableConfig.tableFieldHeaderCellTemplateDefault;
    }

    applyFieldHeaderLabel( field: string): string{
        return this.tableConfig.fieldsLabels[field]
    }

    /* Private Methods */

}