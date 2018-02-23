import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.css']
})
export class NavModuleComponent implements OnInit {
  public user = localStorage.getItem('role');
  constructor() {}
  public menus:string [];
  ngOnInit() {

  }

}
