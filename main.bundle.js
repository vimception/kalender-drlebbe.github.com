webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Routing

// Components




// Services

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_calendar_calendar_component__["a" /* CalendarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services__["e" /* PersonService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["a" /* CalendarService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["b" /* LoggingService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["d" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["f" /* WindowRef */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");

// Components

// Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var RoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"layout-content\">\n    <div id=\"printable\" class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <h1>Zwangerschapskalender</h1>\n        </div>\n        <div class=\"ui-g-12\">\n            <table class=\"header\">\n                <tr>\n                    <td>\n                        <strong>Patient</strong>\n                    </td>\n                    <td>{{currentPatient}}</td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Bevallingsdatum</strong>\n                    </td>\n                    <td>{{currentDeliveryDateString}}</td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Schema</strong>\n                    </td>\n                    <td>{{currentSchemeName}}</td>\n                </tr>\n            </table>\n        </div>\n        <!-- Calendar -->\n        <div *ngIf=\"hasCalendar\" class=\"ui-g-12\">\n            <p-dataTable id=\"calendar\" [value]=\"calendar\">\n                <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\">\n                    <ng-template let-col let-data=\"rowData\" pTemplate type=\"default\">\n                        <div innerHTML=\"{{data[col.field]}}\"></div>\n                    </ng-template>\n                </p-column>\n            </p-dataTable>\n        </div>\n        <!-- No Calendar -->\n        <div *ngIf=\"!hasCalendar\" class=\"ui-g-12\">\n            <p-message severity=\"warn\" text=\"Onvoldoende gegevens om de kalender te bepalen.\"></p-message>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#layout-content {\n  margin-left: 340px;\n  background-color: #fff;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\nh1 {\n  font-size: 20px; }\n\n.header td {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px; }\n\nstrong {\n  font-weight: bold; }\n\nh2 {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = (function () {
    function CalendarComponent(logger, calenderService, menuService, window) {
        var _this = this;
        this.logger = logger;
        this.calenderService = calenderService;
        this.menuService = menuService;
        this.window = window;
        this.menuService.menuAction$.subscribe(function (data) {
            var action = data;
            switch (action) {
                case __WEBPACK_IMPORTED_MODULE_2__services__["c" /* MenuAction */].Print:
                    _this.onPrint();
                    break;
            }
        });
    }
    Object.defineProperty(CalendarComponent.prototype, "patient", {
        set: function (model) {
            this.currentPatient = model;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "deliveryDate", {
        set: function (model) {
            this.currentDeliveryDate = model;
            if (model) {
                var month = this.calenderService.monthNames[model.getMonth()];
                this.currentDeliveryDateString =
                    model.getDate().toString() + ' ' + month + ' ' + model.getFullYear().toString();
            }
            else {
                // clear
                this.currentDeliveryDateString = '';
            }
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "scheme", {
        set: function (model) {
            this.currentScheme = model;
            this.currentSchemeName = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */][this.currentScheme];
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.update = function () {
        if (this.currentScheme && this.currentDeliveryDate) {
            this.hasCalendar = true;
            this.calendar = this.calenderService.getCalendar(this.currentScheme, this.currentDeliveryDate);
            this.cols = [
                { field: 'appointment', header: 'Afspraak' },
                { field: 'date', header: 'Voorkeursdatum' },
                { field: 'who', header: 'Bij wie' },
                { field: 'what', header: 'Waarvoor' }
            ];
        }
        else {
            this.hasCalendar = false;
            this.calendar = this.calenderService.getCalendar(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].NONE, null);
        }
    };
    CalendarComponent.prototype.onPrint = function () {
        this.logger.info('printing');
        var nativeDocument = this.window.nativeDocument;
        var nativeWindow = this.window.nativeWindow;
        var printContent = nativeDocument.getElementById('printable').innerHTML;
        var popupWin = nativeWindow.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n            <html>\n                <head>\n                    <style>\n                    body {\n                        font-family: Roboto,Trebuchet MS,Arial,Helvetica,sans-serif;\n                    }\n                    #calendar table {\n                        border: 1px solid black;\n                    }\n                    #calendar table thead tr:first-of-type>th:not(:last-child) {\n                        border-right: 1px solid black;\n                        border-bottom: 1px solid black;\n                    }\n                    #calendar table thead tr:first-of-type>th:last-child {\n                        border-bottom: 1px solid black;\n                    }\n                    #calendar table tbody tr:not(:last-child)>td:not(:last-child) {\n                        border-right: 1px solid black;\n                        border-bottom: 1px solid black;\n                    }\n                    #calendar table tbody tr:not(:last-child)>td:last-child {\n                        border-bottom: 1px solid black;\n                    }\n                    #calendar table tbody tr:last-child>td:not(:last-child) {\n                        border-right: 1px solid black;\n                    }\n                    </style>\n                </head>\n                <body onload=\"window.print()\">\n                    " + printContent + "\n                </body>\n            </html>");
        popupWin.document.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CalendarComponent.prototype, "patient", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], CalendarComponent.prototype, "deliveryDate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CalendarComponent.prototype, "scheme", null);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["d" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["f" /* WindowRef */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"layout-topbar\">\n        <a class=\"logo\" [routerLink]=\"['/home']\">\n                <img src=\"/assets/logo.png\" />\n                <span>Zwangerschapskalender</span>\n        </a>\n\n        <ul class=\"menu-topbar\">\n                <li><a (click)=\"onPrint()\">AFDRUKKEN</a></li>\n                <li><a (click)=\"onClear()\">WISSEN</a></li>\n        </ul>\n</div>\n\n<div class=\"pusher\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#layout-topbar {\n  background-color: #563d7c;\n  display: block;\n  padding: 0px;\n  height: 60px;\n  width: 100%;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); }\n\n.logo {\n  margin-left: 18px;\n  display: inline-block; }\n\na:link.logo {\n  text-decoration: none; }\n\na:visited.logo {\n  text-decoration: none; }\n\n.logo img {\n  height: 42px;\n  padding: 9px 10px 9px 0px;\n  float: left; }\n\n.logo span {\n  text-decoration: none;\n  color: white;\n  font-size: 22px;\n  line-height: 60px; }\n\n.menu-topbar {\n  list-style-type: none;\n  float: right;\n  margin: 0 20px 0 0;\n  padding: 0; }\n\n.menu-topbar, .menu-topbar > li, .menu-topbar > li > a {\n  display: inline-block;\n  height: 100%; }\n\n.menu-topbar > li > a {\n  text-decoration: none;\n  color: #fff;\n  transition: background-color .3s;\n  min-width: 120px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 60px; }\n\n.menu-topbar > li > a:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.4); }\n\n.pusher {\n  height: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(menuService, logger) {
        this.menuService = menuService;
        this.logger = logger;
    }
    HeaderComponent.prototype.onPrint = function () {
        this.logger.info('menu: print');
        this.menuService.publishAction(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* MenuAction */].Print);
    };
    HeaderComponent.prototype.onClear = function () {
        this.logger.info('menu: clear');
        this.menuService.publishAction(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* MenuAction */].Clear);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["d" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["b" /* LoggingService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div id=\"layout-sidebar\">\n\n    <div class=\"ui-g ui-fluid\">\n        <!-- Patient -->\n        <div class=\"ui-g-12\">\n            <h2>Patient</h2>\n        </div>\n        <div class=\"ui-g-12\">\n            <input id=\"input\" type=\"text\" minlength=\"2\" maxlength=\"100\" pInputText [(ngModel)]=\"patient\">\n        </div>\n        <!-- Delivery Date -->\n        <div class=\"ui-g-12\">\n            <h2>Verwachte bevallingsdatum</h2>\n        </div>\n        <div class=\"ui-g-12 hor-center\">\n            <p-calendar [(ngModel)]=\"deliveryDate\" [inline]=\"true\" [locale]=\"nl\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" (ngModelChange)=\"onDeliveryDateSelected($event)\"></p-calendar>\n        </div>\n        <!-- Cardinality foetus -->\n        <div class=\"ui-g-12\">\n            <h2>Aantal foetussen</h2>\n        </div>\n        <div class=\"ui-g-12\">\n            <p-radioButton name=\"cardinality\" value=\"one\" label=\"Eenling\" [(ngModel)]=\"cardinality\" (ngModelChange)=\"onCardinalitySelected($event)\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-12\">\n            <p-radioButton name=\"cardinality\" value=\"two\" label=\"Tweeling\" [(ngModel)]=\"cardinality\" (ngModelChange)=\"onCardinalitySelected($event)\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-12\">\n            <p-radioButton name=\"cardinality\" value=\"multiple\" label=\"Meerling\" [(ngModel)]=\"cardinality\" (ngModelChange)=\"onCardinalitySelected($event)\"></p-radioButton>\n        </div>\n        <!-- Risk -->\n        <div *ngIf=\"isRiskVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Risico</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"risk\" value=\"low\" label=\"Laag\" [(ngModel)]=\"risk\" (ngModelChange)=\"onRiskSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"risk\" value=\"medium\" label=\"Medium\" [(ngModel)]=\"risk\" (ngModelChange)=\"onRiskSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"risk\" value=\"high\" label=\"Hoog\" [(ngModel)]=\"risk\" (ngModelChange)=\"onRiskSelected($event)\"></p-radioButton>\n            </div>\n        </div>\n        <!-- Follow-up -->\n        <div *ngIf=\"isFollowUpVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Opvolging</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"followup\" value=\"gynonly\" label=\"Enkel gynaecoloog\" [(ngModel)]=\"followUp\" (ngModelChange)=\"onFollowUpSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"followup\" value=\"gynandgp\" label=\"Gynaecoloog en HA/VV\" [(ngModel)]=\"followUp\" (ngModelChange)=\"onFollowUpSelected($event)\"></p-radioButton>\n            </div>\n        </div>\n        <!-- Early birth -->\n        <div *ngIf=\"isEarlyBirthVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Voorgeschiedenis vroeggeboorte</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"earlybirth\" value=\"earlybirthyes\" label=\"Ja\" [(ngModel)]=\"earlyBirth\" (ngModelChange)=\"onEarlyBirthSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"earlybirth\" value=\"earlybirthno\" label=\"Nee\" [(ngModel)]=\"earlyBirth\" (ngModelChange)=\"onEarlyBirthSelected($event)\"></p-radioButton>\n            </div>\n        </div>\n        <!-- Cardinality pregnancies -->\n        <div *ngIf=\"isFirstPregnancyVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Aantal zwangerschappen</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"pregnancies\" value=\"primipara\" label=\"Primipara\" [(ngModel)]=\"firstPregnancy\" (ngModelChange)=\"onPregnancyCardinalitySelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"pregnancies\" value=\"multipara\" label=\"Multipara\" [(ngModel)]=\"firstPregnancy\" (ngModelChange)=\"onPregnancyCardinalitySelected($event)\"></p-radioButton>\n            </div>\n        </div>\n        <!-- Mono chorial -->\n        <div *ngIf=\"isMonoChorialVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Monochoriaal</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"monochorial\" value=\"monochorialyes\" label=\"Ja\" [(ngModel)]=\"monoChorial\" (ngModelChange)=\"onMonochorialSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"monochorial\" value=\"monochorialno\" label=\"Nee\" [(ngModel)]=\"monoChorial\" (ngModelChange)=\"onMonochorialSelected($event)\"></p-radioButton>\n            </div>\n        </div>\n        <!-- Mono amniotic -->\n        <div *ngIf=\"isMonoAmnioticVisible\">\n            <div class=\"ui-g-12\">\n                <h2>Monoamniotisch</h2>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"monoamniotic\" value=\"monoamnioticyes\" label=\"Ja\" [(ngModel)]=\"monoAmniotic\" (ngModelChange)=\"onMonoamnioticSelected($event)\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n                <p-radioButton name=\"monoamniotic\" value=\"monoamnioticno\" label=\"Nee\" [(ngModel)]=\"monoAmniotic\" (ngModelChange)=\"onMonoamnioticSelected($event)\"></p-radioButton>\n            </div>\n        </div>\n    </div>\n    <div class=\"pusher\"></div>\n</div>\n\n<app-calendar [patient]=\"patient\" [deliveryDate]=\"deliveryDate\" [scheme]=\"scheme\"></app-calendar>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#layout-sidebar {\n  position: fixed;\n  display: block;\n  left: 0;\n  height: 100%;\n  background-color: #eeeeee;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 320px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\nh2 {\n  font-weight: bold; }\n\n.pusher {\n  height: 100px; }\n\n.hor-center {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(personService, calendarService, logger, menuService) {
        var _this = this;
        this.personService = personService;
        this.calendarService = calendarService;
        this.logger = logger;
        this.menuService = menuService;
        this.menuService.menuAction$.subscribe(function (data) {
            var action = data;
            switch (action) {
                case __WEBPACK_IMPORTED_MODULE_2__services__["c" /* MenuAction */].Clear:
                    _this.onClear();
                    break;
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nl = {
            firstDayOfWeek: 0,
            dayNames: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
            dayNamesShort: ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'],
            dayNamesMin: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
            monthNames: [
                'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
            ],
            monthNamesShort: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            today: 'Vandaag',
            clear: 'Wissen'
        };
    };
    HomeComponent.prototype.onDeliveryDateSelected = function (event) {
        this.logger.info('date: ' + this.deliveryDate);
    };
    HomeComponent.prototype.onCardinalitySelected = function (event) {
        this.logger.info('cardinality: ' + this.cardinality);
        switch (this.cardinality) {
            case 'one':
                this.clearOne();
                this.isRiskVisible = true;
                break;
            case 'two':
                this.clearTwo();
                this.isMonoChorialVisible = true;
                break;
            case 'multiple':
                this.clearMultiple();
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].MCDA);
                break;
        }
    };
    HomeComponent.prototype.onRiskSelected = function (event) {
        this.logger.info('risk: ' + this.risk);
        switch (this.risk) {
            case 'low':
                this.clearScheme();
                this.earlyBirth = undefined;
                this.isEarlyBirthVisible = false;
                this.isFollowUpVisible = true;
                break;
            case 'medium':
                this.followUp = undefined;
                this.isFollowUpVisible = false;
                this.firstPregnancy = undefined;
                this.isFirstPregnancyVisible = false;
                this.earlyBirth = undefined;
                this.isEarlyBirthVisible = false;
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA1);
                break;
            case 'high':
                this.clearScheme();
                this.followUp = undefined;
                this.isFollowUpVisible = false;
                this.firstPregnancy = undefined;
                this.isFirstPregnancyVisible = false;
                this.isEarlyBirthVisible = true;
                break;
        }
    };
    HomeComponent.prototype.onFollowUpSelected = function (event) {
        this.logger.info('follow-up: ' + this.followUp);
        switch (this.followUp) {
            case 'gynonly':
                this.clearScheme();
                this.isFirstPregnancyVisible = true;
                break;
            case 'gynandgp':
                this.isFirstPregnancyVisible = false;
                this.firstPregnancy = undefined;
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA3);
                break;
        }
    };
    HomeComponent.prototype.onPregnancyCardinalitySelected = function (event) {
        this.logger.info('pregnancy cardinality: ' + this.firstPregnancy);
        switch (this.firstPregnancy) {
            case 'primipara':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA1);
                break;
            case 'multipara':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA2);
                break;
        }
    };
    HomeComponent.prototype.onEarlyBirthSelected = function (event) {
        this.logger.info('early birth: ' + this.earlyBirth);
        switch (this.earlyBirth) {
            case 'earlybirthyes':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA5);
                break;
            case 'earlybirthno':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA4);
                break;
        }
    };
    HomeComponent.prototype.onMonochorialSelected = function (event) {
        this.logger.info('monochorial: ' + this.monoChorial);
        switch (this.monoChorial) {
            case 'monochorialyes':
                this.clearScheme();
                this.isMonoAmnioticVisible = true;
                break;
            case 'monochorialno':
                this.monoAmniotic = undefined;
                this.isMonoAmnioticVisible = false;
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].DCDA);
                break;
        }
    };
    HomeComponent.prototype.onMonoamnioticSelected = function (event) {
        this.logger.info('monoamniotic: ' + this.monoAmniotic);
        switch (this.monoAmniotic) {
            case 'monoamnioticyes':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].MCMA);
                break;
            case 'monoamnioticno':
                this.setScheme(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].MCDA);
                break;
        }
    };
    HomeComponent.prototype.init = function () {
        this.cardinality = undefined;
        this.risk = undefined;
        this.isRiskVisible = false;
        this.followUp = undefined;
        this.isFollowUpVisible = false;
        this.firstPregnancy = undefined;
        this.isFirstPregnancyVisible = false;
        this.earlyBirth = undefined;
        this.isEarlyBirthVisible = false;
        this.monoChorial = undefined;
        this.isMonoChorialVisible = false;
        this.monoAmniotic = undefined;
        this.isMonoAmnioticVisible = false;
        this.deliveryDate = undefined;
        this.patient = '';
        this.clearScheme();
    };
    HomeComponent.prototype.setScheme = function (scheme) {
        this.logger.info('setting scheme: ' + scheme);
        this.scheme = scheme; // .emit(scheme);
    };
    HomeComponent.prototype.clearScheme = function () {
        this.logger.info('clearing scheme');
        this.scheme = undefined; // .emit(undefined);
    };
    HomeComponent.prototype.clearOne = function () {
        this.clearScheme();
        this.followUp = undefined;
        this.isFollowUpVisible = false;
        this.firstPregnancy = undefined;
        this.isFirstPregnancyVisible = false;
        this.earlyBirth = undefined;
        this.isEarlyBirthVisible = false;
        this.monoChorial = undefined;
        this.isMonoChorialVisible = false;
        this.monoAmniotic = undefined;
        this.isMonoAmnioticVisible = false;
    };
    HomeComponent.prototype.clearTwo = function () {
        this.clearScheme();
        this.risk = undefined;
        this.isRiskVisible = false;
        this.followUp = undefined;
        this.isFollowUpVisible = false;
        this.firstPregnancy = undefined;
        this.isFirstPregnancyVisible = false;
        this.earlyBirth = undefined;
        this.isEarlyBirthVisible = false;
        this.monoAmniotic = undefined;
        this.isMonoAmnioticVisible = false;
    };
    HomeComponent.prototype.clearMultiple = function () {
        this.risk = undefined;
        this.isRiskVisible = false;
        this.followUp = undefined;
        this.isFollowUpVisible = false;
        this.firstPregnancy = undefined;
        this.isFirstPregnancyVisible = false;
        this.earlyBirth = undefined;
        this.isEarlyBirthVisible = false;
        this.monoChorial = undefined;
        this.isMonoChorialVisible = false;
        this.monoAmniotic = undefined;
        this.isMonoAmnioticVisible = false;
    };
    HomeComponent.prototype.onClear = function () {
        this.logger.info('clearing');
        this.init();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["e" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["d" /* MenuService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__("../../../../../src/app/models/person.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheme__ = __webpack_require__("../../../../../src/app/models/scheme.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scheme__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item__ = __webpack_require__("../../../../../src/app/models/item.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/models/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
var Item = (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/models/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Person */
var Person = (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "../../../../../src/app/models/scheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheme; });
var Scheme;
(function (Scheme) {
    Scheme[Scheme["NONE"] = 0] = "NONE";
    Scheme[Scheme["SCHEMA1"] = 1] = "SCHEMA1";
    Scheme[Scheme["SCHEMA2"] = 2] = "SCHEMA2";
    Scheme[Scheme["SCHEMA3"] = 3] = "SCHEMA3";
    Scheme[Scheme["SCHEMA4"] = 4] = "SCHEMA4";
    Scheme[Scheme["SCHEMA5"] = 5] = "SCHEMA5";
    Scheme[Scheme["MCMA"] = 6] = "MCMA";
    Scheme[Scheme["MCDA"] = 7] = "MCDA";
    Scheme[Scheme["DCDA"] = 8] = "DCDA";
})(Scheme || (Scheme = {}));


/***/ }),

/***/ "../../../../../src/app/services/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_service__ = __webpack_require__("../../../../../src/app/services/logging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarService = (function () {
    function CalendarService(logger) {
        this.logger = logger;
        this.monthNames = [
            'Januari',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Augustus',
            'September',
            'Oktober',
            'November',
            'December'
        ];
        this.pGynaecoloog = 'Gynaecoloog';
        this.pGynaecoloogMic = 'Gynaecoloog MIC';
        this.pMidwifeAZ = 'Vroedvrouw AZ';
        this.pMidwifeIndependent = 'Zelfstandige Vroedvrouw';
        this.pGP = 'Huisarts';
        this.pTocography = 'Tocografie AZ';
        this.pregnancyInWeeks = 40;
        this.pregnancyInDays = 7 * 40;
    }
    CalendarService.prototype.getCalendar = function (scheme, dd) {
        switch (scheme) {
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA1:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12-13',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 26',
                        date: this.getDateForWeek(26, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 33',
                        date: this.getDateForWeek(33, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                            'GBS',
                            'MRSA'
                        ]),
                    },
                    {
                        appointment: 'Week 38',
                        date: this.getDateForWeek(38, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 39',
                        date: this.getDateForWeek(39, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 40',
                        date: this.getDateForWeek(40, dd),
                        who: this.pTocography,
                        what: this.toList([
                            'CTG',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA2:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 26',
                        date: this.getDateForWeek(26, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 33',
                        date: this.getDateForWeek(33, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo (zelfbetalend)',
                            'BD, urine',
                            'GBS',
                            'MRSA'
                        ]),
                    },
                    {
                        appointment: 'Week 38',
                        date: this.getDateForWeek(38, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 40',
                        date: this.getDateForWeek(40, dd),
                        who: this.pTocography,
                        what: this.toList([
                            'CTG',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA3:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGP + ' of ' + this.pMidwifeIndependent,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 27',
                        date: this.getDateForWeek(27, dd),
                        who: this.pGP + ' of ' + this.pMidwifeIndependent,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 30-32',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 33',
                        date: this.getDateForWeek(33, dd),
                        who: this.pGP + ' of ' + this.pMidwifeIndependent,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo groei (zelfbetalend)',
                            'BD, urine',
                            'GBS',
                            'MRSA'
                        ]),
                    },
                    {
                        appointment: 'Week 37',
                        date: this.getDateForWeek(37, dd),
                        who: this.pGP + ' of ' + this.pMidwifeIndependent,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 38',
                        date: this.getDateForWeek(38, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 39',
                        date: this.getDateForWeek(39, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 40',
                        date: this.getDateForWeek(40, dd),
                        who: this.pTocography,
                        what: this.toList([
                            'CTG',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA4:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 28',
                        date: this.getDateForWeek(28, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 32',
                        date: this.getDateForWeek(32, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 34',
                        date: this.getDateForWeek(34, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                            'GBS',
                            'MRSA',
                            'Info bevalling, voeding, postpartum'
                        ]),
                    },
                    {
                        appointment: 'Week 37',
                        date: this.getDateForWeek(37, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 38',
                        date: this.getDateForWeek(38, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 39',
                        date: this.getDateForWeek(39, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 40',
                        date: this.getDateForWeek(40, dd),
                        who: this.pTocography,
                        what: this.toList([
                            'CTG',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].SCHEMA5:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'Urinecultuur',
                            'Vaginecultuur + PCR',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 18',
                        date: this.getDateForWeek(18, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo Cervix',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 22',
                        date: this.getDateForWeek(22, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo Cervix',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 26',
                        date: this.getDateForWeek(26, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo Cervix',
                        ]),
                    },
                    {
                        appointment: 'Week 28',
                        date: this.getDateForWeek(28, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo Cervix',
                        ]),
                    },
                    {
                        appointment: 'Week 32',
                        date: this.getDateForWeek(32, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 34',
                        date: this.getDateForWeek(34, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo Cervix',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo groei (zelfbetalend)',
                            'BD, urine',
                            'GBS',
                            'MRSA'
                        ]),
                    },
                    {
                        appointment: 'Week 37',
                        date: this.getDateForWeek(37, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Verwijderen cerclage (ivt)',
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 38',
                        date: this.getDateForWeek(38, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Luisteren foetaal hartritme',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 40',
                        date: this.getDateForWeek(40, dd),
                        who: this.pTocography,
                        what: this.toList([
                            'CTG',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].MCMA:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 18',
                        date: this.getDateForWeek(18, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 22',
                        date: this.getDateForWeek(22, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 26',
                        date: this.getDateForWeek(26, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 28',
                        date: this.getDateForWeek(28, dd),
                        who: '',
                        what: this.toList([
                            'Opname',
                        ]),
                    },
                    {
                        appointment: 'Week 32-33',
                        date: this.getDateForWeek(32, dd),
                        who: '',
                        what: this.toList([
                            'Sectio',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].MCDA:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 18',
                        date: this.getDateForWeek(18, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 22',
                        date: this.getDateForWeek(22, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 26',
                        date: this.getDateForWeek(26, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 28',
                        date: this.getDateForWeek(28, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'BD',
                            'Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                        ]),
                    },
                    {
                        appointment: 'Week 32',
                        date: this.getDateForWeek(32, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 33',
                        date: this.getDateForWeek(33, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo + Dopplers',
                            'CTG',
                            'BD, Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 34',
                        date: this.getDateForWeek(34, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo + Dopplers',
                            'CTG',
                            'BD, Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 35',
                        date: this.getDateForWeek(35, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo + Dopplers',
                            'CTG',
                            'BD, Urine',
                            'GBS & MRSA',
                        ]),
                    },
                    {
                        appointment: 'Week 36-37',
                        date: this.getDateForWeek(36, dd),
                        who: '',
                        what: this.toList([
                            'Bevalling',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].DCDA:
                return [
                    {
                        appointment: 'Week 8',
                        date: this.getDateForWeek(8, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Timing echografie (zelfbetalend)',
                            'Labo ev aanvullen',
                            'Info Toxoplasmose, CMV, Listeria - Downscreening - ...',
                        ]),
                    },
                    {
                        appointment: 'Week 12',
                        date: this.getDateForWeek(12, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo I (terugbetaald)',
                            'Ev. NIPT indien gewenst & echo normaal',
                        ]),
                    },
                    {
                        appointment: 'Week 16',
                        date: this.getDateForWeek(16, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo + Dopplers',
                            'Urinecultuur',
                            'BD',
                            'Labo CMV / toxo indien niet immuun',
                        ]),
                    },
                    {
                        appointment: 'Week 20',
                        date: this.getDateForWeek(20, dd),
                        who: this.pGynaecoloogMic,
                        what: this.toList([
                            'Structurele echo II (terugbetaald)',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pMidwifeAZ,
                        what: this.toList([
                            'GCT + labo Complet, ferritine, toxo (indien niet immuun)',
                            'Info kraamgeld, erkenning, voeding, postpartumzorg',
                        ]),
                    },
                    {
                        appointment: 'Week 24',
                        date: this.getDateForWeek(24, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, urine',
                        ]),
                    },
                    {
                        appointment: 'Week 28',
                        date: this.getDateForWeek(28, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo',
                            'BD, Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 30',
                        date: this.getDateForWeek(30, dd),
                        who: this.pGP,
                        what: this.toList([
                            'Boostrix',
                        ]),
                    },
                    {
                        appointment: 'Week 32',
                        date: this.getDateForWeek(32, dd),
                        who: this.pGynaecoloog,
                        what: this.toList([
                            'Echo III (terugbetaald) (groei, hersenen, hart, nieren)',
                            'BD, urine',
                            'Labo irr As + Rhogam bij Rh negatief',
                        ]),
                    },
                    {
                        appointment: 'Week 34',
                        date: this.getDateForWeek(34, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo',
                            'CTG',
                            'BD, Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 35',
                        date: this.getDateForWeek(35, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo + Dopplers',
                            'CTG',
                            'BD, Urine',
                            'GBS & MRSA',
                        ]),
                    },
                    {
                        appointment: 'Week 36',
                        date: this.getDateForWeek(36, dd),
                        who: this.pGynaecoloog + ' en ' + this.pTocography,
                        what: this.toList([
                            'Echo',
                            'CTG',
                            'BD, Urine',
                        ]),
                    },
                    {
                        appointment: 'Week 37-38',
                        date: this.getDateForWeek(37, dd),
                        who: '',
                        what: this.toList([
                            'Bevalling',
                        ]),
                    },
                ];
            case __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Scheme */].NONE:
                return [];
        }
        return null;
    };
    CalendarService.prototype.getDateForWeek = function (week, dd) {
        var daysToSubstract = (this.pregnancyInWeeks - week) * 7;
        var date = new Date(dd.getTime() - (daysToSubstract * 24 * 60 * 60 * 1000));
        var month = this.monthNames[date.getMonth()];
        return date.getDate().toString() + ' ' + month + ' ' + date.getFullYear().toString();
    };
    CalendarService.prototype.toList = function (items) {
        var output = '<ul>';
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            output += "<li>" + item + "</li>";
        }
        output += '</ul>';
        return output;
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logging_service__["a" /* LoggingService */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__person_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_service__ = __webpack_require__("../../../../../src/app/services/logging.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__logging_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__menu_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__menu_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__windowref_service__ = __webpack_require__("../../../../../src/app/services/windowref.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__windowref_service__["a"]; });







/***/ }),

/***/ "../../../../../src/app/services/logging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggingService = (function () {
    function LoggingService() {
        var _this = this;
        this.enabled = true;
        var methods = ['assert', 'debug', 'error', 'info', 'log', 'trace', 'warn'];
        methods.forEach(function (method) {
            _this[method] = _this.consoleLog(method);
        });
    }
    LoggingService.prototype.assert = function (message) {
        //
    };
    LoggingService.prototype.debug = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.error = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.info = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.log = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.trace = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.warn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //
    };
    LoggingService.prototype.formatError = function (arg) {
        if (arg instanceof Error) {
            if (arg.stack) {
                arg = (arg.message && arg.stack.indexOf(arg.message) === -1)
                    ? 'Error: ' + arg.message + '\n' + arg.stack
                    : arg.stack;
            }
            else {
                arg = arg.name + '\n' + arg.message;
            }
        }
        return arg;
    };
    LoggingService.prototype.consoleLog = function (type) {
        if (this.enabled) {
            var console_1 = window.console;
            var logFn_1 = console_1[type] || console_1.log;
            var hasApply = false;
            var formatError_1 = this.formatError;
            // Note: reading logFn.apply throws an error in IE11 in IE8 document mode.
            // The reason behind this is that console.log has type "object" in IE8...
            try {
                hasApply = !!logFn_1.apply;
            }
            catch (e) {
                //
            }
            if (hasApply) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _args = [];
                    args.forEach(function (arg) {
                        _args.push(formatError_1(arg));
                    });
                    return logFn_1.apply(console_1, _args);
                };
            }
            // we are IE which either doesn't have window.console => this is noop and we do nothing,
            // or we are IE where console.log doesn't have apply so we log at least first 2 args
            return function (arg1, arg2) {
                logFn_1(arg1, arg2 === null ? '' : arg2);
            };
        }
        return function () {
            // Logging is not enabled, return a dummy function to prevent errors
        };
    };
    LoggingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuAction;
(function (MenuAction) {
    MenuAction[MenuAction["Print"] = 0] = "Print";
    MenuAction[MenuAction["Clear"] = 1] = "Clear";
})(MenuAction || (MenuAction = {}));
var MenuService = (function () {
    function MenuService() {
        this.menuAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.menuAction$ = this.menuAction.asObservable();
    }
    MenuService.prototype.publishAction = function (action) {
        this.menuAction.next(action);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.getGynaecologists = function () {
        return [
            { label: 'Dr. Anne Loccufier', value: 'aloc' },
            { label: 'Dr. Barbara Lebbe', value: 'bleb' },
            { label: 'Dr. Isabel De Smet', value: 'isme' },
            { label: 'Dr. Joachim Van Keirsbilck', value: 'jkei' },
            { label: 'Dr. Luc De Baene', value: 'lbae' },
        ];
    };
    PersonService.prototype.getGynaecologists20Weeks = function () {
        return [
            { label: 'Dr. Anne Loccufier', value: 'aloc' },
            { label: 'Dr. Barbara Lebbe', value: 'bleb' },
            { label: 'Dr. Joachim Van Keirsbilck', value: 'jkei' },
        ];
    };
    PersonService.prototype.getGeneralPractitioners = function () {
        return [
            { label: 'Dr. Mathieu Hallyn', value: 'mhal' },
            { label: 'Dr. Dirk Hallyn', value: 'dhal' },
        ];
    };
    PersonService.prototype.getMidwifes = function () {
        return [
            { label: 'Minke Siesling', value: 'msie' },
        ];
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/windowref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef(document) {
        this.document = document;
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "nativeDocument", {
        get: function () {
            return this.document;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map