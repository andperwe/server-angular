import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';

import {RegisterComponent} from "./register/register.component"
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {KlientsModule} from "./home/klienci/klients.module";
import {NavModule} from "./home/nav-module/nav.module";
import {UsersModule} from "./home/users/users.module";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
      NgbModule.forRoot(),
      KlientsModule,
      UsersModule,
      NavModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        // UserService
                 ],
    bootstrap: [AppComponent]
})

export class AppModule { }
