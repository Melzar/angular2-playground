import { BaseTableConfig } from "../../../components/grid_table/models/grid_table.config.model";

export class UserAssociationsGridTableConfig extends BaseTableConfig {

    constructor(){
        super();
        this.fieldsLabels = { id: 'ID', name: 'Name', surname: 'Surname', associatedTo: 'Associations'};
        this.fields = ['id', 'name', 'surname', 'associatedTo'];
    }

}
