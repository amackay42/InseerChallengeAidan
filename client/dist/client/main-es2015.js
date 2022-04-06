(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Buttons</mat-card-title>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>customer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n\n<app-company></app-company>\n\n<app-company></app-company>\n\n<app-employee></app-employee>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Employee Page:</h2>\r\n<h1>Name: {{userData.name}}</h1>\r\n<h1>Title: {{userData.title}}</h1>\r\n<h1>Location: {{userData.address.state}}</h1>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");















let AppModule = class AppModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faStrava"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSkype"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBriefcase"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBusinessTime"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faClock"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGraduationCap"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"]);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__["CustomerComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"]
        ],
        imports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company.component.html"),
        styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerComponent = class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html"),
        styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Intro banner */\r\n/*TODO: remove unwanted css*/\r\n.banner {\r\n  background: url('wallpaper.png') no-repeat center 0px;\r\n  background-size: cover;\r\n  -moz-background-size: cover;\r\n  position: relative;\r\n  height: 100%;\r\n  padding-top: 10em;\r\n  padding-bottom: 2em;\r\n}\r\n.banner .passport {\r\n  border: none;\r\n  background-color: rgba(245, 245, 245, 0.5);\r\n}\r\n/*.banner .passport:hover {*/\r\n/*  border: none;*/\r\n/*  background-color: whitesmoke;*/\r\n/*}*/\r\n.container {\r\n  padding-top: 2em;\r\n  padding-bottom: 2em;\r\n  color: white;\r\n}\r\n.header-left img {\r\n  width: 100%;\r\n  border: 5px solid whitesmoke;\r\n  left: -10%;\r\n}\r\n.header-left {\r\n  padding-top: 1em;\r\n}\r\n.header-right {\r\n  padding-left: 3em;\r\n  padding-top: 1em;\r\n}\r\n.header-right h1 {\r\n  font-size: 2.5em;\r\n  color: #fff;\r\n  margin: 0.5em 0 0.2em 0;\r\n}\r\n.header-right h2 {\r\n  font-size: 1.2em;\r\n  color: #000;\r\n  background: #f5f5f1;\r\n  display: inline-block;\r\n  padding: .5em 1.5em;\r\n  position: relative;\r\n}\r\n.header-right h2:before {\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  content: '';\r\n  bottom: -9px;\r\n  left: 12px;\r\n  border-style: solid;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #f5f5f1 transparent transparent transparent;\r\n}\r\n.introduction h6, .introduction a {\r\n  display: inline;\r\n  vertical-align: top;\r\n  color: white;\r\n  font-size: 1.4em;\r\n  padding-right: 20px;\r\n}\r\n.introduction a:hover {\r\n  color: #008B8B;\r\n}\r\n/* //Intro banner */\r\n/* nav profile*/\r\n.nav-profile {\r\n  /*background-color: whitesmoke;*/\r\n  background: #008B8B;\r\n}\r\n.nav > li {\r\n  display: inline-block;\r\n}\r\nul.navbar-nav {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\nul.navbar-nav li a {\r\n  color: #fff;\r\n  padding: 1em 2em;\r\n  font-size: 1.2em;\r\n}\r\nul.navbar-nav li a:hover, ul.navbar-nav li a.active, ul.navbar-nav li a:focus {\r\n  color: #008B8B;\r\n  background: #fff;\r\n  transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n  -ms-transform: scale(0.8);\r\n}\r\n.aboutus {\r\n  font-size: 1em;\r\n  color: #343a40;\r\n  line-height: 1.8em;\r\n}\r\n/*--//about--*/\r\n/*--work--*/\r\n.work {\r\n  background: #343a40 !important;\r\n}\r\n.work-left {\r\n  text-align: right;\r\n  padding: 3em 5em 0 0;\r\n}\r\n.work-right {\r\n  border-left: 1px solid #999;\r\n  padding: 2.5em 0 2em 6em;\r\n}\r\n.work-info h4 {\r\n  font-size: 1.2em;\r\n  background: darkcyan;\r\n  display: inline-block;\r\n  padding: .6em 1.2em;\r\n  color: #fff;\r\n  position: relative;\r\n}\r\n.work-info h4:before {\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  /*-- w3layouts --*/\r\n  content: '';\r\n  top: 9px;\r\n  right: -14px;\r\n  border-style: solid;\r\n  border-width: 10px 0 10px 16px;\r\n  border-color: transparent transparent transparent rgb(0, 139, 139);\r\n}\r\n.work-info h5 {\r\n  font-size: 1.3em;\r\n  color: #F7E612;\r\n  margin-bottom: .5em;\r\n  border: 1px solid #F7E612;\r\n  display: inline-block;\r\n  padding: 0 1.2em;\r\n}\r\n.work-info h5 span.glyphicon {\r\n  font-size: 0.9em;\r\n  color: #fff;\r\n  background: #008B8B;\r\n  padding: 1em;\r\n  border-radius: 70%;\r\n  transition: .5s all;\r\n  transform: scale(1);\r\n  -o-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n}\r\n.work-right h5 span.glyphicon {\r\n  margin-right: 5em;\r\n  margin-left: -8em;\r\n}\r\n.work-left2 h5 span.glyphicon {\r\n  margin-left: 4em;\r\n  margin-right: -7.3em;\r\n  z-index: 9;\r\n}\r\n.work-right.work-right2 {\r\n  min-height: 210px;\r\n  float: right;\r\n}\r\n.work-right.work-right2 h4:before {\r\n  left: -14px;\r\n  /*-- agileits --*/\r\n  transform: rotate(180deg);\r\n  -o-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n}\r\n.work-right.work-right2 h4 {\r\n  margin-top: 0.8em;\r\n}\r\n.work-info:hover h5 span.glyphicon {\r\n  color: #F7E612;\r\n  transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCO0VBQ0UscURBQW9FO0VBRXBFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDO0FBRUEsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQixrQ0FBa0M7QUFDbEMsSUFBSTtBQUVKO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQSxtQkFBbUI7QUFFbkIsZUFBZTtBQUNmO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUdoQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQSxjQUFjO0FBRWQsV0FBVztBQUNYO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0VBQWtFO0FBQ3BFO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUdaLGtCQUFrQjtFQUdsQixtQkFBbUI7RUFHbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBR1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFHZCxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbnRybyBiYW5uZXIgKi9cclxuLypUT0RPOiByZW1vdmUgdW53YW50ZWQgY3NzKi9cclxuLmJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvd2FsbHBhcGVyLnBuZykgbm8tcmVwZWF0IGNlbnRlciAwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmJhbm5lciAucGFzc3BvcnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNSk7XHJcbn1cclxuXHJcbi8qLmJhbm5lciAucGFzc3BvcnQ6aG92ZXIgeyovXHJcbi8qICBib3JkZXI6IG5vbmU7Ki9cclxuLyogIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7Ki9cclxuLyp9Ki9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgbGVmdDogLTEwJTtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IHtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IGgxIHtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMC41ZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IGgyIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IC41ZW0gMS41ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IGgyOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBib3R0b206IC05cHg7XHJcbiAgbGVmdDogMTJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDAgMTBweDtcclxuICBib3JkZXItY29sb3I6ICNmNWY1ZjEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24gaDYsIC5pbnRyb2R1Y3Rpb24gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmludHJvZHVjdGlvbiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwOEI4QjtcclxufVxyXG5cclxuLyogLy9JbnRybyBiYW5uZXIgKi9cclxuXHJcbi8qIG5hdiBwcm9maWxlKi9cclxuLm5hdi1wcm9maWxlIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7Ki9cclxuICBiYWNrZ3JvdW5kOiAjMDA4QjhCO1xyXG59XHJcblxyXG4ubmF2ID4gbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxudWwubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWwubmF2YmFyLW5hdiBsaSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbnVsLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgdWwubmF2YmFyLW5hdiBsaSBhLmFjdGl2ZSwgdWwubmF2YmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICBjb2xvcjogIzAwOEI4QjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuXHJcbi5hYm91dHVzIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzM0M2E0MDtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbn1cclxuXHJcbi8qLS0vL2Fib3V0LS0qL1xyXG5cclxuLyotLXdvcmstLSovXHJcbi53b3JrIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53b3JrLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDNlbSA1ZW0gMCAwO1xyXG59XHJcblxyXG4ud29yay1yaWdodCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTk5O1xyXG4gIHBhZGRpbmc6IDIuNWVtIDAgMmVtIDZlbTtcclxufVxyXG5cclxuLndvcmstaW5mbyBoNCB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBiYWNrZ3JvdW5kOiBkYXJrY3lhbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogLjZlbSAxLjJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi53b3JrLWluZm8gaDQ6YmVmb3JlIHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qLS0gdzNsYXlvdXRzIC0tKi9cclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IDlweDtcclxuICByaWdodDogLTE0cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE2cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2IoMCwgMTM5LCAxMzkpO1xyXG59XHJcblxyXG4ud29yay1pbmZvIGg1IHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGNvbG9yOiAjRjdFNjEyO1xyXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3RTYxMjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxLjJlbTtcclxufVxyXG5cclxuLndvcmstaW5mbyBoNSBzcGFuLmdseXBoaWNvbiB7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDA4QjhCO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDcwJTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDcwJTtcclxuICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ud29yay1yaWdodCBoNSBzcGFuLmdseXBoaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC04ZW07XHJcbn1cclxuXHJcbi53b3JrLWxlZnQyIGg1IHNwYW4uZ2x5cGhpY29uIHtcclxuICBtYXJnaW4tbGVmdDogNGVtO1xyXG4gIG1hcmdpbi1yaWdodDogLTcuM2VtO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi53b3JrLXJpZ2h0LndvcmstcmlnaHQyIHtcclxuICBtaW4taGVpZ2h0OiAyMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi53b3JrLXJpZ2h0LndvcmstcmlnaHQyIGg0OmJlZm9yZSB7XHJcbiAgbGVmdDogLTE0cHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAvKi0tIGFnaWxlaXRzIC0tKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi53b3JrLXJpZ2h0LndvcmstcmlnaHQyIGg0IHtcclxuICBtYXJnaW4tdG9wOiAwLjhlbTtcclxufVxyXG5cclxuLndvcmstaW5mbzpob3ZlciBoNSBzcGFuLmdseXBoaWNvbiB7XHJcbiAgY29sb3I6ICNGN0U2MTI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe, EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' })
], SafeHtmlPipe);

let EmployeeComponent = class EmployeeComponent {
    constructor() {
    }
    ngOnInit() {
        this.userData = {
            name: 'Aidan Mackay',
            title: 'Software Engineer',
            address: {
                street: 'Edina',
                state: 'Minnesota'
            },
            description: 'I\'m an India-based software developer who specializes in large-scale distributed systems for the web.\n' +
                // tslint:disable-next-line:max-line-length
                'I\'m a senior software engineer at <a style=\'color: darkturquoise;\' href="https://www.microsoft.com/en-in/msidc/">Microsoft IDC</a> - Azure SDN team.'
        };
        // tslint:disable-next-line:max-line-length
    }
};
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html"),
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(ref => {
    // Ensure that Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitFiles\InseerChallengeAidan\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map