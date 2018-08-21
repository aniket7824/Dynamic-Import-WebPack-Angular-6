webpackJsonp([3],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c5_routing_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c5_component__ = __webpack_require__(224);




var C5Module = /** @class */ (function () {
    function C5Module() {
    }
    C5Module.routes = __WEBPACK_IMPORTED_MODULE_2__c5_routing_module__["a" /* routes */];
    C5Module = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__c5_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__c5_routing_module__["a" /* routes */]]
        })
    ], C5Module);
    return C5Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (C5Module);


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


var C5Component = /** @class */ (function () {
    function C5Component() {
    }
    C5Component = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'c5-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>C5 Works!</strong></div>\n      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>\n    </div>\n  "
        })
    ], C5Component);
    return C5Component;
}());
/* harmony default export */ __webpack_exports__["a"] = (C5Component);


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c5_component__ = __webpack_require__(224);


var c5Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__c5_component__["a" /* default */], pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(c5Routes);


/***/ })

});