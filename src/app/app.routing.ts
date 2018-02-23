import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {KlientsListComponent} from "./home/klienci/klients-list/klients-list.component";
import {KlientCreateComponent} from "./home/klienci/klient-create/klient-create.component";
import {KlientEditComponent} from "./home/klienci/klient-edit/klient-edit.component";
import {KlientResolve} from "./home/klienci/klient-resolve.service";
import {UsersListComponent} from "./home/users/users-list/users-list.component";
import {UserEditComponent} from "./home/users/user-edit/user-edit.component";
import {UserCreateComponent} from "./home/users/user-create/user-create.component";
import {UserResolve} from "./home/users/user-resolve.service";

const appRoutes: Routes = [
   // { path: '', component: KlientsListComponent, canActivate: [AuthGuard] },
    { path: 'klienci/list', component:KlientsListComponent, canActivate: [AuthGuard]},
    { path: 'users/list', component:UsersListComponent, canActivate: [AuthGuard]},
    { path: 'klientn', component: KlientCreateComponent, canActivate: [AuthGuard]},
    { path: 'usern', component: UserCreateComponent, canActivate: [AuthGuard]},
    { path: 'klient/:id', component: KlientEditComponent, resolve: {klient: KlientResolve}, canActivate: [AuthGuard]},
    { path: 'user/:id', component: UserEditComponent, resolve: {user: UserResolve}, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
  //  { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'klienci/list' }
];

export const routing = RouterModule.forRoot(appRoutes);
