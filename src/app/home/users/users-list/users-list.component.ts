import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {CookieService} from "ngx-cookie-service";
import {UsersService} from "../users.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../../_models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @ViewChild('content2') content2: TemplateRef<any>;
  private uwaga = '';
  public toggle: boolean = false;
  public filter: string = '';
  Users: User[];
  public tItems;
  public key: string = 'id';
  public reverse: boolean = false;
  private param = {}
  public p: number;
  public id: string = '';
  private role = localStorage.getItem('role');
  constructor(
               public usersService: UsersService,
               private cookieService: CookieService,
               private _flashMessagesService: FlashMessagesService,
               private modalService: NgbModal,
               private router: Router
              ) { }

  ngOnInit() {
    if (this.role == 'administrator') {
      if (this.cookieService.check('flash_ok')) {
        setTimeout(() => {
          this.modalService.open(this.content2);
          this.uwaga = this.cookieService.get('flash_ok');
        });
      }

      if (this.cookieService.check('flash_error')) {
        setTimeout(() => {
          this.modalService.open(this.content2);
          this.uwaga = this.cookieService.get('flash_error');
          document.getElementById('modalh').className = 'modal-header green red';
        });
      }

      if (this.cookieService.check('page')) {
        if (this.cookieService.check('key')) {
          this.param = {sort: [this.cookieService.get('key'), parseInt(this.cookieService.get('kierunek'), 10)]};
        }
        else {
          this.param = {sort: ['_id', -1]};
        }
        this.param['page'] = parseInt(this.cookieService.get('page'), 10);
        this.param['filter'] = this.cookieService.get('filter');
        this.postUserDt();
        this.filter = this.cookieService.get('filter');
        this.p = parseInt(this.cookieService.get('page'), 10);
        this.key = this.cookieService.get('key');
        if (this.cookieService.get('kierunek') === "-1") {
          this.reverse = false;
        } else {
          this.reverse = true;
        }
      } else {
        this.param = {sort: ['_id', -1]};
        this.postUserDt();
      }
      if (this.cookieService.check('id'))
        this.id = this.cookieService.get('id');
    } else {
      this.cookieService.set('flash_error', 'Brak dostępu');
      this.router.navigate(['klienci/list']);
    }
  }

  open(content2) {
    this.modalService.open(content2);
  }

  clickEvent(){
    this.toggle = !this.toggle;
  }


  sort(key) {
    var kierunek = -1;
    this.key = key;
    this.reverse = !this.reverse;
    if (this.reverse) kierunek = 1;
    this.cookieService.set('key', key);
    this.cookieService.set('kierunek', kierunek.toString());
    this.param = {sort: [key, kierunek]};
    this.param['page'] = this.p;
    const search = this.filter.toLowerCase();
    this.param['filter'] = search;
    this.postUserDt();
  }

  zmiana(){
    if (this.filter !== "") {
      const search = this.filter.toLowerCase();
      this.param['filter'] = search;
      this.postUserDt();
      this.cookieService.set('filter', search);
    }
    else {
      this.param['filter'] = '';
      this.postUserDt();
      this.cookieService.set('filter', '');
    }
  }

  pageChanged(event) {
    this.p = event;
    this.param['page'] = this.p;
    this.postUserDt();
    this.cookieService.set('page', this.p.toString());
  }

  setActive(id) {
    this.cookieService.set('id', id);
  }

  trClick(id) {
    this.id = id;
  }

  postUserDt() {
    this.usersService.postUserDt(this.param).subscribe(
      data => { this.Users = data.data; this.tItems = data.recordsFiltering;},
      err => {this._flashMessagesService.show('Brak połączenia z serwerem!', { cssClass: 'alert alert-success', showCloseBtn: true, timeout: 1000000000 });}
    );
  }

}
