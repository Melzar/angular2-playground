import { Component } from '@angular/core'

import { UserAssociationsGridTableConfig } from "../commons/user.associations.grid-table.config";

@Component({
    templateUrl: 'app/users/associations/index.html',
    providers: [
        UserAssociationsGridTableConfig
    ]
})

export class UsersAssociationsComponent {

    tableConfig: UserAssociationsGridTableConfig;

    constructor(tableConfig: UserAssociationsGridTableConfig){
        this.tableConfig = tableConfig;
    }
}