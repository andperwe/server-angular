import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NavModuleComponent} from "./nav-module.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavModuleComponent],
  providers: [],
  declarations: [NavModuleComponent]
})
export class NavModule { }
