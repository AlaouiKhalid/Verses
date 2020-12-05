function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet dir=\"rtl\"> </router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/souar/souar.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/souar/souar.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSouarSouarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  mat-button-toggle-group {\n    margin-left: 12px;\n  }\n\n  #display1 {\n    border-width: 15px;\n    background-color: rgb(255, 255, 255);\n    border-color: rgb(0, 0, 255);\n\n  }\n\n  #question1,\n  #question2 {\n    background-color: rgb(255, 255, 255);\n  }\n</style>\n<!-- <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"authService.isAuthenticated()\">\n\n\n  <div class=\"form-group form-search is-empty\">\n\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"search\" name=\"search\" #search=\"ngModel\"\n      ngModel=\"search\" (keyup)=\"searchField(search.value)\" ngModel />\n    <span class=\"material-input\"></span>\n  </div>\n  <div *ngIf=\"FinalResultsSearch.length > 0\">\n    <option style=\"cursor:pointer;\" *ngFor=\"let p of FinalResultsSearch\" [value]=\"p\"\n      (click)=\"sendtocomponent(p)\">\n      {{ p.type }} : {{ p.count }} Results\n    </option>\n  </div>\n\n\n</form> -->\n<div class=\"container\">\n\n  <button (click)=\"initiateRecording()\" id=\"start-btn\" class=\"btn btn-primary\" *ngIf=\"!recording\"> Start Recording\n  </button>\n  <button (click)=\"stopRecording()\" class=\"btn btn-danger\" *ngIf=\"recording\"> Stop Recording </button>\n  <div *ngIf=\"recordingaudio\">Recording ....</div>\n\n\n  <div class=\"clearfix\"></div>\n  <audio controls=\"\" *ngIf=\"url\">\n    <source [src]=\"sanitize(url)\" type=\"audio/wav\">\n  </audio>\n\n  <div id=\"question1\">\n\n    <!-- <div class=\"souar\">\n      <mat-form-field>\n        <mat-label>اختر السورة</mat-label>\n        <mat-select [(value)]=\"surah\">\n          <mat-option *ngFor=\"let s of getsa()\" [value]=\"s\">\n            {{ s }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div> -->\n\n    <!-- <div class=\"word\">\n      <mat-form-field>\n        <mat-label>uktub ..</mat-label>\n        <mat-i\n        \n      </mat-form-field>\n    </div> -->\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>type a word</mat-label>\n      <input matInput placeholder=\"Search by word\" #input2 [(ngModel)]='word'>\n    </mat-form-field>\n\n    <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n      <mat-button-toggle value=\"bold\" (click)=\"wordSearch(lang,word)\">go 2</mat-button-toggle>\n    </mat-button-toggle-group>\n\n  </div>\n  <div class=\"options\" id=\"question2\">\n    <div class=\"languages\">\n      <mat-form-field>\n        <mat-label>Choose a language</mat-label>\n        <mat-select [(value)]=\"lang\">\n          <mat-option *ngFor=\"let l of Languages\" [value]=\"l\">\n            {{ l }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"souar\">\n      <mat-form-field>\n        <mat-label>اختر السورة</mat-label>\n        <mat-select [(value)]=\"surah\">\n          <!---getsa()-->\n          <mat-option *ngFor=\"let s of souratInfo\" [value]=\"s.id\">\n            {{ s[\"nameArabic\"] }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"versets\">\n      <mat-form-field>\n        <mat-label>اختر الآية</mat-label>\n        <mat-select [(value)]=\"verse\">\n          <!--souratInfo[surah-1].versesCount-->\n          <mat-option *ngFor=\"let a of getva(nAyat[surah-1])\" [value]=\"a\">\n            {{ a }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n\n    <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n      <mat-button-toggle value=\"bold\" (click)=\"infoSearch(lang,surah,verse)\">go</mat-button-toggle>\n    </mat-button-toggle-group>\n  </div>\n\n  <div class=\"display\" *ngIf=\"VersesRes.length > 0\">\n\n    <div *ngFor=\"let verset of VersesRes\">\n      <!-- here for backfround-->\n      <div id=\"display1\">\n        <h3><b style=\"font-family:'Almarai', sans-serif\"> {{ verset[\"content\"] }}</b></h3>\n        <span id=\"verseImage\"><img src='{{getImageLink(verset[\"nSurah\"],verset[\"nAyah\"])}}'\n            width=\"100%\" height=\"100%\"></span><br>\n        <audio id=\"newMediaPlayer\" src='{{getMp3Link(verset[\"nSurah\"],verset[\"nAyah\"])}}'\n          controls=\"controls\"></audio>\n      </div>\n      <div id=\"nada\">\n        -------------Sourat: {{ souratInfo[verset[\"nSurah\"]-1][\"nameArabic\"] }}---revelationOrder:\n        {{ souratInfo[verset[\"nSurah\"]-1][\"revelationOrder\"] }}------revelationPlace:\n        {{ souratInfo[verset[\"nSurah\"]-1][\"revelationPlace\"] }}-----Verse:\n        {{verset[\"nAyah\"]}}----\n      </div>\n    </div>\n\n  </div>\n\n  <!-- <form class=\"form\" (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n    <div class=\"card-content\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">face</i>\n        </span>\n        <input  \n        type=\"text\" class=\"form-control\" placeholder=\"First Name...\" \n        name=\"inputName\" id=\"inputName\"\n        #inputName=\"ngModel\" \n        required\n        ngModel    \n        minlength=\"3\"             \n        />\n      </div>\n      <div  *ngIf=\"inputName.touched && !inputName.valid\"> \n        <span class=\"error\" *ngIf=\"inputName.errors.required\">First Name is required<br></span>\n        <span class=\"error\" *ngIf=\"inputName.errors.minlength\">First Name must be at least 3 characters</span>\n      </div>\n      \n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">email</i>\n        </span>\n\n        <input \n        type=\"email\" \n        class=\"form-control\" \n        placeholder=\"Email...\" \n        name=\"email\"  \n        id=\"email\" \n        #email=\"ngModel\" \n        required\n        email\n        ngModel\n        />\n      </div>\n\n      <div  *ngIf=\"email.touched && !email.valid\"> \n        <span class=\"error\" *ngIf=\"email.errors.required\">Email is required<br></span>\n        <span class=\"error\" *ngIf=\"email.errors.email\">Email must be a valid email address</span>\n      </div>\n\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n\n        <input \n        [type]=\"hide ? 'password' : 'text'\"\n        class=\"form-control\"\n        placeholder=\"password...\"\n        name=\"password\"\n        id=\"password\"\n        #password=\"ngModel\"\n        required  \n        pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"\n           ngModel  />\n      </div>\n      <div  *ngIf=\"password.touched && !password.valid\"> \n        <span class=\"error\" *ngIf=\"password.errors.required\">Password is required<br></span>\n        <span class=\"error\" *ngIf=\"password.errors.pattern\">Must contain at least one number,<br></span>\n        <span class=\"error\" *ngIf=\"password.errors.pattern\">one uppercase,one lowercase letter<br></span>\n        <span class=\"error\" *ngIf=\"password.errors.pattern\">and at least 8 or more characters.</span>\n      </div>    \n      \n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"material-icons\">lock_outline</i>\n        </span>\n        <input \n        [type]=\"hide ? 'password' : 'text'\"\n        class=\"form-control\"\n        placeholder=\"confirm password...\"\n        name=\"verifyPass\"\n        id=\"verifyPass\" \n        #verifyPass=\"ngModel\" \n        required \n        ngModel \n        pattern=\"{{ password.value }}\"\n        />\n      </div>\n      <div  *ngIf=\"verifyPass.touched && !verifyPass.valid\"> \n        <span class=\"error\" *ngIf=\"verifyPass.touched && !verifyPass.valid && verifyPass.errors.required\">Retype the password<br></span>\n        <span class=\"error\" *ngIf=\"verifyPass.touched && !verifyPass.valid && verifyPass.errors.pattern\">Does not match to the previous pattern</span>\n      </div>\n\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n              <i class=\"material-icons\">assignment</i>\n            </span>\n        <select\n        \n          id=\"selectype\"\n          name=\"selectype\"\n          class=\"form-control\"\n          ngModel='selectype'  \n          #selectype=\"ngModel\"\n          required                         \n          ngModel >\n\n          <option *ngFor=\"let type of participantTypes\" [value]=\"type\">\n            {{ type }}\n          </option>\n        </select>\n      </div>\n\n      <span class=\"error\" *ngIf=\"selectype.touched && selectype.invalid\"> \n          the type is required<br>\n      </span>\n\n      <input type=\"checkbox\"  name=\"term\" id=\"term\" #term=\"ngModel\"  ngModel required  />\n\n          I agree to the  <a href=\"#something\">terms and conditions</a>              \n\n    <div class=\"footer text-center\">\n      <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"f.invalid\">Get Started</button>\n    </div>\n\n  </div>\n  </form>-->\n\n</div>\n<!-- \n<script src=\"js/app.js\"></script>-->\n\n<script src=\"index.js\">Start</script>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _souar_souar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./souar/souar.component */
    "./src/app/souar/souar.component.ts");

    var routes = [{
      path: "",
      redirectTo: "/souar",
      pathMatch: "full"
    }, {
      path: "home",
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }, {
      path: "souar",
      component: _souar_souar_component__WEBPACK_IMPORTED_MODULE_4__["SouarComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "Quran Navigator";
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _verse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./verse.service */
    "./src/app/verse.service.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _souar_souar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./souar/souar.component */
    "./src/app/souar/souar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _souar_souar_component__WEBPACK_IMPORTED_MODULE_14__["SouarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      providers: [_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"], _verse_service__WEBPACK_IMPORTED_MODULE_1__["VerseService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/configuration.ts":
  /*!**********************************!*\
    !*** ./src/app/configuration.ts ***!
    \**********************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Configuration = //provides configurate to composer rest Server
    function Configuration() {
      _classCallCheck(this, Configuration);

      //localhost you have just to change to ip address
      this.ApiIP = "http://localhost"; //localhost
      //port for the  Api

      this.ApiPort = "3005"; //getting a sourat /lang

      this.ServerSourat = this.ApiIP + ":" + this.ApiPort + "/sourat"; //getting a verse in a sourat /lang

      this.ServerVerse = this.ApiIP + ":" + this.ApiPort + "/verse"; // a word(lang)

      this.ServerWord = this.ApiIP + ":" + this.ApiPort + "/searchword"; // a word(lang) in sourat

      this.ServerWordInSourat = this.ApiIP + ":" + this.ApiPort + "/searchwordinsourat";
    };

    Configuration = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() //provides configurate to composer rest Server
    ], Configuration);
    /***/
  },

  /***/
  "./src/app/souar/souar.component.css":
  /*!*******************************************!*\
    !*** ./src/app/souar/souar.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSouarSouarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  width: 600px;\r\n  margin: 50px auto;\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.display {\r\n  margin-top: 60px;\r\n  text-align: center;\r\n  line-height: 50px;\r\n}\r\n\r\na {\r\n  color: #337ab7;\r\n}\r\n\r\np {\r\n  margin-top: 1rem;\r\n}\r\n\r\na:hover {\r\n  color:#23527c;\r\n}\r\n\r\na:visited {\r\n  color: #8d75a3;\r\n}\r\n\r\nbody {\r\n\tline-height: 1.5;\r\n\tfont-family: sans-serif;\r\n\tword-wrap: break-word;\r\n\toverflow-wrap: break-word;\r\n\tcolor:black;\r\n\tmargin:2em;\r\n}\r\n\r\nh1 {\r\n\t-webkit-text-decoration: underline red;\r\n\t        text-decoration: underline red;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-underline-offset: 6px;\r\n\tfont-size: 220%;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh2 {\r\n\tfont-weight: bold;\r\n\tcolor: #005A9C;\r\n\tfont-size: 140%;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nred {\r\n\tcolor: red;\r\n}\r\n\r\n#controls {\r\n  display: flex;\r\n  margin-top: 2rem;\r\n  max-width: 28em;\r\n}\r\n\r\nbutton {\r\n  flex-grow: 1;\r\n  height: 3.5rem;\r\n  min-width: 2rem;\r\n  border: none;\r\n  border-radius: 0.15rem;\r\n  background: #ed341d;\r\n  margin-left: 2px;\r\n  box-shadow: inset 0 -0.15rem 0 rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color:#ffffff;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton:hover, button:focus {\r\n  outline: none;\r\n  background: #c72d1c;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n\r\nbutton:active {\r\n  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);\r\n  line-height: 3rem;\r\n}\r\n\r\nbutton:disabled {\r\n  pointer-events: none;\r\n  background: lightgray;\r\n}\r\n\r\nbutton:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\naudio {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#formats {\r\n  margin-top: 0.5rem;\r\n  font-size: 80%;\r\n}\r\n\r\n#recordingsList{\r\n\tmax-width: 28em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc291YXIvc291YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0Msc0NBQThCO1NBQTlCLDhCQUE4QjtDQUM5Qiw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zb3Vhci9zb3Vhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuXHJcbi5kaXNwbGF5IHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5hIHtcclxuICBjb2xvcjogIzMzN2FiNztcclxufVxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiMyMzUyN2M7XHJcbn1cclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogIzhkNzVhMztcclxufVxyXG5cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHRjb2xvcjpibGFjaztcclxuXHRtYXJnaW46MmVtO1xyXG59XHJcblxyXG5oMSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xyXG5cdHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcclxuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDZweDtcclxuXHRmb250LXNpemU6IDIyMCU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogIzAwNUE5QztcclxuXHRmb250LXNpemU6IDE0MCU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxucmVkIHtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBtYXgtd2lkdGg6IDI4ZW07XHJcbn0gXHJcblxyXG5idXR0b24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBtaW4td2lkdGg6IDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XHJcbiAgYmFja2dyb3VuZDogI2VkMzQxZDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTAuMTVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjojZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjYzcyZDFjO1xyXG59XHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcbmJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbmF1ZGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNmb3JtYXRzIHtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbiNyZWNvcmRpbmdzTGlzdHtcclxuXHRtYXgtd2lkdGg6IDI4ZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/souar/souar.component.ts":
  /*!******************************************!*\
    !*** ./src/app/souar/souar.component.ts ***!
    \******************************************/

  /*! exports provided: SouarComponent */

  /***/
  function srcAppSouarSouarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SouarComponent", function () {
      return SouarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _verse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../verse.service */
    "./src/app/verse.service.ts");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! recordrtc */
    "./node_modules/recordrtc/RecordRTC.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var _window = window,
        webkitSpeechRecognition = _window.webkitSpeechRecognition;

    var SouarComponent = /*#__PURE__*/function () {
      function SouarComponent(route, verseService, domSanitizer) {
        _classCallCheck(this, SouarComponent);

        this.route = route;
        this.verseService = verseService;
        this.domSanitizer = domSanitizer; //Will use this flag for detect recording

        this.recording = false;
        this.souratInfo = [{
          "id": 1,
          "chapterNumber": 1,
          "bismillahPre": false,
          "revelationOrder": 5,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Fātiĥah",
          "nameArabic": "الفاتحة",
          "nameSimple": "Al-Fatihah",
          "versesCount": 7,
          "pages": [1, 1],
          "translatedName": "The Opener"
        }, {
          "id": 2,
          "chapterNumber": 2,
          "bismillahPre": true,
          "revelationOrder": 87,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Baqarah",
          "nameArabic": "البقرة",
          "nameSimple": "Al-Baqarah",
          "versesCount": 286,
          "pages": [2, 49],
          "translatedName": "The Cow"
        }, {
          "id": 3,
          "chapterNumber": 3,
          "bismillahPre": true,
          "revelationOrder": 89,
          "revelationPlace": "madinah",
          "nameComplex": "Āli `Imrān",
          "nameArabic": "آل عمران",
          "nameSimple": "Ali 'Imran",
          "versesCount": 200,
          "pages": [50, 76],
          "translatedName": "Family of Imran"
        }, {
          "id": 4,
          "chapterNumber": 4,
          "bismillahPre": true,
          "revelationOrder": 92,
          "revelationPlace": "madinah",
          "nameComplex": "An-Nisā",
          "nameArabic": "النساء",
          "nameSimple": "An-Nisa",
          "versesCount": 176,
          "pages": [77, 106],
          "translatedName": "The Women"
        }, {
          "id": 5,
          "chapterNumber": 5,
          "bismillahPre": true,
          "revelationOrder": 112,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Mā'idah",
          "nameArabic": "المائدة",
          "nameSimple": "Al-Ma'idah",
          "versesCount": 120,
          "pages": [106, 127],
          "translatedName": "The Table Spread"
        }, {
          "id": 6,
          "chapterNumber": 6,
          "bismillahPre": true,
          "revelationOrder": 55,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'An`ām",
          "nameArabic": "الأنعام",
          "nameSimple": "Al-An'am",
          "versesCount": 165,
          "pages": [128, 150],
          "translatedName": "The Cattle"
        }, {
          "id": 7,
          "chapterNumber": 7,
          "bismillahPre": true,
          "revelationOrder": 39,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'A`rāf",
          "nameArabic": "الأعراف",
          "nameSimple": "Al-A'raf",
          "versesCount": 206,
          "pages": [151, 176],
          "translatedName": "The Heights"
        }, {
          "id": 8,
          "chapterNumber": 8,
          "bismillahPre": true,
          "revelationOrder": 88,
          "revelationPlace": "madinah",
          "nameComplex": "Al-'Anfāl",
          "nameArabic": "الأنفال",
          "nameSimple": "Al-Anfal",
          "versesCount": 75,
          "pages": [177, 186],
          "translatedName": "The Spoils of War"
        }, {
          "id": 9,
          "chapterNumber": 9,
          "bismillahPre": false,
          "revelationOrder": 113,
          "revelationPlace": "madinah",
          "nameComplex": "At-Tawbah",
          "nameArabic": "التوبة",
          "nameSimple": "At-Tawbah",
          "versesCount": 129,
          "pages": [187, 207],
          "translatedName": "The Repentance"
        }, {
          "id": 10,
          "chapterNumber": 10,
          "bismillahPre": true,
          "revelationOrder": 51,
          "revelationPlace": "makkah",
          "nameComplex": "Yūnus",
          "nameArabic": "يونس",
          "nameSimple": "Yunus",
          "versesCount": 109,
          "pages": [208, 221],
          "translatedName": "Jonah"
        }, {
          "id": 11,
          "chapterNumber": 11,
          "bismillahPre": true,
          "revelationOrder": 52,
          "revelationPlace": "makkah",
          "nameComplex": "Hūd",
          "nameArabic": "هود",
          "nameSimple": "Hud",
          "versesCount": 123,
          "pages": [221, 235],
          "translatedName": "Hud"
        }, {
          "id": 12,
          "chapterNumber": 12,
          "bismillahPre": true,
          "revelationOrder": 53,
          "revelationPlace": "makkah",
          "nameComplex": "Yūsuf",
          "nameArabic": "يوسف",
          "nameSimple": "Yusuf",
          "versesCount": 111,
          "pages": [235, 248],
          "translatedName": "Joseph"
        }, {
          "id": 13,
          "chapterNumber": 13,
          "bismillahPre": true,
          "revelationOrder": 96,
          "revelationPlace": "madinah",
          "nameComplex": "Ar-Ra`d",
          "nameArabic": "الرعد",
          "nameSimple": "Ar-Ra'd",
          "versesCount": 43,
          "pages": [249, 255],
          "translatedName": "The Thunder"
        }, {
          "id": 14,
          "chapterNumber": 14,
          "bismillahPre": true,
          "revelationOrder": 72,
          "revelationPlace": "makkah",
          "nameComplex": "Ibrāhīm",
          "nameArabic": "ابراهيم",
          "nameSimple": "Ibrahim",
          "versesCount": 52,
          "pages": [255, 261],
          "translatedName": "Abrahim"
        }, {
          "id": 15,
          "chapterNumber": 15,
          "bismillahPre": true,
          "revelationOrder": 54,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Ĥijr",
          "nameArabic": "الحجر",
          "nameSimple": "Al-Hijr",
          "versesCount": 99,
          "pages": [262, 267],
          "translatedName": "The Rocky Tract"
        }, {
          "id": 16,
          "chapterNumber": 16,
          "bismillahPre": true,
          "revelationOrder": 70,
          "revelationPlace": "makkah",
          "nameComplex": "An-Naĥl",
          "nameArabic": "النحل",
          "nameSimple": "An-Nahl",
          "versesCount": 128,
          "pages": [267, 281],
          "translatedName": "The Bee"
        }, {
          "id": 17,
          "chapterNumber": 17,
          "bismillahPre": true,
          "revelationOrder": 50,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Isrā",
          "nameArabic": "الإسراء",
          "nameSimple": "Al-Isra",
          "versesCount": 111,
          "pages": [282, 293],
          "translatedName": "The Night Journey"
        }, {
          "id": 18,
          "chapterNumber": 18,
          "bismillahPre": true,
          "revelationOrder": 69,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Kahf",
          "nameArabic": "الكهف",
          "nameSimple": "Al-Kahf",
          "versesCount": 110,
          "pages": [293, 304],
          "translatedName": "The Cave"
        }, {
          "id": 19,
          "chapterNumber": 19,
          "bismillahPre": true,
          "revelationOrder": 44,
          "revelationPlace": "makkah",
          "nameComplex": "Maryam",
          "nameArabic": "مريم",
          "nameSimple": "Maryam",
          "versesCount": 98,
          "pages": [305, 312],
          "translatedName": "Mary"
        }, {
          "id": 20,
          "chapterNumber": 20,
          "bismillahPre": true,
          "revelationOrder": 45,
          "revelationPlace": "makkah",
          "nameComplex": "Ţāhā",
          "nameArabic": "طه",
          "nameSimple": "Taha",
          "versesCount": 135,
          "pages": [312, 321],
          "translatedName": "Ta-Ha"
        }, {
          "id": 21,
          "chapterNumber": 21,
          "bismillahPre": true,
          "revelationOrder": 73,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Anbyā",
          "nameArabic": "الأنبياء",
          "nameSimple": "Al-Anbya",
          "versesCount": 112,
          "pages": [322, 331],
          "translatedName": "The Prophets"
        }, {
          "id": 22,
          "chapterNumber": 22,
          "bismillahPre": true,
          "revelationOrder": 103,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Ĥaj",
          "nameArabic": "الحج",
          "nameSimple": "Al-Haj",
          "versesCount": 78,
          "pages": [332, 341],
          "translatedName": "The Pilgrimage"
        }, {
          "id": 23,
          "chapterNumber": 23,
          "bismillahPre": true,
          "revelationOrder": 74,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Mu'minūn",
          "nameArabic": "المؤمنون",
          "nameSimple": "Al-Mu'minun",
          "versesCount": 118,
          "pages": [342, 349],
          "translatedName": "The Believers"
        }, {
          "id": 24,
          "chapterNumber": 24,
          "bismillahPre": true,
          "revelationOrder": 102,
          "revelationPlace": "madinah",
          "nameComplex": "An-Nūr",
          "nameArabic": "النور",
          "nameSimple": "An-Nur",
          "versesCount": 64,
          "pages": [350, 359],
          "translatedName": "The Light"
        }, {
          "id": 25,
          "chapterNumber": 25,
          "bismillahPre": true,
          "revelationOrder": 42,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Furqān",
          "nameArabic": "الفرقان",
          "nameSimple": "Al-Furqan",
          "versesCount": 77,
          "pages": [359, 366],
          "translatedName": "The Criterian"
        }, {
          "id": 26,
          "chapterNumber": 26,
          "bismillahPre": true,
          "revelationOrder": 47,
          "revelationPlace": "makkah",
          "nameComplex": "Ash-Shu`arā",
          "nameArabic": "الشعراء",
          "nameSimple": "Ash-Shu'ara",
          "versesCount": 227,
          "pages": [367, 376],
          "translatedName": "The Poets"
        }, {
          "id": 27,
          "chapterNumber": 27,
          "bismillahPre": true,
          "revelationOrder": 48,
          "revelationPlace": "makkah",
          "nameComplex": "An-Naml",
          "nameArabic": "النمل",
          "nameSimple": "An-Naml",
          "versesCount": 93,
          "pages": [377, 385],
          "translatedName": "The Ant"
        }, {
          "id": 28,
          "chapterNumber": 28,
          "bismillahPre": true,
          "revelationOrder": 49,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qaşaş",
          "nameArabic": "القصص",
          "nameSimple": "Al-Qasas",
          "versesCount": 88,
          "pages": [385, 396],
          "translatedName": "The Stories"
        }, {
          "id": 29,
          "chapterNumber": 29,
          "bismillahPre": true,
          "revelationOrder": 85,
          "revelationPlace": "makkah",
          "nameComplex": "Al-`Ankabūt",
          "nameArabic": "العنكبوت",
          "nameSimple": "Al-'Ankabut",
          "versesCount": 69,
          "pages": [396, 404],
          "translatedName": "The Spider"
        }, {
          "id": 30,
          "chapterNumber": 30,
          "bismillahPre": true,
          "revelationOrder": 84,
          "revelationPlace": "makkah",
          "nameComplex": "Ar-Rūm",
          "nameArabic": "الروم",
          "nameSimple": "Ar-Rum",
          "versesCount": 60,
          "pages": [404, 410],
          "translatedName": "The Romans"
        }, {
          "id": 31,
          "chapterNumber": 31,
          "bismillahPre": true,
          "revelationOrder": 57,
          "revelationPlace": "makkah",
          "nameComplex": "Luqmān",
          "nameArabic": "لقمان",
          "nameSimple": "Luqman",
          "versesCount": 34,
          "pages": [411, 414],
          "translatedName": "Luqman"
        }, {
          "id": 32,
          "chapterNumber": 32,
          "bismillahPre": true,
          "revelationOrder": 75,
          "revelationPlace": "makkah",
          "nameComplex": "As-Sajdah",
          "nameArabic": "السجدة",
          "nameSimple": "As-Sajdah",
          "versesCount": 30,
          "pages": [415, 417],
          "translatedName": "The Prostration"
        }, {
          "id": 33,
          "chapterNumber": 33,
          "bismillahPre": true,
          "revelationOrder": 90,
          "revelationPlace": "madinah",
          "nameComplex": "Al-'Aĥzāb",
          "nameArabic": "الأحزاب",
          "nameSimple": "Al-Ahzab",
          "versesCount": 73,
          "pages": [418, 427],
          "translatedName": "The Combined Forces"
        }, {
          "id": 34,
          "chapterNumber": 34,
          "bismillahPre": true,
          "revelationOrder": 58,
          "revelationPlace": "makkah",
          "nameComplex": "Saba",
          "nameArabic": "سبإ",
          "nameSimple": "Saba",
          "versesCount": 54,
          "pages": [428, 434],
          "translatedName": "Sheba"
        }, {
          "id": 35,
          "chapterNumber": 35,
          "bismillahPre": true,
          "revelationOrder": 43,
          "revelationPlace": "makkah",
          "nameComplex": "Fāţir",
          "nameArabic": "فاطر",
          "nameSimple": "Fatir",
          "versesCount": 45,
          "pages": [434, 440],
          "translatedName": "Originator"
        }, {
          "id": 36,
          "chapterNumber": 36,
          "bismillahPre": true,
          "revelationOrder": 41,
          "revelationPlace": "makkah",
          "nameComplex": "Yā-Sīn",
          "nameArabic": "يس",
          "nameSimple": "Ya-Sin",
          "versesCount": 83,
          "pages": [440, 445],
          "translatedName": "Ya Sin"
        }, {
          "id": 37,
          "chapterNumber": 37,
          "bismillahPre": true,
          "revelationOrder": 56,
          "revelationPlace": "makkah",
          "nameComplex": "Aş-Şāffāt",
          "nameArabic": "الصافات",
          "nameSimple": "As-Saffat",
          "versesCount": 182,
          "pages": [446, 452],
          "translatedName": "Those who set the Ranks"
        }, {
          "id": 38,
          "chapterNumber": 38,
          "bismillahPre": true,
          "revelationOrder": 38,
          "revelationPlace": "makkah",
          "nameComplex": "Şād",
          "nameArabic": "ص",
          "nameSimple": "Sad",
          "versesCount": 88,
          "pages": [453, 458],
          "translatedName": "The Letter \"Saad\""
        }, {
          "id": 39,
          "chapterNumber": 39,
          "bismillahPre": true,
          "revelationOrder": 59,
          "revelationPlace": "makkah",
          "nameComplex": "Az-Zumar",
          "nameArabic": "الزمر",
          "nameSimple": "Az-Zumar",
          "versesCount": 75,
          "pages": [458, 467],
          "translatedName": "The Troops"
        }, {
          "id": 40,
          "chapterNumber": 40,
          "bismillahPre": true,
          "revelationOrder": 60,
          "revelationPlace": "makkah",
          "nameComplex": "Ghāfir",
          "nameArabic": "غافر",
          "nameSimple": "Ghafir",
          "versesCount": 85,
          "pages": [467, 476],
          "translatedName": "The Forgiver"
        }, {
          "id": 41,
          "chapterNumber": 41,
          "bismillahPre": true,
          "revelationOrder": 61,
          "revelationPlace": "makkah",
          "nameComplex": "Fuşşilat",
          "nameArabic": "فصلت",
          "nameSimple": "Fussilat",
          "versesCount": 54,
          "pages": [477, 482],
          "translatedName": "Explained in Detail"
        }, {
          "id": 42,
          "chapterNumber": 42,
          "bismillahPre": true,
          "revelationOrder": 62,
          "revelationPlace": "makkah",
          "nameComplex": "Ash-Shūraá",
          "nameArabic": "الشورى",
          "nameSimple": "Ash-Shuraa",
          "versesCount": 53,
          "pages": [483, 489],
          "translatedName": "The Consultation"
        }, {
          "id": 43,
          "chapterNumber": 43,
          "bismillahPre": true,
          "revelationOrder": 63,
          "revelationPlace": "makkah",
          "nameComplex": "Az-Zukhruf",
          "nameArabic": "الزخرف",
          "nameSimple": "Az-Zukhruf",
          "versesCount": 89,
          "pages": [489, 495],
          "translatedName": "The Ornaments of Gold"
        }, {
          "id": 44,
          "chapterNumber": 44,
          "bismillahPre": true,
          "revelationOrder": 64,
          "revelationPlace": "makkah",
          "nameComplex": "Ad-Dukhān",
          "nameArabic": "الدخان",
          "nameSimple": "Ad-Dukhan",
          "versesCount": 59,
          "pages": [496, 498],
          "translatedName": "The Smoke"
        }, {
          "id": 45,
          "chapterNumber": 45,
          "bismillahPre": true,
          "revelationOrder": 65,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Jāthiyah",
          "nameArabic": "الجاثية",
          "nameSimple": "Al-Jathiyah",
          "versesCount": 37,
          "pages": [499, 502],
          "translatedName": "The Crouching"
        }, {
          "id": 46,
          "chapterNumber": 46,
          "bismillahPre": true,
          "revelationOrder": 66,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Aĥqāf",
          "nameArabic": "الأحقاف",
          "nameSimple": "Al-Ahqaf",
          "versesCount": 35,
          "pages": [502, 506],
          "translatedName": "The Wind-Curved Sandhills"
        }, {
          "id": 47,
          "chapterNumber": 47,
          "bismillahPre": true,
          "revelationOrder": 95,
          "revelationPlace": "madinah",
          "nameComplex": "Muĥammad",
          "nameArabic": "محمد",
          "nameSimple": "Muhammad",
          "versesCount": 38,
          "pages": [507, 510],
          "translatedName": "Muhammad"
        }, {
          "id": 48,
          "chapterNumber": 48,
          "bismillahPre": true,
          "revelationOrder": 111,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Fatĥ",
          "nameArabic": "الفتح",
          "nameSimple": "Al-Fath",
          "versesCount": 29,
          "pages": [511, 515],
          "translatedName": "The Victory"
        }, {
          "id": 49,
          "chapterNumber": 49,
          "bismillahPre": true,
          "revelationOrder": 106,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Ĥujurāt",
          "nameArabic": "الحجرات",
          "nameSimple": "Al-Hujurat",
          "versesCount": 18,
          "pages": [515, 517],
          "translatedName": "The Rooms"
        }, {
          "id": 50,
          "chapterNumber": 50,
          "bismillahPre": true,
          "revelationOrder": 34,
          "revelationPlace": "makkah",
          "nameComplex": "Qāf",
          "nameArabic": "ق",
          "nameSimple": "Qaf",
          "versesCount": 45,
          "pages": [518, 520],
          "translatedName": "The Letter \"Qaf\""
        }, {
          "id": 51,
          "chapterNumber": 51,
          "bismillahPre": true,
          "revelationOrder": 67,
          "revelationPlace": "makkah",
          "nameComplex": "Adh-Dhāriyāt",
          "nameArabic": "الذاريات",
          "nameSimple": "Adh-Dhariyat",
          "versesCount": 60,
          "pages": [520, 523],
          "translatedName": "The Winnowing Winds"
        }, {
          "id": 52,
          "chapterNumber": 52,
          "bismillahPre": true,
          "revelationOrder": 76,
          "revelationPlace": "makkah",
          "nameComplex": "Aţ-Ţūr",
          "nameArabic": "الطور",
          "nameSimple": "At-Tur",
          "versesCount": 49,
          "pages": [523, 525],
          "translatedName": "The Mount"
        }, {
          "id": 53,
          "chapterNumber": 53,
          "bismillahPre": true,
          "revelationOrder": 23,
          "revelationPlace": "makkah",
          "nameComplex": "An-Najm",
          "nameArabic": "النجم",
          "nameSimple": "An-Najm",
          "versesCount": 62,
          "pages": [526, 528],
          "translatedName": "The Star"
        }, {
          "id": 54,
          "chapterNumber": 54,
          "bismillahPre": true,
          "revelationOrder": 37,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qamar",
          "nameArabic": "القمر",
          "nameSimple": "Al-Qamar",
          "versesCount": 55,
          "pages": [528, 531],
          "translatedName": "The Moon"
        }, {
          "id": 55,
          "chapterNumber": 55,
          "bismillahPre": true,
          "revelationOrder": 97,
          "revelationPlace": "madinah",
          "nameComplex": "Ar-Raĥmān",
          "nameArabic": "الرحمن",
          "nameSimple": "Ar-Rahman",
          "versesCount": 78,
          "pages": [531, 534],
          "translatedName": "The Beneficent"
        }, {
          "id": 56,
          "chapterNumber": 56,
          "bismillahPre": true,
          "revelationOrder": 46,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Wāqi`ah",
          "nameArabic": "الواقعة",
          "nameSimple": "Al-Waqi'ah",
          "versesCount": 96,
          "pages": [534, 537],
          "translatedName": "The Inevitable"
        }, {
          "id": 57,
          "chapterNumber": 57,
          "bismillahPre": true,
          "revelationOrder": 94,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Ĥadīd",
          "nameArabic": "الحديد",
          "nameSimple": "Al-Hadid",
          "versesCount": 29,
          "pages": [537, 541],
          "translatedName": "The Iron"
        }, {
          "id": 58,
          "chapterNumber": 58,
          "bismillahPre": true,
          "revelationOrder": 105,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Mujādila",
          "nameArabic": "المجادلة",
          "nameSimple": "Al-Mujadila",
          "versesCount": 22,
          "pages": [542, 545],
          "translatedName": "The Pleading Woman"
        }, {
          "id": 59,
          "chapterNumber": 59,
          "bismillahPre": true,
          "revelationOrder": 101,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Ĥashr",
          "nameArabic": "الحشر",
          "nameSimple": "Al-Hashr",
          "versesCount": 24,
          "pages": [545, 548],
          "translatedName": "The Exile"
        }, {
          "id": 60,
          "chapterNumber": 60,
          "bismillahPre": true,
          "revelationOrder": 91,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Mumtaĥanah",
          "nameArabic": "الممتحنة",
          "nameSimple": "Al-Mumtahanah",
          "versesCount": 13,
          "pages": [549, 551],
          "translatedName": "She that is to be examined"
        }, {
          "id": 61,
          "chapterNumber": 61,
          "bismillahPre": true,
          "revelationOrder": 109,
          "revelationPlace": "madinah",
          "nameComplex": "Aş-Şaf",
          "nameArabic": "الصف",
          "nameSimple": "As-Saf",
          "versesCount": 14,
          "pages": [551, 552],
          "translatedName": "The Ranks"
        }, {
          "id": 62,
          "chapterNumber": 62,
          "bismillahPre": true,
          "revelationOrder": 110,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Jumu`ah",
          "nameArabic": "الجمعة",
          "nameSimple": "Al-Jumu'ah",
          "versesCount": 11,
          "pages": [553, 554],
          "translatedName": "The Congregation, Friday"
        }, {
          "id": 63,
          "chapterNumber": 63,
          "bismillahPre": true,
          "revelationOrder": 104,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Munāfiqūn",
          "nameArabic": "المنافقون",
          "nameSimple": "Al-Munafiqun",
          "versesCount": 11,
          "pages": [554, 555],
          "translatedName": "The Hypocrites"
        }, {
          "id": 64,
          "chapterNumber": 64,
          "bismillahPre": true,
          "revelationOrder": 108,
          "revelationPlace": "madinah",
          "nameComplex": "At-Taghābun",
          "nameArabic": "التغابن",
          "nameSimple": "At-Taghabun",
          "versesCount": 18,
          "pages": [556, 557],
          "translatedName": "The Mutual Disillusion"
        }, {
          "id": 65,
          "chapterNumber": 65,
          "bismillahPre": true,
          "revelationOrder": 99,
          "revelationPlace": "madinah",
          "nameComplex": "Aţ-Ţalāq",
          "nameArabic": "الطلاق",
          "nameSimple": "At-Talaq",
          "versesCount": 12,
          "pages": [558, 559],
          "translatedName": "The Divorce"
        }, {
          "id": 66,
          "chapterNumber": 66,
          "bismillahPre": true,
          "revelationOrder": 107,
          "revelationPlace": "madinah",
          "nameComplex": "At-Taĥrīm",
          "nameArabic": "التحريم",
          "nameSimple": "At-Tahrim",
          "versesCount": 12,
          "pages": [560, 561],
          "translatedName": "The Prohibtiion"
        }, {
          "id": 67,
          "chapterNumber": 67,
          "bismillahPre": true,
          "revelationOrder": 77,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Mulk",
          "nameArabic": "الملك",
          "nameSimple": "Al-Mulk",
          "versesCount": 30,
          "pages": [562, 564],
          "translatedName": "The Sovereignty"
        }, {
          "id": 68,
          "chapterNumber": 68,
          "bismillahPre": true,
          "revelationOrder": 2,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qalam",
          "nameArabic": "القلم",
          "nameSimple": "Al-Qalam",
          "versesCount": 52,
          "pages": [564, 566],
          "translatedName": "The Pen"
        }, {
          "id": 69,
          "chapterNumber": 69,
          "bismillahPre": true,
          "revelationOrder": 78,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Ĥāqqah",
          "nameArabic": "الحاقة",
          "nameSimple": "Al-Haqqah",
          "versesCount": 52,
          "pages": [566, 568],
          "translatedName": "The Reality"
        }, {
          "id": 70,
          "chapterNumber": 70,
          "bismillahPre": true,
          "revelationOrder": 79,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Ma`ārij",
          "nameArabic": "المعارج",
          "nameSimple": "Al-Ma'arij",
          "versesCount": 44,
          "pages": [568, 570],
          "translatedName": "The Ascending Stairways"
        }, {
          "id": 71,
          "chapterNumber": 71,
          "bismillahPre": true,
          "revelationOrder": 71,
          "revelationPlace": "makkah",
          "nameComplex": "Nūĥ",
          "nameArabic": "نوح",
          "nameSimple": "Nuh",
          "versesCount": 28,
          "pages": [570, 571],
          "translatedName": "Noah"
        }, {
          "id": 72,
          "chapterNumber": 72,
          "bismillahPre": true,
          "revelationOrder": 40,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Jinn",
          "nameArabic": "الجن",
          "nameSimple": "Al-Jinn",
          "versesCount": 28,
          "pages": [572, 573],
          "translatedName": "The Jinn"
        }, {
          "id": 73,
          "chapterNumber": 73,
          "bismillahPre": true,
          "revelationOrder": 3,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Muzzammil",
          "nameArabic": "المزمل",
          "nameSimple": "Al-Muzzammil",
          "versesCount": 20,
          "pages": [574, 575],
          "translatedName": "The Enshrouded One"
        }, {
          "id": 74,
          "chapterNumber": 74,
          "bismillahPre": true,
          "revelationOrder": 4,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Muddaththir",
          "nameArabic": "المدثر",
          "nameSimple": "Al-Muddaththir",
          "versesCount": 56,
          "pages": [575, 577],
          "translatedName": "The Cloaked One"
        }, {
          "id": 75,
          "chapterNumber": 75,
          "bismillahPre": true,
          "revelationOrder": 31,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qiyāmah",
          "nameArabic": "القيامة",
          "nameSimple": "Al-Qiyamah",
          "versesCount": 40,
          "pages": [577, 578],
          "translatedName": "The Resurrection"
        }, {
          "id": 76,
          "chapterNumber": 76,
          "bismillahPre": true,
          "revelationOrder": 98,
          "revelationPlace": "madinah",
          "nameComplex": "Al-'Insān",
          "nameArabic": "الانسان",
          "nameSimple": "Al-Insan",
          "versesCount": 31,
          "pages": [578, 580],
          "translatedName": "The Man"
        }, {
          "id": 77,
          "chapterNumber": 77,
          "bismillahPre": true,
          "revelationOrder": 33,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Mursalāt",
          "nameArabic": "المرسلات",
          "nameSimple": "Al-Mursalat",
          "versesCount": 50,
          "pages": [580, 581],
          "translatedName": "The Emissaries"
        }, {
          "id": 78,
          "chapterNumber": 78,
          "bismillahPre": true,
          "revelationOrder": 80,
          "revelationPlace": "makkah",
          "nameComplex": "An-Naba",
          "nameArabic": "النبإ",
          "nameSimple": "An-Naba",
          "versesCount": 40,
          "pages": [582, 583],
          "translatedName": "The Tidings"
        }, {
          "id": 79,
          "chapterNumber": 79,
          "bismillahPre": true,
          "revelationOrder": 81,
          "revelationPlace": "makkah",
          "nameComplex": "An-Nāzi`āt",
          "nameArabic": "النازعات",
          "nameSimple": "An-Nazi'at",
          "versesCount": 46,
          "pages": [583, 584],
          "translatedName": "Those who drag forth"
        }, {
          "id": 80,
          "chapterNumber": 80,
          "bismillahPre": true,
          "revelationOrder": 24,
          "revelationPlace": "makkah",
          "nameComplex": "`Abasa",
          "nameArabic": "عبس",
          "nameSimple": "'Abasa",
          "versesCount": 42,
          "pages": [585, 585],
          "translatedName": "He Frowned"
        }, {
          "id": 81,
          "chapterNumber": 81,
          "bismillahPre": true,
          "revelationOrder": 7,
          "revelationPlace": "makkah",
          "nameComplex": "At-Takwīr",
          "nameArabic": "التكوير",
          "nameSimple": "At-Takwir",
          "versesCount": 29,
          "pages": [586, 586],
          "translatedName": "The Overthrowing"
        }, {
          "id": 82,
          "chapterNumber": 82,
          "bismillahPre": true,
          "revelationOrder": 82,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Infiţār",
          "nameArabic": "الإنفطار",
          "nameSimple": "Al-Infitar",
          "versesCount": 19,
          "pages": [587, 587],
          "translatedName": "The Cleaving"
        }, {
          "id": 83,
          "chapterNumber": 83,
          "bismillahPre": true,
          "revelationOrder": 86,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Muţaffifīn",
          "nameArabic": "المطففين",
          "nameSimple": "Al-Mutaffifin",
          "versesCount": 36,
          "pages": [587, 589],
          "translatedName": "The Defrauding"
        }, {
          "id": 84,
          "chapterNumber": 84,
          "bismillahPre": true,
          "revelationOrder": 83,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Inshiqāq",
          "nameArabic": "الإنشقاق",
          "nameSimple": "Al-Inshiqaq",
          "versesCount": 25,
          "pages": [589, 589],
          "translatedName": "The Sundering"
        }, {
          "id": 85,
          "chapterNumber": 85,
          "bismillahPre": true,
          "revelationOrder": 27,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Burūj",
          "nameArabic": "البروج",
          "nameSimple": "Al-Buruj",
          "versesCount": 22,
          "pages": [590, 590],
          "translatedName": "The Mansions of the Stars"
        }, {
          "id": 86,
          "chapterNumber": 86,
          "bismillahPre": true,
          "revelationOrder": 36,
          "revelationPlace": "makkah",
          "nameComplex": "Aţ-Ţāriq",
          "nameArabic": "الطارق",
          "nameSimple": "At-Tariq",
          "versesCount": 17,
          "pages": [591, 591],
          "translatedName": "The Nightcommer"
        }, {
          "id": 87,
          "chapterNumber": 87,
          "bismillahPre": true,
          "revelationOrder": 8,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'A`lá",
          "nameArabic": "الأعلى",
          "nameSimple": "Al-A'la",
          "versesCount": 19,
          "pages": [591, 592],
          "translatedName": "The Most High"
        }, {
          "id": 88,
          "chapterNumber": 88,
          "bismillahPre": true,
          "revelationOrder": 68,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Ghāshiyah",
          "nameArabic": "الغاشية",
          "nameSimple": "Al-Ghashiyah",
          "versesCount": 26,
          "pages": [592, 592],
          "translatedName": "The Overwhelming"
        }, {
          "id": 89,
          "chapterNumber": 89,
          "bismillahPre": true,
          "revelationOrder": 10,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Fajr",
          "nameArabic": "الفجر",
          "nameSimple": "Al-Fajr",
          "versesCount": 30,
          "pages": [593, 594],
          "translatedName": "The Dawn"
        }, {
          "id": 90,
          "chapterNumber": 90,
          "bismillahPre": true,
          "revelationOrder": 35,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Balad",
          "nameArabic": "البلد",
          "nameSimple": "Al-Balad",
          "versesCount": 20,
          "pages": [594, 594],
          "translatedName": "The City"
        }, {
          "id": 91,
          "chapterNumber": 91,
          "bismillahPre": true,
          "revelationOrder": 26,
          "revelationPlace": "makkah",
          "nameComplex": "Ash-Shams",
          "nameArabic": "الشمس",
          "nameSimple": "Ash-Shams",
          "versesCount": 15,
          "pages": [595, 595],
          "translatedName": "The Sun"
        }, {
          "id": 92,
          "chapterNumber": 92,
          "bismillahPre": true,
          "revelationOrder": 9,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Layl",
          "nameArabic": "الليل",
          "nameSimple": "Al-Layl",
          "versesCount": 21,
          "pages": [595, 596],
          "translatedName": "The Night"
        }, {
          "id": 93,
          "chapterNumber": 93,
          "bismillahPre": true,
          "revelationOrder": 11,
          "revelationPlace": "makkah",
          "nameComplex": "Ađ-Đuĥaá",
          "nameArabic": "الضحى",
          "nameSimple": "Ad-Duhaa",
          "versesCount": 11,
          "pages": [596, 596],
          "translatedName": "The Morning Hours"
        }, {
          "id": 94,
          "chapterNumber": 94,
          "bismillahPre": true,
          "revelationOrder": 12,
          "revelationPlace": "makkah",
          "nameComplex": "Ash-Sharĥ",
          "nameArabic": "الشرح",
          "nameSimple": "Ash-Sharh",
          "versesCount": 8,
          "pages": [596, 596],
          "translatedName": "The Relief"
        }, {
          "id": 95,
          "chapterNumber": 95,
          "bismillahPre": true,
          "revelationOrder": 28,
          "revelationPlace": "makkah",
          "nameComplex": "At-Tīn",
          "nameArabic": "التين",
          "nameSimple": "At-Tin",
          "versesCount": 8,
          "pages": [597, 597],
          "translatedName": "The Fig"
        }, {
          "id": 96,
          "chapterNumber": 96,
          "bismillahPre": true,
          "revelationOrder": 1,
          "revelationPlace": "makkah",
          "nameComplex": "Al-`Alaq",
          "nameArabic": "العلق",
          "nameSimple": "Al-'Alaq",
          "versesCount": 19,
          "pages": [597, 597],
          "translatedName": "The Clot"
        }, {
          "id": 97,
          "chapterNumber": 97,
          "bismillahPre": true,
          "revelationOrder": 25,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qadr",
          "nameArabic": "القدر",
          "nameSimple": "Al-Qadr",
          "versesCount": 5,
          "pages": [598, 598],
          "translatedName": "The Power"
        }, {
          "id": 98,
          "chapterNumber": 98,
          "bismillahPre": true,
          "revelationOrder": 100,
          "revelationPlace": "madinah",
          "nameComplex": "Al-Bayyinah",
          "nameArabic": "البينة",
          "nameSimple": "Al-Bayyinah",
          "versesCount": 8,
          "pages": [598, 599],
          "translatedName": "The Clear Proof"
        }, {
          "id": 99,
          "chapterNumber": 99,
          "bismillahPre": true,
          "revelationOrder": 93,
          "revelationPlace": "madinah",
          "nameComplex": "Az-Zalzalah",
          "nameArabic": "الزلزلة",
          "nameSimple": "Az-Zalzalah",
          "versesCount": 8,
          "pages": [599, 599],
          "translatedName": "The Earthquake"
        }, {
          "id": 100,
          "chapterNumber": 100,
          "bismillahPre": true,
          "revelationOrder": 14,
          "revelationPlace": "makkah",
          "nameComplex": "Al-`Ādiyāt",
          "nameArabic": "العاديات",
          "nameSimple": "Al-'Adiyat",
          "versesCount": 11,
          "pages": [599, 600],
          "translatedName": "The Courser"
        }, {
          "id": 101,
          "chapterNumber": 101,
          "bismillahPre": true,
          "revelationOrder": 30,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Qāri`ah",
          "nameArabic": "القارعة",
          "nameSimple": "Al-Qari'ah",
          "versesCount": 11,
          "pages": [600, 600],
          "translatedName": "The Calamity"
        }, {
          "id": 102,
          "chapterNumber": 102,
          "bismillahPre": true,
          "revelationOrder": 16,
          "revelationPlace": "makkah",
          "nameComplex": "At-Takāthur",
          "nameArabic": "التكاثر",
          "nameSimple": "At-Takathur",
          "versesCount": 8,
          "pages": [600, 600],
          "translatedName": "The Rivalry in world increase"
        }, {
          "id": 103,
          "chapterNumber": 103,
          "bismillahPre": true,
          "revelationOrder": 13,
          "revelationPlace": "makkah",
          "nameComplex": "Al-`Aşr",
          "nameArabic": "العصر",
          "nameSimple": "Al-'Asr",
          "versesCount": 3,
          "pages": [601, 601],
          "translatedName": "The Declining Day"
        }, {
          "id": 104,
          "chapterNumber": 104,
          "bismillahPre": true,
          "revelationOrder": 32,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Humazah",
          "nameArabic": "الهمزة",
          "nameSimple": "Al-Humazah",
          "versesCount": 9,
          "pages": [601, 601],
          "translatedName": "The Traducer"
        }, {
          "id": 105,
          "chapterNumber": 105,
          "bismillahPre": true,
          "revelationOrder": 19,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Fīl",
          "nameArabic": "الفيل",
          "nameSimple": "Al-Fil",
          "versesCount": 5,
          "pages": [601, 601],
          "translatedName": "The Elephant"
        }, {
          "id": 106,
          "chapterNumber": 106,
          "bismillahPre": true,
          "revelationOrder": 29,
          "revelationPlace": "makkah",
          "nameComplex": "Quraysh",
          "nameArabic": "قريش",
          "nameSimple": "Quraysh",
          "versesCount": 4,
          "pages": [602, 602],
          "translatedName": "Quraysh"
        }, {
          "id": 107,
          "chapterNumber": 107,
          "bismillahPre": true,
          "revelationOrder": 17,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Mā`ūn",
          "nameArabic": "الماعون",
          "nameSimple": "Al-Ma'un",
          "versesCount": 7,
          "pages": [602, 602],
          "translatedName": "The Small Kindesses"
        }, {
          "id": 108,
          "chapterNumber": 108,
          "bismillahPre": true,
          "revelationOrder": 15,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Kawthar",
          "nameArabic": "الكوثر",
          "nameSimple": "Al-Kawthar",
          "versesCount": 3,
          "pages": [602, 602],
          "translatedName": "The Abundance"
        }, {
          "id": 109,
          "chapterNumber": 109,
          "bismillahPre": true,
          "revelationOrder": 18,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Kāfirūn",
          "nameArabic": "الكافرون",
          "nameSimple": "Al-Kafirun",
          "versesCount": 6,
          "pages": [603, 603],
          "translatedName": "The Disbelievers"
        }, {
          "id": 110,
          "chapterNumber": 110,
          "bismillahPre": true,
          "revelationOrder": 114,
          "revelationPlace": "madinah",
          "nameComplex": "An-Naşr",
          "nameArabic": "النصر",
          "nameSimple": "An-Nasr",
          "versesCount": 3,
          "pages": [603, 603],
          "translatedName": "The Divine Support"
        }, {
          "id": 111,
          "chapterNumber": 111,
          "bismillahPre": true,
          "revelationOrder": 6,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Masad",
          "nameArabic": "المسد",
          "nameSimple": "Al-Masad",
          "versesCount": 5,
          "pages": [603, 603],
          "translatedName": "The Palm Fiber"
        }, {
          "id": 112,
          "chapterNumber": 112,
          "bismillahPre": true,
          "revelationOrder": 22,
          "revelationPlace": "makkah",
          "nameComplex": "Al-'Ikhlāş",
          "nameArabic": "الإخلاص",
          "nameSimple": "Al-Ikhlas",
          "versesCount": 4,
          "pages": [604, 604],
          "translatedName": "The Sincerity"
        }, {
          "id": 113,
          "chapterNumber": 113,
          "bismillahPre": true,
          "revelationOrder": 20,
          "revelationPlace": "makkah",
          "nameComplex": "Al-Falaq",
          "nameArabic": "الفلق",
          "nameSimple": "Al-Falaq",
          "versesCount": 5,
          "pages": [604, 604],
          "translatedName": "The Daybreak"
        }, {
          "id": 114,
          "chapterNumber": 114,
          "bismillahPre": true,
          "revelationOrder": 21,
          "revelationPlace": "makkah",
          "nameComplex": "An-Nās",
          "nameArabic": "الناس",
          "nameSimple": "An-Nas",
          "versesCount": 6,
          "pages": [604, 604],
          "translatedName": "The Mankind"
        }];
        this.nAyat = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]; // 21Lanaguages

        this.Languages = ["Original_Arabic", "Chinese", "French", "engyusufali", "Persian", "Japanese", "Norwegian", "Bangla", "Malayalam", "Dutch", "Urdu", "Turkish", "Italian-Piccardo", "Russian", "Portuguese", "Swedish", "German", "Tamil", "Uzbek", "Indonesian", "Korean"];
        this.Fonts = [];
        this.VersesRes = [];
        this.recognition = new webkitSpeechRecognition();
      }

      _createClass(SouarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.VersesRes = []; //the array of sourat index

          this.sa = this.getsa();
          this.recognition.continuous = true;
          this.recognition.lang = "ar-MA";
          /* "en-US"*/

          this.recognition.interimResults = false;
          this.recognition.maxAlternatives = 1;
        }
      }, {
        key: "getsa",
        value: function getsa() {
          var x = [];
          var i;

          for (i = 1; i <= 114; i++) {
            x.push(i);
          }

          return x;
        }
      }, {
        key: "getva",
        value: function getva(n) {
          //this.souratInfo[n]["versesCount"]
          var x = [];
          var i;
          x.push("all");

          for (i = 1; i <= n; i++) {
            x.push(i);
          }

          return x;
        }
      }, {
        key: "getImageLink",
        value: function getImageLink(a, b) {
          /*https://everyayah.com/data/images_png/2_12.png */
          return "https://everyayah.com/data/images_png/" + a + "_" + b + ".png";
        }
      }, {
        key: "getMp3Link",
        value: function getMp3Link(a, b) {
          /*https://everyayah.com/data/Ghamadi_40kbps/114002.mp3*/
          a = a.toString();
          b = b.toString();

          while (a.length < 3) {
            a = "0" + a;
          }

          while (b.length < 3) {
            b = "0" + b;
          }

          return "https://everyayah.com/data/Ghamadi_40kbps/" + a + b + ".mp3";
        }
      }, {
        key: "infoSearch",
        value: function infoSearch(lang, surah, verse) {
          var _this = this;

          this.VersesRes = [];

          if (verse && lang && verse) {
            if (verse == "all") {
              this.verseService.getSourat(lang + "-" + surah).subscribe(function (objs) {
                _this.VersesRes = objs;
              });
            } else {
              this.verseService.getVerse(lang + "-" + surah + "-" + verse).subscribe(function (objs) {
                _this.VersesRes.push(objs[0]);
              });
            }
          } else {
            this.VersesRes = [];
          }
        }
      }, {
        key: "wordSearch",
        value: function wordSearch(lang, word) {
          var _this2 = this;

          console.log("word", word);
          console.log("lang", lang);
          this.VersesRes = [];

          if (word != "") {
            this.verseService.searchWord(lang + "-" + word).subscribe(function (objs) {
              _this2.VersesRes = objs;
            });
          }
          /*, surah  if (word!="" && surah) {
            this.verseService.searchWordInSourat(lang + "-" + surah + "-" + word).subscribe(objs => {
              this.VersesRes = objs;
            });
          }
          else {
            
          } */

        }
      }, {
        key: "sanitize",
        value: function sanitize(url) {
          return this.domSanitizer.bypassSecurityTrustUrl(url);
        }
        /**
         * Start recording.
         */

      }, {
        key: "initiateRecording",
        value: function initiateRecording() {
          this.url = null;
          this.recording = true;
          var mediaConstraints = {
            video: false,
            audio: true
          };
          navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
          this.recognition.start();

          this.recognition.onresult = function (e) {
            var transcript = e.results[e.results.length - 1][0].transcript.trim();
            console.log(transcript);
          };
        }
      }, {
        key: "successCallback",
        value: function successCallback(stream) {
          var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1
          }; //Start Actuall Recording

          var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_4__["StereoAudioRecorder"];
          this.record = new StereoAudioRecorder(stream, options);
          this.record.record();
        }
        /**
         * Stop recording.
         */

      }, {
        key: "stopRecording",
        value: function stopRecording() {
          this.recording = false;
          this.recordingaudio = false;
          this.record.stop(this.processRecording.bind(this));
          this.recognition.stop();
        }
        /**
         * processRecording Do what ever you want with blob
         * @param  {any} blob Blog
         */

      }, {
        key: "processRecording",
        value: function processRecording(blob) {
          this.url = URL.createObjectURL(blob);
        }
        /**
         * Process Error.
         */

      }, {
        key: "errorCallback",
        value: function errorCallback(error) {
          this.error = 'Can not play audio in your browser';
        }
      }]);

      return SouarComponent;
    }();

    SouarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _verse_service__WEBPACK_IMPORTED_MODULE_3__["VerseService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    SouarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-souar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./souar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/souar/souar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./souar.component.css */
      "./src/app/souar/souar.component.css"))["default"]]
    })], SouarComponent);
    /***/
  },

  /***/
  "./src/app/verse.service.ts":
  /*!**********************************!*\
    !*** ./src/app/verse.service.ts ***!
    \**********************************/

  /*! exports provided: VerseService */

  /***/
  function srcAppVerseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerseService", function () {
      return VerseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/configuration.ts");

    var VerseService = /*#__PURE__*/function () {
      function VerseService(HttpClient, _configuration) {
        _classCallCheck(this, VerseService);

        this.HttpClient = HttpClient;
        this._configuration = _configuration; //Notifications

        this.from = 'top';
        this.align = 'right';
        this.successMessage = 'Check Transaction Successful... ';
        this.failMessage = 'Sorry, you are authorized to perform the current transaction - please check with the app admin';
        this.resolveSuffix = '?resolve=true';
        this.ServerSourat = _configuration.ServerSourat;
        this.ServerVerse = _configuration.ServerVerse;
        this.ServerWord = _configuration.ServerWord;
        this.ServerWordInSourat = _configuration.ServerWordInSourat;
      }

      _createClass(VerseService, [{
        key: "getSourat",
        value: function getSourat(id) {
          return this.HttpClient.get(this.ServerSourat + '/' + id, {
            withCredentials: false
          });
        }
      }, {
        key: "getVerse",
        value: function getVerse(id) {
          return this.HttpClient.get(this.ServerVerse + '/' + id, {
            withCredentials: false
          });
        }
      }, {
        key: "searchWord",
        value: function searchWord(id) {
          return this.HttpClient.get(this.ServerWord + '/' + id, {
            withCredentials: false
          });
        }
      }, {
        key: "searchWordInSourat",
        value: function searchWordInSourat(id) {
          return this.HttpClient.get(this.ServerWordInSourat + '/' + id, {
            withCredentials: false
          });
        }
      }]);

      return VerseService;
    }();

    VerseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]
      }];
    };

    VerseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], VerseService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Pc\Desktop\Nouveau dossier\Verses\quran-navigator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map