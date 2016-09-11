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
var HtmlOutlet = (function () {
    function HtmlOutlet(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
    }
    HtmlOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        var context = this.context;
        var metaData = this.metaData;
        if (!html)
            return;
        var DynamicHtmlComponent = (function () {
            function DynamicHtmlComponent(el) {
                this.el = el;
                this.context = context;
                this.metaData = metaData;
            }
            //wait for the component to render completely
            DynamicHtmlComponent.prototype.ngOnInit = function () {
                var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
                // move all children out of the element
                while (nativeElement.firstChild) {
                    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
                }
                // remove the empty element(the host)
                parentElement.removeChild(nativeElement);
            };
            DynamicHtmlComponent = __decorate([
                core_1.Component({
                    selector: 'dynamic-comp',
                    templateUrl: html
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], DynamicHtmlComponent);
            return DynamicHtmlComponent;
        }());
        ;
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            DynamicHtmlModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        _helpers_wrapper_module_1.HelpersModule
                    ],
                    declarations: [DynamicHtmlComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], DynamicHtmlModule);
            return DynamicHtmlModule;
        }());
        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(function (factory) {
            var compFactory = factory.componentFactories
                .find(function (x) { return x.componentType === (DynamicHtmlComponent); });
            var cmpRef = _this.vcRef.createComponent(compFactory, 0);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HtmlOutlet.prototype, "html", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HtmlOutlet.prototype, "context", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HtmlOutlet.prototype, "metaData", void 0);
    HtmlOutlet = __decorate([
        core_1.Directive({
            selector: 'html-outlet'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Compiler])
    ], HtmlOutlet);
    return HtmlOutlet;
}());
exports.HtmlOutlet = HtmlOutlet;
//# sourceMappingURL=html_outlet.helper.js.map