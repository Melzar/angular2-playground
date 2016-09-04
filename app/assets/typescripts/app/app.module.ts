import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { UsersComponent }   from './users/users.component';

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        UsersComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }