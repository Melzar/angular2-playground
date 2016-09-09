/*
TODO: Extend this component when there will be stable dynamic component/template feature available
 */

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

    applyTableHeaderTemplate(field: string): string {
        return this.tableConfig.tableHeaderTemplate[field];
    }

    applyTableBodyTemplate(field: string): string {
        return this.tableConfig.tableBodyTemplate[field];
    }

    applyFieldHeaderCellTemplate(field: string): string{
        return this.tableConfig.tableFieldHeaderCellTemplate[field];
    }

    applyFieldCellTemplate(field: string): string{
        return this.tableConfig.tableFieldCellTemplate[field];
    }

    applyFieldHeaderLabel( field: string): string{
        return this.tableConfig.fieldsLabels[field]
    }

    /* Private Methods */







}