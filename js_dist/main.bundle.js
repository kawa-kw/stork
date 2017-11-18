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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/js_dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _runLogoAnimation = __webpack_require__(1);

var _runLogoAnimation2 = _interopRequireDefault(_runLogoAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import runScrollTools from  './runScrollTools';


$(document).ready(function () {
    (0, _runLogoAnimation2.default)();
    //runScrollTools();

    console.log('jestem w main');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = runLogoAnimation;
function runLogoAnimation() {

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    var $logoFull = $('#logo-full');
    var $saw = $('#saw-circle-big');
    var $storkName = $('#stork-name'); //całość
    var $stork = $('#stork'); //bocian
    var $work = $('#work > *');
    var $wood = $('#wood > *');
    var $woodW = $('#woodW');
    var $woodO = $('#woodO');
    var $woodO2 = $('#woodO2');
    var $woodD = $('#woodD');
    var $workW = $('#workW');
    var $workO = $('#workO');
    var $workR = $('#workR');
    var $workK = $('#workK');

    //---------------
    // RUN LOGO ANIMATION
    //---------------

    tl.set($wood, { opacity: 0 }).set($work, { opacity: 0 }).from($logoFull, 2, { scale: 0, opacity: 0, transformOrigin: 'center center', rotation: '-720deg', ease: Elastic.easeOut }, 1.5).from($storkName, .5, { y: "-50", opacity: 0, ease: Elastic.easeOut }).addLabel('startWood').call(runWoodText, ['bing1', $woodW], this, 'startWood').call(runWoodText, ['bing2', $woodO], this, 'startWood+=.2').call(runWoodText, ['bing3', $woodO2], this, 'startWood+=.4').call(runWoodText, ['bing4', $woodD], this, 'startWood+=.6').addLabel('startWork', '+=.4').call(runWoodText, ['bang1', $workW], this, 'startWork').call(runWoodText, ['bang2', $workO], this, 'startWork+=.2').call(runWoodText, ['bang3', $workR], this, 'startWork+=.4').call(runWoodText, ['bang4', $workK], this, 'startWork+=.6');
};

function runWoodText(label, letter) {
    var tl = new TimelineLite();
    var $logoFull = $('#logo-full');

    //---------------
    // RUN ONE LETTER ANIMATION
    //---------------

    tl.addLabel(label).to($logoFull, 0, { scale: 1.05 }, label).fromTo($logoFull, .25, { scale: 1.05 }, { scale: 1, ease: Bounce.easeOut }).fromTo(letter, .1, { opacity: 0 }, { opacity: 1 }, label);
};

/***/ })
/******/ ]);