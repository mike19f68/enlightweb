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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'enlightWeb';
        this.icon = '../../assets/Images/logo.png';
        this.storedSongs = [];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], ["routerLink", "/", 1, "nav-item", "nav-link"], ["routerLink", "/BuildSet", 1, "nav-item", "nav-link"], ["routerLink", "/EditSong", 1, "nav-item", "nav-link"], ["routerLink", "/LeadSheet", 1, "nav-item", "nav-link"], ["routerLink", "/Login", 1, "nav-item", "nav-link"], [1, "body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Build Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit/Add Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lead Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100%;}\r\nbody[_ngcontent-%COMP%]{height:100vh;}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: block;\r\n  height: 99vh;\r\n  background-color: #d7e7fa;\r\n  border-width:1px;\r\n  border-color: darkblue;\r\n  border-style: solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxlQUFlLENBQUM7QUFDM0IsS0FBSyxZQUFZLENBQUM7QUFFbEI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7bWluLWhlaWdodDoxMDAlO31cclxuYm9keXtoZWlnaHQ6MTAwdmg7fVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDk5dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTdmYTtcclxuICBib3JkZXItd2lkdGg6MXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sortablejs */ "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./build-set/build-set.component */ "./src/app/build-set/build-set.component.ts");
/* harmony import */ var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-song/edit-song.component */ "./src/app/edit-song/edit-song.component.ts");
/* harmony import */ var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lead-sheet/lead-sheet.component */ "./src/app/lead-sheet/lead-sheet.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-songs/scroll-songs.component */ "./src/app/scroll-songs/scroll-songs.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set/set.component */ "./src/app/set/set.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./set-context-menu/set-context-menu.component */ "./src/app/set-context-menu/set-context-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__["SortablejsModule"].forRoot({ animation: 150 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_6__["BuildSetComponent"],
        _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_7__["EditSongComponent"],
        _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_8__["LeadSheetComponent"],
        _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_10__["ScrollSongsComponent"],
        _set_set_component__WEBPACK_IMPORTED_MODULE_11__["SetComponent"],
        _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_15__["SetContextMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__["SortablejsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_6__["BuildSetComponent"],
                    _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_7__["EditSongComponent"],
                    _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_8__["LeadSheetComponent"],
                    _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_10__["ScrollSongsComponent"],
                    _set_set_component__WEBPACK_IMPORTED_MODULE_11__["SetComponent"],
                    _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_15__["SetContextMenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__["SortablejsModule"].forRoot({ animation: 150 })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build-set/build-set.component */ "./src/app/build-set/build-set.component.ts");
/* harmony import */ var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-song/edit-song.component */ "./src/app/edit-song/edit-song.component.ts");
/* harmony import */ var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead-sheet/lead-sheet.component */ "./src/app/lead-sheet/lead-sheet.component.ts");





const routes = [
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'BuildSet', component: _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__["BuildSetComponent"] },
    { path: 'EditSong', component: _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__["EditSongComponent"] },
    { path: 'LeadSheet', component: _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__["LeadSheetComponent"] },
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/build-set/build-set.component.ts":
/*!**************************************************!*\
  !*** ./src/app/build-set/build-set.component.ts ***!
  \**************************************************/
/*! exports provided: BuildSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildSetComponent", function() { return BuildSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-songs/scroll-songs.component */ "./src/app/scroll-songs/scroll-songs.component.ts");



class BuildSetComponent {
    constructor() { }
    ngOnInit() {
    }
    receiveSong(song) {
        this.receivedC = song;
    }
}
BuildSetComponent.ɵfac = function BuildSetComponent_Factory(t) { return new (t || BuildSetComponent)(); };
BuildSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildSetComponent, selectors: [["app-build-set"]], inputs: { receivedC: "receivedC" }, decls: 2, vars: 0, consts: [[3, "SongToSend"]], template: function BuildSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scroll-songs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SongToSend", function BuildSetComponent_Template_app_scroll_songs_SongToSend_1_listener($event) { return ctx.receiveSong($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__["ScrollSongsComponent"]], styles: [".header[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  background-color: dimgray;\r\n  color:white;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGQtc2V0L2J1aWxkLXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvYnVpbGQtc2V0L2J1aWxkLXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-build-set',
                templateUrl: './build-set.component.html',
                styleUrls: ['./build-set.component.css']
            }]
    }], function () { return []; }, { receivedC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/edit-song/edit-song.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-song/edit-song.component.ts ***!
  \**************************************************/
/*! exports provided: EditSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongComponent", function() { return EditSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function EditSongComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditSongComponent_div_63_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function EditSongComponent_div_63_tr_2_Template_tr_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const song_r5 = ctx.$implicit; const index_r6 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectSong(song_r5, index_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", index_r6 == ctx_r4.ActiveIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "song-", index_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5.SongRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5);
} }
function EditSongComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditSongComponent_div_63_tr_2_Template, 12, 8, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.songs);
} }
function EditSongComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Song Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pace Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fast - Praise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Slow - Worship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Christmas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Kids/School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Musical Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Bb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "C#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Eb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "F#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Copyright");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CCLI Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "Input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Tempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "Input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Last Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "Input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.PaceGrp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Copyright);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.CCLI_Ref);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Tempo);
} }
function EditSongComponent_div_77_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Song Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pace Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fast - Praise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Slow - Worship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Christmas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Kids/School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Musical Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Bb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "C#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Eb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "F#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Copyright");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CCLI Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "Input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Tempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "Input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Last Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "Input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditSongComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditSongComponent_div_77_div_1_Template, 78, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditSongComponent_div_77_div_2_Template, 78, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.hasData);
} }
class EditSongComponent {
    constructor(songsService) {
        this.songsService = songsService;
        this.hasData = false;
        this.setStarted = false;
        this.setDate = new Date();
        this.dateString = '';
        this.isLoading = false;
        this.chooseSet = false;
        this.ActiveIndex = 0;
        this.searchString = '';
        this.selectedGroup = '0';
        this.selectedAge = '1';
        this.selectedRating = '2';
        this.sortField = 'SongRef';
        this.sortDirection = -1;
        this.isHidden = true;
        this.xPosTabMenu = 0;
        this.yPosTabMenu = 0;
        this.indexTabMenu = 0;
        this.SongRef = null;
        this.Title = '';
        this.FirstLine = '';
        this.Lyrics = '';
        this.Author = '';
        this.CCLIRef = '';
        this.Copyright = '';
        this.PaceGrp = '';
        this.Rating = 3;
        this.LastPlay = null;
        this.MusicalKey = '';
        this.Tempo = null;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.getSongs();
    }
    getSongs() {
        this.songsService.getSongs(this.selectedGroup, this.selectedAge, this.selectedRating, this.searchString, this.sortField, this.sortDirection);
        this.isLoading = true;
        this.songsSub = this.songsService.getSongUpdateListener()
            .subscribe((songs) => {
            this.isLoading = false;
            this.songs = songs;
            this.song = this.songs[0];
            this.hasData = true;
        });
        console.log('GotSongs');
    }
    changeSort(field) {
        if (this.sortField === field) {
            this.sortDirection = -this.sortDirection;
        }
        else {
            this.sortField = field;
            if (field === 'SongRef') {
                this.sortDirection = -1;
            }
            else {
                this.sortDirection = 1;
            }
        }
        this.getSongs();
        this.ActiveIndex = 0;
    }
    selectSong(selectedSong, index) {
        this.hasData = true;
        this.song = selectedSong;
        this.ActiveIndex = index;
    }
    onAddSong(form) {
        if (form.invalid) {
            return;
        }
        this.songsService.addSong(null, form.value.SongRef, form.value.Title, form.value.FirstLine, form.value.Lyrics, form.value.Author, form.value.CCLIRef, form.value.Copyright, form.value.PaceGrp, form.value.Rating, form.value.LastPlay, form.value.MusicalKey, form.value.Tempo);
        form.resetForm();
    }
    deleteSong(SelectedSong, index) {
        if (!this.hasData) {
            return;
        }
        this.songsService.deleteSong(this.song.id);
        console.log(this.song.id);
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.songsSub.unsubscribe();
    }
}
EditSongComponent.ɵfac = function EditSongComponent_Factory(t) { return new (t || EditSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_songs_service__WEBPACK_IMPORTED_MODULE_1__["SongsService"])); };
EditSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditSongComponent, selectors: [["app-edit-song"]], decls: 78, vars: 8, consts: [[1, "editsong"], [1, "tableSection", "col-md-6"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "drop-filter", "d-inline-block", "btn-group", 3, "change"], ["id", "PaceGrp", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "btn", "btn-add", "btn-primary"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], ["class", "waiting", 4, "ngIf"], [4, "ngIf"], [1, "songpage", 3, "submit"], ["songForm", "ngForm"], [1, "buttons"], ["for", "SongRef", 1, "mb-6"], ["id", "SongRef", "type", "int", "placeholder", "0", "name", "SongRef", "ngModel", "", 1, "form-control", "mb-6", "btn", "songref", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "mb-6"], ["type", "Delete", 1, "btn", "btn-primary", "mb-6", 3, "click"], ["type", "cancel", 1, "btn", "btn-primary", "mb-6"], [1, "form-row"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "picker", 3, "id", "active", "mouseup", 4, "ngFor", "ngForOf"], [1, "picker", 3, "id", "mouseup"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_key"], [2, "display", "none"], ["song", ""], [1, "form-group", "col-md-12"], ["for", "SongTitle"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control", 3, "value"], ["for", "FirstLine"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Lyrics"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Author"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Rating"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Pace/Group"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control", 3, "value"], ["for", "MusicalKey"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Copyright"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control", 3, "value"], ["for", "CCLI_Ref"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Tempo"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control", 3, "value"], ["for", "LastPlay"], ["id", "LastPlay", "type", "text", "placeholder", "---", "name", "LastPlay", "ngModel", "", 1, "form-control"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control"]], template: function EditSongComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add/Edit Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchString = $event; })("change", function EditSongComponent_Template_input_change_7_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_9_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_10_listener($event) { return ctx.selectedGroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Christmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_25_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_26_listener($event) { return ctx.selectedAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_35_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_36_listener($event) { return ctx.selectedRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rating 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rating 4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Rating 3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rating 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "All Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_47_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "+New Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_53_listener() { return ctx.changeSort("SongRef"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_55_listener() { return ctx.changeSort("SongTitle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_57_listener() { return ctx.changeSort("FirstLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "First Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_59_listener() { return ctx.changeSort("MusicalKey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EditSongComponent_div_62_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, EditSongComponent_div_63_Template, 3, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "form", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditSongComponent_Template_form_submit_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.onAddSong(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Song Ref:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSongComponent_Template_button_click_72_listener() { return ctx.deleteSong(ctx.song, ctx.ActiveIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, EditSongComponent_div_77_Template, 4, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.song.SongRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: lightgrey;\r\n  overflow-y: hidden;\r\n  margin: auto;\r\n  padding-left:5px;\r\n  align-items: center;\r\n\r\n}\r\n.editsong[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 6rem);\r\n  width: calc(100vw - 65px);\r\n}\r\n.songpage[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  margin:3px;\r\n  height:100%;\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  margin:3px;\r\n}\r\n.component[_ngcontent-%COMP%] {\r\n  display:block;\r\n  width:100%;\r\n  overflow-y:scroll;\r\n  margin:0;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: right;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n}\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 650px;\r\n  min-width: 650px;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x:hidden;\r\n  padding:0px;\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:630px;\r\n  float: left;\r\n}\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n\r\n}\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:0;\r\n  font-size:small;\r\n  margin-right:5px;\r\n}\r\n.btn-add[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  align-self: right;\r\n  margin:0px;\r\n  margin-left:5px;\r\n  padding-top:1px;\r\n  padding-bottom:1px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 630px;\r\n  margin:0px;\r\n  padding:1px;\r\n  table-layout: fixed;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-size:12px;\r\n  padding-left:3px;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\ntr.picker[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffff99;\r\n  cursor: pointer;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#3871aa !important;\r\n  color: white;\r\n}\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:50px;\r\n}\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  font-size:small;\r\n  width:50px;\r\n}\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_Title[_ngcontent-%COMP%] {\r\n  min-width:260px;\r\n  width:260px;\r\n  max-width: 260px;\r\n}\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_FirstLine[_ngcontent-%COMP%]\r\n{\r\n  min-width:280px;\r\n  width:280px;\r\n  max-width: 280px;\r\n}\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:45px;\r\n}\r\n.col_Key[_ngcontent-%COMP%]\r\n{\r\n  width:45px;\r\n}\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline overline;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n  cursor: pointer;\r\n}\r\n.songref[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n  text-align: left;\r\n  width:80px;\r\n  padding:3px;\r\n  margin:10px !important;\r\n\r\n}\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n  display:block;\r\n}\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n\r\n}\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  margin:auto;\r\n  padding-right:10px;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-width:0.5px;\r\n  outline-style: solid;\r\n  outline-color: lightslategray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zb25nL2VkaXQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsUUFBUTtBQUNWO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc29uZy9lZGl0LXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5lZGl0c29uZyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NXB4KTtcclxufVxyXG4uc29uZ3BhZ2Uge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW46M3B4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5mb3JtLXJvdyB7XHJcbiAgbWFyZ2luOjNweDtcclxufVxyXG4uY29tcG9uZW50IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG4ge1xyXG4gIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi50YWJsZVNlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6IDY1MHB4O1xyXG4gIG1pbi13aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcGFkZGluZzowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDE3MiwgMjEyKTtcclxuICB3aWR0aDo2MzBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLndhaXRpbmcge1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hpbnB1dCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5kcm9wLWZpbHRlciB7XHJcbiAgaGVpZ2h0OjI4cHg7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbi5idG4tYWRkIHtcclxuICBoZWlnaHQ6MjhweDtcclxuICBhbGlnbi1zZWxmOiByaWdodDtcclxuICBtYXJnaW46MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuICBwYWRkaW5nLXRvcDoxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDYzMHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzoxcHg7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOi41cHg7XHJcbn1cclxudHIucGlja2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODcxYWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uaGRyX1JlZiB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcbi5jb2xfUmVme1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcblxyXG4uaGRyX1RpdGxlIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBtaW4td2lkdGg6MjYwcHg7XHJcbiAgd2lkdGg6MjYwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuXHJcbi5oZHJfRmlyc3RMaW5lIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX0ZpcnN0TGluZVxyXG57XHJcbiAgbWluLXdpZHRoOjI4MHB4O1xyXG4gIHdpZHRoOjI4MHB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5oZHJfS2V5IHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQ1cHg7XHJcbn1cclxuXHJcbi5jb2xfS2V5XHJcbntcclxuICB3aWR0aDo0NXB4O1xyXG59XHJcblxyXG4uc29ydGFibGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNvbmdyZWYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDo4MHB4O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbjoxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5seXJpY3Mge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maXJzdGxpbmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5zZXRIZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbm5neC1zb3J0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnNldFNlcSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5TZXFUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBzdHJvbmc7XHJcbn1cclxuLnNlcUZpcnN0TGluZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG5cclxufVxyXG4uc2V0S2V5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uY2xpcHBlZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBmb250LXNpemU6MTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgb3V0bGluZS13aWR0aDowLjVweDtcclxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcclxuICBvdXRsaW5lLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-song',
                templateUrl: './edit-song.component.html',
                styleUrls: ['./edit-song.component.css']
            }]
    }], function () { return [{ type: _songs_service__WEBPACK_IMPORTED_MODULE_1__["SongsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lead-sheet/lead-sheet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lead-sheet/lead-sheet.component.ts ***!
  \****************************************************/
/*! exports provided: LeadSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadSheetComponent", function() { return LeadSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LeadSheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeadSheetComponent.ɵfac = function LeadSheetComponent_Factory(t) { return new (t || LeadSheetComponent)(); };
LeadSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadSheetComponent, selectors: [["app-lead-sheet"]], decls: 2, vars: 0, template: function LeadSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lead-sheet works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWQtc2hlZXQvbGVhZC1zaGVldC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeadSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lead-sheet',
                templateUrl: './lead-sheet.component.html',
                styleUrls: ['./lead-sheet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 0, consts: [[1, "d-flex", "justify-content-center", "topgap"], [1, "form-signin", "text-center"], [1, "h5", "mb-3", "font-weight-normal"], [1, "form-group"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", "data-keeper-lock-id", "k-2rddtlntpqn", 1, "form-control"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", "data-keeper-lock-id", "k-ru8khuxbtf", 1, "form-control"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please sign in:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".topgap[_ngcontent-%COMP%] {\r\n    margin-top: 30px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZ2FwIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/scroll-songs/scroll-songs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/scroll-songs/scroll-songs.component.ts ***!
  \********************************************************/
/*! exports provided: ScrollSongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSongsComponent", function() { return ScrollSongsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _set_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set.model */ "./src/app/set.model.ts");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs.service.ts");
/* harmony import */ var _sets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sets.service */ "./src/app/sets.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-sortablejs */ "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
/* harmony import */ var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../set-context-menu/set-context-menu.component */ "./src/app/set-context-menu/set-context-menu.component.ts");










function ScrollSongsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.song.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.song.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.song.Lyrics);
} }
function ScrollSongsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_div_63_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function ScrollSongsComponent_div_63_tr_2_Template_tr_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const song_r10 = ctx.$implicit; const index_r11 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.showLyrics(song_r10, index_r11); })("dblclick", function ScrollSongsComponent_div_63_tr_2_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const song_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.addtoSet(song_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_div_63_tr_2_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const song_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.addtoSet(song_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", index_r11 == ctx_r9.ActiveIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "song-", index_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10.SongRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10);
} }
function ScrollSongsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScrollSongsComponent_div_63_tr_2_Template, 14, 8, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.songs);
} }
function ScrollSongsComponent_p_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set Not Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ScrollSongsComponent_div_89_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const index_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.rightClick($event, index_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", set_r17.Style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r17.Seq);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r17.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r17.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r17.Key);
} }
function ScrollSongsComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", set_r22.SetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", set_r22.SetName, " ");
} }
function ScrollSongsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScrollSongsComponent_div_90_div_1_Template, 2, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.sets);
} }
function ScrollSongsComponent_app_set_context_menu_91_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-set-context-menu", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuItemSelected", function ScrollSongsComponent_app_set_context_menu_91_Template_app_set_context_menu_menuItemSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.handleMenuSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r8.xPosTabMenu)("y", ctx_r8.yPosTabMenu)("menuitems", ctx_r8.showMenuOptions())("index", ctx_r8.indexTabMenu);
} }
const _c0 = function () { return { animation: 150 }; };
class ScrollSongsComponent {
    constructor(songsService, setsService) {
        this.songsService = songsService;
        this.setsService = setsService;
        this.hasData = false;
        this.setStarted = false;
        this.setList = [];
        this.setRows = [];
        this.setDate = new Date();
        this.dateString = '';
        this.isLoading = false;
        this.chooseSet = false;
        this.ActiveIndex = 0;
        this.searchString = '';
        this.selectedGroup = '0';
        this.selectedAge = '1';
        this.selectedRating = '2';
        this.sortField = 'SongRef';
        this.sortDirection = -1;
        this.isHidden = true;
        this.xPosTabMenu = 0;
        this.yPosTabMenu = 0;
        this.indexTabMenu = 0;
    }
    ngOnInit() {
        this.getSongs();
    }
    getSongs() {
        this.songsService.getSongs(this.selectedGroup, this.selectedAge, this.selectedRating, this.searchString, this.sortField, this.sortDirection);
        this.isLoading = true;
        this.songsSub = this.songsService.getSongUpdateListener()
            .subscribe((songs) => {
            this.isLoading = false;
            this.songs = songs;
            this.song = this.songs[0];
            this.hasData = true;
        });
    }
    showLyrics(selectedSong, index) {
        this.hasData = true;
        this.song = selectedSong;
        this.ActiveIndex = index;
    }
    changeSort(field) {
        if (this.sortField === field) {
            this.sortDirection = -this.sortDirection;
        }
        else {
            this.sortField = field;
            if (field === 'SongRef') {
                this.sortDirection = -1;
            }
            else {
                this.sortDirection = 1;
            }
        }
        this.getSongs();
        this.ActiveIndex = 0;
    }
    addtoSet(song) {
        const newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Seq = 'S';
        newRow.Key = song.MusicalKey;
        newRow.FirstLine = song.FirstLine;
        newRow.SongRef = song.SongRef;
        newRow.Title = song.SongTitle;
        newRow.Lyrics = song.Lyrics;
        newRow.Style = 'Std';
        this.setRows.splice(this.setRows.length, 0, newRow);
        this.setStarted = true;
    }
    onDateSelected() {
        console.log(this.setDate);
        const d = this.setDate;
        console.log();
        console.log(d.getFullYear);
        console.log(this.setDate.getFullYear);
    }
    loadTemplate() {
        let newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Seq = 'AM';
        newRow.Title = '';
        newRow.Style = 'time';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Seq = 'PM';
        newRow.Title = '';
        newRow.Style = 'time';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        newRow = new _set_model__WEBPACK_IMPORTED_MODULE_1__["setRow"]();
        newRow.Style = 'splitter';
        this.setRows.splice(this.setRows.length, 0, newRow);
        this.setStarted = true;
    }
    clearSet() {
        this.setRows.length = 0;
    }
    showMenuOptions() {
        return 'Delete;AM Title;PM Title;Spacer;Standard Song;Pre Song;Extra Song';
    }
    rightClick(event, index) {
        event.stopPropagation();
        this.xPosTabMenu = event.clientX;
        this.yPosTabMenu = event.clientY;
        this.indexTabMenu = index;
        this.isHidden = false;
        return false;
    }
    closeRightClickMenu() {
        this.isHidden = true;
    }
    handleMenuSelection(menuselection) {
        if (menuselection === 'Delete') {
            this.setRows.splice(this.indexTabMenu, 1);
        }
        else if (menuselection === 'Standard Song') {
            this.setRows[this.indexTabMenu].Style = 'song';
            this.setRows[this.indexTabMenu].Seq = 'S';
        }
        else if (menuselection === 'Pre Song') {
            this.setRows[this.indexTabMenu].Style = 'Pre';
            this.setRows[this.indexTabMenu].Seq = 'P';
        }
        else if (menuselection === 'Extra Song') {
            this.setRows[this.indexTabMenu].Style = 'Extra';
            this.setRows[this.indexTabMenu].Seq = 'X';
        }
    }
    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }
    getSets() {
        this.chooseSet = true;
        this.setsService.getSets();
        this.setsSub = this.setsService.getSetUpdateListener()
            .subscribe((sets) => {
            this.sets = sets;
            this.set = this.sets[0];
            this.hasData = true;
        });
    }
    ngOnDestroy() {
        this.songsSub.unsubscribe();
    }
}
ScrollSongsComponent.ɵfac = function ScrollSongsComponent_Factory(t) { return new (t || ScrollSongsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sets_service__WEBPACK_IMPORTED_MODULE_3__["SetsService"])); };
ScrollSongsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollSongsComponent, selectors: [["app-scroll-songs"]], decls: 94, vars: 16, consts: [[1, "component"], [1, "lyricsSection"], [1, "form-group"], [4, "ngIf"], [1, "tableSection"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "drop-filter", "d-inline-block", "btn-group", 3, "change"], ["id", "PaceGrp", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], [1, "hdr_Key"], ["class", "waiting", 4, "ngIf"], [1, "setSection", 3, "click"], [1, "setHeader", "sticky-top", "container-fluid"], [1, "form-inline"], [1, "input-group"], [1, "setdatetitle"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "dateSelect"], ["dp", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "calendar", 3, "click"], ["width", "28px", "title", "Pick Date", "src", "..\\..\\assets\\Images\\cal.png"], ["type", "button", 1, "btn"], ["width", "28px", "title", "Load Template", "src", "..\\..\\assets\\Images\\add_template.png", 3, "click"], ["width", "28px", "title", "Clear Set", "src", "..\\..\\assets\\Images\\erase_document.png", 3, "click"], ["width", "28px", "title", "Load Set", "src", "..\\..\\assets\\Images\\load_document.png", 3, "click"], ["width", "28px", "title", "Save Set", "src", "..\\..\\assets\\Images\\save_document.png"], ["width", "28px", "title", "Export to Word", "src", "..\\..\\assets\\Images\\Export_document.png"], [3, "sortablejs", "sortablejsOptions"], ["class", "setitem", 3, "id", "contextmenu", 4, "ngFor", "ngForOf"], [3, "x", "y", "menuitems", "index", "menuItemSelected", 4, "ngIf"], [1, "sticky-bottom", "setFooter", "container-fluid"], [1, "title", "clipped"], [1, "firstline", "clipped"], [1, "lyrics"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "picker", 3, "id", "active", "mouseup", "dblclick", 4, "ngFor", "ngForOf"], [1, "picker", 3, "id", "mouseup", "dblclick"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_key"], ["src", "../../assets/Images/ToList.png", "alt", " ", "width", "14", "height", "14", 3, "click"], [2, "display", "none"], ["song", ""], [1, "setitem", 3, "id", "contextmenu"], [1, "rowseq"], [1, "rowtitle"], [1, "rowfirstline"], [1, "rowkey"], ["class", "setFile", 3, "id", 4, "ngFor", "ngForOf"], [1, "setFile", 3, "id"], [3, "x", "y", "menuitems", "index", "menuItemSelected"]], template: function ScrollSongsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScrollSongsComponent_div_3_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScrollSongsComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchString = $event; })("change", function ScrollSongsComponent_Template_input_change_8_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_10_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedGroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Christmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_26_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_27_listener($event) { return ctx.selectedAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_36_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_37_listener($event) { return ctx.selectedRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rating 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Rating 4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rating 3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rating 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "All Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_51_listener() { return ctx.changeSort("SongRef"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_53_listener() { return ctx.changeSort("SongTitle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_55_listener() { return ctx.changeSort("FirstLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "First Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_57_listener() { return ctx.changeSort("MusicalKey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ScrollSongsComponent_div_62_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ScrollSongsComponent_div_63_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_65_listener() { return ctx.closeRightClickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Set Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_72_listener($event) { return ctx.setDate = $event; })("dateSelect", function ScrollSongsComponent_Template_input_dateSelect_72_listener() { return ctx.onDateSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_button_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_78_listener() { return ctx.loadTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_80_listener() { return ctx.clearSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_82_listener() { return ctx.getSets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ScrollSongsComponent_p_87_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ScrollSongsComponent_div_89_Template, 9, 5, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ScrollSongsComponent_div_90_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ScrollSongsComponent_app_set_context_menu_91_Template, 1, 4, "app-set-context-menu", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.setDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.setStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortablejs", ctx.setList)("sortablejsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.setRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chooseSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbInputDatepicker"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_7__["SortablejsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_8__["SetContextMenuComponent"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: paleturquoise;\r\n  overflow: hidden;\r\n  margin: auto;\r\n  padding:0;\r\n\r\n  height: calc(100vh - 3rem);\r\n  width: calc(100vw - 60px);\r\n}\r\n.component[_ngcontent-%COMP%] {\r\n  display:block;\r\n  width:100%;\r\n  overflow:hidden;\r\n}\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 650px;\r\n  height: calc(100vh - 4rem);\r\n  overflow-y: scroll;\r\n}\r\n.lyricsSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  display:block;\r\n  height: calc(100vh - 4rem);\r\n  width:250px;\r\n  background-color: lightyellow;\r\n  color: darkred;\r\n  font-size:12px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  text-align: center;\r\n  padding:2px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:630px;\r\n  float: left;\r\n}\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n\r\n}\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:0;\r\n  font-size:small;\r\n  margin-right:5px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 630px;\r\n  margin:0px;\r\n  padding:1px;\r\n  table-layout: fixed;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-size:12px;\r\n  padding-left:3px;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\ntr.picker[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffff99;\r\n  cursor: pointer;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#3871aa !important;\r\n  color: white;\r\n}\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:40px;\r\n}\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  font-size:small;\r\n  color: darkblue;\r\n  width:40px;\r\n}\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:245px;\r\n\r\n}\r\n.col_Title[_ngcontent-%COMP%] {\r\n  min-width:245px;\r\n  width:245px;\r\n  max-width: 245px;\r\n}\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:255px;\r\n\r\n}\r\n.col_FirstLine[_ngcontent-%COMP%]\r\n{\r\n  min-width:255px;\r\n  width:255px;\r\n  max-width: 255px;\r\n}\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:45px;\r\n}\r\n.col_Key[_ngcontent-%COMP%]\r\n{\r\n  width:45px;\r\n}\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline overline;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n  cursor: pointer;\r\n}\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.setSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: calc(100vw - 960px);\r\n  height: calc(100vh - 3rem);\r\n  background-color: lightsteelblue;\r\n  font-size: 12px;\r\n  padding:2px;\r\n  margin:0;\r\n  display:block;\r\n}\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n  display:block;\r\n}\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n.setList[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  overflow-y: scroll;\r\n}\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n\r\n}\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n.setitem[_ngcontent-%COMP%] {\r\n  background-color: navajowhite;\r\n  border-radius: 3px;\r\n  border-style: solid;\r\n  border-width: .5px;\r\n  cursor: move;\r\n  padding-left: 3px;\r\n}\r\n.setFooter[_ngcontent-%COMP%] {\r\n  height:1rem;\r\n  background-color: lightsteelblue;\r\n  display:block;\r\n}\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  margin:auto;\r\n  padding-right:10px;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-width:0.5px;\r\n  outline-style: solid;\r\n  outline-color: lightslategray;\r\n}\r\n#splitter[_ngcontent-%COMP%] {\r\n  height:10px;\r\n  background-color: lightslategray;\r\n}\r\n#time[_ngcontent-%COMP%] {\r\n  background-color: navy;\r\n  color: white;\r\n}\r\n#Extra[_ngcontent-%COMP%] {\r\n  font-style:italic;\r\n  background-color: lightgray;\r\n}\r\n#Pre[_ngcontent-%COMP%] {\r\n  background-color: cornflowerblue;\r\n}\r\n.setitem[_ngcontent-%COMP%]:hover {\r\n  background-color:white;\r\n}\r\n.rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:2%;\r\n}\r\n.rowtitle[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:40%;\r\n}\r\n.rowfirstline[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:40%;\r\n}\r\n.rowkey[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:3%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLXNvbmdzL3Njcm9sbC1zb25ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTOztFQUVULDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDtBQUdBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXOztBQUViO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsLXNvbmdzL3Njcm9sbC1zb25ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzowO1xyXG5cclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxuICB3aWR0aDogY2FsYygxMDB2dyAtIDYwcHgpO1xyXG59XHJcbi5jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLnRhYmxlU2VjdGlvbiB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubHlyaWNzU2VjdGlvbiB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG4gIHdpZHRoOjI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uZmlsdGVyIHtcclxuICBwYWRkaW5nOjA7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTcyLCAyMTIpO1xyXG4gIHdpZHRoOjYzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ud2FpdGluZyB7XHJcbiAgei1pbmRleDo5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuI3NlYXJjaGlucHV0IHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmRyb3AtZmlsdGVyIHtcclxuICBoZWlnaHQ6MjhweDtcclxuICBwYWRkaW5nOjA7XHJcbiAgZm9udC1zaXplOnNtYWxsO1xyXG4gIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogNjMwcHg7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOjFweDtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbnRkIHtcclxuICBmb250LXNpemU6MTJweDtcclxuICBwYWRkaW5nLWxlZnQ6M3B4O1xyXG59XHJcbnRyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6LjVweDtcclxufVxyXG50ci5waWNrZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50ci5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM4NzFhYSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5oZHJfUmVmIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQwcHg7XHJcbn1cclxuLmNvbF9SZWZ7XHJcbiAgZm9udC1zaXplOnNtYWxsO1xyXG4gIGNvbG9yOiBkYXJrYmx1ZTtcclxuICB3aWR0aDo0MHB4O1xyXG59XHJcblxyXG4uaGRyX1RpdGxlIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI0NXB4O1xyXG5cclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBtaW4td2lkdGg6MjQ1cHg7XHJcbiAgd2lkdGg6MjQ1cHg7XHJcbiAgbWF4LXdpZHRoOiAyNDVweDtcclxufVxyXG5cclxuXHJcbi5oZHJfRmlyc3RMaW5lIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI1NXB4O1xyXG5cclxufVxyXG4uY29sX0ZpcnN0TGluZVxyXG57XHJcbiAgbWluLXdpZHRoOjI1NXB4O1xyXG4gIHdpZHRoOjI1NXB4O1xyXG4gIG1heC13aWR0aDogMjU1cHg7XHJcbn1cclxuXHJcbi5oZHJfS2V5IHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQ1cHg7XHJcbn1cclxuXHJcbi5jb2xfS2V5XHJcbntcclxuICB3aWR0aDo0NXB4O1xyXG59XHJcblxyXG4uc29ydGFibGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5seXJpY3Mge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maXJzdGxpbmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuLnNldFNlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA5NjBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6MnB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnNldEhlYWRlciB7XHJcbiAgaGVpZ2h0OjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxubmd4LXNvcnRhYmxlIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZXRMaXN0IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uc2V0U2VxIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLlNlcVRpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IHN0cm9uZztcclxufVxyXG4uc2VxRmlyc3RMaW5lIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcblxyXG59XHJcbi5zZXRLZXkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnNldGl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5hdmFqb3doaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogLjVweDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5zZXRGb290ZXIge1xyXG4gIGhlaWdodDoxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi5jbGlwcGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5zZXRkYXRldGl0bGUge1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBtYXJnaW46YXV0bztcclxuICBvdXRsaW5lLXdpZHRoOjAuNXB4O1xyXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gIG91dGxpbmUtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4jc3BsaXR0ZXIge1xyXG4gIGhlaWdodDoxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcbiN0aW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jRXh0cmEge1xyXG4gIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4jUHJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG4uc2V0aXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4ucm93c2VxIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDoyJTtcclxufVxyXG4ucm93dGl0bGUge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOjQwJTtcclxufVxyXG4ucm93Zmlyc3RsaW5lIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDo0MCU7XHJcbn1cclxuLnJvd2tleSB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6MyU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollSongsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-songs',
                templateUrl: './scroll-songs.component.html',
                styleUrls: ['./scroll-songs.component.css']
            }]
    }], function () { return [{ type: _songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"] }, { type: _sets_service__WEBPACK_IMPORTED_MODULE_3__["SetsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/set-context-menu/set-context-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/set-context-menu/set-context-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: SetContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetContextMenuComponent", function() { return SetContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SetContextMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetContextMenuComponent_li_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const menuItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.outputSelectedMenuItem(menuItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1);
} }
const _c0 = function (a0, a1) { return { "left.px": a0, "top.px": a1 }; };
class SetContextMenuComponent {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.menuitems = '';
        this.index = 0;
        this.theMenuItems = [];
        this.menuItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    outputSelectedMenuItem(menuitem) {
        this.menuItemSelected.emit(menuitem);
    }
    ngOnInit() {
        this.theMenuItems = this.menuitems.split(';');
    }
}
SetContextMenuComponent.ɵfac = function SetContextMenuComponent_Factory(t) { return new (t || SetContextMenuComponent)(); };
SetContextMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetContextMenuComponent, selectors: [["app-set-context-menu"]], inputs: { x: "x", y: "y", menuitems: "menuitems", index: "index" }, outputs: { menuItemSelected: "menuItemSelected" }, decls: 3, vars: 5, consts: [[1, "menu", 3, "ngStyle"], [1, "list-group"], ["class", "list-group-item ngbButton", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ngbButton"], ["type", "button", 1, "ngbButtonLabel", 3, "click"]], template: function SetContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetContextMenuComponent_li_2_Template, 3, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.x, ctx.y));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theMenuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".menu[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:auto;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:3px;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0LWNvbnRleHQtbWVudS9zZXQtY29udGV4dC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvc2V0LWNvbnRleHQtbWVudS9zZXQtY29udGV4dC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6YXV0bztcclxufVxyXG5kaXYge1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6M3B4O1xyXG59XHJcbmxpIHtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetContextMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set-context-menu',
                templateUrl: './set-context-menu.component.html',
                styleUrls: ['./set-context-menu.component.css']
            }]
    }], function () { return []; }, { x: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], y: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuitems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuItemSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/set.model.ts":
/*!******************************!*\
  !*** ./src/app/set.model.ts ***!
  \******************************/
/*! exports provided: Set, setRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRow", function() { return setRow; });
class Set {
}
class setRow {
}


/***/ }),

/***/ "./src/app/set/set.component.ts":
/*!**************************************!*\
  !*** ./src/app/set/set.component.ts ***!
  \**************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SetComponent {
    constructor() { }
    ngOnInit() {
    }
}
SetComponent.ɵfac = function SetComponent_Factory(t) { return new (t || SetComponent)(); };
SetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetComponent, selectors: [["app-set"]], decls: 2, vars: 0, template: function SetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "set works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: rgb(175, 238, 203);\r\n  border-style: dotted;\r\n  border-radius: 2px;\r\n  border-width: 1px;\r\n  color: green;\r\n  width: calc(100vw - 1463px);\r\n  height: calc(100vh - 3rem);\r\n  overflow:hidden;\r\n  margin: auto;\r\n  padding:3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0L3NldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZXQvc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjM4LCAyMDMpO1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNDYzcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzozcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set',
                templateUrl: './set.component.html',
                styleUrls: ['./set.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sets.service.ts":
/*!*********************************!*\
  !*** ./src/app/sets.service.ts ***!
  \*********************************/
/*! exports provided: SetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsService", function() { return SetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class SetsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sets = [];
        this.setsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getSets() {
        this.http
            .get('http://localhost:3000/api/sets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((setData) => {
            return setData.sets.map(set => {
                return {
                    SetName: set.SetName,
                    Seq: set.Seq,
                    Title: set.Title,
                    FirstLine: set.FirstLine,
                    Key: set.Key,
                    SongRef: set.SongRef,
                    Lyrics: set.Lyrics,
                    Style: set.Style,
                    id: set._id
                };
            });
        }))
            .subscribe(transformedSets => {
            this.sets = transformedSets;
            this.setsUpdated.next([...this.sets]);
        });
    }
    getSet(id) {
        return this.http
            .get('http://localhost:3000/api/sets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((setData) => {
            return setData.sets.map(set => {
                return {
                    SetName: set.SetName,
                    Seq: set.Seq,
                    Title: set.Title,
                    FirstLine: set.FirstLine,
                    Key: set.Key,
                    SongRef: set.SongRef,
                    Lyrics: set.Lyrics,
                    Style: set.Style,
                    id: set._id
                };
            });
        }))
            .subscribe(loadedSets => {
            this.sets = loadedSets;
            this.setsUpdated.next([...this.sets]);
        });
    }
    getSetUpdateListener() {
        return this.setsUpdated.asObservable();
    }
    addSet(id, setname, seq, title, firstline, key, songref, lyrics, style) {
        const set = {
            id: null,
            SetName: setname,
            SetRow: {
                Seq: seq,
                Title: title,
                FirstLine: firstline,
                Key: key,
                SongRef: songref,
                Lyrics: lyrics,
                Style: style
            }
        };
        this.http
            .post('http://localhost:3000/api/sets', set)
            .subscribe(responseData => {
            // tslint:disable-next-line: no-shadowed-variable
            const id = responseData.setId;
            set.id = id;
            this.sets.push(set);
            this.setsUpdated.next([...this.sets]);
        });
    }
    deleteSet(setId) {
        this.http.delete('http://localhost:3000/api/sets/' + setId)
            .subscribe(() => {
            console.log(setId);
            const updatedsets = this.sets.filter(post => post.id !== setId);
            this.sets = updatedsets;
            this.setsUpdated.next([...this.sets]);
        });
    }
}
SetsService.ɵfac = function SetsService_Factory(t) { return new (t || SetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SetsService, factory: SetsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/songs.service.ts":
/*!**********************************!*\
  !*** ./src/app/songs.service.ts ***!
  \**********************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class SongsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.songs = [];
        this.songsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getSongs(paceGrp, age, rating, find, sortField, sortDirection) {
        const queryParams = `?pace=${paceGrp}&age=${age}&rating=${rating}&find=${find}&sortField=${sortField}&sortDirection=${sortDirection}`;
        this.http
            .get('http://localhost:3000/api/songs' + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((songData) => {
            return songData.songs.map(song => {
                return {
                    SongRef: song.SongRef,
                    SongTitle: song.SongTitle,
                    FirstLine: song.FirstLine,
                    Lyrics: song.Lyrics,
                    Author: song.Author,
                    CCLI_Ref: song.CCLI_Ref,
                    Copyright: song.Copyright,
                    PaceGrp: song.PaceGrp,
                    Rating: song.Rating,
                    LastPlay: song.LastPlay,
                    MusicalKey: song.MusicalKey,
                    Tempo: song.Tempo,
                    id: song._id
                };
            });
        }))
            .subscribe(transformedSongs => {
            this.songs = transformedSongs;
            this.songsUpdated.next([...this.songs]);
        });
    }
    getSong(id) {
        return this.http
            .get('http://localhost:3000/api/songs')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((songData) => {
            return songData.songs.map(song => {
                return {
                    SongRef: song.SongRef,
                    SongTitle: song.SongTitle,
                    FirstLine: song.FirstLine,
                    Lyrics: song.Lyrics,
                    Author: song.Author,
                    CCLI_Ref: song.CCLI_Ref,
                    Copyright: song.Copyright,
                    PaceGrp: song.PaceGrp,
                    Rating: song.Rating,
                    LastPlay: song.LastPlay,
                    MusicalKey: song.MusicalKey,
                    Tempo: song.Tempo,
                    id: song._id
                };
            });
        }))
            .subscribe(loadedSongs => {
            this.songs = loadedSongs;
            this.songsUpdated.next([...this.songs]);
        });
    }
    getSongUpdateListener() {
        return this.songsUpdated.asObservable();
    }
    addSong(id, songref, songtitle, firstline, lyrics, author, ccliref, copyright, pacegrp, rating, lastplay, musicalkey, tempo) {
        const song = {
            id: null,
            SongRef: songref,
            SongTitle: songtitle,
            FirstLine: firstline,
            Lyrics: lyrics,
            Author: author,
            CCLI_Ref: ccliref,
            Copyright: copyright,
            PaceGrp: pacegrp,
            Rating: rating,
            LastPlay: lastplay,
            MusicalKey: musicalkey,
            Tempo: tempo
        };
        this.http
            .post('http://localhost:3000/api/songs', song)
            .subscribe(responseData => {
            // tslint:disable-next-line: no-shadowed-variable
            const id = responseData.songId;
            song.id = id;
            this.songs.push(song);
            this.songsUpdated.next([...this.songs]);
        });
    }
    deleteSong(songId) {
        this.http
            .delete('http://localhost:3000/api/songs/' + songId)
            .subscribe(() => {
            const updatedsongs = this.songs.filter(post => post.id !== songId);
            this.songs = updatedsongs;
            this.songsUpdated.next([...this.songs]);
        });
    }
}
SongsService.ɵfac = function SongsService_Factory(t) { return new (t || SongsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SongsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongsService, factory: SongsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mfarr\Documents\WebDev\enlightWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map