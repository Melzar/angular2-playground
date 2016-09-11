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
var common_1 = require('@angular/common');
var _helpers_wrapper_module_1 = require("./_helpers.wrapper.module");
var base_field_cell_component_1 = require("../components/grid_table/grid_table_cells/grid_table_body_cells/base_field_cell.component");
var ComponentOutlet = (function () {
    function ComponentOutlet(vcRef) {
        this.vcRef = vcRef;
    }
    ComponentOutlet.prototype.ngOnChanges = function () {
        var asComponent = this.asComponent;
        if (!asComponent)
            return;
        asComponent['context'] = this.context;
        asComponent['metaData'] = this.metaData;
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            DynamicHtmlModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        _helpers_wrapper_module_1.HelpersModule
                    ],
                    declarations: [base_field_cell_component_1.BaseFieldCellComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], DynamicHtmlModule);
            return DynamicHtmlModule;
        }());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ComponentOutlet.prototype, "context", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ComponentOutlet.prototype, "metaData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ComponentOutlet.prototype, "asComponent", void 0);
    ComponentOutlet = __decorate([
        core_1.Directive({
            selector: 'component-outlet'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ComponentOutlet);
    return ComponentOutlet;
}());
exports.ComponentOutlet = ComponentOutlet;
//# sourceMappingURL=component_outlet.helper.js.map