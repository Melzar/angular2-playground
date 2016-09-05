import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { UsersComponent }   from './app/users/users.component';
import { LoginComponent } from './app/login/login.component';
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        UsersComponent,
        LoginComponent,

        /*Utility components*/
        NavigationComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }