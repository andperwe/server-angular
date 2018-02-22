import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {KlientsListComponent} from "./home/klienci/klients-list/klients-list.component";
import {KlientCreateComponent} from "./home/klienci/klient-create/klient-create.component";
import {KlientEditComponent} from "./home/klienci/klient-edit/klient-edit.component";
import {KlientResolve} from "./home/klienci/klient-resolve.service";

const appRoutes: Routes = [
    { path: '', component: KlientsListComponent, canActivate: [AuthGuard] },
    { path: 'klienci/list', component:KlientsListComponent, canActivate: [AuthGuard]},
    { path: 'klientn', component: KlientCreateComponent, canActivate: [AuthGuard]},
    { path: 'klient/:id', component: KlientEditComponent, resolve: {klient: KlientResolve}, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
  //  { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
