import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';

import { AppComponent }   from './app.component';

import { NavigationComponent } from "./components/navigation/navigation.component";
import { UsersModule } from "./app/users/_users.wrapper.module";
import { AuthenticationModule } from "./app/authentication/_authentication.wrapper.module";

@NgModule({
    imports:[
        AppRouting,
        BrowserModule,
        UsersModule,
        AuthenticationModule,
    ],
    declarations: [
        AppComponent,

        /*Navigation components*/
        NavigationComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }