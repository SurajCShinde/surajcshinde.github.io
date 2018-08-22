webpackJsonp([2,5],{

/***/ 410:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 410;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_module__ = __webpack_require__(534);




if (__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3_app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ng2Proj/Project/src/main.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'about',
            template: __webpack_require__(730),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/about.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(731),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/app.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cources_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topbar_topbar_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphics_graphics_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__ = __webpack_require__(541);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__cources_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__topbar_topbar_component__["a" /* TopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__graphics_graphics_component__["a" /* GraphicsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__["a" /* NotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
                    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */] },
                    { path: 'graphics', component: __WEBPACK_IMPORTED_MODULE_12__graphics_graphics_component__["a" /* GraphicsComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__["a" /* NotfoundComponent */] },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'contact',
            template: __webpack_require__(732),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/contact.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursesComponent = (function () {
    function CoursesComponent() {
        this.title = "List of Courses";
        this.courses = ["Course1", "Course2", "Course3"];
    }
    CoursesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'courses',
            template: "\n    <h2>{{ title }}</h2>\n    <ul>\n        <li *ngFor=\"let course of courses\">\n        {{ course }}\n        </li>\n    </ul>\n    <button class=\"btn btn-primary\">Submit</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesComponent);
    return CoursesComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/cources.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'footer',
            template: __webpack_require__(733),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/footer.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphicsComponent = (function () {
    function GraphicsComponent() {
    }
    GraphicsComponent.prototype.ngOnInit = function () {
    };
    GraphicsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'graphics',
            template: __webpack_require__(734),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphicsComponent);
    return GraphicsComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/graphics.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    // pdfSrc: string = 'assets/bio/CV-Suraj Shinde.pdf';
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'home',
            template: __webpack_require__(735),
            styles: [__webpack_require__(725)],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/home.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(736),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/navbar.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'notfound',
            template: __webpack_require__(737),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/notfound.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'projects',
            template: __webpack_require__(738),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/projects.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'topbar',
            template: __webpack_require__(739),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopbarComponent);
    return TopbarComponent;
}());
//# sourceMappingURL=D:/ng2Proj/Project/src/topbar.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/ng2Proj/Project/src/environment.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "h2  {\r\n    font-size: 35px !important;\r\n    background-color: #524f4f;\r\n    border-radius: 30px;\r\n    padding: 15px;\r\n}\r\nh3{\r\n    font-size: 25px !important;\r\n}\r\nol{\r\n    font-size: 25px !important;\r\n}\r\nul {\r\n  font-size: 25px !important;\r\n}\r\np{\r\n    color: white;\r\n    display: inline-block\r\n    \r\n}\r\nh4{\r\n    text-align: justify;\r\n}\r\nh3>h4{\r\n    display: inline-block;\r\n    margin: 0 0 !important;\r\n}"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    display: block !important;\r\n}\r\nh2 {\r\n  font-size: 35px !important;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px !important;\r\n  \r\n}"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\na{\r\n    color: #007bff !important\r\n}\r\na:hover {\r\n  color: #E91E63 !important;\r\n  text-decoration: underline;\r\n}"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font-size: 35px !important;\r\n}"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ".fa-star{\r\n    color: gold;\r\n}\r\n.pdf{\r\n    margin: auto;\r\n}\r\n.carousel-indicators .active{\r\n    background-color: black !important;\r\n}\r\n\r\n.carousel-indicators li{\r\n    background-color: #E91E63 !important;\r\n    margin-bottom: 20px !important;\r\n    height: 5px !important;\r\n}\r\n\r\nh3{\r\n        background-color: #343a40;\r\n        border-radius: 30px;\r\n        padding: 10px;\r\n        \r\n}"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "#navigation.fixed {\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 200;\r\n  background: #0c061e;\r\n  width: 100%;\r\n  transition: 1s;\r\n  margin: 0 -15px !important;\r\n}\r\n#navigation{\r\n  margin: 0 -15px !important;\r\n}\r\n.navbar-dark .navbar-nav .show>.nav-link,\r\n.navbar-dark .navbar-nav .active>.nav-link,\r\n.navbar-dark .navbar-nav .nav-link.show,\r\n.navbar-dark .navbar-nav .nav-link.active {\r\n  background-color: black;\r\n}\r\n\r\n.bg-dark{\r\n  padding: 0; \r\n}\r\n.navbar-dark .navbar-nav .nav-link{\r\n  padding: 10px 15px; \r\n}\r\n\r\na:hover {\r\n  color: #ffffff !important;\r\n  text-decoration: underline;\r\n}"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "h2{\r\n    font-size: 35px !important;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\nh4{\r\n    margin: 0 !important;\r\n    \r\n}\r\ncol-sm-6> h4>a{\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n}\r\n\r\n.img-thumbnail{\r\n    border: 0 !important;\r\n    border-radius:0 !important;\r\n}"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ".fa-star {\r\n  color: gold;\r\n}"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-12\">\n    <div class=\"row\">\n      <!-- <div class=\"col-lg-6\">\n        <h1>This is video block</h1>\n      </div> --> \n      <div class=\"col-lg-12\">\n        <h2 class=\"text-center\">\n          <em>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Work Experince </em>\n        </h2> \n        <!-- <hr> -->\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 text-left\">\n              <p>#Total Expreince: 3 Years</p>\n            </div>\n            <div class=\"col-lg-6 text-right\">\n              <p>#Relevent Expreince: 2.7 Years </p>\n            </div>\n          </div>\n        </div>\n        <ol>\n          <li>\n            <h3>Full Stack Web Developer -- Independant Free-Lancer</h3>\n            <h4>Independant Free-Lancer since\n              <u>\n                <em> April 2017</em> (1.7 Years) </u> Work Form Remote Location in\n              <q>Html, Css, JavaScript, JQuery, Bootstrap, Angular, Php, Php-Codeigniter, Android, Photoshop</q> ... etc. Technologies\n              used to Develop Complete Website (all modules) from Scratch to Hosting on server. </h4>\n          </li>\n          <li>\n            <h3>Web UI Developer -- Srujan Web Technovision Pvt. Ltd.</h3>\n            <h4>Junier Web UI Developer from\n              <u>\n                <em>Jan 2016 to Apr 2017</em> (1.4Years)</u> Company Location is Pune-India. worked in\n              <q>Html, Css, JavaScript, JQuery, Bootstrap, Photoshop, PSD to HTML</q> etc. Technologies used to Develop Website\n              (Front-End modules) from Scratch or PSD.\n\n            </h4>\n          </li>\n          <li>\n            <h3>Intership -- Srujan Infotech</h3>\n            <h4> Intern from\n              <u>\n                <em>October 2015 to December 2015</em> (3 Months)</u>\n              as Development of the Java Website in JSP and Servlet.</h4>\n          </li>\n        </ol>\n        <!-- <hr> -->\n        <h2 class=\"text-center\">\n          <em>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Educatational Qualification </em>\n        </h2>\n        <!-- <hr> -->\n        <h3></h3>\n        <ol>\n          <li>\n            <h3>MCA -- Master of Computer Application 2017 - 68%</h3>\n            <h4>MCA - Master of Computer Application Degree completed from Savitribai Pune University in 2014-2017 from Sinhgad\n              College- Sinhgad Institute of Business Administration & Computer Application, Lonavala(lnl)-410 401 Scoring\n              First Class 68%.</h4>\n          </li>\n          <li>\n            <h3>BCA --Bachelor of Computer Application 2014 - 63% </h3>\n            <h4>\n              BCA - Bachelor of Computer Application Degree completed from Savitribai Pune University in 2011-2014 from V. P. S. College\n              of Arts,Science,and Commerce, Lonavala(lnl)-410 401 with Scoring First Class 63.32% and Ranked 1st in the college.\n            </h4>\n          </li>\n          <li>HSC ( XII ) 2011 - 50% </li>\n          <li>SSC ( X ) 2009 - 50% </li>\n        </ol>\n        <!-- <hr> -->\n        <h2 class=\"text-center\">\n          <em>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Additional Qualification </em>\n        </h2>\n        <!-- <hr> -->\n        <ol>\n          <li>\n            <h3>JAVA (2016) <h4> -- Waves Certified Professional Course with B Grade.</h4></h3>\n          </li>\n          <li>\n            <h3>Diploma in Computer Maintenance (2012) <h4> -- From MITCON e-school with First Class A++ Grade.\n            </h4></h3>\n            \n          </li>\n          <li>\n            <h3>MS-CIT (2009) <h4> -- Maharashtra Board First Class A++ Grade.</h4></h3>\n            \n          </li>\n        </ol>\n\n        <!-- <hr> -->\n        <h2 class=\"text-center\">\n          <em>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> IT Skills </em>\n        </h2>\n        <!-- <hr> -->\n        <ul>\n          <li>\n            <h3>Operating Systems: </h3>\n            <h4>--\n              <strong> Windows </strong>:  XP, Vista, 7, 8, 8.1 and 10.</h4>\n            <h4>--\n              <strong> Linux </strong>: Mint, Ubuntu, Fedora, Debian, RedHat, BackTrack.</h4>\n            <h4>--\n              <strong> Mac </strong>: Yosemite and Mavericks.</h4>\n          </li>\n          <li>\n            <h3>Programming Languages Known</h3>\n            <h4>-- C, C++, Java, VB, VB.Net, Android, PHP.\n            </h4>\n          </li>\n          <li>\n            <h3>Web Servers</h3>\n            <h4>-- WAMP, XAMPP, LAMP, MAMP.</h4>\n          </li>\n          <li>\n            <h3>Web Technologies</h3>\n            <h4>-- HTML, CSS, JSP, Servlet, JavaScript, JQuery and Ajax.</h4>\n          </li>\n          <li>\n            <h3>Frameworks Known</h3>\n            <h4>-- Bootstrap, MVC, Codeigniter and Angular 2+</h4>\n          </li>\n          <li>\n            <h3>Development Tools</h3>\n            <h4>-- Notepad, Notepad++, Net Beans, Sublime, Brackets, Photoshop & CorelDraw, Visual Studio, Eclipse, Android Studio,\n              Visual Studio Code IDE ... etc.</h4>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" data-parallax=\"scroll\" data-image-src=\"assets/img/0637.jpg\">\n<topbar></topbar>\n<navbar></navbar>\n<router-outlet></router-outlet>\n<footer></footer>\n</div>\n<!-- <notfound></notfound> -->\n<!-- <home></home>\n<projects></projects>\n<graphics></graphics> -->\n<!-- <h1>\n  {{title}}\n</h1>\n<courses></courses> -->\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-12\">\n    <!-- offset-lg-3  -->\n    <h2 class=\"text-center \">\n      <em>\n        <i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i> Contact Details</em>\n    </h2>\n    <hr width=\"50% \">\n    <div class=\"row\">\n<div class=\"offset-lg-1 col-lg-6\">\n        <h3>\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Mail id: surajchshinde@gmail.com\n          <a href=\"mailto:surajchshinde@gmail.com?Subject=contact%20from%20Portfolio%20Website\" target=\"_top\">Send Mail</a>\n        </h3>\n        <h3>\n          <i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i> Call/Whats app: +91 9767352683 &nbsp;\n        </h3>\n        <h3>\n          <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i> Call/SMS: +91 7972579622</h3>\n        <h3>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Pune, Maharashtra, India-IND\n        </h3>\n      </div>\n      <div class=\"col-lg-4\">\n        <h3>\n          <i class=\"fa fa-skype\" aria-hidden=\"true\"></i> skype:\n          <a href=\"https://join.skype.com/invite/TwAG1qezveIx\" target=\"blank\">surajchshinde_1</a>\n        </h3>\n        <h3>\n          <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Linkedin:\n          <a href=\"https://www.linkedin.com/in/suraj-c-shinde\" target=\"blank\" title=\"Join Linkedin\">suraj-c-shinde</a>\n        </h3>\n        <h3>\n          <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> Facebook:\n          <a href=\"https://www.facebook.com/suraj.shinde.16547\" target=\"blank\">suraj.shinde.16547</a>\n        </h3>\n        <h3>\n          <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram:\n          <a href=\"https://www.instagram.com/suraj_c_shinde/\" target=\"blank\">suraj_c_shinde</a>\n\n        </h3>\n\n      </div>\n\n    </div>\n    <br><br>\n<div class=\" offset-lg-3 row text-center\">\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.141998007!2d73.72287938901064!3d18.524564858632836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1534862828684\"\n width=\"500px\" height=\"350px\" frameborder=\"2\" style=\"border:3px solid black\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br>\n  <hr>\n  <div class=\"row\">\n    <h1>\n      <a href=\"https://join.skype.com/invite/TwAG1qezveIx\" target=\"blank\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a> &nbsp;\n      <a href=\"https://www.linkedin.com/in/suraj-c-shinde\" target=\"blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a> &nbsp;\n      <a href=\"https://www.facebook.com/suraj.shinde.16547\" target=\"blank\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a> &nbsp;\n      <a href=\"https://plus.google.com/+surajshinde924\" target=\"blank\"><i class=\"fa fa-google-plus-official\" aria-hidden=\"true\"></i></a> &nbsp;\n      <a href=\"http://surajchshinde.github.io\" target=\"blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a> &nbsp;</h1>\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-lg-12 gallery\">\n      \n      <h2 class=\"text-center \">\n        <em>\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Graphic Design</em>\n      </h2>\n      <hr width=\"50% \">\n      <h4 class=\"text-center \">\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> PSD, Image Editing, Logo, Banners, Brochure, Advertisement Campaign ... etc.\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i>\n      </h4>\n      <hr>\n      <!-- col-lg-offset-2 -->\n      <div class=\"row text-center \">\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/1.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/1.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/2.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/2.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/3.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/3.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/4.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/4.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/5.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/5.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/6.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/6.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <!-- </div> -->\n        <!-- <div class=\"row text-center \"> -->\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/7.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/7.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/8.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/8.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/9.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/9.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/10.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/10.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/11.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/11.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/12.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/12.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <!-- </div>\n\t\t\t\t<div class=\"row text-center \"> -->\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/13.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/13.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/14.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/14.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/15.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/15.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/16.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/16.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/17.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/17.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/18.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/18.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <!-- </div> -->\n        <!-- <div class=\"row text-center \"> -->\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/19.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/19.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/20.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/20.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/21.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/21.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/22.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/22.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/23.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/23.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/24.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/24.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <!-- </div> -->\n        <!-- <div class=\"row text-center \"> -->\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/25.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/25.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/26.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/26.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/27.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/27.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-3 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/28.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/28.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-6 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/29.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/29.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n        </div>\n        <div class=\"col-sm-6 col-lg-2 \">\n          <a href=\"assets/img/dsn/large/30.jpg \" data-lightbox=\"MyGallery \">\n            <img class=\"img-thumbnail img-responsive \" src=\"assets/img/dsn/thumb/30.jpg\n  \" height=\"150px \" width=\"150px \">\n          </a>\n\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n<div class=\"col-lg-12\">\n  <div class=\"row\">\n    <div class=\"col-lg-5 \">\n      <div class=\"borderstyleIn table-responsive\">\n        <h3 class=\"text-center\">\n          <em>\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Technical Skills</em>\n        </h3>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>SR</th>\n              <th>Skill</th>\n              <th>Star</th>\n              <th>B</th>\n              <th>B+</th>\n              <th>A</th>\n              <th>A+</th>\n              <th>A++</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"text-center\">1. </td>\n              <td>HTML</td>\n              <td class=\"text-center\">5/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">2.</td>\n              <td>CSS</td>\n              <td class=\"text-center\">5/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">3.</td>\n              <td>Bootstrap</td>\n              <td class=\"text-center\">4/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">4.</td>\n              <td>JavaScript</td>\n              <td class=\"text-center\">3/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">5.</td>\n              <td>JQuery</td>\n              <td class=\"text-center\">2/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">6.</td>\n              <td>PHP</td>\n              <td class=\"text-center\">4/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">7.</td>\n              <td>PHP-Codeigniter</td>\n              <td class=\"text-center\">3/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">8.</td>\n              <td>PSD to HTML</td>\n              <td class=\"text-center\">4/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">9.</td>\n              <td>Photoshop</td>\n              <td class=\"text-center\">5/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">10.</td>\n              <td>Coreldraw</td>\n              <td class=\"text-center\">3/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">11.</td>\n              <td>Graphic Designing</td>\n              <td class=\"text-center\">4/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">12.</td>\n              <td>Images Editing</td>\n              <td class=\"text-center\">5/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">13.</td>\n              <td>Angular (2+)</td>\n              <td class=\"text-center\">1/5</td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <hr>\n        <h3 class=\"text-center\">\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n          <em>Development Tools </em>\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        </h3>\n        <h4 style=\"text-align: justify; padding: 0 15px;\">Notepad, Notepad++, Net Beans, Sublime, Brackets, Photoshop & CorelDraw, Visual Studio, Eclipse, Android Studio,\n          Visual Studio Code(IDE)</h4>\n        <hr>\n        <h3 class=\"text-center\">\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n          <em> Web Servers </em>\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        </h3>\n        <h4 style=\"text-align: Center; padding: 0 15px;\">WAMP, XAMPP, LAMP, MAMP</h4>\n        <hr>\n        <h3 class=\"text-center\">\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n          <em> Framework Known </em>\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        </h3>\n        <h4 style=\"text-align: Center; padding: 0 15px;\">Bootstrap, PHP-Codeigniter, Angular</h4>\n        <hr>\n\n\n      </div>\n    </div>\n    <div class=\"col-lg-7\">\n      \n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"./assets/bio/resume.jpg\" alt=\"First slide\">\n            <a href=\"assets/bio/CV-Suraj Shinde.pdf\" target=\"blank\">\n              <button class=\"btn btn-lg btn-primary btnCenter\"> Download Resume/CV</button>\n            </a>\n          </div>\n          <div class=\"carousel-item \">\n            <img class=\"d-block w-100\" src=\"./assets/bio/cv1.jpg\" alt=\"First slide\">\n            <a href=\"assets/bio/CV-Suraj Shinde.pdf\" target=\"blank\">\n              <button class=\"btn btn-lg btn-primary btnCenter\"> Download Resume/CV</button>\n            </a>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"./assets/bio/cv2.jpg\" alt=\"Second slide\">\n            <a href=\"assets/bio/CV-Suraj Shinde.pdf\" target=\"blank\">\n              <button class=\"btn btn-lg btn-primary btnCenter\"> Download Resume/CV</button>\n            </a>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"./assets/bio/cv3.jpg\" alt=\"Third slide\">\n            <a href=\"assets/bio/CV-Suraj Shinde.pdf\" target=\"blank\">\n              <button class=\"btn btn-lg btn-primary btnCenter\"> Download Resume/CV</button>\n            </a>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- </div> -->\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"/\"></a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/home\">\n            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/projects\">Projects Report</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/graphics\">Graphics Design</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active current\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n\n      </ul>\n\n    </div>\n  </nav>\n</div>\n<br>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 text-center\">\r\n<img class=\"img-thumbnail img-responsive\" src=\"assets/img/404.png\" alt=\"404! Not Found...!\">\r\n</div>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-12\">\n    <h2>\n      <em>\n        <i class=\"fa fa-code\" aria-hidden=\"true\"></i> Project Reports\n        <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\n      </em>\n    </h2>\n    <hr width=\"50%\">\n    <br>\n    <div class=\"row text-center\">\n      <div class=\"col-sm-6 col-lg-3 \">\n        <h4>\n          <a href=\"http://www.pridegroup.net/\" target=\"blank\">www.pridegroup.net</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/1.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"http://www.pridegroup.net/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"http://www.wavesinstitute.in/\" target=\"blank\">www.wavesinstitute.in</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/2.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"400px\">\n        <a href=\"http://www.wavesinstitute.in/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"http://finderbay.com/\" target=\"blank\">www.finderbay.com</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/3.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"http://finderbay.com/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"https://slepune.com/\" target=\"blank\">www.slepune.com</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/8.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"https://slepune.com/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-lg-12\">\n    <div class=\"row text-center\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"https://www.lonavalafoods.com/\" target=\"blank\">www.lonavalafoods.com</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/5.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"https://www.lonavalafoods.com/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"https://srujanwebtechnovision.nowfloats.com/\" target=\"blank\">SrujanWebTechnovision</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/6.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"https://srujanwebtechnovision.nowfloats.com/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"http://visionofgiving.org/\" target=\"blank\">www.visionofgiving.org</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/7.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"http://visionofgiving.org/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <h4>\n          <a href=\"http://www.booktheparlour.com/\" target=\"blank\">www.booktheparlour.com</a>\n        </h4>\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/site/4.png\" style=\"width: 100%; height: 400px;\" alt=\"Mr.Suraj Shinde\"\n          width=\"auto\" height=\"auto\">\n        <a href=\"http://www.booktheparlour.com/\" target=\"blank\">\n          <button class=\"btn btn-lg btn-primary btnCenter\"> Visit</button>\n        </a>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Mr.Suraj Chandrakant Shinde</h1>\n  <h2 class=\"text-center\">MCA, Web UI Developer, 3 Years Experince. </h2>\n  <hr>\n  <div class=\"col-lg-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-4\">\n        <h4>\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> surajchshinde@gmail.com </h4>\n        <h4>\n          <i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i> +91 9767352683 &nbsp;\n          <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i> +91 7972579622\n        </h4>\n        <h4>\n          <i class=\"fa fa-skype\" aria-hidden=\"true\"></i> surajchshinde_1\n          <a href=\"https://join.skype.com/invite/TwAG1qezveIx\" target=\"blank\">Join</a>\n        </h4>\n        <h4>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Pune, Maharashtra, India-IND</h4>\n\n      </div>\n      <div class=\"col-sm-8 col-lg-4 text-center\">\n        <div class=\"borderstyleIn\">\n          <h2>\n<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <em>Skills</em>\n<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          </h2>\n          <h4>Social Work, Friendly, Communication, Teamwork, Cooperative, Adaptable, Problem-Solving, Self-motivated, Discipline,\n            Work Ethic</h4>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-2 text-right\">\n        <h3 style=\"margin: 3px; text-align: center;\">Resume.pdf\n          <br>\n          <a href=\"assets/bio/resume.pdf\" target=\"blank\">\n<img src=\"assets/img/pdf.png\" alt=\"View/Download\" width=\"160px\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download PDF File of Resume\">\n          </a>\n        </h3>\n        <h3 style=\"margin: 3px; text-align: center;\">CV.pdf\n          <br>\n          <a href=\"assets/bio/cv.pdf\" target=\"blank\">\n            <img src=\"assets/img/pdf.png\" alt=\"View/Download\" width=\"160px\">\n          </a>\n        </h3>\n      </div>\n\n\n      <div class=\"col-sm-4 col-lg-2 text-Center\" style=\"text-align: center;\">\n        <img class=\"img-thumbnail img-responsive\" src=\"assets/img/bio.jpg\" alt=\"Mr.Suraj Shinde\" width=\"120px\" height=\"auto\">\n      </div>\n\n    </div>\n    <hr>\n\n  </div>\n</div>\n\n<script>\n  $(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip()\n  })\n</script>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(411);


/***/ })

},[792]);
//# sourceMappingURL=main.bundle.map