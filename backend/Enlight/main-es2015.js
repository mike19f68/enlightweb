(self["webpackChunkenlightweb"] = self["webpackChunkenlightweb"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4411:
/*!******************************************!*\
  !*** ./src/app/Shared/dialog.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": function() { return /* binding */ DialogService; }
/* harmony export */ });
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 2005);
/* harmony import */ var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-dialog/message-dialog.component */ 9953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);




class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(msg) {
        return this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '390px',
            panelClass: 'mdf-dialog-container',
            disableClose: true,
            data: {
                message: msg
            }
        });
    }
    openMessageDialog(msg, success) {
        return this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_1__.MessageDialogComponent, {
            width: '390px',
            panelClass: 'mdf-dialog-container',
            disableClose: true,
            data: {
                message: msg,
                success: success
            }
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
DialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5414:
/*!*****************************************!*\
  !*** ./src/app/Shared/songs.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongsService": function() { return /* binding */ SongsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





class SongsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.songs = [];
        this.songsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getSongs(paceGrp, age, rating, find, sortField, sortDirection) {
        const queryParams = `?pace=${paceGrp}&age=${age}&rating=${rating}&find=${find}&sortField=${sortField}&sortDirection=${sortDirection}`;
        this.http
            .get('http://localhost:3000/api/songs' + queryParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((songData) => {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((songData) => {
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
SongsService.ɵfac = function SongsService_Factory(t) { return new (t || SongsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SongsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SongsService, factory: SongsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3384:
/*!*****************************************!*\
  !*** ./src/app/Shared/songset.model.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalRow": function() { return /* binding */ LocalRow; },
/* harmony export */   "SongSet": function() { return /* binding */ SongSet; }
/* harmony export */ });
class LocalRow {
}
class SongSet {
}
// export interface SetRow {
//   SRType: string;
//   SRTitle: string;
//   SRFirstLine: string;
//   SRPaceGrp: number;
//   SRRef: number;
//   SRMusicalKey: string;
// }


/***/ }),

/***/ 665:
/*!********************************************!*\
  !*** ./src/app/Shared/songsets.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetsService": function() { return /* binding */ SetsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





class SetsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.songsets = [];
        this.setsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getSets(leader) {
        const queryParams = `?Leader=${leader}`;
        this.http
            .get('http://localhost:3000/api/songsets' + queryParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((setData) => {
            return setData.songsets.map(songset => {
                return {
                    id: songset._id,
                    Leader: songset.Leader,
                    SetDate: songset.SetDate,
                    SetRows: songset.JsonSetRows
                };
            });
        }))
            .subscribe(transformedSets => {
            this.songsets = transformedSets;
            this.setsUpdated.next([...this.songsets]);
        });
    }
    getSetUpdateListener() {
        return this.setsUpdated.asObservable();
    }
    addSet(id, leader, setDate, setrows) {
        const songset = {
            id: null,
            Leader: leader,
            SetDate: setDate,
            SetRows: setrows
        };
        this.http
            .post('http://localhost:3000/api/songsets', songset)
            .subscribe(responseData => {
            // tslint:disable-next-line: no-shadowed-variable
            const id = responseData.setId;
            songset.id = id;
            this.songsets.push(songset);
            this.setsUpdated.next([...this.songsets]);
        });
    }
    deleteSet(setId) {
        console.log('delete set Service: ' + setId);
        this.http.delete('http://localhost:3000/api/songsets/' + setId)
            .subscribe(() => {
            const updatedsets = this.songsets.filter(songset => songset.id !== setId);
            this.songsets = updatedsets;
            this.setsUpdated.next([...this.songsets]);
        });
    }
}
SetsService.ɵfac = function SetsService_Factory(t) { return new (t || SetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SetsService, factory: SetsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signup/signup.component */ 4309);
/* harmony import */ var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build-set/build-set.component */ 4823);
/* harmony import */ var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-song/edit-song.component */ 2195);
/* harmony import */ var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead-sheet/lead-sheet.component */ 3228);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    { path: 'Login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'Signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent },
    { path: 'BuildSet', component: _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__.BuildSetComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: 'EditSong', component: _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__.EditSongComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
    { path: 'LeadSheet', component: _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__.LeadSheetComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);



class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100%;}\r\nbody[_ngcontent-%COMP%]{height:100vh;}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: block;\r\n  height: 99vh;\r\n  background-color: #d7e7fa;\r\n  border-width:1px;\r\n  border-color: darkblue;\r\n  border-style: solid;\r\n  padding:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsZUFBZSxDQUFDO0FBQzNCLEtBQUssWUFBWSxDQUFDO0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7bWluLWhlaWdodDoxMDAlO31cclxuYm9keXtoZWlnaHQ6MTAwdmg7fVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDk5dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTdmYTtcclxuICBib3JkZXItd2lkdGg6MXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4iXX0= */"], data: { animation: [] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-sortablejs */ 9583);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-interceptor */ 762);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ 4309);
/* harmony import */ var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./build-set/build-set.component */ 4823);
/* harmony import */ var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-song/edit-song.component */ 2195);
/* harmony import */ var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lead-sheet/lead-sheet.component */ 3228);
/* harmony import */ var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-songs/scroll-songs.component */ 8743);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ 2005);
/* harmony import */ var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./set-context-menu/set-context-menu.component */ 5234);
/* harmony import */ var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message-dialog/message-dialog.component */ 9953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);





// Angular Material

// Shared components



// App Components













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS, useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            ngx_sortablejs__WEBPACK_IMPORTED_MODULE_20__.SortablejsModule.forRoot({ animation: 150 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent,
        _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_7__.BuildSetComponent,
        _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_8__.EditSongComponent,
        _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_9__.LeadSheetComponent,
        _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_10__.ScrollSongsComponent,
        _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_12__.SetContextMenuComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent,
        _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__.MessageDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, ngx_sortablejs__WEBPACK_IMPORTED_MODULE_20__.SortablejsModule] }); })();


/***/ }),

/***/ 762:
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": function() { return /* binding */ AuthInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    createUser(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post('http://localhost:3000/api/user/signup', authData)
            .subscribe(() => {
            this.router.navigate(['/BuildSet']);
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    login(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post('http://localhost:3000/api/user/login', authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId);
                this.router.navigate(['/BuildSet']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/Login']);
    }
    setAuthTimer(duration) {
        console.log('Setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 384);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);







function LoginComponent_form_2_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_form_2_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onLogin(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_form_2_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_form_2_mat_error_12_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_form_2_button_13_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "parent"], [1, "child"], [3, "submit", 4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["mat-card-image", "", "src", "..\\..\\..\\assets\\Images\\logo.png", "alt", "Enlight", 1, "logo"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-flat-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 14, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: [".parent[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.child[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  margin:10px;\r\n  width:100px;\r\n  margin:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoaWxkIHtcclxuICBtYXJnaW46NXB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIG1hcmdpbjoyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 384);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);







function SignupComponent_form_2_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_form_2_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_form_2_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignupComponent_form_2_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onSignup(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignupComponent_form_2_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignupComponent_form_2_mat_error_12_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignupComponent_form_2_button_13_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
} }
class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "parent"], [1, "child"], [3, "submit", 4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["mat-card-image", "", "src", "..\\..\\..\\assets\\Images\\logo.png", "alt", "Enlight", 1, "logo"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_form_2_Template, 14, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: [".parent[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.child[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  margin:10px;\r\n  width:100px;\r\n  margin:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2hpbGQge1xyXG4gIG1hcmdpbjo1cHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgbWFyZ2luOjIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4823:
/*!**************************************************!*\
  !*** ./src/app/build-set/build-set.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildSetComponent": function() { return /* binding */ BuildSetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-songs/scroll-songs.component */ 8743);



class BuildSetComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe();
    }
    receiveSong(song) {
        this.receivedC = song;
    }
}
BuildSetComponent.ɵfac = function BuildSetComponent_Factory(t) { return new (t || BuildSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
BuildSetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BuildSetComponent, selectors: [["app-build-set"]], inputs: { receivedC: "receivedC" }, decls: 2, vars: 0, consts: [[3, "SongToSend"]], template: function BuildSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-scroll-songs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("SongToSend", function BuildSetComponent_Template_app_scroll_songs_SongToSend_1_listener($event) { return ctx.receiveSong($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__.ScrollSongsComponent], styles: [".header[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: dimgray;\r\n  color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6ImJ1aWxkLXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 2005:
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": function() { return /* binding */ ConfirmDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);




class ConfirmDialogComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close(false);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 12, vars: 3, consts: [[1, "content-container", "bar"], ["id", "close-icon", 3, "click"], [1, "content-container"], [1, "content-span", "full-width"], [1, "text-center"], ["mat-flat-button", "", "id", "no-button", 3, "mat-dialog-close"], ["mat-flat-button", "", "id", "yes-button", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_mat_icon_click_2_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2195:
/*!**************************************************!*\
  !*** ./src/app/edit-song/edit-song.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSongComponent": function() { return /* binding */ EditSongComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Shared_songs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/songs.service */ 5414);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function EditSongComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditSongComponent_div_63_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseup", function EditSongComponent_div_63_tr_2_Template_tr_mouseup_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const song_r5 = restoredCtx.$implicit; const index_r6 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.selectSong(song_r5, index_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", index_r6 == ctx_r4.ActiveIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "song-", index_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r5.SongRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r5.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r5.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r5.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r5);
} }
function EditSongComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditSongComponent_div_63_tr_2_Template, 12, 8, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.songs);
} }
function EditSongComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Song Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "First Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Pace Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fast - Praise");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Slow - Worship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Christmas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Kids/School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Musical Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Bb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "C#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Eb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "F#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Ab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Copyright");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "CCLI Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "Input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Tempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "Input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Last Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "Input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.PaceGrp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Copyright);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.CCLI_Ref);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.song.Tempo);
} }
function EditSongComponent_div_77_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Song Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "First Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Pace Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fast - Praise");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Slow - Worship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Christmas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Kids/School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Musical Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Bb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "C#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Eb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "F#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Ab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Copyright");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "CCLI Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "Input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Tempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "Input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Last Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "Input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditSongComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditSongComponent_div_77_div_1_Template, 78, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditSongComponent_div_77_div_2_Template, 78, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hasData);
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
EditSongComponent.ɵfac = function EditSongComponent_Factory(t) { return new (t || EditSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_songs_service__WEBPACK_IMPORTED_MODULE_0__.SongsService)); };
EditSongComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditSongComponent, selectors: [["app-edit-song"]], decls: 78, vars: 8, consts: [[1, "editsong"], [1, "tableSection", "col-md-6"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "drop-filter", "d-inline-block", "btn-group", 3, "change"], ["id", "PaceGrp", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "btn", "btn-add", "btn-primary"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], ["class", "waiting", 4, "ngIf"], [4, "ngIf"], [1, "songpage", 3, "submit"], ["songForm", "ngForm"], [1, "buttons"], ["for", "SongRef", 1, "mb-6"], ["id", "SongRef", "type", "int", "placeholder", "0", "name", "SongRef", "ngModel", "", 1, "form-control", "mb-6", "btn", "songref", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "mb-6"], ["type", "Delete", 1, "btn", "btn-primary", "mb-6", 3, "click"], ["type", "cancel", 1, "btn", "btn-primary", "mb-6"], [1, "form-row"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "picker", 3, "id", "active", "mouseup", 4, "ngFor", "ngForOf"], [1, "picker", 3, "id", "mouseup"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_key"], [2, "display", "none"], ["song", ""], [1, "form-group", "col-md-12"], ["for", "SongTitle"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control", 3, "value"], ["for", "FirstLine"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Lyrics"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Author"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Rating"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Pace/Group"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control", 3, "value"], ["for", "MusicalKey"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Copyright"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control", 3, "value"], ["for", "CCLI_Ref"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Tempo"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control", 3, "value"], ["for", "LastPlay"], ["id", "LastPlay", "type", "text", "placeholder", "---", "name", "LastPlay", "ngModel", "", 1, "form-control"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control"]], template: function EditSongComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add/Edit Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchString = $event; })("change", function EditSongComponent_Template_input_change_7_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_9_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_10_listener($event) { return ctx.selectedGroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Christmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_25_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_26_listener($event) { return ctx.selectedAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "2 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "3 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_35_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_36_listener($event) { return ctx.selectedRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Rating 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Rating 4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Rating 3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Rating 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "All Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_47_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "+New Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_53_listener() { return ctx.changeSort("SongRef"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_55_listener() { return ctx.changeSort("SongTitle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_57_listener() { return ctx.changeSort("FirstLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "First Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_59_listener() { return ctx.changeSort("MusicalKey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, EditSongComponent_div_62_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, EditSongComponent_div_63_Template, 3, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "form", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditSongComponent_Template_form_submit_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65); return ctx.onAddSong(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Song Ref:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_button_click_72_listener() { return ctx.deleteSong(ctx.song, ctx.ActiveIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, EditSongComponent_div_77_Template, 4, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.song.SongRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: lightgrey;\r\n  overflow-y: hidden;\r\n  margin: auto;\r\n  padding-left:5px;\r\n  align-items: center;\r\n\r\n}\r\n.editsong[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 6rem);\r\n  width: calc(100vw - 65px);\r\n}\r\n.songpage[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  margin:3px;\r\n  height:100%;\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  margin:3px;\r\n}\r\n.component[_ngcontent-%COMP%] {\r\n  display:block;\r\n  width:100%;\r\n  overflow-y:scroll;\r\n  margin:0;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: right;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n}\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 650px;\r\n  min-width: 650px;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x:hidden;\r\n  padding:0px;\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:630px;\r\n  float: left;\r\n}\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n\r\n}\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:0;\r\n  font-size:small;\r\n  margin-right:5px;\r\n}\r\n.btn-add[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  align-self: right;\r\n  margin:0px;\r\n  margin-left:5px;\r\n  padding-top:1px;\r\n  padding-bottom:1px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 630px;\r\n  margin:0px;\r\n  padding:1px;\r\n  table-layout: fixed;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-size:12px;\r\n  padding-left:3px;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\ntr.picker[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffff99;\r\n  cursor: pointer;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#3871aa !important;\r\n  color: white;\r\n}\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:50px;\r\n}\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  font-size:small;\r\n  width:50px;\r\n}\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_Title[_ngcontent-%COMP%] {\r\n  min-width:260px;\r\n  width:260px;\r\n  max-width: 260px;\r\n}\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_FirstLine[_ngcontent-%COMP%]\r\n{\r\n  min-width:280px;\r\n  width:280px;\r\n  max-width: 280px;\r\n}\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:45px;\r\n}\r\n.col_Key[_ngcontent-%COMP%]\r\n{\r\n  width:45px;\r\n}\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline overline;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n  cursor: pointer;\r\n}\r\n.songref[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n  text-align: left;\r\n  width:80px;\r\n  padding:3px;\r\n  margin:10px !important;\r\n\r\n}\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n  display:block;\r\n}\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n\r\n}\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  margin:auto;\r\n  padding-right:10px;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-width:0.5px;\r\n  outline-style: solid;\r\n  outline-color: lightslategray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsUUFBUTtBQUNWO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJlZGl0LXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5lZGl0c29uZyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NXB4KTtcclxufVxyXG4uc29uZ3BhZ2Uge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW46M3B4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5mb3JtLXJvdyB7XHJcbiAgbWFyZ2luOjNweDtcclxufVxyXG4uY29tcG9uZW50IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG4ge1xyXG4gIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi50YWJsZVNlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6IDY1MHB4O1xyXG4gIG1pbi13aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcGFkZGluZzowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDE3MiwgMjEyKTtcclxuICB3aWR0aDo2MzBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLndhaXRpbmcge1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hpbnB1dCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5kcm9wLWZpbHRlciB7XHJcbiAgaGVpZ2h0OjI4cHg7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbi5idG4tYWRkIHtcclxuICBoZWlnaHQ6MjhweDtcclxuICBhbGlnbi1zZWxmOiByaWdodDtcclxuICBtYXJnaW46MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuICBwYWRkaW5nLXRvcDoxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDYzMHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzoxcHg7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOi41cHg7XHJcbn1cclxudHIucGlja2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODcxYWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uaGRyX1JlZiB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcbi5jb2xfUmVme1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcblxyXG4uaGRyX1RpdGxlIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBtaW4td2lkdGg6MjYwcHg7XHJcbiAgd2lkdGg6MjYwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuXHJcbi5oZHJfRmlyc3RMaW5lIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX0ZpcnN0TGluZVxyXG57XHJcbiAgbWluLXdpZHRoOjI4MHB4O1xyXG4gIHdpZHRoOjI4MHB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5oZHJfS2V5IHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQ1cHg7XHJcbn1cclxuXHJcbi5jb2xfS2V5XHJcbntcclxuICB3aWR0aDo0NXB4O1xyXG59XHJcblxyXG4uc29ydGFibGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNvbmdyZWYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDo4MHB4O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbjoxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5seXJpY3Mge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maXJzdGxpbmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5zZXRIZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbm5neC1zb3J0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnNldFNlcSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5TZXFUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBzdHJvbmc7XHJcbn1cclxuLnNlcUZpcnN0TGluZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG5cclxufVxyXG4uc2V0S2V5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uY2xpcHBlZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBmb250LXNpemU6MTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgb3V0bGluZS13aWR0aDowLjVweDtcclxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcclxuICBvdXRsaW5lLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Build Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit/Add Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lead Sheets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.title = 'enlightWeb';
        this.icon = '../../assets/Images/logo.png';
        this.storedSongs = [];
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            console.log(isAuthenticated);
        });
    }
    onLogout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 6, consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], ["src", "../../assets/Images/logo.png", "alt", "Enlight", "height", "40px", 2, "margin-left", "10px"], [4, "ngIf"], [1, "body"], ["routerLink", "/BuildSet", 1, "nav-item", "nav-link"], ["routerLink", "/EditSong", 1, "nav-item", "nav-link"], ["routerLink", "/LeadSheet", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/Login", 1, "nav-item", "nav-link"], ["routerLink", "/Signup", 1, "nav-item", "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100%;}\r\nbody[_ngcontent-%COMP%]{height:100vh;}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: block;\r\n  height: 99vh;\r\n  background-color: #d7e7fa;\r\n  border-width:1px;\r\n  border-color: darkblue;\r\n  border-style: solid;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsZUFBZSxDQUFDO0FBQzNCLEtBQUssWUFBWSxDQUFDO0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXttaW4taGVpZ2h0OjEwMCU7fVxyXG5ib2R5e2hlaWdodDoxMDB2aDt9XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogOTl2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlN2ZhO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 3228:
/*!****************************************************!*\
  !*** ./src/app/lead-sheet/lead-sheet.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadSheetComponent": function() { return /* binding */ LeadSheetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LeadSheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeadSheetComponent.ɵfac = function LeadSheetComponent_Factory(t) { return new (t || LeadSheetComponent)(); };
LeadSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadSheetComponent, selectors: [["app-lead-sheet"]], decls: 2, vars: 0, template: function LeadSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lead-sheet works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);










class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule] }); })();


/***/ }),

/***/ 9953:
/*!************************************************************!*\
  !*** ./src/app/message-dialog/message-dialog.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageDialogComponent": function() { return /* binding */ MessageDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





function MessageDialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MessageDialogComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
MessageDialogComponent.ɵfac = function MessageDialogComponent_Factory(t) { return new (t || MessageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
MessageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageDialogComponent, selectors: [["app-confirm-dialog"]], decls: 13, vars: 3, consts: [[1, "content-container", "bar"], ["id", "close-icon", 3, "click"], [1, "content-container", "align-middle"], [1, "content-span", "d-flex", "align-items-center"], ["class", "success-true", 4, "ngIf"], ["class", "success-false", 4, "ngIf"], [1, "text-center"], ["mat-flat-button", "", "id", "ok-button", 3, "mat-dialog-close"], [1, "success-true"], ["id", "ok", 1, "icon-bg"], [1, "success-false"], ["id", "error", 1, "icon-bg"]], template: function MessageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageDialogComponent_Template_mat_icon_click_2_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MessageDialogComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageDialogComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8743:
/*!********************************************************!*\
  !*** ./src/app/scroll-songs/scroll-songs.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSongsComponent": function() { return /* binding */ ScrollSongsComponent; }
/* harmony export */ });
/* harmony import */ var _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/songset.model */ 3384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Shared_songs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/songs.service */ 5414);
/* harmony import */ var _Shared_songsets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/songsets.service */ 665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _Shared_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/dialog.service */ 4411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-sortablejs */ 9583);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-context-menu/set-context-menu.component */ 5234);














function ScrollSongsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.song.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.song.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.song.Lyrics);
} }
function ScrollSongsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_div_62_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseup", function ScrollSongsComponent_div_62_div_2_Template_div_mouseup_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const song_r11 = restoredCtx.$implicit; const index_r12 = restoredCtx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.showLyrics(song_r11, index_r12); })("dblclick", function ScrollSongsComponent_div_62_div_2_Template_div_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const song_r11 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.addtoSet(song_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_div_62_div_2_Template_img_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const song_r11 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.addtoSet(song_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("picker _", song_r11.PaceGrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", index_r12 == ctx_r10.ActiveIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "song-", index_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](song_r11.SongRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](song_r11.SongTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](song_r11.FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](song_r11.MusicalKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](song_r11);
} }
function ScrollSongsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ScrollSongsComponent_div_62_div_2_Template, 14, 11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.songs);
} }
function ScrollSongsComponent_div_92_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_div_92_div_19_Template_div_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const set_r19 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r21.LoadSet(set_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_div_92_div_19_Template_div_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const set_r19 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.checkDelete(set_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "[X]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", set_r19.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("::: ", set_r19.Leader, " - ", set_r19.SetDate, "");
} }
function ScrollSongsComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-radio-group", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_div_92_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.selectedLead = $event; })("change", function ScrollSongsComponent_div_92_Template_mat_radio_group_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.LeaderChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mike");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Ian");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Jill");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Terry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ScrollSongsComponent_div_92_div_19_Template, 8, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.selectedLead);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.songsets);
} }
function ScrollSongsComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("contextmenu", function ScrollSongsComponent_div_94_Template_div_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const index_r28 = restoredCtx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.rightClick($event, index_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_div_94_Template_div_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const index_r28 = restoredCtx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.deleterow(index_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rows_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("setitem _", rows_r27.SR_PaceGrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", rows_r27.SR_Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rows_r27.SR_Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", rows_r27.SR_Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rows_r27.SR_FirstLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rows_r27.SR_MusicalKey);
} }
function ScrollSongsComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Set Not Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ScrollSongsComponent_app_set_context_menu_96_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-set-context-menu", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("menuItemSelected", function ScrollSongsComponent_app_set_context_menu_96_Template_app_set_context_menu_menuItemSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.handleMenuSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("x", ctx_r9.xPosTabMenu)("y", ctx_r9.yPosTabMenu)("menuitems", ctx_r9.showMenuOptions())("index", ctx_r9.indexTabMenu);
} }
const _c0 = function () { return { animation: 150 }; };
class ScrollSongsComponent {
    constructor(songsService, setsService, datepipe, dialogservice) {
        this.songsService = songsService;
        this.setsService = setsService;
        this.datepipe = datepipe;
        this.dialogservice = dialogservice;
        this.hasData = false;
        this.setStarted = false;
        this.currentId = '';
        this.LocalRows = [];
        this.isLoading = false;
        this.chooseSet = false;
        this.ActiveIndex = 0;
        this.searchString = '';
        this.selectedGroup = '0';
        this.selectedAge = '1';
        this.selectedLead = 'Mike';
        this.selectedRating = '2';
        this.sortField = 'SongRef';
        this.sortDirection = -1;
        this.leader = 'Mike';
        this.amSongs = 0;
        this.pmSongs = 0;
        this.eXtras = 0;
        this.duplicates = 0;
        this.hasDuplicates = '';
        this.isHidden = true;
        this.xPosTabMenu = 0;
        this.yPosTabMenu = 0;
        this.indexTabMenu = 0;
        this.dialogTitle = '';
        this.dialogMsg = '';
        this.setDate = {};
        this.Leaders = ['Mike', 'Ian', 'Jill', 'Terry'];
        this.displayStyle = 'none';
    }
    ngOnInit() {
        const currentDt = new Date();
        const month = currentDt.getMonth() + 1;
        const day = currentDt.getDate();
        const year = currentDt.getFullYear();
        this.setDate = { year, month, day };
        this.stringDate = this.transformDate(this.setDate);
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
        const newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        newRow.SR_Type = 'S';
        newRow.SR_MusicalKey = song.MusicalKey;
        newRow.SR_FirstLine = song.FirstLine;
        newRow.SR_Ref = song.SongRef;
        newRow.SR_Title = song.SongTitle;
        newRow.SR_PaceGrp = song.PaceGrp;
        this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        this.setStarted = true;
        this.buildFooter();
    }
    onDateSelected() {
        this.stringDate = this.transformDate(this.setDate);
        const max = this.LocalRows.length;
        for (let i = 0; i < max; i++) {
            if (this.LocalRows[i].SR_Type === 'A') {
                this.LocalRows[i].SR_Title = this.stringDate + ' am';
            }
            if (this.LocalRows[i].SR_Type === 'B') {
                this.LocalRows[i].SR_Title = this.stringDate + ' pm';
            }
        }
    }
    loadTemplate() {
        let newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        newRow.SR_Title = this.transformDate(this.setDate) + ' am';
        newRow.SR_Type = 'A';
        this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        newRow.SR_Type = 'L';
        this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        newRow.SR_Type = 'L';
        this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        newRow.SR_Type = 'L';
        this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        this.setStarted = true;
    }
    clearSet() {
        this.LocalRows.length = 0;
        this.setStarted = false;
        this.currentId = '';
        this.buildFooter();
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
        let newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
        if (menuselection === 'Delete') {
            this.LocalRows.splice(this.indexTabMenu, 1);
            if (this.LocalRows.length === 0) {
                this.setStarted = false;
            }
            this.buildFooter();
        }
        else if (menuselection === 'Standard Song') {
            this.LocalRows[this.indexTabMenu].SR_Type = 'S';
        }
        else if (menuselection === 'Pre Song') {
            this.LocalRows[this.indexTabMenu].SR_Type = 'P';
        }
        else if (menuselection === 'Extra Song') {
            this.LocalRows[this.indexTabMenu].SR_Type = 'X';
        }
        else if (menuselection === 'Spacer') {
            newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
            newRow.SR_Type = 'L';
            this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        }
        else if (menuselection === 'AM Title') {
            newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
            newRow.SR_Title = this.transformDate(this.setDate) + ' am';
            newRow.SR_Type = 'A';
            this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        }
        else if (menuselection === 'PM Title') {
            newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
            newRow.SR_Title = this.transformDate(this.setDate) + ' pm';
            newRow.SR_Type = 'B';
            this.LocalRows.splice(this.LocalRows.length, 0, newRow);
        }
    }
    deleterow(index) {
        this.LocalRows.splice(index, 1);
        if (this.LocalRows.length === 0) {
            this.setStarted = false;
        }
        this.buildFooter();
    }
    transformDate(date) {
        const ngbDate = date;
        const myDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return this.datepipe.transform(myDate, 'dd MMM yyyy');
    }
    untransformDate(date) {
        const [day, mmm, year] = date.split(' ');
        const month = 'JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(mmm) / 3 + 1;
        const myDate = { year: +year, month: +month, day: +day };
        console.log(myDate);
        return myDate;
    }
    toggleSets() {
        if (this.chooseSet === false) {
            this.chooseSet = true;
            this.selectedLead = 'Mike';
            this.getSets();
        }
        else {
            this.chooseSet = false;
        }
    }
    LeaderChanged(event) {
        this.selectedLead = event.target.value;
        this.getSets();
    }
    getSets() {
        this.setsService.getSets(this.selectedLead);
        this.setsSub = this.setsService.getSetUpdateListener()
            .subscribe((songsets) => {
            this.songsets = songsets;
        });
    }
    LoadSet(loadset) {
        this.currentId = loadset.id;
        this.LocalRows.length = 0;
        const max = loadset.SetRows.length;
        for (let i = 0; i < max; i++) {
            const newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
            newRow.SR_Type = loadset.SetRows[i].SR_Type;
            newRow.SR_MusicalKey = loadset.SetRows[i].SR_MusicalKey;
            newRow.SR_FirstLine = loadset.SetRows[i].SR_FirstLine;
            newRow.SR_Ref = loadset.SetRows[i].SR_Ref;
            newRow.SR_Title = loadset.SetRows[i].SR_Title;
            newRow.SR_PaceGrp = loadset.SetRows[i].SR_PaceGrp;
            this.LocalRows.splice(this.LocalRows.length, 0, newRow);
            this.setStarted = true;
        }
        this.setDate = this.untransformDate(loadset.SetDate);
        this.stringDate = loadset.SetDate;
        this.chooseSet = false;
        this.buildFooter();
    }
    buildFooter() {
        let am = false;
        this.amSongs = 0;
        let pm = false;
        this.pmSongs = 0;
        this.eXtras = 0;
        const max = this.LocalRows.length;
        for (let i = 0; i < max; i++) {
            switch (this.LocalRows[i].SR_Type) {
                case 'A':
                    am = true;
                    pm = false;
                    break;
                case 'B':
                    pm = true;
                    am = false;
                    break;
                case 'S':
                case 'P':
                    if (pm === true) {
                        this.pmSongs++;
                    }
                    else {
                        this.amSongs++;
                    }
                    break;
                case 'X':
                    this.eXtras++;
                    break;
            }
        }
        this.toFindDuplicates();
    }
    toFindDuplicates() {
        this.duplicates = 0;
        this.hasDuplicates = '';
        const arr = [];
        const max = this.LocalRows.length;
        for (let i = 0; i < max; i++) {
            if (this.LocalRows[i].SR_Type === 'S' || this.LocalRows[i].SR_Type === 'P' || this.LocalRows[i].SR_Type === 'X') {
                if (arr.includes(this.LocalRows[i].SR_Ref, 0)) {
                    console.log(arr);
                    this.duplicates++;
                    this.hasDuplicates = 'hasDuplicates';
                }
                else {
                    arr.push(this.LocalRows[i].SR_Ref);
                }
            }
        }
    }
    saveSet() {
        const songset = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.SongSet();
        songset.Leader = 'Mike';
        songset.SetDate = this.transformDate(this.setDate);
        songset.SetRows = [];
        const max = this.LocalRows.length;
        if (max === 0) {
            this.dialogservice.openMessageDialog('Nothing to save', false);
        }
        else {
            for (let i = 0; i < max; i++) {
                let newRow = new _Shared_songset_model__WEBPACK_IMPORTED_MODULE_0__.LocalRow();
                newRow = this.LocalRows[i];
                songset.SetRows.push(this.LocalRows[i]);
            }
            if (this.currentId === '') {
                this.setsService.addSet(null, songset.Leader, songset.SetDate, songset.SetRows);
                this.dialogservice.openMessageDialog('Set Saved succesfully', true);
            }
            else {
                this.dialogservice.openConfirmDialog('Overwrite Existing Set?')
                    .afterClosed().subscribe(res => {
                    if (res === true) {
                        this.setsService.deleteSet(this.currentId);
                        this.setsService.addSet(null, songset.Leader, songset.SetDate, songset.SetRows);
                        this.dialogservice.openMessageDialog('Set Saved succesfully', true);
                    }
                });
            }
        }
    }
    checkDelete(songset) {
        this.dialogservice.openConfirmDialog('Delete Set: ' + songset.Leader + ' - ' + songset.SetDate + ' ?')
            .afterClosed().subscribe(res => {
            if (res === true) {
                this.setsService.deleteSet(songset.id);
                this.dialogservice.openMessageDialog('Set deleted succesfully', true);
            }
        });
    }
    deleteSet(songset) {
        console.log('songset: ' + JSON.stringify(songset));
        this.setsService.deleteSet(songset.id);
    }
    ngOnDestroy() {
        this.songsSub.unsubscribe();
        this.setsSub.unsubscribe();
    }
}
ScrollSongsComponent.ɵfac = function ScrollSongsComponent_Factory(t) { return new (t || ScrollSongsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Shared_songs_service__WEBPACK_IMPORTED_MODULE_1__.SongsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Shared_songsets_service__WEBPACK_IMPORTED_MODULE_2__.SetsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Shared_dialog_service__WEBPACK_IMPORTED_MODULE_3__.DialogService)); };
ScrollSongsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ScrollSongsComponent, selectors: [["app-scroll-songs"]], decls: 100, vars: 26, consts: [[1, "component"], [1, "lyricsSection"], [1, "form-group"], [4, "ngIf"], [1, "tableSection"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "btn-group", "d-inline-block", 3, "change"], ["id", "PaceGrp", 1, "d-inline-block", "form-control", "form-select", "drop-filter", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "d-inline-block", "form-control", "form-select", "drop-filter", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "table_content"], [1, "picker"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], [1, "hdr_Add"], ["class", "waiting", 4, "ngIf"], [1, "setSection", 3, "click"], [1, "setHeader", "sticky-top", "container-fluid", "d-inline-block"], [1, "setdatetitle", "btn-group"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["placeholder", "..set date..", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange", "dateSelect"], ["dp", "ngbDatepicker"], ["type", "button", 1, "btnIcon", "calendar", 3, "click"], ["width", "28px", "title", "Pick Date", "src", "..\\..\\assets\\Images\\cal.png"], ["type", "button", 1, "btnIcon"], ["width", "28px", "title", "Load Template", "src", "..\\..\\assets\\Images\\add_template.png", 3, "click"], ["width", "28px", "title", "Clear Set", "src", "..\\..\\assets\\Images\\erase_document.png", 3, "click"], ["width", "28px", "title", "Load Set", "src", "..\\..\\assets\\Images\\load_document.png", 3, "click"], ["width", "28px", "title", "Save Set", "src", "..\\..\\assets\\Images\\save_document.png", 3, "click"], ["width", "28px", "title", "Export to Word", "src", "..\\..\\assets\\Images\\Export_document.png"], ["class", "getSetContainer", 4, "ngIf"], [3, "sortablejs", "sortablejsOptions"], [3, "class", "id", "contextmenu", 4, "ngFor", "ngForOf"], ["class", "setitem emptyset", 4, "ngIf"], [3, "x", "y", "menuitems", "index", "menuItemSelected", 4, "ngIf"], [1, "setFooter"], [1, "title", "clipped"], [1, "firstline", "clipped"], [1, "lyrics"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [3, "class", "id", "active", "mouseup", "dblclick", 4, "ngFor", "ngForOf"], [3, "id", "mouseup", "dblclick"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_Key"], [1, "col_Add"], ["src", "../../assets/Images/ToList.png", "alt", "+", "width", "12", "height", "12", 3, "click"], [2, "display", "none"], ["song", ""], [1, "getSetContainer"], [1, "leadFilter", 3, "ngModel", "ngModelChange", "change"], [1, "radiobtn"], ["id", "rb1", "type", "radio", "name", "leader", "value", "Mike", "checked", "true"], ["for", "rb1", 1, "radiobtn"], ["id", "rb2", "type", "radio", "name", "leader", "value", "Ian"], ["for", "rb2", 1, "radiobtn"], ["id", "rb3", "type", "radio", "name", "leader", "value", "Jill"], ["for", "rb3", 1, "radiobtn"], ["id", "rb4", "type", "radio", "name", "leader", "value", "Terry"], ["for", "rb4", 1, "radiobtn"], [1, "listSection"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "d-flex", "align-items-center"], [1, "listselection-content", 3, "click"], [1, "listselection-delete", "align-center", 3, "click"], [3, "id", "contextmenu"], [1, "rowseq"], [1, "rowtitle", "clipped"], [1, "rowfirstline", "clipped"], [1, "rowkey"], [1, "del-x", 3, "click"], [1, "setitem", "emptyset"], [3, "x", "y", "menuitems", "index", "menuItemSelected"]], template: function ScrollSongsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ScrollSongsComponent_div_3_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ScrollSongsComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchString = $event; })("change", function ScrollSongsComponent_Template_input_change_8_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_10_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedGroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Christmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_26_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_27_listener($event) { return ctx.selectedAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "2 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "3 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_36_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_37_listener($event) { return ctx.selectedRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Rating 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Rating 4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Rating 3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Rating 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "All Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_50_listener() { return ctx.changeSort("SongRef"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_52_listener() { return ctx.changeSort("SongTitle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_54_listener() { return ctx.changeSort("FirstLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "First Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_56_listener() { return ctx.changeSort("MusicalKey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " +");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ScrollSongsComponent_div_61_Template, 3, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, ScrollSongsComponent_div_62_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_64_listener() { return ctx.closeRightClickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Set Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "mat-datepicker-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "mat-datepicker", null, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_78_listener($event) { return ctx.setDate = $event; })("dateSelect", function ScrollSongsComponent_Template_input_dateSelect_78_listener() { return ctx.onDateSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](79); return _r5.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_83_listener() { return ctx.loadTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_85_listener() { return ctx.clearSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_87_listener() { return ctx.toggleSets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_89_listener() { return ctx.saveSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, ScrollSongsComponent_div_92_Template, 20, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, ScrollSongsComponent_div_94_Template, 11, 8, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, ScrollSongsComponent_div_95_Template, 2, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, ScrollSongsComponent_app_set_context_menu_96_Template, 1, 4, "app-set-context-menu", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hasData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.stringDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.setDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortablejs", ctx.LocalRows)("sortablejsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.LocalRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.setStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("status_content ", ctx.hasDuplicates, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"]("AM Songs ", ctx.amSongs, "; PM Songs ", ctx.pmSongs, "; Extras ", ctx.eXtras, "; Duplicates ", ctx.duplicates, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbInputDatepicker, ngx_sortablejs__WEBPACK_IMPORTED_MODULE_12__.SortablejsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioGroup, _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_4__.SetContextMenuComponent], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: auto;\r\n  padding:0;\r\n\r\n  height: calc(100vh - 3rem);\r\n  width: calc(100vw - 30px);\r\n}\r\n\r\n.component[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  width:100%;\r\n  overflow:hidden;\r\n}\r\n\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 630px;\r\n  min-width: 630px;\r\n  height: calc(100vh - 4rem);\r\n  overflow-y: scroll;\r\n  font-size: 12px;\r\n  display:block;\r\n}\r\n\r\n.lyricsSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  display:block;\r\n  height: calc(100vh - 4rem);\r\n  line-height: 14px;\r\n  width:250px;\r\n  min-width: 250px;\r\n  background-color: white;\r\n  color: black;\r\n  font-size:12px;\r\n  font-family: Arial, Helvetica, sans-serif, Geneva, Tahoma, sans-serif;\r\n  text-align: center;\r\n  padding:2px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:100%;\r\n  float: left;\r\n}\r\n\r\n@media only screen and (max-width: 1420px) {\r\n  .lyricsSection[_ngcontent-%COMP%] {\r\n    width:0px;\r\n    min-width: 0px;\r\n    visibility: collapse;\r\n  }\r\n  .tableSection[_ngcontent-%COMP%] {\r\n    width: 530px;\r\n    min-width: 530px;\r\n  }\r\n  .filter[_ngcontent-%COMP%] {\r\n    width:530px;\r\n  }\r\n}\r\n\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n}\r\n\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:3px;\r\n  padding-right:30px !important;\r\n  font-size:small;\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%] {\r\n margin-right: 5px;\r\n}\r\n\r\n.table_content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding:1px;\r\n}\r\n\r\n.picker[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\n\r\n.picker[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99 !important;\r\n  color: black !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:6%;\r\n  padding-left:2px;\r\n  padding-top:3px;\r\n  padding-bottom:3px;\r\n}\r\n\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  display:inline-flex;\r\n  font-size:small;\r\n  width:6%;\r\n}\r\n\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:40%;\r\n  padding-top:3px;\r\n  padding-bottom:3px;\r\n}\r\n\r\n.col_Title[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  width:40%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:46%;\r\n  padding-top:3px;\r\n  padding-bottom:3px;\r\n}\r\n\r\n.col_FirstLine[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  width:46%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:4%;\r\n  padding-top:3px;\r\n  padding-bottom:3px;\r\n}\r\n\r\n.col_Key[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  width:4%;\r\n}\r\n\r\n.hdr_Add[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:4%;\r\n  padding-left:3px;\r\n  padding-top:3px;\r\n  padding-bottom:3px;\r\n}\r\n\r\n.col_Add[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  padding-left:5px;\r\n  width:4%;\r\n}\r\n\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(71, 119, 119);\r\n}\r\n\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n\r\n.setSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width:100%;\r\n  min-width:500px;\r\n  height: calc(100vh - 3rem);\r\n  background-color: lightsteelblue;\r\n  font-size: 12px;\r\n  padding:2px;\r\n  margin:0;\r\n  display:block;\r\n}\r\n\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n}\r\n\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n\r\n.setList[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n}\r\n\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n\r\n.setitem[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n  cursor: move;\r\n  padding-left: 3px;\r\n}\r\n\r\n.setitem[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99;\r\n}\r\n\r\n.emptyset[_ngcontent-%COMP%] {\r\n  background-color: rgb(177, 177, 177) !important;\r\n}\r\n\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-color: lightslategray;\r\n}\r\n\r\n#L[_ngcontent-%COMP%] {\r\n  height:10px;\r\n  background-color: lightslategray;\r\n}\r\n\r\n#L[_ngcontent-%COMP%]   .rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:0;\r\n  visibility: collapse;\r\n}\r\n\r\n#N[_ngcontent-%COMP%] {\r\n  background-color: sienna;\r\n  color:white;\r\n}\r\n\r\n#A[_ngcontent-%COMP%] {\r\n  background-color:lightsalmon;\r\n}\r\n\r\n#A[_ngcontent-%COMP%]   .rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:0;\r\n  visibility: collapse;\r\n}\r\n\r\n#B[_ngcontent-%COMP%] {\r\n  background-color: navy;\r\n  color: white;\r\n}\r\n\r\n#B[_ngcontent-%COMP%]   .rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:0;\r\n  visibility: collapse;\r\n}\r\n\r\n#X[_ngcontent-%COMP%] {\r\n  font-style:italic;\r\n  background-color: lightgray;\r\n  color:black !important;\r\n}\r\n\r\n#P[_ngcontent-%COMP%] {\r\n  background-color: cornflowerblue;\r\n  color:black !important;\r\n}\r\n\r\n#N[_ngcontent-%COMP%]:hover, #B[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99 !important;\r\n  color:black;\r\n}\r\n\r\n#P[_ngcontent-%COMP%]:hover, #X[_ngcontent-%COMP%]:hover, #A[_ngcontent-%COMP%]:hover, #L[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99 !important;\r\n}\r\n\r\n.rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n}\r\n\r\n.rowtitle[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  margin-left: 3px;\r\n  margin-right: 10px;\r\n  width:40%;\r\n  min-width:40%;\r\n}\r\n\r\n.rowfirstline[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  margin-left: 3px;\r\n  margin-right: 10px;\r\n  width:46%;\r\n}\r\n\r\n.rowkey[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  width:3%;\r\n}\r\n\r\n.btnIcon[_ngcontent-%COMP%] {\r\n  width:45px;\r\n  margin-left:2px;\r\n  outline: none;\r\n  box-shadow: none;\r\n  border:none;\r\n  background-color: transparent;\r\n}\r\n\r\n.btnIcon[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(224, 224, 224);\r\n}\r\n\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n\r\n.getSetContainer[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  transition: height 1.25s ease-in;\r\n  height:10rem;\r\n  display:inline-flex;\r\n  background-color: white;\r\n}\r\n\r\n.leadFilter[_ngcontent-%COMP%] {\r\n  font-size: smaller;\r\n  width:200px;\r\n  background-color: aliceblue;\r\n  padding: 3px;\r\n}\r\n\r\n.listSection[_ngcontent-%COMP%] {\r\n  border-left: 1px solid black;\r\n  padding:3px 5px 1px 5px;\r\n  background-color: aliceblue;\r\n  width:100%;\r\n  overflow-y: scroll;\r\n  -moz-columns: 3;\r\n       columns: 3;\r\n  -moz-column-fill: auto;\r\n       column-fill: auto;\r\n}\r\n\r\n.listSection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-style:solid;\r\n  border-width: 1px;\r\n  border-radius: 3px;\r\n  border-color: black;\r\n  margin: 3px;\r\n  padding: 1px 3px 1px 3px;\r\n  background-color: rgb(167, 190, 211);\r\n  overflow: hidden;\r\n  width:100%;\r\n}\r\n\r\n.listselection-content[_ngcontent-%COMP%] {\r\n  width:95%;\r\n}\r\n\r\n.listselection-content[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99;\r\n}\r\n\r\n.listselection-delete[_ngcontent-%COMP%] {\r\n  width:5%;\r\n}\r\n\r\n.listselection-delete[_ngcontent-%COMP%]:hover {\r\n  background-color: red;\r\n  cursor:pointer;\r\n}\r\n\r\n.del-x[_ngcontent-%COMP%] {\r\n  float:right;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  height: inherit;\r\n  z-index: -1;\r\n}\r\n\r\n.del-x[_ngcontent-%COMP%]:hover {\r\n  background-color: red;\r\n  cursor:pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#7596d4 !important;\r\n  color: white !important;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]\r\n{\r\n  visibility: hidden;\r\n}\r\n\r\ninput[type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\r\n  margin:3px;\r\n  background-color: #7596d4;\r\n}\r\n\r\n.radiobtn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  background-color: white;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 3px;\r\n  margin:3px;\r\n}\r\n\r\n.radiobtn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  background-color:#ffff99 !important;\r\n  cursor: pointer;\r\n}\r\n\r\ntr._1[_ngcontent-%COMP%] {color:red;}\r\n\r\ntr._2[_ngcontent-%COMP%] {color:blue;}\r\n\r\ntr._3[_ngcontent-%COMP%] {color:purple;}\r\n\r\ntr._4[_ngcontent-%COMP%] {color:green;}\r\n\r\ndiv._1[_ngcontent-%COMP%] {color:red;}\r\n\r\ndiv._2[_ngcontent-%COMP%] {color:blue;}\r\n\r\ndiv._3[_ngcontent-%COMP%] {color:purple;}\r\n\r\ndiv._4[_ngcontent-%COMP%] {color:green;}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n\r\n.setFooter[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  display:block;\r\n}\r\n\r\n.status_content[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  margin:0px;\r\n  border-width: 2px;\r\n  border-color: green;\r\n  color: darkgreen;\r\n  background-color: rgb(186, 240, 186);\r\n  border-radius: 3px;\r\n  border-style: solid;\r\n  padding: 3px 3px 3px 5px;\r\n}\r\n\r\n.hasDuplicates[_ngcontent-%COMP%] {\r\n  border-color: red;\r\n  color: darkred;\r\n  background-color: rgb(216, 140, 140)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1zb25ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTOztFQUVULDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxRUFBcUU7RUFDckUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLFdBQVc7QUFDYjs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBVTtPQUFWLFVBQVU7RUFDVixzQkFBaUI7T0FBakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUEsT0FBTyxTQUFTLENBQUM7O0FBQ2pCLE9BQU8sVUFBVSxDQUFDOztBQUNsQixPQUFPLFlBQVksQ0FBQzs7QUFDcEIsT0FBTyxXQUFXLENBQUM7O0FBQ25CLFFBQVEsU0FBUyxDQUFDOztBQUNsQixRQUFRLFVBQVUsQ0FBQzs7QUFDbkIsUUFBUSxZQUFZLENBQUM7O0FBQ3JCLFFBQVEsV0FBVyxDQUFDOztBQUVwQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Q7QUFDRiIsImZpbGUiOiJzY3JvbGwtc29uZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOjA7XHJcblxyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzBweCk7XHJcbn1cclxuXHJcbi5jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlU2VjdGlvbiB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogNjMwcHg7XHJcbiAgbWluLXdpZHRoOiA2MzBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi5seXJpY3NTZWN0aW9uIHtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjJweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBwYWRkaW5nOjA7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTcyLCAyMTIpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XHJcbiAgLmx5cmljc1NlY3Rpb24ge1xyXG4gICAgd2lkdGg6MHB4O1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcclxuICB9XHJcbiAgLnRhYmxlU2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNTMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUzMHB4O1xyXG4gIH1cclxuICAuZmlsdGVyIHtcclxuICAgIHdpZHRoOjUzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLndhaXRpbmcge1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3NlYXJjaGlucHV0IHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmRyb3AtZmlsdGVyIHtcclxuICBoZWlnaHQ6MjhweDtcclxuICBwYWRkaW5nOjNweDtcclxuICBwYWRkaW5nLXJpZ2h0OjMwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6c21hbGw7XHJcbn1cclxuLmJ0bi1ncm91cCB7XHJcbiBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6MXB4O1xyXG59XHJcblxyXG4ucGlja2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6LjVweDtcclxufVxyXG4ucGlja2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmOTkgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZHJfUmVmIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6NiU7XHJcbiAgcGFkZGluZy1sZWZ0OjJweDtcclxuICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgcGFkZGluZy1ib3R0b206M3B4O1xyXG59XHJcbi5jb2xfUmVme1xyXG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOnNtYWxsO1xyXG4gIHdpZHRoOjYlO1xyXG59XHJcbi5oZHJfVGl0bGUge1xyXG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDo0MCU7XHJcbiAgcGFkZGluZy10b3A6M3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOjNweDtcclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIHdpZHRoOjQwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmhkcl9GaXJzdExpbmUge1xyXG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDo0NiU7XHJcbiAgcGFkZGluZy10b3A6M3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOjNweDtcclxufVxyXG4uY29sX0ZpcnN0TGluZSB7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB3aWR0aDo0NiU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uaGRyX0tleSB7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQlO1xyXG4gIHBhZGRpbmctdG9wOjNweDtcclxuICBwYWRkaW5nLWJvdHRvbTozcHg7XHJcbn1cclxuXHJcbi5jb2xfS2V5IHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIHdpZHRoOjQlO1xyXG59XHJcbi5oZHJfQWRkIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6NCU7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxuICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgcGFkZGluZy1ib3R0b206M3B4O1xyXG59XHJcbi5jb2xfQWRkIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgd2lkdGg6NCU7XHJcbn1cclxuXHJcbi5zb3J0YWJsZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTE5LCAxMTkpO1xyXG59XHJcblxyXG4ubHlyaWNzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZmlyc3RsaW5lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46MHB4O1xyXG4gIHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG4uc2V0U2VjdGlvbiB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1pbi13aWR0aDo1MDBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4uc2V0SGVhZGVyIHtcclxuICBoZWlnaHQ6M3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbm5neC1zb3J0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uc2V0TGlzdCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnNldFNlcSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5TZXFUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBzdHJvbmc7XHJcbn1cclxuLnNlcUZpcnN0TGluZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcbi5zZXRLZXkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnNldGl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDouNXB4O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxufVxyXG4uc2V0aXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZjk5O1xyXG59XHJcbi5lbXB0eXNldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGlwcGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5zZXRkYXRldGl0bGUge1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG91dGxpbmUtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4jTCB7XHJcbiAgaGVpZ2h0OjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbiNMIC5yb3dzZXEge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOjA7XHJcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XHJcbn1cclxuI04ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpZW5uYTtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4jQSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNhbG1vbjtcclxufVxyXG4jQSAucm93c2VxIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDowO1xyXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG59XHJcbiNCIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jQiAucm93c2VxIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDowO1xyXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG59XHJcbiNYIHtcclxuICBmb250LXN0eWxlOml0YWxpYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4jUCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4jTjpob3ZlciwgI0I6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmY5OSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbiNQOmhvdmVyLCAjWDpob3ZlciwgI0E6aG92ZXIsICNMOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmOTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvd3NlcSB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuLnJvd3RpdGxlIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDo0MCU7XHJcbiAgbWluLXdpZHRoOjQwJTtcclxufVxyXG4ucm93Zmlyc3RsaW5lIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDo0NiU7XHJcbn1cclxuLnJvd2tleSB7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB3aWR0aDozJTtcclxufVxyXG5cclxuLmJ0bkljb24ge1xyXG4gIHdpZHRoOjQ1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuSWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmdldFNldENvbnRhaW5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMS4yNXMgZWFzZS1pbjtcclxuICBoZWlnaHQ6MTByZW07XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxlYWRGaWx0ZXIge1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB3aWR0aDoyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubGlzdFNlY3Rpb24ge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzozcHggNXB4IDFweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGNvbHVtbnM6IDM7XHJcbiAgY29sdW1uLWZpbGw6IGF1dG87XHJcbn1cclxuLmxpc3RTZWN0aW9uIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIHBhZGRpbmc6IDFweCAzcHggMXB4IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxOTAsIDIxMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubGlzdHNlbGVjdGlvbi1jb250ZW50IHtcclxuICB3aWR0aDo5NSU7XHJcbn1cclxuLmxpc3RzZWxlY3Rpb24tY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZjk5O1xyXG59XHJcbi5saXN0c2VsZWN0aW9uLWRlbGV0ZSB7XHJcbiAgd2lkdGg6NSU7XHJcbn1cclxuLmxpc3RzZWxlY3Rpb24tZGVsZXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWwteCB7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uZGVsLXg6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTk2ZDQgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdXHJcbntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCtsYWJlbCB7XHJcbiAgbWFyZ2luOjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU5NmQ0O1xyXG59XHJcbi5yYWRpb2J0biBsYWJlbHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOjNweDtcclxufVxyXG4ucmFkaW9idG4gbGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmY5OSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudHIuXzEge2NvbG9yOnJlZDt9XHJcbnRyLl8yIHtjb2xvcjpibHVlO31cclxudHIuXzMge2NvbG9yOnB1cnBsZTt9XHJcbnRyLl80IHtjb2xvcjpncmVlbjt9XHJcbmRpdi5fMSB7Y29sb3I6cmVkO31cclxuZGl2Ll8yIHtjb2xvcjpibHVlO31cclxuZGl2Ll8zIHtjb2xvcjpwdXJwbGU7fVxyXG5kaXYuXzQge2NvbG9yOmdyZWVuO31cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNldEZvb3RlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnN0YXR1c19jb250ZW50IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDI0MCwgMTg2KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XHJcbn1cclxuLmhhc0R1cGxpY2F0ZXMge1xyXG4gIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE0MCwgMTQwKVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5234:
/*!****************************************************************!*\
  !*** ./src/app/set-context-menu/set-context-menu.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetContextMenuComponent": function() { return /* binding */ SetContextMenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



function SetContextMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetContextMenuComponent_li_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const menuItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.outputSelectedMenuItem(menuItem_r1); });
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
        this.menuItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    outputSelectedMenuItem(menuitem) {
        this.menuItemSelected.emit(menuitem);
    }
    ngOnInit() {
        this.theMenuItems = this.menuitems.split(';');
    }
}
SetContextMenuComponent.ɵfac = function SetContextMenuComponent_Factory(t) { return new (t || SetContextMenuComponent)(); };
SetContextMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetContextMenuComponent, selectors: [["app-set-context-menu"]], inputs: { x: "x", y: "y", menuitems: "menuitems", index: "index" }, outputs: { menuItemSelected: "menuItemSelected" }, decls: 3, vars: 5, consts: [[1, "menu", 3, "ngStyle"], [1, "list-group"], ["class", "list-group-item ngbButton", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ngbButton"], ["type", "button", 1, "ngbButtonLabel", 3, "click"]], template: function SetContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetContextMenuComponent_li_2_Template, 3, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.x, ctx.y));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theMenuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".menu[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:auto;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:3px;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1jb250ZXh0LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1giLCJmaWxlIjoic2V0LWNvbnRleHQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOmF1dG87XHJcbn1cclxuZGl2IHtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjNweDtcclxufVxyXG5saSB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://enlightweb.net'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map