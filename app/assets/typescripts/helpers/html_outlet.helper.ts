import { Directive, Component, NgModule, Input, ViewContainerRef, Compiler } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HelpersModule} from "./_helpers.wrapper.module";

@Directive({
    selector: 'html-outlet'
})
export class HtmlOutlet {
    @Input() html: string;
    @Input() context: Object;
    @Input() metaData: Object;

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {}

    ngOnChanges() {
        const html = this.html;
        const context = this.context;
        const metaData = this.metaData;
        console.log(this.html)
        if (!html) return;

        @Component({
            selector: 'dynamic-comp',
            templateUrl: html
        })
        class DynamicHtmlComponent  {
            context = context;
            metaData = metaData;
        };

        @NgModule({
            imports: [
                CommonModule,
                HelpersModule
            ],
            declarations: [DynamicHtmlComponent]
        })
        class DynamicHtmlModule {}

        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(factory => {
                const compFactory = factory.componentFactories
                    .find(x => x.componentType === DynamicHtmlComponent);
                const cmpRef = this.vcRef.createComponent(compFactory, 0);
            });
    }
}