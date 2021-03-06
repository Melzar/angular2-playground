"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_associations_grid_table_config_1 = require("../commons/user.associations.grid-table.config");
var UsersAssociationsComponent = (function () {
    function UsersAssociationsComponent(tableConfig) {
        this.tableData = [
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
        this.tableConfig = tableConfig;
    }
    UsersAssociationsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/users/associations/index.html',
            providers: [
                user_associations_grid_table_config_1.UserAssociationsGridTableConfig
            ]
        }), 
        __metadata('design:paramtypes', [user_associations_grid_table_config_1.UserAssociationsGridTableConfig])
    ], UsersAssociationsComponent);
    return UsersAssociationsComponent;
}());
exports.UsersAssociationsComponent = UsersAssociationsComponent;
//# sourceMappingURL=associations.component.js.map