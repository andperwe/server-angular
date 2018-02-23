import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {FlashMessagesModule} from "angular2-flash-messages";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {UsersListComponent} from "./users-list/users-list.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {CookieService} from "ngx-cookie-service";
import {UsersService} from "./users.service";
import {NgModule} from "@angular/core";
import {UserResolve} from "./user-resolve.service";
import {NavModule} from "../nav-module/nav.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule,
    NavModule
  ],
  exports: [UsersListComponent],
  providers: [UsersService, CookieService, UserResolve],
  declarations: [UsersListComponent, UserCreateComponent, UserEditComponent]
})
export class UsersModule { }
