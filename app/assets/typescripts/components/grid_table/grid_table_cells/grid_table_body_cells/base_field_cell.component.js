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
var BaseFieldCellComponent = (function () {
    function BaseFieldCellComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseFieldCellComponent.prototype, "context", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseFieldCellComponent.prototype, "metaData", void 0);
    BaseFieldCellComponent = __decorate([
        core_1.Component({
            selector: 'base-field-cell',
            templateUrl: 'components/grid_table/grid_body_cell/base_field_cell.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BaseFieldCellComponent);
    return BaseFieldCellComponent;
}());
exports.BaseFieldCellComponent = BaseFieldCellComponent;
//# sourceMappingURL=base_field_cell.component.js.map