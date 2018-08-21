webpackJsonp([0],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c3_routing_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c3_component__ = __webpack_require__(225);




var C3Module = /** @class */ (function () {
    function C3Module() {
    }
    C3Module.routes = __WEBPACK_IMPORTED_MODULE_2__c3_routing_module__["a" /* routes */];
    C3Module = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__c3_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__c3_routing_module__["a" /* routes */]]
        })
    ], C3Module);
    return C3Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (C3Module);


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


var C3Component = /** @class */ (function () {
    function C3Component() {
    }
    C3Component = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'c3-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>C3 Works!</strong></div>\n      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>\n    </div>"
        })
    ], C3Component);
    return C3Component;
}());
/* harmony default export */ __webpack_exports__["a"] = (C3Component);


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c3_component__ = __webpack_require__(225);


var c3Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__c3_component__["a" /* default */], pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(c3Routes);


/***/ })

});