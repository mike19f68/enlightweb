(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkenlightweb"] = self["webpackChunkenlightweb"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth/login/login.component */
      8146);
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      4309);
      /* harmony import */


      var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./build-set/build-set.component */
      4823);
      /* harmony import */


      var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-song/edit-song.component */
      2195);
      /* harmony import */


      var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lead-sheet/lead-sheet.component */
      3228);
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth.guard */
      3870);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'Login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }, {
        path: 'Signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
      }, {
        path: 'BuildSet',
        component: _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_2__.BuildSetComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
      }, {
        path: 'EditSong',
        component: _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_3__.EditSongComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
      }, {
        path: 'LeadSheet',
        component: _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_4__.LeadSheetComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth/auth.service */
      384);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      3482);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(authService) {
          _classCallCheck(this, _AppComponent);

          this.authService = authService;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.autoAuthUser();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container-fluid"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
        styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100%;}\r\nbody[_ngcontent-%COMP%]{height:100vh;}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: block;\r\n  height: 99vh;\r\n  background-color: #d7e7fa;\r\n  border-width:1px;\r\n  border-color: darkblue;\r\n  border-style: solid;\r\n  padding:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsZUFBZSxDQUFDO0FBQzNCLEtBQUssWUFBWSxDQUFDO0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7bWluLWhlaWdodDoxMDAlO31cclxuYm9keXtoZWlnaHQ6MTAwdmg7fVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDk5dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTdmYTtcclxuICBib3JkZXItd2lkdGg6MXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      181);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/radio */
      5644);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-sortablejs */
      9583);
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/login/login.component */
      8146);
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      4309);
      /* harmony import */


      var _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./build-set/build-set.component */
      4823);
      /* harmony import */


      var _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-song/edit-song.component */
      2195);
      /* harmony import */


      var _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lead-sheet/lead-sheet.component */
      3228);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./scroll-songs/scroll-songs.component */
      8743);
      /* harmony import */


      var _set_set_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./set/set.component */
      848);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./set-context-menu/set-context-menu.component */
      5234);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/auth-interceptor */
      762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
          useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptor,
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, ngx_sortablejs__WEBPACK_IMPORTED_MODULE_23__.SortablejsModule.forRoot({
          animation: 150
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _build_set_build_set_component__WEBPACK_IMPORTED_MODULE_4__.BuildSetComponent, _edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_5__.EditSongComponent, _lead_sheet_lead_sheet_component__WEBPACK_IMPORTED_MODULE_6__.LeadSheetComponent, _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_7__.ScrollSongsComponent, _set_set_component__WEBPACK_IMPORTED_MODULE_8__.SetComponent, _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_9__.SetContextMenuComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, ngx_sortablejs__WEBPACK_IMPORTED_MODULE_23__.SortablejsModule]
        });
      })();
      /***/

    },

    /***/
    762:
    /*!******************************************!*\
      !*** ./src/app/auth/auth-interceptor.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthInterceptor": function AuthInterceptor() {
          return (
            /* binding */
            _AuthInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      384);

      var _AuthInterceptor = /*#__PURE__*/function () {
        function _AuthInterceptor(authService) {
          _classCallCheck(this, _AuthInterceptor);

          this.authService = authService;
        }

        _createClass(_AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.authService.getToken();
            var authRequest = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
            return next.handle(authRequest);
          }
        }]);

        return _AuthInterceptor;
      }();

      _AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || _AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthInterceptor,
        factory: _AuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    3870:
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(authService, router) {
          _classCallCheck(this, _AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuth = this.authService.getIsAuth();

            if (!isAuth) {
              this.router.navigate(['/login']);
            }

            return isAuth;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    384:
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http, router) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.router = router;
          this.isAuthenticated = false;
          this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_AuthService, [{
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }, {
          key: "getIsAuth",
          value: function getIsAuth() {
            return this.isAuthenticated;
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return this.userId;
          }
        }, {
          key: "getAuthStatusListener",
          value: function getAuthStatusListener() {
            return this.authStatusListener.asObservable();
          }
        }, {
          key: "createUser",
          value: function createUser(email, password) {
            var _this = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post('http://localhost:3000/api/user/signup', authData).subscribe(function () {
              _this.router.navigate(['/BuildSet']);
            }, function (error) {
              _this.authStatusListener.next(false);
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this2 = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post('http://localhost:3000/api/user/login', authData).subscribe(function (response) {
              var token = response.token;
              _this2.token = token;

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this2.setAuthTimer(expiresInDuration);

                _this2.isAuthenticated = true;
                _this2.userId = response.userId;

                _this2.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);

                _this2.saveAuthData(token, expirationDate, _this2.userId);

                _this2.router.navigate(['/BuildSet']);
              }
            }, function (error) {
              _this2.authStatusListener.next(false);
            });
          }
        }, {
          key: "autoAuthUser",
          value: function autoAuthUser() {
            var authInformation = this.getAuthData();

            if (!authInformation) {
              return;
            }

            var now = new Date();
            var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

            if (expiresIn > 0) {
              this.token = authInformation.token;
              this.isAuthenticated = true;
              this.userId = authInformation.userId;
              this.setAuthTimer(expiresIn / 1000);
              this.authStatusListener.next(true);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = null;
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
            this.userId = null;
            clearTimeout(this.tokenTimer);
            this.clearAuthData();
            this.router.navigate(['/Login']);
          }
        }, {
          key: "setAuthTimer",
          value: function setAuthTimer(duration) {
            var _this3 = this;

            console.log('Setting timer: ' + duration);
            this.tokenTimer = setTimeout(function () {
              _this3.logout();
            }, duration * 1000);
          }
        }, {
          key: "saveAuthData",
          value: function saveAuthData(token, expirationDate, userId) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expirationDate.toISOString());
            localStorage.setItem('userId', userId);
          }
        }, {
          key: "clearAuthData",
          value: function clearAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            localStorage.removeItem('userId');
          }
        }, {
          key: "getAuthData",
          value: function getAuthData() {
            var token = localStorage.getItem('token');
            var expirationDate = localStorage.getItem('expiration');
            var userId = localStorage.getItem('userId');

            if (!token || !expirationDate) {
              return;
            }

            return {
              token: token,
              expirationDate: new Date(expirationDate),
              userId: userId
            };
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8146:
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth.service */
      384);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      4742);

      function LoginComponent_form_2_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_2_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_2_button_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_form_2_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onLogin(_r1);
          });

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
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(authService) {
          _classCallCheck(this, _LoginComponent);

          this.authService = authService;
          this.isLoading = false;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
              _this4.isLoading = false;
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            if (form.invalid) {
              return;
            }

            this.isLoading = true;
            this.authService.login(form.value.email, form.value.password);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["ng-component"]],
        decls: 3,
        vars: 1,
        consts: [[1, "parent"], [1, "child"], [3, "submit", 4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["mat-card-image", "", "src", "..\\..\\..\\assets\\Images\\logo.png", "alt", "Enlight", 1, "logo"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-flat-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "type", "submit"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 14, 3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError],
        styles: [".parent[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.child[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  margin:10px;\r\n  width:100px;\r\n  margin:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoaWxkIHtcclxuICBtYXJnaW46NXB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIG1hcmdpbjoyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    4309:
    /*!*************************************************!*\
      !*** ./src/app/auth/signup/signup.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupComponent": function SignupComponent() {
          return (
            /* binding */
            _SignupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth.service */
      384);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      4742);

      function SignupComponent_form_2_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_form_2_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_form_2_button_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignupComponent_form_2_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onSignup(_r1);
          });

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
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
        }
      }

      var _SignupComponent = /*#__PURE__*/function () {
        function _SignupComponent(authService) {
          _classCallCheck(this, _SignupComponent);

          this.authService = authService;
          this.isLoading = false;
        }

        _createClass(_SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
              _this5.isLoading = false;
            });
          }
        }, {
          key: "onSignup",
          value: function onSignup(form) {
            if (form.invalid) {
              return;
            }

            this.isLoading = true;
            this.authService.createUser(form.value.email, form.value.password);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return _SignupComponent;
      }();

      _SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || _SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SignupComponent,
        selectors: [["ng-component"]],
        decls: 3,
        vars: 1,
        consts: [[1, "parent"], [1, "child"], [3, "submit", 4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["mat-card-image", "", "src", "..\\..\\..\\assets\\Images\\logo.png", "alt", "Enlight", 1, "logo"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], [4, "ngIf"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_form_2_Template, 14, 3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError],
        styles: [".parent[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.child[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  margin:10px;\r\n  width:100px;\r\n  margin:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2hpbGQge1xyXG4gIG1hcmdpbjo1cHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgbWFyZ2luOjIwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    4823:
    /*!**************************************************!*\
      !*** ./src/app/build-set/build-set.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuildSetComponent": function BuildSetComponent() {
          return (
            /* binding */
            _BuildSetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth/auth.service */
      384);
      /* harmony import */


      var _scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../scroll-songs/scroll-songs.component */
      8743);

      var _BuildSetComponent = /*#__PURE__*/function () {
        function _BuildSetComponent(authService) {
          _classCallCheck(this, _BuildSetComponent);

          this.authService = authService;
        }

        _createClass(_BuildSetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe();
          }
        }, {
          key: "receiveSong",
          value: function receiveSong(song) {
            this.receivedC = song;
          }
        }]);

        return _BuildSetComponent;
      }();

      _BuildSetComponent.ɵfac = function BuildSetComponent_Factory(t) {
        return new (t || _BuildSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _BuildSetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BuildSetComponent,
        selectors: [["app-build-set"]],
        inputs: {
          receivedC: "receivedC"
        },
        decls: 2,
        vars: 0,
        consts: [[3, "SongToSend"]],
        template: function BuildSetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-scroll-songs", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("SongToSend", function BuildSetComponent_Template_app_scroll_songs_SongToSend_1_listener($event) {
              return ctx.receiveSong($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_scroll_songs_scroll_songs_component__WEBPACK_IMPORTED_MODULE_1__.ScrollSongsComponent],
        styles: [".header[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: dimgray;\r\n  color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6ImJ1aWxkLXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    2195:
    /*!**************************************************!*\
      !*** ./src/app/edit-song/edit-song.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditSongComponent": function EditSongComponent() {
          return (
            /* binding */
            _EditSongComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _songs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../songs.service */
      8421);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function EditSongComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EditSongComponent_div_63_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseup", function EditSongComponent_div_63_tr_2_Template_tr_mouseup_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var song_r5 = restoredCtx.$implicit;
            var index_r6 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.selectSong(song_r5, index_r6);
          });

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
        }

        if (rf & 2) {
          var song_r5 = ctx.$implicit;
          var index_r6 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

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
        }
      }

      function EditSongComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditSongComponent_div_63_tr_2_Template, 12, 8, "tr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.songs);
        }
      }

      function EditSongComponent_div_77_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

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
        }
      }

      function EditSongComponent_div_77_div_2_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function EditSongComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditSongComponent_div_77_div_1_Template, 78, 10, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditSongComponent_div_77_div_2_Template, 78, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hasData);
        }
      }

      var _EditSongComponent = /*#__PURE__*/function () {
        function _EditSongComponent(songsService) {
          _classCallCheck(this, _EditSongComponent);

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
        } // tslint:disable-next-line: use-lifecycle-interface


        _createClass(_EditSongComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSongs();
          }
        }, {
          key: "getSongs",
          value: function getSongs() {
            var _this6 = this;

            this.songsService.getSongs(this.selectedGroup, this.selectedAge, this.selectedRating, this.searchString, this.sortField, this.sortDirection);
            this.isLoading = true;
            this.songsSub = this.songsService.getSongUpdateListener().subscribe(function (songs) {
              _this6.isLoading = false;
              _this6.songs = songs;
              _this6.song = _this6.songs[0];
              _this6.hasData = true;
            });
            console.log('GotSongs');
          }
        }, {
          key: "changeSort",
          value: function changeSort(field) {
            if (this.sortField === field) {
              this.sortDirection = -this.sortDirection;
            } else {
              this.sortField = field;

              if (field === 'SongRef') {
                this.sortDirection = -1;
              } else {
                this.sortDirection = 1;
              }
            }

            this.getSongs();
            this.ActiveIndex = 0;
          }
        }, {
          key: "selectSong",
          value: function selectSong(selectedSong, index) {
            this.hasData = true;
            this.song = selectedSong;
            this.ActiveIndex = index;
          }
        }, {
          key: "onAddSong",
          value: function onAddSong(form) {
            if (form.invalid) {
              return;
            }

            this.songsService.addSong(null, form.value.SongRef, form.value.Title, form.value.FirstLine, form.value.Lyrics, form.value.Author, form.value.CCLIRef, form.value.Copyright, form.value.PaceGrp, form.value.Rating, form.value.LastPlay, form.value.MusicalKey, form.value.Tempo);
            form.resetForm();
          }
        }, {
          key: "deleteSong",
          value: function deleteSong(SelectedSong, index) {
            if (!this.hasData) {
              return;
            }

            this.songsService.deleteSong(this.song.id);
            console.log(this.song.id);
          } // tslint:disable-next-line: use-lifecycle-interface

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.songsSub.unsubscribe();
          }
        }]);

        return _EditSongComponent;
      }();

      _EditSongComponent.ɵfac = function EditSongComponent_Factory(t) {
        return new (t || _EditSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_songs_service__WEBPACK_IMPORTED_MODULE_0__.SongsService));
      };

      _EditSongComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _EditSongComponent,
        selectors: [["app-edit-song"]],
        decls: 78,
        vars: 8,
        consts: [[1, "editsong"], [1, "tableSection", "col-md-6"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "drop-filter", "d-inline-block", "btn-group", 3, "change"], ["id", "PaceGrp", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "btn", "btn-add", "btn-primary"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], ["class", "waiting", 4, "ngIf"], [4, "ngIf"], [1, "songpage", 3, "submit"], ["songForm", "ngForm"], [1, "buttons"], ["for", "SongRef", 1, "mb-6"], ["id", "SongRef", "type", "int", "placeholder", "0", "name", "SongRef", "ngModel", "", 1, "form-control", "mb-6", "btn", "songref", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "mb-6"], ["type", "Delete", 1, "btn", "btn-primary", "mb-6", 3, "click"], ["type", "cancel", 1, "btn", "btn-primary", "mb-6"], [1, "form-row"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "picker", 3, "id", "active", "mouseup", 4, "ngFor", "ngForOf"], [1, "picker", 3, "id", "mouseup"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_key"], [2, "display", "none"], ["song", ""], [1, "form-group", "col-md-12"], ["for", "SongTitle"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control", 3, "value"], ["for", "FirstLine"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Lyrics"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Author"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Rating"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Pace/Group"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control", 3, "value"], ["for", "MusicalKey"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Copyright"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control", 3, "value"], ["for", "CCLI_Ref"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control", 3, "value"], ["for", "Tempo"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control", 3, "value"], ["for", "LastPlay"], ["id", "LastPlay", "type", "text", "placeholder", "---", "name", "LastPlay", "ngModel", "", 1, "form-control"], ["id", "SongTitle", "type", "text", "placeholder", "Song Title", "name", "Title", "ngModel", "", 1, "form-control"], ["id", "FirstLine", "type", "text", "placeholder", "First Line", "name", "FirstLine", "ngModel", "", 1, "form-control"], ["id", "Lyrics", "type", "text", "rows", "10", "placeholder", "Lyrics", "name", "Lyrics", "ngModel", "", 1, "form-control"], ["id", "Author", "type", "text", "rows", "3", "placeholder", "Artist", "name", "Author", "ngModel", "", 1, "form-control"], ["id", "RatingSelect", "name", "Rating", "ngModel", "", 1, "form-control"], ["id", "PaceSelect", "name", "PaceGrp", "ngModel", "", 1, "form-control"], ["id", "KeySelect", "name", "MusicalKey", "ngModel", "", 1, "form-control"], ["id", "Copyright", "type", "text", "rows", "3", "placeholder", "Copyright", "name", "Copyright", "ngModel", "", 1, "form-control"], ["id", "CCLI_Ref", "type", "text", "placeholder", "CCLI_Ref", "name", "CCLI_Ref", "ngModel", "", 1, "form-control"], ["id", "Tempo", "type", "text", "placeholder", "Tempo", "name", "Tempo", "ngModel", "", 1, "form-control"]],
        template: function EditSongComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add/Edit Song");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.searchString = $event;
            })("change", function EditSongComponent_Template_input_change_7_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_9_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_10_listener($event) {
              return ctx.selectedGroup = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_25_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_26_listener($event) {
              return ctx.selectedAge = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_35_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditSongComponent_Template_select_ngModelChange_36_listener($event) {
              return ctx.selectedRating = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditSongComponent_Template_div_change_47_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "+New Song");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_53_listener() {
              return ctx.changeSort("SongRef");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Ref");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_55_listener() {
              return ctx.changeSort("SongTitle");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_57_listener() {
              return ctx.changeSort("FirstLine");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "First Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_td_click_59_listener() {
              return ctx.changeSort("MusicalKey");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditSongComponent_Template_form_submit_64_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);

              return ctx.onAddSong(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Song Ref:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditSongComponent_Template_button_click_72_listener() {
              return ctx.deleteSong(ctx.song, ctx.ActiveIndex);
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: lightgrey;\r\n  overflow-y: hidden;\r\n  margin: auto;\r\n  padding-left:5px;\r\n  align-items: center;\r\n\r\n}\r\n.editsong[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 6rem);\r\n  width: calc(100vw - 65px);\r\n}\r\n.songpage[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  margin:3px;\r\n  height:100%;\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  margin:3px;\r\n}\r\n.component[_ngcontent-%COMP%] {\r\n  display:block;\r\n  width:100%;\r\n  overflow-y:scroll;\r\n  margin:0;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: right;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n}\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 650px;\r\n  min-width: 650px;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x:hidden;\r\n  padding:0px;\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:630px;\r\n  float: left;\r\n}\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n\r\n}\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:0;\r\n  font-size:small;\r\n  margin-right:5px;\r\n}\r\n.btn-add[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  align-self: right;\r\n  margin:0px;\r\n  margin-left:5px;\r\n  padding-top:1px;\r\n  padding-bottom:1px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 630px;\r\n  margin:0px;\r\n  padding:1px;\r\n  table-layout: fixed;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-size:12px;\r\n  padding-left:3px;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\ntr.picker[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffff99;\r\n  cursor: pointer;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#3871aa !important;\r\n  color: white;\r\n}\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:50px;\r\n}\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  font-size:small;\r\n  width:50px;\r\n}\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_Title[_ngcontent-%COMP%] {\r\n  min-width:260px;\r\n  width:260px;\r\n  max-width: 260px;\r\n}\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:260px;\r\n\r\n}\r\n.col_FirstLine[_ngcontent-%COMP%]\r\n{\r\n  min-width:280px;\r\n  width:280px;\r\n  max-width: 280px;\r\n}\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:45px;\r\n}\r\n.col_Key[_ngcontent-%COMP%]\r\n{\r\n  width:45px;\r\n}\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline overline;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n  cursor: pointer;\r\n}\r\n.songref[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n  text-align: left;\r\n  width:80px;\r\n  padding:3px;\r\n  margin:10px !important;\r\n\r\n}\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n  display:block;\r\n}\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n\r\n}\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  margin:auto;\r\n  padding-right:10px;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-width:0.5px;\r\n  outline-style: solid;\r\n  outline-color: lightslategray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsUUFBUTtBQUNWO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJlZGl0LXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5lZGl0c29uZyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NXB4KTtcclxufVxyXG4uc29uZ3BhZ2Uge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW46M3B4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5mb3JtLXJvdyB7XHJcbiAgbWFyZ2luOjNweDtcclxufVxyXG4uY29tcG9uZW50IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG4ge1xyXG4gIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi50YWJsZVNlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6IDY1MHB4O1xyXG4gIG1pbi13aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcGFkZGluZzowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDE3MiwgMjEyKTtcclxuICB3aWR0aDo2MzBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLndhaXRpbmcge1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hpbnB1dCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5kcm9wLWZpbHRlciB7XHJcbiAgaGVpZ2h0OjI4cHg7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcbi5idG4tYWRkIHtcclxuICBoZWlnaHQ6MjhweDtcclxuICBhbGlnbi1zZWxmOiByaWdodDtcclxuICBtYXJnaW46MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuICBwYWRkaW5nLXRvcDoxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDYzMHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzoxcHg7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOi41cHg7XHJcbn1cclxudHIucGlja2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODcxYWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uaGRyX1JlZiB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcbi5jb2xfUmVme1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcblxyXG4uaGRyX1RpdGxlIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBtaW4td2lkdGg6MjYwcHg7XHJcbiAgd2lkdGg6MjYwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuXHJcbi5oZHJfRmlyc3RMaW5lIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI2MHB4O1xyXG5cclxufVxyXG4uY29sX0ZpcnN0TGluZVxyXG57XHJcbiAgbWluLXdpZHRoOjI4MHB4O1xyXG4gIHdpZHRoOjI4MHB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5oZHJfS2V5IHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQ1cHg7XHJcbn1cclxuXHJcbi5jb2xfS2V5XHJcbntcclxuICB3aWR0aDo0NXB4O1xyXG59XHJcblxyXG4uc29ydGFibGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNvbmdyZWYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDo4MHB4O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbjoxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5seXJpY3Mge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maXJzdGxpbmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5zZXRIZWFkZXIge1xyXG4gIGhlaWdodDozcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbm5neC1zb3J0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnNldFNlcSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5TZXFUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBzdHJvbmc7XHJcbn1cclxuLnNlcUZpcnN0TGluZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG5cclxufVxyXG4uc2V0S2V5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uY2xpcHBlZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBmb250LXNpemU6MTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgb3V0bGluZS13aWR0aDowLjVweDtcclxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcclxuICBvdXRsaW5lLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    3482:
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth/auth.service */
      384);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);

      function HeaderComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Build Set");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit/Add Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lead Sheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(authService) {
          _classCallCheck(this, _HeaderComponent);

          this.authService = authService;
          this.userIsAuthenticated = false;
          this.title = 'enlightWeb';
          this.icon = '../../assets/Images/logo.png';
          this.storedSongs = [];
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this7.userIsAuthenticated = isAuthenticated;
              console.log(isAuthenticated);
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 6,
        consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [4, "ngIf"], [1, "body"], ["routerLink", "/BuildSet", 1, "nav-item", "nav-link"], ["routerLink", "/EditSong", 1, "nav-item", "nav-link"], ["routerLink", "/LeadSheet", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/Login", 1, "nav-item", "nav-link"], ["routerLink", "/Signup", 1, "nav-item", "nav-link"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_li_3_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

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
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100%;}\r\nbody[_ngcontent-%COMP%]{height:100vh;}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: block;\r\n  height: 99vh;\r\n  background-color: #d7e7fa;\r\n  border-width:1px;\r\n  border-color: darkblue;\r\n  border-style: solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsZUFBZSxDQUFDO0FBQzNCLEtBQUssWUFBWSxDQUFDO0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXttaW4taGVpZ2h0OjEwMCU7fVxyXG5ib2R5e2hlaWdodDoxMDB2aDt9XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogOTl2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlN2ZhO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    3228:
    /*!****************************************************!*\
      !*** ./src/app/lead-sheet/lead-sheet.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeadSheetComponent": function LeadSheetComponent() {
          return (
            /* binding */
            _LeadSheetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LeadSheetComponent = /*#__PURE__*/function () {
        function _LeadSheetComponent() {
          _classCallCheck(this, _LeadSheetComponent);
        }

        _createClass(_LeadSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LeadSheetComponent;
      }();

      _LeadSheetComponent.ɵfac = function LeadSheetComponent_Factory(t) {
        return new (t || _LeadSheetComponent)();
      };

      _LeadSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LeadSheetComponent,
        selectors: [["app-lead-sheet"]],
        decls: 2,
        vars: 0,
        template: function LeadSheetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lead-sheet works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    8743:
    /*!********************************************************!*\
      !*** ./src/app/scroll-songs/scroll-songs.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollSongsComponent": function ScrollSongsComponent() {
          return (
            /* binding */
            _ScrollSongsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _set_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../set.model */
      6129);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _songs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../songs.service */
      8421);
      /* harmony import */


      var _sets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sets.service */
      7751);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-sortablejs */
      9583);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/radio */
      5644);
      /* harmony import */


      var _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../set-context-menu/set-context-menu.component */
      5234);

      function ScrollSongsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.song.SongTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.song.FirstLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.song.Lyrics);
        }
      }

      function ScrollSongsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ScrollSongsComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ScrollSongsComponent_div_63_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseup", function ScrollSongsComponent_div_63_tr_2_Template_tr_mouseup_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var song_r10 = restoredCtx.$implicit;
            var index_r11 = restoredCtx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r13.showLyrics(song_r10, index_r11);
          })("dblclick", function ScrollSongsComponent_div_63_tr_2_Template_tr_dblclick_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var song_r10 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r15.addtoSet(song_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_div_63_tr_2_Template_img_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var song_r10 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r16.addtoSet(song_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 62, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var song_r10 = ctx.$implicit;
          var index_r11 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", index_r11 == ctx_r9.ActiveIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "song-", index_r11, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](song_r10.SongRef);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](song_r10.SongTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](song_r10.FirstLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](song_r10.MusicalKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](song_r10);
        }
      }

      function ScrollSongsComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ScrollSongsComponent_div_63_tr_2_Template, 14, 8, "tr", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.songs);
        }
      }

      function ScrollSongsComponent_div_86_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_div_86_div_11_Template_li_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);

            var set_r18 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r20.LoadSet(set_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var set_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", set_r18.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", set_r18.Leader, " - ", set_r18.SetDate, "");
        }
      }

      function ScrollSongsComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-radio-group", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_div_86_Template_mat_radio_group_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r22.selectedLead = $event;
          })("change", function ScrollSongsComponent_div_86_Template_mat_radio_group_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r24.LeaderChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-radio-button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mike");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-radio-button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Ian");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-radio-button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Jill");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-radio-button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Terry");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ScrollSongsComponent_div_86_div_11_Template, 4, 3, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.selectedLead);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.sets);
        }
      }

      function ScrollSongsComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function ScrollSongsComponent_div_88_Template_div_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var index_r26 = restoredCtx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r27.rightClick($event, index_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var set_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", set_r25.SRType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r25.SRType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r25.SRTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r25.SRFirstLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](set_r25.SRMusicalKey);
        }
      }

      function ScrollSongsComponent_p_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Set Not Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ScrollSongsComponent_app_set_context_menu_90_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-set-context-menu", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("menuItemSelected", function ScrollSongsComponent_app_set_context_menu_90_Template_app_set_context_menu_menuItemSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r29.handleMenuSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("x", ctx_r8.xPosTabMenu)("y", ctx_r8.yPosTabMenu)("menuitems", ctx_r8.showMenuOptions())("index", ctx_r8.indexTabMenu);
        }
      }

      var _c0 = function _c0() {
        return {
          animation: 150
        };
      };

      var _ScrollSongsComponent = /*#__PURE__*/function () {
        function _ScrollSongsComponent(songsService, setsService) {
          _classCallCheck(this, _ScrollSongsComponent);

          this.songsService = songsService;
          this.setsService = setsService;
          this.hasData = false;
          this.setStarted = false;
          this.setList = [];
          this.setRows = [];
          this.setDate = new Date();
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
          this.isHidden = true;
          this.xPosTabMenu = 0;
          this.yPosTabMenu = 0;
          this.indexTabMenu = 0;
          this.Leaders = ['Mike', 'Ian', 'Jill', 'Terry'];
        }

        _createClass(_ScrollSongsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSongs();
          }
        }, {
          key: "getSongs",
          value: function getSongs() {
            var _this8 = this;

            this.songsService.getSongs(this.selectedGroup, this.selectedAge, this.selectedRating, this.searchString, this.sortField, this.sortDirection);
            this.isLoading = true;
            this.songsSub = this.songsService.getSongUpdateListener().subscribe(function (songs) {
              _this8.isLoading = false;
              _this8.songs = songs;
              _this8.song = _this8.songs[0];
              _this8.hasData = true;
            });
          }
        }, {
          key: "showLyrics",
          value: function showLyrics(selectedSong, index) {
            this.hasData = true;
            this.song = selectedSong;
            this.ActiveIndex = index;
          }
        }, {
          key: "changeSort",
          value: function changeSort(field) {
            if (this.sortField === field) {
              this.sortDirection = -this.sortDirection;
            } else {
              this.sortField = field;

              if (field === 'SongRef') {
                this.sortDirection = -1;
              } else {
                this.sortDirection = 1;
              }
            }

            this.getSongs();
            this.ActiveIndex = 0;
          }
        }, {
          key: "addtoSet",
          value: function addtoSet(song) {
            var newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            newRow.SRType = 'S';
            newRow.SRMusicalKey = song.MusicalKey;
            newRow.SRFirstLine = song.FirstLine;
            newRow.SRRef = song.SongRef;
            newRow.SRTitle = song.SongTitle;
            newRow.SRPaceGrp = song.PaceGrp;
            this.setRows.splice(this.setRows.length, 0, newRow);
            this.setStarted = true;
          }
        }, {
          key: "onDateSelected",
          value: function onDateSelected() {
            var d = this.setDate;
          }
        }, {
          key: "loadTemplate",
          value: function loadTemplate() {
            var newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            newRow.SRTitle = 'AM';
            newRow.SRType = 'T';
            this.setRows.splice(this.setRows.length, 0, newRow);
            newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            newRow.SRType = 'L';
            this.setRows.splice(this.setRows.length, 0, newRow);
            newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            newRow.SRType = 'L';
            this.setRows.splice(this.setRows.length, 0, newRow);
            newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            newRow.SRType = 'L';
            this.setRows.splice(this.setRows.length, 0, newRow);
            newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
            this.setStarted = true;
          }
        }, {
          key: "clearSet",
          value: function clearSet() {
            this.setRows.length = 0;
            this.setStarted = false;
          }
        }, {
          key: "showMenuOptions",
          value: function showMenuOptions() {
            return 'Delete;AM Title;PM Title;Spacer;Standard Song;Pre Song;Extra Song';
          }
        }, {
          key: "rightClick",
          value: function rightClick(event, index) {
            event.stopPropagation();
            this.xPosTabMenu = event.clientX;
            this.yPosTabMenu = event.clientY;
            this.indexTabMenu = index;
            this.isHidden = false;
            return false;
          }
        }, {
          key: "closeRightClickMenu",
          value: function closeRightClickMenu() {
            this.isHidden = true;
          }
        }, {
          key: "handleMenuSelection",
          value: function handleMenuSelection(menuselection) {
            var newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();

            if (menuselection === 'Delete') {
              this.setRows.splice(this.indexTabMenu, 1);

              if (this.setRows.length === 0) {
                this.setStarted = false;
              }
            } else if (menuselection === 'Standard Song') {
              this.setRows[this.indexTabMenu].SRType = 'S';
            } else if (menuselection === 'Pre Song') {
              this.setRows[this.indexTabMenu].SRType = 'P';
            } else if (menuselection === 'Extra Song') {
              this.setRows[this.indexTabMenu].SRType = 'X';
            } else if (menuselection === 'Spacer') {
              newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
              newRow.SRType = 'L';
              this.setRows.splice(this.setRows.length, 0, newRow);
            } else if (menuselection === 'AM Title') {
              newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
              newRow.SRTitle = 'AM';
              newRow.SRType = 'T';
              this.setRows.splice(this.setRows.length, 0, newRow);
            } else if (menuselection === 'PM Title') {
              newRow = new _set_model__WEBPACK_IMPORTED_MODULE_0__.RowData();
              newRow.SRTitle = 'PM';
              newRow.SRType = 'T';
              this.setRows.splice(this.setRows.length, 0, newRow);
            }
          }
        }, {
          key: "transformDate",
          value: function transformDate(date) {
            return this.datepipe.transform(date, 'dd mmm yy');
          }
        }, {
          key: "toggleSets",
          value: function toggleSets() {
            if (this.chooseSet === false) {
              this.chooseSet = true;
              this.getSets();
            } else {
              this.chooseSet = false;
            }
          }
        }, {
          key: "LeaderChanged",
          value: function LeaderChanged() {
            this.getSets();
          }
        }, {
          key: "getSets",
          value: function getSets() {
            var _this9 = this;

            console.log('Empty? ' + this.sets);
            this.setsService.getSets(this.selectedLead);
            this.setsSub = this.setsService.getSetUpdateListener().subscribe(function (sets) {
              _this9.sets = sets;
              console.log(sets);
            });
          }
        }, {
          key: "LoadSet",
          value: function LoadSet(set) {
            console.log(set);
            this.chooseSet = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.songsSub.unsubscribe();
            this.setsSub.unsubscribe();
          }
        }]);

        return _ScrollSongsComponent;
      }();

      _ScrollSongsComponent.ɵfac = function ScrollSongsComponent_Factory(t) {
        return new (t || _ScrollSongsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_songs_service__WEBPACK_IMPORTED_MODULE_1__.SongsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sets_service__WEBPACK_IMPORTED_MODULE_2__.SetsService));
      };

      _ScrollSongsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ScrollSongsComponent,
        selectors: [["app-scroll-songs"]],
        decls: 93,
        vars: 16,
        consts: [[1, "component"], [1, "lyricsSection"], [1, "form-group"], [4, "ngIf"], [1, "tableSection"], [1, "filter", "sticky-top", "container-fluid"], [1, "btn-group"], ["id", "searchinput", "type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "searchclear", 1, "glyphicon", "glyphicon-remove-circle"], [1, "drop-filter", "d-inline-block", "btn-group", 3, "change"], ["id", "PaceGrp", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "1", "selected", ""], ["value", "10"], ["id", "Rating", 1, "mr-0", "drop-filter", "d-inline-block", "form-control", 3, "ngModel", "ngModelChange"], ["value", "2", "selected", ""], ["value", "0"], [1, "hdr_Ref", "sortable", 3, "click"], [1, "hdr_Title", "sortable", 3, "click"], [1, "hdr_FirstLine", "sortable", 3, "click"], [1, "hdr_Key", "sortable", 3, "click"], [1, "hdr_Key"], ["class", "waiting", 4, "ngIf"], [1, "setSection", 3, "click"], [1, "setHeader", "sticky-top"], [1, "form-inline"], [1, "input-group"], [1, "title", "setdatetitle", "form-control"], ["placeholder", "<set name> or <dd mmm yy>", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "dateSelect"], ["dp", "ngbDatepicker"], ["type", "button", 1, "btn", "calendar", 3, "click"], ["width", "28px", "title", "Pick Date", "src", "..\\..\\assets\\Images\\cal.png"], ["type", "button", 1, "btn"], ["width", "28px", "title", "Load Template", "src", "..\\..\\assets\\Images\\add_template.png", 3, "click"], ["width", "28px", "title", "Clear Set", "src", "..\\..\\assets\\Images\\erase_document.png", 3, "click"], ["width", "28px", "title", "Load Set", "src", "..\\..\\assets\\Images\\load_document.png", 3, "click"], ["width", "28px", "title", "Save Set", "src", "..\\..\\assets\\Images\\save_document.png"], ["width", "28px", "title", "Export to Word", "src", "..\\..\\assets\\Images\\Export_document.png"], ["class", "getSetContainer", 4, "ngIf"], [3, "sortablejs", "sortablejsOptions"], ["class", "setitem", 3, "id", "contextmenu", 4, "ngFor", "ngForOf"], [3, "x", "y", "menuitems", "index", "menuItemSelected", 4, "ngIf"], [1, "sticky-bottom", "setFooter", "container-fluid"], [1, "title", "clipped"], [1, "firstline", "clipped"], [1, "lyrics"], [1, "waiting"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "picker", 3, "id", "active", "mouseup", "dblclick", 4, "ngFor", "ngForOf"], [1, "picker", 3, "id", "mouseup", "dblclick"], [1, "col_Ref"], [1, "col_Title", "clipped"], [1, "col_FirstLine", "clipped"], [1, "col_key"], ["src", "../../assets/Images/ToList.png", "alt", " ", "width", "14", "height", "14", 3, "click"], [2, "display", "none"], ["song", ""], [1, "getSetContainer"], [1, "leadFilter", 3, "ngModel", "ngModelChange", "change"], ["value", "Mike", "checked", "true"], ["value", "Ian"], ["value", "Jill"], ["value", "Terry"], [1, "listSection"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [3, "click"], [1, "setitem", 3, "id", "contextmenu"], [1, "rowseq"], [1, "rowtitle", "clipped"], [1, "rowfirstline", "clipped"], [1, "rowkey"], [3, "x", "y", "menuitems", "index", "menuItemSelected"]],
        template: function ScrollSongsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ScrollSongsComponent_div_3_Template, 7, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ScrollSongsComponent_div_4_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.searchString = $event;
            })("change", function ScrollSongsComponent_Template_input_change_8_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_10_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_11_listener($event) {
              return ctx.selectedGroup = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Standard");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fast");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Slow");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "School");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Christmas");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_26_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_27_listener($event) {
              return ctx.selectedAge = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "2 years");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "3 years");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ScrollSongsComponent_Template_div_change_36_listener() {
              return ctx.ngOnInit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_select_ngModelChange_37_listener($event) {
              return ctx.selectedRating = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Rating 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Rating 4+");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Rating 3+");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Rating 2+");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "All Songs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_51_listener() {
              return ctx.changeSort("SongRef");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Ref");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_53_listener() {
              return ctx.changeSort("SongTitle");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_55_listener() {
              return ctx.changeSort("FirstLine");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "First Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_td_click_57_listener() {
              return ctx.changeSort("MusicalKey");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Key");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, ScrollSongsComponent_div_62_Template, 3, 0, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ScrollSongsComponent_div_63_Template, 3, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_div_click_65_listener() {
              return ctx.closeRightClickMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "form", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Set Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScrollSongsComponent_Template_input_ngModelChange_72_listener($event) {
              return ctx.setDate = $event;
            })("dateSelect", function ScrollSongsComponent_Template_input_dateSelect_72_listener() {
              return ctx.onDateSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_button_click_74_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](73);

              return _r4.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_77_listener() {
              return ctx.loadTemplate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_79_listener() {
              return ctx.clearSet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollSongsComponent_Template_img_click_81_listener() {
              return ctx.toggleSets();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, ScrollSongsComponent_div_86_Template, 12, 2, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, ScrollSongsComponent_div_88_Template, 9, 5, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, ScrollSongsComponent_p_89_Template, 2, 0, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, ScrollSongsComponent_app_set_context_menu_90_Template, 1, 4, "app-set-context-menu", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hasData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchString);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedAge);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedRating);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.setDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chooseSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sortablejs", ctx.setList)("sortablejsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.setRows);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.setStarted);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isHidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbInputDatepicker, ngx_sortablejs__WEBPACK_IMPORTED_MODULE_8__.SortablejsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioButton, _set_context_menu_set_context_menu_component__WEBPACK_IMPORTED_MODULE_3__.SetContextMenuComponent],
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: paleturquoise;\r\n  overflow: hidden;\r\n  margin: auto;\r\n  padding:0;\r\n\r\n  height: calc(100vh - 3rem);\r\n  width: calc(100vw - 30px);\r\n}\r\n.component[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  width:100%;\r\n  overflow:hidden;\r\n}\r\n.tableSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  width: 650px;\r\n  min-width: 650px;\r\n  height: calc(100vh - 4rem);\r\n  overflow-y: scroll;\r\n}\r\n.lyricsSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  display:block;\r\n  height: calc(100vh - 4rem);\r\n  width:250px;\r\n  min-width: 250px;\r\n  background-color: lightyellow;\r\n  color: darkred;\r\n  font-size:12px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  text-align: center;\r\n  padding:2px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media only screen and (max-width: 1420px) {\r\n  .lyricsSection[_ngcontent-%COMP%] {\r\n    width:0px;\r\n    min-width: 0px;\r\n    visibility: collapse;\r\n  }\r\n}\r\n.filter[_ngcontent-%COMP%] {\r\n  padding:0;\r\n  display:block;\r\n  height: 4rem;\r\n  background-color: rgb(142, 172, 212);\r\n  width:630px;\r\n  float: left;\r\n}\r\n.waiting[_ngcontent-%COMP%] {\r\n  z-index:999;\r\n  text-align: center;\r\n\r\n}\r\n#searchinput[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n  width: 100%;\r\n  margin: 5px;\r\n}\r\n.drop-filter[_ngcontent-%COMP%] {\r\n  height:28px;\r\n  padding:0;\r\n  font-size:small;\r\n  margin-right:5px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 630px;\r\n  margin:0px;\r\n  padding:1px;\r\n  table-layout: fixed;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-size:12px;\r\n  padding-left:3px;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  border-bottom-color:black;\r\n  border-bottom-style: solid;\r\n  border-bottom-width:.5px;\r\n}\r\ntr.picker[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffff99;\r\n  cursor: pointer;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color:#3871aa !important;\r\n  color: white;\r\n}\r\n.hdr_Ref[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:40px;\r\n}\r\n.col_Ref[_ngcontent-%COMP%]{\r\n  font-size:small;\r\n  color: darkblue;\r\n  width:40px;\r\n}\r\n.hdr_Title[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:245px;\r\n\r\n}\r\n.col_Title[_ngcontent-%COMP%] {\r\n  min-width:245px;\r\n  width:245px;\r\n  max-width: 245px;\r\n}\r\n.hdr_FirstLine[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:255px;\r\n\r\n}\r\n.col_FirstLine[_ngcontent-%COMP%]\r\n{\r\n  min-width:255px;\r\n  width:255px;\r\n  max-width: 255px;\r\n}\r\n.hdr_Key[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  background-color: darkslategrey;\r\n  color:white;\r\n  width:45px;\r\n}\r\n.col_Key[_ngcontent-%COMP%]\r\n{\r\n  width:45px;\r\n}\r\n.sortable[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline overline;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n  cursor: pointer;\r\n}\r\n.lyrics[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.firstline[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.setSection[_ngcontent-%COMP%] {\r\n  float:left;\r\n  \r\n  width:100%;\r\n  min-width:500px;\r\n  height: calc(100vh - 3rem);\r\n  background-color: lightsteelblue;\r\n  font-size: 12px;\r\n  padding:2px;\r\n  margin:0;\r\n  display:block;\r\n}\r\n.setHeader[_ngcontent-%COMP%] {\r\n  height:3rem;\r\n  background-color: lightgray;\r\n  display:block;\r\n}\r\nngx-sortable[_ngcontent-%COMP%] {\r\n  width:100%;\r\n}\r\n.setList[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  overflow-y: scroll;\r\n}\r\n.setSeq[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 20px;\r\n}\r\n.SeqTitle[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n  font-weight: strong;\r\n}\r\n.seqFirstLine[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 10px;\r\n\r\n}\r\n.setKey[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 40px;\r\n}\r\n.setitem[_ngcontent-%COMP%] {\r\n  background-color: navajowhite;\r\n  border-radius: 3px;\r\n  border-style: solid;\r\n  border-width: .5px;\r\n  cursor: move;\r\n  padding-left: 3px;\r\n}\r\n.setFooter[_ngcontent-%COMP%] {\r\n  height:1rem;\r\n  background-color: lightsteelblue;\r\n  display:block;\r\n}\r\n.clipped[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  font-size:14px;\r\n  vertical-align: middle;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  margin:auto;\r\n  outline-color: lightslategray;\r\n}\r\n#L[_ngcontent-%COMP%] {\r\n  height:10px;\r\n  background-color: lightslategray;\r\n}\r\n#L[_ngcontent-%COMP%]   .rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:0;\r\n  visibility: collapse;\r\n}\r\n#T[_ngcontent-%COMP%] {\r\n  background-color: navy;\r\n  color: white;\r\n}\r\n#T[_ngcontent-%COMP%]   .rowseq[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  width:0;\r\n  visibility: collapse;\r\n}\r\n#X[_ngcontent-%COMP%] {\r\n  font-style:italic;\r\n  background-color: lightgray;\r\n}\r\n#P[_ngcontent-%COMP%] {\r\n  background-color: cornflowerblue;\r\n}\r\n.setitem[_ngcontent-%COMP%]:hover {\r\n  background-color:white;\r\n}\r\n.rowseq[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n}\r\n.rowtitle[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  margin-left: 3px;\r\n  margin-right: 10px;\r\n  width:40%;\r\n  min-width:40%;\r\n}\r\n.rowfirstline[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  margin-left: 3px;\r\n  margin-right: 10px;\r\n  width:46%;\r\n}\r\n.rowkey[_ngcontent-%COMP%] {\r\n  display:inline-flex;\r\n  width:3%;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width:45px;\r\n  margin-left:2px;\r\n}\r\n.setdatetitle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n.getSetContainer[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  height:10rem;\r\n  display:inline-flex;\r\n  background-color: white;\r\n}\r\n.leadFilter[_ngcontent-%COMP%] {\r\n  font-size: smaller;\r\n  width:15%;\r\n  background-color: aliceblue;\r\n}\r\n.mat-radio-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-size:12px;\r\n  flex-direction: column;\r\n  margin: 12px 12px;\r\n  align-items: flex-start;\r\n}\r\n.listSection[_ngcontent-%COMP%] {\r\n  border-left: 1px solid black;\r\n  width:100%;\r\n  overflow-y: scroll;\r\n}\r\n.listSection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n\r\n}\r\n.listSection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(221, 99, 130);\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1zb25ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTOztFQUVULDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGNBQWM7RUFDZCxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxXQUFXOztBQUViO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXOztBQUViO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsT0FBTztFQUNQLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLE9BQU87RUFDUCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic2Nyb2xsLXNvbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOjA7XHJcblxyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzBweCk7XHJcbn1cclxuLmNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4udGFibGVTZWN0aW9uIHtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBtaW4td2lkdGg6IDY1MHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmx5cmljc1NlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcclxuICB3aWR0aDoyNTBweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcclxuICAubHlyaWNzU2VjdGlvbiB7XHJcbiAgICB3aWR0aDowcHg7XHJcbiAgICBtaW4td2lkdGg6IDBweDtcclxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcGFkZGluZzowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDIsIDE3MiwgMjEyKTtcclxuICB3aWR0aDo2MzBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLndhaXRpbmcge1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hpbnB1dCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5kcm9wLWZpbHRlciB7XHJcbiAgaGVpZ2h0OjI4cHg7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtc2l6ZTpzbWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDYzMHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzoxcHg7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOi41cHg7XHJcbn1cclxudHIucGlja2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzODcxYWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZHJfUmVmIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjQwcHg7XHJcbn1cclxuLmNvbF9SZWZ7XHJcbiAgZm9udC1zaXplOnNtYWxsO1xyXG4gIGNvbG9yOiBkYXJrYmx1ZTtcclxuICB3aWR0aDo0MHB4O1xyXG59XHJcblxyXG4uaGRyX1RpdGxlIHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjI0NXB4O1xyXG5cclxufVxyXG4uY29sX1RpdGxlIHtcclxuICBtaW4td2lkdGg6MjQ1cHg7XHJcbiAgd2lkdGg6MjQ1cHg7XHJcbiAgbWF4LXdpZHRoOiAyNDVweDtcclxufVxyXG5cclxuLmhkcl9GaXJzdExpbmUge1xyXG4gIG1hcmdpbjowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6MjU1cHg7XHJcblxyXG59XHJcbi5jb2xfRmlyc3RMaW5lXHJcbntcclxuICBtaW4td2lkdGg6MjU1cHg7XHJcbiAgd2lkdGg6MjU1cHg7XHJcbiAgbWF4LXdpZHRoOiAyNTVweDtcclxufVxyXG5cclxuLmhkcl9LZXkge1xyXG4gIG1hcmdpbjowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6NDVweDtcclxufVxyXG5cclxuLmNvbF9LZXlcclxue1xyXG4gIHdpZHRoOjQ1cHg7XHJcbn1cclxuXHJcbi5zb3J0YWJsZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgb3ZlcmxpbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmx5cmljcyB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZpcnN0bGluZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLnNldFNlY3Rpb24ge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgLyogd2lkdGg6IGNhbGMoMTAwdncgLSA5NjBweCk7ICovXHJcbiAgd2lkdGg6MTAwJTtcclxuICBtaW4td2lkdGg6NTAwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6MnB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnNldEhlYWRlciB7XHJcbiAgaGVpZ2h0OjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbm5neC1zb3J0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uc2V0TGlzdCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnNldFNlcSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5TZXFUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBzdHJvbmc7XHJcbn1cclxuLnNlcUZpcnN0TGluZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG5cclxufVxyXG4uc2V0S2V5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5zZXRpdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZham93aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IC41cHg7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG59XHJcblxyXG4uc2V0Rm9vdGVyIHtcclxuICBoZWlnaHQ6MXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uY2xpcHBlZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBmb250LXNpemU6MTRweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBtYXJnaW46YXV0bztcclxuICBvdXRsaW5lLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuI0wge1xyXG4gIGhlaWdodDoxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4jTCAucm93c2VxIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDowO1xyXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4jVCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI1QgLnJvd3NlcSB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6MDtcclxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcclxufVxyXG4jWCB7XHJcbiAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiNQIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG4uc2V0aXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4ucm93c2VxIHtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG59XHJcbi5yb3d0aXRsZSB7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6NDAlO1xyXG4gIG1pbi13aWR0aDo0MCU7XHJcbn1cclxuLnJvd2ZpcnN0bGluZSB7XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6NDYlO1xyXG59XHJcbi5yb3drZXkge1xyXG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6MyU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOjQ1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MnB4O1xyXG59XHJcblxyXG4uc2V0ZGF0ZXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmdldFNldENvbnRhaW5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTByZW07XHJcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxlYWRGaWx0ZXIge1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB3aWR0aDoxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6MTJweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTJweCAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubGlzdFNlY3Rpb24ge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLmxpc3RTZWN0aW9uIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbi5saXN0U2VjdGlvbiBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgOTksIDEzMCk7XHJcbn1cclxuXHJcbnVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    5234:
    /*!****************************************************************!*\
      !*** ./src/app/set-context-menu/set-context-menu.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SetContextMenuComponent": function SetContextMenuComponent() {
          return (
            /* binding */
            _SetContextMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function SetContextMenuComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetContextMenuComponent_li_2_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var menuItem_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.outputSelectedMenuItem(menuItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "left.px": a0,
          "top.px": a1
        };
      };

      var _SetContextMenuComponent = /*#__PURE__*/function () {
        function _SetContextMenuComponent() {
          _classCallCheck(this, _SetContextMenuComponent);

          this.x = 0;
          this.y = 0;
          this.menuitems = '';
          this.index = 0;
          this.theMenuItems = [];
          this.menuItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_SetContextMenuComponent, [{
          key: "outputSelectedMenuItem",
          value: function outputSelectedMenuItem(menuitem) {
            this.menuItemSelected.emit(menuitem);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.theMenuItems = this.menuitems.split(';');
          }
        }]);

        return _SetContextMenuComponent;
      }();

      _SetContextMenuComponent.ɵfac = function SetContextMenuComponent_Factory(t) {
        return new (t || _SetContextMenuComponent)();
      };

      _SetContextMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SetContextMenuComponent,
        selectors: [["app-set-context-menu"]],
        inputs: {
          x: "x",
          y: "y",
          menuitems: "menuitems",
          index: "index"
        },
        outputs: {
          menuItemSelected: "menuItemSelected"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "menu", 3, "ngStyle"], [1, "list-group"], ["class", "list-group-item ngbButton", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ngbButton"], ["type", "button", 1, "ngbButtonLabel", 3, "click"]],
        template: function SetContextMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetContextMenuComponent_li_2_Template, 3, 1, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.x, ctx.y));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theMenuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: [".menu[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:auto;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:3px;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  padding:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1jb250ZXh0LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1giLCJmaWxlIjoic2V0LWNvbnRleHQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOmF1dG87XHJcbn1cclxuZGl2IHtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjNweDtcclxufVxyXG5saSB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    6129:
    /*!******************************!*\
      !*** ./src/app/set.model.ts ***!
      \******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RowData": function RowData() {
          return (
            /* binding */
            _RowData
          );
        }
        /* harmony export */

      });

      var _RowData = /*#__PURE__*/_createClass(function _RowData() {
        _classCallCheck(this, _RowData);
      });
      /***/

    },

    /***/
    848:
    /*!**************************************!*\
      !*** ./src/app/set/set.component.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SetComponent": function SetComponent() {
          return (
            /* binding */
            _SetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SetComponent = /*#__PURE__*/function () {
        function _SetComponent() {
          _classCallCheck(this, _SetComponent);
        }

        _createClass(_SetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SetComponent;
      }();

      _SetComponent.ɵfac = function SetComponent_Factory(t) {
        return new (t || _SetComponent)();
      };

      _SetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SetComponent,
        selectors: [["app-set"]],
        decls: 2,
        vars: 0,
        template: function SetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "set works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  float: left;\r\n  background-color: rgb(175, 238, 203);\r\n  border-style: dotted;\r\n  border-radius: 2px;\r\n  border-width: 1px;\r\n  color: green;\r\n  width: calc(100vw - 1463px);\r\n  height: calc(100vh - 3rem);\r\n  overflow:hidden;\r\n  margin: auto;\r\n  padding:3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjM4LCAyMDMpO1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNDYzcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzozcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    7751:
    /*!*********************************!*\
      !*** ./src/app/sets.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SetsService": function SetsService() {
          return (
            /* binding */
            _SetsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _SetsService = /*#__PURE__*/function () {
        function _SetsService(http, router) {
          _classCallCheck(this, _SetsService);

          this.http = http;
          this.router = router;
          this.sets = [];
          this.setsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_SetsService, [{
          key: "getSets",
          value: function getSets(leader) {
            var _this10 = this;

            var queryParams = "?Leader=".concat(leader);
            this.http.get('http://localhost:3000/api/sets' + queryParams).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (setData) {
              return setData.sets.map(function (set) {
                return {
                  Leader: set.Leader,
                  SetDate: set.SetDate,
                  setData: set.JsonSetRows
                };
              });
            })).subscribe(function (transformedSets) {
              _this10.sets = transformedSets;

              _this10.setsUpdated.next(_toConsumableArray(_this10.sets));
            });
          }
        }, {
          key: "getSet",
          value: function getSet(leader, setdate) {
            var _this11 = this;

            var queryParams = "?Leader=".concat(leader, "?SetDate=").concat(setdate);
            return this.http.get('http://localhost:3000/api/sets' + queryParams).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (SetData) {
              return SetData.sets.map(function (set) {
                return {
                  id: set._id,
                  Leader: set.Leader,
                  SetDate: set.SetDate,
                  SetRows: [{
                    SR_Type: set.Type,
                    SR_Title: set.Title,
                    SR_FirstLine: set.FirstLine,
                    SR_PaceGrp: set.PaceGrp,
                    SR_Ref: set.SongRef,
                    SR_MusicalKey: set.Key
                  }]
                };
              });
            })).subscribe(function (loadedSets) {
              _this11.sets = loadedSets;

              _this11.setsUpdated.next(_toConsumableArray(_this11.sets));
            });
          }
        }, {
          key: "getSetUpdateListener",
          value: function getSetUpdateListener() {
            return this.setsUpdated.asObservable();
          }
          /* below split to add parent + add children ??*/

          /*   addSet(
                    id: string,
                    leader: string,
                    SetDate: string,
                    setrows: SetRow[]
                  ) {
              const set: Set = {
                id: null,
                Leader: leader,
                SetDate: SetDate,
                SetRow: setrows
              };
              this.http
                .post<{message: string, setId: string }>(
                    'http://localhost:3000/api/sets', set
                    )
                .subscribe(responseData => {
                  // tslint:disable-next-line: no-shadowed-variable
                  const id = responseData.setId;
                  set.id = id;
                  this.sets.push(set);
                  this.setsUpdated.next([...this.sets]);
                });
              } */

        }, {
          key: "deleteSet",
          value: function deleteSet(setId) {
            var _this12 = this;

            this.http["delete"]('http://localhost:3000/api/sets/' + setId).subscribe(function () {
              var updatedsets = _this12.sets.filter(function (post) {
                return post.id !== setId;
              });

              _this12.sets = updatedsets;

              _this12.setsUpdated.next(_toConsumableArray(_this12.sets));
            });
          }
        }]);

        return _SetsService;
      }();

      _SetsService.ɵfac = function SetsService_Factory(t) {
        return new (t || _SetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _SetsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SetsService,
        factory: _SetsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8421:
    /*!**********************************!*\
      !*** ./src/app/songs.service.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SongsService": function SongsService() {
          return (
            /* binding */
            _SongsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _SongsService = /*#__PURE__*/function () {
        function _SongsService(http, router) {
          _classCallCheck(this, _SongsService);

          this.http = http;
          this.router = router;
          this.songs = [];
          this.songsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_SongsService, [{
          key: "getSongs",
          value: function getSongs(paceGrp, age, rating, find, sortField, sortDirection) {
            var _this13 = this;

            var queryParams = "?pace=".concat(paceGrp, "&age=").concat(age, "&rating=").concat(rating, "&find=").concat(find, "&sortField=").concat(sortField, "&sortDirection=").concat(sortDirection);
            this.http.get('http://localhost:3000/api/songs' + queryParams).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (songData) {
              return songData.songs.map(function (song) {
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
            })).subscribe(function (transformedSongs) {
              _this13.songs = transformedSongs;

              _this13.songsUpdated.next(_toConsumableArray(_this13.songs));
            });
          }
        }, {
          key: "getSong",
          value: function getSong(id) {
            var _this14 = this;

            return this.http.get('http://localhost:3000/api/songs').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (songData) {
              return songData.songs.map(function (song) {
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
            })).subscribe(function (loadedSongs) {
              _this14.songs = loadedSongs;

              _this14.songsUpdated.next(_toConsumableArray(_this14.songs));
            });
          }
        }, {
          key: "getSongUpdateListener",
          value: function getSongUpdateListener() {
            return this.songsUpdated.asObservable();
          }
        }, {
          key: "addSong",
          value: function addSong(id, songref, songtitle, firstline, lyrics, author, ccliref, copyright, pacegrp, rating, lastplay, musicalkey, tempo) {
            var _this15 = this;

            var song = {
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
            this.http.post('http://localhost:3000/api/songs', song).subscribe(function (responseData) {
              // tslint:disable-next-line: no-shadowed-variable
              var id = responseData.songId;
              song.id = id;

              _this15.songs.push(song);

              _this15.songsUpdated.next(_toConsumableArray(_this15.songs));
            });
          }
        }, {
          key: "deleteSong",
          value: function deleteSong(songId) {
            var _this16 = this;

            this.http["delete"]('http://localhost:3000/api/songs/' + songId).subscribe(function () {
              var updatedsongs = _this16.songs.filter(function (post) {
                return post.id !== songId;
              });

              _this16.songs = updatedsongs;

              _this16.songsUpdated.next(_toConsumableArray(_this16.songs));
            });
          }
        }]);

        return _SongsService;
      }();

      _SongsService.ɵfac = function SongsService_Factory(t) {
        return new (t || _SongsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _SongsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SongsService,
        factory: _SongsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map