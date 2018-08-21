webpackJsonp([1],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c2_routing_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c2_component__ = __webpack_require__(223);




var C2Module = /** @class */ (function () {
    function C2Module() {
    }
    C2Module.routes = __WEBPACK_IMPORTED_MODULE_2__c2_routing_module__["a" /* routes */];
    C2Module = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__c2_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__c2_routing_module__["a" /* routes */]]
        })
    ], C2Module);
    return C2Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (C2Module);


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


var C2Component = /** @class */ (function () {
    function C2Component() {
    }
    C2Component = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'c2-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>C2 Works Awesome!!!</strong></div>\n      <div>This sub component was loaded dynamically... </div>\n      <div>Also this does nothing</div>\n    </div>\n  "
        })
    ], C2Component);
    return C2Component;
}());
/* harmony default export */ __webpack_exports__["a"] = (C2Component);


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c2_component__ = __webpack_require__(223);


var c2Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__c2_component__["a" /* default */], pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(c2Routes);


/***/ })

});