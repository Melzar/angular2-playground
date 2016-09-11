import { NgModule } from '@angular/core'
import {HtmlOutlet} from "./html_outlet.helper";

@NgModule({
    declarations: [
      HtmlOutlet
    ],
    exports: [
      HtmlOutlet
    ]
})

export class HelpersModule {

}