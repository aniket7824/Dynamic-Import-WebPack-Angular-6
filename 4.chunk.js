webpackJsonp([4],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


var C4Component = /** @class */ (function () {
    function C4Component() {
    }
    C4Component = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'c4-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>C4 Works!</strong></div>\n      <div>This sub component was loaded dynamically... </div>\n      <a [routerLink]='[\"/c2\"]'><button class=\"btn btn-success pull-right\" > Go to C2 from C4</button></a>\n    </div>"
        })
    ], C4Component);
    return C4Component;
}());
/* harmony default export */ __webpack_exports__["a"] = (C4Component);


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4_routing_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4_component__ = __webpack_require__(221);




var C4Module = /** @class */ (function () {
    function C4Module() {
    }
    C4Module.routes = __WEBPACK_IMPORTED_MODULE_2__c4_routing_module__["a" /* routes */];
    C4Module = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__c4_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__c4_routing_module__["a" /* routes */]]
        })
    ], C4Module);
    return C4Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (C4Module);


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4_component__ = __webpack_require__(221);


var c4Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__c4_component__["a" /* default */], pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(c4Routes);


/***/ })

});