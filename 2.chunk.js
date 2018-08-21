webpackJsonp([2],{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c1_routing_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c1_component__ = __webpack_require__(220);




var C1Module = /** @class */ (function () {
    function C1Module() {
    }
    C1Module.routes = __WEBPACK_IMPORTED_MODULE_2__c1_routing_module__["a" /* routes */];
    C1Module = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__c1_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__c1_routing_module__["a" /* routes */]]
        })
    ], C1Module);
    return C1Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (C1Module);


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


// unutilized component may be used in case of error
var C1Component = /** @class */ (function () {
    function C1Component() {
    }
    C1Component = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'c1-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>C1 here : 2 Way to C4, C5 Component</strong></div>\n      <div>This sub component was loaded dynamically...</div>\n            <a [routerLink]='[\"/c1/c4\"]'><button class=\"btn btn-success pull-right\" > Go to C4</button></a>\n            <a style=\"margin-left: 20px;\" [routerLink]='[\"/c1/c5\"]'><button class=\"btn btn-success pull-right\" > Go to C5</button></a>     \n    </div>"
        })
    ], C1Component);
    return C1Component;
}());
/* harmony default export */ __webpack_exports__["a"] = (C1Component);


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c1_component__ = __webpack_require__(220);


var c5Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__c1_component__["a" /* default */], pathMatch: 'full' },
    {
        path: 'c4', loadChildren: function () {
            return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 226)).then(function (mod) { return mod.default; });
        } /**dynamic import */
    },
    {
        path: 'c5', loadChildren: function () {
            return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 228)).then(function (mod) { return mod.default; });
        } /**dynamic import */
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_1__c1_component__["a" /* default */] /**static error display */
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(c5Routes);


/***/ })

});