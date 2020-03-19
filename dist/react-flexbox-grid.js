(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFlexboxGrid"] = factory(require("react"));
	else
		root["ReactFlexboxGrid"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

	var _Row2 = __webpack_require__(1);

	Object.defineProperty(exports, 'getRowProps', {
	  enumerable: true,
	  get: function get() {
	    return _Row2.getRowProps;
	  }
	});

	var _Col2 = __webpack_require__(13);

	Object.defineProperty(exports, 'getColumnProps', {
	  enumerable: true,
	  get: function get() {
	    return _Col2.getColumnProps;
	  }
	});

	var _Grid2 = __webpack_require__(14);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Col3 = _interopRequireDefault(_Col2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Grid = _Grid3.default;
	exports.Row = _Row3.default;
	exports.Col = _Col3.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRowProps = getRowProps;
	exports.default = Row;

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(11);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _types = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rowKeys = ['itpost-start', 'itpost-center', 'itpost-end', 'itpost-top', 'itpost-middle', 'itpost-bottom', 'itpost-around', 'itpost-between'];

	var propTypes = {
	  reverse: _propTypes2.default.bool,
	  start: _types.ViewportSizeType,
	  center: _types.ViewportSizeType,
	  end: _types.ViewportSizeType,
	  top: _types.ViewportSizeType,
	  middle: _types.ViewportSizeType,
	  bottom: _types.ViewportSizeType,
	  around: _types.ViewportSizeType,
	  between: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function getRowClassNames(props) {
	  var modificators = [props.className, (0, _classNames2.default)('itpost-row')];

	  for (var i = 0; i < rowKeys.length; ++i) {
	    var key = rowKeys[i];
	    var value = props[key];
	    if (value) {
	      modificators.push((0, _classNames2.default)(key + '-' + value));
	    }
	  }

	  if (props.reverse) {
	    modificators.push((0, _classNames2.default)('itpost-reverse'));
	  }

	  return modificators;
	}

	function getRowProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
	}

	function Row(props) {
	  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
	}

	Row.propTypes = propTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getClass;

	var _flexboxgrid = __webpack_require__(3);

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getClass(className) {
	  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"itpost-container":"flexboxgrid2__itpost-container___1NOpw","itpost-container-fluid":"flexboxgrid2__itpost-container-fluid___1QQSl","itpost-row":"flexboxgrid2__itpost-row___2qPB-","itpost-col-xs":"flexboxgrid2__itpost-col-xs___1A7ge","itpost-col-xs-1":"flexboxgrid2__itpost-col-xs-1___27bWf","itpost-col-xs-2":"flexboxgrid2__itpost-col-xs-2___2TmLt","itpost-col-xs-3":"flexboxgrid2__itpost-col-xs-3___3n0Po","itpost-col-xs-4":"flexboxgrid2__itpost-col-xs-4___C3JtU","itpost-col-xs-5":"flexboxgrid2__itpost-col-xs-5___1awBf","itpost-col-xs-6":"flexboxgrid2__itpost-col-xs-6___2rYvh","itpost-col-xs-7":"flexboxgrid2__itpost-col-xs-7___3vp8_","itpost-col-xs-8":"flexboxgrid2__itpost-col-xs-8___3w2c0","itpost-col-xs-9":"flexboxgrid2__itpost-col-xs-9___2MNlh","itpost-col-xs-10":"flexboxgrid2__itpost-col-xs-10___3vYEo","itpost-col-xs-11":"flexboxgrid2__itpost-col-xs-11___N88c0","itpost-col-xs-12":"flexboxgrid2__itpost-col-xs-12___2EQCC","itpost-col-xs-offset-0":"flexboxgrid2__itpost-col-xs-offset-0___QUt5u","itpost-col-xs-offset-1":"flexboxgrid2__itpost-col-xs-offset-1___2acfX","itpost-col-xs-offset-2":"flexboxgrid2__itpost-col-xs-offset-2___3YV9o","itpost-col-xs-offset-3":"flexboxgrid2__itpost-col-xs-offset-3___1wJMt","itpost-col-xs-offset-4":"flexboxgrid2__itpost-col-xs-offset-4___BGWcj","itpost-col-xs-offset-5":"flexboxgrid2__itpost-col-xs-offset-5___VbN48","itpost-col-xs-offset-6":"flexboxgrid2__itpost-col-xs-offset-6___2fh3g","itpost-col-xs-offset-7":"flexboxgrid2__itpost-col-xs-offset-7___3h3Do","itpost-col-xs-offset-8":"flexboxgrid2__itpost-col-xs-offset-8___TN7pt","itpost-col-xs-offset-9":"flexboxgrid2__itpost-col-xs-offset-9___3akNc","itpost-col-xs-offset-10":"flexboxgrid2__itpost-col-xs-offset-10___24JqP","itpost-col-xs-offset-11":"flexboxgrid2__itpost-col-xs-offset-11___ZXYWo","itpost-col-xs-offset-12":"flexboxgrid2__itpost-col-xs-offset-12___1X2Sc","itpost-col-sm":"flexboxgrid2__itpost-col-sm___3Qd-R","itpost-col-sm-1":"flexboxgrid2__itpost-col-sm-1___13O58","itpost-col-sm-2":"flexboxgrid2__itpost-col-sm-2___1ep36","itpost-col-sm-3":"flexboxgrid2__itpost-col-sm-3___3n_PH","itpost-col-sm-4":"flexboxgrid2__itpost-col-sm-4___132cU","itpost-col-sm-5":"flexboxgrid2__itpost-col-sm-5___3lb8H","itpost-col-sm-6":"flexboxgrid2__itpost-col-sm-6___19xMB","itpost-col-sm-7":"flexboxgrid2__itpost-col-sm-7___1M-tj","itpost-col-sm-8":"flexboxgrid2__itpost-col-sm-8___3DG5s","itpost-col-sm-9":"flexboxgrid2__itpost-col-sm-9___1VwOl","itpost-col-sm-10":"flexboxgrid2__itpost-col-sm-10___3Bs_v","itpost-col-sm-11":"flexboxgrid2__itpost-col-sm-11___C_Az4","itpost-col-sm-12":"flexboxgrid2__itpost-col-sm-12___2uMUN","itpost-col-sm-offset-0":"flexboxgrid2__itpost-col-sm-offset-0___1jFry","itpost-col-sm-offset-1":"flexboxgrid2__itpost-col-sm-offset-1___eAosX","itpost-col-sm-offset-2":"flexboxgrid2__itpost-col-sm-offset-2___3XcK0","itpost-col-sm-offset-3":"flexboxgrid2__itpost-col-sm-offset-3___3zYGT","itpost-col-sm-offset-4":"flexboxgrid2__itpost-col-sm-offset-4___IAcwr","itpost-col-sm-offset-5":"flexboxgrid2__itpost-col-sm-offset-5___1RdT-","itpost-col-sm-offset-6":"flexboxgrid2__itpost-col-sm-offset-6___1bn1A","itpost-col-sm-offset-7":"flexboxgrid2__itpost-col-sm-offset-7___2Fqc9","itpost-col-sm-offset-8":"flexboxgrid2__itpost-col-sm-offset-8___2HcgR","itpost-col-sm-offset-9":"flexboxgrid2__itpost-col-sm-offset-9___d8aA_","itpost-col-sm-offset-10":"flexboxgrid2__itpost-col-sm-offset-10___21RRo","itpost-col-sm-offset-11":"flexboxgrid2__itpost-col-sm-offset-11___3l0WZ","itpost-col-sm-offset-12":"flexboxgrid2__itpost-col-sm-offset-12___3yyel","itpost-col-md":"flexboxgrid2__itpost-col-md___1JG8m","itpost-col-md-1":"flexboxgrid2__itpost-col-md-1___2viC8","itpost-col-md-2":"flexboxgrid2__itpost-col-md-2___3A1yy","itpost-col-md-3":"flexboxgrid2__itpost-col-md-3___cAn84","itpost-col-md-4":"flexboxgrid2__itpost-col-md-4___3MNEz","itpost-col-md-5":"flexboxgrid2__itpost-col-md-5___3CzA-","itpost-col-md-6":"flexboxgrid2__itpost-col-md-6___3mu7v","itpost-col-md-7":"flexboxgrid2__itpost-col-md-7___3OCKK","itpost-col-md-8":"flexboxgrid2__itpost-col-md-8___ulytp","itpost-col-md-9":"flexboxgrid2__itpost-col-md-9___1lHQ4","itpost-col-md-10":"flexboxgrid2__itpost-col-md-10___13cct","itpost-col-md-11":"flexboxgrid2__itpost-col-md-11___2vG1D","itpost-col-md-12":"flexboxgrid2__itpost-col-md-12___hYRPd","itpost-col-md-offset-0":"flexboxgrid2__itpost-col-md-offset-0___2tEXi","itpost-col-md-offset-1":"flexboxgrid2__itpost-col-md-offset-1___-eVnb","itpost-col-md-offset-2":"flexboxgrid2__itpost-col-md-offset-2___1NGdT","itpost-col-md-offset-3":"flexboxgrid2__itpost-col-md-offset-3___lMnh1","itpost-col-md-offset-4":"flexboxgrid2__itpost-col-md-offset-4___3wgaB","itpost-col-md-offset-5":"flexboxgrid2__itpost-col-md-offset-5___3IfiM","itpost-col-md-offset-6":"flexboxgrid2__itpost-col-md-offset-6___KhcV9","itpost-col-md-offset-7":"flexboxgrid2__itpost-col-md-offset-7___WiGsP","itpost-col-md-offset-8":"flexboxgrid2__itpost-col-md-offset-8___5Hvvs","itpost-col-md-offset-9":"flexboxgrid2__itpost-col-md-offset-9___2z4cP","itpost-col-md-offset-10":"flexboxgrid2__itpost-col-md-offset-10___1mnFh","itpost-col-md-offset-11":"flexboxgrid2__itpost-col-md-offset-11___3tX_I","itpost-col-md-offset-12":"flexboxgrid2__itpost-col-md-offset-12___2V61c","itpost-col-lg":"flexboxgrid2__itpost-col-lg___19qE3","itpost-col-lg-1":"flexboxgrid2__itpost-col-lg-1___21YRA","itpost-col-lg-2":"flexboxgrid2__itpost-col-lg-2___LC16z","itpost-col-lg-3":"flexboxgrid2__itpost-col-lg-3___7wTXo","itpost-col-lg-4":"flexboxgrid2__itpost-col-lg-4___2yUoE","itpost-col-lg-5":"flexboxgrid2__itpost-col-lg-5___2MtcR","itpost-col-lg-6":"flexboxgrid2__itpost-col-lg-6___jKRk-","itpost-col-lg-7":"flexboxgrid2__itpost-col-lg-7___38sWA","itpost-col-lg-8":"flexboxgrid2__itpost-col-lg-8___XN7Jx","itpost-col-lg-9":"flexboxgrid2__itpost-col-lg-9___2Lz_V","itpost-col-lg-10":"flexboxgrid2__itpost-col-lg-10___SgJWk","itpost-col-lg-11":"flexboxgrid2__itpost-col-lg-11___eEP-7","itpost-col-lg-12":"flexboxgrid2__itpost-col-lg-12_____WnS","itpost-col-lg-offset-0":"flexboxgrid2__itpost-col-lg-offset-0___1BdQa","itpost-col-lg-offset-1":"flexboxgrid2__itpost-col-lg-offset-1___35E6K","itpost-col-lg-offset-2":"flexboxgrid2__itpost-col-lg-offset-2___1W5jg","itpost-col-lg-offset-3":"flexboxgrid2__itpost-col-lg-offset-3___5Xcao","itpost-col-lg-offset-4":"flexboxgrid2__itpost-col-lg-offset-4___3DAin","itpost-col-lg-offset-5":"flexboxgrid2__itpost-col-lg-offset-5___2CLOW","itpost-col-lg-offset-6":"flexboxgrid2__itpost-col-lg-offset-6___1-DBH","itpost-col-lg-offset-7":"flexboxgrid2__itpost-col-lg-offset-7___3RirX","itpost-col-lg-offset-8":"flexboxgrid2__itpost-col-lg-offset-8____E3pc","itpost-col-lg-offset-9":"flexboxgrid2__itpost-col-lg-offset-9___2Fj8q","itpost-col-lg-offset-10":"flexboxgrid2__itpost-col-lg-offset-10___1BV4k","itpost-col-lg-offset-11":"flexboxgrid2__itpost-col-lg-offset-11___tfwU1","itpost-col-lg-offset-12":"flexboxgrid2__itpost-col-lg-offset-12___2zChD","itpost-col-xl":"flexboxgrid2__itpost-col-xl___1OkvH","itpost-col-xl-1":"flexboxgrid2__itpost-col-xl-1___377xO","itpost-col-xl-2":"flexboxgrid2__itpost-col-xl-2___9d4vE","itpost-col-xl-3":"flexboxgrid2__itpost-col-xl-3___3Q9j_","itpost-col-xl-4":"flexboxgrid2__itpost-col-xl-4___IYQQm","itpost-col-xl-5":"flexboxgrid2__itpost-col-xl-5___DBGUy","itpost-col-xl-6":"flexboxgrid2__itpost-col-xl-6___2Jcpy","itpost-col-xl-7":"flexboxgrid2__itpost-col-xl-7___3vbJ_","itpost-col-xl-8":"flexboxgrid2__itpost-col-xl-8___6YUlE","itpost-col-xl-9":"flexboxgrid2__itpost-col-xl-9___1qHlu","itpost-col-xl-10":"flexboxgrid2__itpost-col-xl-10___2rGjv","itpost-col-xl-11":"flexboxgrid2__itpost-col-xl-11___10Ygf","itpost-col-xl-12":"flexboxgrid2__itpost-col-xl-12___1BMIt","itpost-col-xl-offset-0":"flexboxgrid2__itpost-col-xl-offset-0___1Dqx6","itpost-col-xl-offset-1":"flexboxgrid2__itpost-col-xl-offset-1___3vVln","itpost-col-xl-offset-2":"flexboxgrid2__itpost-col-xl-offset-2___3CE4i","itpost-col-xl-offset-3":"flexboxgrid2__itpost-col-xl-offset-3___bkQJO","itpost-col-xl-offset-4":"flexboxgrid2__itpost-col-xl-offset-4___1XZf8","itpost-col-xl-offset-5":"flexboxgrid2__itpost-col-xl-offset-5___iUnSJ","itpost-col-xl-offset-6":"flexboxgrid2__itpost-col-xl-offset-6___1nIKq","itpost-col-xl-offset-7":"flexboxgrid2__itpost-col-xl-offset-7___tAN-s","itpost-col-xl-offset-8":"flexboxgrid2__itpost-col-xl-offset-8___lbMcw","itpost-col-xl-offset-9":"flexboxgrid2__itpost-col-xl-offset-9___3N4hW","itpost-col-xl-offset-10":"flexboxgrid2__itpost-col-xl-offset-10___1r34T","itpost-col-xl-offset-11":"flexboxgrid2__itpost-col-xl-offset-11___3TX50","itpost-col-xl-offset-12":"flexboxgrid2__itpost-col-xl-offset-12____DxB8","itpost-start-xs":"flexboxgrid2__itpost-start-xs___37WtD","itpost-center-xs":"flexboxgrid2__itpost-center-xs___W2QO5","itpost-end-xs":"flexboxgrid2__itpost-end-xs___2C5K7","itpost-top-xs":"flexboxgrid2__itpost-top-xs___2TZPs","itpost-middle-xs":"flexboxgrid2__itpost-middle-xs___1Gq92","itpost-bottom-xs":"flexboxgrid2__itpost-bottom-xs___xlq7o","itpost-around-xs":"flexboxgrid2__itpost-around-xs___4hY1V","itpost-between-xs":"flexboxgrid2__itpost-between-xs___36TUZ","itpost-first-xs":"flexboxgrid2__itpost-first-xs___5-ySc","itpost-last-xs":"flexboxgrid2__itpost-last-xs___1_JCp","itpost-initial-order-xs":"flexboxgrid2__itpost-initial-order-xs___cwUkh","itpost-start-sm":"flexboxgrid2__itpost-start-sm___3T2mO","itpost-center-sm":"flexboxgrid2__itpost-center-sm___1R0bX","itpost-end-sm":"flexboxgrid2__itpost-end-sm___pSRLI","itpost-top-sm":"flexboxgrid2__itpost-top-sm___3OUt8","itpost-middle-sm":"flexboxgrid2__itpost-middle-sm___h5j3_","itpost-bottom-sm":"flexboxgrid2__itpost-bottom-sm___2oKys","itpost-around-sm":"flexboxgrid2__itpost-around-sm___w36Wf","itpost-between-sm":"flexboxgrid2__itpost-between-sm___1AadC","itpost-first-sm":"flexboxgrid2__itpost-first-sm___1mGbJ","itpost-last-sm":"flexboxgrid2__itpost-last-sm___Uzi5k","itpost-initial-order-sm":"flexboxgrid2__itpost-initial-order-sm___3UARs","itpost-start-md":"flexboxgrid2__itpost-start-md___2y5mJ","itpost-center-md":"flexboxgrid2__itpost-center-md___iKLEF","itpost-end-md":"flexboxgrid2__itpost-end-md___22CXc","itpost-top-md":"flexboxgrid2__itpost-top-md___1ty2U","itpost-middle-md":"flexboxgrid2__itpost-middle-md___1f5EF","itpost-bottom-md":"flexboxgrid2__itpost-bottom-md___2-Dho","itpost-around-md":"flexboxgrid2__itpost-around-md___28hQh","itpost-between-md":"flexboxgrid2__itpost-between-md___A8BEo","itpost-first-md":"flexboxgrid2__itpost-first-md___2ys2m","itpost-last-md":"flexboxgrid2__itpost-last-md___3oWqc","itpost-initial-order-md":"flexboxgrid2__itpost-initial-order-md___1VRYp","itpost-start-lg":"flexboxgrid2__itpost-start-lg___1ld7g","itpost-center-lg":"flexboxgrid2__itpost-center-lg___m8k8B","itpost-end-lg":"flexboxgrid2__itpost-end-lg___29WsO","itpost-top-lg":"flexboxgrid2__itpost-top-lg___1-RYN","itpost-middle-lg":"flexboxgrid2__itpost-middle-lg___3nGbz","itpost-bottom-lg":"flexboxgrid2__itpost-bottom-lg___-FXtp","itpost-around-lg":"flexboxgrid2__itpost-around-lg___3bGn5","itpost-between-lg":"flexboxgrid2__itpost-between-lg___1jCys","itpost-first-lg":"flexboxgrid2__itpost-first-lg___z1izD","itpost-last-lg":"flexboxgrid2__itpost-last-lg___HgdVJ","itpost-initial-order-lg":"flexboxgrid2__itpost-initial-order-lg___XxObQ","itpost-start-xl":"flexboxgrid2__itpost-start-xl___vAE0C","itpost-center-xl":"flexboxgrid2__itpost-center-xl___2UN8B","itpost-end-xl":"flexboxgrid2__itpost-end-xl___C4c0y","itpost-top-xl":"flexboxgrid2__itpost-top-xl___2OtMe","itpost-middle-xl":"flexboxgrid2__itpost-middle-xl___TkFVv","itpost-bottom-xl":"flexboxgrid2__itpost-bottom-xl___176g4","itpost-around-xl":"flexboxgrid2__itpost-around-xl___3eMpX","itpost-between-xl":"flexboxgrid2__itpost-between-xl___1MoUw","itpost-first-xl":"flexboxgrid2__itpost-first-xl___3IU7l","itpost-last-xl":"flexboxgrid2__itpost-last-xl___Te3bh","itpost-initial-order-xl":"flexboxgrid2__itpost-initial-order-xl___1ekbG","itpost-hidden-xs":"flexboxgrid2__itpost-hidden-xs___3T1kA","itpost-hidden-sm":"flexboxgrid2__itpost-hidden-sm___3IIHv","itpost-hidden-md":"flexboxgrid2__itpost-hidden-md___1z_ib","itpost-hidden-lg":"flexboxgrid2__itpost-hidden-lg___294BT","itpost-hidden-xl":"flexboxgrid2__itpost-hidden-xl___2_rAB","itpost-reverse":"flexboxgrid2__itpost-reverse___1Nu8F","itpost-col":"flexboxgrid2__itpost-col___2x5LS"};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var ReactIs = require('react-is');

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(10);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProps;
	function createProps(propTypes, props, classNames) {
	  var newProps = {};

	  Object.keys(props).filter(function (key) {
	    return key === 'children' || !propTypes[key];
	  }).forEach(function (key) {
	    return newProps[key] = props[key];
	  });

	  var className = classNames.filter(function (cn) {
	    return cn;
	  }).join(' ');
	  return Object.assign({}, newProps, { className: className });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ViewportSizeType = exports.ColumnSizeType = undefined;

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
	var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = getColumnProps;
	exports.default = Col;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(11);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _types = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  xs: _types.ColumnSizeType,
	  sm: _types.ColumnSizeType,
	  md: _types.ColumnSizeType,
	  lg: _types.ColumnSizeType,
	  xl: _types.ColumnSizeType,
	  xsOffset: _propTypes2.default.number,
	  smOffset: _propTypes2.default.number,
	  mdOffset: _propTypes2.default.number,
	  lgOffset: _propTypes2.default.number,
	  xlOffset: _propTypes2.default.number,
	  first: _types.ViewportSizeType,
	  last: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	var classMap = {
	  xs: 'itpost-col-xs',
	  sm: 'itpost-col-sm',
	  md: 'itpost-col-md',
	  lg: 'itpost-col-lg',
	  xl: 'itpost-col-xl',
	  xsOffset: 'itpost-col-xs-offset',
	  smOffset: 'itpost-col-sm-offset',
	  mdOffset: 'itpost-col-md-offset',
	  lgOffset: 'itpost-col-lg-offset',
	  xlOffset: 'itpost-col-xl-offset'
	};

	function isInteger(value) {
	  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}

	function getColClassNames(props) {
	  var extraClasses = [];

	  if (props.className) {
	    extraClasses.push(props.className);
	  }

	  if (props.first) {
	    extraClasses.push((0, _classNames2.default)('itpost-first-' + props.first));
	  }

	  if (props.last) {
	    extraClasses.push((0, _classNames2.default)('itpost-last-' + props.last));
	  }

	  return Object.keys(props).filter(function (key) {
	    return classMap[key];
	  }).map(function (key) {
	    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
	  }).concat(extraClasses);
	}

	function getColumnProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
	}

	function Col(props) {
	  var tagName = props.tagName,
	      columnProps = _objectWithoutProperties(props, ['tagName']);

	  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
	}

	Col.propTypes = propTypes;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Grid;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(11);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  fluid: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function Grid(props) {
	  var containerClass = (0, _classNames2.default)(props.fluid ? 'itpost-container-fluid' : 'itpost-container');
	  var classNames = [props.className, containerClass];

	  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
	}

	Grid.propTypes = propTypes;

/***/ })
/******/ ])
});
;