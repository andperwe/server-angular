import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, Injectable, OnInit, TemplateRef,
  ViewChild
} from '@angular/core';
import {NgbDatepickerI18n, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CookieService} from "ngx-cookie-service";
import {KlientsService} from "../klients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Klient} from "../models/klient";
import {ActivatedRoute, Router} from "@angular/router";


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
  selector: 'app-klient-edit',
  templateUrl: './klient-edit.component.html',
  styleUrls: ['./klient-edit.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class KlientEditComponent implements OnInit {
  public peselmask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public kodmask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public nipmask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public klient_typ = 1;
  private oldDate = {};
  public  lData = '#a5b1be';
  data_w: NgbDateStruct;
  public hover = false;
  public klient: Klient;
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
    private klientsService: KlientsService,
    public route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router,
    private modalService: NgbModal
  ) { }


  ngOnInit() {
    this.cookieService.delete('flash_ok');
    this.cookieService.delete('flash_error');
    this.typ_prawojazdys = ['A', 'B', 'B+E', 'C', 'C+E', 'D'];
    this.klientForm = this.buildKlientForm();
    this.getKlient();
    this.klientIndVal();
  }

  open(content) {
    this.modalService.open(content);
  }

  labelDwHower() {
    this.hover = !this.hover;
    if (this.hover) {
      this.lData = '#faffbd';
    } else {
      this.lData = '#a5b1be';
    }
  }

  clickEvent(){
    this.toggle = !this.toggle;
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
    }
    if (this.klient_typ == 2) {
      this.firmaVal();
      // this.klientForm.get('pesel').setValue('');
      // this.klientForm.get('nazwisko').setValue('');
      // this.klientForm.get('imie').setValue('');
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
      kod: ['', Validators.required],
      miejscowosc: ['', [Validators.required, Validators.minLength(2)]],
      ulica: ['', [Validators.required, Validators.minLength(2)]],
      kod_k: '',
      miejscowosc_k: '',
      ulica_k: '',
      tel: '',
      tel_kom: '',
      email: '',
      data_wyd: now,
      Kat: '',
      nip: '',
      regon: '',
      uwagi: ''
    });
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
    peselCtrl.setValidators([Validators.required, Validators.minLength(11)]);
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
    peselCtrl.setValidators([Validators.required, Validators.minLength(11)]);
    peselCtrl.updateValueAndValidity();
  }

  updateKlient () {
      this.klientsService.updateKlient(this.klientForm.value, this.klient._id).subscribe(
        data => {this.cookieService.set('flash_ok', 'Zaktualizowano klienta !'); this.router.navigate(['klients']); },
        err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas aktualizacji klienta !'); this.router.navigate(['klients']); }
      );
    }

    deleteKlient () {
      this.klientsService.deleteKlient(this.klient._id).subscribe(
        data => {this.cookieService.set('flash_ok', 'Usunięto klienta !'); this.router.navigate(['klients']); },
        err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas usuwania klienta !'); this.router.navigate(['klients']); }
      );
    }

  getKlient () {
    // this.klient = this.klientsService.ed
    this.klient = this.route.snapshot.data['klient'];
    this.klientForm.get('typ_prawny').setValue(this.klient['typ_prawny']);
    this.klient_typ = this.klient['typ_prawny'];
    this.klientForm.get('n_firmy').setValue(this.klient['n_firmy']);
    this.klientForm.get('pesel').setValue(this.klient['pesel']);
    this.klientForm.get('nazwisko').setValue(this.klient['nazwisko']);
    this.klientForm.get('imie').setValue(this.klient['imie']);
    this.klientForm.get('kod').setValue(this.klient['kod']);
    this.klientForm.get('miejscowosc').setValue(this.klient['miejscowosc']);
    this.klientForm.get('ulica').setValue(this.klient['ulica']);
    this.klientForm.get('kod_k').setValue(this.klient['kod_k']);
    this.klientForm.get('miejscowosc_k').setValue(this.klient['miejscowosc_k']);
    this.klientForm.get('ulica_k').setValue(this.klient['ulica_k']);
    this.klientForm.get('tel').setValue(this.klient['tel']);
    this.klientForm.get('tel_kom').setValue(this.klient['tel_kon']);
    this.klientForm.get('email').setValue(this.klient['email']);
    if (this.klient['data_wyd']) {
    const data_wyd_s = new Date(this.klient['data_wyd']).toISOString();
    // console.log(data_wyd_s);
    const month = parseInt(data_wyd_s.substring(5, 7), 10);
    const day = parseInt(data_wyd_s.substring(8, 10), 10);
    const year = parseInt(data_wyd_s.substring(0, 4), 10);
    this.data_w = {
      year: year,
      month: month,
      day: day
    }}
    // console.log(this.klient['data_wyd']);
    // this.klientForm.get('data_wyd').setValue(this.klient['data_wyd']);
    this.klientForm.get('Kat').setValue(this.klient['Kat']);
    this.klientForm.get('nip').setValue(this.klient['nip']);
    this.klientForm.get('regon').setValue(this.klient['regon']);
    this.klientForm.get('uwagi').setValue(this.klient['uwagi']);
  }

}
