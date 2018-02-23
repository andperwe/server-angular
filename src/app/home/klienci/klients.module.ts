import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KlientsListComponent} from './klients-list/klients-list.component';
import {TextMaskModule} from "angular2-text-mask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages";
import {KlientsService} from "./klients.service";
import {CookieService} from "ngx-cookie-service";
import {KlientCreateComponent} from "./klient-create/klient-create.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {KlientEditComponent} from "./klient-edit/klient-edit.component";
import {KlientResolve} from "./klient-resolve.service";
import {NavModule} from "../nav-module/nav.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    TextMaskModule,
    RouterModule,
    NavModule
  ],
  exports: [KlientsListComponent],
  providers: [KlientsService, CookieService, KlientResolve],
  declarations: [KlientsListComponent, KlientCreateComponent, KlientEditComponent]
})
export class KlientsModule { }
