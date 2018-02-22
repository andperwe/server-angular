import {Component, OnInit} from '@angular/core';

import '../assets/app.css';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
  // isLoading: boolean = false;
  constructor() {}

ngOnInit() {
 //this.router.events.subscribe((Event) => this.checkRouterEvent(Event));
}

/*private checkRouterEvent(Event){
    if(Event instanceof NavigationStart){
      this.isLoading = true;
    } else if(Event instanceof NavigationEnd)
      //|| Event instanceof NavigationCancel
      //|| Event instanceof NavigationError)
    {
      this.isLoading =false;
    }
}*/

}
