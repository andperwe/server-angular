import { Component, OnInit } from '@angular/core';
import {User} from "../../../_models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UsersService} from "../users.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {isUndefined} from "util";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User;
  public typ_prawojazdys: string[];
  userForm: FormGroup;
  public toggle: boolean = false;
  private role = localStorage.getItem('role');
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.cookieService.delete('flash_ok');
    this.cookieService.delete('flash_error');
    if (this.role == 'administrator') {
      this.userForm = this.buildUserForm();
      this.getUser();
    } else {
      this.cookieService.set('flash_error', 'Brak dostępu.');
      this.router.navigate(['klienci/list']);
    }
  }

  open(content) {
    this.modalService.open(content);
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

  updateUser () {
    this.usersService.updateUser(this.userForm.value, this.user._id).subscribe(
      data => {this.cookieService.set('flash_ok', 'Zaktualizowano użytkownika !'); this.router.navigate(['users/list']); },
      err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas aktualizacji użytkownika !'); this.router.navigate(['users/list']); }
    );
  }

  deleteUser () {
    this.usersService.deleteUser(this.user._id).subscribe(
      data => {this.cookieService.set('flash_ok', 'Usunięto użytkownika !'); this.router.navigate(['users/list']); },
      err => {this.cookieService.set('flash_error', 'Wystąpił błąd podczas usuwania użytkownika !'); this.router.navigate(['users/list']); }
    );
  }

  getUser () {
    this.user = this.route.snapshot.data['user'];
    if (isUndefined(this.user['username'])) {
      this.cookieService.set('flash_error', 'Brak użytkownika.');
      this.router.navigate(['klienci/list']);
    } else {
      this.userForm.get('username').setValue(this.user['username']);
      this.userForm.get('firstName').setValue(this.user['firstName']);
      this.userForm.get('lastName').setValue(this.user['lastName']);
      this.userForm.get('email').setValue(this.user['email']);
      this.userForm.get('role').setValue(this.user['role']);
    }
  }
}
