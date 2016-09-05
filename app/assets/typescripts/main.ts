import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule, [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);