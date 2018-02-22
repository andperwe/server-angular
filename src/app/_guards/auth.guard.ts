import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AlertService} from "../_services/alert.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router
               ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});





        // this.alertService.error('W celu przejścia na podany adres, musisz być zalogowany.');
        return false;
    }
}
