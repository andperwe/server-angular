import { Component, OnInit } from '@angular/core';
import {User} from "../../../_models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  public user: User;
  userForm: FormGroup;
  public toggle: boolean = false;
  private role = localStorage.getItem('role');
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.czyscCookie();
    if(this.role == 'administrator') {
      this.userForm = this.buildUserForm();
    } else {
      this.cookieService.set('flash_error', 'Brak dostępu.');
      this.router.navigate(['klienci/list']);
    }
  }

  clickEvent(){
    this.toggle = !this.toggle;
  }

  buildUserForm() {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      role: 'użytkownik',
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  createUser() {
    this.usersService.createUser(this.userForm.value).subscribe(
      data => {this.cookieService.set('flash_ok', 'Dodano użytkownika'); this.router.navigate(['users/list']); },
      err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas dodania użytkownika !'); this.router.navigate(['users/list']); }
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

}
