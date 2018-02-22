import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {KlientDt} from "../models/klientDt";
import {KlientsService} from "../klients.service";
import {CookieService} from "ngx-cookie-service";
import {FlashMessagesService} from "angular2-flash-messages";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-klients-list',
  templateUrl: './klients-list.component.html',
  styleUrls: ['./klients-list.component.css']
})
export class KlientsListComponent implements OnInit {

  @ViewChild('content2') content2: TemplateRef<any>;
  private uwaga = '';
  public toggle: boolean = false;
  public filter: string = '';
  Klients: KlientDt[];
  public tItems;
  public key: string = 'id';
  public reverse: boolean = false;
  private param = {}
  public p: number;
  public id: string = '';


  constructor(
               public klientsService: KlientsService,
               private cookieService: CookieService,
               private _flashMessagesService: FlashMessagesService,
               private modalService: NgbModal
             ) { }

  ngOnInit() {
    if (this.cookieService.check('flash_ok'))
    {
      setTimeout(() => {
        this.modalService.open(this.content2);
        this.uwaga = this.cookieService.get('flash_ok');
      });
    }

    if (this.cookieService.check('flash_error'))
    {
      setTimeout(() => {
        this.modalService.open(this.content2);
        this.uwaga = this.cookieService.get('flash_error');
        document.getElementById('modalh').className = 'modal-header green red';
      });
    }

    if (this.cookieService.check('page'))
    {
      if (this.cookieService.check('key')){
        this.param = {sort: [this.cookieService.get('key'), parseInt(this.cookieService.get('kierunek'), 10)]};
      }
      else{
        this.param = {sort: ['_id', -1]};
      }
      this.param['page'] = parseInt(this.cookieService.get('page'), 10);
      this.param['filter'] = this.cookieService.get('filter');
      this.postKlientDt();
      this.filter = this.cookieService.get('filter');
      this.p = parseInt(this.cookieService.get('page'), 10);
      this.key = this.cookieService.get('key');
      if (this.cookieService.get('kierunek') === "-1"){
        this.reverse = false;
      } else {this.reverse = true;
      }
    } else {
      this.param = {sort: ['_id', -1]};
      this.postKlientDt();
    }
    if (this.cookieService.check('id'))
    this.id = this.cookieService.get('id');
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
    this.postKlientDt();
  }

  zmiana(){
    if (this.filter !== "") {
      const search = this.filter.toLowerCase();
      this.param['filter'] = search;
      this.postKlientDt();
      this.cookieService.set('filter', search);
    }
    else {
      this.param['filter'] = '';
      this.postKlientDt();
      this.cookieService.set('filter', '');
    }
  }

  pageChanged(event) {
    this.p = event;
    this.param['page'] = this.p;
    this.postKlientDt();
    this.cookieService.set('page', this.p.toString());
  }

  setActive(id) {
    this.cookieService.set('id', id);
  }

  trClick(id) {
    this.id = id;
  }

  postKlientDt() {
    this.klientsService.postKlientDt(this.param).subscribe(
      data => { this.Klients = data.data; this.tItems = data.recordsFiltering;},
      err => {this._flashMessagesService.show('Brak połączenia z serwerem!', { cssClass: 'alert alert-success', showCloseBtn: true, timeout: 1000000000 });}
    );
  }

}
