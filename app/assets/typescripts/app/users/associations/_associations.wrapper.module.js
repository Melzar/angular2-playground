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
var associations_component_1 = require("./associations.component");
var app_routing_1 = require("../../../app.routing");
var grid_table_component_1 = require("../../../components/grid_table/grid_table.component");
var UserAssociationsModule = (function () {
    function UserAssociationsModule() {
    }
    UserAssociationsModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_1.AppRouting
            ],
            declarations: [
                associations_component_1.UsersAssociationsComponent,
                grid_table_component_1.GridTableComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserAssociationsModule);
    return UserAssociationsModule;
}());
exports.UserAssociationsModule = UserAssociationsModule;
//# sourceMappingURL=_associations.wrapper.module.js.map