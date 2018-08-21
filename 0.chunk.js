webpackJsonp([0],{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_routing_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_component__ = __webpack_require__(218);




var DynamicModule = /** @class */ (function () {
    function DynamicModule() {
    }
    DynamicModule.routes = __WEBPACK_IMPORTED_MODULE_2__dynamic_routing_module__["a" /* routes */];
    DynamicModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dynamic_component__["a" /* default */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__dynamic_routing_module__["a" /* routes */]]
        })
    ], DynamicModule);
    return DynamicModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (DynamicModule);


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(16);


var DynamicComponent = /** @class */ (function () {
    function DynamicComponent() {
    }
    DynamicComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'dynamic-component',
            template: "\n    <div class=\"addMargin\">\n      <div><strong>Sub Sandwiches!</strong></div>\n      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>\n    </div>\n  "
        })
    ], DynamicComponent);
    return DynamicComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (DynamicComponent);


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component__ = __webpack_require__(218);


var dynamicRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__dynamic_component__["a" /* default */], pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(dynamicRoutes);


/***/ })

});