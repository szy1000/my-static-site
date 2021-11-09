(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(38);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(40);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(17);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(13);

var _helpers = __webpack_require__(41);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(37)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(13);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(39)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, "sss");
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/components/Router.js
var Router = __webpack_require__(5);

// CONCATENATED MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/components/header/style.less
var style = __webpack_require__(49);

// CONCATENATED MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/components/header/index.jsx




var header_Header = function Header(props) {
  var pathname = '/';

  if (typeof window !== "undefined") {
    var _window;

    pathname = (_window = window) === null || _window === void 0 ? void 0 : _window.location.pathname;
  }

  console.log('header==>', pathname);
  var mapUrl = [{
    name: '首页',
    url: '/'
  }, {
    name: 'News',
    url: '/news/'
  }, {
    name: 'About',
    url: '/about/'
  }, {
    name: 'Blog',
    url: '/blog'
  }, {
    name: 'Test',
    url: '/test/'
  }, {
    name: 'Dynamic',
    url: '/dynamic'
  }];
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: __webpack_require__(50),
    alt: ""
  }))), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "menu"
  }, mapUrl.map(function (v) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      className: pathname === v.url ? 'active' : '',
      key: v.url
    }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
      to: v.url,
      className: "v1"
    }, v.name), pathname === v.url ? 'active' : 'no');
  })));
};

/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/assets/css/reset.css
var css_reset = __webpack_require__(51);

// EXTERNAL MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/app.css
var app = __webpack_require__(52);

// CONCATENATED MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/App.js

 //





 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App(props) {
  console.log(props);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(header, null), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(8);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("/Users/shenzhiyong/Desktop/my-static-site/node_modules/react-static/lib/browser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import Home from './index'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "sss", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "wwww"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "This is my page title!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);

 // import {Button} from 'antd-mobile'



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "This is my test title!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.test
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [16, 16]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 8
  }, "col-8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 8
  }, "col-8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 8
  }, "col-8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "sss")));
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/components/banner/style.less
var style = __webpack_require__(53);

// CONCATENATED MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/components/banner/index.jsx



var banner_Banner = function Banner() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  console.log(props);
  var title = props.title,
      bg = props.bg;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "banner",
    style: {
      backgroundImage: "url(".concat(bg, ")")
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "banner-wrapper container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "banner-aside"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "banner-aside-title"
  }, title), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "banner-aside-more"
  }, "\u4E86\u89E3\u66F4\u591A")), /*#__PURE__*/external_react_default.a.createElement("div", null, props.children)));
};

/* harmony default export */ var banner = (banner_Banner);
// CONCATENATED MODULE: /Users/shenzhiyong/Desktop/my-static-site/src/pages/about/index.js



var about_About = function About() {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(banner, {
    bg: __webpack_require__(54),
    more: true,
    title: "\u4E2D\u56FD\u6570\u636E\u79D1\u6280\u9886\u519B\u4F01\u4E1A"
  }, "sss"), /*#__PURE__*/external_react_default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
};

/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".test {\n  background-color: red;\n}\n", ""]);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(35);
module.exports = __webpack_require__(42);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(34)["default"];

var _require = __webpack_require__(15),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-less",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(15),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(36),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about/index */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about/index";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about/index.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index/index.jsx */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index/index.jsx";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/index/index.jsx';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/news/components/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/news/components/index.jsx */).then(__webpack_require__.bind(null, 10))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/news/components/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/news/components/index.jsx";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/news/components/index.jsx';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/news/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/news/index.jsx */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/news/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/news/index.jsx";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/news/index.jsx';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/test/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/test/index.jsx */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/test/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/test/index.jsx";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/test/index.jsx';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about/index.js': t_1,
  '__react_static_root__/src/pages/blog.js': t_2,
  '__react_static_root__/src/pages/index.js': t_3,
  '__react_static_root__/src/pages/index/index.jsx': t_4,
  '__react_static_root__/src/pages/news/components/index.jsx': t_5,
  '__react_static_root__/src/pages/news/index.jsx': t_6,
  '__react_static_root__/src/pages/test/index.jsx': t_7,
  '__react_static_root__/src/containers/Post': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(13);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 8,
	"./": 8,
	"./index": 8,
	"./index.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 39;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(17);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(19);

var _interopRequireWildcard = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(43);

var _Suspense = _interopRequireDefault(__webpack_require__(44));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(47)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/Users/shenzhiyong/Desktop/my-static-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(45));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".header {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 60px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.header.fixed {\n  padding-top: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.header .logo a {\n  display: block;\n}\n.header .logo a img {\n  height: 60px;\n}\n.header .menu li {\n  display: inline-block;\n}\n.header .menu li a {\n  display: block;\n  padding: 0 30px;\n  line-height: 80px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.header .menu li:hover a,\n.header .menu li.active a {\n  font-weight: 600;\n  color: #000;\n}\n", ""]);



/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/*!***/\n/* * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)*/\n/* * http://cssreset.com*/\n/* *!*/\nhtml, body, div, span, applet, object, iframe, p, blockquote, pre,\nabbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\n caption, tbody, tfoot, thead,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, input {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  /*line-height: normal;*/\n  outline: none;\n  background: transparent;\n}\n\ntextarea, input {\n  -webkit-appearance: none;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, menu, nav, section {\n  display: block;\n}\n\nbody,p {\n  line-height: 1;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  text-decoration: none;\n  -webkit-backface-visibility: hidden;\n}\n\nli {\n  list-style: none;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n}\n\n/*::-webkit-scrollbar {*/\n/*  display: none;*/\n/*}*/\n\n::-webkit-scrollbar-track-piece {\n  background-color: rgba(0, 0, 0, 0.2);\n  -webkit-border-radius: 6px;\n}\n\n::-webkit-scrollbar-thumb:vertical {\n  height: 5px;\n  background-color: rgba(125, 125, 125, 0.7);\n  -webkit-border-radius: 6px;\n}\n\n::-webkit-scrollbar-thumb:horizontal {\n  width: 5px;\n  background-color: rgba(125, 125, 125, 0.7);\n  -webkit-border-radius: 6px;\n}\ndiv{\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/*@import \"~antd/dist/antd.min.css\";*/\n* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n@media screen and (max-device-width: 1920px){\n  .container{\n    margin: 0 auto;\n    max-width: 1920px;\n  }\n}\n\n\n@media screen and (max-device-width: 1500px){\n  .container{\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n}\n", ""]);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".banner {\n  height: 500px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.banner-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.banner-aside-title {\n  font-size: 40px;\n  font-weight: 600;\n  color: #0C1A4B;\n}\n", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner.03d655a5.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".news {\n  background-color: red;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n", ""]);



/***/ })
/******/ ]);
});