import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import {CookieService} from "ngx-cookie-service";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    // loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private cookieService: CookieService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.czyscCookie();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/klienci/list';
    }

    login() {
       // this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                err => {
                  this.alertService.error(err.error);
                    // this.loading = false;
                });
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
