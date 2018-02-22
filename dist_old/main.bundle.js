webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'alert',
            template: __webpack_require__("./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("./src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // this.alertService.error('W celu przejścia na podany adres, musisz być zalogowany.');
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('http://localhost:3000/api/auth/login', { username: username, password: password })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('key', user.token);
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("./src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        var key = localStorage.getItem('key');
        var httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'x-access-token': key })
        };
        return this.http.get('http://localhost:3000/users', httpOptions2);
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        // console.log(user['firstName']);
        // const body = JSON.stringify(user);
        return this.http.post('http://localhost:3000/api/auth/register', user, httpOptions);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"spiner\" *ngIf=\"isLoading\"></div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_app_css__ = __webpack_require__("./src/assets/app.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_app_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // isLoading: boolean = false;
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.router.events.subscribe((Event) => this.checkRouterEvent(Event));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_index__ = __webpack_require__("./src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_klienci_klients_module__ = __webpack_require__("./src/app/home/klienci/klients.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__home_klienci_klients_module__["a" /* KlientsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__directives_index__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_klienci_klients_list_klients_list_component__ = __webpack_require__("./src/app/home/klienci/klients-list/klients-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_klienci_klient_create_klient_create_component__ = __webpack_require__("./src/app/home/klienci/klient-create/klient-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_klienci_klient_edit_klient_edit_component__ = __webpack_require__("./src/app/home/klienci/klient-edit/klient-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_klienci_klient_resolve_service__ = __webpack_require__("./src/app/home/klienci/klient-resolve.service.ts");







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_klienci_klients_list_klients_list_component__["a" /* KlientsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]] },
    { path: 'klienci/list', component: __WEBPACK_IMPORTED_MODULE_3__home_klienci_klients_list_klients_list_component__["a" /* KlientsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]] },
    { path: 'klientn', component: __WEBPACK_IMPORTED_MODULE_4__home_klienci_klient_create_klient_create_component__["a" /* KlientCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]] },
    { path: 'klient/:id', component: __WEBPACK_IMPORTED_MODULE_5__home_klienci_klient_edit_klient_edit_component__["a" /* KlientEditComponent */], resolve: { klient: __WEBPACK_IMPORTED_MODULE_6__home_klienci_klient_resolve_service__["a" /* KlientResolve */] }, canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */] },
    //  { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/klienci/klient-create/klient-create.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.btn-primary:focus {\r\n  -webkit-box-shadow: 0 0 0 0;\r\n          box-shadow: 0 0 0 0;\r\n}\r\n\r\n.inp_n:focus {\r\n  -webkit-box-shadow: 0;\r\n          box-shadow: 0;\r\n  border-bottom:1px solid #faffbd;\r\n  color: #faffbd;\r\n}\r\n\r\n.btn.focus, .btn:focus, .inp_n:focus {\r\n  outline: 0;\r\n  -webkit-box-shadow: 0 0 0 0;\r\n          box-shadow: 0 0 0 0;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #57637c;\r\n  border-color: #57637c;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #667491;\r\n  border-color: #667491;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {\r\n  background-color: #293142;\r\n  border-color: #293142;\r\n  color: #faffbd;\r\n}\r\n\r\n/*.input-field { display: table;}\r\n\r\n\r\n\r\n.inp_n{\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.input-field input[type=text], .input-field select {\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  margin: 0 0 5px 0;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: all 0.3s;\r\n  display: table-row-group;\r\n}\r\n\r\n.input-field textarea{\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.input-field label{\r\n  color:#999;\r\n  font-family: Roboto,sans-serif;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  margin-bottom: 2px;\r\n  display: table-header-group;\r\n}\r\n\r\n.dw{\r\n  color:#999;\r\n  font-family: Roboto,sans-serif;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  margin-bottom: 2px;\r\n}\r\n*/\r\n\r\n/* .input-group input[type=text]:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n\r\n\r\n.input-field select:focus + label{color:#000;}\r\n.input-field select:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n.input-field textarea:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n\r\n.input-field input[type=text]:focus + label{color:#000}\r\n.input-field input[type=text]:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\nlabel.ok{color: #2196F3 !important;}\r\n.input-field input[type=text].ok{border-bottom:1px solid #2196F3;box-shadow:0 1px 0 0 #2196F3;}\r\nlabel.error{color: #F44336 !important;}\r\n.input-field input[type=text].error{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336;}\r\n.input-field .prefix.active{color:#000;}\r\n\r\n*/\r\n\r\ninput{\r\n  padding-top: 5px !important;\r\n}\r\n\r\n#zapiszK:disabled{\r\n  cursor: not-allowed;\r\n}\r\n\r\n.row.inp{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-outline-secondary:hover{\r\n  background-color: #45526e;\r\n  border-color: #45526e;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/klienci/klient-create/klient-create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-module></app-nav-module>\n<div class='wrapper'>\n\n  <div class=\"content\"   [ngClass]=\"{'isOpen': toggle}\">\n\n    <div class=\"row\"  style=\"background-color: #373f46; margin-left: 0px; margin-right: 0px;\">\n      <div class=\"col-sm-1\" [ngClass]=\"{'nav-is-visible': toggle}\">\n        <a class=\"cd-3d-nav-trigger\" (click)=\"clickEvent()\" style=\"cursor: pointer;\">\n          Menu\n          <span></span>\n        </a>\n      </div>\n      <div class=\"col-sm-1 offset-sm-10\" style=\"padding-top: 10px;\">\n        <button style=\"color: white; font-weight: bold;\" class=\"btn btn-warning btn-sm\" [routerLink]=\"['/login']\">Wyloguj</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"background-color: #384B5C; border-radius: 4px 4px 4px 4px; margin-top: 15px;\">\n    <form [formGroup]=\"klientForm\">\n      <div class=\"row inp justify-content-center\" style=\"margin-left: 15px; margin-right: 15px; padding-top: 8px;\">\n        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup formControlName=\"typ_prawny\" (change)=\"ustaw($event)\">\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input  ngbButton type=\"radio\" [value]=1> Klient indywidualny\n          </label>\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input ngbButton type=\"radio\" value=2> Firma\n          </label>\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input ngbButton type=\"radio\" [value]=3> Klient indyw. prow. dział. gosp.\n          </label>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Klient\n        </div>\n        <div *ngIf=\"klient_typ > 1\" class=\"row inp\">\n          <div class=\"input-field col-sm-12\" [ngClass] = \"{'error': !klientForm.get('n_firmy').valid && klientForm.get('n_firmy').dirty, 'ok': klientForm.get('n_firmy').valid}\">\n            <input formControlName=\"n_firmy\" id=\"n_firmy\" type=\"text\" placeholder=\"Nazwa firmy\">\n            <label for=\"n_firmy\">Nazwa firmy&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n\n        <div *ngIf=\"klient_typ != 2\" class=\"row inp\">\n          <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('pesel').valid && klientForm.get('pesel').dirty, 'ok': klientForm.get('pesel').valid}\">\n            <input formControlName=\"pesel\" id=\"pesel\" type=\"text\" placeholder=\"PESEL\" [textMask]=\"{mask: peselmask}\">\n            <label for=\"pesel\">Pesel&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('nazwisko').valid && klientForm.get('nazwisko').dirty, 'ok': klientForm.get('nazwisko').valid}\">\n            <input formControlName=\"nazwisko\" id=\"nazwisko\" type=\"text\" placeholder=\"Nazwisko\">\n            <label for=\"nazwisko\" class=\"req\">Nazwisko&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('imie').valid && klientForm.get('imie').dirty, 'ok': klientForm.get('imie').valid}\">\n            <input formControlName=\"imie\" id=\"imie\" type=\"text\" placeholder=\"Imie\">\n            <label for=\"imie\">Imie&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Adres\n        </div>\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-2\" [ngClass] = \"{'error': !klientForm.get('kod').valid && klientForm.get('kod').dirty, 'ok': klientForm.get('kod').valid}\">\n            <input formControlName=\"kod\" type=\"text\" id=\"kod\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\">\n            <label for=\"kod\">Kod&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-5\" [ngClass] = \"{'error': !klientForm.get('miejscowosc').valid && klientForm.get('miejscowosc').dirty, 'ok': klientForm.get('miejscowosc').valid}\">\n            <input formControlName=\"miejscowosc\" type=\"text\" id=\"miejscowosc\" placeholder=\"Miejscowość\">\n            <label for=\"miejscowosc\">Miejscowość&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-5\" [ngClass] = \"{'error': !klientForm.get('ulica').valid && klientForm.get('ulica').dirty, 'ok': klientForm.get('ulica').valid}\">\n            <input formControlName=\"ulica\" type=\"text\" id=\"ulica\" placeholder=\"Adres\">\n            <label for=\"ulica\">Adres&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Adres do korespondencji\n        </div>\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-2\">\n            <input formControlName=\"kod_k\" id=\"kod_k\" type=\"text\" id=\"kod_k\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\">\n            <label for=\"kod_k\">Kod</label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"miejscowosc_k\" id=\"miejscowosc_k\" type=\"text\" placeholder=\"Miejscowość\">\n            <label for=\"miejscowosc_k\">Miejscowość</label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"ulica_k\" type=\"text\" id=\"ulica_k\" placeholder=\"Adres\">\n            <label for=\"ulica_k\">Adres</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Kontakt\n        </div>\n\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"tel\" type=\"text\" id=\"tel\" placeholder=\"Telefon\">\n            <label for=\"tel\">Tel</label>\n          </div>\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"tel_kom\" type=\"text\" id=\"tel_kom\" placeholder=\"Telefon kom.\">\n            <label for=\"tel_kom\">Tel. kom.</label>\n          </div>\n\n          <div class=\"input-field col-sm-6\">\n            <input formControlName=\"email\" type=\"text\" id=\"email\" placeholder=\"Email\">\n            <label for=\"email\">email</label>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Prawo jazdy\n        </div>\n        <div class=\"row inp justify-content-center\">\n          <div class=\"col-sm-6\">\n\n            <div class=\"parent\" style=\"display: table\">\n              <div class=\"input-group\" #data_wydContainer (mouseover)=\"labelDwHower()\">\n                <input [(ngModel)]=\"data_w\" formControlName=\"data_wyd\" id=\"dw\" type=\"text\" class=\"form-control inp_n\"  placeholder=\"rrrr-mm-dd\" data-mask=\"9999-99-99\"\n                       ngbDatepicker #dw=\"ngbDatepicker\" (focus)=\"focusData()\" (keyup)=\"setData_wyd($event)\" (click)=\"dw.close()\" (blur)=\"focusOutData($event)\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" style=\"padding-top: 3px; padding-bottom: 3px;\" (click)=\"dw.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i>\n                  </button>\n                </div>\n              </div>\n              <label for=\"dw\" class=\"dw\" id=\"label_dw\" [style.color]=\"lData\" style=\"display: table-header-group\">Data wyd.</label>\n            </div>\n          </div>\n          <div class=\"input-field col-sm-3\">\n            <select formControlName=\"Kat\" id=\"Kat\" style=\"height: 32px;\">\n              <option class=\"options\" style=\"font-weight: bold;\" *ngFor=\"let typ_prawojazdy of typ_prawojazdys\" [value]=\"typ_prawojazdy\">{{typ_prawojazdy}}</option>\n            </select>\n            <label for=\"Kat\">Kategoria</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Dane podatkowe\n        </div>\n        <div class=\"row inp justify-content-center\">\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"nip\" type=\"text\" id=\"nip\" placeholder=\"NIP\" [textMask]=\"{mask: nipmask}\">\n            <label for=\"nip\">Nip</label>\n          </div>\n          <div *ngIf=\"klient_typ > 1\" class=\"input-field col-sm-3\">\n            <input formControlName=\"regon\" type=\"text\" id=\"regon\" placeholder=\"Regon\">\n            <label for=\"regon\">Rregon</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px; margin-bottom: 10px;\">\n        <div class=\"card-header small-ch\">\n          Uwagi\n        </div>\n        <div class=\"row\" style=\"margin-left: 10px; margin-right: 10px; margin-top: 5px; margin-bottom: 5px;\">\n          <div class=\"input-field col-sm-12\">\n            <textarea formControlName=\"uwagi\" rows=\"4\"></textarea>\n          </div>\n        </div>\n\n\n      </div>\n      <hr style=\"padding-bottom: 10px; margin-bottom: 0px;\">\n      <div style=\"padding-bottom: 10px; padding-right: 10px;\" class=\"col-sm-2 offset-sm-10\">\n        <button [disabled] = \"klientForm.invalid\" id=\"zapiszK\" (click) = \"createKlient()\" style=\"font-weight: bold; color: white;\" type=\"button\" class=\"btn edit\">\n          <i style=\"margin-right: 10px; color:green; font-size: 18px;\" class=\"fa fa-check\"></i>Dodaj klienta\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n  </div>\n\n<pre style=\"color: white;\">Is myForm valid?: <br>{{klientForm.valid | json}}</pre>\n<pre style=\"color: white;\"> {{klientForm.value | json}}</pre>\n"

/***/ }),

/***/ "./src/app/home/klienci/klient-create/klient-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18n */
/* unused harmony export CustomDatepickerI18n */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__klients_service__ = __webpack_require__("./src/app/home/klienci/klients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var I18N_VALUES = {
    'pl': {
        weekdays: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'],
        months: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    }
};
var I18n = (function () {
    function I18n() {
        this.language = 'pl';
    }
    I18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], I18n);
    return I18n;
}());

var CustomDatepickerI18n = (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerI18n */]));

var now = new Date();
var KlientCreateComponent = (function () {
    function KlientCreateComponent(formBuilder, router, klientsService, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.klientsService = klientsService;
        this.cookieService = cookieService;
        this.flash = '';
        this.peselmask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.kodmask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.nipmask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.klient_typ = 1;
        this.oldDate = {};
        this.lData = '#999';
        this.hover = false;
        this.toggle = false;
    }
    KlientCreateComponent.prototype.click = function () {
        var data_wydIsOpen = this.dw.isOpen();
        if (data_wydIsOpen) {
            if (this.data_wydContainer && this.data_wydContainer.nativeElement && !this.data_wydContainer.nativeElement.contains(event.target)) {
                this.dw.close();
            }
        }
    };
    KlientCreateComponent.prototype.ngOnInit = function () {
        this.czyscCookie();
        console.log(this.cookieService.get('flash_error'));
        console.log(this.cookieService.get('flash_ok'));
        this.typ_prawojazdys = ['A', 'B', 'B+E', 'C', 'C+E', 'D'];
        this.klientForm = this.buildKlientForm();
        this.data_w = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.klientIndVal();
    };
    KlientCreateComponent.prototype.clickEvent = function () {
        this.toggle = !this.toggle;
    };
    KlientCreateComponent.prototype.labelDwHower = function () {
        this.hover = !this.hover;
        if (this.hover) {
            this.lData = '#faffbd';
        }
        else {
            this.lData = '#a5b1be';
        }
    };
    KlientCreateComponent.prototype.focusData = function () {
        this.oldDate = this.klientForm.get('data_wyd').value;
        this.lData = '#faffbd';
    };
    KlientCreateComponent.prototype.focusOutData = function (event) {
        if (event.target.value === '____-__-__' || event.target.value.indexOf("-") >= 0) {
            var udate = this.klientForm.get('data_wyd').value;
            var dNapis = udate['year'].toString() + '-';
            if (udate['month'] < 10)
                dNapis = dNapis + '0';
            dNapis = dNapis + udate['month'].toString() + '-';
            if (udate['day'] < 10)
                dNapis = dNapis + '0';
            dNapis = dNapis + udate['day'];
            event.target.value = dNapis;
        }
        this.lData = '#a5b1be';
    };
    KlientCreateComponent.prototype.setData_wyd = function (event) {
        if (this.checkString(event.target.value)) {
            var d = new Date(event.target.value);
            var month = parseInt(event.target.value.substring(5, 7), 10);
            var day = parseInt(event.target.value.substring(8, 10), 10);
            if (month === d.getMonth() + 1 && day === d.getDate()) {
                document.getElementById('label_dw').innerText = 'Data wyd.';
                this.data_w = { year: parseInt(event.target.value.substring(0, 4), 10), month: month, day: day };
            }
            else {
                document.getElementById('label_dw').innerText = 'Data wyd. (bez zmian)';
                this.data_w = {
                    year: parseInt(String(this.oldDate['year']), 10),
                    month: parseInt(String(this.oldDate['month']), 10),
                    day: parseInt(String(this.oldDate['day']), 10)
                };
            }
        }
    };
    KlientCreateComponent.prototype.checkString = function (sprawdz) {
        if (sprawdz.indexOf('_') !== -1) {
            return false;
        }
        else {
            return true;
        }
    };
    KlientCreateComponent.prototype.ustaw = function (event) {
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
    };
    KlientCreateComponent.prototype.buildKlientForm = function () {
        return this.formBuilder.group({
            typ_prawny: 1,
            n_firmy: '',
            pesel: '',
            nazwisko: '',
            imie: '',
            kod: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{2}\\-[0-9]{3}')]],
            miejscowosc: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]],
            ulica: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]],
            kod_k: '',
            miejscowosc_k: '',
            ulica_k: '',
            tel: '',
            tel_kom: '',
            email: '',
            data_wyd: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() },
            Kat: 'B',
            nip: '',
            regon: '',
            uwagi: ''
        });
    };
    KlientCreateComponent.prototype.createKlient = function () {
        var _this = this;
        this.klientsService.createKlient(this.klientForm.value).subscribe(function (data) { _this.cookieService.set('flash_ok', 'Dodano klienta'); _this.router.navigate(['klienci/list']); }, function (err) { _this.cookieService.set('flash_error', 'Wystąpił błąd podczas dodania klienta !'); _this.router.navigate(['klienci/list']); });
    };
    KlientCreateComponent.prototype.czyscCookie = function () {
        this.cookieService.delete('kierunek');
        this.cookieService.delete('filter');
        this.cookieService.delete('page');
        this.cookieService.delete('key');
        this.cookieService.delete('id');
        this.cookieService.delete('flash_ok');
        this.cookieService.delete('flash_error');
    };
    KlientCreateComponent.prototype.klientIndVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators(null);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{11}')]);
        peselCtrl.updateValueAndValidity();
    };
    KlientCreateComponent.prototype.firmaVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators(null);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators(null);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators(null);
        peselCtrl.updateValueAndValidity();
        console.log(n_firmyCtrl);
    };
    KlientCreateComponent.prototype.klientDzialVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{11}')]);
        peselCtrl.updateValueAndValidity();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dw'),
        __metadata("design:type", Object)
    ], KlientCreateComponent.prototype, "dw", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('data_wydContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], KlientCreateComponent.prototype, "data_wydContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KlientCreateComponent.prototype, "click", null);
    KlientCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-klient-create',
            template: __webpack_require__("./src/app/home/klienci/klient-create/klient-create.component.html"),
            styles: [__webpack_require__("./src/app/home/klienci/klient-create/klient-create.component.css")],
            providers: [I18n, { provide: __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerI18n */], useClass: CustomDatepickerI18n }],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__klients_service__["a" /* KlientsService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], KlientCreateComponent);
    return KlientCreateComponent;
}());



/***/ }),

/***/ "./src/app/home/klienci/klient-edit/klient-edit.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.btn-primary:focus {\r\n  -webkit-box-shadow: 0 0 0 0;\r\n          box-shadow: 0 0 0 0;\r\n}\r\n\r\n.btn.focus, .btn:focus {\r\n  outline: 0;\r\n  -webkit-box-shadow: 0 0 0 0;\r\n          box-shadow: 0 0 0 0;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #57637c;\r\n  border-color: #57637c;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #667491;\r\n  border-color: #667491;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {\r\n  background-color: #293142;\r\n  border-color: #293142;\r\n}\r\n\r\ninput{\r\n  padding-top: 5px !important;\r\n}\r\n\r\n/*#zapiszK:disabled{\r\n  cursor: not-allowed;\r\n}\r\n*/\r\n\r\n.row.inp{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-outline-secondary:hover{\r\n  background-color: #45526e;\r\n  border-color: #45526e;\r\n}\r\n\r\n/*.input-field { display: table;}\r\n\r\n\r\n\r\n.inp_n{\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.input-field input[type=text], .input-field select {\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  margin: 0 0 5px 0;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: all 0.3s;\r\n  display: table-row-group;\r\n}\r\n\r\n.input-field textarea{\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  border-radius: 0;\r\n  outline: none;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.input-field label{\r\n  color:#999;\r\n  font-family: Roboto,sans-serif;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  margin-bottom: 2px;\r\n  display: table-header-group;\r\n}\r\n\r\n.dw{\r\n  color:#999;\r\n  font-family: Roboto,sans-serif;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.input-group input[type=text]:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n\r\n\r\n.input-field select:focus + label{color:#000;}\r\n.input-field select:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n.input-field textarea:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\n\r\n.input-field input[type=text]:focus + label{color:#000}\r\n.input-field input[type=text]:focus {border-bottom:1px solid #000;box-shadow:0 1px 0 0 #000;}\r\nlabel.ok{color: #2196F3 !important;}\r\n.input-field input[type=text].ok{border-bottom:1px solid #2196F3;box-shadow:0 1px 0 0 #2196F3;}\r\nlabel.error{color: #F44336 !important;}\r\n.input-field input[type=text].error{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336;}\r\n.input-field .prefix.active{color:#000;}\r\n\r\n.card-header{\r\n  color: white;\r\n  background-color: #293142 !important;\r\n}\r\n\r\n.small-ch{\r\n  font-family: Roboto,sans-serif;\r\n  font-size: .8rem;\r\n  font-weight: bold;\r\n  margin-bottom: 2px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  background-color: #57637c !important;\r\n}\r\n\r\n.card{\r\n  border: 1px solid #212529 !important;\r\n  background-color: #ecedf0;\r\n}\r\n\r\n.small-c{\r\n  background-color: white; /* #ecedf0 !important;*/\r\n\r\n/*}\r\n\r\n\r\n.row.inp{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-outline-secondary:hover{\r\n  background-color: #45526e;\r\n  border-color: #45526e;\r\n}\r\n\r\n*/\r\n"

/***/ }),

/***/ "./src/app/home/klienci/klient-edit/klient-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-module></app-nav-module>\n<div class='wrapper'>\n\n  <div class=\"content\"   [ngClass]=\"{'isOpen': toggle}\">\n\n    <div class=\"row\"  style=\"background-color: #373f46; margin-left: 0px; margin-right: 0px;\">\n      <div class=\"col-sm-1\" [ngClass]=\"{'nav-is-visible': toggle}\">\n        <a class=\"cd-3d-nav-trigger\" (click)=\"clickEvent()\" style=\"cursor: pointer;\">\n          Menu\n          <span></span>\n        </a>\n      </div>\n      <div class=\"col-sm-1 offset-sm-10\" style=\"padding-top: 10px;\">\n        <button style=\"color: white; font-weight: bold;\" class=\"btn btn-warning btn-sm\" [routerLink]=\"['/login']\">Wyloguj</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"background-color: #384B5C; border-radius: 4px 4px 4px 4px; margin-top: 15px;\">\n      <form [formGroup]=\"klientForm\">\n        <div class=\"row inp justify-content-center\" style=\"margin-left: 15px; margin-right: 15px; padding-top: 8px;\">\n          <div class=\"btn-group btn-group-toggle\" ngbRadioGroup formControlName=\"typ_prawny\" (change)=\"ustaw($event)\">\n            <label ngbButtonLabel class=\"btn-primary\">\n              <input  ngbButton type=\"radio\" [value]=1> Klient indywidualny\n            </label>\n            <label ngbButtonLabel class=\"btn-primary\">\n              <input ngbButton type=\"radio\" value=2> Firma\n            </label>\n            <label ngbButtonLabel class=\"btn-primary\">\n              <input ngbButton type=\"radio\" [value]=3> Klient indyw. prow. dział. gosp.\n            </label>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n          <div class=\"card-header small-ch\">\n            Klient\n          </div>\n          <div *ngIf=\"klient_typ > 1\" class=\"row inp\">\n            <div class=\"input-field col-sm-12\" [ngClass] = \"{'error': !klientForm.get('n_firmy').valid && klientForm.get('n_firmy').dirty, 'ok': klientForm.get('n_firmy').valid}\">\n              <input formControlName=\"n_firmy\" id=\"n_firmy\" type=\"text\" placeholder=\"Nazwa firmy\">\n              <label for=\"n_firmy\">Nazwa firmy&nbsp;<sup>*</sup></label>\n            </div>\n          </div>\n\n          <div *ngIf=\"klient_typ != 2\" class=\"row inp\">\n            <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('pesel').valid && klientForm.get('pesel').dirty, 'ok': klientForm.get('pesel').valid}\">\n              <input formControlName=\"pesel\" id=\"pesel\" type=\"text\" placeholder=\"PESEL\" [textMask]=\"{mask: peselmask}\">\n              <label for=\"pesel\">Pesel&nbsp;<sup>*</sup></label>\n            </div>\n            <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('nazwisko').valid && klientForm.get('nazwisko').dirty, 'ok': klientForm.get('nazwisko').valid}\">\n              <input formControlName=\"nazwisko\" id=\"nazwisko\" type=\"text\" placeholder=\"Nazwisko\">\n              <label for=\"nazwisko\" class=\"req\">Nazwisko&nbsp;<sup>*</sup></label>\n            </div>\n            <div class=\"input-field col-sm-4\" [ngClass] = \"{'error': !klientForm.get('imie').valid && klientForm.get('imie').dirty, 'ok': klientForm.get('imie').valid}\">\n              <input formControlName=\"imie\" id=\"imie\" type=\"text\" placeholder=\"Imie\">\n              <label for=\"imie\">Imie&nbsp;<sup>*</sup></label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n          <div class=\"card-header small-ch\">\n            Adres\n          </div>\n          <div class=\"row inp\">\n            <div class=\"input-field col-sm-2\" [ngClass] = \"{'error': !klientForm.get('kod').valid && klientForm.get('kod').dirty, 'ok': klientForm.get('kod').valid}\">\n              <input formControlName=\"kod\" type=\"text\" id=\"kod\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\">\n              <label for=\"kod\">Kod&nbsp;<sup>*</sup></label>\n            </div>\n            <div class=\"input-field col-sm-5\" [ngClass] = \"{'error': !klientForm.get('miejscowosc').valid && klientForm.get('miejscowosc').dirty, 'ok': klientForm.get('miejscowosc').valid}\">\n              <input formControlName=\"miejscowosc\" type=\"text\" id=\"miejscowosc\" placeholder=\"Miejscowość\">\n              <label for=\"miejscowosc\">Miejscowość&nbsp;<sup>*</sup></label>\n            </div>\n            <div class=\"input-field col-sm-5\" [ngClass] = \"{'error': !klientForm.get('ulica').valid && klientForm.get('ulica').dirty, 'ok': klientForm.get('ulica').valid}\">\n              <input formControlName=\"ulica\" type=\"text\" id=\"ulica\" placeholder=\"Adres\">\n              <label for=\"ulica\">Adres&nbsp;<sup>*</sup></label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n          <div class=\"card-header small-ch\">\n            Adres do korespondencji\n          </div>\n          <div class=\"row inp\">\n            <div class=\"input-field col-sm-2\">\n              <input formControlName=\"kod_k\" id=\"kod_k\" type=\"text\" id=\"kod_k\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\">\n              <label for=\"kod_k\">Kod</label>\n            </div>\n            <div class=\"input-field col-sm-5\">\n              <input formControlName=\"miejscowosc_k\" id=\"miejscowosc_k\" type=\"text\" placeholder=\"Miejscowość\">\n              <label for=\"miejscowosc_k\">Miejscowość</label>\n            </div>\n            <div class=\"input-field col-sm-5\">\n              <input formControlName=\"ulica_k\" type=\"text\" id=\"ulica_k\" placeholder=\"Adres\">\n              <label for=\"ulica_k\">Adres</label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n          <div class=\"card-header small-ch\">\n            Kontakt\n          </div>\n\n          <div class=\"row inp\">\n            <div class=\"input-field col-sm-3\">\n              <input formControlName=\"tel\" type=\"text\" id=\"tel\" placeholder=\"Telefon\">\n              <label for=\"tel\">Tel</label>\n            </div>\n            <div class=\"input-field col-sm-3\">\n              <input formControlName=\"tel_kom\" type=\"text\" id=\"tel_kom\" placeholder=\"Telefon kom.\">\n              <label for=\"tel_kom\">Tel. kom.</label>\n            </div>\n\n            <div class=\"input-field col-sm-6\">\n              <input formControlName=\"email\" type=\"text\" id=\"email\" placeholder=\"Email\">\n              <label for=\"email\">email</label>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n          <div class=\"card-header small-ch\">\n            Prawo jazdy\n          </div>\n          <div class=\"row inp justify-content-center\">\n            <div class=\"col-sm-6\">\n\n              <div class=\"parent\" style=\"display: table\">\n                <div class=\"input-group\" #data_wydContainer (mouseover)=\"labelDwHower()\">\n                  <input [(ngModel)]=\"data_w\" formControlName=\"data_wyd\" id=\"dw\" type=\"text\" class=\"form-control inp_n\"  placeholder=\"rrrr-mm-dd\" data-mask=\"9999-99-99\"\n                         ngbDatepicker #dw=\"ngbDatepicker\" (focus)=\"focusData()\" (keyup)=\"setData_wyd($event)\" (click)=\"dw.close()\" (blur)=\"focusOutData($event)\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" style=\"padding-top: 3px; padding-bottom: 3px;\" (click)=\"dw.toggle()\" type=\"button\">\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i>\n                    </button>\n                  </div>\n                </div>\n                <label for=\"dw\" class=\"dw\" id=\"label_dw\" [style.color]=\"lData\" style=\"display: table-header-group\">Data wyd.</label>\n              </div>\n            </div>\n            <div class=\"input-field col-sm-3\">\n              <select formControlName=\"Kat\" id=\"Kat\" style=\"height: 32px;\">\n                <option class=\"options\" style=\"font-weight: bold;\" *ngFor=\"let typ_prawojazdy of typ_prawojazdys\" [value]=\"typ_prawojazdy\">{{typ_prawojazdy}}</option>\n              </select>\n              <label for=\"Kat\">Kategoria</label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n          <div class=\"card-header small-ch\">\n            Dane podatkowe\n          </div>\n          <div class=\"row inp justify-content-center\">\n            <div class=\"input-field col-sm-3\">\n              <input formControlName=\"nip\" type=\"text\" id=\"nip\" placeholder=\"NIP\" [textMask]=\"{mask: nipmask}\">\n              <label for=\"nip\">Nip</label>\n            </div>\n            <div *ngIf=\"klient_typ > 1\" class=\"input-field col-sm-3\">\n              <input formControlName=\"regon\" type=\"text\" id=\"regon\" placeholder=\"Regon\">\n              <label for=\"regon\">Rregon</label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px; margin-bottom: 10px;\">\n          <div class=\"card-header small-ch\">\n            Uwagi\n          </div>\n          <div class=\"row\" style=\"margin-left: 10px; margin-right: 10px; margin-top: 5px; margin-bottom: 5px;\">\n            <div class=\"input-field col-sm-12\">\n              <textarea formControlName=\"uwagi\" rows=\"4\"></textarea>\n            </div>\n          </div>\n\n\n        </div>\n        <hr style=\"padding-bottom: 10px; margin-bottom: 0px;\">\n        <div style=\"padding-bottom: 10px; padding-right: 10px;\" class=\"col-sm-2 offset-sm-10\">\n          <!--button [disabled] = \"klientForm.invalid\" id=\"zapiszK\" (click) = \"createKlient()\" style=\"font-weight: bold; color: white;\" type=\"button\" class=\"btn edit\">\n            <i style=\"margin-right: 10px; color:green; font-size: 18px;\" class=\"fa fa-check\"></i>Dodaj klienta\n          </button-->\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!--div class='wrapper'>\n  <app-nav-module></app-nav-module>\n  <div class='content'   [ngClass]=\"{'isOpen': toggle}\">\n\n\n    <div class=\"container\">\n  <div class=\"card\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\n    <div class=\"card-header\" style=\"padding-bottom: 5px; padding-top: 5px;\">\n      <a class='button' style=\"color: white\" (click)=\"clickEvent($event)\"><span class=\"fa\" [ngClass]=\"{'fa-bars': !toggle, 'fa-times': toggle}\"></span></a>\n      <strong>\n      {{klient.n_firmy}} {{klient.nazwisko}} {{klient.imie}}\n    </strong>\n      <button class=\"close float-right\" style=\"color: #e6e6e6;padding-bottom: 5px; padding-left: 5px; padding-right: 5px;\" [routerLink]=\"['/klients']\" [routerLinkActive]=\"'active'\"><span>&times;</span></button>\n    </div>\n    <form [formGroup]=\"klientForm\">\n      <div class=\"row inp justify-content-center\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup id=\"typ_prawny\" formControlName=\"typ_prawny\" (change)=\"ustaw($event)\">\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input  ngbButton type=\"radio\" [value]=1> Klient indywidualny\n          </label>\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input ngbButton type=\"radio\" [value]=2> Firma\n          </label>\n          <label ngbButtonLabel class=\"btn-primary\">\n            <input ngbButton type=\"radio\" [value]=3> Klient indyw. prow. dział. gosp.\n          </label>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Klient\n        </div>\n        <div *ngIf=\"klient_typ > 1\" class=\"row inp\">\n          <div class=\"input-field col-sm-12\">\n            <input formControlName=\"n_firmy\" id=\"n_firmy\" type=\"text\" placeholder=\"Nazwa firmy\" [ngClass] = \"{'error': !klientForm.get('n_firmy').valid && klientForm.get('n_firmy').dirty, 'ok': klientForm.get('n_firmy').valid}\">\n            <label for=\"n_firmy\" [ngClass] = \"{'error': !klientForm.get('n_firmy').valid && klientForm.get('n_firmy').dirty, 'ok': klientForm.get('n_firmy').valid}\">Nazwa firmy&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n\n        <div *ngIf=\"klient_typ != 2\" class=\"row inp\">\n          <div class=\"input-field col-sm-4\">\n            <input formControlName=\"pesel\" id=\"pesel\" type=\"text\" placeholder=\"PESEL\" [textMask]=\"{mask: peselmask}\" (blur)=\"sprawdz('p')\" [ngClass] = \"{'error': !klientForm.get('nazwisko').valid && klientForm.get('nazwisko').dirty, 'ok': klientForm.get('nazwisko').valid}\">\n            <label for=\"pesel\">Pesel&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-4\">\n            <input formControlName=\"nazwisko\" id=\"nazwisko\" type=\"text\" placeholder=\"Nazwisko\" [ngClass] = \"{'error': !klientForm.get('nazwisko').valid && klientForm.get('nazwisko').dirty, 'ok': klientForm.get('nazwisko').valid}\">\n            <label for=\"nazwisko\" class=\"req\" [ngClass] = \"{'error': !klientForm.get('nazwisko').valid && klientForm.get('nazwisko').dirty, 'ok': klientForm.get('nazwisko').valid}\">Nazwisko&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-4\">\n            <input formControlName=\"imie\" id=\"imie\" type=\"text\" placeholder=\"Imie\" [ngClass] = \"{'error': !klientForm.get('imie').valid && klientForm.get('imie').dirty, 'ok': klientForm.get('imie').valid}\">\n            <label for=\"imie\" [ngClass] = \"{'error': !klientForm.get('imie').valid && klientForm.get('imie').dirty, 'ok': klientForm.get('imie').valid}\">Imie&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Adres\n        </div>\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-2\">\n            <input formControlName=\"kod\" type=\"text\" id=\"kod\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\" [ngClass] = \"{'error': !klientForm.get('kod').valid && klientForm.get('kod').dirty, 'ok': klientForm.get('kod').valid}\">\n            <label for=\"kod\" [ngClass] = \"{'error': !klientForm.get('kod').valid && klientForm.get('kod').dirty, 'ok': klientForm.get('kod').valid}\">Kod&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"miejscowosc\" type=\"text\" id=\"miejscowosc\" placeholder=\"Miejscowość\" [ngClass] = \"{'error': !klientForm.get('miejscowosc').valid && klientForm.get('miejscowosc').dirty, 'ok': klientForm.get('miejscowosc').valid}\">\n            <label for=\"miejscowosc\" [ngClass] = \"{'error': !klientForm.get('miejscowosc').valid && klientForm.get('miejscowosc').dirty, 'ok': klientForm.get('miejscowosc').valid}\">Miejscowość&nbsp;<sup>*</sup></label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"ulica\" type=\"text\" id=\"ulica\" placeholder=\"Adres\" [ngClass] = \"{'error': !klientForm.get('ulica').valid && klientForm.get('ulica').dirty, 'ok': klientForm.get('ulica').valid}\">\n            <label for=\"ulica\" [ngClass] = \"{'error': !klientForm.get('ulica').valid && klientForm.get('ulica').dirty, 'ok': klientForm.get('ulica').valid}\">Adres&nbsp;<sup>*</sup></label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 8px;\">\n        <div class=\"card-header small-ch\">\n          Adres do korespondencji\n        </div>\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-2\">\n            <input formControlName=\"kod_k\" id=\"kod_k\" type=\"text\" id=\"kod_k\" placeholder=\"Kod\" [textMask]=\"{mask: kodmask}\">\n            <label for=\"kod_k\">Kod</label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"miejscowosc_k\" id=\"miejscowosc_k\" type=\"text\" placeholder=\"Miejscowość\">\n            <label for=\"miejscowosc_k\">Miejscowość</label>\n          </div>\n          <div class=\"input-field col-sm-5\">\n            <input formControlName=\"ulica_k\" type=\"text\" id=\"ulica_k\" placeholder=\"Adres\">\n            <label for=\"ulica_k\">Adres</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Kontakt\n        </div>\n\n        <div class=\"row inp\">\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"tel\" type=\"text\" id=\"tel\" placeholder=\"Telefon\">\n            <label for=\"tel\">Tel</label>\n          </div>\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"tel_kom\" type=\"text\" id=\"tel_kom\" placeholder=\"Telefon kom.\">\n            <label for=\"tel_kom\">Tel. kom.</label>\n          </div>\n\n          <div class=\"input-field col-sm-6\">\n            <input formControlName=\"email\" type=\"text\" id=\"email\" placeholder=\"Email\">\n            <label for=\"email\">email</label>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Prawo jazdy\n        </div>\n        <div class=\"row inp justify-content-center\">\n          <div class=\"col-sm-6\">\n\n            <div class=\"parent\" style=\"display: table\">\n              <div class=\"input-group\" #data_wydContainer>\n                <input [(ngModel)]=\"data_w\" formControlName=\"data_wyd\" id=\"dw\" type=\"text\" class=\"form-control inp_n\"  placeholder=\"rrrr-mm-dd\" data-mask=\"9999-99-99\"\n                       ngbDatepicker #dw=\"ngbDatepicker\" (focus)=\"focusData()\" (keyup)=\"setData_wyd($event)\" (click)=\"dw.close()\" (blur)=\"focusOutData()\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" style=\"padding-top: 3px; padding-bottom: 3px;\" (click)=\"dw.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i>\n                  </button>\n                </div>\n              </div>\n              <label for=\"dw\" class=\"dw\" id=\"label_dw\" [style.color]=\"lData\" style=\"display: table-header-group\">Data wyd.</label>\n            </div>\n          </div>\n          <div class=\"input-field col-sm-3\">\n            <select formControlName=\"Kat\" id=\"Kat\" style=\"height: 32px;\">\n              <option style=\"font-weight: bold;\" *ngFor=\"let typ_prawojazdy of typ_prawojazdys\" [value]=\"typ_prawojazdy\">{{typ_prawojazdy}}</option>\n            </select>\n            <label for=\"Kod\">Kategoria</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px;\">\n        <div class=\"card-header small-ch\">\n          Dane podatkowe\n        </div>\n        <div class=\"row inp justify-content-center\">\n          <div class=\"input-field col-sm-3\">\n            <input formControlName=\"nip\" type=\"text\" id=\"nip\" placeholder=\"NIP\" [textMask]=\"{mask: nipmask}\">\n            <label for=\"nip\">Nip</label>\n          </div>\n          <div *ngIf=\"klient_typ > 1\" class=\"input-field col-sm-3\">\n            <input formControlName=\"regon\" type=\"text\" id=\"regon\" placeholder=\"Regon\">\n            <label for=\"regon\">Rregon</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card small-c\" style=\"margin-left: 15px; margin-right: 15px; margin-top: 10px; margin-bottom: 10px;\">\n        <div class=\"card-header small-ch\">\n          Uwagi\n        </div>\n        <div class=\"row\" style=\"margin-left: 10px; margin-right: 10px; margin-top: 5px; margin-bottom: 5px;\">\n          <div class=\"input-field col-sm-12\">\n            <textarea formControlName=\"uwagi\" rows=\"4\"></textarea>\n          </div>\n        </div>\n      </div>\n      <hr style=\"padding-bottom: 10px; margin-bottom: 0px;\">\n      <div style=\"padding-bottom: 10px; padding-right: 10px;\" class=\"float-right\">\n        <button [disabled] = \"klientForm.invalid\" (click)=\"updateKlient()\" type=\"button\" class=\"btn btn-labeled btn-success btn-sm\"><span class=\"btn-label\"><i class=\"fa fa-check\"></i></span>Zapisz</button>\n        <button [disabled] = \"klientForm.invalid\" (click)=\"open(content)\" type=\"button\" class=\"btn btn-labeled btn-danger btn-sm\"><span class=\"btn-label\"><i class=\"fa fa-times\"></i></span>Usuń</button>\n      </div>\n    </form>\n  </div>\n</div>\n  </div>\n</div-->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\" style=\"background-color: red; color: white;\">\n    <h4 class=\"modal-title\">Uwaga !!!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\" style=\"color: #fff !important; opacity: 1 !important;\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Czy na pewno chcesz usunąć klienta<strong> {{klient.n_firmy}} {{klient.nazwisko}} {{klient.imie}}</strong> ?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button (click)=\"c('Close click'); deleteKlient();\" type=\"button\" class=\"btn btn-labeled btn-danger btn-sm\"><span class=\"btn-label\"><i class=\"fa fa-times\"></i></span>Tak</button>\n    <button (click)=\"c('Close click')\" type=\"button\" class=\"btn btn-labeled btn-success btn-sm\"><span class=\"btn-label\"><i class=\"fa fa-check\"></i></span>Nie</button>\n  </div>\n</ng-template>\n\n<pre style=\"color: white;\">Is myForm valid?: <br>{{klientForm.valid | json}}</pre>\n<pre style=\"color: white;\"> {{klientForm.value | json}}</pre>\n"

/***/ }),

/***/ "./src/app/home/klienci/klient-edit/klient-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18n */
/* unused harmony export CustomDatepickerI18n */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__klients_service__ = __webpack_require__("./src/app/home/klienci/klients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var I18N_VALUES = {
    'pl': {
        weekdays: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'],
        months: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    }
};
var I18n = (function () {
    function I18n() {
        this.language = 'pl';
    }
    I18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], I18n);
    return I18n;
}());

var CustomDatepickerI18n = (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerI18n */]));

var now = new Date();
var KlientEditComponent = (function () {
    function KlientEditComponent(formBuilder, klientsService, route, cookieService, router, modalService) {
        this.formBuilder = formBuilder;
        this.klientsService = klientsService;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.modalService = modalService;
        this.peselmask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.kodmask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.nipmask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.klient_typ = 1;
        this.oldDate = {};
        this.lData = '#999';
        this.hover = false;
        this.toggle = false;
    }
    KlientEditComponent.prototype.click = function () {
        var data_wydIsOpen = this.dw.isOpen();
        if (data_wydIsOpen) {
            if (this.data_wydContainer && this.data_wydContainer.nativeElement && !this.data_wydContainer.nativeElement.contains(event.target)) {
                this.dw.close();
            }
        }
    };
    KlientEditComponent.prototype.ngOnInit = function () {
        this.cookieService.delete('flash_ok');
        this.cookieService.delete('flash_error');
        this.typ_prawojazdys = ['A', 'B', 'B+E', 'C', 'C+E', 'D'];
        this.klientForm = this.buildKlientForm();
        this.getKlient();
        this.klientIndVal();
    };
    KlientEditComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    KlientEditComponent.prototype.labelDwHower = function () {
        this.hover = !this.hover;
        if (this.hover) {
            this.lData = '#faffbd';
        }
        else {
            this.lData = '#a5b1be';
        }
    };
    KlientEditComponent.prototype.clickEvent = function () {
        this.toggle = !this.toggle;
    };
    KlientEditComponent.prototype.focusData = function () {
        this.oldDate = this.klientForm.get('data_wyd').value;
        this.lData = '#faffbd';
    };
    KlientEditComponent.prototype.focusOutData = function (event) {
        if (event.target.value === '____-__-__' || event.target.value.indexOf("-") >= 0) {
            var udate = this.klientForm.get('data_wyd').value;
            var dNapis = udate['year'].toString() + '-';
            if (udate['month'] < 10)
                dNapis = dNapis + '0';
            dNapis = dNapis + udate['month'].toString() + '-';
            if (udate['day'] < 10)
                dNapis = dNapis + '0';
            dNapis = dNapis + udate['day'];
            event.target.value = dNapis;
        }
        this.lData = '#a5b1be';
    };
    KlientEditComponent.prototype.setData_wyd = function (event) {
        if (this.checkString(event.target.value)) {
            var d = new Date(event.target.value);
            var month = parseInt(event.target.value.substring(5, 7), 10);
            var day = parseInt(event.target.value.substring(8, 10), 10);
            if (month === d.getMonth() + 1 && day === d.getDate()) {
                document.getElementById('label_dw').innerText = 'Data wyd.';
                this.data_w = { year: parseInt(event.target.value.substring(0, 4), 10), month: month, day: day };
            }
            else {
                document.getElementById('label_dw').innerText = 'Data wyd. (bez zmian)';
                this.data_w = {
                    year: parseInt(String(this.oldDate['year']), 10),
                    month: parseInt(String(this.oldDate['month']), 10),
                    day: parseInt(String(this.oldDate['day']), 10)
                };
            }
        }
    };
    KlientEditComponent.prototype.checkString = function (sprawdz) {
        if (sprawdz.indexOf('_') !== -1) {
            return false;
        }
        else {
            return true;
        }
    };
    KlientEditComponent.prototype.ustaw = function (event) {
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
    };
    KlientEditComponent.prototype.buildKlientForm = function () {
        return this.formBuilder.group({
            typ_prawny: 1,
            n_firmy: '',
            pesel: '',
            nazwisko: '',
            imie: '',
            kod: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            miejscowosc: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]],
            ulica: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]],
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
    };
    KlientEditComponent.prototype.klientIndVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators(null);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(11)]);
        peselCtrl.updateValueAndValidity();
    };
    KlientEditComponent.prototype.firmaVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators(null);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators(null);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators(null);
        peselCtrl.updateValueAndValidity();
        console.log(n_firmyCtrl);
    };
    KlientEditComponent.prototype.klientDzialVal = function () {
        var n_firmyCtrl = this.klientForm.controls.n_firmy;
        n_firmyCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        n_firmyCtrl.updateValueAndValidity();
        var nazwiskoCtrl = this.klientForm.controls.nazwisko;
        nazwiskoCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        nazwiskoCtrl.updateValueAndValidity();
        var imieCtrl = this.klientForm.controls.imie;
        imieCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]);
        imieCtrl.updateValueAndValidity();
        var peselCtrl = this.klientForm.controls.pesel;
        peselCtrl.setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(11)]);
        peselCtrl.updateValueAndValidity();
    };
    KlientEditComponent.prototype.updateKlient = function () {
        var _this = this;
        this.klientsService.updateKlient(this.klientForm.value, this.klient._id).subscribe(function (data) { _this.cookieService.set('flash_ok', 'Zaktualizowano klienta !'); _this.router.navigate(['klients']); }, function (err) { _this.cookieService.set('flash_error', 'Wystąpił błąd podczas aktualizacji klienta !'); _this.router.navigate(['klients']); });
    };
    KlientEditComponent.prototype.deleteKlient = function () {
        var _this = this;
        this.klientsService.deleteKlient(this.klient._id).subscribe(function (data) { _this.cookieService.set('flash_ok', 'Usunięto klienta !'); _this.router.navigate(['klients']); }, function (err) { _this.cookieService.set('flash_error', 'Wystąpił błąd podczas usuwania klienta !'); _this.router.navigate(['klients']); });
    };
    KlientEditComponent.prototype.getKlient = function () {
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
            var data_wyd_s = new Date(this.klient['data_wyd']).toISOString();
            // console.log(data_wyd_s);
            var month = parseInt(data_wyd_s.substring(5, 7), 10);
            var day = parseInt(data_wyd_s.substring(8, 10), 10);
            var year = parseInt(data_wyd_s.substring(0, 4), 10);
            this.data_w = {
                year: year,
                month: month,
                day: day
            };
        }
        // console.log(this.klient['data_wyd']);
        // this.klientForm.get('data_wyd').setValue(this.klient['data_wyd']);
        this.klientForm.get('Kat').setValue(this.klient['Kat']);
        this.klientForm.get('nip').setValue(this.klient['nip']);
        this.klientForm.get('regon').setValue(this.klient['regon']);
        this.klientForm.get('uwagi').setValue(this.klient['uwagi']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dw'),
        __metadata("design:type", Object)
    ], KlientEditComponent.prototype, "dw", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('data_wydContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], KlientEditComponent.prototype, "data_wydContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KlientEditComponent.prototype, "click", null);
    KlientEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-klient-edit',
            template: __webpack_require__("./src/app/home/klienci/klient-edit/klient-edit.component.html"),
            styles: [__webpack_require__("./src/app/home/klienci/klient-edit/klient-edit.component.css")],
            providers: [I18n, { provide: __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerI18n */], useClass: CustomDatepickerI18n }],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__klients_service__["a" /* KlientsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], KlientEditComponent);
    return KlientEditComponent;
}());



/***/ }),

/***/ "./src/app/home/klienci/klient-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__klients_service__ = __webpack_require__("./src/app/home/klienci/klients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KlientResolve = (function () {
    function KlientResolve(klientsService) {
        this.klientsService = klientsService;
    }
    KlientResolve.prototype.resolve = function (route) {
        return this.klientsService.getKlient(route.params['id']);
    };
    KlientResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__klients_service__["a" /* KlientsService */]])
    ], KlientResolve);
    return KlientResolve;
}());



/***/ }),

/***/ "./src/app/home/klienci/klients-list/klients-list.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\r\n  width: 100%;\r\n}\r\n\r\ntable thead,\r\ntable tbody {\r\n  display: table;\r\n  width: 100% !important;\r\n}\r\n\r\ntable.loading tbody {\r\n  position: relative;\r\n}\r\n\r\ntable.loading tbody:after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  background-image: url('../../../../assets/gears.svg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 50px 50px;\r\n  content: \"\";\r\n}\r\n*/\r\n\r\nth{\r\n  font-family: Roboto,sans-serif;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  background-color: #000;\r\n  color: #A5B1BE;\r\n}\r\n\r\ntd{\r\n  font-family: Roboto,sans-serif;\r\n  font-size: 15px;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n /* background-color: #2d333a; */\r\n  color: #fff;\r\n /* border-top: 1px solid #9e9e9e !important;\r\n  border-bottom: 1px solid #9e9e9e;*/\r\n}\r\n\r\ntbody > tr > td{\r\n  border-top: 1px solid #1D2733 !important;\r\n  border-bottom: 1px solid #1D2733;\r\n}\r\n\r\ntr:nth-of-type(odd), tr:nth-of-type(odd).nolink:hover {\r\n  background-color: #515c65;\r\n}\r\n\r\ntr:nth-of-type(odd):hover {\r\n  background-color: #47525B;\r\n}\r\n\r\ntr:nth-of-type(even), tr:nth-of-type(even).nolink:hover {\r\n  background-color: #3f4852;\r\n}\r\n\r\ntr:nth-of-type(even):hover {\r\n  background-color: #353E48;\r\n}\r\n\r\n/*.table-hover tbody tr:hover {\r\n  background-color: #a1a6a9;\r\n}\r\n*/\r\n\r\n.active > td{\r\n  background-color: #1f252b !important;\r\n  color: #faffbd !important;\r\n}\r\n\r\n.input-field input[type=text] {\r\n  font-family: Roboto,sans-serif;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #57bff7;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  margin: 0 0 5px 0;\r\n  padding: 10px 10px 10px 10px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  display: table-row-group;\r\n  color: #faffbd;\r\n}\r\n\r\n.input-field input[type=text]:focus {border-bottom:1px solid #faffbd;-webkit-box-shadow:0 1px 0 0 #faffbd;box-shadow:0 1px 0 0 #faffbd;}\r\n\r\n.input-field input[type=text]:hover {border-bottom:1px solid #faffbd;-webkit-box-shadow:0 1px 0 0 #faffbd;box-shadow:0 1px 0 0 #faffbd;}\r\n\r\n.no-data-available {\r\n  text-align: center;\r\n}\r\n\r\n.red.green{\r\n  color: white;\r\n  background-color: red;\r\n}\r\n\r\n.green{\r\n  color: white;\r\n  background-color: green;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/klienci/klients-list/klients-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-module></app-nav-module>\n<div class='wrapper'>\n\n    <div class=\"content\" [ngClass]=\"{'isOpen': toggle}\">\n\n      <div class=\"row\"  style=\"background-color: #373f46; margin-left: 0px; margin-right: 0px;\">\n        <div class=\"col-sm-1\" [ngClass]=\"{'nav-is-visible': toggle}\">\n        <a class=\"cd-3d-nav-trigger\" (click)=\"clickEvent()\" style=\"cursor: pointer;\">\n          Menu\n          <span></span>\n        </a>\n        </div>\n        <div class=\"col-sm-1 offset-sm-10\" style=\"padding-top: 10px;\">\n          <button style=\"color: white; font-weight: bold;\" class=\"btn btn-warning btn-sm\" [routerLink]=\"['/login']\">Wyloguj</button>\n        </div>\n  </div>\n\n      <div class=\"container\" style=\"background-color: #384B5C; border-radius: 4px 4px 4px 4px; margin-top: 15px;\">\n        <div style=\"margin-top: 10px;\">\n       <flash-messages></flash-messages>\n    </div>\n        <div class=\"row\" style=\"padding-bottom: 10px;\">\n    <div class=\"col-6 input-field\">\n      <input [(ngModel)]=\"filter\" (input) =\"zmiana()\" type=\"text\" placeholder=\"Szukaj klienta...\" style=\"font-weight: bold; font-size: 20px;\" >\n    </div>\n  </div>\n        <div class=\"row\" style=\"padding-left: 5px; padding-right: 5px;\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\" style=\"border-bottom: 1px solid #dee2e6;\">\n      <thead>\n      <tr>\n        <th style=\"display: none\">_id</th>\n        <th (click)=\"sort('klient')\" style=\"cursor: pointer;\">Klient\n          <span class=\"fa float-right\" *ngIf=\"key =='klient'\" [ngClass]=\"{'fa-sort-amount-asc': reverse, 'fa-sort-amount-desc': !reverse}\"></span>\n        </th>\n        <th (click)=\"sort('miejscowosc')\" style=\"cursor: pointer;\">Miejscowość\n          <span class=\"fa float-right\" *ngIf=\"key =='miejscowosc'\" [ngClass]=\"{'fa-sort-amount-asc': reverse, 'fa-sort-amount-desc': !reverse}\" ></span>\n        </th>\n        <th>Adres</th>\n        <th>Telefon</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let klient of Klients | orderBy: order | paginate: { itemsPerPage: 5, currentPage: p, totalItems: tItems };\" [class.active]=\"klient._id === id\" (click)=\"trClick(klient._id)\">\n          <!--(click)=\"clicked = (clicked === klient ? null :klient)\"-->\n        <td style=\"display: none\">{{klient._id}}</td>\n        <td>{{klient.klient | uppercase}}</td>\n        <td>{{klient.miejscowosc}}</td>\n        <td>{{klient.ulica}}</td>\n        <td>{{klient.tel}}</td>\n        <td style=\"padding-top: 3px; padding-left: 0px; padding-right: 0px; padding-bottom: 2px;\">\n          <!--button  class=\"btn btn-outline-primary\" [routerLink]=\"['/klient/', klient._id]\" (click)=\"setActive(klient._id)\" style=\"width: 40px; padding-top: 5px; padding-bottom: 5px;\"><i style=\"padding-bottom: 0px;\" class=\"fa fa-info\"></i></button-->\n          <button [routerLink]=\"['/klient/', klient._id]\" style=\"padding-top: 5px; padding-bottom: 5px; font-weight: bold; color: #fff;\" class=\"btn edit\" (click)=\"setActive(klient._id)\">\n            <i style=\"color:blue; font-size: 18px; margin-right: 10px;\" class=\"fa fa-check\"></i>Edytuj\n          </button>\n        </td>\n\n      </tr>\n\n      <!--tr *ngIf=\"Klients?.length % 5 != 0 && 5 - (Klients?.length % 5) > 8\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - (Klients?.length % 5) > 7\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 6\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 5\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr-->\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 4\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 3\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 2\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 1\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"Klients?.length % 5 != 0 && 5 - Klients?.length % 5 > 0\">\n        <td colspan=\"6\">&nbsp;</td>\n      </tr>\n\n      <tr *ngIf=\"tItems == 0\">\n        <td colspan=\"6\" class=\"no-data-available table-warning\"><strong>Brak danych!</strong></td>\n      </tr>\n\n      </tbody>\n    </table>\n          </div>\n        </div>\n    <div class=\"row justify-content-center\">\n    <pagination-controls class=\"my-pagination\" style=\"font-weight: bold;\"\n                         (pageChange)=\"pageChanged($event);\"\n                         maxSize=\"5\"\n                         previousLabel=\"\"\n                         nextLabel=\"\">\n    </pagination-controls>\n  </div>\n</div>\n</div>\n</div>\n\n<ng-template id=\"content2\" #content2 let-c=\"close\" let-d=\"dismiss\">\n  <div id=\"modalh\" #modalh class=\"modal-header green\">\n    <h6 class=\"modal-title\">Uwaga !!!</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\" style=\"color: #fff !important; opacity: 1 !important;\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{uwaga}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button (click)=\"c('Close click')\" type=\"button\" class=\"btn btn-labeled btn-success btn-sm\"><span class=\"btn-label\"><i class=\"fa fa-check\"></i></span>Ok</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/home/klienci/klients-list/klients-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__klients_service__ = __webpack_require__("./src/app/home/klienci/klients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KlientsListComponent = (function () {
    function KlientsListComponent(klientsService, cookieService, _flashMessagesService, modalService) {
        this.klientsService = klientsService;
        this.cookieService = cookieService;
        this._flashMessagesService = _flashMessagesService;
        this.modalService = modalService;
        this.uwaga = '';
        this.toggle = false;
        this.filter = '';
        this.key = 'id';
        this.reverse = false;
        this.param = {};
        this.id = '';
    }
    KlientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.check('flash_ok')) {
            setTimeout(function () {
                _this.modalService.open(_this.content2);
                _this.uwaga = _this.cookieService.get('flash_ok');
            });
        }
        if (this.cookieService.check('flash_error')) {
            setTimeout(function () {
                _this.modalService.open(_this.content2);
                _this.uwaga = _this.cookieService.get('flash_error');
                document.getElementById('modalh').className = 'modal-header green red';
            });
        }
        if (this.cookieService.check('page')) {
            if (this.cookieService.check('key')) {
                this.param = { sort: [this.cookieService.get('key'), parseInt(this.cookieService.get('kierunek'), 10)] };
            }
            else {
                this.param = { sort: ['_id', -1] };
            }
            this.param['page'] = parseInt(this.cookieService.get('page'), 10);
            this.param['filter'] = this.cookieService.get('filter');
            this.postKlientDt();
            this.filter = this.cookieService.get('filter');
            this.p = parseInt(this.cookieService.get('page'), 10);
            this.key = this.cookieService.get('key');
            if (this.cookieService.get('kierunek') === "-1") {
                this.reverse = false;
            }
            else {
                this.reverse = true;
            }
        }
        else {
            this.param = { sort: ['_id', -1] };
            this.postKlientDt();
        }
        if (this.cookieService.check('id'))
            this.id = this.cookieService.get('id');
    };
    KlientsListComponent.prototype.open = function (content2) {
        this.modalService.open(content2);
    };
    KlientsListComponent.prototype.clickEvent = function () {
        this.toggle = !this.toggle;
    };
    KlientsListComponent.prototype.sort = function (key) {
        var kierunek = -1;
        this.key = key;
        this.reverse = !this.reverse;
        if (this.reverse)
            kierunek = 1;
        this.cookieService.set('key', key);
        this.cookieService.set('kierunek', kierunek.toString());
        this.param = { sort: [key, kierunek] };
        this.param['page'] = this.p;
        var search = this.filter.toLowerCase();
        this.param['filter'] = search;
        this.postKlientDt();
    };
    KlientsListComponent.prototype.zmiana = function () {
        if (this.filter !== "") {
            var search = this.filter.toLowerCase();
            this.param['filter'] = search;
            this.postKlientDt();
            this.cookieService.set('filter', search);
        }
        else {
            this.param['filter'] = '';
            this.postKlientDt();
            this.cookieService.set('filter', '');
        }
    };
    KlientsListComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.param['page'] = this.p;
        this.postKlientDt();
        this.cookieService.set('page', this.p.toString());
    };
    KlientsListComponent.prototype.setActive = function (id) {
        this.cookieService.set('id', id);
    };
    KlientsListComponent.prototype.trClick = function (id) {
        this.id = id;
    };
    KlientsListComponent.prototype.postKlientDt = function () {
        var _this = this;
        this.klientsService.postKlientDt(this.param).subscribe(function (data) { _this.Klients = data.data; _this.tItems = data.recordsFiltering; }, function (err) { _this._flashMessagesService.show('Brak połączenia z serwerem!', { cssClass: 'alert alert-success', showCloseBtn: true, timeout: 1000000000 }); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], KlientsListComponent.prototype, "content2", void 0);
    KlientsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-klients-list',
            template: __webpack_require__("./src/app/home/klienci/klients-list/klients-list.component.html"),
            styles: [__webpack_require__("./src/app/home/klienci/klients-list/klients-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__klients_service__["a" /* KlientsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], KlientsListComponent);
    return KlientsListComponent;
}());



/***/ }),

/***/ "./src/app/home/klienci/klients.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klients_list_klients_list_component__ = __webpack_require__("./src/app/home/klienci/klients-list/klients-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_module_nav_module_component__ = __webpack_require__("./src/app/home/klienci/nav-module/nav-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__klients_service__ = __webpack_require__("./src/app/home/klienci/klients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__klient_create_klient_create_component__ = __webpack_require__("./src/app/home/klienci/klient-create/klient-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__klient_edit_klient_edit_component__ = __webpack_require__("./src/app/home/klienci/klient-edit/klient-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__klient_resolve_service__ = __webpack_require__("./src/app/home/klienci/klient-resolve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var KlientsModule = (function () {
    function KlientsModule() {
    }
    KlientsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */] //,
                // CoreModule
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__klients_list_klients_list_component__["a" /* KlientsListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__klients_service__["a" /* KlientsService */], __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_15__klient_resolve_service__["a" /* KlientResolve */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__klients_list_klients_list_component__["a" /* KlientsListComponent */], __WEBPACK_IMPORTED_MODULE_9__nav_module_nav_module_component__["a" /* NavModuleComponent */], __WEBPACK_IMPORTED_MODULE_12__klient_create_klient_create_component__["a" /* KlientCreateComponent */], __WEBPACK_IMPORTED_MODULE_14__klient_edit_klient_edit_component__["a" /* KlientEditComponent */]] //, KlientCreateComponent, KlientDetailComponent, KlientEditComponent]
        })
    ], KlientsModule);
    return KlientsModule;
}());



/***/ }),

/***/ "./src/app/home/klienci/klients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var KlientsService = (function () {
    function KlientsService(http) {
        this.http = http;
    }
    KlientsService.prototype.postKlientDt = function (param) {
        var body = JSON.stringify(param);
        var key = localStorage.getItem('key');
        var httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'x-access-token': key })
        };
        return this.http.post('http://localhost:3000/api/klientdt', body, httpOptions2);
    };
    KlientsService.prototype.getKlient = function (id) {
        var key = localStorage.getItem('key');
        var httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'x-access-token': key })
        };
        return this.http.get('http://localhost:3000/api/klient/' + id, httpOptions2);
    };
    KlientsService.prototype.createKlient = function (klient) {
        var body = JSON.stringify(klient);
        var key = localStorage.getItem('key');
        var httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'x-access-token': key })
        };
        return this.http.post('http://localhost:3000/api/klient_new', body, httpOptions2);
    };
    KlientsService.prototype.updateKlient = function (klient, id) {
        var body = JSON.stringify(klient);
        return this.http.put('http://localhost:8080/api/klient/' + id, body, httpOptions);
    };
    KlientsService.prototype.deleteKlient = function (id) {
        return this.http.delete('http://localhost:8080/api/klient/' + id, httpOptions);
    };
    KlientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], KlientsService);
    return KlientsService;
}());



/***/ }),

/***/ "./src/app/home/klienci/nav-module/nav-module.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600\");\r\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n.sidebar {\r\n  position: absolute;\r\n  width: 220px;\r\n}\r\n/* Demo Navigation */\r\n.title {\r\n  font-size: 16px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  letter-spacing: 7px;\r\n  color: #eee;\r\n  border-bottom: 1px solid #222;\r\n  background: #2a2a2a;\r\n}\r\n.navi li a {\r\n  position: relative;\r\n  display: block;\r\n  padding: 20px 0 20px 50px;\r\n  font-size: 12px;\r\n  color: #eee;\r\n  border-bottom: 1px solid #222;\r\n}\r\n.navi li a:before {\r\n  font: 14px fontawesome;\r\n  position: absolute;\r\n  top: 19px;\r\n  left: 20px;\r\n}\r\n.navi li a:hover {\r\n  background: #444;\r\n}\r\n.navi li a.active {\r\n  -webkit-box-shadow: inset 5px 0 0 #5b5, inset 6px 0 0 #222;\r\n          box-shadow: inset 5px 0 0 #5b5, inset 6px 0 0 #222;\r\n  background: #444;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/klienci/nav-module/nav-module.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='sidebar'>\n  <div class='title'>\n    Agent\n  </div>\n  <ul class='navi'>\n    <li>\n      <a [routerLink]=\"['/klienci/list']\" [routerLinkActive]=\"'active'\">Klienci</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/klientn']\" [routerLinkActive]=\"'active'\">Nowy klient</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/login']\">Wylogowanie</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/home/klienci/nav-module/nav-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavModuleComponent = (function () {
    function NavModuleComponent() {
    }
    NavModuleComponent.prototype.ngOnInit = function () {
    };
    NavModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app-nav-module',
            template: __webpack_require__("./src/app/home/klienci/nav-module/nav-module.component.html"),
            styles: [__webpack_require__("./src/app/home/klienci/nav-module/nav-module.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavModuleComponent);
    return NavModuleComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 150px;\">\n  <div style=\"height:350px; background-color: #384B5C; border-radius: 4px 4px 4px 4px;\">\n    <div style=\"height: 50px;\">\n       <alert class=\"text-center noradiusa\"></alert>\n    </div>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n\n       <div class=\"row\" style=\"padding-right: 20px; padding-left: 20px; margin-top: 15px;\">\n         <div class=\"col-sm-1 text-sm-right\">\n          <i style=\"color: white; font-size: 20px; padding-top: 20px;\" class=\"fa fa-user\"></i>\n         </div>\n        <div class=\"input-field col-sm-11\" [ngClass]=\"{ 'error': f.submitted && !username.valid }\">\n          <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required autocomplete=\"off\"/>\n          <label for=\"username\">Nazwa użytkownika</label>\n        </div>\n       </div>\n\n      <div class=\"row\" style=\"padding-right: 20px; padding-left: 20px; margin-top: 31px;\">\n        <div class=\"col-sm-1 text-sm-right\">\n          <i style=\"color: white; font-size: 20px; padding-top: 20px;\" class=\"fa fa-key\"></i>\n        </div>\n        <div class=\"input-field col-sm-11\" [ngClass]=\"{ 'error': f.submitted && !password.valid }\">\n          <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n          <label for=\"password\">Hasło</label>\n        </div>\n      </div>\n      <div>\n        <button id=\"login\" [disabled] = \"f.submitted || !username.valid || !password.valid\" class=\"btn btn-primary noradius\" style=\"width: 100%; height:50px; margin-top: 100px;\">Login</button>\n        <!--img *ngIf=\"loading\" src=\"data:image/gif;/>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a-->\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, cookieService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.cookieService = cookieService;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.czyscCookie();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/klienci/list';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (err) {
            _this.alertService.error(err.error);
            // this.loading = false;
        });
    };
    LoginComponent.prototype.czyscCookie = function () {
        this.cookieService.delete('kierunek');
        this.cookieService.delete('filter');
        this.cookieService.delete('page');
        this.cookieService.delete('key');
        this.cookieService.delete('id');
        this.cookieService.delete('flash_ok');
        this.cookieService.delete('flash_error');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">Imie</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Nazwisko</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n        <label for=\"email\">email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">email is required</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Nazwa użytkownika</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Hasło</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !role.valid }\">\n          <label for=\"role\">Rola</label>\n           <input type=\"text\" class=\"form-control\" name=\"role\" [(ngModel)]=\"model.role\" #role=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !role.valid\" class=\"help-block\">Password is required</div>\n        </div>\n\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Zarejestruj</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Anuluj</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Pomyślnie zarejestrowano', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error.error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/assets/app.css":
/***/ (function(module, exports) {

module.exports = "/*a {\n    cursor: pointer;\n}\n\n.help-block {\n    font-size: 12px;\n}*/\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map