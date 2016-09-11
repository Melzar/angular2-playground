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
var grid_table_config_model_1 = require("./models/config/grid_table.config.model");
var GridTableComponent = (function () {
    /* Constructor */
    function GridTableComponent() {
    }
    /* Public Methods */
    GridTableComponent.prototype.ngOnInit = function () {
    };
    GridTableComponent.prototype.applyTableHeaderTemplate = function () {
        return this.tableConfig.tableHeaderTemplate;
    };
    GridTableComponent.prototype.applyTableBodyTemplate = function () {
        return this.tableConfig.tableBodyTemplate;
    };
    GridTableComponent.prototype.applyFieldHeaderCellTemplate = function (field) {
        return this.tableConfig.tableFieldHeaderCellTemplate[field] ?
            this.tableConfig.tableFieldHeaderCellTemplate[field] : this.tableConfig.tableFieldHeaderCellTemplateDefault;
    };
    GridTableComponent.prototype.applyFieldCellTemplate = function (field) {
        return this.tableConfig.tableFieldCellTemplate[field] ?
            this.tableConfig.tableFieldCellTemplate[field] : this.tableConfig.tableFieldCellTemplateDefault;
    };
    GridTableComponent.prototype.applyFieldHeaderLabel = function (field) {
        return this.tableConfig.fieldsLabels[field];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', grid_table_config_model_1.BaseTableConfig)
    ], GridTableComponent.prototype, "tableConfig", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridTableComponent.prototype, "tableAdapter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridTableComponent.prototype, "tableMetaData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridTableComponent.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridTableComponent.prototype, "tableActions", void 0);
    GridTableComponent = __decorate([
        core_1.Component({
            selector: 'grid-table',
            templateUrl: 'components/grid_table/grid_table.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridTableComponent);
    return GridTableComponent;
}());
exports.GridTableComponent = GridTableComponent;
//# sourceMappingURL=grid_table.component.js.map