import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, Injectable, OnInit,
  ViewChild
} from '@angular/core';
import {NgbDatepickerI18n, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Klient} from "../models/klient";
import {KlientsService} from "../klients.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

const I18N_VALUES = {
  'pl': {
    weekdays: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'],
    months: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
  }
};

@Injectable()
export class I18n {
  language = 'pl';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}


const now = new Date();


@Component({
  selector: 'app-klient-create',
  templateUrl: './klient-create.component.html',
  styleUrls: ['./klient-create.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KlientCreateComponent implements OnInit {
  public flash = '';
  public peselmask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public kodmask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public nipmask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public klient_typ = 1;
  private oldDate = {};
  public  lData = '#a5b1be';
  data_w: NgbDateStruct;
  public hover = false;
  private klient: Klient[];
  public typ_prawojazdys: string[];
  klientForm: FormGroup;
  public toggle: boolean = false;
  @ViewChild('dw') dw: any;
  @ViewChild('data_wydContainer') data_wydContainer: ElementRef;

  @HostListener('document:click') click(){
    const data_wydIsOpen: boolean = this.dw.isOpen();
  if (data_wydIsOpen) {
      if (this.data_wydContainer && this.data_wydContainer.nativeElement && !this.data_wydContainer.nativeElement.contains(event.target)) {
        this.dw.close();
      }
    }
  }
    constructor(
                private formBuilder: FormBuilder,
                private router: Router,
                private klientsService: KlientsService,
                private cookieService: CookieService
               ) { }

  ngOnInit() {
    this.czyscCookie();
    console.log(this.cookieService.get('flash_error'));
    console.log(this.cookieService.get('flash_ok'));

    this.typ_prawojazdys = ['A', 'B', 'B+E', 'C', 'C+E', 'D'];
    this.klientForm = this.buildKlientForm();
    this.data_w = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.klientIndVal();
  }

  clickEvent(){
    this.toggle = !this.toggle;
  }

  labelDwHower() {
    this.hover = !this.hover;
    if (this.hover) {
      this.lData = '#faffbd';
    } else {
      this.lData = '#a5b1be';
    }
  }

  focusData() {
    this.oldDate = this.klientForm.get('data_wyd').value;
    this.lData = '#faffbd';
  }

  focusOutData(event) {
    if (event.target.value === '____-__-__' || event.target.value.indexOf("-") >= 0) {
      const udate = this.klientForm.get('data_wyd').value;
      var dNapis = udate['year'].toString() + '-';
      if (udate['month'] < 10) dNapis = dNapis + '0';
      dNapis = dNapis + udate['month'].toString()+ '-';
      if (udate['day'] < 10) dNapis = dNapis + '0';
      dNapis = dNapis + udate['day'];
      event.target.value = dNapis;
   }
    this.lData = '#a5b1be';
  }

  setData_wyd(event) {
    if (this.checkString(event.target.value)) {
      const d = new Date(event.target.value);
      const month = parseInt(event.target.value.substring(5, 7), 10);
      const day = parseInt(event.target.value.substring(8, 10), 10);
      if (month === d.getMonth() + 1 && day === d.getDate()) {
        document.getElementById('label_dw').innerText = 'Data wyd.';
        this.data_w = {year: parseInt(event.target.value.substring(0, 4), 10), month: month, day: day};
      } else {
        document.getElementById('label_dw').innerText = 'Data wyd. (bez zmian)';
        this.data_w = {
          year: parseInt(String(this.oldDate['year']), 10),
          month: parseInt(String(this.oldDate['month']), 10),
          day: parseInt(String(this.oldDate['day']), 10)
        };
      }
    }
  }


checkString(sprawdz) {
    if (sprawdz.indexOf('_') !== -1) {
      return false;
    } else {
      return true;
    }
  }

  ustaw(event) {
    this.klient_typ = event.target.value;
    if (this.klient_typ == 1) {
      this.klientIndVal();
      this.klientForm.get('n_firmy').setValue('');
      this.klientForm.get('regon').setValue('');
    }
    if (this.klient_typ == 2) {
      this.firmaVal();
      this.klientForm.get('pesel').setValue('');
      this.klientForm.get('nazwisko').setValue('');
      this.klientForm.get('imie').setValue('');
    }
    if (this.klient_typ == 3) {
      this.klientDzialVal();
    }
  }

  buildKlientForm() {
    return this.formBuilder.group({
      typ_prawny: 1,
      n_firmy: '',
      pesel: '',
      nazwisko: '',
      imie: '',
      kod: ['', [Validators.required, Validators.pattern('[0-9]{2}\\-[0-9]{3}')]],
      miejscowosc: ['', [Validators.required, Validators.minLength(2)]],
      ulica: ['', [Validators.required, Validators.minLength(2)]],
      kod_k: '',
      miejscowosc_k: '',
      ulica_k: '',
      tel: '',
      tel_kom: '',
      email: '',
      data_wyd: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
      Kat: 'B',
      nip: '',
      regon: '',
      uwagi: ''
    });
  }

  createKlient() {
    this.klientsService.createKlient(this.klientForm.value).subscribe(
      data => {this.cookieService.set('flash_ok', 'Dodano klienta'); this.router.navigate(['klienci/list']); },
      err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas dodania klienta !'); this.router.navigate(['klienci/list']); }
    );
  }

 czyscCookie() {
  this.cookieService.delete('kierunek');
  this.cookieService.delete('filter');
  this.cookieService.delete('page');
  this.cookieService.delete('key');
  this.cookieService.delete('id');
  this.cookieService.delete('flash_ok');
  this.cookieService.delete('flash_error');
 }

  klientIndVal() {
    const n_firmyCtrl = (<any>this.klientForm).controls.n_firmy;
    n_firmyCtrl.setValidators(null);
    n_firmyCtrl.updateValueAndValidity();
    const nazwiskoCtrl = (<any>this.klientForm).controls.nazwisko;
    nazwiskoCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    nazwiskoCtrl.updateValueAndValidity();
    const imieCtrl = (<any>this.klientForm).controls.imie;
    imieCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    imieCtrl.updateValueAndValidity();
    const peselCtrl = (<any>this.klientForm).controls.pesel;
    peselCtrl.setValidators([Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{11}')]);
    peselCtrl.updateValueAndValidity();
  }

  firmaVal() {
    const n_firmyCtrl = (<any>this.klientForm).controls.n_firmy;
    n_firmyCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    n_firmyCtrl.updateValueAndValidity();
    const nazwiskoCtrl = (<any>this.klientForm).controls.nazwisko;
    nazwiskoCtrl.setValidators(null);
    nazwiskoCtrl.updateValueAndValidity();
    const imieCtrl = (<any>this.klientForm).controls.imie;
    imieCtrl.setValidators(null);
    imieCtrl.updateValueAndValidity();
    const peselCtrl = (<any>this.klientForm).controls.pesel;
    peselCtrl.setValidators(null);
    peselCtrl.updateValueAndValidity();
    console.log(n_firmyCtrl);
  }

  klientDzialVal() {
    const n_firmyCtrl = (<any>this.klientForm).controls.n_firmy;
    n_firmyCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    n_firmyCtrl.updateValueAndValidity();
    const nazwiskoCtrl = (<any>this.klientForm).controls.nazwisko;
    nazwiskoCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    nazwiskoCtrl.updateValueAndValidity();
    const imieCtrl = (<any>this.klientForm).controls.imie;
    imieCtrl.setValidators([Validators.required, Validators.minLength(2)]);
    imieCtrl.updateValueAndValidity();
    const peselCtrl = (<any>this.klientForm).controls.pesel;
    peselCtrl.setValidators([Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{11}')]);
    peselCtrl.updateValueAndValidity();
  }

}


