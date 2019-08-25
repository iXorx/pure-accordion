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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: HOSTNAME, API_KEY, getPopularUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOSTNAME\", function() { return HOSTNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopularUrl\", function() { return getPopularUrl; });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction onClick(event) {\n  var activeElement = document.querySelectorAll('[data-active]');\n  activeElement.forEach(function (e) {\n    return e.removeAttribute('data-active');\n  });\n  var targetElement = event.target;\n\n  if (activeElement[0] !== targetElement) {\n    targetElement.setAttribute('data-active', 'true');\n    growDiv(targetElement.nextSibling);\n  }\n}\n\nfunction growDiv(growDiv) {\n  if (growDiv.clientHeight) {\n    growDiv.style.height = 0;\n  } else {\n    var wrapper = growDiv.querySelector('p');\n    growDiv.style.height = wrapper.clientHeight + \"px\";\n  }\n\n  document.getElementById(\"more-button\").value = document.getElementById(\"more-button\").value == 'Read more' ? 'Read less' : 'Read more';\n}\n\nvar setClickListener = function setClickListener(element) {\n  return element.addEventListener('click', onClick);\n};\n\nfunction setClick() {\n  document.querySelectorAll('dt').forEach(setClickListener);\n}\n\nvar createAndAppendElementInDescriptiveList = function createAndAppendElementInDescriptiveList(title, content) {\n  var newDt = document.createElement('dt');\n  setClickListener(newDt);\n  var newContentDt = document.createTextNode(title);\n  newDt.appendChild(newContentDt);\n  var newDd = document.createElement('dd');\n  var newP = document.createElement('p');\n  var newContentDd = document.createTextNode(content);\n  newP.appendChild(newContentDd);\n  newDd.appendChild(newP);\n  var targetDl = document.querySelector('dl');\n  targetDl.appendChild(newDt);\n  targetDl.appendChild(newDd);\n};\n\nvar HOSTNAME = 'https://api.themoviedb.org';\nvar API_KEY = '3a5420a00be0ef520a9a429df97644be';\nvar getPopularUrl = function getPopularUrl() {\n  return \"\".concat(HOSTNAME, \"/3/movie/popular?api_key=\").concat(API_KEY, \"&language=en-US&page=1&include_adult-false\");\n};\n\nvar getAndAppendPopularFilms = function getAndAppendPopularFilms() {\n  fetch(getPopularUrl()).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return json.results;\n  }).then(function (movies) {\n    return movies.forEach(function (movie) {\n      return createAndAppendElementInDescriptiveList(movie.title, movie.overview);\n    });\n  });\n};\n\nfunction init() {\n  setClick();\n  getAndAppendPopularFilms();\n}\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./src/js/index.js?");

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