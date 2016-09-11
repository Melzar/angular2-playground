import { Directive, Component, NgModule, Input, ViewContainerRef, Compiler, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HelpersModule } from "./_helpers.wrapper.module";

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

        if (!html) return;

        @Component({
                selector: 'dynamic-comp',
                templateUrl: html
        })
        class DynamicHtmlComponent  {
                context = context;
                metaData = metaData;

                constructor(private el: ElementRef) {
                }

                //wait for the component to render completely
                ngOnInit() {
                    var nativeElement: HTMLElement = this.el.nativeElement,
                        parentElement: HTMLElement = nativeElement.parentElement;
                    // move all children out of the element
                    while (nativeElement.firstChild) {
                        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
                    }
                    // remove the empty element(the host)
                    parentElement.removeChild(nativeElement);
                }
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
                    .find(x => x.componentType === (DynamicHtmlComponent));
                const cmpRef = this.vcRef.createComponent(compFactory, 0);
            });
    }
}