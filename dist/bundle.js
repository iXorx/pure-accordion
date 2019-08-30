/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! exports provided: onClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClick\", function() { return onClick; });\n/**\n * It remove all [data-active] available in the page and\n * adds it to the clicked element (dt).\n * This [data-active] is controlled by CSS to perform an animation\n * control the state open/close of the element content (dd)\n * \n * @param {MouseEvent} event click event from mouse\n */\nvar onClick = function onClick(event) {\n  var dtActiveElement = document.querySelectorAll('[data-active]');\n  dtActiveElement.forEach(function (element) {\n    return element.removeAttribute('data-active');\n  }); // Set new active\n\n  var targetElement = event.target;\n\n  if (dtActiveElement[0] !== targetElement) {\n    // Clean previously selected\n    targetElement.setAttribute('data-active', 'true');\n  }\n};\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/fetchElements.js":
/*!*********************************!*\
  !*** ./src/js/fetchElements.js ***!
  \*********************************/
/*! exports provided: getPopularUrl, getAndAppendPopularFilms, createAndAppendElementInDescriptiveList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopularUrl\", function() { return getPopularUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAndAppendPopularFilms\", function() { return getAndAppendPopularFilms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAndAppendElementInDescriptiveList\", function() { return createAndAppendElementInDescriptiveList; });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n\nvar HOSTNAME = 'https://api.themoviedb.org';\nvar API_KEY = '3a5420a00be0ef520a9a429df97644be';\nvar getPopularUrl = function getPopularUrl() {\n  return \"\".concat(HOSTNAME, \"/3/movie/popular?api_key=\").concat(API_KEY, \"&language=en-US&page=1&include_adult-false\");\n};\n/**\n * Calls themoviedb popular movies API and adds the movies returned\n * in the dl list.\n */\n\nvar getAndAppendPopularFilms = function getAndAppendPopularFilms() {\n  return fetch(getPopularUrl()).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return json.results;\n  }).then(function (movies) {\n    console.log(movies);\n    movies.forEach(function (movie) {\n      return createAndAppendElementInDescriptiveList(movie.title, movie.overview);\n    });\n  })[\"catch\"](function (e) {\n    return console.error('error getting popular films ' + e);\n  });\n};\n/**\n * Creates a new element in the DOM with the same structure than \n * the initial ones and the content passed as a parameter.\n * \n * @param {string} title the text for the dt element\n * @param {string} content the text for the p element inside the dd\n */\n\nvar createAndAppendElementInDescriptiveList = function createAndAppendElementInDescriptiveList(title, content) {\n  // create dt\n  var newDt = document.createElement('dt');\n  Object(_listeners__WEBPACK_IMPORTED_MODULE_0__[\"setClickListener\"])(newDt);\n  var newContentDt = document.createTextNode(title);\n  newDt.appendChild(newContentDt); // create dd + p\n\n  var newDd = document.createElement('dd');\n  var newP = document.createElement('p');\n  var newContentDd = document.createTextNode(content);\n  newP.appendChild(newContentDd);\n  newDd.appendChild(newP); // append to dl\n\n  var targetDl = document.querySelector('dl');\n  targetDl.appendChild(newDt);\n  targetDl.appendChild(newDd);\n};\n\n//# sourceURL=webpack:///./src/js/fetchElements.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _fetchElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchElements */ \"./src/js/fetchElements.js\");\n\n\n\n\nwindow.onload = function () {\n  Object(_listeners__WEBPACK_IMPORTED_MODULE_1__[\"setClickForAllDt\"])();\n  Object(_fetchElements__WEBPACK_IMPORTED_MODULE_2__[\"getAndAppendPopularFilms\"])();\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: setClickListener, setClickForAllDt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickListener\", function() { return setClickListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickForAllDt\", function() { return setClickForAllDt; });\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ \"./src/js/events.js\");\n\n/**\n * Adds the event listener to the element used as a parameter\n * @param {HTMLElement} element target element to set the listener\n */\n\nvar setClickListener = function setClickListener(element) {\n  return element.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_0__[\"onClick\"]);\n};\n/**\n * Sets the listener for the all initial dt\n */\n\nvar setClickForAllDt = function setClickForAllDt() {\n  return document.querySelectorAll('dt').forEach(setClickListener);\n};\n\n//# sourceURL=webpack:///./src/js/listeners.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });