export class BaseTableConfig {
    private _tableId: string = 'grid_table';
    private _tableHeaderTemplate: string = 'components/grid_table/grid_header/default_table_header.html';
    private _tableBodyTemplate: string = 'components/grid_table/grid_body/default_table_body.html';
    private _tableFieldHeaderCellTemplate: Object = {};
    private _tableFieldCellTemplate: Object = {};
    private _fieldsLabels: Object = {};
    private _fields: Array<string> = [];

    private _tableFieldCellTemplateDefault: string = 'components/grid_table/grid_body_cell/base_field_cell.html';
    private _tableFieldHeaderCellTemplateDefault: string = 'components/grid_table/grid_header_cell/default_field_header_cell.html';

    constructor(){
    }

    get tableId():string {
        return this._tableId;
    }

    get fieldsLabels():Object {
        return this._fieldsLabels;
    }

    get fields():Array<string> {
        return this._fields;
    }

    get tableHeaderTemplate():string {
        return this._tableHeaderTemplate;
    }

    get tableBodyTemplate():string {
        return this._tableBodyTemplate;
    }

    get tableFieldCellTemplate():Object {
        return this._tableFieldCellTemplate;
    }

    get tableFieldHeaderCellTemplate():Object {
        return this._tableFieldHeaderCellTemplate;
    }

    get tableFieldCellTemplateDefault():string {
        return this._tableFieldCellTemplateDefault;
    }

    get tableFieldHeaderCellTemplateDefault():string {
        return this._tableFieldHeaderCellTemplateDefault;
    }

    set tableFieldHeaderCellTemplate(value:Object) {
        this._tableFieldHeaderCellTemplate = value;
    }

    set tableFieldCellTemplate(value:Object) {
        this._tableFieldCellTemplate = value;
    }

    set tableId(value:string) {
        this._tableId = value;
    }

    set tableHeaderTemplate(value:string) {
        this._tableHeaderTemplate = value;
    }

    set tableBodyTemplate(value:string) {
        this._tableBodyTemplate = value;
    }

    set fieldsLabels(value:Object) {
        this._fieldsLabels = value;
    }

    set fields(value:Array<string>) {
        this._fields = value;
    }


}