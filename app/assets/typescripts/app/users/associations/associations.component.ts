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
    tableData: Object = [
            {
                id: 1,
                name: 'Name 1',
                surname: 'Surname 1',
                associatedTo: 'Associated To bla bla'
            },
            {
                id: 2,
                name: 'Name 2',
                surname: 'Surname 2',
                associatedTo: 'Associated To bla bla'
            },
            {
                id: 3,
                name: 'Name 3',
                surname: 'Surname 3',
                associatedTo: 'Associated To bla bla'
            }
        ];
    constructor(tableConfig: UserAssociationsGridTableConfig){
        this.tableConfig = tableConfig;
    }
}