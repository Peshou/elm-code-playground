/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);

	var CodeMirror = __webpack_require__(20);

	// Require index.html so it gets copied to dist
	__webpack_require__(21);

	var Elm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Main.elm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var app = Elm.Main.embed(document.getElementById("main"));

	document.addEventListener('DOMContentLoaded', function () {
	    console.log('load');
	    var elements = document.getElementsByClassName('code_textarea');
	    for (var i = 0; i < elements.length; ++i) {
	        console.log(elements[i]);
	        editor(elements[i]);
	    }
	});

	function editor(textarea) {
	    CodeMirror.fromTextArea(textarea, {
	        lineNumbers: true
	    });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./ace.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./ace.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! ace.css | https://github.com/basscss/ace | MIT License */\n\n/* Basscss Basic */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    'Roboto',\n    'Helvetica Neue',\n    Helvetica,\n    sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  color: #111;\n  background-color: #fff;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nsvg {\n  max-height: 100%;\n}\n\na {\n  color: #07c;\n}\n\nh1, h2, h3,\nh4, h5, h6 {\n  font-weight: 600;\n  line-height: 1.25;\n  margin-top: 1em;\n  margin-bottom: .5em;\n}\n\nh1 { font-size: 2rem }\n\nh2 { font-size: 1.5rem }\n\nh3 { font-size: 1.25rem }\n\nh4 { font-size: 1rem }\n\nh5 { font-size: .875rem }\n\nh6 { font-size: .75rem }\n\np, dl, ol, ul, pre, blockquote {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\ncode,\npre,\nsamp {\n  font-family:\n    'Roboto Mono',\n    'Source Code Pro',\n    Menlo,\n    Consolas,\n    'Liberation Mono',\n    monospace;\n}\n\ncode, samp {\n  font-size: 87.5%;\n  padding: .125em;\n}\n\npre {\n  font-size: 87.5%;\n  overflow: scroll;\n}\n\nblockquote {\n  font-size: 1.25rem;\n  font-style: italic;\n  margin-left: 0;\n}\n\nhr {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  border: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #ccc;\n}\n\n/* Basscss Forms */\n\n.label {\n  font-size: .875rem;\n  font-weight: bold;\n  display: block;\n  margin-bottom: .5rem;\n}\n\n.input {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.select {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.textarea {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n/* Basscss Input Range */\n\n.input-range {\n  vertical-align: middle;\n  background-color: transparent;\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n  color: inherit;\n  background-color: transparent;\n  -webkit-appearance: none;\n}\n\n.input-range::-webkit-slider-thumb {\n  position: relative;\n  width: .5rem;\n  height: 1.25rem;\n  cursor: pointer;\n  margin-top: -0.5rem;\n  border-radius: 3px;\n  background-color: currentcolor;\n  -webkit-appearance: none;\n}\n\n/* Touch screen friendly pseudo element */\n\n.input-range::-webkit-slider-thumb:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -0.5rem;\n  left: -0.875rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  opacity: 0;\n}\n\n.input-range::-moz-range-thumb {\n  width: .5rem;\n  height: 1.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  border-color: transparent;\n  border-width: 0;\n  background-color: currentcolor;\n}\n\n.input-range::-webkit-slider-runnable-track {\n  height: 0.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, .25);\n}\n\n.input-range::-moz-range-track {\n  height: 0.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, .25);\n}\n\n.input-range:focus {\n  outline: none;\n}\n\n/* Basscss Progress */\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 0.5625rem;\n  margin: .5rem 0;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, .125);\n  border: 0;\n  border-radius: 10000px;\n  -webkit-appearance: none;\n}\n\n.progress::-webkit-progress-bar {\n  -webkit-appearance: none;\n  background-color: rgba(0, 0, 0, .125)\n}\n\n.progress::-webkit-progress-value {\n  -webkit-appearance: none;\n  background-color: currentcolor;\n}\n\n.progress::-moz-progress-bar {\n  background-color: currentcolor;\n}\n\n/* Basscss Btn */\n\n.btn {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.125rem;\n  padding: .5rem 1rem;\n  margin: 0;\n  height: auto;\n  border: 1px solid transparent;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  color: inherit;\n  background-color: transparent;\n}\n\n.btn:hover {\n  text-decoration: none;\n}\n\n.btn:focus {\n  outline: none;\n  border-color: rgba(0, 0, 0, .125);\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, .25);\n}\n\n::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/* Basscss Btn Sizes */\n\n.btn-small {\n  padding: .25rem .5rem;\n}\n\n.btn-big {\n  padding: 1rem 1.25rem;\n}\n\n.btn-narrow {\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n\n/* Basscss Btn Primary */\n\n.btn-primary {\n  color: #fff;\n  background-color: #0074D9;\n  border-radius: 3px;\n}\n\n.btn-primary:hover {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .0625);\n}\n\n.btn-primary:active {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .125),\n    inset 0 3px 4px 0 rgba(0, 0, 0, .25),\n    0 0 1px rgba(0, 0, 0, .125);\n}\n\n.btn-primary:disabled,\n.btn-primary.is-disabled {\n  opacity: .5;\n}\n\n/* Basscss Btn Outline */\n\n.btn-outline,\n.btn-outline:hover {\n  border-color: currentcolor;\n}\n\n.btn-outline {\n  border-radius: 3px;\n}\n\n.btn-outline:hover {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .0625);\n}\n\n.btn-outline:active {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .125),\n    inset 0 3px 4px 0 rgba(0, 0, 0, .25),\n    0 0 1px rgba(0, 0, 0, .125);\n}\n\n.btn-outline:disabled,\n.btn-outline.is-disabled {\n  opacity: .5;\n}\n\n/* Basscss Media Object */\n\n.media,\n.sm-media,\n.md-media,\n.lg-media {\n  margin-left: -.5rem;\n  margin-right: -.5rem;\n}\n\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.media-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n}\n\n.media-bottom {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end;\n}\n\n.media-img,\n.media-body {\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (min-width: 40em) {\n  .sm-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n/*! Basscss | http://basscss.com | MIT License */\n\n/* Basscss Type Scale */\n\n.h1 { font-size: 2rem }\n\n.h2 { font-size: 1.5rem }\n\n.h3 { font-size: 1.25rem }\n\n.h4 { font-size: 1rem }\n\n.h5 { font-size: .875rem }\n\n.h6 { font-size: .75rem }\n\n/* Basscss Typography */\n\n.font-family-inherit { font-family: inherit }\n\n.font-size-inherit { font-size: inherit }\n\n.text-decoration-none { text-decoration: none }\n\n.bold    { font-weight: bold; font-weight: bold }\n\n.regular { font-weight: normal }\n\n.italic  { font-style: italic }\n\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n\n.left-align   { text-align: left }\n\n.center       { text-align: center }\n\n.right-align  { text-align: right }\n\n.justify      { text-align: justify }\n\n.nowrap { white-space: nowrap }\n\n.break-word { word-wrap: break-word }\n\n.line-height-1 { line-height: 1 }\n\n.line-height-2 { line-height: 1.125 }\n\n.line-height-3 { line-height: 1.25 }\n\n.line-height-4 { line-height: 1.5 }\n\n.list-style-none { list-style: none }\n\n.underline { text-decoration: underline }\n\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n\n/* Basscss Layout */\n\n.inline       { display: inline }\n\n.block        { display: block }\n\n.inline-block { display: inline-block }\n\n.table        { display: table }\n\n.table-cell   { display: table-cell }\n\n.overflow-hidden { overflow: hidden }\n\n.overflow-scroll { overflow: scroll }\n\n.overflow-auto   { overflow: auto }\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table\n}\n\n.clearfix:after { clear: both }\n\n.left  { float: left }\n\n.right { float: right }\n\n.fit { max-width: 100% }\n\n.max-width-1 { max-width: 24rem }\n\n.max-width-2 { max-width: 32rem }\n\n.max-width-3 { max-width: 48rem }\n\n.max-width-4 { max-width: 64rem }\n\n.border-box { box-sizing: border-box }\n\n/* Basscss Align */\n\n.align-baseline { vertical-align: baseline }\n\n.align-top      { vertical-align: top }\n\n.align-middle   { vertical-align: middle }\n\n.align-bottom   { vertical-align: bottom }\n\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n\n.mt0 { margin-top:    0 }\n\n.mr0 { margin-right:  0 }\n\n.mb0 { margin-bottom: 0 }\n\n.ml0 { margin-left:   0 }\n\n.mx0 { margin-left:   0; margin-right:  0 }\n\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin: .5rem }\n\n.mt1 { margin-top: .5rem }\n\n.mr1 { margin-right: .5rem }\n\n.mb1 { margin-bottom: .5rem }\n\n.ml1 { margin-left: .5rem }\n\n.mx1 { margin-left: .5rem; margin-right: .5rem }\n\n.my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n.m2  { margin: 1rem }\n\n.mt2 { margin-top: 1rem }\n\n.mr2 { margin-right: 1rem }\n\n.mb2 { margin-bottom: 1rem }\n\n.ml2 { margin-left: 1rem }\n\n.mx2 { margin-left: 1rem; margin-right: 1rem }\n\n.my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n.m3  { margin: 2rem }\n\n.mt3 { margin-top: 2rem }\n\n.mr3 { margin-right: 2rem }\n\n.mb3 { margin-bottom: 2rem }\n\n.ml3 { margin-left: 2rem }\n\n.mx3 { margin-left: 2rem; margin-right: 2rem }\n\n.my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n.m4  { margin: 4rem }\n\n.mt4 { margin-top: 4rem }\n\n.mr4 { margin-right: 4rem }\n\n.mb4 { margin-bottom: 4rem }\n\n.ml4 { margin-left: 4rem }\n\n.mx4 { margin-left: 4rem; margin-right: 4rem }\n\n.my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n.mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n\n.mxn2 { margin-left: -1rem; margin-right: -1rem; }\n\n.mxn3 { margin-left: -2rem; margin-right: -2rem; }\n\n.mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n.ml-auto { margin-left: auto }\n\n.mr-auto { margin-right: auto }\n\n.mx-auto { margin-left: auto; margin-right: auto; }\n\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n\n.pt0 { padding-top: 0 }\n\n.pr0 { padding-right: 0 }\n\n.pb0 { padding-bottom: 0 }\n\n.pl0 { padding-left: 0 }\n\n.px0 { padding-left: 0; padding-right:  0 }\n\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: .5rem }\n\n.pt1 { padding-top: .5rem }\n\n.pr1 { padding-right: .5rem }\n\n.pb1 { padding-bottom: .5rem }\n\n.pl1 { padding-left: .5rem }\n\n.py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n.px1 { padding-left: .5rem; padding-right: .5rem }\n\n.p2  { padding: 1rem }\n\n.pt2 { padding-top: 1rem }\n\n.pr2 { padding-right: 1rem }\n\n.pb2 { padding-bottom: 1rem }\n\n.pl2 { padding-left: 1rem }\n\n.py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n.px2 { padding-left: 1rem; padding-right: 1rem }\n\n.p3  { padding: 2rem }\n\n.pt3 { padding-top: 2rem }\n\n.pr3 { padding-right: 2rem }\n\n.pb3 { padding-bottom: 2rem }\n\n.pl3 { padding-left: 2rem }\n\n.py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n.px3 { padding-left: 2rem; padding-right: 2rem }\n\n.p4  { padding: 4rem }\n\n.pt4 { padding-top: 4rem }\n\n.pr4 { padding-right: 4rem }\n\n.pb4 { padding-bottom: 4rem }\n\n.pl4 { padding-left: 4rem }\n\n.py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n.px4 { padding-left: 4rem; padding-right: 4rem }\n\n/* Basscss Grid */\n\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n\n.col-1 {\n  width: 8.33333%;\n}\n\n.col-2 {\n  width: 16.66667%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33333%;\n}\n\n.col-5 {\n  width: 41.66667%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33333%;\n}\n\n.col-8 {\n  width: 66.66667%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33333%;\n}\n\n.col-11 {\n  width: 91.66667%;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: 8.33333%;\n  }\n\n  .sm-col-2 {\n    width: 16.66667%;\n  }\n\n  .sm-col-3 {\n    width: 25%;\n  }\n\n  .sm-col-4 {\n    width: 33.33333%;\n  }\n\n  .sm-col-5 {\n    width: 41.66667%;\n  }\n\n  .sm-col-6 {\n    width: 50%;\n  }\n\n  .sm-col-7 {\n    width: 58.33333%;\n  }\n\n  .sm-col-8 {\n    width: 66.66667%;\n  }\n\n  .sm-col-9 {\n    width: 75%;\n  }\n\n  .sm-col-10 {\n    width: 83.33333%;\n  }\n\n  .sm-col-11 {\n    width: 91.66667%;\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: 8.33333%;\n  }\n\n  .md-col-2 {\n    width: 16.66667%;\n  }\n\n  .md-col-3 {\n    width: 25%;\n  }\n\n  .md-col-4 {\n    width: 33.33333%;\n  }\n\n  .md-col-5 {\n    width: 41.66667%;\n  }\n\n  .md-col-6 {\n    width: 50%;\n  }\n\n  .md-col-7 {\n    width: 58.33333%;\n  }\n\n  .md-col-8 {\n    width: 66.66667%;\n  }\n\n  .md-col-9 {\n    width: 75%;\n  }\n\n  .md-col-10 {\n    width: 83.33333%;\n  }\n\n  .md-col-11 {\n    width: 91.66667%;\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: 8.33333%;\n  }\n\n  .lg-col-2 {\n    width: 16.66667%;\n  }\n\n  .lg-col-3 {\n    width: 25%;\n  }\n\n  .lg-col-4 {\n    width: 33.33333%;\n  }\n\n  .lg-col-5 {\n    width: 41.66667%;\n  }\n\n  .lg-col-6 {\n    width: 50%;\n  }\n\n  .lg-col-7 {\n    width: 58.33333%;\n  }\n\n  .lg-col-8 {\n    width: 66.66667%;\n  }\n\n  .lg-col-9 {\n    width: 75%;\n  }\n\n  .lg-col-10 {\n    width: 83.33333%;\n  }\n\n  .lg-col-11 {\n    width: 91.66667%;\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n\n.flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column }\n\n.flex-wrap    { -ms-flex-wrap: wrap; flex-wrap: wrap }\n\n.items-start    { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start }\n\n.items-end      { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end }\n\n.items-center   { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center }\n\n.items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline }\n\n.items-stretch  { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch }\n\n.self-start    { -ms-flex-item-align: start; align-self: flex-start }\n\n.self-end      { -ms-flex-item-align: end; align-self: flex-end }\n\n.self-center   { -ms-flex-item-align: center; align-self: center }\n\n.self-baseline { -ms-flex-item-align: baseline; align-self: baseline }\n\n.self-stretch  { -ms-flex-item-align: stretch; align-self: stretch }\n\n.justify-start   { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start }\n\n.justify-end     { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end }\n\n.justify-center  { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center }\n\n.justify-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between }\n\n.justify-around  { -ms-flex-pack: distribute; justify-content: space-around }\n\n.content-start   { -ms-flex-line-pack: start; align-content: flex-start }\n\n.content-end     { -ms-flex-line-pack: end; align-content: flex-end }\n\n.content-center  { -ms-flex-line-pack: center; align-content: center }\n\n.content-between { -ms-flex-line-pack: justify; align-content: space-between }\n\n.content-around  { -ms-flex-line-pack: distribute; align-content: space-around }\n\n.content-stretch { -ms-flex-line-pack: stretch; align-content: stretch }\n\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n\n.flex-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n\n.flex-none { -webkit-box-flex: 0; -ms-flex: none; flex: none }\n\n.order-0 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0 }\n\n.order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1 }\n\n.order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2 }\n\n.order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3 }\n\n.order-last { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999 }\n\n/* Basscss Position */\n\n.relative { position: relative }\n\n.absolute { position: absolute }\n\n.fixed    { position: fixed }\n\n.top-0    { top: 0 }\n\n.right-0  { right: 0 }\n\n.bottom-0 { bottom: 0 }\n\n.left-0   { left: 0 }\n\n.z1 { z-index: 1 }\n\n.z2 { z-index: 2 }\n\n.z3 { z-index: 3 }\n\n.z4 { z-index: 4 }\n\n/* Basscss Border */\n\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n\n.border-none { border: 0 }\n\n.rounded { border-radius: 3px }\n\n.circle  { border-radius: 50% }\n\n.rounded-top    { border-radius: 3px 3px 0 0 }\n\n.rounded-right  { border-radius: 0 3px 3px 0 }\n\n.rounded-bottom { border-radius: 0 0 3px 3px }\n\n.rounded-left   { border-radius: 3px 0 0 3px }\n\n.not-rounded { border-radius: 0 }\n\n/* Basscss Hide */\n\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n\n.display-none { display: none !important }\n\n/* Basscss Responsive Margin */\n\n@media (min-width: 40em) {\n\n  .sm-m0  { margin:        0 }\n  .sm-mt0 { margin-top:    0 }\n  .sm-mr0 { margin-right:  0 }\n  .sm-mb0 { margin-bottom: 0 }\n  .sm-ml0 { margin-left:   0 }\n  .sm-mx0 { margin-left:   0; margin-right:  0 }\n  .sm-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .sm-m1  { margin: .5rem }\n  .sm-mt1 { margin-top: .5rem }\n  .sm-mr1 { margin-right: .5rem }\n  .sm-mb1 { margin-bottom: .5rem }\n  .sm-ml1 { margin-left: .5rem }\n  .sm-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .sm-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .sm-m2  { margin: 1rem }\n  .sm-mt2 { margin-top: 1rem }\n  .sm-mr2 { margin-right: 1rem }\n  .sm-mb2 { margin-bottom: 1rem }\n  .sm-ml2 { margin-left: 1rem }\n  .sm-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .sm-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .sm-m3  { margin: 2rem }\n  .sm-mt3 { margin-top: 2rem }\n  .sm-mr3 { margin-right: 2rem }\n  .sm-mb3 { margin-bottom: 2rem }\n  .sm-ml3 { margin-left: 2rem }\n  .sm-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .sm-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .sm-m4  { margin: 4rem }\n  .sm-mt4 { margin-top: 4rem }\n  .sm-mr4 { margin-right: 4rem }\n  .sm-mb4 { margin-bottom: 4rem }\n  .sm-ml4 { margin-left: 4rem }\n  .sm-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .sm-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .sm-mxn1 { margin-left: -.5rem; margin-right: -.5rem }\n  .sm-mxn2 { margin-left: -1rem; margin-right: -1rem }\n  .sm-mxn3 { margin-left: -2rem; margin-right: -2rem }\n  .sm-mxn4 { margin-left: -4rem; margin-right: -4rem }\n\n  .sm-ml-auto { margin-left:  auto }\n  .sm-mr-auto { margin-right: auto }\n  .sm-mx-auto { margin-left:  auto; margin-right: auto }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-m0  { margin:        0 }\n  .md-mt0 { margin-top:    0 }\n  .md-mr0 { margin-right:  0 }\n  .md-mb0 { margin-bottom: 0 }\n  .md-ml0 { margin-left:   0 }\n  .md-mx0 { margin-left:   0; margin-right:  0 }\n  .md-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .md-m1  { margin: .5rem }\n  .md-mt1 { margin-top: .5rem }\n  .md-mr1 { margin-right: .5rem }\n  .md-mb1 { margin-bottom: .5rem }\n  .md-ml1 { margin-left: .5rem }\n  .md-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .md-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .md-m2  { margin: 1rem }\n  .md-mt2 { margin-top: 1rem }\n  .md-mr2 { margin-right: 1rem }\n  .md-mb2 { margin-bottom: 1rem }\n  .md-ml2 { margin-left: 1rem }\n  .md-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .md-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .md-m3  { margin: 2rem }\n  .md-mt3 { margin-top: 2rem }\n  .md-mr3 { margin-right: 2rem }\n  .md-mb3 { margin-bottom: 2rem }\n  .md-ml3 { margin-left: 2rem }\n  .md-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .md-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .md-m4  { margin: 4rem }\n  .md-mt4 { margin-top: 4rem }\n  .md-mr4 { margin-right: 4rem }\n  .md-mb4 { margin-bottom: 4rem }\n  .md-ml4 { margin-left: 4rem }\n  .md-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .md-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .md-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .md-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .md-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .md-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .md-ml-auto { margin-left:  auto }\n  .md-mr-auto { margin-right: auto }\n  .md-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-m0  { margin:        0 }\n  .lg-mt0 { margin-top:    0 }\n  .lg-mr0 { margin-right:  0 }\n  .lg-mb0 { margin-bottom: 0 }\n  .lg-ml0 { margin-left:   0 }\n  .lg-mx0 { margin-left:   0; margin-right:  0 }\n  .lg-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .lg-m1  { margin: .5rem }\n  .lg-mt1 { margin-top: .5rem }\n  .lg-mr1 { margin-right: .5rem }\n  .lg-mb1 { margin-bottom: .5rem }\n  .lg-ml1 { margin-left: .5rem }\n  .lg-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .lg-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .lg-m2  { margin: 1rem }\n  .lg-mt2 { margin-top: 1rem }\n  .lg-mr2 { margin-right: 1rem }\n  .lg-mb2 { margin-bottom: 1rem }\n  .lg-ml2 { margin-left: 1rem }\n  .lg-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .lg-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .lg-m3  { margin: 2rem }\n  .lg-mt3 { margin-top: 2rem }\n  .lg-mr3 { margin-right: 2rem }\n  .lg-mb3 { margin-bottom: 2rem }\n  .lg-ml3 { margin-left: 2rem }\n  .lg-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .lg-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .lg-m4  { margin: 4rem }\n  .lg-mt4 { margin-top: 4rem }\n  .lg-mr4 { margin-right: 4rem }\n  .lg-mb4 { margin-bottom: 4rem }\n  .lg-ml4 { margin-left: 4rem }\n  .lg-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .lg-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .lg-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .lg-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .lg-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .lg-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .lg-ml-auto { margin-left:  auto }\n  .lg-mr-auto { margin-right: auto }\n  .lg-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n/* Basscss Responsive Padding */\n\n@media (min-width: 40em) {\n\n  .sm-p0  { padding:        0 }\n  .sm-pt0 { padding-top:    0 }\n  .sm-pr0 { padding-right:  0 }\n  .sm-pb0 { padding-bottom: 0 }\n  .sm-pl0 { padding-left:   0 }\n  .sm-px0 { padding-left:   0; padding-right:  0 }\n  .sm-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .sm-p1  { padding: .5rem }\n  .sm-pt1 { padding-top: .5rem }\n  .sm-pr1 { padding-right: .5rem }\n  .sm-pb1 { padding-bottom: .5rem }\n  .sm-pl1 { padding-left: .5rem }\n  .sm-px1 { padding-left: .5rem; padding-right: .5rem }\n  .sm-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .sm-p2  { padding: 1rem }\n  .sm-pt2 { padding-top: 1rem }\n  .sm-pr2 { padding-right: 1rem }\n  .sm-pb2 { padding-bottom: 1rem }\n  .sm-pl2 { padding-left: 1rem }\n  .sm-px2 { padding-left: 1rem; padding-right: 1rem }\n  .sm-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .sm-p3  { padding: 2rem }\n  .sm-pt3 { padding-top: 2rem }\n  .sm-pr3 { padding-right: 2rem }\n  .sm-pb3 { padding-bottom: 2rem }\n  .sm-pl3 { padding-left: 2rem }\n  .sm-px3 { padding-left: 2rem; padding-right: 2rem }\n  .sm-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .sm-p4  { padding: 4rem }\n  .sm-pt4 { padding-top: 4rem }\n  .sm-pr4 { padding-right: 4rem }\n  .sm-pb4 { padding-bottom: 4rem }\n  .sm-pl4 { padding-left: 4rem }\n  .sm-px4 { padding-left: 4rem; padding-right: 4rem }\n  .sm-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-p0  { padding:        0 }\n  .md-pt0 { padding-top:    0 }\n  .md-pr0 { padding-right:  0 }\n  .md-pb0 { padding-bottom: 0 }\n  .md-pl0 { padding-left:   0 }\n  .md-px0 { padding-left:   0; padding-right:  0 }\n  .md-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .md-p1  { padding: .5rem }\n  .md-pt1 { padding-top: .5rem }\n  .md-pr1 { padding-right: .5rem }\n  .md-pb1 { padding-bottom: .5rem }\n  .md-pl1 { padding-left: .5rem }\n  .md-px1 { padding-left: .5rem; padding-right: .5rem }\n  .md-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .md-p2  { padding: 1rem }\n  .md-pt2 { padding-top: 1rem }\n  .md-pr2 { padding-right: 1rem }\n  .md-pb2 { padding-bottom: 1rem }\n  .md-pl2 { padding-left: 1rem }\n  .md-px2 { padding-left: 1rem; padding-right: 1rem }\n  .md-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .md-p3  { padding: 2rem }\n  .md-pt3 { padding-top: 2rem }\n  .md-pr3 { padding-right: 2rem }\n  .md-pb3 { padding-bottom: 2rem }\n  .md-pl3 { padding-left: 2rem }\n  .md-px3 { padding-left: 2rem; padding-right: 2rem }\n  .md-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .md-p4  { padding: 4rem }\n  .md-pt4 { padding-top: 4rem }\n  .md-pr4 { padding-right: 4rem }\n  .md-pb4 { padding-bottom: 4rem }\n  .md-pl4 { padding-left: 4rem }\n  .md-px4 { padding-left: 4rem; padding-right: 4rem }\n  .md-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-p0  { padding:        0 }\n  .lg-pt0 { padding-top:    0 }\n  .lg-pr0 { padding-right:  0 }\n  .lg-pb0 { padding-bottom: 0 }\n  .lg-pl0 { padding-left:   0 }\n  .lg-px0 { padding-left:   0; padding-right:  0 }\n  .lg-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .lg-p1  { padding: .5rem }\n  .lg-pt1 { padding-top: .5rem }\n  .lg-pr1 { padding-right: .5rem }\n  .lg-pb1 { padding-bottom: .5rem }\n  .lg-pl1 { padding-left: .5rem }\n  .lg-px1 { padding-left: .5rem; padding-right: .5rem }\n  .lg-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .lg-p2  { padding: 1rem }\n  .lg-pt2 { padding-top: 1rem }\n  .lg-pr2 { padding-right: 1rem }\n  .lg-pb2 { padding-bottom: 1rem }\n  .lg-pl2 { padding-left: 1rem }\n  .lg-px2 { padding-left: 1rem; padding-right: 1rem }\n  .lg-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .lg-p3  { padding: 2rem }\n  .lg-pt3 { padding-top: 2rem }\n  .lg-pr3 { padding-right: 2rem }\n  .lg-pb3 { padding-bottom: 2rem }\n  .lg-pl3 { padding-left: 2rem }\n  .lg-px3 { padding-left: 2rem; padding-right: 2rem }\n  .lg-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .lg-p4  { padding: 4rem }\n  .lg-pt4 { padding-top: 4rem }\n  .lg-pr4 { padding-right: 4rem }\n  .lg-pb4 { padding-bottom: 4rem }\n  .lg-pl4 { padding-left: 4rem }\n  .lg-px4 { padding-left: 4rem; padding-right: 4rem }\n  .lg-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n/* Basscss Responsive Layout */\n\n@media (min-width: 40em) {\n\n  .sm-inline       { display: inline }\n  .sm-block        { display: block }\n  .sm-inline-block { display: inline-block }\n  .sm-table        { display: table }\n  .sm-table-cell   { display: table-cell }\n\n  .sm-overflow-hidden { overflow: hidden }\n  .sm-overflow-scroll { overflow: scroll }\n  .sm-overflow-auto   { overflow: auto }\n\n  .sm-left  { float: left }\n  .sm-right { float: right }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-inline       { display: inline }\n  .md-block        { display: block }\n  .md-inline-block { display: inline-block }\n  .md-table        { display: table }\n  .md-table-cell   { display: table-cell }\n\n  .md-overflow-hidden { overflow: hidden }\n  .md-overflow-scroll { overflow: scroll }\n  .md-overflow-auto   { overflow: auto }\n\n  .md-left  { float: left }\n  .md-right { float: right }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-inline       { display: inline }\n  .lg-block        { display: block }\n  .lg-inline-block { display: inline-block }\n  .lg-table        { display: table }\n  .lg-table-cell   { display: table-cell }\n\n  .lg-overflow-hidden { overflow: hidden }\n  .lg-overflow-scroll { overflow: scroll }\n  .lg-overflow-auto   { overflow: auto }\n\n  .lg-left  { float: left }\n  .lg-right { float: right }\n\n}\n\n/* Basscss Responsive Position */\n\n@media (min-width: 40em) {\n  .sm-relative { position: relative }\n  .sm-absolute { position: absolute }\n  .sm-fixed    { position: fixed }\n\n  .sm-top-0    { top: 0 }\n  .sm-right-0  { right: 0 }\n  .sm-bottom-0 { bottom: 0 }\n  .sm-left-0   { left: 0 }\n}\n\n@media (min-width: 52em) {\n  .md-relative { position: relative }\n  .md-absolute { position: absolute }\n  .md-fixed    { position: fixed }\n\n  .md-top-0    { top: 0 }\n  .md-right-0  { right: 0 }\n  .md-bottom-0 { bottom: 0 }\n  .md-left-0   { left: 0 }\n}\n\n@media (min-width: 64em) {\n  .lg-relative { position: relative }\n  .lg-absolute { position: absolute }\n  .lg-fixed    { position: fixed }\n\n  .lg-top-0    { top: 0 }\n  .lg-right-0  { right: 0 }\n  .lg-bottom-0 { bottom: 0 }\n  .lg-left-0   { left: 0 }\n}\n\n/* Basscss Responsive Typography */\n\n@media (min-width: 40em) {\n  .sm-left-align   { text-align: left }\n  .sm-center       { text-align: center }\n  .sm-right-align  { text-align: right }\n  .sm-justify      { text-align: justify }\n}\n\n@media (min-width: 52em) {\n  .md-left-align   { text-align: left }\n  .md-center       { text-align: center }\n  .md-right-align  { text-align: right }\n  .md-justify      { text-align: justify }\n}\n\n@media (min-width: 64em) {\n  .lg-left-align   { text-align: left }\n  .lg-center       { text-align: center }\n  .lg-right-align  { text-align: right }\n  .lg-justify      { text-align: justify }\n}\n\n/* Basscss Responsive Type Scale */\n\n@media (min-width: 40em) {\n  .sm-h00 { font-size: 4rem }\n  .sm-h0 { font-size: 3rem }\n  .sm-h1 { font-size: 2rem }\n  .sm-h2 { font-size: 1.5rem }\n  .sm-h3 { font-size: 1.25rem }\n  .sm-h4 { font-size: 1rem }\n  .sm-h5 { font-size: .875rem }\n  .sm-h6 { font-size: .75rem }\n}\n\n@media (min-width: 52em) {\n  .md-h00 { font-size: 4rem }\n  .md-h0 { font-size: 3rem }\n  .md-h1 { font-size: 2rem }\n  .md-h2 { font-size: 1.5rem }\n  .md-h3 { font-size: 1.25rem }\n  .md-h4 { font-size: 1rem }\n  .md-h5 { font-size: .875rem }\n  .md-h6 { font-size: .75rem }\n}\n\n@media (min-width: 64em) {\n  .lg-h00 { font-size: 4rem }\n  .lg-h0 { font-size: 3rem }\n  .lg-h1 { font-size: 2rem }\n  .lg-h2 { font-size: 1.5rem }\n  .lg-h3 { font-size: 1.25rem }\n  .lg-h4 { font-size: 1rem }\n  .lg-h5 { font-size: .875rem }\n  .lg-h6 { font-size: .75rem }\n}\n\n/* Basscss Colors */\n\n/* \n\n   VARIABLES\n\n   - Cool\n   - Warm\n   - Gray Scale\n\n*/\n\n.black  { color: #111111 }\n\n.gray   { color: #AAAAAA }\n\n.silver { color: #DDDDDD }\n\n.white  { color: #FFFFFF }\n\n.aqua  { color: #7FDBFF }\n\n.blue  { color: #0074D9 }\n\n.navy  { color: #001F3F }\n\n.teal  { color: #39CCCC }\n\n.green { color: #2ECC40 }\n\n.olive { color: #3D9970 }\n\n.lime  { color: #01FF70 }\n\n.yellow  { color: #FFDC00 }\n\n.orange  { color: #FF851B }\n\n.red     { color: #FF4136 }\n\n.fuchsia { color: #F012BE }\n\n.purple  { color: #B10DC9 }\n\n.maroon  { color: #85144B }\n\n.color-inherit { color: inherit }\n\n.muted { opacity: .5 }\n\n/* Basscss Background Colors */\n\n.bg-black  { background-color: #111111 }\n\n.bg-gray   { background-color: #AAAAAA }\n\n.bg-silver { background-color: #DDDDDD }\n\n.bg-white  { background-color: #FFFFFF }\n\n.bg-aqua  { background-color: #7FDBFF }\n\n.bg-blue  { background-color: #0074D9 }\n\n.bg-navy  { background-color: #001F3F }\n\n.bg-teal  { background-color: #39CCCC }\n\n.bg-green { background-color: #2ECC40 }\n\n.bg-olive { background-color: #3D9970 }\n\n.bg-lime  { background-color: #01FF70 }\n\n.bg-yellow  { background-color: #FFDC00 }\n\n.bg-orange  { background-color: #FF851B }\n\n.bg-red     { background-color: #FF4136 }\n\n.bg-fuchsia { background-color: #F012BE }\n\n.bg-purple  { background-color: #B10DC9 }\n\n.bg-maroon  { background-color: #85144B }\n\n/* Basscss Border Colors */\n\n.border-black  { border-color: #111111 }\n\n.border-gray   { border-color: #AAAAAA }\n\n.border-silver { border-color: #DDDDDD }\n\n.border-white  { border-color: #FFFFFF }\n\n.border-aqua  { border-color: #7FDBFF }\n\n.border-blue  { border-color: #0074D9 }\n\n.border-navy  { border-color: #001F3F }\n\n.border-teal  { border-color: #39CCCC }\n\n.border-green { border-color: #2ECC40 }\n\n.border-olive { border-color: #3D9970 }\n\n.border-lime  { border-color: #01FF70 }\n\n.border-yellow  { border-color: #FFDC00 }\n\n.border-orange  { border-color: #FF851B }\n\n.border-red     { border-color: #FF4136 }\n\n.border-fuchsia { border-color: #F012BE }\n\n.border-purple  { border-color: #B10DC9 }\n\n.border-maroon  { border-color: #85144B }\n\n/* Basscss Darken */\n\n.bg-darken-1 { background-color: rgba(0, 0, 0, .0625) }\n\n.bg-darken-2 { background-color: rgba(0, 0, 0, .125) }\n\n.bg-darken-3 { background-color: rgba(0, 0, 0, .25) }\n\n.bg-darken-4 { background-color: rgba(0, 0, 0, .5) }\n\n/* Basscss Lighten */\n\n.bg-lighten-1 { background-color: rgba(255, 255, 255, .0625) }\n\n.bg-lighten-2 { background-color: rgba(255, 255, 255, .125) }\n\n.bg-lighten-3 { background-color: rgba(255, 255, 255, .25) }\n\n.bg-lighten-4 { background-color: rgba(255, 255, 255, .5) }\n\n/* Basscss Background Images */\n\n.bg-cover   { background-size: cover }\n\n.bg-contain { background-size: contain }\n\n.bg-center  { background-position: center }\n\n.bg-top     { background-position: top }\n\n.bg-right   { background-position: right }\n\n.bg-bottom  { background-position: bottom }\n\n.bg-left    { background-position: left }\n\n.bg-no-repeat { background-repeat: no-repeat }\n\n.bg-repeat-x { background-repeat: repeat-x }\n\n.bg-repeat-y { background-repeat: repeat-y }\n\n/* Basscss All */\n\n.all-initial { all: initial }\n\n.all-unset { all: unset }\n\n.all-inherit { all: inherit }\n\n.all-revert { all: revert }\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(8) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(10) + ") format('woff2'), url(" + __webpack_require__(11) + ") format('woff'), url(" + __webpack_require__(12) + ") format('truetype'), url(" + __webpack_require__(13) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*body {*/\r\n/*background: grey;*/\r\n/*}*/\r\n\r\n/*.editor_group .code-textarea {*/\r\n/*resize: both !important;*/\r\n/*}*/\r\n\r\n/*.code-result_iframe {*/\r\n/*width: 100%;*/\r\n/*height: auto;*/\r\n/*min-height: 300px;*/\r\n/*-webkit-box-sizing: border-box;*/\r\n/*-moz-box-sizing: border-box;*/\r\n/*box-sizing: border-box;*/\r\n/*}*/\r\n\r\n/* Live Editor Styles */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nhtml,\r\nbody,\r\n.editor_section {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    background: #eaeaea;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    text-align: center;\r\n    color: #777;\r\n    margin: 0;\r\n    font-weight: 200;\r\n}\r\n\r\n.editor_section {\r\n    background: #fff;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 15px;\r\n    margin: 0;\r\n    box-shadow: rgba(0, 0, 0, .15) 0 15px 50px;\r\n    position: relative;\r\n}\r\n\r\n.editor_buttons {\r\n    text-align: right;\r\n}\r\n\r\n.clearLink {\r\n    -webkit-border-radius: 0;\r\n    -moz-border-radius: 0;\r\n    border-radius: 0px;\r\n    text-shadow: 1px 1px 3px #666666;\r\n    font-family: Courier New;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    background: #3498db;\r\n    padding: 5px 10px 5px 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n.clearLink:hover {\r\n    background: #3cb0fd;\r\n    text-decoration: none;\r\n}\r\n\r\n.editor_group .code_textarea {\r\n    font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n    width: 32%;\r\n    min-height: 150px;\r\n    margin: 15px 2% 0 0;\r\n    float: left;\r\n    font-size: 10pt;\r\n    line-height: 14pt;\r\n    font-weight: 200;\r\n    padding: 10px;\r\n    color: #333;\r\n    border: 1px solid #cdcdcd;\r\n    background: #fff;\r\n    box-shadow: inset rgba(0, 0, 0, .05) 0 3px 10px;\r\n    border-radius: 3px;\r\n    transition: all 0.2s ease-in-out;\r\n    appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.editor_group .code_textarea:focus {\r\n    border-color: #33dd33;\r\n}\r\n\r\n.editor_group .code_textarea.js {\r\n    margin: 15px 0 0 0;\r\n}\r\n\r\n.code_result_iframe {\r\n    width: 100%;\r\n    border: 1px solid #cdcdcd;\r\n    border-radius: 3px;\r\n    min-height: 400px;\r\n    margin: 15px 0 0 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    body {\r\n        padding: 50px 50px 0 50px;\r\n    }\r\n\r\n    html,\r\n    body,\r\n    .editor_section {\r\n        height: auto;\r\n    }\r\n\r\n}\r\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./material.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./material.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.cm-s-material {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n.cm-s-material .cm-variable-3 { color: #82B1FF; }\n.cm-s-material .cm-builtin { color: #DECB6B; }\n.cm-s-material .cm-atom { color: #F77669; }\n.cm-s-material .cm-number { color: #F77669; }\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-string { color: #C3E88D; }\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n.cm-s-material .cm-comment { color: #546E7A; }\n.cm-s-material .cm-variable { color: #82B1FF; }\n.cm-s-material .cm-tag { color: #80CBC4; }\n.cm-s-material .cm-meta { color: #80CBC4; }\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n.cm-s-material .cm-property { color: #80CBAE; }\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n.cm-s-material .cm-variable-3 { color: #DECB6B; }\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.CodeMirror = factory());
	}(this, (function () { 'use strict';

	// Kludges for bugs and behavior differences that can't be feature
	// detected are enabled based on userAgent etc sniffing.
	var userAgent = navigator.userAgent
	var platform = navigator.platform

	var gecko = /gecko\/\d/i.test(userAgent)
	var ie_upto10 = /MSIE \d/.test(userAgent)
	var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
	var ie = ie_upto10 || ie_11up
	var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1])
	var webkit = /WebKit\//.test(userAgent)
	var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
	var chrome = /Chrome\//.test(userAgent)
	var presto = /Opera\//.test(userAgent)
	var safari = /Apple Computer/.test(navigator.vendor)
	var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
	var phantom = /PhantomJS/.test(userAgent)

	var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
	// This is woefully incomplete. Suggestions for alternative methods welcome.
	var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
	var mac = ios || /Mac/.test(platform)
	var chromeOS = /\bCrOS\b/.test(userAgent)
	var windows = /win/i.test(platform)

	var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
	if (presto_version) { presto_version = Number(presto_version[1]) }
	if (presto_version && presto_version >= 15) { presto = false; webkit = true }
	// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
	var captureRightClick = gecko || (ie && ie_version >= 9)

	function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

	var rmClass = function(node, cls) {
	  var current = node.className
	  var match = classTest(cls).exec(current)
	  if (match) {
	    var after = current.slice(match.index + match[0].length)
	    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
	  }
	}

	function removeChildren(e) {
	  for (var count = e.childNodes.length; count > 0; --count)
	    { e.removeChild(e.firstChild) }
	  return e
	}

	function removeChildrenAndAdd(parent, e) {
	  return removeChildren(parent).appendChild(e)
	}

	function elt(tag, content, className, style) {
	  var e = document.createElement(tag)
	  if (className) { e.className = className }
	  if (style) { e.style.cssText = style }
	  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
	  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
	  return e
	}

	var range
	if (document.createRange) { range = function(node, start, end, endNode) {
	  var r = document.createRange()
	  r.setEnd(endNode || node, end)
	  r.setStart(node, start)
	  return r
	} }
	else { range = function(node, start, end) {
	  var r = document.body.createTextRange()
	  try { r.moveToElementText(node.parentNode) }
	  catch(e) { return r }
	  r.collapse(true)
	  r.moveEnd("character", end)
	  r.moveStart("character", start)
	  return r
	} }

	function contains(parent, child) {
	  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	    { child = child.parentNode }
	  if (parent.contains)
	    { return parent.contains(child) }
	  do {
	    if (child.nodeType == 11) { child = child.host }
	    if (child == parent) { return true }
	  } while (child = child.parentNode)
	}

	function activeElt() {
	  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
	  // IE < 10 will throw when accessed while the page is loading or in an iframe.
	  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
	  var activeElement
	  try {
	    activeElement = document.activeElement
	  } catch(e) {
	    activeElement = document.body || null
	  }
	  while (activeElement && activeElement.root && activeElement.root.activeElement)
	    { activeElement = activeElement.root.activeElement }
	  return activeElement
	}

	function addClass(node, cls) {
	  var current = node.className
	  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
	}
	function joinClasses(a, b) {
	  var as = a.split(" ")
	  for (var i = 0; i < as.length; i++)
	    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
	  return b
	}

	var selectInput = function(node) { node.select() }
	if (ios) // Mobile Safari apparently has a bug where select() is broken.
	  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
	else if (ie) // Suppress mysterious IE10 errors
	  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

	function bind(f) {
	  var args = Array.prototype.slice.call(arguments, 1)
	  return function(){return f.apply(null, args)}
	}

	function copyObj(obj, target, overwrite) {
	  if (!target) { target = {} }
	  for (var prop in obj)
	    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	      { target[prop] = obj[prop] } }
	  return target
	}

	// Counts the column offset in a string, taking tabs into account.
	// Used mostly to find indentation.
	function countColumn(string, end, tabSize, startIndex, startValue) {
	  if (end == null) {
	    end = string.search(/[^\s\u00a0]/)
	    if (end == -1) { end = string.length }
	  }
	  for (var i = startIndex || 0, n = startValue || 0;;) {
	    var nextTab = string.indexOf("\t", i)
	    if (nextTab < 0 || nextTab >= end)
	      { return n + (end - i) }
	    n += nextTab - i
	    n += tabSize - (n % tabSize)
	    i = nextTab + 1
	  }
	}

	function Delayed() {this.id = null}
	Delayed.prototype.set = function(ms, f) {
	  clearTimeout(this.id)
	  this.id = setTimeout(f, ms)
	}

	function indexOf(array, elt) {
	  for (var i = 0; i < array.length; ++i)
	    { if (array[i] == elt) { return i } }
	  return -1
	}

	// Number of pixels added to scroller and sizer to hide scrollbar
	var scrollerGap = 30

	// Returned or thrown by various protocols to signal 'I'm not
	// handling this'.
	var Pass = {toString: function(){return "CodeMirror.Pass"}}

	// Reused option objects for setSelection & friends
	var sel_dontScroll = {scroll: false};
	var sel_mouse = {origin: "*mouse"};
	var sel_move = {origin: "+move"};
	// The inverse of countColumn -- find the offset that corresponds to
	// a particular column.
	function findColumn(string, goal, tabSize) {
	  for (var pos = 0, col = 0;;) {
	    var nextTab = string.indexOf("\t", pos)
	    if (nextTab == -1) { nextTab = string.length }
	    var skipped = nextTab - pos
	    if (nextTab == string.length || col + skipped >= goal)
	      { return pos + Math.min(skipped, goal - col) }
	    col += nextTab - pos
	    col += tabSize - (col % tabSize)
	    pos = nextTab + 1
	    if (col >= goal) { return pos }
	  }
	}

	var spaceStrs = [""]
	function spaceStr(n) {
	  while (spaceStrs.length <= n)
	    { spaceStrs.push(lst(spaceStrs) + " ") }
	  return spaceStrs[n]
	}

	function lst(arr) { return arr[arr.length-1] }

	function map(array, f) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
	  return out
	}

	function insertSorted(array, value, score) {
	  var pos = 0, priority = score(value)
	  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
	  array.splice(pos, 0, value)
	}

	function nothing() {}

	function createObj(base, props) {
	  var inst
	  if (Object.create) {
	    inst = Object.create(base)
	  } else {
	    nothing.prototype = base
	    inst = new nothing()
	  }
	  if (props) { copyObj(props, inst) }
	  return inst
	}

	var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
	function isWordCharBasic(ch) {
	  return /\w/.test(ch) || ch > "\x80" &&
	    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
	}
	function isWordChar(ch, helper) {
	  if (!helper) { return isWordCharBasic(ch) }
	  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
	  return helper.test(ch)
	}

	function isEmpty(obj) {
	  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
	  return true
	}

	// Extending unicode characters. A series of a non-extending char +
	// any number of extending chars is treated as a single unit as far
	// as editing and measuring is concerned. This is not fully correct,
	// since some scripts/fonts/browsers also treat other configurations
	// of code points as a group.
	var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
	function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

	// The display handles the DOM integration, both for input reading
	// and content drawing. It holds references to DOM nodes and
	// display-related state.

	function Display(place, doc, input) {
	  var d = this
	  this.input = input

	  // Covers bottom-right square when both scrollbars are present.
	  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
	  d.scrollbarFiller.setAttribute("cm-not-content", "true")
	  // Covers bottom of gutter when coverGutterNextToScrollbar is on
	  // and h scrollbar is present.
	  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
	  d.gutterFiller.setAttribute("cm-not-content", "true")
	  // Will contain the actual code, positioned to cover the viewport.
	  d.lineDiv = elt("div", null, "CodeMirror-code")
	  // Elements are added to these to represent selection and cursors.
	  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
	  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
	  // A visibility: hidden element used to find the size of things.
	  d.measure = elt("div", null, "CodeMirror-measure")
	  // When lines outside of the viewport are measured, they are drawn in this.
	  d.lineMeasure = elt("div", null, "CodeMirror-measure")
	  // Wraps everything that needs to exist inside the vertically-padded coordinate system
	  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                    null, "position: relative; outline: none")
	  // Moved around its parent to cover visible view.
	  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
	  // Set to the height of the document, allowing scrolling.
	  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
	  d.sizerWidth = null
	  // Behavior of elts with overflow: auto and padding is
	  // inconsistent across browsers. This is used to ensure the
	  // scrollable area is big enough.
	  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
	  // Will contain the gutters, if any.
	  d.gutters = elt("div", null, "CodeMirror-gutters")
	  d.lineGutter = null
	  // Actual scrollable element.
	  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
	  d.scroller.setAttribute("tabIndex", "-1")
	  // The element in which the editor lives.
	  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

	  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
	  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

	  if (place) {
	    if (place.appendChild) { place.appendChild(d.wrapper) }
	    else { place(d.wrapper) }
	  }

	  // Current rendered range (may be bigger than the view window).
	  d.viewFrom = d.viewTo = doc.first
	  d.reportedViewFrom = d.reportedViewTo = doc.first
	  // Information about the rendered lines.
	  d.view = []
	  d.renderedView = null
	  // Holds info about a single rendered line when it was rendered
	  // for measurement, while not in view.
	  d.externalMeasured = null
	  // Empty space (in pixels) above the view
	  d.viewOffset = 0
	  d.lastWrapHeight = d.lastWrapWidth = 0
	  d.updateLineNumbers = null

	  d.nativeBarWidth = d.barHeight = d.barWidth = 0
	  d.scrollbarsClipped = false

	  // Used to only resize the line number gutter when necessary (when
	  // the amount of lines crosses a boundary that makes its width change)
	  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
	  // Set to true when a non-horizontal-scrolling line widget is
	  // added. As an optimization, line widget aligning is skipped when
	  // this is false.
	  d.alignWidgets = false

	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

	  // Tracks the maximum line length so that the horizontal scrollbar
	  // can be kept static when scrolling.
	  d.maxLine = null
	  d.maxLineLength = 0
	  d.maxLineChanged = false

	  // Used for measuring wheel scrolling granularity
	  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

	  // True when shift is held down.
	  d.shift = false

	  // Used to track whether anything happened since the context menu
	  // was opened.
	  d.selForContextMenu = null

	  d.activeTouch = null

	  input.init(d)
	}

	// Find the line object corresponding to the given line number.
	function getLine(doc, n) {
	  n -= doc.first
	  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
	  var chunk = doc
	  while (!chunk.lines) {
	    for (var i = 0;; ++i) {
	      var child = chunk.children[i], sz = child.chunkSize()
	      if (n < sz) { chunk = child; break }
	      n -= sz
	    }
	  }
	  return chunk.lines[n]
	}

	// Get the part of a document between two positions, as an array of
	// strings.
	function getBetween(doc, start, end) {
	  var out = [], n = start.line
	  doc.iter(start.line, end.line + 1, function (line) {
	    var text = line.text
	    if (n == end.line) { text = text.slice(0, end.ch) }
	    if (n == start.line) { text = text.slice(start.ch) }
	    out.push(text)
	    ++n
	  })
	  return out
	}
	// Get the lines between from and to, as array of strings.
	function getLines(doc, from, to) {
	  var out = []
	  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
	  return out
	}

	// Update the height of a line, propagating the height change
	// upwards to parent nodes.
	function updateLineHeight(line, height) {
	  var diff = height - line.height
	  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
	}

	// Given a line object, find its line number by walking up through
	// its parent links.
	function lineNo(line) {
	  if (line.parent == null) { return null }
	  var cur = line.parent, no = indexOf(cur.lines, line)
	  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	    for (var i = 0;; ++i) {
	      if (chunk.children[i] == cur) { break }
	      no += chunk.children[i].chunkSize()
	    }
	  }
	  return no + cur.first
	}

	// Find the line at the given vertical position, using the height
	// information in the document tree.
	function lineAtHeight(chunk, h) {
	  var n = chunk.first
	  outer: do {
	    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
	      var child = chunk.children[i$1], ch = child.height
	      if (h < ch) { chunk = child; continue outer }
	      h -= ch
	      n += child.chunkSize()
	    }
	    return n
	  } while (!chunk.lines)
	  var i = 0
	  for (; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i], lh = line.height
	    if (h < lh) { break }
	    h -= lh
	  }
	  return n + i
	}

	function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

	function lineNumberFor(options, i) {
	  return String(options.lineNumberFormatter(i + options.firstLineNumber))
	}

	// A Pos instance represents a position within the text.
	function Pos (line, ch) {
	  if (!(this instanceof Pos)) { return new Pos(line, ch) }
	  this.line = line; this.ch = ch
	}

	// Compare two positions, return 0 if they are the same, a negative
	// number when a is less, and a positive number otherwise.
	function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

	function copyPos(x) {return Pos(x.line, x.ch)}
	function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
	function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

	// Most of the external API clips given positions to make sure they
	// actually exist within the document.
	function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
	function clipPos(doc, pos) {
	  if (pos.line < doc.first) { return Pos(doc.first, 0) }
	  var last = doc.first + doc.size - 1
	  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
	  return clipToLen(pos, getLine(doc, pos.line).text.length)
	}
	function clipToLen(pos, linelen) {
	  var ch = pos.ch
	  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
	  else if (ch < 0) { return Pos(pos.line, 0) }
	  else { return pos }
	}
	function clipPosArray(doc, array) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
	  return out
	}

	// Optimize some code when these features are not used.
	var sawReadOnlySpans = false;
	var sawCollapsedSpans = false;
	function seeReadOnlySpans() {
	  sawReadOnlySpans = true
	}

	function seeCollapsedSpans() {
	  sawCollapsedSpans = true
	}

	// TEXTMARKER SPANS

	function MarkedSpan(marker, from, to) {
	  this.marker = marker
	  this.from = from; this.to = to
	}

	// Search an array of spans for a span matching the given marker.
	function getMarkedSpanFor(spans, marker) {
	  if (spans) { for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.marker == marker) { return span }
	  } }
	}
	// Remove a span from an array, returning undefined if no spans are
	// left (we don't store arrays for lines without spans).
	function removeMarkedSpan(spans, span) {
	  var r
	  for (var i = 0; i < spans.length; ++i)
	    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
	  return r
	}
	// Add a span to a line.
	function addMarkedSpan(line, span) {
	  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
	  span.marker.attachLine(line)
	}

	// Used for the algorithm that adjusts markers for a change in the
	// document. These functions cut an array of spans at a given
	// character position, returning an array of remaining chunks (or
	// undefined if nothing remains).
	function markedSpansBefore(old, startCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
	    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
	    }
	  } }
	  return nw
	}
	function markedSpansAfter(old, endCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
	    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                            span.to == null ? null : span.to - endCh))
	    }
	  } }
	  return nw
	}

	// Given a change object, compute the new set of marker spans that
	// cover the line in which the change took place. Removes spans
	// entirely within the change, reconnects spans belonging to the
	// same marker that appear on both sides of the change, and cuts off
	// spans partially within the change. Returns an array of span
	// arrays with one element for each line in (after) the change.
	function stretchSpansOverChange(doc, change) {
	  if (change.full) { return null }
	  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
	  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
	  if (!oldFirst && !oldLast) { return null }

	  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
	  // Get the spans that 'stick out' on both sides
	  var first = markedSpansBefore(oldFirst, startCh, isInsert)
	  var last = markedSpansAfter(oldLast, endCh, isInsert)

	  // Next, merge those two ends
	  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
	  if (first) {
	    // Fix up .to properties of first
	    for (var i = 0; i < first.length; ++i) {
	      var span = first[i]
	      if (span.to == null) {
	        var found = getMarkedSpanFor(last, span.marker)
	        if (!found) { span.to = startCh }
	        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
	      }
	    }
	  }
	  if (last) {
	    // Fix up .from in last (or move them into first in case of sameLine)
	    for (var i$1 = 0; i$1 < last.length; ++i$1) {
	      var span$1 = last[i$1]
	      if (span$1.to != null) { span$1.to += offset }
	      if (span$1.from == null) {
	        var found$1 = getMarkedSpanFor(first, span$1.marker)
	        if (!found$1) {
	          span$1.from = offset
	          if (sameLine) { (first || (first = [])).push(span$1) }
	        }
	      } else {
	        span$1.from += offset
	        if (sameLine) { (first || (first = [])).push(span$1) }
	      }
	    }
	  }
	  // Make sure we didn't create any zero-length spans
	  if (first) { first = clearEmptySpans(first) }
	  if (last && last != first) { last = clearEmptySpans(last) }

	  var newMarkers = [first]
	  if (!sameLine) {
	    // Fill gap with whole-line-spans
	    var gap = change.text.length - 2, gapMarkers
	    if (gap > 0 && first)
	      { for (var i$2 = 0; i$2 < first.length; ++i$2)
	        { if (first[i$2].to == null)
	          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
	    for (var i$3 = 0; i$3 < gap; ++i$3)
	      { newMarkers.push(gapMarkers) }
	    newMarkers.push(last)
	  }
	  return newMarkers
	}

	// Remove spans that are empty and don't have a clearWhenEmpty
	// option of false.
	function clearEmptySpans(spans) {
	  for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	      { spans.splice(i--, 1) }
	  }
	  if (!spans.length) { return null }
	  return spans
	}

	// Used to 'clip' out readOnly ranges when making a change.
	function removeReadOnlyRanges(doc, from, to) {
	  var markers = null
	  doc.iter(from.line, to.line + 1, function (line) {
	    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	      var mark = line.markedSpans[i].marker
	      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	        { (markers || (markers = [])).push(mark) }
	    } }
	  })
	  if (!markers) { return null }
	  var parts = [{from: from, to: to}]
	  for (var i = 0; i < markers.length; ++i) {
	    var mk = markers[i], m = mk.find(0)
	    for (var j = 0; j < parts.length; ++j) {
	      var p = parts[j]
	      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
	      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
	      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	        { newParts.push({from: p.from, to: m.from}) }
	      if (dto > 0 || !mk.inclusiveRight && !dto)
	        { newParts.push({from: m.to, to: p.to}) }
	      parts.splice.apply(parts, newParts)
	      j += newParts.length - 1
	    }
	  }
	  return parts
	}

	// Connect or disconnect spans from a line.
	function detachMarkedSpans(line) {
	  var spans = line.markedSpans
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.detachLine(line) }
	  line.markedSpans = null
	}
	function attachMarkedSpans(line, spans) {
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.attachLine(line) }
	  line.markedSpans = spans
	}

	// Helpers used when computing which overlapping collapsed span
	// counts as the larger one.
	function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
	function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

	// Returns a number indicating which of two overlapping collapsed
	// spans is larger (and thus includes the other). Falls back to
	// comparing ids when the spans cover exactly the same range.
	function compareCollapsedMarkers(a, b) {
	  var lenDiff = a.lines.length - b.lines.length
	  if (lenDiff != 0) { return lenDiff }
	  var aPos = a.find(), bPos = b.find()
	  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
	  if (fromCmp) { return -fromCmp }
	  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
	  if (toCmp) { return toCmp }
	  return b.id - a.id
	}

	// Find out whether a line ends or starts in a collapsed span. If
	// so, return the marker for that span.
	function collapsedSpanAtSide(line, start) {
	  var sps = sawCollapsedSpans && line.markedSpans, found
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	      { found = sp.marker }
	  } }
	  return found
	}
	function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
	function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

	// Test whether there exists a collapsed span that partially
	// overlaps (covers the start or end, but not both) of a new span.
	// Such overlap is not allowed.
	function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	  var line = getLine(doc, lineNo)
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var i = 0; i < sps.length; ++i) {
	    var sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    var found = sp.marker.find(0)
	    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
	    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
	    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
	    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	      { return true }
	  } }
	}

	// A visual line is a line as drawn on the screen. Folding, for
	// example, can cause multiple logical lines to appear on the same
	// visual line. This finds the start of the visual line that the
	// given line is part of (usually that is the line itself).
	function visualLine(line) {
	  var merged
	  while (merged = collapsedSpanAtStart(line))
	    { line = merged.find(-1, true).line }
	  return line
	}

	// Returns an array of logical lines that continue the visual line
	// started by the argument, or undefined if there are no such lines.
	function visualLineContinued(line) {
	  var merged, lines
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    ;(lines || (lines = [])).push(line)
	  }
	  return lines
	}

	// Get the line number of the start of the visual line that the
	// given line number is part of.
	function visualLineNo(doc, lineN) {
	  var line = getLine(doc, lineN), vis = visualLine(line)
	  if (line == vis) { return lineN }
	  return lineNo(vis)
	}

	// Get the line number of the start of the next visual line after
	// the given line.
	function visualLineEndNo(doc, lineN) {
	  if (lineN > doc.lastLine()) { return lineN }
	  var line = getLine(doc, lineN), merged
	  if (!lineIsHidden(doc, line)) { return lineN }
	  while (merged = collapsedSpanAtEnd(line))
	    { line = merged.find(1, true).line }
	  return lineNo(line) + 1
	}

	// Compute whether a line is hidden. Lines count as hidden when they
	// are part of a visual line that starts with another line, or when
	// they are entirely covered by collapsed, non-widget span.
	function lineIsHidden(doc, line) {
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    if (sp.from == null) { return true }
	    if (sp.marker.widgetNode) { continue }
	    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	      { return true }
	  } }
	}
	function lineIsHiddenInner(doc, line, span) {
	  if (span.to == null) {
	    var end = span.marker.find(1, true)
	    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
	  }
	  if (span.marker.inclusiveRight && span.to == line.text.length)
	    { return true }
	  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
	    sp = line.markedSpans[i]
	    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	        (sp.to == null || sp.to != span.from) &&
	        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	        lineIsHiddenInner(doc, line, sp)) { return true }
	  }
	}

	// Find the height above the given line.
	function heightAtLine(lineObj) {
	  lineObj = visualLine(lineObj)

	  var h = 0, chunk = lineObj.parent
	  for (var i = 0; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i]
	    if (line == lineObj) { break }
	    else { h += line.height }
	  }
	  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
	      var cur = p.children[i$1]
	      if (cur == chunk) { break }
	      else { h += cur.height }
	    }
	  }
	  return h
	}

	// Compute the character length of a line, taking into account
	// collapsed ranges (see markText) that might hide parts, and join
	// other lines onto it.
	function lineLength(line) {
	  if (line.height == 0) { return 0 }
	  var len = line.text.length, merged, cur = line
	  while (merged = collapsedSpanAtStart(cur)) {
	    var found = merged.find(0, true)
	    cur = found.from.line
	    len += found.from.ch - found.to.ch
	  }
	  cur = line
	  while (merged = collapsedSpanAtEnd(cur)) {
	    var found$1 = merged.find(0, true)
	    len -= cur.text.length - found$1.from.ch
	    cur = found$1.to.line
	    len += cur.text.length - found$1.to.ch
	  }
	  return len
	}

	// Find the longest line in the document.
	function findMaxLine(cm) {
	  var d = cm.display, doc = cm.doc
	  d.maxLine = getLine(doc, doc.first)
	  d.maxLineLength = lineLength(d.maxLine)
	  d.maxLineChanged = true
	  doc.iter(function (line) {
	    var len = lineLength(line)
	    if (len > d.maxLineLength) {
	      d.maxLineLength = len
	      d.maxLine = line
	    }
	  })
	}

	// BIDI HELPERS

	function iterateBidiSections(order, from, to, f) {
	  if (!order) { return f(from, to, "ltr") }
	  var found = false
	  for (var i = 0; i < order.length; ++i) {
	    var part = order[i]
	    if (part.from < to && part.to > from || from == to && part.to == from) {
	      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
	      found = true
	    }
	  }
	  if (!found) { f(from, to, "ltr") }
	}

	function bidiLeft(part) { return part.level % 2 ? part.to : part.from }
	function bidiRight(part) { return part.level % 2 ? part.from : part.to }

	function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0 }
	function lineRight(line) {
	  var order = getOrder(line)
	  if (!order) { return line.text.length }
	  return bidiRight(lst(order))
	}

	function compareBidiLevel(order, a, b) {
	  var linedir = order[0].level
	  if (a == linedir) { return true }
	  if (b == linedir) { return false }
	  return a < b
	}

	var bidiOther = null
	function getBidiPartAt(order, pos) {
	  var found
	  bidiOther = null
	  for (var i = 0; i < order.length; ++i) {
	    var cur = order[i]
	    if (cur.from < pos && cur.to > pos) { return i }
	    if ((cur.from == pos || cur.to == pos)) {
	      if (found == null) {
	        found = i
	      } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	        if (cur.from != cur.to) { bidiOther = found }
	        return i
	      } else {
	        if (cur.from != cur.to) { bidiOther = i }
	        return found
	      }
	    }
	  }
	  return found
	}

	function moveInLine(line, pos, dir, byUnit) {
	  if (!byUnit) { return pos + dir }
	  do { pos += dir }
	  while (pos > 0 && isExtendingChar(line.text.charAt(pos)))
	  return pos
	}

	// This is needed in order to move 'visually' through bi-directional
	// text -- i.e., pressing left should make the cursor go left, even
	// when in RTL text. The tricky part is the 'jumps', where RTL and
	// LTR text touch each other. This often requires the cursor offset
	// to move more than one unit, in order to visually move one unit.
	function moveVisually(line, start, dir, byUnit) {
	  var bidi = getOrder(line)
	  if (!bidi) { return moveLogically(line, start, dir, byUnit) }
	  var pos = getBidiPartAt(bidi, start), part = bidi[pos]
	  var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit)

	  for (;;) {
	    if (target > part.from && target < part.to) { return target }
	    if (target == part.from || target == part.to) {
	      if (getBidiPartAt(bidi, target) == pos) { return target }
	      part = bidi[pos += dir]
	      return (dir > 0) == part.level % 2 ? part.to : part.from
	    } else {
	      part = bidi[pos += dir]
	      if (!part) { return null }
	      if ((dir > 0) == part.level % 2)
	        { target = moveInLine(line, part.to, -1, byUnit) }
	      else
	        { target = moveInLine(line, part.from, 1, byUnit) }
	    }
	  }
	}

	function moveLogically(line, start, dir, byUnit) {
	  var target = start + dir
	  if (byUnit) { while (target > 0 && isExtendingChar(line.text.charAt(target))) { target += dir } }
	  return target < 0 || target > line.text.length ? null : target
	}

	// Bidirectional ordering algorithm
	// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	// that this (partially) implements.

	// One-char codes used for character types:
	// L (L):   Left-to-Right
	// R (R):   Right-to-Left
	// r (AL):  Right-to-Left Arabic
	// 1 (EN):  European Number
	// + (ES):  European Number Separator
	// % (ET):  European Number Terminator
	// n (AN):  Arabic Number
	// , (CS):  Common Number Separator
	// m (NSM): Non-Spacing Mark
	// b (BN):  Boundary Neutral
	// s (B):   Paragraph Separator
	// t (S):   Segment Separator
	// w (WS):  Whitespace
	// N (ON):  Other Neutrals

	// Returns null if characters are ordered as they appear
	// (left-to-right), or an array of sections ({from, to, level}
	// objects) in the order in which they occur visually.
	var bidiOrdering = (function() {
	  // Character types for codepoints 0 to 0xff
	  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
	  // Character types for codepoints 0x600 to 0x6f9
	  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
	  function charType(code) {
	    if (code <= 0xf7) { return lowTypes.charAt(code) }
	    else if (0x590 <= code && code <= 0x5f4) { return "R" }
	    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
	    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
	    else if (0x2000 <= code && code <= 0x200b) { return "w" }
	    else if (code == 0x200c) { return "b" }
	    else { return "L" }
	  }

	  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
	  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
	  // Browsers seem to always treat the boundaries of block elements as being L.
	  var outerType = "L"

	  function BidiSpan(level, from, to) {
	    this.level = level
	    this.from = from; this.to = to
	  }

	  return function(str) {
	    if (!bidiRE.test(str)) { return false }
	    var len = str.length, types = []
	    for (var i = 0; i < len; ++i)
	      { types.push(charType(str.charCodeAt(i))) }

	    // W1. Examine each non-spacing mark (NSM) in the level run, and
	    // change the type of the NSM to the type of the previous
	    // character. If the NSM is at the start of the level run, it will
	    // get the type of sor.
	    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
	      var type = types[i$1]
	      if (type == "m") { types[i$1] = prev }
	      else { prev = type }
	    }

	    // W2. Search backwards from each instance of a European number
	    // until the first strong type (R, L, AL, or sor) is found. If an
	    // AL is found, change the type of the European number to Arabic
	    // number.
	    // W3. Change all ALs to R.
	    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
	      var type$1 = types[i$2]
	      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
	      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
	    }

	    // W4. A single European separator between two European numbers
	    // changes to a European number. A single common separator between
	    // two numbers of the same type changes to that type.
	    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
	      var type$2 = types[i$3]
	      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
	      else if (type$2 == "," && prev$1 == types[i$3+1] &&
	               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
	      prev$1 = type$2
	    }

	    // W5. A sequence of European terminators adjacent to European
	    // numbers changes to all European numbers.
	    // W6. Otherwise, separators and terminators change to Other
	    // Neutral.
	    for (var i$4 = 0; i$4 < len; ++i$4) {
	      var type$3 = types[i$4]
	      if (type$3 == ",") { types[i$4] = "N" }
	      else if (type$3 == "%") {
	        var end = (void 0)
	        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
	        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
	        for (var j = i$4; j < end; ++j) { types[j] = replace }
	        i$4 = end - 1
	      }
	    }

	    // W7. Search backwards from each instance of a European number
	    // until the first strong type (R, L, or sor) is found. If an L is
	    // found, then change the type of the European number to L.
	    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
	      var type$4 = types[i$5]
	      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
	      else if (isStrong.test(type$4)) { cur$1 = type$4 }
	    }

	    // N1. A sequence of neutrals takes the direction of the
	    // surrounding strong text if the text on both sides has the same
	    // direction. European and Arabic numbers act as if they were R in
	    // terms of their influence on neutrals. Start-of-level-run (sor)
	    // and end-of-level-run (eor) are used at level run boundaries.
	    // N2. Any remaining neutrals take the embedding direction.
	    for (var i$6 = 0; i$6 < len; ++i$6) {
	      if (isNeutral.test(types[i$6])) {
	        var end$1 = (void 0)
	        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
	        var before = (i$6 ? types[i$6-1] : outerType) == "L"
	        var after = (end$1 < len ? types[end$1] : outerType) == "L"
	        var replace$1 = before || after ? "L" : "R"
	        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
	        i$6 = end$1 - 1
	      }
	    }

	    // Here we depart from the documented algorithm, in order to avoid
	    // building up an actual levels array. Since there are only three
	    // levels (0, 1, 2) in an implementation that doesn't take
	    // explicit embedding into account, we can build up the order on
	    // the fly, without following the level-based algorithm.
	    var order = [], m
	    for (var i$7 = 0; i$7 < len;) {
	      if (countsAsLeft.test(types[i$7])) {
	        var start = i$7
	        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
	        order.push(new BidiSpan(0, start, i$7))
	      } else {
	        var pos = i$7, at = order.length
	        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
	        for (var j$2 = pos; j$2 < i$7;) {
	          if (countsAsNum.test(types[j$2])) {
	            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
	            var nstart = j$2
	            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
	            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
	            pos = j$2
	          } else { ++j$2 }
	        }
	        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
	      }
	    }
	    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	      order[0].from = m[0].length
	      order.unshift(new BidiSpan(0, 0, m[0].length))
	    }
	    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	      lst(order).to -= m[0].length
	      order.push(new BidiSpan(0, len - m[0].length, len))
	    }
	    if (order[0].level == 2)
	      { order.unshift(new BidiSpan(1, order[0].to, order[0].to)) }
	    if (order[0].level != lst(order).level)
	      { order.push(new BidiSpan(order[0].level, len, len)) }

	    return order
	  }
	})()

	// Get the bidi ordering for the given line (and cache it). Returns
	// false for lines that are fully left-to-right, and an array of
	// BidiSpan objects otherwise.
	function getOrder(line) {
	  var order = line.order
	  if (order == null) { order = line.order = bidiOrdering(line.text) }
	  return order
	}

	// EVENT HANDLING

	// Lightweight event framework. on/off also work on DOM nodes,
	// registering native DOM handlers.

	var noHandlers = []

	var on = function(emitter, type, f) {
	  if (emitter.addEventListener) {
	    emitter.addEventListener(type, f, false)
	  } else if (emitter.attachEvent) {
	    emitter.attachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers || (emitter._handlers = {})
	    map[type] = (map[type] || noHandlers).concat(f)
	  }
	}

	function getHandlers(emitter, type) {
	  return emitter._handlers && emitter._handlers[type] || noHandlers
	}

	function off(emitter, type, f) {
	  if (emitter.removeEventListener) {
	    emitter.removeEventListener(type, f, false)
	  } else if (emitter.detachEvent) {
	    emitter.detachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers, arr = map && map[type]
	    if (arr) {
	      var index = indexOf(arr, f)
	      if (index > -1)
	        { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)) }
	    }
	  }
	}

	function signal(emitter, type /*, values...*/) {
	  var handlers = getHandlers(emitter, type)
	  if (!handlers.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2)
	  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
	}

	// The DOM events that CodeMirror handles can be overridden by
	// registering a (non-DOM) handler on the editor for the event name,
	// and preventDefault-ing the event in that handler.
	function signalDOMEvent(cm, e, override) {
	  if (typeof e == "string")
	    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
	  signal(cm, override || e.type, cm, e)
	  return e_defaultPrevented(e) || e.codemirrorIgnore
	}

	function signalCursorActivity(cm) {
	  var arr = cm._handlers && cm._handlers.cursorActivity
	  if (!arr) { return }
	  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
	  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
	    { set.push(arr[i]) } }
	}

	function hasHandler(emitter, type) {
	  return getHandlers(emitter, type).length > 0
	}

	// Add on and off methods to a constructor's prototype, to make
	// registering events on such objects more convenient.
	function eventMixin(ctor) {
	  ctor.prototype.on = function(type, f) {on(this, type, f)}
	  ctor.prototype.off = function(type, f) {off(this, type, f)}
	}

	// Due to the fact that we still support jurassic IE versions, some
	// compatibility wrappers are needed.

	function e_preventDefault(e) {
	  if (e.preventDefault) { e.preventDefault() }
	  else { e.returnValue = false }
	}
	function e_stopPropagation(e) {
	  if (e.stopPropagation) { e.stopPropagation() }
	  else { e.cancelBubble = true }
	}
	function e_defaultPrevented(e) {
	  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
	}
	function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

	function e_target(e) {return e.target || e.srcElement}
	function e_button(e) {
	  var b = e.which
	  if (b == null) {
	    if (e.button & 1) { b = 1 }
	    else if (e.button & 2) { b = 3 }
	    else if (e.button & 4) { b = 2 }
	  }
	  if (mac && e.ctrlKey && b == 1) { b = 3 }
	  return b
	}

	// Detect drag-and-drop
	var dragAndDrop = function() {
	  // There is *some* kind of drag-and-drop support in IE6-8, but I
	  // couldn't get it to work yet.
	  if (ie && ie_version < 9) { return false }
	  var div = elt('div')
	  return "draggable" in div || "dragDrop" in div
	}()

	var zwspSupported
	function zeroWidthElement(measure) {
	  if (zwspSupported == null) {
	    var test = elt("span", "\u200b")
	    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
	    if (measure.firstChild.offsetHeight != 0)
	      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
	  }
	  var node = zwspSupported ? elt("span", "\u200b") :
	    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
	  node.setAttribute("cm-text", "")
	  return node
	}

	// Feature-detect IE's crummy client rect reporting for bidi text
	var badBidiRects
	function hasBadBidiRects(measure) {
	  if (badBidiRects != null) { return badBidiRects }
	  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
	  var r0 = range(txt, 0, 1).getBoundingClientRect()
	  var r1 = range(txt, 1, 2).getBoundingClientRect()
	  removeChildren(measure)
	  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
	  return badBidiRects = (r1.right - r0.right < 3)
	}

	// See if "".split is the broken IE version, if so, provide an
	// alternative way to split lines.
	var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
	  var pos = 0, result = [], l = string.length
	  while (pos <= l) {
	    var nl = string.indexOf("\n", pos)
	    if (nl == -1) { nl = string.length }
	    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
	    var rt = line.indexOf("\r")
	    if (rt != -1) {
	      result.push(line.slice(0, rt))
	      pos += rt + 1
	    } else {
	      result.push(line)
	      pos = nl + 1
	    }
	  }
	  return result
	} : function (string) { return string.split(/\r\n?|\n/); }

	var hasSelection = window.getSelection ? function (te) {
	  try { return te.selectionStart != te.selectionEnd }
	  catch(e) { return false }
	} : function (te) {
	  var range
	  try {range = te.ownerDocument.selection.createRange()}
	  catch(e) {}
	  if (!range || range.parentElement() != te) { return false }
	  return range.compareEndPoints("StartToEnd", range) != 0
	}

	var hasCopyEvent = (function () {
	  var e = elt("div")
	  if ("oncopy" in e) { return true }
	  e.setAttribute("oncopy", "return;")
	  return typeof e.oncopy == "function"
	})()

	var badZoomedRects = null
	function hasBadZoomedRects(measure) {
	  if (badZoomedRects != null) { return badZoomedRects }
	  var node = removeChildrenAndAdd(measure, elt("span", "x"))
	  var normal = node.getBoundingClientRect()
	  var fromRange = range(node, 0, 1).getBoundingClientRect()
	  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
	}

	var modes = {};
	var mimeModes = {};
	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	function defineMode(name, mode) {
	  if (arguments.length > 2)
	    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
	  modes[name] = mode
	}

	function defineMIME(mime, spec) {
	  mimeModes[mime] = spec
	}

	// Given a MIME type, a {name, ...options} config object, or a name
	// string, return a mode config object.
	function resolveMode(spec) {
	  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	    spec = mimeModes[spec]
	  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	    var found = mimeModes[spec.name]
	    if (typeof found == "string") { found = {name: found} }
	    spec = createObj(found, spec)
	    spec.name = found.name
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	    return resolveMode("application/xml")
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	    return resolveMode("application/json")
	  }
	  if (typeof spec == "string") { return {name: spec} }
	  else { return spec || {name: "null"} }
	}

	// Given a mode spec (anything that resolveMode accepts), find and
	// initialize an actual mode object.
	function getMode(options, spec) {
	  spec = resolveMode(spec)
	  var mfactory = modes[spec.name]
	  if (!mfactory) { return getMode(options, "text/plain") }
	  var modeObj = mfactory(options, spec)
	  if (modeExtensions.hasOwnProperty(spec.name)) {
	    var exts = modeExtensions[spec.name]
	    for (var prop in exts) {
	      if (!exts.hasOwnProperty(prop)) { continue }
	      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
	      modeObj[prop] = exts[prop]
	    }
	  }
	  modeObj.name = spec.name
	  if (spec.helperType) { modeObj.helperType = spec.helperType }
	  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
	    { modeObj[prop$1] = spec.modeProps[prop$1] } }

	  return modeObj
	}

	// This can be used to attach properties to mode objects from
	// outside the actual mode definition.
	var modeExtensions = {}
	function extendMode(mode, properties) {
	  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
	  copyObj(properties, exts)
	}

	function copyState(mode, state) {
	  if (state === true) { return state }
	  if (mode.copyState) { return mode.copyState(state) }
	  var nstate = {}
	  for (var n in state) {
	    var val = state[n]
	    if (val instanceof Array) { val = val.concat([]) }
	    nstate[n] = val
	  }
	  return nstate
	}

	// Given a mode and a state (for that mode), find the inner mode and
	// state at the position that the state refers to.
	function innerMode(mode, state) {
	  var info
	  while (mode.innerMode) {
	    info = mode.innerMode(state)
	    if (!info || info.mode == mode) { break }
	    state = info.state
	    mode = info.mode
	  }
	  return info || {mode: mode, state: state}
	}

	function startState(mode, a1, a2) {
	  return mode.startState ? mode.startState(a1, a2) : true
	}

	// STRING STREAM

	// Fed to the mode parsers, provides helper functions to make
	// parsers more succinct.

	var StringStream = function(string, tabSize) {
	  this.pos = this.start = 0
	  this.string = string
	  this.tabSize = tabSize || 8
	  this.lastColumnPos = this.lastColumnValue = 0
	  this.lineStart = 0
	}

	StringStream.prototype = {
	  eol: function() {return this.pos >= this.string.length},
	  sol: function() {return this.pos == this.lineStart},
	  peek: function() {return this.string.charAt(this.pos) || undefined},
	  next: function() {
	    if (this.pos < this.string.length)
	      { return this.string.charAt(this.pos++) }
	  },
	  eat: function(match) {
	    var ch = this.string.charAt(this.pos)
	    var ok
	    if (typeof match == "string") { ok = ch == match }
	    else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
	    if (ok) {++this.pos; return ch}
	  },
	  eatWhile: function(match) {
	    var start = this.pos
	    while (this.eat(match)){}
	    return this.pos > start
	  },
	  eatSpace: function() {
	    var this$1 = this;

	    var start = this.pos
	    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
	    return this.pos > start
	  },
	  skipToEnd: function() {this.pos = this.string.length},
	  skipTo: function(ch) {
	    var found = this.string.indexOf(ch, this.pos)
	    if (found > -1) {this.pos = found; return true}
	  },
	  backUp: function(n) {this.pos -= n},
	  column: function() {
	    if (this.lastColumnPos < this.start) {
	      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
	      this.lastColumnPos = this.start
	    }
	    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  indentation: function() {
	    return countColumn(this.string, null, this.tabSize) -
	      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  match: function(pattern, consume, caseInsensitive) {
	    if (typeof pattern == "string") {
	      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
	      var substr = this.string.substr(this.pos, pattern.length)
	      if (cased(substr) == cased(pattern)) {
	        if (consume !== false) { this.pos += pattern.length }
	        return true
	      }
	    } else {
	      var match = this.string.slice(this.pos).match(pattern)
	      if (match && match.index > 0) { return null }
	      if (match && consume !== false) { this.pos += match[0].length }
	      return match
	    }
	  },
	  current: function(){return this.string.slice(this.start, this.pos)},
	  hideFirstChars: function(n, inner) {
	    this.lineStart += n
	    try { return inner() }
	    finally { this.lineStart -= n }
	  }
	}

	// Compute a style array (an array starting with a mode generation
	// -- for invalidation -- followed by pairs of end positions and
	// style strings), which is used to highlight the tokens on the
	// line.
	function highlightLine(cm, line, state, forceToEnd) {
	  // A styles array always starts with a number identifying the
	  // mode/overlays that it is based on (for easy invalidation).
	  var st = [cm.state.modeGen], lineClasses = {}
	  // Compute the base array of styles
	  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
	    lineClasses, forceToEnd)

	  // Run overlays, adjust style array.
	  var loop = function ( o ) {
	    var overlay = cm.state.overlays[o], i = 1, at = 0
	    runMode(cm, line.text, overlay.mode, true, function (end, style) {
	      var start = i
	      // Ensure there's a token end at the current position, and that i points at it
	      while (at < end) {
	        var i_end = st[i]
	        if (i_end > end)
	          { st.splice(i, 1, end, st[i+1], i_end) }
	        i += 2
	        at = Math.min(end, i_end)
	      }
	      if (!style) { return }
	      if (overlay.opaque) {
	        st.splice(start, i - start, end, "overlay " + style)
	        i = start + 2
	      } else {
	        for (; start < i; start += 2) {
	          var cur = st[start+1]
	          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
	        }
	      }
	    }, lineClasses)
	  };

	  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

	  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
	}

	function getLineStyles(cm, line, updateFrontier) {
	  if (!line.styles || line.styles[0] != cm.state.modeGen) {
	    var state = getStateBefore(cm, lineNo(line))
	    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
	    line.stateAfter = state
	    line.styles = result.styles
	    if (result.classes) { line.styleClasses = result.classes }
	    else if (line.styleClasses) { line.styleClasses = null }
	    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
	  }
	  return line.styles
	}

	function getStateBefore(cm, n, precise) {
	  var doc = cm.doc, display = cm.display
	  if (!doc.mode.startState) { return true }
	  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
	  if (!state) { state = startState(doc.mode) }
	  else { state = copyState(doc.mode, state) }
	  doc.iter(pos, n, function (line) {
	    processLine(cm, line.text, state)
	    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
	    line.stateAfter = save ? copyState(doc.mode, state) : null
	    ++pos
	  })
	  if (precise) { doc.frontier = pos }
	  return state
	}

	// Lightweight form of highlight -- proceed over this line and
	// update state, but don't save a style array. Used for lines that
	// aren't currently visible.
	function processLine(cm, text, state, startAt) {
	  var mode = cm.doc.mode
	  var stream = new StringStream(text, cm.options.tabSize)
	  stream.start = stream.pos = startAt || 0
	  if (text == "") { callBlankLine(mode, state) }
	  while (!stream.eol()) {
	    readToken(mode, stream, state)
	    stream.start = stream.pos
	  }
	}

	function callBlankLine(mode, state) {
	  if (mode.blankLine) { return mode.blankLine(state) }
	  if (!mode.innerMode) { return }
	  var inner = innerMode(mode, state)
	  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
	}

	function readToken(mode, stream, state, inner) {
	  for (var i = 0; i < 10; i++) {
	    if (inner) { inner[0] = innerMode(mode, state).mode }
	    var style = mode.token(stream, state)
	    if (stream.pos > stream.start) { return style }
	  }
	  throw new Error("Mode " + mode.name + " failed to advance stream.")
	}

	// Utility for getTokenAt and getLineTokens
	function takeToken(cm, pos, precise, asArray) {
	  var getObj = function (copy) { return ({
	    start: stream.start, end: stream.pos,
	    string: stream.current(),
	    type: style || null,
	    state: copy ? copyState(doc.mode, state) : state
	  }); }

	  var doc = cm.doc, mode = doc.mode, style
	  pos = clipPos(doc, pos)
	  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
	  var stream = new StringStream(line.text, cm.options.tabSize), tokens
	  if (asArray) { tokens = [] }
	  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	    stream.start = stream.pos
	    style = readToken(mode, stream, state)
	    if (asArray) { tokens.push(getObj(true)) }
	  }
	  return asArray ? tokens : getObj()
	}

	function extractLineClasses(type, output) {
	  if (type) { for (;;) {
	    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
	    if (!lineClass) { break }
	    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
	    var prop = lineClass[1] ? "bgClass" : "textClass"
	    if (output[prop] == null)
	      { output[prop] = lineClass[2] }
	    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	      { output[prop] += " " + lineClass[2] }
	  } }
	  return type
	}

	// Run the given mode's parser over a line, calling f for each token.
	function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	  var flattenSpans = mode.flattenSpans
	  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
	  var curStart = 0, curStyle = null
	  var stream = new StringStream(text, cm.options.tabSize), style
	  var inner = cm.options.addModeClass && [null]
	  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
	  while (!stream.eol()) {
	    if (stream.pos > cm.options.maxHighlightLength) {
	      flattenSpans = false
	      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
	      stream.pos = text.length
	      style = null
	    } else {
	      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
	    }
	    if (inner) {
	      var mName = inner[0].name
	      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
	    }
	    if (!flattenSpans || curStyle != style) {
	      while (curStart < stream.start) {
	        curStart = Math.min(stream.start, curStart + 5000)
	        f(curStart, curStyle)
	      }
	      curStyle = style
	    }
	    stream.start = stream.pos
	  }
	  while (curStart < stream.pos) {
	    // Webkit seems to refuse to render text nodes longer than 57444
	    // characters, and returns inaccurate measurements in nodes
	    // starting around 5000 chars.
	    var pos = Math.min(stream.pos, curStart + 5000)
	    f(pos, curStyle)
	    curStart = pos
	  }
	}

	// Finds the line to start with when starting a parse. Tries to
	// find a line with a stateAfter, so that it can start with a
	// valid state. If that fails, it returns the line with the
	// smallest indentation, which tends to need the least context to
	// parse correctly.
	function findStartLine(cm, n, precise) {
	  var minindent, minline, doc = cm.doc
	  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
	  for (var search = n; search > lim; --search) {
	    if (search <= doc.first) { return doc.first }
	    var line = getLine(doc, search - 1)
	    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
	    var indented = countColumn(line.text, null, cm.options.tabSize)
	    if (minline == null || minindent > indented) {
	      minline = search - 1
	      minindent = indented
	    }
	  }
	  return minline
	}

	// LINE DATA STRUCTURE

	// Line objects. These hold state related to a line, including
	// highlighting info (the styles array).
	function Line(text, markedSpans, estimateHeight) {
	  this.text = text
	  attachMarkedSpans(this, markedSpans)
	  this.height = estimateHeight ? estimateHeight(this) : 1
	}
	eventMixin(Line)
	Line.prototype.lineNo = function() { return lineNo(this) }

	// Change the content (text, markers) of a line. Automatically
	// invalidates cached information and tries to re-estimate the
	// line's height.
	function updateLine(line, text, markedSpans, estimateHeight) {
	  line.text = text
	  if (line.stateAfter) { line.stateAfter = null }
	  if (line.styles) { line.styles = null }
	  if (line.order != null) { line.order = null }
	  detachMarkedSpans(line)
	  attachMarkedSpans(line, markedSpans)
	  var estHeight = estimateHeight ? estimateHeight(line) : 1
	  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	}

	// Detach a line from the document tree and its markers.
	function cleanUpLine(line) {
	  line.parent = null
	  detachMarkedSpans(line)
	}

	// Convert a style as returned by a mode (either null, or a string
	// containing one or more styles) to a CSS style. This is cached,
	// and also looks for line-wide styles.
	var styleToClassCache = {};
	var styleToClassCacheWithMode = {};
	function interpretTokenStyle(style, options) {
	  if (!style || /^\s*$/.test(style)) { return null }
	  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
	  return cache[style] ||
	    (cache[style] = style.replace(/\S+/g, "cm-$&"))
	}

	// Render the DOM representation of the text of a line. Also builds
	// up a 'line map', which points at the DOM nodes that represent
	// specific stretches of text, and is used by the measuring code.
	// The returned object contains the DOM node, this map, and
	// information about line-wide styles that were set by the mode.
	function buildLineContent(cm, lineView) {
	  // The padding-right forces the element to have a 'border', which
	  // is needed on Webkit to be able to get line-level bounding
	  // rectangles for it (in measureChar).
	  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
	  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                 col: 0, pos: 0, cm: cm,
	                 trailingSpace: false,
	                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
	  lineView.measure = {}

	  // Iterate over the logical lines that make up this visual line.
	  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0)
	    builder.pos = 0
	    builder.addToken = buildToken
	    // Optionally wire in some hacks into the token-rendering
	    // algorithm, to deal with browser quirks.
	    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
	    builder.map = []
	    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
	    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
	    if (line.styleClasses) {
	      if (line.styleClasses.bgClass)
	        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
	      if (line.styleClasses.textClass)
	        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
	    }

	    // Ensure at least a single node is present, for measuring.
	    if (builder.map.length == 0)
	      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

	    // Store the map and a cache object for the current logical line
	    if (i == 0) {
	      lineView.measure.map = builder.map
	      lineView.measure.cache = {}
	    } else {
	      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
	      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
	    }
	  }

	  // See issue #2901
	  if (webkit) {
	    var last = builder.content.lastChild
	    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	      { builder.content.className = "cm-tab-wrap-hack" }
	  }

	  signal(cm, "renderLine", cm, lineView.line, builder.pre)
	  if (builder.pre.className)
	    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

	  return builder
	}

	function defaultSpecialCharPlaceholder(ch) {
	  var token = elt("span", "\u2022", "cm-invalidchar")
	  token.title = "\\u" + ch.charCodeAt(0).toString(16)
	  token.setAttribute("aria-label", token.title)
	  return token
	}

	// Build up the DOM representation for a single token, and add it to
	// the line map. Takes care to render special characters separately.
	function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	  if (!text) { return }
	  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
	  var special = builder.cm.state.specialChars, mustWrap = false
	  var content
	  if (!special.test(text)) {
	    builder.col += text.length
	    content = document.createTextNode(displayText)
	    builder.map.push(builder.pos, builder.pos + text.length, content)
	    if (ie && ie_version < 9) { mustWrap = true }
	    builder.pos += text.length
	  } else {
	    content = document.createDocumentFragment()
	    var pos = 0
	    while (true) {
	      special.lastIndex = pos
	      var m = special.exec(text)
	      var skipped = m ? m.index - pos : text.length - pos
	      if (skipped) {
	        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
	        else { content.appendChild(txt) }
	        builder.map.push(builder.pos, builder.pos + skipped, txt)
	        builder.col += skipped
	        builder.pos += skipped
	      }
	      if (!m) { break }
	      pos += skipped + 1
	      var txt$1 = (void 0)
	      if (m[0] == "\t") {
	        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
	        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
	        txt$1.setAttribute("role", "presentation")
	        txt$1.setAttribute("cm-text", "\t")
	        builder.col += tabWidth
	      } else if (m[0] == "\r" || m[0] == "\n") {
	        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
	        txt$1.setAttribute("cm-text", m[0])
	        builder.col += 1
	      } else {
	        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
	        txt$1.setAttribute("cm-text", m[0])
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
	        else { content.appendChild(txt$1) }
	        builder.col += 1
	      }
	      builder.map.push(builder.pos, builder.pos + 1, txt$1)
	      builder.pos++
	    }
	  }
	  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
	  if (style || startStyle || endStyle || mustWrap || css) {
	    var fullStyle = style || ""
	    if (startStyle) { fullStyle += startStyle }
	    if (endStyle) { fullStyle += endStyle }
	    var token = elt("span", [content], fullStyle, css)
	    if (title) { token.title = title }
	    return builder.content.appendChild(token)
	  }
	  builder.content.appendChild(content)
	}

	function splitSpaces(text, trailingBefore) {
	  if (text.length > 1 && !/  /.test(text)) { return text }
	  var spaceBefore = trailingBefore, result = ""
	  for (var i = 0; i < text.length; i++) {
	    var ch = text.charAt(i)
	    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	      { ch = "\u00a0" }
	    result += ch
	    spaceBefore = ch == " "
	  }
	  return result
	}

	// Work around nonsense dimensions being reported for stretches of
	// right-to-left text.
	function buildTokenBadBidi(inner, order) {
	  return function (builder, text, style, startStyle, endStyle, title, css) {
	    style = style ? style + " cm-force-border" : "cm-force-border"
	    var start = builder.pos, end = start + text.length
	    for (;;) {
	      // Find the part that overlaps with the start of this text
	      var part = (void 0)
	      for (var i = 0; i < order.length; i++) {
	        part = order[i]
	        if (part.to > start && part.from <= start) { break }
	      }
	      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
	      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
	      startStyle = null
	      text = text.slice(part.to - start)
	      start = part.to
	    }
	  }
	}

	function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	  var widget = !ignoreWidget && marker.widgetNode
	  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
	  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	    if (!widget)
	      { widget = builder.content.appendChild(document.createElement("span")) }
	    widget.setAttribute("cm-marker", marker.id)
	  }
	  if (widget) {
	    builder.cm.display.input.setUneditable(widget)
	    builder.content.appendChild(widget)
	  }
	  builder.pos += size
	  builder.trailingSpace = false
	}

	// Outputs a number of spans to make up a line, taking highlighting
	// and marked text into account.
	function insertLineContent(line, builder, styles) {
	  var spans = line.markedSpans, allText = line.text, at = 0
	  if (!spans) {
	    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
	      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
	    return
	  }

	  var len = allText.length, pos = 0, i = 1, text = "", style, css
	  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
	  for (;;) {
	    if (nextChange == pos) { // Update current marker set
	      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
	      collapsed = null; nextChange = Infinity
	      var foundBookmarks = [], endStyles = (void 0)
	      for (var j = 0; j < spans.length; ++j) {
	        var sp = spans[j], m = sp.marker
	        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	          foundBookmarks.push(m)
	        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	            nextChange = sp.to
	            spanEndStyle = ""
	          }
	          if (m.className) { spanStyle += " " + m.className }
	          if (m.css) { css = (css ? css + ";" : "") + m.css }
	          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
	          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
	          if (m.title && !title) { title = m.title }
	          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	            { collapsed = sp }
	        } else if (sp.from > pos && nextChange > sp.from) {
	          nextChange = sp.from
	        }
	      }
	      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
	        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

	      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
	        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
	      if (collapsed && (collapsed.from || 0) == pos) {
	        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                           collapsed.marker, collapsed.from == null)
	        if (collapsed.to == null) { return }
	        if (collapsed.to == pos) { collapsed = false }
	      }
	    }
	    if (pos >= len) { break }

	    var upto = Math.min(len, nextChange)
	    while (true) {
	      if (text) {
	        var end = pos + text.length
	        if (!collapsed) {
	          var tokenText = end > upto ? text.slice(0, upto - pos) : text
	          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
	        }
	        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
	        pos = end
	        spanStartStyle = ""
	      }
	      text = allText.slice(at, at = styles[i++])
	      style = interpretTokenStyle(styles[i++], builder.cm.options)
	    }
	  }
	}


	// These objects are used to represent the visible (currently drawn)
	// part of the document. A LineView may correspond to multiple
	// logical lines, if those are connected by collapsed ranges.
	function LineView(doc, line, lineN) {
	  // The starting line
	  this.line = line
	  // Continuing lines, if any
	  this.rest = visualLineContinued(line)
	  // Number of logical lines in this visual line
	  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
	  this.node = this.text = null
	  this.hidden = lineIsHidden(doc, line)
	}

	// Create a range of LineView objects for the given lines.
	function buildViewArray(cm, from, to) {
	  var array = [], nextPos
	  for (var pos = from; pos < to; pos = nextPos) {
	    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
	    nextPos = pos + view.size
	    array.push(view)
	  }
	  return array
	}

	var operationGroup = null

	function pushOperation(op) {
	  if (operationGroup) {
	    operationGroup.ops.push(op)
	  } else {
	    op.ownsGroup = operationGroup = {
	      ops: [op],
	      delayedCallbacks: []
	    }
	  }
	}

	function fireCallbacksForOps(group) {
	  // Calls delayed callbacks and cursorActivity handlers until no
	  // new ones appear
	  var callbacks = group.delayedCallbacks, i = 0
	  do {
	    for (; i < callbacks.length; i++)
	      { callbacks[i].call(null) }
	    for (var j = 0; j < group.ops.length; j++) {
	      var op = group.ops[j]
	      if (op.cursorActivityHandlers)
	        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
	    }
	  } while (i < callbacks.length)
	}

	function finishOperation(op, endCb) {
	  var group = op.ownsGroup
	  if (!group) { return }

	  try { fireCallbacksForOps(group) }
	  finally {
	    operationGroup = null
	    endCb(group)
	  }
	}

	var orphanDelayedCallbacks = null

	// Often, we want to signal events at a point where we are in the
	// middle of some work, but don't want the handler to start calling
	// other methods on the editor, which might be in an inconsistent
	// state or simply not expect any other events to happen.
	// signalLater looks whether there are any handlers, and schedules
	// them to be executed when the last operation ends, or, if no
	// operation is active, when a timeout fires.
	function signalLater(emitter, type /*, values...*/) {
	  var arr = getHandlers(emitter, type)
	  if (!arr.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2), list
	  if (operationGroup) {
	    list = operationGroup.delayedCallbacks
	  } else if (orphanDelayedCallbacks) {
	    list = orphanDelayedCallbacks
	  } else {
	    list = orphanDelayedCallbacks = []
	    setTimeout(fireOrphanDelayed, 0)
	  }
	  var loop = function ( i ) {
	    list.push(function () { return arr[i].apply(null, args); })
	  };

	  for (var i = 0; i < arr.length; ++i)
	    loop( i );
	}

	function fireOrphanDelayed() {
	  var delayed = orphanDelayedCallbacks
	  orphanDelayedCallbacks = null
	  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
	}

	// When an aspect of a line changes, a string is added to
	// lineView.changes. This updates the relevant part of the line's
	// DOM structure.
	function updateLineForChanges(cm, lineView, lineN, dims) {
	  for (var j = 0; j < lineView.changes.length; j++) {
	    var type = lineView.changes[j]
	    if (type == "text") { updateLineText(cm, lineView) }
	    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
	    else if (type == "class") { updateLineClasses(lineView) }
	    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
	  }
	  lineView.changes = null
	}

	// Lines with gutter elements, widgets or a background class need to
	// be wrapped, and have the extra elements added to the wrapper div
	function ensureLineWrapped(lineView) {
	  if (lineView.node == lineView.text) {
	    lineView.node = elt("div", null, null, "position: relative")
	    if (lineView.text.parentNode)
	      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
	    lineView.node.appendChild(lineView.text)
	    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
	  }
	  return lineView.node
	}

	function updateLineBackground(lineView) {
	  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
	  if (cls) { cls += " CodeMirror-linebackground" }
	  if (lineView.background) {
	    if (cls) { lineView.background.className = cls }
	    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
	  } else if (cls) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
	  }
	}

	// Wrapper around buildLineContent which will reuse the structure
	// in display.externalMeasured when possible.
	function getLineContent(cm, lineView) {
	  var ext = cm.display.externalMeasured
	  if (ext && ext.line == lineView.line) {
	    cm.display.externalMeasured = null
	    lineView.measure = ext.measure
	    return ext.built
	  }
	  return buildLineContent(cm, lineView)
	}

	// Redraw the line's text. Interacts with the background and text
	// classes because the mode may output tokens that influence these
	// classes.
	function updateLineText(cm, lineView) {
	  var cls = lineView.text.className
	  var built = getLineContent(cm, lineView)
	  if (lineView.text == lineView.node) { lineView.node = built.pre }
	  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
	  lineView.text = built.pre
	  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	    lineView.bgClass = built.bgClass
	    lineView.textClass = built.textClass
	    updateLineClasses(lineView)
	  } else if (cls) {
	    lineView.text.className = cls
	  }
	}

	function updateLineClasses(lineView) {
	  updateLineBackground(lineView)
	  if (lineView.line.wrapClass)
	    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
	  else if (lineView.node != lineView.text)
	    { lineView.node.className = "" }
	  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
	  lineView.text.className = textClass || ""
	}

	function updateLineGutter(cm, lineView, lineN, dims) {
	  if (lineView.gutter) {
	    lineView.node.removeChild(lineView.gutter)
	    lineView.gutter = null
	  }
	  if (lineView.gutterBackground) {
	    lineView.node.removeChild(lineView.gutterBackground)
	    lineView.gutterBackground = null
	  }
	  if (lineView.line.gutterClass) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
	    wrap.insertBefore(lineView.gutterBackground, lineView.text)
	  }
	  var markers = lineView.line.gutterMarkers
	  if (cm.options.lineNumbers || markers) {
	    var wrap$1 = ensureLineWrapped(lineView)
	    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
	    cm.display.input.setUneditable(gutterWrap)
	    wrap$1.insertBefore(gutterWrap, lineView.text)
	    if (lineView.line.gutterClass)
	      { gutterWrap.className += " " + lineView.line.gutterClass }
	    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	      { lineView.lineNumber = gutterWrap.appendChild(
	        elt("div", lineNumberFor(cm.options, lineN),
	            "CodeMirror-linenumber CodeMirror-gutter-elt",
	            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
	    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
	      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
	      if (found)
	        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
	                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
	    } }
	  }
	}

	function updateLineWidgets(cm, lineView, dims) {
	  if (lineView.alignable) { lineView.alignable = null }
	  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
	    next = node.nextSibling
	    if (node.className == "CodeMirror-linewidget")
	      { lineView.node.removeChild(node) }
	  }
	  insertLineWidgets(cm, lineView, dims)
	}

	// Build a line's DOM representation from scratch
	function buildLineElement(cm, lineView, lineN, dims) {
	  var built = getLineContent(cm, lineView)
	  lineView.text = lineView.node = built.pre
	  if (built.bgClass) { lineView.bgClass = built.bgClass }
	  if (built.textClass) { lineView.textClass = built.textClass }

	  updateLineClasses(lineView)
	  updateLineGutter(cm, lineView, lineN, dims)
	  insertLineWidgets(cm, lineView, dims)
	  return lineView.node
	}

	// A lineView may contain multiple logical lines (when merged by
	// collapsed spans). The widgets for all of them need to be drawn.
	function insertLineWidgets(cm, lineView, dims) {
	  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
	  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
	}

	function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	  if (!line.widgets) { return }
	  var wrap = ensureLineWrapped(lineView)
	  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
	    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
	    positionLineWidget(widget, node, lineView, dims)
	    cm.display.input.setUneditable(node)
	    if (allowAbove && widget.above)
	      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
	    else
	      { wrap.appendChild(node) }
	    signalLater(widget, "redraw")
	  }
	}

	function positionLineWidget(widget, node, lineView, dims) {
	  if (widget.noHScroll) {
	    ;(lineView.alignable || (lineView.alignable = [])).push(node)
	    var width = dims.wrapperWidth
	    node.style.left = dims.fixedPos + "px"
	    if (!widget.coverGutter) {
	      width -= dims.gutterTotalWidth
	      node.style.paddingLeft = dims.gutterTotalWidth + "px"
	    }
	    node.style.width = width + "px"
	  }
	  if (widget.coverGutter) {
	    node.style.zIndex = 5
	    node.style.position = "relative"
	    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
	  }
	}

	function widgetHeight(widget) {
	  if (widget.height != null) { return widget.height }
	  var cm = widget.doc.cm
	  if (!cm) { return 0 }
	  if (!contains(document.body, widget.node)) {
	    var parentStyle = "position: relative;"
	    if (widget.coverGutter)
	      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
	    if (widget.noHScroll)
	      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
	    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
	  }
	  return widget.height = widget.node.parentNode.offsetHeight
	}

	// Return true when the given mouse event happened in a widget
	function eventInWidget(display, e) {
	  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	        (n.parentNode == display.sizer && n != display.mover))
	      { return true }
	  }
	}

	// POSITION MEASUREMENT

	function paddingTop(display) {return display.lineSpace.offsetTop}
	function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
	function paddingH(display) {
	  if (display.cachedPaddingH) { return display.cachedPaddingH }
	  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
	  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
	  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
	  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
	  return data
	}

	function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
	function displayWidth(cm) {
	  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
	}
	function displayHeight(cm) {
	  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
	}

	// Ensure the lineView.wrapping.heights array is populated. This is
	// an array of bottom offsets for the lines that make up a drawn
	// line. When lineWrapping is on, there might be more than one
	// height.
	function ensureLineHeights(cm, lineView, rect) {
	  var wrapping = cm.options.lineWrapping
	  var curWidth = wrapping && displayWidth(cm)
	  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	    var heights = lineView.measure.heights = []
	    if (wrapping) {
	      lineView.measure.width = curWidth
	      var rects = lineView.text.firstChild.getClientRects()
	      for (var i = 0; i < rects.length - 1; i++) {
	        var cur = rects[i], next = rects[i + 1]
	        if (Math.abs(cur.bottom - next.bottom) > 2)
	          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
	      }
	    }
	    heights.push(rect.bottom - rect.top)
	  }
	}

	// Find a line map (mapping character offsets to text nodes) and a
	// measurement cache for the given line number. (A line view might
	// contain multiple lines when collapsed ranges are present.)
	function mapFromLineView(lineView, line, lineN) {
	  if (lineView.line == line)
	    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
	  for (var i = 0; i < lineView.rest.length; i++)
	    { if (lineView.rest[i] == line)
	      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
	  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
	    { if (lineNo(lineView.rest[i$1]) > lineN)
	      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
	}

	// Render a line into the hidden node display.externalMeasured. Used
	// when measurement is needed for a line that's not in the viewport.
	function updateExternalMeasurement(cm, line) {
	  line = visualLine(line)
	  var lineN = lineNo(line)
	  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
	  view.lineN = lineN
	  var built = view.built = buildLineContent(cm, view)
	  view.text = built.pre
	  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
	  return view
	}

	// Get a {top, bottom, left, right} box (in line-local coordinates)
	// for a given character.
	function measureChar(cm, line, ch, bias) {
	  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
	}

	// Find a line view that corresponds to the given line number.
	function findViewForLine(cm, lineN) {
	  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	    { return cm.display.view[findViewIndex(cm, lineN)] }
	  var ext = cm.display.externalMeasured
	  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	    { return ext }
	}

	// Measurement can be split in two steps, the set-up work that
	// applies to the whole line, and the measurement of the actual
	// character. Functions like coordsChar, that need to do a lot of
	// measurements in a row, can thus ensure that the set-up work is
	// only done once.
	function prepareMeasureForLine(cm, line) {
	  var lineN = lineNo(line)
	  var view = findViewForLine(cm, lineN)
	  if (view && !view.text) {
	    view = null
	  } else if (view && view.changes) {
	    updateLineForChanges(cm, view, lineN, getDimensions(cm))
	    cm.curOp.forceUpdate = true
	  }
	  if (!view)
	    { view = updateExternalMeasurement(cm, line) }

	  var info = mapFromLineView(view, line, lineN)
	  return {
	    line: line, view: view, rect: null,
	    map: info.map, cache: info.cache, before: info.before,
	    hasHeights: false
	  }
	}

	// Given a prepared measurement object, measures the position of an
	// actual character (or fetches it from the cache).
	function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	  if (prepared.before) { ch = -1 }
	  var key = ch + (bias || ""), found
	  if (prepared.cache.hasOwnProperty(key)) {
	    found = prepared.cache[key]
	  } else {
	    if (!prepared.rect)
	      { prepared.rect = prepared.view.text.getBoundingClientRect() }
	    if (!prepared.hasHeights) {
	      ensureLineHeights(cm, prepared.view, prepared.rect)
	      prepared.hasHeights = true
	    }
	    found = measureCharInner(cm, prepared, ch, bias)
	    if (!found.bogus) { prepared.cache[key] = found }
	  }
	  return {left: found.left, right: found.right,
	          top: varHeight ? found.rtop : found.top,
	          bottom: varHeight ? found.rbottom : found.bottom}
	}

	var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

	function nodeAndOffsetInLineMap(map, ch, bias) {
	  var node, start, end, collapse, mStart, mEnd
	  // First, search the line map for the text node corresponding to,
	  // or closest to, the target character.
	  for (var i = 0; i < map.length; i += 3) {
	    mStart = map[i]
	    mEnd = map[i + 1]
	    if (ch < mStart) {
	      start = 0; end = 1
	      collapse = "left"
	    } else if (ch < mEnd) {
	      start = ch - mStart
	      end = start + 1
	    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	      end = mEnd - mStart
	      start = end - 1
	      if (ch >= mEnd) { collapse = "right" }
	    }
	    if (start != null) {
	      node = map[i + 2]
	      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	        { collapse = bias }
	      if (bias == "left" && start == 0)
	        { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	          node = map[(i -= 3) + 2]
	          collapse = "left"
	        } }
	      if (bias == "right" && start == mEnd - mStart)
	        { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	          node = map[(i += 3) + 2]
	          collapse = "right"
	        } }
	      break
	    }
	  }
	  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
	}

	function getUsefulRect(rects, bias) {
	  var rect = nullRect
	  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
	    if ((rect = rects[i]).left != rect.right) { break }
	  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
	    if ((rect = rects[i$1]).left != rect.right) { break }
	  } }
	  return rect
	}

	function measureCharInner(cm, prepared, ch, bias) {
	  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
	  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

	  var rect
	  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
	      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
	      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	        { rect = node.parentNode.getBoundingClientRect() }
	      else
	        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
	      if (rect.left || rect.right || start == 0) { break }
	      end = start
	      start = start - 1
	      collapse = "right"
	    }
	    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
	  } else { // If it is a widget, simply get the box for the whole widget.
	    if (start > 0) { collapse = bias = "right" }
	    var rects
	    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
	    else
	      { rect = node.getBoundingClientRect() }
	  }
	  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	    var rSpan = node.parentNode.getClientRects()[0]
	    if (rSpan)
	      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
	    else
	      { rect = nullRect }
	  }

	  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
	  var mid = (rtop + rbot) / 2
	  var heights = prepared.view.measure.heights
	  var i = 0
	  for (; i < heights.length - 1; i++)
	    { if (mid < heights[i]) { break } }
	  var top = i ? heights[i - 1] : 0, bot = heights[i]
	  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                top: top, bottom: bot}
	  if (!rect.left && !rect.right) { result.bogus = true }
	  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

	  return result
	}

	// Work around problem with bounding client rects on ranges being
	// returned incorrectly when zoomed on IE10 and below.
	function maybeUpdateRectForZooming(measure, rect) {
	  if (!window.screen || screen.logicalXDPI == null ||
	      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	    { return rect }
	  var scaleX = screen.logicalXDPI / screen.deviceXDPI
	  var scaleY = screen.logicalYDPI / screen.deviceYDPI
	  return {left: rect.left * scaleX, right: rect.right * scaleX,
	          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
	}

	function clearLineMeasurementCacheFor(lineView) {
	  if (lineView.measure) {
	    lineView.measure.cache = {}
	    lineView.measure.heights = null
	    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	      { lineView.measure.caches[i] = {} } }
	  }
	}

	function clearLineMeasurementCache(cm) {
	  cm.display.externalMeasure = null
	  removeChildren(cm.display.lineMeasure)
	  for (var i = 0; i < cm.display.view.length; i++)
	    { clearLineMeasurementCacheFor(cm.display.view[i]) }
	}

	function clearCaches(cm) {
	  clearLineMeasurementCache(cm)
	  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
	  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
	  cm.display.lineNumChars = null
	}

	function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
	function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

	// Converts a {top, bottom, left, right} box from line-local
	// coordinates into another coordinate system. Context may be one of
	// "line", "div" (display.lineDiv), "local"./null (editor), "window",
	// or "page".
	function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
	  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
	    var size = widgetHeight(lineObj.widgets[i])
	    rect.top += size; rect.bottom += size
	  } } }
	  if (context == "line") { return rect }
	  if (!context) { context = "local" }
	  var yOff = heightAtLine(lineObj)
	  if (context == "local") { yOff += paddingTop(cm.display) }
	  else { yOff -= cm.display.viewOffset }
	  if (context == "page" || context == "window") {
	    var lOff = cm.display.lineSpace.getBoundingClientRect()
	    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
	    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
	    rect.left += xOff; rect.right += xOff
	  }
	  rect.top += yOff; rect.bottom += yOff
	  return rect
	}

	// Coverts a box from "div" coords to another coordinate system.
	// Context may be "window", "page", "div", or "local"./null.
	function fromCoordSystem(cm, coords, context) {
	  if (context == "div") { return coords }
	  var left = coords.left, top = coords.top
	  // First move into "page" coordinate system
	  if (context == "page") {
	    left -= pageScrollX()
	    top -= pageScrollY()
	  } else if (context == "local" || !context) {
	    var localBox = cm.display.sizer.getBoundingClientRect()
	    left += localBox.left
	    top += localBox.top
	  }

	  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
	  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
	}

	function charCoords(cm, pos, context, lineObj, bias) {
	  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
	  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
	}

	// Returns a box for a given cursor position, which may have an
	// 'other' property containing the position of the secondary cursor
	// on a bidi boundary.
	function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	  lineObj = lineObj || getLine(cm.doc, pos.line)
	  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
	  function get(ch, right) {
	    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
	    if (right) { m.left = m.right; } else { m.right = m.left }
	    return intoCoordSystem(cm, lineObj, m, context)
	  }
	  function getBidi(ch, partPos) {
	    var part = order[partPos], right = part.level % 2
	    if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	      part = order[--partPos]
	      ch = bidiRight(part) - (part.level % 2 ? 0 : 1)
	      right = true
	    } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	      part = order[++partPos]
	      ch = bidiLeft(part) - part.level % 2
	      right = false
	    }
	    if (right && ch == part.to && ch > part.from) { return get(ch - 1) }
	    return get(ch, right)
	  }
	  var order = getOrder(lineObj), ch = pos.ch
	  if (!order) { return get(ch) }
	  var partPos = getBidiPartAt(order, ch)
	  var val = getBidi(ch, partPos)
	  if (bidiOther != null) { val.other = getBidi(ch, bidiOther) }
	  return val
	}

	// Used to cheaply estimate the coordinates for a position. Used for
	// intermediate scroll updates.
	function estimateCoords(cm, pos) {
	  var left = 0
	  pos = clipPos(cm.doc, pos)
	  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
	  var lineObj = getLine(cm.doc, pos.line)
	  var top = heightAtLine(lineObj) + paddingTop(cm.display)
	  return {left: left, right: left, top: top, bottom: top + lineObj.height}
	}

	// Positions returned by coordsChar contain some extra information.
	// xRel is the relative x position of the input coordinates compared
	// to the found position (so xRel > 0 means the coordinates are to
	// the right of the character position, for example). When outside
	// is true, that means the coordinates lie outside the line's
	// vertical range.
	function PosWithInfo(line, ch, outside, xRel) {
	  var pos = Pos(line, ch)
	  pos.xRel = xRel
	  if (outside) { pos.outside = true }
	  return pos
	}

	// Compute the character position closest to the given coordinates.
	// Input must be lineSpace-local ("div" coordinate system).
	function coordsChar(cm, x, y) {
	  var doc = cm.doc
	  y += cm.display.viewOffset
	  if (y < 0) { return PosWithInfo(doc.first, 0, true, -1) }
	  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
	  if (lineN > last)
	    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1) }
	  if (x < 0) { x = 0 }

	  var lineObj = getLine(doc, lineN)
	  for (;;) {
	    var found = coordsCharInner(cm, lineObj, lineN, x, y)
	    var merged = collapsedSpanAtEnd(lineObj)
	    var mergedPos = merged && merged.find(0, true)
	    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	      { lineN = lineNo(lineObj = mergedPos.to.line) }
	    else
	      { return found }
	  }
	}

	function coordsCharInner(cm, lineObj, lineNo, x, y) {
	  var innerOff = y - heightAtLine(lineObj)
	  var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth
	  var preparedMeasure = prepareMeasureForLine(cm, lineObj)

	  function getX(ch) {
	    var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure)
	    wrongLine = true
	    if (innerOff > sp.bottom) { return sp.left - adjust }
	    else if (innerOff < sp.top) { return sp.left + adjust }
	    else { wrongLine = false }
	    return sp.left
	  }

	  var bidi = getOrder(lineObj), dist = lineObj.text.length
	  var from = lineLeft(lineObj), to = lineRight(lineObj)
	  var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine

	  if (x > toX) { return PosWithInfo(lineNo, to, toOutside, 1) }
	  // Do a binary search between these bounds.
	  for (;;) {
	    if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	      var ch = x < fromX || x - fromX <= toX - x ? from : to
	      var outside = ch == from ? fromOutside : toOutside
	      var xDiff = x - (ch == from ? fromX : toX)
	      // This is a kludge to handle the case where the coordinates
	      // are after a line-wrapped line. We should replace it with a
	      // more general handling of cursor positions around line
	      // breaks. (Issue #4078)
	      if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
	          ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
	        var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right")
	        if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
	          outside = false
	          ch++
	          xDiff = x - charSize.right
	        }
	      }
	      while (isExtendingChar(lineObj.text.charAt(ch))) { ++ch }
	      var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0)
	      return pos
	    }
	    var step = Math.ceil(dist / 2), middle = from + step
	    if (bidi) {
	      middle = from
	      for (var i = 0; i < step; ++i) { middle = moveVisually(lineObj, middle, 1) }
	    }
	    var middleX = getX(middle)
	    if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) { toX += 1000; } dist = step}
	    else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step}
	  }
	}

	var measureText
	// Compute the default text height.
	function textHeight(display) {
	  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
	  if (measureText == null) {
	    measureText = elt("pre")
	    // Measure a bunch of lines, for browsers that compute
	    // fractional heights.
	    for (var i = 0; i < 49; ++i) {
	      measureText.appendChild(document.createTextNode("x"))
	      measureText.appendChild(elt("br"))
	    }
	    measureText.appendChild(document.createTextNode("x"))
	  }
	  removeChildrenAndAdd(display.measure, measureText)
	  var height = measureText.offsetHeight / 50
	  if (height > 3) { display.cachedTextHeight = height }
	  removeChildren(display.measure)
	  return height || 1
	}

	// Compute the default character width.
	function charWidth(display) {
	  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
	  var anchor = elt("span", "xxxxxxxxxx")
	  var pre = elt("pre", [anchor])
	  removeChildrenAndAdd(display.measure, pre)
	  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
	  if (width > 2) { display.cachedCharWidth = width }
	  return width || 10
	}

	// Do a bulk-read of the DOM positions and sizes needed to draw the
	// view, so that we don't interleave reading and writing to the DOM.
	function getDimensions(cm) {
	  var d = cm.display, left = {}, width = {}
	  var gutterLeft = d.gutters.clientLeft
	  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
	    width[cm.options.gutters[i]] = n.clientWidth
	  }
	  return {fixedPos: compensateForHScroll(d),
	          gutterTotalWidth: d.gutters.offsetWidth,
	          gutterLeft: left,
	          gutterWidth: width,
	          wrapperWidth: d.wrapper.clientWidth}
	}

	// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	// but using getBoundingClientRect to get a sub-pixel-accurate
	// result.
	function compensateForHScroll(display) {
	  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
	}

	// Returns a function that estimates the height of a line, to use as
	// first approximation until the line becomes visible (and is thus
	// properly measurable).
	function estimateHeight(cm) {
	  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
	  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
	  return function (line) {
	    if (lineIsHidden(cm.doc, line)) { return 0 }

	    var widgetsHeight = 0
	    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
	      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
	    } }

	    if (wrapping)
	      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
	    else
	      { return widgetsHeight + th }
	  }
	}

	function estimateLineHeights(cm) {
	  var doc = cm.doc, est = estimateHeight(cm)
	  doc.iter(function (line) {
	    var estHeight = est(line)
	    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	  })
	}

	// Given a mouse event, find the corresponding position. If liberal
	// is false, it checks whether a gutter or scrollbar was clicked,
	// and returns null if it was. forRect is used by rectangular
	// selections, and tries to estimate a character position even for
	// coordinates beyond the right of the text.
	function posFromMouse(cm, e, liberal, forRect) {
	  var display = cm.display
	  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

	  var x, y, space = display.lineSpace.getBoundingClientRect()
	  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	  try { x = e.clientX - space.left; y = e.clientY - space.top }
	  catch (e) { return null }
	  var coords = coordsChar(cm, x, y), line
	  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
	    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
	  }
	  return coords
	}

	// Find the view element corresponding to a given line. Return null
	// when the line isn't visible.
	function findViewIndex(cm, n) {
	  if (n >= cm.display.viewTo) { return null }
	  n -= cm.display.viewFrom
	  if (n < 0) { return null }
	  var view = cm.display.view
	  for (var i = 0; i < view.length; i++) {
	    n -= view[i].size
	    if (n < 0) { return i }
	  }
	}

	function updateSelection(cm) {
	  cm.display.input.showSelection(cm.display.input.prepareSelection())
	}

	function prepareSelection(cm, primary) {
	  var doc = cm.doc, result = {}
	  var curFragment = result.cursors = document.createDocumentFragment()
	  var selFragment = result.selection = document.createDocumentFragment()

	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    if (primary === false && i == doc.sel.primIndex) { continue }
	    var range = doc.sel.ranges[i]
	    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
	    var collapsed = range.empty()
	    if (collapsed || cm.options.showCursorWhenSelecting)
	      { drawSelectionCursor(cm, range.head, curFragment) }
	    if (!collapsed)
	      { drawSelectionRange(cm, range, selFragment) }
	  }
	  return result
	}

	// Draws a cursor for the given range
	function drawSelectionCursor(cm, head, output) {
	  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

	  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
	  cursor.style.left = pos.left + "px"
	  cursor.style.top = pos.top + "px"
	  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

	  if (pos.other) {
	    // Secondary cursor, shown when on a 'jump' in bi-directional text
	    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
	    otherCursor.style.display = ""
	    otherCursor.style.left = pos.other.left + "px"
	    otherCursor.style.top = pos.other.top + "px"
	    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
	  }
	}

	// Draws the given range as a highlighted selection
	function drawSelectionRange(cm, range, output) {
	  var display = cm.display, doc = cm.doc
	  var fragment = document.createDocumentFragment()
	  var padding = paddingH(cm.display), leftSide = padding.left
	  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

	  function add(left, top, width, bottom) {
	    if (top < 0) { top = 0 }
	    top = Math.round(top)
	    bottom = Math.round(bottom)
	    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
	  }

	  function drawForLine(line, fromArg, toArg) {
	    var lineObj = getLine(doc, line)
	    var lineLen = lineObj.text.length
	    var start, end
	    function coords(ch, bias) {
	      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
	    }

	    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
	      var leftPos = coords(from, "left"), rightPos, left, right
	      if (from == to) {
	        rightPos = leftPos
	        left = right = leftPos.left
	      } else {
	        rightPos = coords(to - 1, "right")
	        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
	        left = leftPos.left
	        right = rightPos.right
	      }
	      if (fromArg == null && from == 0) { left = leftSide }
	      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	        add(left, leftPos.top, null, leftPos.bottom)
	        left = leftSide
	        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
	      }
	      if (toArg == null && to == lineLen) { right = rightSide }
	      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	        { start = leftPos }
	      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	        { end = rightPos }
	      if (left < leftSide + 1) { left = leftSide }
	      add(left, rightPos.top, right - left, rightPos.bottom)
	    })
	    return {start: start, end: end}
	  }

	  var sFrom = range.from(), sTo = range.to()
	  if (sFrom.line == sTo.line) {
	    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
	  } else {
	    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
	    var singleVLine = visualLine(fromLine) == visualLine(toLine)
	    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
	    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
	    if (singleVLine) {
	      if (leftEnd.top < rightStart.top - 2) {
	        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
	        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
	      } else {
	        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
	      }
	    }
	    if (leftEnd.bottom < rightStart.top)
	      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
	  }

	  output.appendChild(fragment)
	}

	// Cursor-blinking
	function restartBlink(cm) {
	  if (!cm.state.focused) { return }
	  var display = cm.display
	  clearInterval(display.blinker)
	  var on = true
	  display.cursorDiv.style.visibility = ""
	  if (cm.options.cursorBlinkRate > 0)
	    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
	      cm.options.cursorBlinkRate) }
	  else if (cm.options.cursorBlinkRate < 0)
	    { display.cursorDiv.style.visibility = "hidden" }
	}

	function ensureFocus(cm) {
	  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
	}

	function delayBlurEvent(cm) {
	  cm.state.delayingBlurEvent = true
	  setTimeout(function () { if (cm.state.delayingBlurEvent) {
	    cm.state.delayingBlurEvent = false
	    onBlur(cm)
	  } }, 100)
	}

	function onFocus(cm, e) {
	  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

	  if (cm.options.readOnly == "nocursor") { return }
	  if (!cm.state.focused) {
	    signal(cm, "focus", cm, e)
	    cm.state.focused = true
	    addClass(cm.display.wrapper, "CodeMirror-focused")
	    // This test prevents this from firing when a context
	    // menu is closed (since the input reset would kill the
	    // select-all detection hack)
	    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	      cm.display.input.reset()
	      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
	    }
	    cm.display.input.receivedFocus()
	  }
	  restartBlink(cm)
	}
	function onBlur(cm, e) {
	  if (cm.state.delayingBlurEvent) { return }

	  if (cm.state.focused) {
	    signal(cm, "blur", cm, e)
	    cm.state.focused = false
	    rmClass(cm.display.wrapper, "CodeMirror-focused")
	  }
	  clearInterval(cm.display.blinker)
	  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
	}

	// Re-align line numbers and gutter marks to compensate for
	// horizontal scrolling.
	function alignHorizontally(cm) {
	  var display = cm.display, view = display.view
	  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
	  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
	  var gutterW = display.gutters.offsetWidth, left = comp + "px"
	  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
	    if (cm.options.fixedGutter) {
	      if (view[i].gutter)
	        { view[i].gutter.style.left = left }
	      if (view[i].gutterBackground)
	        { view[i].gutterBackground.style.left = left }
	    }
	    var align = view[i].alignable
	    if (align) { for (var j = 0; j < align.length; j++)
	      { align[j].style.left = left } }
	  } }
	  if (cm.options.fixedGutter)
	    { display.gutters.style.left = (comp + gutterW) + "px" }
	}

	// Used to ensure that the line number gutter is still the right
	// size for the current document size. Returns true when an update
	// is needed.
	function maybeUpdateLineNumberWidth(cm) {
	  if (!cm.options.lineNumbers) { return false }
	  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
	  if (last.length != display.lineNumChars) {
	    var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
	    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
	    display.lineGutter.style.width = ""
	    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
	    display.lineNumWidth = display.lineNumInnerWidth + padding
	    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
	    display.lineGutter.style.width = display.lineNumWidth + "px"
	    updateGutterSpace(cm)
	    return true
	  }
	  return false
	}

	// Read the actual heights of the rendered lines, and update their
	// stored heights to match.
	function updateHeightsInViewport(cm) {
	  var display = cm.display
	  var prevBottom = display.lineDiv.offsetTop
	  for (var i = 0; i < display.view.length; i++) {
	    var cur = display.view[i], height = (void 0)
	    if (cur.hidden) { continue }
	    if (ie && ie_version < 8) {
	      var bot = cur.node.offsetTop + cur.node.offsetHeight
	      height = bot - prevBottom
	      prevBottom = bot
	    } else {
	      var box = cur.node.getBoundingClientRect()
	      height = box.bottom - box.top
	    }
	    var diff = cur.line.height - height
	    if (height < 2) { height = textHeight(display) }
	    if (diff > .001 || diff < -.001) {
	      updateLineHeight(cur.line, height)
	      updateWidgetHeight(cur.line)
	      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
	        { updateWidgetHeight(cur.rest[j]) } }
	    }
	  }
	}

	// Read and store the height of line widgets associated with the
	// given line.
	function updateWidgetHeight(line) {
	  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
	    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
	}

	// Compute the lines that are visible in a given viewport (defaults
	// the the current scroll position). viewport may contain top,
	// height, and ensure (see op.scrollToPos) properties.
	function visibleLines(display, doc, viewport) {
	  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
	  top = Math.floor(top - paddingTop(display))
	  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

	  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
	  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	  // forces those lines into the viewport (if possible).
	  if (viewport && viewport.ensure) {
	    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
	    if (ensureFrom < from) {
	      from = ensureFrom
	      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
	    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
	      to = ensureTo
	    }
	  }
	  return {from: from, to: Math.max(to, from + 1)}
	}

	// Sync the scrollable area and scrollbars, ensure the viewport
	// covers the visible area.
	function setScrollTop(cm, val) {
	  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
	  cm.doc.scrollTop = val
	  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
	  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
	  cm.display.scrollbars.setScrollTop(val)
	  if (gecko) { updateDisplaySimple(cm) }
	  startWorker(cm, 100)
	}
	// Sync scroller and scrollbar, ensure the gutter elements are
	// aligned.
	function setScrollLeft(cm, val, isScroller) {
	  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
	  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
	  cm.doc.scrollLeft = val
	  alignHorizontally(cm)
	  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
	  cm.display.scrollbars.setScrollLeft(val)
	}

	// Since the delta values reported on mouse wheel events are
	// unstandardized between browsers and even browser versions, and
	// generally horribly unpredictable, this code starts by measuring
	// the scroll effect that the first few mouse wheel events have,
	// and, from that, detects the way it can convert deltas to pixel
	// offsets afterwards.
	//
	// The reason we want to know the amount a wheel event will scroll
	// is that it gives us a chance to update the display before the
	// actual scrolling happens, reducing flickering.

	var wheelSamples = 0;
	var wheelPixelsPerUnit = null;
	// Fill in a browser-detected starting value on browsers where we
	// know one. These don't have to be accurate -- the result of them
	// being wrong would just be a slight flicker on the first wheel
	// scroll (if it is large enough).
	if (ie) { wheelPixelsPerUnit = -.53 }
	else if (gecko) { wheelPixelsPerUnit = 15 }
	else if (chrome) { wheelPixelsPerUnit = -.7 }
	else if (safari) { wheelPixelsPerUnit = -1/3 }

	function wheelEventDelta(e) {
	  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
	  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
	  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
	  else if (dy == null) { dy = e.wheelDelta }
	  return {x: dx, y: dy}
	}
	function wheelEventPixels(e) {
	  var delta = wheelEventDelta(e)
	  delta.x *= wheelPixelsPerUnit
	  delta.y *= wheelPixelsPerUnit
	  return delta
	}

	function onScrollWheel(cm, e) {
	  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

	  var display = cm.display, scroll = display.scroller
	  // Quit if there's nothing to scroll here
	  var canScrollX = scroll.scrollWidth > scroll.clientWidth
	  var canScrollY = scroll.scrollHeight > scroll.clientHeight
	  if (!(dx && canScrollX || dy && canScrollY)) { return }

	  // Webkit browsers on OS X abort momentum scrolls when the target
	  // of the scroll event is removed from the scrollable element.
	  // This hack (see related code in patchDisplay) makes sure the
	  // element is kept around.
	  if (dy && mac && webkit) {
	    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	      for (var i = 0; i < view.length; i++) {
	        if (view[i].node == cur) {
	          cm.display.currentWheelTarget = cur
	          break outer
	        }
	      }
	    }
	  }

	  // On some browsers, horizontal scrolling will cause redraws to
	  // happen before the gutter has been realigned, causing it to
	  // wriggle around in a most unseemly way. When we have an
	  // estimated pixels/delta value, we just handle horizontal
	  // scrolling entirely here. It'll be slightly off from native, but
	  // better than glitching out.
	  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	    if (dy && canScrollY)
	      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
	    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
	    // Only prevent default scrolling if vertical scrolling is
	    // actually possible. Otherwise, it causes vertical scroll
	    // jitter on OSX trackpads when deltaX is small and deltaY
	    // is large (issue #3579)
	    if (!dy || (dy && canScrollY))
	      { e_preventDefault(e) }
	    display.wheelStartX = null // Abort measurement, if in progress
	    return
	  }

	  // 'Project' the visible viewport to cover the area that is being
	  // scrolled into view (if we know enough to estimate it).
	  if (dy && wheelPixelsPerUnit != null) {
	    var pixels = dy * wheelPixelsPerUnit
	    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
	    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
	    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
	    updateDisplaySimple(cm, {top: top, bottom: bot})
	  }

	  if (wheelSamples < 20) {
	    if (display.wheelStartX == null) {
	      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
	      display.wheelDX = dx; display.wheelDY = dy
	      setTimeout(function () {
	        if (display.wheelStartX == null) { return }
	        var movedX = scroll.scrollLeft - display.wheelStartX
	        var movedY = scroll.scrollTop - display.wheelStartY
	        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	          (movedX && display.wheelDX && movedX / display.wheelDX)
	        display.wheelStartX = display.wheelStartY = null
	        if (!sample) { return }
	        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
	        ++wheelSamples
	      }, 200)
	    } else {
	      display.wheelDX += dx; display.wheelDY += dy
	    }
	  }
	}

	// SCROLLBARS

	// Prepare DOM reads needed to update the scrollbars. Done in one
	// shot to minimize update/measure roundtrips.
	function measureForScrollbars(cm) {
	  var d = cm.display, gutterW = d.gutters.offsetWidth
	  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
	  return {
	    clientHeight: d.scroller.clientHeight,
	    viewHeight: d.wrapper.clientHeight,
	    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	    viewWidth: d.wrapper.clientWidth,
	    barLeft: cm.options.fixedGutter ? gutterW : 0,
	    docHeight: docH,
	    scrollHeight: docH + scrollGap(cm) + d.barHeight,
	    nativeBarWidth: d.nativeBarWidth,
	    gutterWidth: gutterW
	  }
	}

	var NativeScrollbars = function(place, scroll, cm) {
	  this.cm = cm
	  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
	  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
	  place(vert); place(horiz)

	  on(vert, "scroll", function () {
	    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
	  })
	  on(horiz, "scroll", function () {
	    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
	  })

	  this.checkedZeroWidth = false
	  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
	};

	NativeScrollbars.prototype.update = function (measure) {
	  var needsH = measure.scrollWidth > measure.clientWidth + 1
	  var needsV = measure.scrollHeight > measure.clientHeight + 1
	  var sWidth = measure.nativeBarWidth

	  if (needsV) {
	    this.vert.style.display = "block"
	    this.vert.style.bottom = needsH ? sWidth + "px" : "0"
	    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
	    // A bug in IE8 can cause this value to be negative, so guard it.
	    this.vert.firstChild.style.height =
	      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
	  } else {
	    this.vert.style.display = ""
	    this.vert.firstChild.style.height = "0"
	  }

	  if (needsH) {
	    this.horiz.style.display = "block"
	    this.horiz.style.right = needsV ? sWidth + "px" : "0"
	    this.horiz.style.left = measure.barLeft + "px"
	    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
	    this.horiz.firstChild.style.width =
	      (measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
	  } else {
	    this.horiz.style.display = ""
	    this.horiz.firstChild.style.width = "0"
	  }

	  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	    if (sWidth == 0) { this.zeroWidthHack() }
	    this.checkedZeroWidth = true
	  }

	  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
	};

	NativeScrollbars.prototype.setScrollLeft = function (pos) {
	  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
	  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
	};

	NativeScrollbars.prototype.setScrollTop = function (pos) {
	  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
	  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
	};

	NativeScrollbars.prototype.zeroWidthHack = function () {
	  var w = mac && !mac_geMountainLion ? "12px" : "18px"
	  this.horiz.style.height = this.vert.style.width = w
	  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
	  this.disableHoriz = new Delayed
	  this.disableVert = new Delayed
	};

	NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay) {
	  bar.style.pointerEvents = "auto"
	  function maybeDisable() {
	    // To find out whether the scrollbar is still visible, we
	    // check whether the element under the pixel in the bottom
	    // left corner of the scrollbar box is the scrollbar box
	    // itself (when the bar is still visible) or its filler child
	    // (when the bar is hidden). If it is still visible, we keep
	    // it enabled, if it's hidden, we disable pointer events.
	    var box = bar.getBoundingClientRect()
	    var elt = document.elementFromPoint(box.left + 1, box.bottom - 1)
	    if (elt != bar) { bar.style.pointerEvents = "none" }
	    else { delay.set(1000, maybeDisable) }
	  }
	  delay.set(1000, maybeDisable)
	};

	NativeScrollbars.prototype.clear = function () {
	  var parent = this.horiz.parentNode
	  parent.removeChild(this.horiz)
	  parent.removeChild(this.vert)
	};

	var NullScrollbars = function () {};

	NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
	NullScrollbars.prototype.setScrollLeft = function () {};
	NullScrollbars.prototype.setScrollTop = function () {};
	NullScrollbars.prototype.clear = function () {};

	function updateScrollbars(cm, measure) {
	  if (!measure) { measure = measureForScrollbars(cm) }
	  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
	  updateScrollbarsInner(cm, measure)
	  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	      { updateHeightsInViewport(cm) }
	    updateScrollbarsInner(cm, measureForScrollbars(cm))
	    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
	  }
	}

	// Re-synchronize the fake scrollbars with the actual size of the
	// content.
	function updateScrollbarsInner(cm, measure) {
	  var d = cm.display
	  var sizes = d.scrollbars.update(measure)

	  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
	  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
	  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	  if (sizes.right && sizes.bottom) {
	    d.scrollbarFiller.style.display = "block"
	    d.scrollbarFiller.style.height = sizes.bottom + "px"
	    d.scrollbarFiller.style.width = sizes.right + "px"
	  } else { d.scrollbarFiller.style.display = "" }
	  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	    d.gutterFiller.style.display = "block"
	    d.gutterFiller.style.height = sizes.bottom + "px"
	    d.gutterFiller.style.width = measure.gutterWidth + "px"
	  } else { d.gutterFiller.style.display = "" }
	}

	var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

	function initScrollbars(cm) {
	  if (cm.display.scrollbars) {
	    cm.display.scrollbars.clear()
	    if (cm.display.scrollbars.addClass)
	      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	  }

	  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
	    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
	    // Prevent clicks in the scrollbars from killing focus
	    on(node, "mousedown", function () {
	      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
	    })
	    node.setAttribute("cm-not-content", "true")
	  }, function (pos, axis) {
	    if (axis == "horizontal") { setScrollLeft(cm, pos) }
	    else { setScrollTop(cm, pos) }
	  }, cm)
	  if (cm.display.scrollbars.addClass)
	    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	}

	// SCROLLING THINGS INTO VIEW

	// If an editor sits on the top or bottom of the window, partially
	// scrolled out of view, this ensures that the cursor is visible.
	function maybeScrollWindow(cm, coords) {
	  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

	  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
	  if (coords.top + box.top < 0) { doScroll = true }
	  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
	  if (doScroll != null && !phantom) {
	    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
	    cm.display.lineSpace.appendChild(scrollNode)
	    scrollNode.scrollIntoView(doScroll)
	    cm.display.lineSpace.removeChild(scrollNode)
	  }
	}

	// Scroll a given position into view (immediately), verifying that
	// it actually became visible (as line heights are accurately
	// measured, the position of something may 'drift' during drawing).
	function scrollPosIntoView(cm, pos, end, margin) {
	  if (margin == null) { margin = 0 }
	  var coords
	  for (var limit = 0; limit < 5; limit++) {
	    var changed = false
	    coords = cursorCoords(cm, pos)
	    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
	    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                       Math.min(coords.top, endCoords.top) - margin,
	                                       Math.max(coords.left, endCoords.left),
	                                       Math.max(coords.bottom, endCoords.bottom) + margin)
	    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
	    if (scrollPos.scrollTop != null) {
	      setScrollTop(cm, scrollPos.scrollTop)
	      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
	    }
	    if (scrollPos.scrollLeft != null) {
	      setScrollLeft(cm, scrollPos.scrollLeft)
	      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
	    }
	    if (!changed) { break }
	  }
	  return coords
	}

	// Scroll a given set of coordinates into view (immediately).
	function scrollIntoView(cm, x1, y1, x2, y2) {
	  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
	  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
	  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
	}

	// Calculate a new scroll position needed to scroll the given
	// rectangle into view. Returns an object with scrollTop and
	// scrollLeft properties. When these are undefined, the
	// vertical/horizontal position does not need to be adjusted.
	function calculateScrollPos(cm, x1, y1, x2, y2) {
	  var display = cm.display, snapMargin = textHeight(cm.display)
	  if (y1 < 0) { y1 = 0 }
	  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
	  var screen = displayHeight(cm), result = {}
	  if (y2 - y1 > screen) { y2 = y1 + screen }
	  var docBottom = cm.doc.height + paddingVert(display)
	  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
	  if (y1 < screentop) {
	    result.scrollTop = atTop ? 0 : y1
	  } else if (y2 > screentop + screen) {
	    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
	    if (newTop != screentop) { result.scrollTop = newTop }
	  }

	  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
	  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
	  var tooWide = x2 - x1 > screenw
	  if (tooWide) { x2 = x1 + screenw }
	  if (x1 < 10)
	    { result.scrollLeft = 0 }
	  else if (x1 < screenleft)
	    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
	  else if (x2 > screenw + screenleft - 3)
	    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
	  return result
	}

	// Store a relative adjustment to the scroll position in the current
	// operation (to be applied when the operation finishes).
	function addToScrollPos(cm, left, top) {
	  if (left != null || top != null) { resolveScrollToPos(cm) }
	  if (left != null)
	    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
	  if (top != null)
	    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
	}

	// Make sure that at the end of the operation the current cursor is
	// shown.
	function ensureCursorVisible(cm) {
	  resolveScrollToPos(cm)
	  var cur = cm.getCursor(), from = cur, to = cur
	  if (!cm.options.lineWrapping) {
	    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
	    to = Pos(cur.line, cur.ch + 1)
	  }
	  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
	}

	// When an operation has its scrollToPos property set, and another
	// scroll action is applied before the end of the operation, this
	// 'simulates' scrolling that position into view in a cheap way, so
	// that the effect of intermediate scroll commands is not ignored.
	function resolveScrollToPos(cm) {
	  var range = cm.curOp.scrollToPos
	  if (range) {
	    cm.curOp.scrollToPos = null
	    var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to)
	    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                  Math.min(from.top, to.top) - range.margin,
	                                  Math.max(from.right, to.right),
	                                  Math.max(from.bottom, to.bottom) + range.margin)
	    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	  }
	}

	// Operations are used to wrap a series of changes to the editor
	// state in such a way that each change won't have to update the
	// cursor and display (which would be awkward, slow, and
	// error-prone). Instead, display updates are batched and then all
	// combined and executed at once.

	var nextOpId = 0
	// Start a new operation.
	function startOperation(cm) {
	  cm.curOp = {
	    cm: cm,
	    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	    startHeight: cm.doc.height, // Used to detect need to update scrollbar
	    forceUpdate: false,      // Used to force a redraw
	    updateInput: null,       // Whether to reset the input textarea
	    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	    changeObjs: null,        // Accumulated changes, for firing change events
	    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	    selectionChanged: false, // Whether the selection needs to be redrawn
	    updateMaxLine: false,    // Set when the widest line needs to be determined anew
	    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	    scrollToPos: null,       // Used to scroll to a specific position
	    focus: false,
	    id: ++nextOpId           // Unique ID
	  }
	  pushOperation(cm.curOp)
	}

	// Finish an operation, updating the display and signalling delayed events
	function endOperation(cm) {
	  var op = cm.curOp
	  finishOperation(op, function (group) {
	    for (var i = 0; i < group.ops.length; i++)
	      { group.ops[i].cm.curOp = null }
	    endOperations(group)
	  })
	}

	// The DOM updates done when an operation finishes are batched so
	// that the minimum number of relayouts are required.
	function endOperations(group) {
	  var ops = group.ops
	  for (var i = 0; i < ops.length; i++) // Read DOM
	    { endOperation_R1(ops[i]) }
	  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
	    { endOperation_W1(ops[i$1]) }
	  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
	    { endOperation_R2(ops[i$2]) }
	  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
	    { endOperation_W2(ops[i$3]) }
	  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
	    { endOperation_finish(ops[i$4]) }
	}

	function endOperation_R1(op) {
	  var cm = op.cm, display = cm.display
	  maybeClipScrollbars(cm)
	  if (op.updateMaxLine) { findMaxLine(cm) }

	  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                       op.scrollToPos.to.line >= display.viewTo) ||
	    display.maxLineChanged && cm.options.lineWrapping
	  op.update = op.mustUpdate &&
	    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
	}

	function endOperation_W1(op) {
	  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
	}

	function endOperation_R2(op) {
	  var cm = op.cm, display = cm.display
	  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

	  op.barMeasure = measureForScrollbars(cm)

	  // If the max line changed since it was last measured, measure it,
	  // and ensure the document's width matches it.
	  // updateDisplay_W2 will use these properties to do the actual resizing
	  if (display.maxLineChanged && !cm.options.lineWrapping) {
	    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
	    cm.display.sizerWidth = op.adjustWidthTo
	    op.barMeasure.scrollWidth =
	      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
	    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
	  }

	  if (op.updatedDisplay || op.selectionChanged)
	    { op.preparedSelection = display.input.prepareSelection(op.focus) }
	}

	function endOperation_W2(op) {
	  var cm = op.cm

	  if (op.adjustWidthTo != null) {
	    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
	    if (op.maxScrollLeft < cm.doc.scrollLeft)
	      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
	    cm.display.maxLineChanged = false
	  }

	  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
	  if (op.preparedSelection)
	    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
	  if (op.updatedDisplay || op.startHeight != cm.doc.height)
	    { updateScrollbars(cm, op.barMeasure) }
	  if (op.updatedDisplay)
	    { setDocumentHeight(cm, op.barMeasure) }

	  if (op.selectionChanged) { restartBlink(cm) }

	  if (cm.state.focused && op.updateInput)
	    { cm.display.input.reset(op.typing) }
	  if (takeFocus) { ensureFocus(op.cm) }
	}

	function endOperation_finish(op) {
	  var cm = op.cm, display = cm.display, doc = cm.doc

	  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

	  // Abort mouse wheel delta measurement, when scrolling explicitly
	  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	    { display.wheelStartX = display.wheelStartY = null }

	  // Propagate the scroll position to the actual DOM scroller
	  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
	    display.scrollbars.setScrollTop(doc.scrollTop)
	    display.scroller.scrollTop = doc.scrollTop
	  }
	  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
	    display.scrollbars.setScrollLeft(doc.scrollLeft)
	    display.scroller.scrollLeft = doc.scrollLeft
	    alignHorizontally(cm)
	  }
	  // If we need to scroll a specific position into view, do so.
	  if (op.scrollToPos) {
	    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
	    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
	  }

	  // Fire events for markers that are hidden/unidden by editing or
	  // undoing
	  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
	  if (hidden) { for (var i = 0; i < hidden.length; ++i)
	    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
	  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
	    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

	  if (display.wrapper.offsetHeight)
	    { doc.scrollTop = cm.display.scroller.scrollTop }

	  // Fire change events, and delayed event handlers
	  if (op.changeObjs)
	    { signal(cm, "changes", cm, op.changeObjs) }
	  if (op.update)
	    { op.update.finish() }
	}

	// Run the given function in an operation
	function runInOp(cm, f) {
	  if (cm.curOp) { return f() }
	  startOperation(cm)
	  try { return f() }
	  finally { endOperation(cm) }
	}
	// Wraps a function in an operation. Returns the wrapped function.
	function operation(cm, f) {
	  return function() {
	    if (cm.curOp) { return f.apply(cm, arguments) }
	    startOperation(cm)
	    try { return f.apply(cm, arguments) }
	    finally { endOperation(cm) }
	  }
	}
	// Used to add methods to editor and doc instances, wrapping them in
	// operations.
	function methodOp(f) {
	  return function() {
	    if (this.curOp) { return f.apply(this, arguments) }
	    startOperation(this)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(this) }
	  }
	}
	function docMethodOp(f) {
	  return function() {
	    var cm = this.cm
	    if (!cm || cm.curOp) { return f.apply(this, arguments) }
	    startOperation(cm)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(cm) }
	  }
	}

	// Updates the display.view data structure for a given change to the
	// document. From and to are in pre-change coordinates. Lendiff is
	// the amount of lines added or subtracted by the change. This is
	// used for changes that span multiple lines, or change the way
	// lines are divided into visual lines. regLineChange (below)
	// registers single-line changes.
	function regChange(cm, from, to, lendiff) {
	  if (from == null) { from = cm.doc.first }
	  if (to == null) { to = cm.doc.first + cm.doc.size }
	  if (!lendiff) { lendiff = 0 }

	  var display = cm.display
	  if (lendiff && to < display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers > from))
	    { display.updateLineNumbers = from }

	  cm.curOp.viewChanged = true

	  if (from >= display.viewTo) { // Change after
	    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	      { resetView(cm) }
	  } else if (to <= display.viewFrom) { // Change before
	    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	      resetView(cm)
	    } else {
	      display.viewFrom += lendiff
	      display.viewTo += lendiff
	    }
	  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	    resetView(cm)
	  } else if (from <= display.viewFrom) { // Top overlap
	    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cut) {
	      display.view = display.view.slice(cut.index)
	      display.viewFrom = cut.lineN
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  } else if (to >= display.viewTo) { // Bottom overlap
	    var cut$1 = viewCuttingPoint(cm, from, from, -1)
	    if (cut$1) {
	      display.view = display.view.slice(0, cut$1.index)
	      display.viewTo = cut$1.lineN
	    } else {
	      resetView(cm)
	    }
	  } else { // Gap in the middle
	    var cutTop = viewCuttingPoint(cm, from, from, -1)
	    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cutTop && cutBot) {
	      display.view = display.view.slice(0, cutTop.index)
	        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	        .concat(display.view.slice(cutBot.index))
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  }

	  var ext = display.externalMeasured
	  if (ext) {
	    if (to < ext.lineN)
	      { ext.lineN += lendiff }
	    else if (from < ext.lineN + ext.size)
	      { display.externalMeasured = null }
	  }
	}

	// Register a change to a single line. Type must be one of "text",
	// "gutter", "class", "widget"
	function regLineChange(cm, line, type) {
	  cm.curOp.viewChanged = true
	  var display = cm.display, ext = cm.display.externalMeasured
	  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	    { display.externalMeasured = null }

	  if (line < display.viewFrom || line >= display.viewTo) { return }
	  var lineView = display.view[findViewIndex(cm, line)]
	  if (lineView.node == null) { return }
	  var arr = lineView.changes || (lineView.changes = [])
	  if (indexOf(arr, type) == -1) { arr.push(type) }
	}

	// Clear the view.
	function resetView(cm) {
	  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
	  cm.display.view = []
	  cm.display.viewOffset = 0
	}

	function viewCuttingPoint(cm, oldN, newN, dir) {
	  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
	  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	    { return {index: index, lineN: newN} }
	  var n = cm.display.viewFrom
	  for (var i = 0; i < index; i++)
	    { n += view[i].size }
	  if (n != oldN) {
	    if (dir > 0) {
	      if (index == view.length - 1) { return null }
	      diff = (n + view[index].size) - oldN
	      index++
	    } else {
	      diff = n - oldN
	    }
	    oldN += diff; newN += diff
	  }
	  while (visualLineNo(cm.doc, newN) != newN) {
	    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
	    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
	    index += dir
	  }
	  return {index: index, lineN: newN}
	}

	// Force the view to cover a given range, adding empty view element
	// or clipping off existing ones as needed.
	function adjustView(cm, from, to) {
	  var display = cm.display, view = display.view
	  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	    display.view = buildViewArray(cm, from, to)
	    display.viewFrom = from
	  } else {
	    if (display.viewFrom > from)
	      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
	    else if (display.viewFrom < from)
	      { display.view = display.view.slice(findViewIndex(cm, from)) }
	    display.viewFrom = from
	    if (display.viewTo < to)
	      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
	    else if (display.viewTo > to)
	      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
	  }
	  display.viewTo = to
	}

	// Count the number of lines in the view whose DOM representation is
	// out of date (or nonexistent).
	function countDirtyView(cm) {
	  var view = cm.display.view, dirty = 0
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
	  }
	  return dirty
	}

	// HIGHLIGHT WORKER

	function startWorker(cm, time) {
	  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
	}

	function highlightWorker(cm) {
	  var doc = cm.doc
	  if (doc.frontier < doc.first) { doc.frontier = doc.first }
	  if (doc.frontier >= cm.display.viewTo) { return }
	  var end = +new Date + cm.options.workTime
	  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
	  var changedLines = []

	  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
	    if (doc.frontier >= cm.display.viewFrom) { // Visible
	      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
	      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
	      line.styles = highlighted.styles
	      var oldCls = line.styleClasses, newCls = highlighted.classes
	      if (newCls) { line.styleClasses = newCls }
	      else if (oldCls) { line.styleClasses = null }
	      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
	      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
	      if (ischange) { changedLines.push(doc.frontier) }
	      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
	    } else {
	      if (line.text.length <= cm.options.maxHighlightLength)
	        { processLine(cm, line.text, state) }
	      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
	    }
	    ++doc.frontier
	    if (+new Date > end) {
	      startWorker(cm, cm.options.workDelay)
	      return true
	    }
	  })
	  if (changedLines.length) { runInOp(cm, function () {
	    for (var i = 0; i < changedLines.length; i++)
	      { regLineChange(cm, changedLines[i], "text") }
	  }) }
	}

	// DISPLAY DRAWING

	var DisplayUpdate = function(cm, viewport, force) {
	  var display = cm.display

	  this.viewport = viewport
	  // Store some values that we'll need later (but don't want to force a relayout for)
	  this.visible = visibleLines(display, cm.doc, viewport)
	  this.editorIsHidden = !display.wrapper.offsetWidth
	  this.wrapperHeight = display.wrapper.clientHeight
	  this.wrapperWidth = display.wrapper.clientWidth
	  this.oldDisplayWidth = displayWidth(cm)
	  this.force = force
	  this.dims = getDimensions(cm)
	  this.events = []
	};

	DisplayUpdate.prototype.signal = function (emitter, type) {
	  if (hasHandler(emitter, type))
	    { this.events.push(arguments) }
	};
	DisplayUpdate.prototype.finish = function () {
	    var this$1 = this;

	  for (var i = 0; i < this.events.length; i++)
	    { signal.apply(null, this$1.events[i]) }
	};

	function maybeClipScrollbars(cm) {
	  var display = cm.display
	  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
	    display.heightForcer.style.height = scrollGap(cm) + "px"
	    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
	    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
	    display.scrollbarsClipped = true
	  }
	}

	// Does the actual updating of the line display. Bails out
	// (returning false) when there is nothing to be done and forced is
	// false.
	function updateDisplayIfNeeded(cm, update) {
	  var display = cm.display, doc = cm.doc

	  if (update.editorIsHidden) {
	    resetView(cm)
	    return false
	  }

	  // Bail out if the visible area is already rendered and nothing changed.
	  if (!update.force &&
	      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	      display.renderedView == display.view && countDirtyView(cm) == 0)
	    { return false }

	  if (maybeUpdateLineNumberWidth(cm)) {
	    resetView(cm)
	    update.dims = getDimensions(cm)
	  }

	  // Compute a suitable new viewport (from & to)
	  var end = doc.first + doc.size
	  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
	  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
	  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
	  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
	  if (sawCollapsedSpans) {
	    from = visualLineNo(cm.doc, from)
	    to = visualLineEndNo(cm.doc, to)
	  }

	  var different = from != display.viewFrom || to != display.viewTo ||
	    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
	  adjustView(cm, from, to)

	  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
	  // Position the mover div to align with the current scroll position
	  cm.display.mover.style.top = display.viewOffset + "px"

	  var toUpdate = countDirtyView(cm)
	  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	    { return false }

	  // For big changes, we hide the enclosing element during the
	  // update, since that speeds up the operations on most browsers.
	  var focused = activeElt()
	  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
	  patchDisplay(cm, display.updateLineNumbers, update.dims)
	  if (toUpdate > 4) { display.lineDiv.style.display = "" }
	  display.renderedView = display.view
	  // There might have been a widget with a focused element that got
	  // hidden or updated, if so re-focus it.
	  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

	  // Prevent selection and cursors from interfering with the scroll
	  // width and height.
	  removeChildren(display.cursorDiv)
	  removeChildren(display.selectionDiv)
	  display.gutters.style.height = display.sizer.style.minHeight = 0

	  if (different) {
	    display.lastWrapHeight = update.wrapperHeight
	    display.lastWrapWidth = update.wrapperWidth
	    startWorker(cm, 400)
	  }

	  display.updateLineNumbers = null

	  return true
	}

	function postUpdateDisplay(cm, update) {
	  var viewport = update.viewport

	  for (var first = true;; first = false) {
	    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	      // Clip forced viewport to actual scrollable area.
	      if (viewport && viewport.top != null)
	        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
	      // Updated line heights might result in the drawn area not
	      // actually covering the viewport. Keep looping until it does.
	      update.visible = visibleLines(cm.display, cm.doc, viewport)
	      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	        { break }
	    }
	    if (!updateDisplayIfNeeded(cm, update)) { break }
	    updateHeightsInViewport(cm)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	  }

	  update.signal(cm, "update", cm)
	  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
	    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
	  }
	}

	function updateDisplaySimple(cm, viewport) {
	  var update = new DisplayUpdate(cm, viewport)
	  if (updateDisplayIfNeeded(cm, update)) {
	    updateHeightsInViewport(cm)
	    postUpdateDisplay(cm, update)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	    update.finish()
	  }
	}

	// Sync the actual display DOM structure with display.view, removing
	// nodes for lines that are no longer in view, and creating the ones
	// that are not there yet, and updating the ones that are out of
	// date.
	function patchDisplay(cm, updateNumbersFrom, dims) {
	  var display = cm.display, lineNumbers = cm.options.lineNumbers
	  var container = display.lineDiv, cur = container.firstChild

	  function rm(node) {
	    var next = node.nextSibling
	    // Works around a throw-scroll bug in OS X Webkit
	    if (webkit && mac && cm.display.currentWheelTarget == node)
	      { node.style.display = "none" }
	    else
	      { node.parentNode.removeChild(node) }
	    return next
	  }

	  var view = display.view, lineN = display.viewFrom
	  // Loop over the elements in the view, syncing cur (the DOM nodes
	  // in display.lineDiv) with the view as we go.
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (lineView.hidden) {
	    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	      var node = buildLineElement(cm, lineView, lineN, dims)
	      container.insertBefore(node, cur)
	    } else { // Already drawn
	      while (cur != lineView.node) { cur = rm(cur) }
	      var updateNumber = lineNumbers && updateNumbersFrom != null &&
	        updateNumbersFrom <= lineN && lineView.lineNumber
	      if (lineView.changes) {
	        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
	        updateLineForChanges(cm, lineView, lineN, dims)
	      }
	      if (updateNumber) {
	        removeChildren(lineView.lineNumber)
	        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
	      }
	      cur = lineView.node.nextSibling
	    }
	    lineN += lineView.size
	  }
	  while (cur) { cur = rm(cur) }
	}

	function updateGutterSpace(cm) {
	  var width = cm.display.gutters.offsetWidth
	  cm.display.sizer.style.marginLeft = width + "px"
	}

	function setDocumentHeight(cm, measure) {
	  cm.display.sizer.style.minHeight = measure.docHeight + "px"
	  cm.display.heightForcer.style.top = measure.docHeight + "px"
	  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
	}

	// Rebuild the gutter elements, ensure the margin to the left of the
	// code matches their width.
	function updateGutters(cm) {
	  var gutters = cm.display.gutters, specs = cm.options.gutters
	  removeChildren(gutters)
	  var i = 0
	  for (; i < specs.length; ++i) {
	    var gutterClass = specs[i]
	    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
	    if (gutterClass == "CodeMirror-linenumbers") {
	      cm.display.lineGutter = gElt
	      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
	    }
	  }
	  gutters.style.display = i ? "" : "none"
	  updateGutterSpace(cm)
	}

	// Make sure the gutters options contains the element
	// "CodeMirror-linenumbers" when the lineNumbers option is true.
	function setGuttersForLineNumbers(options) {
	  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
	  if (found == -1 && options.lineNumbers) {
	    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
	  } else if (found > -1 && !options.lineNumbers) {
	    options.gutters = options.gutters.slice(0)
	    options.gutters.splice(found, 1)
	  }
	}

	// Selection objects are immutable. A new one is created every time
	// the selection changes. A selection is one or more non-overlapping
	// (and non-touching) ranges, sorted, and an integer that indicates
	// which one is the primary selection (the one that's scrolled into
	// view, that getCursor returns, etc).
	function Selection(ranges, primIndex) {
	  this.ranges = ranges
	  this.primIndex = primIndex
	}

	Selection.prototype = {
	  primary: function() { return this.ranges[this.primIndex] },
	  equals: function(other) {
	    var this$1 = this;

	    if (other == this) { return true }
	    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var here = this$1.ranges[i], there = other.ranges[i]
	      if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) { return false }
	    }
	    return true
	  },
	  deepCopy: function() {
	    var this$1 = this;

	    var out = []
	    for (var i = 0; i < this.ranges.length; i++)
	      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
	    return new Selection(out, this.primIndex)
	  },
	  somethingSelected: function() {
	    var this$1 = this;

	    for (var i = 0; i < this.ranges.length; i++)
	      { if (!this$1.ranges[i].empty()) { return true } }
	    return false
	  },
	  contains: function(pos, end) {
	    var this$1 = this;

	    if (!end) { end = pos }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var range = this$1.ranges[i]
	      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	        { return i }
	    }
	    return -1
	  }
	}

	function Range(anchor, head) {
	  this.anchor = anchor; this.head = head
	}

	Range.prototype = {
	  from: function() { return minPos(this.anchor, this.head) },
	  to: function() { return maxPos(this.anchor, this.head) },
	  empty: function() {
	    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
	  }
	}

	// Take an unsorted, potentially overlapping set of ranges, and
	// build a selection out of it. 'Consumes' ranges array (modifying
	// it).
	function normalizeSelection(ranges, primIndex) {
	  var prim = ranges[primIndex]
	  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
	  primIndex = indexOf(ranges, prim)
	  for (var i = 1; i < ranges.length; i++) {
	    var cur = ranges[i], prev = ranges[i - 1]
	    if (cmp(prev.to(), cur.from()) >= 0) {
	      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
	      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
	      if (i <= primIndex) { --primIndex }
	      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
	    }
	  }
	  return new Selection(ranges, primIndex)
	}

	function simpleSelection(anchor, head) {
	  return new Selection([new Range(anchor, head || anchor)], 0)
	}

	// Compute the position of the end of a change (its 'to' property
	// refers to the pre-change end).
	function changeEnd(change) {
	  if (!change.text) { return change.to }
	  return Pos(change.from.line + change.text.length - 1,
	             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
	}

	// Adjust a position to refer to the post-change position of the
	// same text, or the end of the change if the change covers it.
	function adjustForChange(pos, change) {
	  if (cmp(pos, change.from) < 0) { return pos }
	  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

	  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
	  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
	  return Pos(line, ch)
	}

	function computeSelAfterChange(doc, change) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    var range = doc.sel.ranges[i]
	    out.push(new Range(adjustForChange(range.anchor, change),
	                       adjustForChange(range.head, change)))
	  }
	  return normalizeSelection(out, doc.sel.primIndex)
	}

	function offsetPos(pos, old, nw) {
	  if (pos.line == old.line)
	    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
	  else
	    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
	}

	// Used by replaceSelections to allow moving the selection to the
	// start or around the replaced test. Hint may be "start" or "around".
	function computeReplacedSel(doc, changes, hint) {
	  var out = []
	  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i]
	    var from = offsetPos(change.from, oldPrev, newPrev)
	    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
	    oldPrev = change.to
	    newPrev = to
	    if (hint == "around") {
	      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
	      out[i] = new Range(inv ? to : from, inv ? from : to)
	    } else {
	      out[i] = new Range(from, from)
	    }
	  }
	  return new Selection(out, doc.sel.primIndex)
	}

	// Used to get the editor into a consistent state again when options change.

	function loadMode(cm) {
	  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
	  resetModeState(cm)
	}

	function resetModeState(cm) {
	  cm.doc.iter(function (line) {
	    if (line.stateAfter) { line.stateAfter = null }
	    if (line.styles) { line.styles = null }
	  })
	  cm.doc.frontier = cm.doc.first
	  startWorker(cm, 100)
	  cm.state.modeGen++
	  if (cm.curOp) { regChange(cm) }
	}

	// DOCUMENT DATA STRUCTURE

	// By default, updates that start and end at the beginning of a line
	// are treated specially, in order to make the association of line
	// widgets and marker elements with the text behave more intuitive.
	function isWholeLineUpdate(doc, change) {
	  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
	}

	// Perform a change on the document data structure.
	function updateDoc(doc, change, markedSpans, estimateHeight) {
	  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
	  function update(line, text, spans) {
	    updateLine(line, text, spans, estimateHeight)
	    signalLater(line, "change", line, change)
	  }
	  function linesFor(start, end) {
	    var result = []
	    for (var i = start; i < end; ++i)
	      { result.push(new Line(text[i], spansFor(i), estimateHeight)) }
	    return result
	  }

	  var from = change.from, to = change.to, text = change.text
	  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
	  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

	  // Adjust the line structure
	  if (change.full) {
	    doc.insert(0, linesFor(0, text.length))
	    doc.remove(text.length, doc.size - text.length)
	  } else if (isWholeLineUpdate(doc, change)) {
	    // This is a whole-line replace. Treated specially to make
	    // sure line objects move the way they are supposed to.
	    var added = linesFor(0, text.length - 1)
	    update(lastLine, lastLine.text, lastSpans)
	    if (nlines) { doc.remove(from.line, nlines) }
	    if (added.length) { doc.insert(from.line, added) }
	  } else if (firstLine == lastLine) {
	    if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
	    } else {
	      var added$1 = linesFor(1, text.length - 1)
	      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	      doc.insert(from.line + 1, added$1)
	    }
	  } else if (text.length == 1) {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
	    doc.remove(from.line + 1, nlines)
	  } else {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
	    var added$2 = linesFor(1, text.length - 1)
	    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
	    doc.insert(from.line + 1, added$2)
	  }

	  signalLater(doc, "change", doc, change)
	}

	// Call f for all linked documents.
	function linkedDocs(doc, f, sharedHistOnly) {
	  function propagate(doc, skip, sharedHist) {
	    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
	      var rel = doc.linked[i]
	      if (rel.doc == skip) { continue }
	      var shared = sharedHist && rel.sharedHist
	      if (sharedHistOnly && !shared) { continue }
	      f(rel.doc, shared)
	      propagate(rel.doc, doc, shared)
	    } }
	  }
	  propagate(doc, null, true)
	}

	// Attach a document to an editor.
	function attachDoc(cm, doc) {
	  if (doc.cm) { throw new Error("This document is already in use.") }
	  cm.doc = doc
	  doc.cm = cm
	  estimateLineHeights(cm)
	  loadMode(cm)
	  if (!cm.options.lineWrapping) { findMaxLine(cm) }
	  cm.options.mode = doc.modeOption
	  regChange(cm)
	}

	function History(startGen) {
	  // Arrays of change events and selections. Doing something adds an
	  // event to done and clears undo. Undoing moves events from done
	  // to undone, redoing moves them in the other direction.
	  this.done = []; this.undone = []
	  this.undoDepth = Infinity
	  // Used to track when changes can be merged into a single undo
	  // event
	  this.lastModTime = this.lastSelTime = 0
	  this.lastOp = this.lastSelOp = null
	  this.lastOrigin = this.lastSelOrigin = null
	  // Used by the isClean() method
	  this.generation = this.maxGeneration = startGen || 1
	}

	// Create a history change event from an updateDoc-style change
	// object.
	function historyChangeFromChange(doc, change) {
	  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
	  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
	  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
	  return histChange
	}

	// Pop all selection events off the end of a history array. Stop at
	// a change event.
	function clearSelectionEvents(array) {
	  while (array.length) {
	    var last = lst(array)
	    if (last.ranges) { array.pop() }
	    else { break }
	  }
	}

	// Find the top change event in the history. Pop off selection
	// events that are in the way.
	function lastChangeEvent(hist, force) {
	  if (force) {
	    clearSelectionEvents(hist.done)
	    return lst(hist.done)
	  } else if (hist.done.length && !lst(hist.done).ranges) {
	    return lst(hist.done)
	  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	    hist.done.pop()
	    return lst(hist.done)
	  }
	}

	// Register a change in the history. Merges changes that are within
	// a single operation, or are close together with an origin that
	// allows merging (starting with "+") into a single event.
	function addChangeToHistory(doc, change, selAfter, opId) {
	  var hist = doc.history
	  hist.undone.length = 0
	  var time = +new Date, cur
	  var last

	  if ((hist.lastOp == opId ||
	       hist.lastOrigin == change.origin && change.origin &&
	       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	        change.origin.charAt(0) == "*")) &&
	      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	    // Merge this change into the last event
	    last = lst(cur.changes)
	    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	      // Optimized case for simple insertion -- don't want to add
	      // new changesets for every character typed
	      last.to = changeEnd(change)
	    } else {
	      // Add new sub-event
	      cur.changes.push(historyChangeFromChange(doc, change))
	    }
	  } else {
	    // Can not be merged, start a new event.
	    var before = lst(hist.done)
	    if (!before || !before.ranges)
	      { pushSelectionToHistory(doc.sel, hist.done) }
	    cur = {changes: [historyChangeFromChange(doc, change)],
	           generation: hist.generation}
	    hist.done.push(cur)
	    while (hist.done.length > hist.undoDepth) {
	      hist.done.shift()
	      if (!hist.done[0].ranges) { hist.done.shift() }
	    }
	  }
	  hist.done.push(selAfter)
	  hist.generation = ++hist.maxGeneration
	  hist.lastModTime = hist.lastSelTime = time
	  hist.lastOp = hist.lastSelOp = opId
	  hist.lastOrigin = hist.lastSelOrigin = change.origin

	  if (!last) { signal(doc, "historyAdded") }
	}

	function selectionEventCanBeMerged(doc, origin, prev, sel) {
	  var ch = origin.charAt(0)
	  return ch == "*" ||
	    ch == "+" &&
	    prev.ranges.length == sel.ranges.length &&
	    prev.somethingSelected() == sel.somethingSelected() &&
	    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
	}

	// Called whenever the selection changes, sets the new selection as
	// the pending selection in the history, and pushes the old pending
	// selection into the 'done' array when it was significantly
	// different (in number of selected ranges, emptiness, or time).
	function addSelectionToHistory(doc, sel, opId, options) {
	  var hist = doc.history, origin = options && options.origin

	  // A new event is started when the previous origin does not match
	  // the current, or the origins don't allow matching. Origins
	  // starting with * are always merged, those starting with + are
	  // merged when similar and close together in time.
	  if (opId == hist.lastSelOp ||
	      (origin && hist.lastSelOrigin == origin &&
	       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	    { hist.done[hist.done.length - 1] = sel }
	  else
	    { pushSelectionToHistory(sel, hist.done) }

	  hist.lastSelTime = +new Date
	  hist.lastSelOrigin = origin
	  hist.lastSelOp = opId
	  if (options && options.clearRedo !== false)
	    { clearSelectionEvents(hist.undone) }
	}

	function pushSelectionToHistory(sel, dest) {
	  var top = lst(dest)
	  if (!(top && top.ranges && top.equals(sel)))
	    { dest.push(sel) }
	}

	// Used to store marked span information in the history.
	function attachLocalSpans(doc, change, from, to) {
	  var existing = change["spans_" + doc.id], n = 0
	  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
	    if (line.markedSpans)
	      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
	    ++n
	  })
	}

	// When un/re-doing restores text containing marked spans, those
	// that have been explicitly cleared should not be restored.
	function removeClearedSpans(spans) {
	  if (!spans) { return null }
	  var out
	  for (var i = 0; i < spans.length; ++i) {
	    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
	    else if (out) { out.push(spans[i]) }
	  }
	  return !out ? spans : out.length ? out : null
	}

	// Retrieve and filter the old marked spans stored in a change event.
	function getOldSpans(doc, change) {
	  var found = change["spans_" + doc.id]
	  if (!found) { return null }
	  var nw = []
	  for (var i = 0; i < change.text.length; ++i)
	    { nw.push(removeClearedSpans(found[i])) }
	  return nw
	}

	// Used for un/re-doing changes from the history. Combines the
	// result of computing the existing spans with the set of spans that
	// existed in the history (so that deleting around a span and then
	// undoing brings back the span).
	function mergeOldSpans(doc, change) {
	  var old = getOldSpans(doc, change)
	  var stretched = stretchSpansOverChange(doc, change)
	  if (!old) { return stretched }
	  if (!stretched) { return old }

	  for (var i = 0; i < old.length; ++i) {
	    var oldCur = old[i], stretchCur = stretched[i]
	    if (oldCur && stretchCur) {
	      spans: for (var j = 0; j < stretchCur.length; ++j) {
	        var span = stretchCur[j]
	        for (var k = 0; k < oldCur.length; ++k)
	          { if (oldCur[k].marker == span.marker) { continue spans } }
	        oldCur.push(span)
	      }
	    } else if (stretchCur) {
	      old[i] = stretchCur
	    }
	  }
	  return old
	}

	// Used both to provide a JSON-safe object in .getHistory, and, when
	// detaching a document, to split the history in two
	function copyHistoryArray(events, newGroup, instantiateSel) {
	  var copy = []
	  for (var i = 0; i < events.length; ++i) {
	    var event = events[i]
	    if (event.ranges) {
	      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
	      continue
	    }
	    var changes = event.changes, newChanges = []
	    copy.push({changes: newChanges})
	    for (var j = 0; j < changes.length; ++j) {
	      var change = changes[j], m = (void 0)
	      newChanges.push({from: change.from, to: change.to, text: change.text})
	      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
	        if (indexOf(newGroup, Number(m[1])) > -1) {
	          lst(newChanges)[prop] = change[prop]
	          delete change[prop]
	        }
	      } } }
	    }
	  }
	  return copy
	}

	// The 'scroll' parameter given to many of these indicated whether
	// the new cursor position should be scrolled into view after
	// modifying the selection.

	// If shift is held or the extend flag is set, extends a range to
	// include a given position (and optionally a second position).
	// Otherwise, simply returns the range between the given positions.
	// Used for cursor motion and such.
	function extendRange(doc, range, head, other) {
	  if (doc.cm && doc.cm.display.shift || doc.extend) {
	    var anchor = range.anchor
	    if (other) {
	      var posBefore = cmp(head, anchor) < 0
	      if (posBefore != (cmp(other, anchor) < 0)) {
	        anchor = head
	        head = other
	      } else if (posBefore != (cmp(head, other) < 0)) {
	        head = other
	      }
	    }
	    return new Range(anchor, head)
	  } else {
	    return new Range(other || head, head)
	  }
	}

	// Extend the primary selection range, discard the rest.
	function extendSelection(doc, head, other, options) {
	  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
	}

	// Extend all selections (pos is an array of selections with length
	// equal the number of selections)
	function extendSelections(doc, heads, options) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++)
	    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
	  var newSel = normalizeSelection(out, doc.sel.primIndex)
	  setSelection(doc, newSel, options)
	}

	// Updates a single range in the selection.
	function replaceOneSelection(doc, i, range, options) {
	  var ranges = doc.sel.ranges.slice(0)
	  ranges[i] = range
	  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
	}

	// Reset the selection to a single range.
	function setSimpleSelection(doc, anchor, head, options) {
	  setSelection(doc, simpleSelection(anchor, head), options)
	}

	// Give beforeSelectionChange handlers a change to influence a
	// selection update.
	function filterSelectionChange(doc, sel, options) {
	  var obj = {
	    ranges: sel.ranges,
	    update: function(ranges) {
	      var this$1 = this;

	      this.ranges = []
	      for (var i = 0; i < ranges.length; i++)
	        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                   clipPos(doc, ranges[i].head)) }
	    },
	    origin: options && options.origin
	  }
	  signal(doc, "beforeSelectionChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
	  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
	  else { return sel }
	}

	function setSelectionReplaceHistory(doc, sel, options) {
	  var done = doc.history.done, last = lst(done)
	  if (last && last.ranges) {
	    done[done.length - 1] = sel
	    setSelectionNoUndo(doc, sel, options)
	  } else {
	    setSelection(doc, sel, options)
	  }
	}

	// Set a new selection.
	function setSelection(doc, sel, options) {
	  setSelectionNoUndo(doc, sel, options)
	  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
	}

	function setSelectionNoUndo(doc, sel, options) {
	  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	    { sel = filterSelectionChange(doc, sel, options) }

	  var bias = options && options.bias ||
	    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
	  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

	  if (!(options && options.scroll === false) && doc.cm)
	    { ensureCursorVisible(doc.cm) }
	}

	function setSelectionInner(doc, sel) {
	  if (sel.equals(doc.sel)) { return }

	  doc.sel = sel

	  if (doc.cm) {
	    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
	    signalCursorActivity(doc.cm)
	  }
	  signalLater(doc, "cursorActivity", doc)
	}

	// Verify that the selection does not partially select any atomic
	// marked ranges.
	function reCheckSelection(doc) {
	  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
	}

	// Return a selection that does not partially select any atomic
	// ranges.
	function skipAtomicInSelection(doc, sel, bias, mayClear) {
	  var out
	  for (var i = 0; i < sel.ranges.length; i++) {
	    var range = sel.ranges[i]
	    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
	    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
	    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
	    if (out || newAnchor != range.anchor || newHead != range.head) {
	      if (!out) { out = sel.ranges.slice(0, i) }
	      out[i] = new Range(newAnchor, newHead)
	    }
	  }
	  return out ? normalizeSelection(out, sel.primIndex) : sel
	}

	function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	  var line = getLine(doc, pos.line)
	  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	    var sp = line.markedSpans[i], m = sp.marker
	    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	      if (mayClear) {
	        signal(m, "beforeCursorEnter")
	        if (m.explicitlyCleared) {
	          if (!line.markedSpans) { break }
	          else {--i; continue}
	        }
	      }
	      if (!m.atomic) { continue }

	      if (oldPos) {
	        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0)
	        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
	        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
	      }

	      var far = m.find(dir < 0 ? -1 : 1)
	      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
	      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
	    }
	  } }
	  return pos
	}

	// Ensure a given position is not inside an atomic range.
	function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	  var dir = bias || 1
	  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
	  if (!found) {
	    doc.cantEdit = true
	    return Pos(doc.first, 0)
	  }
	  return found
	}

	function movePos(doc, pos, dir, line) {
	  if (dir < 0 && pos.ch == 0) {
	    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
	    else { return null }
	  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
	    else { return null }
	  } else {
	    return new Pos(pos.line, pos.ch + dir)
	  }
	}

	function selectAll(cm) {
	  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
	}

	// UPDATING

	// Allow "beforeChange" event handlers to influence a change
	function filterChange(doc, change, update) {
	  var obj = {
	    canceled: false,
	    from: change.from,
	    to: change.to,
	    text: change.text,
	    origin: change.origin,
	    cancel: function () { return obj.canceled = true; }
	  }
	  if (update) { obj.update = function (from, to, text, origin) {
	    if (from) { obj.from = clipPos(doc, from) }
	    if (to) { obj.to = clipPos(doc, to) }
	    if (text) { obj.text = text }
	    if (origin !== undefined) { obj.origin = origin }
	  } }
	  signal(doc, "beforeChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

	  if (obj.canceled) { return null }
	  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
	}

	// Apply a change to a document, and add it to the document's
	// history, and propagating it to all linked documents.
	function makeChange(doc, change, ignoreReadOnly) {
	  if (doc.cm) {
	    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
	    if (doc.cm.state.suppressEdits) { return }
	  }

	  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	    change = filterChange(doc, change, true)
	    if (!change) { return }
	  }

	  // Possibly split or suppress the update based on the presence
	  // of read-only spans in its range.
	  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
	  if (split) {
	    for (var i = split.length - 1; i >= 0; --i)
	      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
	  } else {
	    makeChangeInner(doc, change)
	  }
	}

	function makeChangeInner(doc, change) {
	  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
	  var selAfter = computeSelAfterChange(doc, change)
	  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

	  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
	  var rebased = []

	  linkedDocs(doc, function (doc, sharedHist) {
	    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	      rebaseHist(doc.history, change)
	      rebased.push(doc.history)
	    }
	    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
	  })
	}

	// Revert a change stored in a document's history.
	function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

	  var hist = doc.history, event, selAfter = doc.sel
	  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

	  // Verify that there is a useable event (so that ctrl-z won't
	  // needlessly clear selection events)
	  var i = 0
	  for (; i < source.length; i++) {
	    event = source[i]
	    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	      { break }
	  }
	  if (i == source.length) { return }
	  hist.lastOrigin = hist.lastSelOrigin = null

	  for (;;) {
	    event = source.pop()
	    if (event.ranges) {
	      pushSelectionToHistory(event, dest)
	      if (allowSelectionOnly && !event.equals(doc.sel)) {
	        setSelection(doc, event, {clearRedo: false})
	        return
	      }
	      selAfter = event
	    }
	    else { break }
	  }

	  // Build up a reverse change object to add to the opposite history
	  // stack (redo when undoing, and vice versa).
	  var antiChanges = []
	  pushSelectionToHistory(selAfter, dest)
	  dest.push({changes: antiChanges, generation: hist.generation})
	  hist.generation = event.generation || ++hist.maxGeneration

	  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

	  var loop = function ( i ) {
	    var change = event.changes[i]
	    change.origin = type
	    if (filter && !filterChange(doc, change, false)) {
	      source.length = 0
	      return {}
	    }

	    antiChanges.push(historyChangeFromChange(doc, change))

	    var after = i ? computeSelAfterChange(doc, change) : lst(source)
	    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
	    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
	    var rebased = []

	    // Propagate to the linked documents
	    linkedDocs(doc, function (doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change)
	        rebased.push(doc.history)
	      }
	      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
	    })
	  };

	  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
	    var returned = loop( i$1 );

	    if ( returned ) return returned.v;
	  }
	}

	// Sub-views need their line numbers shifted when text is added
	// above or below them in the parent document.
	function shiftDoc(doc, distance) {
	  if (distance == 0) { return }
	  doc.first += distance
	  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
	    Pos(range.anchor.line + distance, range.anchor.ch),
	    Pos(range.head.line + distance, range.head.ch)
	  ); }), doc.sel.primIndex)
	  if (doc.cm) {
	    regChange(doc.cm, doc.first, doc.first - distance, distance)
	    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	      { regLineChange(doc.cm, l, "gutter") }
	  }
	}

	// More lower-level change function, handling only a single document
	// (not linked ones).
	function makeChangeSingleDoc(doc, change, selAfter, spans) {
	  if (doc.cm && !doc.cm.curOp)
	    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

	  if (change.to.line < doc.first) {
	    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
	    return
	  }
	  if (change.from.line > doc.lastLine()) { return }

	  // Clip the change to the size of this doc
	  if (change.from.line < doc.first) {
	    var shift = change.text.length - 1 - (doc.first - change.from.line)
	    shiftDoc(doc, shift)
	    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	              text: [lst(change.text)], origin: change.origin}
	  }
	  var last = doc.lastLine()
	  if (change.to.line > last) {
	    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	              text: [change.text[0]], origin: change.origin}
	  }

	  change.removed = getBetween(doc, change.from, change.to)

	  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
	  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
	  else { updateDoc(doc, change, spans) }
	  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
	}

	// Handle the interaction of a change to a document with the editor
	// that this document is part of.
	function makeChangeSingleDocInEditor(cm, change, spans) {
	  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

	  var recomputeMaxLength = false, checkWidthStart = from.line
	  if (!cm.options.lineWrapping) {
	    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
	    doc.iter(checkWidthStart, to.line + 1, function (line) {
	      if (line == display.maxLine) {
	        recomputeMaxLength = true
	        return true
	      }
	    })
	  }

	  if (doc.sel.contains(change.from, change.to) > -1)
	    { signalCursorActivity(cm) }

	  updateDoc(doc, change, spans, estimateHeight(cm))

	  if (!cm.options.lineWrapping) {
	    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
	      var len = lineLength(line)
	      if (len > display.maxLineLength) {
	        display.maxLine = line
	        display.maxLineLength = len
	        display.maxLineChanged = true
	        recomputeMaxLength = false
	      }
	    })
	    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
	  }

	  // Adjust frontier, schedule worker
	  doc.frontier = Math.min(doc.frontier, from.line)
	  startWorker(cm, 400)

	  var lendiff = change.text.length - (to.line - from.line) - 1
	  // Remember that these lines changed, for updating the display
	  if (change.full)
	    { regChange(cm) }
	  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	    { regLineChange(cm, from.line, "text") }
	  else
	    { regChange(cm, from.line, to.line + 1, lendiff) }

	  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
	  if (changeHandler || changesHandler) {
	    var obj = {
	      from: from, to: to,
	      text: change.text,
	      removed: change.removed,
	      origin: change.origin
	    }
	    if (changeHandler) { signalLater(cm, "change", cm, obj) }
	    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
	  }
	  cm.display.selForContextMenu = null
	}

	function replaceRange(doc, code, from, to, origin) {
	  if (!to) { to = from }
	  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
	  if (typeof code == "string") { code = doc.splitLines(code) }
	  makeChange(doc, {from: from, to: to, text: code, origin: origin})
	}

	// Rebasing/resetting history to deal with externally-sourced changes

	function rebaseHistSelSingle(pos, from, to, diff) {
	  if (to < pos.line) {
	    pos.line += diff
	  } else if (from < pos.line) {
	    pos.line = from
	    pos.ch = 0
	  }
	}

	// Tries to rebase an array of history events given a change in the
	// document. If the change touches the same lines as the event, the
	// event, and everything 'behind' it, is discarded. If the change is
	// before the event, the event's positions are updated. Uses a
	// copy-on-write scheme for the positions, to avoid having to
	// reallocate them all on every rebase, but also avoid problems with
	// shared position objects being unsafely updated.
	function rebaseHistArray(array, from, to, diff) {
	  for (var i = 0; i < array.length; ++i) {
	    var sub = array[i], ok = true
	    if (sub.ranges) {
	      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
	      for (var j = 0; j < sub.ranges.length; j++) {
	        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
	        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
	      }
	      continue
	    }
	    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
	      var cur = sub.changes[j$1]
	      if (to < cur.from.line) {
	        cur.from = Pos(cur.from.line + diff, cur.from.ch)
	        cur.to = Pos(cur.to.line + diff, cur.to.ch)
	      } else if (from <= cur.to.line) {
	        ok = false
	        break
	      }
	    }
	    if (!ok) {
	      array.splice(0, i + 1)
	      i = 0
	    }
	  }
	}

	function rebaseHist(hist, change) {
	  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
	  rebaseHistArray(hist.done, from, to, diff)
	  rebaseHistArray(hist.undone, from, to, diff)
	}

	// Utility for applying a change to a line by handle or number,
	// returning the number and optionally registering the line as
	// changed.
	function changeLine(doc, handle, changeType, op) {
	  var no = handle, line = handle
	  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
	  else { no = lineNo(handle) }
	  if (no == null) { return null }
	  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
	  return line
	}

	// The document is represented as a BTree consisting of leaves, with
	// chunk of lines in them, and branches, with up to ten leaves or
	// other branch nodes below them. The top node is always a branch
	// node, and is the document object itself (meaning it has
	// additional methods and properties).
	//
	// All nodes have parent links. The tree is used both to go from
	// line numbers to line objects, and to go from objects to numbers.
	// It also indexes by height, and is used to convert between height
	// and line object, and to find the total height of the document.
	//
	// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	function LeafChunk(lines) {
	  var this$1 = this;

	  this.lines = lines
	  this.parent = null
	  var height = 0
	  for (var i = 0; i < lines.length; ++i) {
	    lines[i].parent = this$1
	    height += lines[i].height
	  }
	  this.height = height
	}

	LeafChunk.prototype = {
	  chunkSize: function() { return this.lines.length },
	  // Remove the n lines at offset 'at'.
	  removeInner: function(at, n) {
	    var this$1 = this;

	    for (var i = at, e = at + n; i < e; ++i) {
	      var line = this$1.lines[i]
	      this$1.height -= line.height
	      cleanUpLine(line)
	      signalLater(line, "delete")
	    }
	    this.lines.splice(at, n)
	  },
	  // Helper used to collapse a small branch into a single leaf.
	  collapse: function(lines) {
	    lines.push.apply(lines, this.lines)
	  },
	  // Insert the given array of lines at offset 'at', count them as
	  // having the given height.
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.height += height
	    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
	    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
	  },
	  // Used to iterate over a part of the tree.
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var e = at + n; at < e; ++at)
	      { if (op(this$1.lines[at])) { return true } }
	  }
	}

	function BranchChunk(children) {
	  var this$1 = this;

	  this.children = children
	  var size = 0, height = 0
	  for (var i = 0; i < children.length; ++i) {
	    var ch = children[i]
	    size += ch.chunkSize(); height += ch.height
	    ch.parent = this$1
	  }
	  this.size = size
	  this.height = height
	  this.parent = null
	}

	BranchChunk.prototype = {
	  chunkSize: function() { return this.size },
	  removeInner: function(at, n) {
	    var this$1 = this;

	    this.size -= n
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var rm = Math.min(n, sz - at), oldHeight = child.height
	        child.removeInner(at, rm)
	        this$1.height -= oldHeight - child.height
	        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
	        if ((n -= rm) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	    // If the result is smaller than 25 lines, ensure that it is a
	    // single leaf node.
	    if (this.size - n < 25 &&
	        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	      var lines = []
	      this.collapse(lines)
	      this.children = [new LeafChunk(lines)]
	      this.children[0].parent = this
	    }
	  },
	  collapse: function(lines) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
	  },
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.size += lines.length
	    this.height += height
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at <= sz) {
	        child.insertInner(at, lines, height)
	        if (child.lines && child.lines.length > 50) {
	          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	          var remaining = child.lines.length % 25 + 25
	          for (var pos = remaining; pos < child.lines.length;) {
	            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
	            child.height -= leaf.height
	            this$1.children.splice(++i, 0, leaf)
	            leaf.parent = this$1
	          }
	          child.lines = child.lines.slice(0, remaining)
	          this$1.maybeSpill()
	        }
	        break
	      }
	      at -= sz
	    }
	  },
	  // When a node has grown, check whether it should be split.
	  maybeSpill: function() {
	    if (this.children.length <= 10) { return }
	    var me = this
	    do {
	      var spilled = me.children.splice(me.children.length - 5, 5)
	      var sibling = new BranchChunk(spilled)
	      if (!me.parent) { // Become the parent node
	        var copy = new BranchChunk(me.children)
	        copy.parent = me
	        me.children = [copy, sibling]
	        me = copy
	     } else {
	        me.size -= sibling.size
	        me.height -= sibling.height
	        var myIndex = indexOf(me.parent.children, me)
	        me.parent.children.splice(myIndex + 1, 0, sibling)
	      }
	      sibling.parent = me.parent
	    } while (me.children.length > 10)
	    me.parent.maybeSpill()
	  },
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var used = Math.min(n, sz - at)
	        if (child.iterN(at, used, op)) { return true }
	        if ((n -= used) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	  }
	}

	// Line widgets are block elements displayed above or below a line.

	function LineWidget(doc, node, options) {
	  var this$1 = this;

	  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
	    { this$1[opt] = options[opt] } } }
	  this.doc = doc
	  this.node = node
	}
	eventMixin(LineWidget)

	function adjustScrollWhenAboveVisible(cm, line, diff) {
	  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	    { addToScrollPos(cm, null, diff) }
	}

	LineWidget.prototype.clear = function() {
	  var this$1 = this;

	  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
	  if (no == null || !ws) { return }
	  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
	  if (!ws.length) { line.widgets = null }
	  var height = widgetHeight(this)
	  updateLineHeight(line, Math.max(0, line.height - height))
	  if (cm) { runInOp(cm, function () {
	    adjustScrollWhenAboveVisible(cm, line, -height)
	    regLineChange(cm, no, "widget")
	  }) }
	}
	LineWidget.prototype.changed = function() {
	  var oldH = this.height, cm = this.doc.cm, line = this.line
	  this.height = null
	  var diff = widgetHeight(this) - oldH
	  if (!diff) { return }
	  updateLineHeight(line, line.height + diff)
	  if (cm) { runInOp(cm, function () {
	    cm.curOp.forceUpdate = true
	    adjustScrollWhenAboveVisible(cm, line, diff)
	  }) }
	}

	function addLineWidget(doc, handle, node, options) {
	  var widget = new LineWidget(doc, node, options)
	  var cm = doc.cm
	  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
	  changeLine(doc, handle, "widget", function (line) {
	    var widgets = line.widgets || (line.widgets = [])
	    if (widget.insertAt == null) { widgets.push(widget) }
	    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
	    widget.line = line
	    if (cm && !lineIsHidden(doc, line)) {
	      var aboveVisible = heightAtLine(line) < doc.scrollTop
	      updateLineHeight(line, line.height + widgetHeight(widget))
	      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
	      cm.curOp.forceUpdate = true
	    }
	    return true
	  })
	  return widget
	}

	// TEXTMARKERS

	// Created with markText and setBookmark methods. A TextMarker is a
	// handle that can be used to clear or find a marked position in the
	// document. Line objects hold arrays (markedSpans) containing
	// {from, to, marker} object pointing to such marker objects, and
	// indicating that such a marker is present on that line. Multiple
	// lines may point to the same marker when it spans across lines.
	// The spans will have null for their from/to properties when the
	// marker continues beyond the start/end of the line. Markers have
	// links back to the lines they currently touch.

	// Collapsed markers have unique ids, in order to be able to order
	// them, which is needed for uniquely determining an outer marker
	// when they overlap (they may nest, but not partially overlap).
	var nextMarkerId = 0

	function TextMarker(doc, type) {
	  this.lines = []
	  this.type = type
	  this.doc = doc
	  this.id = ++nextMarkerId
	}
	eventMixin(TextMarker)

	// Clear the marker.
	TextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  var cm = this.doc.cm, withOp = cm && !cm.curOp
	  if (withOp) { startOperation(cm) }
	  if (hasHandler(this, "clear")) {
	    var found = this.find()
	    if (found) { signalLater(this, "clear", found.from, found.to) }
	  }
	  var min = null, max = null
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
	    else if (cm) {
	      if (span.to != null) { max = lineNo(line) }
	      if (span.from != null) { min = lineNo(line) }
	    }
	    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
	    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
	      { updateLineHeight(line, textHeight(cm.display)) }
	  }
	  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
	    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
	    if (len > cm.display.maxLineLength) {
	      cm.display.maxLine = visual
	      cm.display.maxLineLength = len
	      cm.display.maxLineChanged = true
	    }
	  } }

	  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
	  this.lines.length = 0
	  this.explicitlyCleared = true
	  if (this.atomic && this.doc.cantEdit) {
	    this.doc.cantEdit = false
	    if (cm) { reCheckSelection(cm.doc) }
	  }
	  if (cm) { signalLater(cm, "markerCleared", cm, this) }
	  if (withOp) { endOperation(cm) }
	  if (this.parent) { this.parent.clear() }
	}

	// Find the position of the marker in the document. Returns a {from,
	// to} object by default. Side can be passed to get a specific side
	// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	// Pos objects returned contain a line object, rather than a line
	// number (used to prevent looking up the same line twice).
	TextMarker.prototype.find = function(side, lineObj) {
	  var this$1 = this;

	  if (side == null && this.type == "bookmark") { side = 1 }
	  var from, to
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (span.from != null) {
	      from = Pos(lineObj ? line : lineNo(line), span.from)
	      if (side == -1) { return from }
	    }
	    if (span.to != null) {
	      to = Pos(lineObj ? line : lineNo(line), span.to)
	      if (side == 1) { return to }
	    }
	  }
	  return from && {from: from, to: to}
	}

	// Signals that the marker's widget changed, and surrounding layout
	// should be recomputed.
	TextMarker.prototype.changed = function() {
	  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
	  if (!pos || !cm) { return }
	  runInOp(cm, function () {
	    var line = pos.line, lineN = lineNo(pos.line)
	    var view = findViewForLine(cm, lineN)
	    if (view) {
	      clearLineMeasurementCacheFor(view)
	      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
	    }
	    cm.curOp.updateMaxLine = true
	    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	      var oldHeight = widget.height
	      widget.height = null
	      var dHeight = widgetHeight(widget) - oldHeight
	      if (dHeight)
	        { updateLineHeight(line, line.height + dHeight) }
	    }
	  })
	}

	TextMarker.prototype.attachLine = function(line) {
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
	  }
	  this.lines.push(line)
	}
	TextMarker.prototype.detachLine = function(line) {
	  this.lines.splice(indexOf(this.lines, line), 1)
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
	  }
	}

	// Create a marker, wire it up to the right lines, and
	function markText(doc, from, to, options, type) {
	  // Shared markers (across linked documents) are handled separately
	  // (markTextShared will call out to this again, once per
	  // document).
	  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
	  // Ensure we are in an operation.
	  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

	  var marker = new TextMarker(doc, type), diff = cmp(from, to)
	  if (options) { copyObj(options, marker, false) }
	  // Don't connect empty markers unless clearWhenEmpty is false
	  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	    { return marker }
	  if (marker.replacedWith) {
	    // Showing up as a widget implies collapsed (widget replaces text)
	    marker.collapsed = true
	    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
	    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
	    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
	  }
	  if (marker.collapsed) {
	    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
	    seeCollapsedSpans()
	  }

	  if (marker.addToHistory)
	    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

	  var curLine = from.line, cm = doc.cm, updateMaxLine
	  doc.iter(curLine, to.line + 1, function (line) {
	    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	      { updateMaxLine = true }
	    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
	    addMarkedSpan(line, new MarkedSpan(marker,
	                                       curLine == from.line ? from.ch : null,
	                                       curLine == to.line ? to.ch : null))
	    ++curLine
	  })
	  // lineIsHidden depends on the presence of the spans, so needs a second pass
	  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
	    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
	  }) }

	  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

	  if (marker.readOnly) {
	    seeReadOnlySpans()
	    if (doc.history.done.length || doc.history.undone.length)
	      { doc.clearHistory() }
	  }
	  if (marker.collapsed) {
	    marker.id = ++nextMarkerId
	    marker.atomic = true
	  }
	  if (cm) {
	    // Sync editor state
	    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
	    if (marker.collapsed)
	      { regChange(cm, from.line, to.line + 1) }
	    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
	    if (marker.atomic) { reCheckSelection(cm.doc) }
	    signalLater(cm, "markerAdded", cm, marker)
	  }
	  return marker
	}

	// SHARED TEXTMARKERS

	// A shared marker spans multiple linked documents. It is
	// implemented as a meta-marker-object controlling multiple normal
	// markers.
	function SharedTextMarker(markers, primary) {
	  var this$1 = this;

	  this.markers = markers
	  this.primary = primary
	  for (var i = 0; i < markers.length; ++i)
	    { markers[i].parent = this$1 }
	}
	eventMixin(SharedTextMarker)

	SharedTextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  this.explicitlyCleared = true
	  for (var i = 0; i < this.markers.length; ++i)
	    { this$1.markers[i].clear() }
	  signalLater(this, "clear")
	}
	SharedTextMarker.prototype.find = function(side, lineObj) {
	  return this.primary.find(side, lineObj)
	}

	function markTextShared(doc, from, to, options, type) {
	  options = copyObj(options)
	  options.shared = false
	  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
	  var widget = options.widgetNode
	  linkedDocs(doc, function (doc) {
	    if (widget) { options.widgetNode = widget.cloneNode(true) }
	    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
	    for (var i = 0; i < doc.linked.length; ++i)
	      { if (doc.linked[i].isParent) { return } }
	    primary = lst(markers)
	  })
	  return new SharedTextMarker(markers, primary)
	}

	function findSharedMarkers(doc) {
	  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
	}

	function copySharedMarkers(doc, markers) {
	  for (var i = 0; i < markers.length; i++) {
	    var marker = markers[i], pos = marker.find()
	    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
	    if (cmp(mFrom, mTo)) {
	      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
	      marker.markers.push(subMark)
	      subMark.parent = marker
	    }
	  }
	}

	function detachSharedMarkers(markers) {
	  var loop = function ( i ) {
	    var marker = markers[i], linked = [marker.primary.doc]
	    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
	    for (var j = 0; j < marker.markers.length; j++) {
	      var subMarker = marker.markers[j]
	      if (indexOf(linked, subMarker.doc) == -1) {
	        subMarker.parent = null
	        marker.markers.splice(j--, 1)
	      }
	    }
	  };

	  for (var i = 0; i < markers.length; i++) loop( i );
	}

	var nextDocId = 0
	var Doc = function(text, mode, firstLine, lineSep) {
	  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
	  if (firstLine == null) { firstLine = 0 }

	  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
	  this.first = firstLine
	  this.scrollTop = this.scrollLeft = 0
	  this.cantEdit = false
	  this.cleanGeneration = 1
	  this.frontier = firstLine
	  var start = Pos(firstLine, 0)
	  this.sel = simpleSelection(start)
	  this.history = new History(null)
	  this.id = ++nextDocId
	  this.modeOption = mode
	  this.lineSep = lineSep
	  this.extend = false

	  if (typeof text == "string") { text = this.splitLines(text) }
	  updateDoc(this, {from: start, to: start, text: text})
	  setSelection(this, simpleSelection(start), sel_dontScroll)
	}

	Doc.prototype = createObj(BranchChunk.prototype, {
	  constructor: Doc,
	  // Iterate over the document. Supports two forms -- with only one
	  // argument, it calls that for each line in the document. With
	  // three, it iterates over the range given by the first two (with
	  // the second being non-inclusive).
	  iter: function(from, to, op) {
	    if (op) { this.iterN(from - this.first, to - from, op) }
	    else { this.iterN(this.first, this.first + this.size, from) }
	  },

	  // Non-public interface for adding and removing lines.
	  insert: function(at, lines) {
	    var height = 0
	    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
	    this.insertInner(at - this.first, lines, height)
	  },
	  remove: function(at, n) { this.removeInner(at - this.first, n) },

	  // From here, the methods are part of the public interface. Most
	  // are also available from CodeMirror (editor) instances.

	  getValue: function(lineSep) {
	    var lines = getLines(this, this.first, this.first + this.size)
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },
	  setValue: docMethodOp(function(code) {
	    var top = Pos(this.first, 0), last = this.first + this.size - 1
	    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                      text: this.splitLines(code), origin: "setValue", full: true}, true)
	    setSelection(this, simpleSelection(top))
	  }),
	  replaceRange: function(code, from, to, origin) {
	    from = clipPos(this, from)
	    to = to ? clipPos(this, to) : from
	    replaceRange(this, code, from, to, origin)
	  },
	  getRange: function(from, to, lineSep) {
	    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },

	  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

	  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
	  getLineNumber: function(line) {return lineNo(line)},

	  getLineHandleVisualStart: function(line) {
	    if (typeof line == "number") { line = getLine(this, line) }
	    return visualLine(line)
	  },

	  lineCount: function() {return this.size},
	  firstLine: function() {return this.first},
	  lastLine: function() {return this.first + this.size - 1},

	  clipPos: function(pos) {return clipPos(this, pos)},

	  getCursor: function(start) {
	    var range = this.sel.primary(), pos
	    if (start == null || start == "head") { pos = range.head }
	    else if (start == "anchor") { pos = range.anchor }
	    else if (start == "end" || start == "to" || start === false) { pos = range.to() }
	    else { pos = range.from() }
	    return pos
	  },
	  listSelections: function() { return this.sel.ranges },
	  somethingSelected: function() {return this.sel.somethingSelected()},

	  setCursor: docMethodOp(function(line, ch, options) {
	    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
	  }),
	  setSelection: docMethodOp(function(anchor, head, options) {
	    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
	  }),
	  extendSelection: docMethodOp(function(head, other, options) {
	    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
	  }),
	  extendSelections: docMethodOp(function(heads, options) {
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  extendSelectionsBy: docMethodOp(function(f, options) {
	    var heads = map(this.sel.ranges, f)
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  setSelections: docMethodOp(function(ranges, primary, options) {
	    var this$1 = this;

	    if (!ranges.length) { return }
	    var out = []
	    for (var i = 0; i < ranges.length; i++)
	      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
	                         clipPos(this$1, ranges[i].head)) }
	    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
	    setSelection(this, normalizeSelection(out, primary), options)
	  }),
	  addSelection: docMethodOp(function(anchor, head, options) {
	    var ranges = this.sel.ranges.slice(0)
	    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
	    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
	  }),

	  getSelection: function(lineSep) {
	    var this$1 = this;

	    var ranges = this.sel.ranges, lines
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      lines = lines ? lines.concat(sel) : sel
	    }
	    if (lineSep === false) { return lines }
	    else { return lines.join(lineSep || this.lineSeparator()) }
	  },
	  getSelections: function(lineSep) {
	    var this$1 = this;

	    var parts = [], ranges = this.sel.ranges
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
	      parts[i] = sel
	    }
	    return parts
	  },
	  replaceSelection: function(code, collapse, origin) {
	    var dup = []
	    for (var i = 0; i < this.sel.ranges.length; i++)
	      { dup[i] = code }
	    this.replaceSelections(dup, collapse, origin || "+input")
	  },
	  replaceSelections: docMethodOp(function(code, collapse, origin) {
	    var this$1 = this;

	    var changes = [], sel = this.sel
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i]
	      changes[i] = {from: range.from(), to: range.to(), text: this$1.splitLines(code[i]), origin: origin}
	    }
	    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
	    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
	      { makeChange(this$1, changes[i$1]) }
	    if (newSel) { setSelectionReplaceHistory(this, newSel) }
	    else if (this.cm) { ensureCursorVisible(this.cm) }
	  }),
	  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
	  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
	  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
	  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

	  setExtending: function(val) {this.extend = val},
	  getExtending: function() {return this.extend},

	  historySize: function() {
	    var hist = this.history, done = 0, undone = 0
	    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
	    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
	    return {undo: done, redo: undone}
	  },
	  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

	  markClean: function() {
	    this.cleanGeneration = this.changeGeneration(true)
	  },
	  changeGeneration: function(forceSplit) {
	    if (forceSplit)
	      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
	    return this.history.generation
	  },
	  isClean: function (gen) {
	    return this.history.generation == (gen || this.cleanGeneration)
	  },

	  getHistory: function() {
	    return {done: copyHistoryArray(this.history.done),
	            undone: copyHistoryArray(this.history.undone)}
	  },
	  setHistory: function(histData) {
	    var hist = this.history = new History(this.history.maxGeneration)
	    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
	    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
	  },

	  setGutterMarker: docMethodOp(function(line, gutterID, value) {
	    return changeLine(this, line, "gutter", function (line) {
	      var markers = line.gutterMarkers || (line.gutterMarkers = {})
	      markers[gutterID] = value
	      if (!value && isEmpty(markers)) { line.gutterMarkers = null }
	      return true
	    })
	  }),

	  clearGutter: docMethodOp(function(gutterID) {
	    var this$1 = this;

	    var i = this.first
	    this.iter(function (line) {
	      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	        changeLine(this$1, line, "gutter", function () {
	          line.gutterMarkers[gutterID] = null
	          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
	          return true
	        })
	      }
	      ++i
	    })
	  }),

	  lineInfo: function(line) {
	    var n
	    if (typeof line == "number") {
	      if (!isLine(this, line)) { return null }
	      n = line
	      line = getLine(this, line)
	      if (!line) { return null }
	    } else {
	      n = lineNo(line)
	      if (n == null) { return null }
	    }
	    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	            widgets: line.widgets}
	  },

	  addLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      if (!line[prop]) { line[prop] = cls }
	      else if (classTest(cls).test(line[prop])) { return false }
	      else { line[prop] += " " + cls }
	      return true
	    })
	  }),
	  removeLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      var cur = line[prop]
	      if (!cur) { return false }
	      else if (cls == null) { line[prop] = null }
	      else {
	        var found = cur.match(classTest(cls))
	        if (!found) { return false }
	        var end = found.index + found[0].length
	        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
	      }
	      return true
	    })
	  }),

	  addLineWidget: docMethodOp(function(handle, node, options) {
	    return addLineWidget(this, handle, node, options)
	  }),
	  removeLineWidget: function(widget) { widget.clear() },

	  markText: function(from, to, options) {
	    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
	  },
	  setBookmark: function(pos, options) {
	    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                    insertLeft: options && options.insertLeft,
	                    clearWhenEmpty: false, shared: options && options.shared,
	                    handleMouseEvents: options && options.handleMouseEvents}
	    pos = clipPos(this, pos)
	    return markText(this, pos, pos, realOpts, "bookmark")
	  },
	  findMarksAt: function(pos) {
	    pos = clipPos(this, pos)
	    var markers = [], spans = getLine(this, pos.line).markedSpans
	    if (spans) { for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i]
	      if ((span.from == null || span.from <= pos.ch) &&
	          (span.to == null || span.to >= pos.ch))
	        { markers.push(span.marker.parent || span.marker) }
	    } }
	    return markers
	  },
	  findMarks: function(from, to, filter) {
	    from = clipPos(this, from); to = clipPos(this, to)
	    var found = [], lineNo = from.line
	    this.iter(from.line, to.line + 1, function (line) {
	      var spans = line.markedSpans
	      if (spans) { for (var i = 0; i < spans.length; i++) {
	        var span = spans[i]
	        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	              span.from == null && lineNo != from.line ||
	              span.from != null && lineNo == to.line && span.from >= to.ch) &&
	            (!filter || filter(span.marker)))
	          { found.push(span.marker.parent || span.marker) }
	      } }
	      ++lineNo
	    })
	    return found
	  },
	  getAllMarks: function() {
	    var markers = []
	    this.iter(function (line) {
	      var sps = line.markedSpans
	      if (sps) { for (var i = 0; i < sps.length; ++i)
	        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
	    })
	    return markers
	  },

	  posFromIndex: function(off) {
	    var ch, lineNo = this.first, sepSize = this.lineSeparator().length
	    this.iter(function (line) {
	      var sz = line.text.length + sepSize
	      if (sz > off) { ch = off; return true }
	      off -= sz
	      ++lineNo
	    })
	    return clipPos(this, Pos(lineNo, ch))
	  },
	  indexFromPos: function (coords) {
	    coords = clipPos(this, coords)
	    var index = coords.ch
	    if (coords.line < this.first || coords.ch < 0) { return 0 }
	    var sepSize = this.lineSeparator().length
	    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
	      index += line.text.length + sepSize
	    })
	    return index
	  },

	  copy: function(copyHistory) {
	    var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                      this.modeOption, this.first, this.lineSep)
	    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
	    doc.sel = this.sel
	    doc.extend = false
	    if (copyHistory) {
	      doc.history.undoDepth = this.history.undoDepth
	      doc.setHistory(this.getHistory())
	    }
	    return doc
	  },

	  linkedDoc: function(options) {
	    if (!options) { options = {} }
	    var from = this.first, to = this.first + this.size
	    if (options.from != null && options.from > from) { from = options.from }
	    if (options.to != null && options.to < to) { to = options.to }
	    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
	    if (options.sharedHist) { copy.history = this.history
	    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
	    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
	    copySharedMarkers(copy, findSharedMarkers(this))
	    return copy
	  },
	  unlinkDoc: function(other) {
	    var this$1 = this;

	    if (other instanceof CodeMirror) { other = other.doc }
	    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
	      var link = this$1.linked[i]
	      if (link.doc != other) { continue }
	      this$1.linked.splice(i, 1)
	      other.unlinkDoc(this$1)
	      detachSharedMarkers(findSharedMarkers(this$1))
	      break
	    } }
	    // If the histories were shared, split them again
	    if (other.history == this.history) {
	      var splitIds = [other.id]
	      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
	      other.history = new History(null)
	      other.history.done = copyHistoryArray(this.history.done, splitIds)
	      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
	    }
	  },
	  iterLinkedDocs: function(f) {linkedDocs(this, f)},

	  getMode: function() {return this.mode},
	  getEditor: function() {return this.cm},

	  splitLines: function(str) {
	    if (this.lineSep) { return str.split(this.lineSep) }
	    return splitLinesAuto(str)
	  },
	  lineSeparator: function() { return this.lineSep || "\n" }
	})

	// Public alias.
	Doc.prototype.eachLine = Doc.prototype.iter

	// Kludge to work around strange IE behavior where it'll sometimes
	// re-fire a series of drag-related events right after the drop (#1551)
	var lastDrop = 0

	function onDrop(e) {
	  var cm = this
	  clearDragCursor(cm)
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	    { return }
	  e_preventDefault(e)
	  if (ie) { lastDrop = +new Date }
	  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
	  if (!pos || cm.isReadOnly()) { return }
	  // Might be a file drop, in which case we simply extract the text
	  // and insert it.
	  if (files && files.length && window.FileReader && window.File) {
	    var n = files.length, text = Array(n), read = 0
	    var loadFile = function (file, i) {
	      if (cm.options.allowDropFileTypes &&
	          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	        { return }

	      var reader = new FileReader
	      reader.onload = operation(cm, function () {
	        var content = reader.result
	        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
	        text[i] = content
	        if (++read == n) {
	          pos = clipPos(cm.doc, pos)
	          var change = {from: pos, to: pos,
	                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                        origin: "paste"}
	          makeChange(cm.doc, change)
	          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
	        }
	      })
	      reader.readAsText(file)
	    }
	    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
	  } else { // Normal drop
	    // Don't do a replace if the drop happened inside of the selected text.
	    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	      cm.state.draggingText(e)
	      // Ensure the editor is re-focused
	      setTimeout(function () { return cm.display.input.focus(); }, 20)
	      return
	    }
	    try {
	      var text$1 = e.dataTransfer.getData("Text")
	      if (text$1) {
	        var selected
	        if (cm.state.draggingText && !cm.state.draggingText.copy)
	          { selected = cm.listSelections() }
	        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
	        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
	          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
	        cm.replaceSelection(text$1, "around", "paste")
	        cm.display.input.focus()
	      }
	    }
	    catch(e){}
	  }
	}

	function onDragStart(cm, e) {
	  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

	  e.dataTransfer.setData("Text", cm.getSelection())
	  e.dataTransfer.effectAllowed = "copyMove"

	  // Use dummy image instead of default browsers image.
	  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	  if (e.dataTransfer.setDragImage && !safari) {
	    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
	    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	    if (presto) {
	      img.width = img.height = 1
	      cm.display.wrapper.appendChild(img)
	      // Force a relayout, or Opera won't use our image for some obscure reason
	      img._top = img.offsetTop
	    }
	    e.dataTransfer.setDragImage(img, 0, 0)
	    if (presto) { img.parentNode.removeChild(img) }
	  }
	}

	function onDragOver(cm, e) {
	  var pos = posFromMouse(cm, e)
	  if (!pos) { return }
	  var frag = document.createDocumentFragment()
	  drawSelectionCursor(cm, pos, frag)
	  if (!cm.display.dragCursor) {
	    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
	    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
	  }
	  removeChildrenAndAdd(cm.display.dragCursor, frag)
	}

	function clearDragCursor(cm) {
	  if (cm.display.dragCursor) {
	    cm.display.lineSpace.removeChild(cm.display.dragCursor)
	    cm.display.dragCursor = null
	  }
	}

	// These must be handled carefully, because naively registering a
	// handler for each editor will cause the editors to never be
	// garbage collected.

	function forEachCodeMirror(f) {
	  if (!document.body.getElementsByClassName) { return }
	  var byClass = document.body.getElementsByClassName("CodeMirror")
	  for (var i = 0; i < byClass.length; i++) {
	    var cm = byClass[i].CodeMirror
	    if (cm) { f(cm) }
	  }
	}

	var globalsRegistered = false
	function ensureGlobalHandlers() {
	  if (globalsRegistered) { return }
	  registerGlobalHandlers()
	  globalsRegistered = true
	}
	function registerGlobalHandlers() {
	  // When the window resizes, we need to refresh active editors.
	  var resizeTimer
	  on(window, "resize", function () {
	    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
	      resizeTimer = null
	      forEachCodeMirror(onResize)
	    }, 100) }
	  })
	  // When the window loses focus, we want to show the editor as blurred
	  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
	}
	// Called when the window resizes
	function onResize(cm) {
	  var d = cm.display
	  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	    { return }
	  // Might be a text scaling operation, clear size caches.
	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
	  d.scrollbarsClipped = false
	  cm.setSize()
	}

	var keyNames = {
	  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	}

	// Number keys
	for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
	// Alphabetic keys
	for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
	// Function keys
	for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

	var keyMap = {}

	keyMap.basic = {
	  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	  "Esc": "singleSelection"
	}
	// Note that the save and find-related commands aren't defined by
	// default. User code or addons can define them. Unknown commands
	// are simply ignored.
	keyMap.pcDefault = {
	  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	  fallthrough: "basic"
	}
	// Very basic readline/emacs-style bindings, which are standard on Mac.
	keyMap.emacsy = {
	  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	  "Ctrl-O": "openLine"
	}
	keyMap.macDefault = {
	  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	  fallthrough: ["basic", "emacsy"]
	}
	keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

	// KEYMAP DISPATCH

	function normalizeKeyName(name) {
	  var parts = name.split(/-(?!$)/)
	  name = parts[parts.length - 1]
	  var alt, ctrl, shift, cmd
	  for (var i = 0; i < parts.length - 1; i++) {
	    var mod = parts[i]
	    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
	    else if (/^a(lt)?$/i.test(mod)) { alt = true }
	    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
	    else if (/^s(hift)?$/i.test(mod)) { shift = true }
	    else { throw new Error("Unrecognized modifier name: " + mod) }
	  }
	  if (alt) { name = "Alt-" + name }
	  if (ctrl) { name = "Ctrl-" + name }
	  if (cmd) { name = "Cmd-" + name }
	  if (shift) { name = "Shift-" + name }
	  return name
	}

	// This is a kludge to keep keymaps mostly working as raw objects
	// (backwards compatibility) while at the same time support features
	// like normalization and multi-stroke key bindings. It compiles a
	// new normalized keymap, and then updates the old object to reflect
	// this.
	function normalizeKeyMap(keymap) {
	  var copy = {}
	  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
	    var value = keymap[keyname]
	    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
	    if (value == "...") { delete keymap[keyname]; continue }

	    var keys = map(keyname.split(" "), normalizeKeyName)
	    for (var i = 0; i < keys.length; i++) {
	      var val = (void 0), name = (void 0)
	      if (i == keys.length - 1) {
	        name = keys.join(" ")
	        val = value
	      } else {
	        name = keys.slice(0, i + 1).join(" ")
	        val = "..."
	      }
	      var prev = copy[name]
	      if (!prev) { copy[name] = val }
	      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
	    }
	    delete keymap[keyname]
	  } }
	  for (var prop in copy) { keymap[prop] = copy[prop] }
	  return keymap
	}

	function lookupKey(key, map, handle, context) {
	  map = getKeyMap(map)
	  var found = map.call ? map.call(key, context) : map[key]
	  if (found === false) { return "nothing" }
	  if (found === "...") { return "multi" }
	  if (found != null && handle(found)) { return "handled" }

	  if (map.fallthrough) {
	    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	      { return lookupKey(key, map.fallthrough, handle, context) }
	    for (var i = 0; i < map.fallthrough.length; i++) {
	      var result = lookupKey(key, map.fallthrough[i], handle, context)
	      if (result) { return result }
	    }
	  }
	}

	// Modifier key presses don't count as 'real' key presses for the
	// purpose of keymap fallthrough.
	function isModifierKey(value) {
	  var name = typeof value == "string" ? value : keyNames[value.keyCode]
	  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
	}

	// Look up the name of a key as indicated by an event object.
	function keyName(event, noShift) {
	  if (presto && event.keyCode == 34 && event["char"]) { return false }
	  var base = keyNames[event.keyCode], name = base
	  if (name == null || event.altGraphKey) { return false }
	  if (event.altKey && base != "Alt") { name = "Alt-" + name }
	  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
	  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
	  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
	  return name
	}

	function getKeyMap(val) {
	  return typeof val == "string" ? keyMap[val] : val
	}

	// Helper for deleting text near the selection(s), used to implement
	// backspace, delete, and similar functionality.
	function deleteNearSelection(cm, compute) {
	  var ranges = cm.doc.sel.ranges, kill = []
	  // Build up a set of ranges to kill first, merging overlapping
	  // ranges.
	  for (var i = 0; i < ranges.length; i++) {
	    var toKill = compute(ranges[i])
	    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	      var replaced = kill.pop()
	      if (cmp(replaced.from, toKill.from) < 0) {
	        toKill.from = replaced.from
	        break
	      }
	    }
	    kill.push(toKill)
	  }
	  // Next, remove those actual ranges.
	  runInOp(cm, function () {
	    for (var i = kill.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
	    ensureCursorVisible(cm)
	  })
	}

	// Commands are parameter-less actions that can be performed on an
	// editor, mostly used for keybindings.
	var commands = {
	  selectAll: selectAll,
	  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
	  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
	    if (range.empty()) {
	      var len = getLine(cm.doc, range.head.line).text.length
	      if (range.head.ch == len && range.head.line < cm.lastLine())
	        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
	      else
	        { return {from: range.head, to: Pos(range.head.line, len)} }
	    } else {
	      return {from: range.from(), to: range.to()}
	    }
	  }); },
	  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0),
	    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
	  }); }); },
	  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0), to: range.from()
	  }); }); },
	  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
	    return {from: leftPos, to: range.from()}
	  }); },
	  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	    return {from: range.from(), to: rightPos }
	  }); },
	  undo: function (cm) { return cm.undo(); },
	  redo: function (cm) { return cm.redo(); },
	  undoSelection: function (cm) { return cm.undoSelection(); },
	  redoSelection: function (cm) { return cm.redoSelection(); },
	  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
	  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
	  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
	    {origin: "+move", bias: -1}
	  ); },
	  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	  }, sel_move); },
	  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: 0, top: top}, "div")
	  }, sel_move); },
	  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var pos = cm.coordsChar({left: 0, top: top}, "div")
	    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
	    return pos
	  }, sel_move); },
	  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
	  goLineDown: function (cm) { return cm.moveV(1, "line"); },
	  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
	  goPageDown: function (cm) { return cm.moveV(1, "page"); },
	  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
	  goCharRight: function (cm) { return cm.moveH(1, "char"); },
	  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
	  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
	  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
	  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
	  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
	  goWordRight: function (cm) { return cm.moveH(1, "word"); },
	  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
	  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
	  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
	  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
	  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
	  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
	  indentAuto: function (cm) { return cm.indentSelection("smart"); },
	  indentMore: function (cm) { return cm.indentSelection("add"); },
	  indentLess: function (cm) { return cm.indentSelection("subtract"); },
	  insertTab: function (cm) { return cm.replaceSelection("\t"); },
	  insertSoftTab: function (cm) {
	    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
	    for (var i = 0; i < ranges.length; i++) {
	      var pos = ranges[i].from()
	      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
	      spaces.push(spaceStr(tabSize - col % tabSize))
	    }
	    cm.replaceSelections(spaces)
	  },
	  defaultTab: function (cm) {
	    if (cm.somethingSelected()) { cm.indentSelection("add") }
	    else { cm.execCommand("insertTab") }
	  },
	  // Swap the two chars left and right of each selection's head.
	  // Move cursor behind the two swapped characters afterwards.
	  //
	  // Doesn't consider line feeds a character.
	  // Doesn't scan more than one line above to find a character.
	  // Doesn't do anything on an empty line.
	  // Doesn't do anything with non-empty selections.
	  transposeChars: function (cm) { return runInOp(cm, function () {
	    var ranges = cm.listSelections(), newSel = []
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) { continue }
	      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
	      if (line) {
	        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
	        if (cur.ch > 0) {
	          cur = new Pos(cur.line, cur.ch + 1)
	          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
	        } else if (cur.line > cm.doc.first) {
	          var prev = getLine(cm.doc, cur.line - 1).text
	          if (prev) {
	            cur = new Pos(cur.line, 1)
	            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                            prev.charAt(prev.length - 1),
	                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
	          }
	        }
	      }
	      newSel.push(new Range(cur, cur))
	    }
	    cm.setSelections(newSel)
	  }); },
	  newlineAndIndent: function (cm) { return runInOp(cm, function () {
	    var sels = cm.listSelections()
	    for (var i = sels.length - 1; i >= 0; i--)
	      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
	    sels = cm.listSelections()
	    for (var i$1 = 0; i$1 < sels.length; i$1++)
	      { cm.indentLine(sels[i$1].from().line, null, true) }
	    ensureCursorVisible(cm)
	  }); },
	  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
	  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
	}


	function lineStart(cm, lineN) {
	  var line = getLine(cm.doc, lineN)
	  var visual = visualLine(line)
	  if (visual != line) { lineN = lineNo(visual) }
	  var order = getOrder(visual)
	  var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual)
	  return Pos(lineN, ch)
	}
	function lineEnd(cm, lineN) {
	  var merged, line = getLine(cm.doc, lineN)
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    lineN = null
	  }
	  var order = getOrder(line)
	  var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line)
	  return Pos(lineN == null ? lineNo(line) : lineN, ch)
	}
	function lineStartSmart(cm, pos) {
	  var start = lineStart(cm, pos.line)
	  var line = getLine(cm.doc, start.line)
	  var order = getOrder(line)
	  if (!order || order[0].level == 0) {
	    var firstNonWS = Math.max(0, line.text.search(/\S/))
	    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
	    return Pos(start.line, inWS ? 0 : firstNonWS)
	  }
	  return start
	}

	// Run a handler that was bound to a key.
	function doHandleBinding(cm, bound, dropShift) {
	  if (typeof bound == "string") {
	    bound = commands[bound]
	    if (!bound) { return false }
	  }
	  // Ensure previous input has been read, so that the handler sees a
	  // consistent view of the document
	  cm.display.input.ensurePolled()
	  var prevShift = cm.display.shift, done = false
	  try {
	    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
	    if (dropShift) { cm.display.shift = false }
	    done = bound(cm) != Pass
	  } finally {
	    cm.display.shift = prevShift
	    cm.state.suppressEdits = false
	  }
	  return done
	}

	function lookupKeyForEditor(cm, name, handle) {
	  for (var i = 0; i < cm.state.keyMaps.length; i++) {
	    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
	    if (result) { return result }
	  }
	  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	    || lookupKey(name, cm.options.keyMap, handle, cm)
	}

	var stopSeq = new Delayed
	function dispatchKey(cm, name, e, handle) {
	  var seq = cm.state.keySeq
	  if (seq) {
	    if (isModifierKey(name)) { return "handled" }
	    stopSeq.set(50, function () {
	      if (cm.state.keySeq == seq) {
	        cm.state.keySeq = null
	        cm.display.input.reset()
	      }
	    })
	    name = seq + " " + name
	  }
	  var result = lookupKeyForEditor(cm, name, handle)

	  if (result == "multi")
	    { cm.state.keySeq = name }
	  if (result == "handled")
	    { signalLater(cm, "keyHandled", cm, name, e) }

	  if (result == "handled" || result == "multi") {
	    e_preventDefault(e)
	    restartBlink(cm)
	  }

	  if (seq && !result && /\'$/.test(name)) {
	    e_preventDefault(e)
	    return true
	  }
	  return !!result
	}

	// Handle a key from the keydown event.
	function handleKeyBinding(cm, e) {
	  var name = keyName(e, true)
	  if (!name) { return false }

	  if (e.shiftKey && !cm.state.keySeq) {
	    // First try to resolve full name (including 'Shift-'). Failing
	    // that, see if there is a cursor-motion command (starting with
	    // 'go') bound to the keyname without 'Shift-'.
	    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
	        || dispatchKey(cm, name, e, function (b) {
	             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	               { return doHandleBinding(cm, b) }
	           })
	  } else {
	    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
	  }
	}

	// Handle a key from the keypress event
	function handleCharBinding(cm, e, ch) {
	  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
	}

	var lastStoppedKey = null
	function onKeyDown(e) {
	  var cm = this
	  cm.curOp.focus = activeElt()
	  if (signalDOMEvent(cm, e)) { return }
	  // IE does strange things with escape.
	  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
	  var code = e.keyCode
	  cm.display.shift = code == 16 || e.shiftKey
	  var handled = handleKeyBinding(cm, e)
	  if (presto) {
	    lastStoppedKey = handled ? code : null
	    // Opera has no cut event... we try to at least catch the key combo
	    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	      { cm.replaceSelection("", null, "cut") }
	  }

	  // Turn mouse into crosshair when Alt is held on Mac.
	  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	    { showCrossHair(cm) }
	}

	function showCrossHair(cm) {
	  var lineDiv = cm.display.lineDiv
	  addClass(lineDiv, "CodeMirror-crosshair")

	  function up(e) {
	    if (e.keyCode == 18 || !e.altKey) {
	      rmClass(lineDiv, "CodeMirror-crosshair")
	      off(document, "keyup", up)
	      off(document, "mouseover", up)
	    }
	  }
	  on(document, "keyup", up)
	  on(document, "mouseover", up)
	}

	function onKeyUp(e) {
	  if (e.keyCode == 16) { this.doc.sel.shift = false }
	  signalDOMEvent(this, e)
	}

	function onKeyPress(e) {
	  var cm = this
	  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
	  var keyCode = e.keyCode, charCode = e.charCode
	  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
	  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
	  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
	  // Some browsers fire keypress events for backspace
	  if (ch == "\x08") { return }
	  if (handleCharBinding(cm, e, ch)) { return }
	  cm.display.input.onKeyPress(e)
	}

	// A mouse down can be a single click, double click, triple click,
	// start of selection drag, start of text drag, new cursor
	// (ctrl-click), rectangle drag (alt-drag), or xwin
	// middle-click-paste. Or it might be a click on something we should
	// not interfere with, such as a scrollbar or widget.
	function onMouseDown(e) {
	  var cm = this, display = cm.display
	  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
	  display.input.ensurePolled()
	  display.shift = e.shiftKey

	  if (eventInWidget(display, e)) {
	    if (!webkit) {
	      // Briefly turn off draggability, to allow widgets to do
	      // normal dragging things.
	      display.scroller.draggable = false
	      setTimeout(function () { return display.scroller.draggable = true; }, 100)
	    }
	    return
	  }
	  if (clickInGutter(cm, e)) { return }
	  var start = posFromMouse(cm, e)
	  window.focus()

	  switch (e_button(e)) {
	  case 1:
	    // #3261: make sure, that we're not starting a second selection
	    if (cm.state.selectingText)
	      { cm.state.selectingText(e) }
	    else if (start)
	      { leftButtonDown(cm, e, start) }
	    else if (e_target(e) == display.scroller)
	      { e_preventDefault(e) }
	    break
	  case 2:
	    if (webkit) { cm.state.lastMiddleDown = +new Date }
	    if (start) { extendSelection(cm.doc, start) }
	    setTimeout(function () { return display.input.focus(); }, 20)
	    e_preventDefault(e)
	    break
	  case 3:
	    if (captureRightClick) { onContextMenu(cm, e) }
	    else { delayBlurEvent(cm) }
	    break
	  }
	}

	var lastClick;
	var lastDoubleClick;
	function leftButtonDown(cm, e, start) {
	  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
	  else { cm.curOp.focus = activeElt() }

	  var now = +new Date, type
	  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	    type = "triple"
	  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	    type = "double"
	    lastDoubleClick = {time: now, pos: start}
	  } else {
	    type = "single"
	    lastClick = {time: now, pos: start}
	  }

	  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
	  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	      type == "single" && (contained = sel.contains(start)) > -1 &&
	      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	      (cmp(contained.to(), start) > 0 || start.xRel < 0))
	    { leftButtonStartDrag(cm, e, start, modifier) }
	  else
	    { leftButtonSelect(cm, e, start, type, modifier) }
	}

	// Start a text drag. When it ends, see if any dragging actually
	// happen, and treat as a click if it didn't.
	function leftButtonStartDrag(cm, e, start, modifier) {
	  var display = cm.display, startTime = +new Date
	  var dragEnd = operation(cm, function (e2) {
	    if (webkit) { display.scroller.draggable = false }
	    cm.state.draggingText = false
	    off(document, "mouseup", dragEnd)
	    off(display.scroller, "drop", dragEnd)
	    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	      e_preventDefault(e2)
	      if (!modifier && +new Date - 200 < startTime)
	        { extendSelection(cm.doc, start) }
	      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	      if (webkit || ie && ie_version == 9)
	        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
	      else
	        { display.input.focus() }
	    }
	  })
	  // Let the drag handler handle this.
	  if (webkit) { display.scroller.draggable = true }
	  cm.state.draggingText = dragEnd
	  dragEnd.copy = mac ? e.altKey : e.ctrlKey
	  // IE's approach to draggable
	  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
	  on(document, "mouseup", dragEnd)
	  on(display.scroller, "drop", dragEnd)
	}

	// Normal selection, as opposed to text dragging.
	function leftButtonSelect(cm, e, start, type, addNew) {
	  var display = cm.display, doc = cm.doc
	  e_preventDefault(e)

	  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
	  if (addNew && !e.shiftKey) {
	    ourIndex = doc.sel.contains(start)
	    if (ourIndex > -1)
	      { ourRange = ranges[ourIndex] }
	    else
	      { ourRange = new Range(start, start) }
	  } else {
	    ourRange = doc.sel.primary()
	    ourIndex = doc.sel.primIndex
	  }

	  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	    type = "rect"
	    if (!addNew) { ourRange = new Range(start, start) }
	    start = posFromMouse(cm, e, true, true)
	    ourIndex = -1
	  } else if (type == "double") {
	    var word = cm.findWordAt(start)
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
	    else
	      { ourRange = word }
	  } else if (type == "triple") {
	    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
	    else
	      { ourRange = line }
	  } else {
	    ourRange = extendRange(doc, ourRange, start)
	  }

	  if (!addNew) {
	    ourIndex = 0
	    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
	    startSel = doc.sel
	  } else if (ourIndex == -1) {
	    ourIndex = ranges.length
	    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                 {scroll: false, origin: "*mouse"})
	  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                 {scroll: false, origin: "*mouse"})
	    startSel = doc.sel
	  } else {
	    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
	  }

	  var lastPos = start
	  function extendTo(pos) {
	    if (cmp(lastPos, pos) == 0) { return }
	    lastPos = pos

	    if (type == "rect") {
	      var ranges = [], tabSize = cm.options.tabSize
	      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
	      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
	      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
	      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	           line <= end; line++) {
	        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
	        if (left == right)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
	        else if (text.length > leftPos)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
	      }
	      if (!ranges.length) { ranges.push(new Range(start, start)) }
	      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                   {origin: "*mouse", scroll: false})
	      cm.scrollIntoView(pos)
	    } else {
	      var oldRange = ourRange
	      var anchor = oldRange.anchor, head = pos
	      if (type != "single") {
	        var range
	        if (type == "double")
	          { range = cm.findWordAt(pos) }
	        else
	          { range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
	        if (cmp(range.anchor, anchor) > 0) {
	          head = range.head
	          anchor = minPos(oldRange.from(), range.anchor)
	        } else {
	          head = range.anchor
	          anchor = maxPos(oldRange.to(), range.head)
	        }
	      }
	      var ranges$1 = startSel.ranges.slice(0)
	      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
	      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
	    }
	  }

	  var editorSize = display.wrapper.getBoundingClientRect()
	  // Used to ensure timeout re-tries don't fire when another extend
	  // happened in the meantime (clearTimeout isn't reliable -- at
	  // least on Chrome, the timeouts still happen even when cleared,
	  // if the clear happens after their scheduled firing time).
	  var counter = 0

	  function extend(e) {
	    var curCount = ++counter
	    var cur = posFromMouse(cm, e, true, type == "rect")
	    if (!cur) { return }
	    if (cmp(cur, lastPos) != 0) {
	      cm.curOp.focus = activeElt()
	      extendTo(cur)
	      var visible = visibleLines(display, doc)
	      if (cur.line >= visible.to || cur.line < visible.from)
	        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
	    } else {
	      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
	      if (outside) { setTimeout(operation(cm, function () {
	        if (counter != curCount) { return }
	        display.scroller.scrollTop += outside
	        extend(e)
	      }), 50) }
	    }
	  }

	  function done(e) {
	    cm.state.selectingText = false
	    counter = Infinity
	    e_preventDefault(e)
	    display.input.focus()
	    off(document, "mousemove", move)
	    off(document, "mouseup", up)
	    doc.history.lastSelOrigin = null
	  }

	  var move = operation(cm, function (e) {
	    if (!e_button(e)) { done(e) }
	    else { extend(e) }
	  })
	  var up = operation(cm, done)
	  cm.state.selectingText = up
	  on(document, "mousemove", move)
	  on(document, "mouseup", up)
	}


	// Determines whether an event happened in the gutter, and fires the
	// handlers for the corresponding event.
	function gutterEvent(cm, e, type, prevent) {
	  var mX, mY
	  try { mX = e.clientX; mY = e.clientY }
	  catch(e) { return false }
	  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
	  if (prevent) { e_preventDefault(e) }

	  var display = cm.display
	  var lineBox = display.lineDiv.getBoundingClientRect()

	  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
	  mY -= lineBox.top - display.viewOffset

	  for (var i = 0; i < cm.options.gutters.length; ++i) {
	    var g = display.gutters.childNodes[i]
	    if (g && g.getBoundingClientRect().right >= mX) {
	      var line = lineAtHeight(cm.doc, mY)
	      var gutter = cm.options.gutters[i]
	      signal(cm, type, cm, line, gutter, e)
	      return e_defaultPrevented(e)
	    }
	  }
	}

	function clickInGutter(cm, e) {
	  return gutterEvent(cm, e, "gutterClick", true)
	}

	// CONTEXT MENU HANDLING

	// To make the context menu work, we need to briefly unhide the
	// textarea (making it as unobtrusive as possible) to let the
	// right-click take effect on it.
	function onContextMenu(cm, e) {
	  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
	  if (signalDOMEvent(cm, e, "contextmenu")) { return }
	  cm.display.input.onContextMenu(e)
	}

	function contextMenuInGutter(cm, e) {
	  if (!hasHandler(cm, "gutterContextMenu")) { return false }
	  return gutterEvent(cm, e, "gutterContextMenu", false)
	}

	function themeChanged(cm) {
	  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
	  clearCaches(cm)
	}

	var Init = {toString: function(){return "CodeMirror.Init"}}

	var defaults = {}
	var optionHandlers = {}

	function defineOptions(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt
	    if (handle) { optionHandlers[name] =
	      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
	  }

	  CodeMirror.defineOption = option

	  // Passed to option handlers when there is no old value.
	  CodeMirror.Init = Init

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
	  option("mode", null, function (cm, val) {
	    cm.doc.modeOption = val
	    loadMode(cm)
	  }, true)

	  option("indentUnit", 2, loadMode, true)
	  option("indentWithTabs", false)
	  option("smartIndent", true)
	  option("tabSize", 4, function (cm) {
	    resetModeState(cm)
	    clearCaches(cm)
	    regChange(cm)
	  }, true)
	  option("lineSeparator", null, function (cm, val) {
	    cm.doc.lineSep = val
	    if (!val) { return }
	    var newBreaks = [], lineNo = cm.doc.first
	    cm.doc.iter(function (line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos)
	        if (found == -1) { break }
	        pos = found + val.length
	        newBreaks.push(Pos(lineNo, found))
	      }
	      lineNo++
	    })
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
	  })
	  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
	    if (old != Init) { cm.refresh() }
	  })
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
	  option("electricChars", true)
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
	    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
	  }, true)
	  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
	  option("rtlMoveVisually", !windows)
	  option("wholeLineUpdateBefore", true)

	  option("theme", "default", function (cm) {
	    themeChanged(cm)
	    guttersChanged(cm)
	  }, true)
	  option("keyMap", "default", function (cm, val, old) {
	    var next = getKeyMap(val)
	    var prev = old != Init && getKeyMap(old)
	    if (prev && prev.detach) { prev.detach(cm, next) }
	    if (next.attach) { next.attach(cm, prev || null) }
	  })
	  option("extraKeys", null)

	  option("lineWrapping", false, wrappingChanged, true)
	  option("gutters", [], function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("fixedGutter", true, function (cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
	    cm.refresh()
	  }, true)
	  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
	  option("scrollbarStyle", "native", function (cm) {
	    initScrollbars(cm)
	    updateScrollbars(cm)
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
	  }, true)
	  option("lineNumbers", false, function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("firstLineNumber", 1, guttersChanged, true)
	  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
	  option("showCursorWhenSelecting", false, updateSelection, true)

	  option("resetSelectionOnContextMenu", true)
	  option("lineWiseCopyCut", true)

	  option("readOnly", false, function (cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm)
	      cm.display.input.blur()
	      cm.display.disabled = true
	    } else {
	      cm.display.disabled = false
	    }
	    cm.display.input.readOnlyChanged(val)
	  })
	  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
	  option("dragDrop", true, dragDropChanged)
	  option("allowDropFileTypes", null)

	  option("cursorBlinkRate", 530)
	  option("cursorScrollMargin", 0)
	  option("cursorHeight", 1, updateSelection, true)
	  option("singleCursorHeightPerLine", true, updateSelection, true)
	  option("workTime", 100)
	  option("workDelay", 100)
	  option("flattenSpans", true, resetModeState, true)
	  option("addModeClass", false, resetModeState, true)
	  option("pollInterval", 100)
	  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
	  option("historyEventDelay", 1250)
	  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
	  option("maxHighlightLength", 10000, resetModeState, true)
	  option("moveInputWithCursor", true, function (cm, val) {
	    if (!val) { cm.display.input.resetPosition() }
	  })

	  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
	  option("autofocus", null)
	}

	function guttersChanged(cm) {
	  updateGutters(cm)
	  regChange(cm)
	  alignHorizontally(cm)
	}

	function dragDropChanged(cm, value, old) {
	  var wasOn = old && old != Init
	  if (!value != !wasOn) {
	    var funcs = cm.display.dragFunctions
	    var toggle = value ? on : off
	    toggle(cm.display.scroller, "dragstart", funcs.start)
	    toggle(cm.display.scroller, "dragenter", funcs.enter)
	    toggle(cm.display.scroller, "dragover", funcs.over)
	    toggle(cm.display.scroller, "dragleave", funcs.leave)
	    toggle(cm.display.scroller, "drop", funcs.drop)
	  }
	}

	function wrappingChanged(cm) {
	  if (cm.options.lineWrapping) {
	    addClass(cm.display.wrapper, "CodeMirror-wrap")
	    cm.display.sizer.style.minWidth = ""
	    cm.display.sizerWidth = null
	  } else {
	    rmClass(cm.display.wrapper, "CodeMirror-wrap")
	    findMaxLine(cm)
	  }
	  estimateLineHeights(cm)
	  regChange(cm)
	  clearCaches(cm)
	  setTimeout(function () { return updateScrollbars(cm); }, 100)
	}

	// A CodeMirror instance represents an editor. This is the object
	// that user code is usually dealing with.

	function CodeMirror(place, options) {
	  var this$1 = this;

	  if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

	  this.options = options = options ? copyObj(options) : {}
	  // Determine effective options based on given values and defaults.
	  copyObj(defaults, options, false)
	  setGuttersForLineNumbers(options)

	  var doc = options.value
	  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
	  this.doc = doc

	  var input = new CodeMirror.inputStyles[options.inputStyle](this)
	  var display = this.display = new Display(place, doc, input)
	  display.wrapper.CodeMirror = this
	  updateGutters(this)
	  themeChanged(this)
	  if (options.lineWrapping)
	    { this.display.wrapper.className += " CodeMirror-wrap" }
	  initScrollbars(this)

	  this.state = {
	    keyMaps: [],  // stores maps added by addKeyMap
	    overlays: [], // highlighting overlays, as added by addOverlay
	    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	    overwrite: false,
	    delayingBlurEvent: false,
	    focused: false,
	    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	    selectingText: false,
	    draggingText: false,
	    highlight: new Delayed(), // stores highlight worker timeout
	    keySeq: null,  // Unfinished key sequence
	    specialChars: null
	  }

	  if (options.autofocus && !mobile) { display.input.focus() }

	  // Override magic textarea content restore that IE sometimes does
	  // on our hidden textarea on reload
	  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

	  registerEventHandlers(this)
	  ensureGlobalHandlers()

	  startOperation(this)
	  this.curOp.forceUpdate = true
	  attachDoc(this, doc)

	  if ((options.autofocus && !mobile) || this.hasFocus())
	    { setTimeout(bind(onFocus, this), 20) }
	  else
	    { onBlur(this) }

	  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
	    { optionHandlers[opt](this$1, options[opt], Init) } }
	  maybeUpdateLineNumberWidth(this)
	  if (options.finishInit) { options.finishInit(this) }
	  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
	  endOperation(this)
	  // Suppress optimizelegibility in Webkit, since it breaks text
	  // measuring on line wrapping boundaries.
	  if (webkit && options.lineWrapping &&
	      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	    { display.lineDiv.style.textRendering = "auto" }
	}

	// The default configuration options.
	CodeMirror.defaults = defaults
	// Functions to run when options are changed.
	CodeMirror.optionHandlers = optionHandlers

	// Attach the necessary event handlers when initializing the editor
	function registerEventHandlers(cm) {
	  var d = cm.display
	  on(d.scroller, "mousedown", operation(cm, onMouseDown))
	  // Older IE's will not fire a second mousedown for a double click
	  if (ie && ie_version < 11)
	    { on(d.scroller, "dblclick", operation(cm, function (e) {
	      if (signalDOMEvent(cm, e)) { return }
	      var pos = posFromMouse(cm, e)
	      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
	      e_preventDefault(e)
	      var word = cm.findWordAt(pos)
	      extendSelection(cm.doc, word.anchor, word.head)
	    })) }
	  else
	    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
	  // Some browsers fire contextmenu *after* opening the menu, at
	  // which point we can't mess with it anymore. Context menu is
	  // handled in onMouseDown for these browsers.
	  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

	  // Used to suppress mouse event handling when a touch happens
	  var touchFinished, prevTouch = {end: 0}
	  function finishTouch() {
	    if (d.activeTouch) {
	      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
	      prevTouch = d.activeTouch
	      prevTouch.end = +new Date
	    }
	  }
	  function isMouseLikeTouchEvent(e) {
	    if (e.touches.length != 1) { return false }
	    var touch = e.touches[0]
	    return touch.radiusX <= 1 && touch.radiusY <= 1
	  }
	  function farAway(touch, other) {
	    if (other.left == null) { return true }
	    var dx = other.left - touch.left, dy = other.top - touch.top
	    return dx * dx + dy * dy > 20 * 20
	  }
	  on(d.scroller, "touchstart", function (e) {
	    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	      d.input.ensurePolled()
	      clearTimeout(touchFinished)
	      var now = +new Date
	      d.activeTouch = {start: now, moved: false,
	                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
	      if (e.touches.length == 1) {
	        d.activeTouch.left = e.touches[0].pageX
	        d.activeTouch.top = e.touches[0].pageY
	      }
	    }
	  })
	  on(d.scroller, "touchmove", function () {
	    if (d.activeTouch) { d.activeTouch.moved = true }
	  })
	  on(d.scroller, "touchend", function (e) {
	    var touch = d.activeTouch
	    if (touch && !eventInWidget(d, e) && touch.left != null &&
	        !touch.moved && new Date - touch.start < 300) {
	      var pos = cm.coordsChar(d.activeTouch, "page"), range
	      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	        { range = new Range(pos, pos) }
	      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	        { range = cm.findWordAt(pos) }
	      else // Triple tap
	        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
	      cm.setSelection(range.anchor, range.head)
	      cm.focus()
	      e_preventDefault(e)
	    }
	    finishTouch()
	  })
	  on(d.scroller, "touchcancel", finishTouch)

	  // Sync scrolling between fake scrollbars and real scrollable
	  // area, ensure viewport is updated when scrolling.
	  on(d.scroller, "scroll", function () {
	    if (d.scroller.clientHeight) {
	      setScrollTop(cm, d.scroller.scrollTop)
	      setScrollLeft(cm, d.scroller.scrollLeft, true)
	      signal(cm, "scroll", cm)
	    }
	  })

	  // Listen to wheel events in order to try and update the viewport on time.
	  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
	  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

	  // Prevent wrapper from ever scrolling
	  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

	  d.dragFunctions = {
	    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
	    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
	    start: function (e) { return onDragStart(cm, e); },
	    drop: operation(cm, onDrop),
	    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
	  }

	  var inp = d.input.getField()
	  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
	  on(inp, "keydown", operation(cm, onKeyDown))
	  on(inp, "keypress", operation(cm, onKeyPress))
	  on(inp, "focus", function (e) { return onFocus(cm, e); })
	  on(inp, "blur", function (e) { return onBlur(cm, e); })
	}

	var initHooks = []
	CodeMirror.defineInitHook = function (f) { return initHooks.push(f); }

	// Indent the given line. The how parameter can be "smart",
	// "add"/null, "subtract", or "prev". When aggressive is false
	// (typically set to true for forced single-line indents), empty
	// lines are not indented, and places where the mode returns Pass
	// are left alone.
	function indentLine(cm, n, how, aggressive) {
	  var doc = cm.doc, state
	  if (how == null) { how = "add" }
	  if (how == "smart") {
	    // Fall back to "prev" when the mode doesn't have an indentation
	    // method.
	    if (!doc.mode.indent) { how = "prev" }
	    else { state = getStateBefore(cm, n) }
	  }

	  var tabSize = cm.options.tabSize
	  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
	  if (line.stateAfter) { line.stateAfter = null }
	  var curSpaceString = line.text.match(/^\s*/)[0], indentation
	  if (!aggressive && !/\S/.test(line.text)) {
	    indentation = 0
	    how = "not"
	  } else if (how == "smart") {
	    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
	    if (indentation == Pass || indentation > 150) {
	      if (!aggressive) { return }
	      how = "prev"
	    }
	  }
	  if (how == "prev") {
	    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
	    else { indentation = 0 }
	  } else if (how == "add") {
	    indentation = curSpace + cm.options.indentUnit
	  } else if (how == "subtract") {
	    indentation = curSpace - cm.options.indentUnit
	  } else if (typeof how == "number") {
	    indentation = curSpace + how
	  }
	  indentation = Math.max(0, indentation)

	  var indentString = "", pos = 0
	  if (cm.options.indentWithTabs)
	    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
	  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

	  if (indentString != curSpaceString) {
	    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
	    line.stateAfter = null
	    return true
	  } else {
	    // Ensure that, if the cursor was in the whitespace at the start
	    // of the line, it is moved to the end of that space.
	    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
	      var range = doc.sel.ranges[i$1]
	      if (range.head.line == n && range.head.ch < curSpaceString.length) {
	        var pos$1 = Pos(n, curSpaceString.length)
	        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
	        break
	      }
	    }
	  }
	}

	// This will be set to a {lineWise: bool, text: [string]} object, so
	// that, when pasting, we know what kind of selections the copied
	// text was made out of.
	var lastCopied = null

	function setLastCopied(newLastCopied) {
	  lastCopied = newLastCopied
	}

	function applyTextInput(cm, inserted, deleted, sel, origin) {
	  var doc = cm.doc
	  cm.display.shift = false
	  if (!sel) { sel = doc.sel }

	  var paste = cm.state.pasteIncoming || origin == "paste"
	  var textLines = splitLinesAuto(inserted), multiPaste = null
	  // When pasing N lines into N selections, insert one line per selection
	  if (paste && sel.ranges.length > 1) {
	    if (lastCopied && lastCopied.text.join("\n") == inserted) {
	      if (sel.ranges.length % lastCopied.text.length == 0) {
	        multiPaste = []
	        for (var i = 0; i < lastCopied.text.length; i++)
	          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
	      }
	    } else if (textLines.length == sel.ranges.length) {
	      multiPaste = map(textLines, function (l) { return [l]; })
	    }
	  }

	  var updateInput
	  // Normal behavior is to insert the new text into every selection
	  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
	    var range = sel.ranges[i$1]
	    var from = range.from(), to = range.to()
	    if (range.empty()) {
	      if (deleted && deleted > 0) // Handle deletion
	        { from = Pos(from.line, from.ch - deleted) }
	      else if (cm.state.overwrite && !paste) // Handle overwrite
	        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
	      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	        { from = to = Pos(from.line, 0) }
	    }
	    updateInput = cm.curOp.updateInput
	    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
	                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
	    makeChange(cm.doc, changeEvent)
	    signalLater(cm, "inputRead", cm, changeEvent)
	  }
	  if (inserted && !paste)
	    { triggerElectric(cm, inserted) }

	  ensureCursorVisible(cm)
	  cm.curOp.updateInput = updateInput
	  cm.curOp.typing = true
	  cm.state.pasteIncoming = cm.state.cutIncoming = false
	}

	function handlePaste(e, cm) {
	  var pasted = e.clipboardData && e.clipboardData.getData("Text")
	  if (pasted) {
	    e.preventDefault()
	    if (!cm.isReadOnly() && !cm.options.disableInput)
	      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
	    return true
	  }
	}

	function triggerElectric(cm, inserted) {
	  // When an 'electric' character is inserted, immediately trigger a reindent
	  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
	  var sel = cm.doc.sel

	  for (var i = sel.ranges.length - 1; i >= 0; i--) {
	    var range = sel.ranges[i]
	    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
	    var mode = cm.getModeAt(range.head)
	    var indented = false
	    if (mode.electricChars) {
	      for (var j = 0; j < mode.electricChars.length; j++)
	        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	          indented = indentLine(cm, range.head.line, "smart")
	          break
	        } }
	    } else if (mode.electricInput) {
	      if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	        { indented = indentLine(cm, range.head.line, "smart") }
	    }
	    if (indented) { signalLater(cm, "electricInput", cm, range.head.line) }
	  }
	}

	function copyableRanges(cm) {
	  var text = [], ranges = []
	  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	    var line = cm.doc.sel.ranges[i].head.line
	    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
	    ranges.push(lineRange)
	    text.push(cm.getRange(lineRange.anchor, lineRange.head))
	  }
	  return {text: text, ranges: ranges}
	}

	function disableBrowserMagic(field, spellcheck) {
	  field.setAttribute("autocorrect", "off")
	  field.setAttribute("autocapitalize", "off")
	  field.setAttribute("spellcheck", !!spellcheck)
	}

	function hiddenTextarea() {
	  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
	  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
	  // The textarea is kept positioned near the cursor to prevent the
	  // fact that it'll be scrolled into view on input from scrolling
	  // our fake cursor out of view. On webkit, when wrap=off, paste is
	  // very slow. So make the area wide instead.
	  if (webkit) { te.style.width = "1000px" }
	  else { te.setAttribute("wrap", "off") }
	  // If border: 0; -- iOS fails to open keyboard (issue #1287)
	  if (ios) { te.style.border = "1px solid black" }
	  disableBrowserMagic(te)
	  return div
	}

	// The publicly visible API. Note that methodOp(f) means
	// 'wrap f in an operation, performed on its `this` parameter'.

	// This is not the complete set of editor methods. Most of the
	// methods defined on the Doc type are also injected into
	// CodeMirror.prototype, for backwards compatibility and
	// convenience.

	function addEditorMethods(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  var helpers = CodeMirror.helpers = {}

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus()},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option]
	      if (options[option] == value && option != "mode") { return }
	      options[option] = value
	      if (optionHandlers.hasOwnProperty(option))
	        { operation(this, optionHandlers[option])(this, value, old) }
	      signal(this, "optionChange", this, option)
	    },

	    getOption: function(option) {return this.options[option]},
	    getDoc: function() {return this.doc},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map))
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps
	      for (var i = 0; i < maps.length; ++i)
	        { if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1)
	          return true
	        } }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
	      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function (overlay) { return overlay.priority; })
	      this.state.modeGen++
	      regChange(this)
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var this$1 = this;

	      var overlays = this.state.overlays
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1)
	          this$1.state.modeGen++
	          regChange(this$1)
	          return
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
	        else { dir = dir ? "add" : "subtract" }
	      }
	      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
	    }),
	    indentSelection: methodOp(function(how) {
	      var this$1 = this;

	      var ranges = this.doc.sel.ranges, end = -1
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i]
	        if (!range.empty()) {
	          var from = range.from(), to = range.to()
	          var start = Math.max(end, from.line)
	          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
	          for (var j = start; j < end; ++j)
	            { indentLine(this$1, j, how) }
	          var newRanges = this$1.doc.sel.ranges
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
	        } else if (range.head.line > end) {
	          indentLine(this$1, range.head.line, how, true)
	          end = range.head.line
	          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise)
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true)
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos)
	      var styles = getLineStyles(this, getLine(this.doc, pos.line))
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
	      var type
	      if (ch == 0) { type = styles[2] }
	      else { for (;;) {
	        var mid = (before + after) >> 1
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
	        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
	        else { type = styles[mid * 2 + 2]; break }
	      } }
	      var cut = type ? type.indexOf("overlay ") : -1
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode
	      if (!mode.innerMode) { return mode }
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0]
	    },

	    getHelpers: function(pos, type) {
	      var this$1 = this;

	      var found = []
	      if (!helpers.hasOwnProperty(type)) { return found }
	      var help = helpers[type], mode = this.getModeAt(pos)
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) { found.push(help[mode[type]]) }
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]]
	          if (val) { found.push(val) }
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType])
	      } else if (help[mode.name]) {
	        found.push(help[mode.name])
	      }
	      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
	        var cur = help._global[i$1]
	        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
	          { found.push(cur.val) }
	      }
	      return found
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
	      return getStateBefore(this, line + 1, precise)
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary()
	      if (start == null) { pos = range.head }
	      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
	      else { pos = start ? range.from() : range.to() }
	      return cursorCoords(this, pos, mode || "page")
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page")
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page")
	      return coordsChar(this, coords.left, coords.top)
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
	      return lineAtHeight(this.doc, height + this.display.viewOffset)
	    },
	    heightAtLine: function(line, mode, includeWidgets) {
	      var end = false, lineObj
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1
	        if (line < this.doc.first) { line = this.doc.first }
	        else if (line > last) { line = last; end = true }
	        lineObj = getLine(this.doc, line)
	      } else {
	        lineObj = line
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets).top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0)
	    },

	    defaultTextHeight: function() { return textHeight(this.display) },
	    defaultCharWidth: function() { return charWidth(this.display) },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display
	      pos = cursorCoords(this, clipPos(this.doc, pos))
	      var top = pos.bottom, left = pos.left
	      node.style.position = "absolute"
	      node.setAttribute("cm-ignore-events", "true")
	      this.display.input.setUneditable(node)
	      display.sizer.appendChild(node)
	      if (vert == "over") {
	        top = pos.top
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          { top = pos.top - node.offsetHeight }
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          { top = pos.bottom }
	        if (left + node.offsetWidth > hspace)
	          { left = hspace - node.offsetWidth }
	      }
	      node.style.top = top + "px"
	      node.style.left = node.style.right = ""
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth
	        node.style.right = "0px"
	      } else {
	        if (horiz == "left") { left = 0 }
	        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
	        node.style.left = left + "px"
	      }
	      if (scroll)
	        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        { return commands[cmd].call(null, this) }
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

	    findPosH: function(from, amount, unit, visually) {
	      var this$1 = this;

	      var dir = 1
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        cur = findPosH(this$1.doc, cur, dir, unit, visually)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveH: methodOp(function(dir, unit) {
	      var this$1 = this;

	      this.extendSelectionsBy(function (range) {
	        if (this$1.display.shift || this$1.doc.extend || range.empty())
	          { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
	        else
	          { return dir < 0 ? range.from() : range.to() }
	      }, sel_move)
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc
	      if (sel.somethingSelected())
	        { doc.replaceSelection("", null, "+delete") }
	      else
	        { deleteNearSelection(this, function (range) {
	          var other = findPosH(doc, range.head, dir, unit, false)
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
	        }) }
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var this$1 = this;

	      var dir = 1, x = goalColumn
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        var coords = cursorCoords(this$1, cur, "div")
	        if (x == null) { x = coords.left }
	        else { coords.left = x }
	        cur = findPosV(this$1, coords, dir, unit)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveV: methodOp(function(dir, unit) {
	      var this$1 = this;

	      var doc = this.doc, goals = []
	      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
	      doc.extendSelectionsBy(function (range) {
	        if (collapse)
	          { return dir < 0 ? range.from() : range.to() }
	        var headPos = cursorCoords(this$1, range.head, "div")
	        if (range.goalColumn != null) { headPos.left = range.goalColumn }
	        goals.push(headPos.left)
	        var pos = findPosV(this$1, headPos, dir, unit)
	        if (unit == "page" && range == doc.sel.primary())
	          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
	        return pos
	      }, sel_move)
	      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
	        { doc.sel.ranges[i].goalColumn = goals[i] } }
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text
	      var start = pos.ch, end = pos.ch
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars")
	        if ((pos.xRel < 0 || end == line.length) && start) { --start; } else { ++end }
	        var startChar = line.charAt(start)
	        var check = isWordChar(startChar, helper)
	          ? function (ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
	          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
	        while (start > 0 && check(line.charAt(start - 1))) { --start }
	        while (end < line.length && check(line.charAt(end))) { ++end }
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end))
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) { return }
	      if (this.state.overwrite = !this.state.overwrite)
	        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
	      else
	        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

	      signal(this, "overwriteToggle", this, this.state.overwrite)
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt() },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) { resolveScrollToPos(this) }
	      if (x != null) { this.curOp.scrollLeft = x }
	      if (y != null) { this.curOp.scrollTop = y }
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null}
	        if (margin == null) { margin = this.options.cursorScrollMargin }
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null}
	      } else if (range.from == null) {
	        range = {from: range, to: null}
	      }
	      if (!range.to) { range.to = range.from }
	      range.margin = margin || 0

	      if (range.from.line != null) {
	        resolveScrollToPos(this)
	        this.curOp.scrollToPos = range
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin)
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var this$1 = this;

	      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
	      if (width != null) { this.display.wrapper.style.width = interpret(width) }
	      if (height != null) { this.display.wrapper.style.height = interpret(height) }
	      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
	      var lineNo = this.display.viewFrom
	      this.doc.iter(lineNo, this.display.viewTo, function (line) {
	        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
	          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
	        ++lineNo
	      })
	      this.curOp.forceUpdate = true
	      signal(this, "refresh", this)
	    }),

	    operation: function(f){return runInOp(this, f)},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight
	      regChange(this)
	      this.curOp.forceUpdate = true
	      clearCaches(this)
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
	      updateGutterSpace(this)
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        { estimateLineHeights(this) }
	      signal(this, "refresh", this)
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc
	      old.cm = null
	      attachDoc(this, doc)
	      clearCaches(this)
	      this.display.input.reset()
	      this.scrollTo(doc.scrollLeft, doc.scrollTop)
	      this.curOp.forceScroll = true
	      signalLater(this, "swapDoc", this, old)
	      return old
	    }),

	    getInputField: function(){return this.display.input.getField()},
	    getWrapperElement: function(){return this.display.wrapper},
	    getScrollerElement: function(){return this.display.scroller},
	    getGutterElement: function(){return this.display.gutters}
	  }
	  eventMixin(CodeMirror)

	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
	    helpers[type][name] = value
	  }
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value)
	    helpers[type]._global.push({pred: predicate, val: value})
	  }
	}

	// Used for horizontal relative motion. Dir is -1 or 1 (left or
	// right), unit can be "char", "column" (like char, but doesn't
	// cross line boundaries), "word" (across next word), or "group" (to
	// the start of next group of word or non-word-non-whitespace
	// chars). The visually param controls whether, in right-to-left
	// text, direction 1 means to move towards the next index in the
	// string, or towards the character to the right of the current
	// position. The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosH(doc, pos, dir, unit, visually) {
	  var line = pos.line, ch = pos.ch, origDir = dir
	  var lineObj = getLine(doc, line)
	  function findNextLine() {
	    var l = line + dir
	    if (l < doc.first || l >= doc.first + doc.size) { return false }
	    line = l
	    return lineObj = getLine(doc, l)
	  }
	  function moveOnce(boundToLine) {
	    var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true)
	    if (next == null) {
	      if (!boundToLine && findNextLine()) {
	        if (visually) { ch = (dir < 0 ? lineRight : lineLeft)(lineObj) }
	        else { ch = dir < 0 ? lineObj.text.length : 0 }
	      } else { return false }
	    } else { ch = next }
	    return true
	  }

	  if (unit == "char") {
	    moveOnce()
	  } else if (unit == "column") {
	    moveOnce(true)
	  } else if (unit == "word" || unit == "group") {
	    var sawType = null, group = unit == "group"
	    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
	    for (var first = true;; first = false) {
	      if (dir < 0 && !moveOnce(!first)) { break }
	      var cur = lineObj.text.charAt(ch) || "\n"
	      var type = isWordChar(cur, helper) ? "w"
	        : group && cur == "\n" ? "n"
	        : !group || /\s/.test(cur) ? null
	        : "p"
	      if (group && !first && !type) { type = "s" }
	      if (sawType && sawType != type) {
	        if (dir < 0) {dir = 1; moveOnce()}
	        break
	      }

	      if (type) { sawType = type }
	      if (dir > 0 && !moveOnce(!first)) { break }
	    }
	  }
	  var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true)
	  if (!cmp(pos, result)) { result.hitSide = true }
	  return result
	}

	// For relative vertical movement. Dir may be -1 or 1. Unit can be
	// "page" or "line". The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosV(cm, pos, dir, unit) {
	  var doc = cm.doc, x = pos.left, y
	  if (unit == "page") {
	    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
	    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
	    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

	  } else if (unit == "line") {
	    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
	  }
	  var target
	  for (;;) {
	    target = coordsChar(cm, x, y)
	    if (!target.outside) { break }
	    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
	    y += dir * 5
	  }
	  return target
	}

	// CONTENTEDITABLE INPUT STYLE

	var ContentEditableInput = function(cm) {
	  this.cm = cm
	  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
	  this.polling = new Delayed()
	  this.composing = null
	  this.gracePeriod = false
	  this.readDOMTimeout = null
	};

	ContentEditableInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = input.cm
	  var div = input.div = display.lineDiv
	  disableBrowserMagic(div, cm.options.spellcheck)

	  on(div, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
	    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	    if (ie_version <= 11) { setTimeout(operation(cm, function () {
	      if (!input.pollContent()) { regChange(cm) }
	    }), 20) }
	  })

	  on(div, "compositionstart", function (e) {
	    this$1.composing = {data: e.data, done: false}
	  })
	  on(div, "compositionupdate", function (e) {
	    if (!this$1.composing) { this$1.composing = {data: e.data, done: false} }
	  })
	  on(div, "compositionend", function (e) {
	    if (this$1.composing) {
	      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon() }
	      this$1.composing.done = true
	    }
	  })

	  on(div, "touchstart", function () { return input.forceCompositionEnd(); })

	  on(div, "input", function () {
	    if (!this$1.composing) { this$1.readFromDOMSoon() }
	  })

	  function onCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.operation(function () {
	          cm.setSelections(ranges.ranges, 0, sel_dontScroll)
	          cm.replaceSelection("", null, "cut")
	        })
	      }
	    }
	    if (e.clipboardData) {
	      e.clipboardData.clearData()
	      var content = lastCopied.text.join("\n")
	      // iOS exposes the clipboard API, but seems to discard content inserted into it
	      e.clipboardData.setData("Text", content)
	      if (e.clipboardData.getData("Text") == content) {
	        e.preventDefault()
	        return
	      }
	    }
	    // Old-fashioned briefly-focus-a-textarea hack
	    var kludge = hiddenTextarea(), te = kludge.firstChild
	    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
	    te.value = lastCopied.text.join("\n")
	    var hadFocus = document.activeElement
	    selectInput(te)
	    setTimeout(function () {
	      cm.display.lineSpace.removeChild(kludge)
	      hadFocus.focus()
	      if (hadFocus == div) { input.showPrimarySelection() }
	    }, 50)
	  }
	  on(div, "copy", onCopyCut)
	  on(div, "cut", onCopyCut)
	};

	ContentEditableInput.prototype.prepareSelection = function () {
	  var result = prepareSelection(this.cm, false)
	  result.focus = this.cm.state.focused
	  return result
	};

	ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
	  if (!info || !this.cm.display.view.length) { return }
	  if (info.focus || takeFocus) { this.showPrimarySelection() }
	  this.showMultipleSelections(info)
	};

	ContentEditableInput.prototype.showPrimarySelection = function () {
	  var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
	  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
	  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
	  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	      cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	      cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	    { return }

	  var start = posToDOM(this.cm, prim.from())
	  var end = posToDOM(this.cm, prim.to())
	  if (!start && !end) { return }

	  var view = this.cm.display.view
	  var old = sel.rangeCount && sel.getRangeAt(0)
	  if (!start) {
	    start = {node: view[0].measure.map[2], offset: 0}
	  } else if (!end) { // FIXME dangerously hacky
	    var measure = view[view.length - 1].measure
	    var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
	    end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
	  }

	  var rng
	  try { rng = range(start.node, start.offset, end.offset, end.node) }
	  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	  if (rng) {
	    if (!gecko && this.cm.state.focused) {
	      sel.collapse(start.node, start.offset)
	      if (!rng.collapsed) {
	        sel.removeAllRanges()
	        sel.addRange(rng)
	      }
	    } else {
	      sel.removeAllRanges()
	      sel.addRange(rng)
	    }
	    if (old && sel.anchorNode == null) { sel.addRange(old) }
	    else if (gecko) { this.startGracePeriod() }
	  }
	  this.rememberSelection()
	};

	ContentEditableInput.prototype.startGracePeriod = function () {
	    var this$1 = this;

	  clearTimeout(this.gracePeriod)
	  this.gracePeriod = setTimeout(function () {
	    this$1.gracePeriod = false
	    if (this$1.selectionChanged())
	      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
	  }, 20)
	};

	ContentEditableInput.prototype.showMultipleSelections = function (info) {
	  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
	  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
	};

	ContentEditableInput.prototype.rememberSelection = function () {
	  var sel = window.getSelection()
	  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
	  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
	};

	ContentEditableInput.prototype.selectionInEditor = function () {
	  var sel = window.getSelection()
	  if (!sel.rangeCount) { return false }
	  var node = sel.getRangeAt(0).commonAncestorContainer
	  return contains(this.div, node)
	};

	ContentEditableInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor") {
	    if (!this.selectionInEditor())
	      { this.showSelection(this.prepareSelection(), true) }
	    this.div.focus()
	  }
	};
	ContentEditableInput.prototype.blur = function () { this.div.blur() };
	ContentEditableInput.prototype.getField = function () { return this.div };

	ContentEditableInput.prototype.supportsTouch = function () { return true };

	ContentEditableInput.prototype.receivedFocus = function () {
	  var input = this
	  if (this.selectionInEditor())
	    { this.pollSelection() }
	  else
	    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

	  function poll() {
	    if (input.cm.state.focused) {
	      input.pollSelection()
	      input.polling.set(input.cm.options.pollInterval, poll)
	    }
	  }
	  this.polling.set(this.cm.options.pollInterval, poll)
	};

	ContentEditableInput.prototype.selectionChanged = function () {
	  var sel = window.getSelection()
	  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
	};

	ContentEditableInput.prototype.pollSelection = function () {
	  if (!this.composing && this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
	    var sel = window.getSelection(), cm = this.cm
	    this.rememberSelection()
	    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
	    var head = domToPos(cm, sel.focusNode, sel.focusOffset)
	    if (anchor && head) { runInOp(cm, function () {
	      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
	      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
	    }) }
	  }
	};

	ContentEditableInput.prototype.pollContent = function () {
	  if (this.readDOMTimeout != null) {
	    clearTimeout(this.readDOMTimeout)
	    this.readDOMTimeout = null
	  }

	  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
	  var from = sel.from(), to = sel.to()
	  if (from.ch == 0 && from.line > cm.firstLine())
	    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length) }
	  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
	    { to = Pos(to.line + 1, 0) }
	  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

	  var fromIndex, fromLine, fromNode
	  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	    fromLine = lineNo(display.view[0].line)
	    fromNode = display.view[0].node
	  } else {
	    fromLine = lineNo(display.view[fromIndex].line)
	    fromNode = display.view[fromIndex - 1].node.nextSibling
	  }
	  var toIndex = findViewIndex(cm, to.line)
	  var toLine, toNode
	  if (toIndex == display.view.length - 1) {
	    toLine = display.viewTo - 1
	    toNode = display.lineDiv.lastChild
	  } else {
	    toLine = lineNo(display.view[toIndex + 1].line) - 1
	    toNode = display.view[toIndex + 1].node.previousSibling
	  }

	  if (!fromNode) { return false }
	  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
	  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
	  while (newText.length > 1 && oldText.length > 1) {
	    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
	    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
	    else { break }
	  }

	  var cutFront = 0, cutEnd = 0
	  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
	  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	    { ++cutFront }
	  var newBot = lst(newText), oldBot = lst(oldText)
	  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                           oldBot.length - (oldText.length == 1 ? cutFront : 0))
	  while (cutEnd < maxCutEnd &&
	         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	    { ++cutEnd }

	  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
	  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

	  var chFrom = Pos(fromLine, cutFront)
	  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
	  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	    replaceRange(cm.doc, newText, chFrom, chTo, "+input")
	    return true
	  }
	};

	ContentEditableInput.prototype.ensurePolled = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.reset = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.forceCompositionEnd = function () {
	  if (!this.composing) { return }
	  clearTimeout(this.readDOMTimeout)
	  this.composing = null
	  if (!this.pollContent()) { regChange(this.cm) }
	  this.div.blur()
	  this.div.focus()
	};
	ContentEditableInput.prototype.readFromDOMSoon = function () {
	    var this$1 = this;

	  if (this.readDOMTimeout != null) { return }
	  this.readDOMTimeout = setTimeout(function () {
	    this$1.readDOMTimeout = null
	    if (this$1.composing) {
	      if (this$1.composing.done) { this$1.composing = null }
	      else { return }
	    }
	    if (this$1.cm.isReadOnly() || !this$1.pollContent())
	      { runInOp(this$1.cm, function () { return regChange(this$1.cm); }) }
	  }, 80)
	};

	ContentEditableInput.prototype.setUneditable = function (node) {
	  node.contentEditable = "false"
	};

	ContentEditableInput.prototype.onKeyPress = function (e) {
	  e.preventDefault()
	  if (!this.cm.isReadOnly())
	    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
	};

	ContentEditableInput.prototype.readOnlyChanged = function (val) {
	  this.div.contentEditable = String(val != "nocursor")
	};

	ContentEditableInput.prototype.onContextMenu = function () {};
	ContentEditableInput.prototype.resetPosition = function () {};

	ContentEditableInput.prototype.needsContentAttribute = true

	function posToDOM(cm, pos) {
	  var view = findViewForLine(cm, pos.line)
	  if (!view || view.hidden) { return null }
	  var line = getLine(cm.doc, pos.line)
	  var info = mapFromLineView(view, line, pos.line)

	  var order = getOrder(line), side = "left"
	  if (order) {
	    var partPos = getBidiPartAt(order, pos.ch)
	    side = partPos % 2 ? "right" : "left"
	  }
	  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
	  result.offset = result.collapse == "right" ? result.end : result.start
	  return result
	}

	function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

	function domTextBetween(cm, from, to, fromLine, toLine) {
	  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
	  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
	  function walk(node) {
	    if (node.nodeType == 1) {
	      var cmText = node.getAttribute("cm-text")
	      if (cmText != null) {
	        if (cmText == "") { text += node.textContent.replace(/\u200b/g, "") }
	        else { text += cmText }
	        return
	      }
	      var markerID = node.getAttribute("cm-marker"), range
	      if (markerID) {
	        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
	        if (found.length && (range = found[0].find()))
	          { text += getBetween(cm.doc, range.from, range.to).join(lineSep) }
	        return
	      }
	      if (node.getAttribute("contenteditable") == "false") { return }
	      for (var i = 0; i < node.childNodes.length; i++)
	        { walk(node.childNodes[i]) }
	      if (/^(pre|div|p)$/i.test(node.nodeName))
	        { closing = true }
	    } else if (node.nodeType == 3) {
	      var val = node.nodeValue
	      if (!val) { return }
	      if (closing) {
	        text += lineSep
	        closing = false
	      }
	      text += val
	    }
	  }
	  for (;;) {
	    walk(from)
	    if (from == to) { break }
	    from = from.nextSibling
	  }
	  return text
	}

	function domToPos(cm, node, offset) {
	  var lineNode
	  if (node == cm.display.lineDiv) {
	    lineNode = cm.display.lineDiv.childNodes[offset]
	    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
	    node = null; offset = 0
	  } else {
	    for (lineNode = node;; lineNode = lineNode.parentNode) {
	      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
	      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
	    }
	  }
	  for (var i = 0; i < cm.display.view.length; i++) {
	    var lineView = cm.display.view[i]
	    if (lineView.node == lineNode)
	      { return locateNodeInLineView(lineView, node, offset) }
	  }
	}

	function locateNodeInLineView(lineView, node, offset) {
	  var wrapper = lineView.text.firstChild, bad = false
	  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
	  if (node == wrapper) {
	    bad = true
	    node = wrapper.childNodes[offset]
	    offset = 0
	    if (!node) {
	      var line = lineView.rest ? lst(lineView.rest) : lineView.line
	      return badPos(Pos(lineNo(line), line.text.length), bad)
	    }
	  }

	  var textNode = node.nodeType == 3 ? node : null, topNode = node
	  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	    textNode = node.firstChild
	    if (offset) { offset = textNode.nodeValue.length }
	  }
	  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
	  var measure = lineView.measure, maps = measure.maps

	  function find(textNode, topNode, offset) {
	    for (var i = -1; i < (maps ? maps.length : 0); i++) {
	      var map = i < 0 ? measure.map : maps[i]
	      for (var j = 0; j < map.length; j += 3) {
	        var curNode = map[j + 2]
	        if (curNode == textNode || curNode == topNode) {
	          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
	          var ch = map[j] + offset
	          if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)] }
	          return Pos(line, ch)
	        }
	      }
	    }
	  }
	  var found = find(textNode, topNode, offset)
	  if (found) { return badPos(found, bad) }

	  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	    found = find(after, after.firstChild, 0)
	    if (found)
	      { return badPos(Pos(found.line, found.ch - dist), bad) }
	    else
	      { dist += after.textContent.length }
	  }
	  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
	    found = find(before, before.firstChild, -1)
	    if (found)
	      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
	    else
	      { dist$1 += before.textContent.length }
	  }
	}

	// TEXTAREA INPUT STYLE

	var TextareaInput = function(cm) {
	  this.cm = cm
	  // See input.poll and input.reset
	  this.prevInput = ""

	  // Flag that indicates whether we expect input to appear real soon
	  // now (after some event like 'keypress' or 'input') and are
	  // polling intensively.
	  this.pollingFast = false
	  // Self-resetting timeout for the poller
	  this.polling = new Delayed()
	  // Tracks when input.reset has punted to just putting a short
	  // string into the textarea instead of the full selection.
	  this.inaccurateSelection = false
	  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	  this.hasSelection = false
	  this.composing = null
	};

	TextareaInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = this.cm

	  // Wraps and hides input textarea
	  var div = this.wrapper = hiddenTextarea()
	  // The semihidden textarea that is focused when the editor is
	  // focused, and receives input.
	  var te = this.textarea = div.firstChild
	  display.wrapper.insertBefore(div, display.wrapper.firstChild)

	  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	  if (ios) { te.style.width = "0px" }

	  on(te, "input", function () {
	    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
	    input.poll()
	  })

	  on(te, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

	    cm.state.pasteIncoming = true
	    input.fastPoll()
	  })

	  function prepareCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (input.inaccurateSelection) {
	        input.prevInput = ""
	        input.inaccurateSelection = false
	        te.value = lastCopied.text.join("\n")
	        selectInput(te)
	      }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.setSelections(ranges.ranges, null, sel_dontScroll)
	      } else {
	        input.prevInput = ""
	        te.value = ranges.text.join("\n")
	        selectInput(te)
	      }
	    }
	    if (e.type == "cut") { cm.state.cutIncoming = true }
	  }
	  on(te, "cut", prepareCopyCut)
	  on(te, "copy", prepareCopyCut)

	  on(display.scroller, "paste", function (e) {
	    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
	    cm.state.pasteIncoming = true
	    input.focus()
	  })

	  // Prevent normal selection in the editor (we handle our own)
	  on(display.lineSpace, "selectstart", function (e) {
	    if (!eventInWidget(display, e)) { e_preventDefault(e) }
	  })

	  on(te, "compositionstart", function () {
	    var start = cm.getCursor("from")
	    if (input.composing) { input.composing.range.clear() }
	    input.composing = {
	      start: start,
	      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	    }
	  })
	  on(te, "compositionend", function () {
	    if (input.composing) {
	      input.poll()
	      input.composing.range.clear()
	      input.composing = null
	    }
	  })
	};

	TextareaInput.prototype.prepareSelection = function () {
	  // Redraw the selection and/or cursor
	  var cm = this.cm, display = cm.display, doc = cm.doc
	  var result = prepareSelection(cm)

	  // Move the hidden textarea near the cursor to prevent scrolling artifacts
	  if (cm.options.moveInputWithCursor) {
	    var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
	    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
	    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                        headPos.top + lineOff.top - wrapOff.top))
	    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                         headPos.left + lineOff.left - wrapOff.left))
	  }

	  return result
	};

	TextareaInput.prototype.showSelection = function (drawn) {
	  var cm = this.cm, display = cm.display
	  removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
	  removeChildrenAndAdd(display.selectionDiv, drawn.selection)
	  if (drawn.teTop != null) {
	    this.wrapper.style.top = drawn.teTop + "px"
	    this.wrapper.style.left = drawn.teLeft + "px"
	  }
	};

	// Reset the input to correspond to the selection (or to be empty,
	// when not typing and nothing is selected)
	TextareaInput.prototype.reset = function (typing) {
	  if (this.contextMenuPending) { return }
	  var minimal, selected, cm = this.cm, doc = cm.doc
	  if (cm.somethingSelected()) {
	    this.prevInput = ""
	    var range = doc.sel.primary()
	    minimal = hasCopyEvent &&
	      (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000)
	    var content = minimal ? "-" : selected || cm.getSelection()
	    this.textarea.value = content
	    if (cm.state.focused) { selectInput(this.textarea) }
	    if (ie && ie_version >= 9) { this.hasSelection = content }
	  } else if (!typing) {
	    this.prevInput = this.textarea.value = ""
	    if (ie && ie_version >= 9) { this.hasSelection = null }
	  }
	  this.inaccurateSelection = minimal
	};

	TextareaInput.prototype.getField = function () { return this.textarea };

	TextareaInput.prototype.supportsTouch = function () { return false };

	TextareaInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	    try { this.textarea.focus() }
	    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	  }
	};

	TextareaInput.prototype.blur = function () { this.textarea.blur() };

	TextareaInput.prototype.resetPosition = function () {
	  this.wrapper.style.top = this.wrapper.style.left = 0
	};

	TextareaInput.prototype.receivedFocus = function () { this.slowPoll() };

	// Poll for input changes, using the normal rate of polling. This
	// runs as long as the editor is focused.
	TextareaInput.prototype.slowPoll = function () {
	    var this$1 = this;

	  if (this.pollingFast) { return }
	  this.polling.set(this.cm.options.pollInterval, function () {
	    this$1.poll()
	    if (this$1.cm.state.focused) { this$1.slowPoll() }
	  })
	};

	// When an event has just come in that is likely to add or change
	// something in the input textarea, we poll faster, to ensure that
	// the change appears on the screen quickly.
	TextareaInput.prototype.fastPoll = function () {
	  var missed = false, input = this
	  input.pollingFast = true
	  function p() {
	    var changed = input.poll()
	    if (!changed && !missed) {missed = true; input.polling.set(60, p)}
	    else {input.pollingFast = false; input.slowPoll()}
	  }
	  input.polling.set(20, p)
	};

	// Read input from the textarea, and update the document to match.
	// When something is selected, it is present in the textarea, and
	// selected (unless it is huge, in which case a placeholder is
	// used). When nothing is selected, the cursor sits after previously
	// seen text (can be empty), which is stored in prevInput (we must
	// not reset the textarea when typing, because that breaks IME).
	TextareaInput.prototype.poll = function () {
	    var this$1 = this;

	  var cm = this.cm, input = this.textarea, prevInput = this.prevInput
	  // Since this is called a *lot*, try to bail out as cheaply as
	  // possible when it is clear that nothing happened. hasSelection
	  // will be the case when there is a lot of text in the textarea,
	  // in which case reading its value would be expensive.
	  if (this.contextMenuPending || !cm.state.focused ||
	      (hasSelection(input) && !prevInput && !this.composing) ||
	      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	    { return false }

	  var text = input.value
	  // If nothing changed, bail.
	  if (text == prevInput && !cm.somethingSelected()) { return false }
	  // Work around nonsensical selection resetting in IE9/10, and
	  // inexplicable appearance of private area unicode characters on
	  // some key combos in Mac (#2689).
	  if (ie && ie_version >= 9 && this.hasSelection === text ||
	      mac && /[\uf700-\uf7ff]/.test(text)) {
	    cm.display.input.reset()
	    return false
	  }

	  if (cm.doc.sel == cm.display.selForContextMenu) {
	    var first = text.charCodeAt(0)
	    if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
	    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
	  }
	  // Find the part of the input that is actually new
	  var same = 0, l = Math.min(prevInput.length, text.length)
	  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

	  runInOp(cm, function () {
	    applyTextInput(cm, text.slice(same), prevInput.length - same,
	                   null, this$1.composing ? "*compose" : null)

	    // Don't leave long text in the textarea, since it makes further polling slow
	    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
	    else { this$1.prevInput = text }

	    if (this$1.composing) {
	      this$1.composing.range.clear()
	      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
	                                         {className: "CodeMirror-composing"})
	    }
	  })
	  return true
	};

	TextareaInput.prototype.ensurePolled = function () {
	  if (this.pollingFast && this.poll()) { this.pollingFast = false }
	};

	TextareaInput.prototype.onKeyPress = function () {
	  if (ie && ie_version >= 9) { this.hasSelection = null }
	  this.fastPoll()
	};

	TextareaInput.prototype.onContextMenu = function (e) {
	  var input = this, cm = input.cm, display = cm.display, te = input.textarea
	  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
	  if (!pos || presto) { return } // Opera is difficult.

	  // Reset the current text selection only if the click is done outside of the selection
	  // and 'resetSelectionOnContextMenu' option is true.
	  var reset = cm.options.resetSelectionOnContextMenu
	  if (reset && cm.doc.sel.contains(pos) == -1)
	    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

	  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
	  input.wrapper.style.cssText = "position: absolute"
	  var wrapperBox = input.wrapper.getBoundingClientRect()
	  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
	  var oldScrollY
	  if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
	  display.input.focus()
	  if (webkit) { window.scrollTo(null, oldScrollY) }
	  display.input.reset()
	  // Adds "Select all" to context menu in FF
	  if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
	  input.contextMenuPending = true
	  display.selForContextMenu = cm.doc.sel
	  clearTimeout(display.detectingSelectAll)

	  // Select-all will be greyed out if there's nothing to select, so
	  // this adds a zero-width space so that we can later check whether
	  // it got selected.
	  function prepareSelectAllHack() {
	    if (te.selectionStart != null) {
	      var selected = cm.somethingSelected()
	      var extval = "\u200b" + (selected ? te.value : "")
	      te.value = "\u21da" // Used to catch context-menu undo
	      te.value = extval
	      input.prevInput = selected ? "" : "\u200b"
	      te.selectionStart = 1; te.selectionEnd = extval.length
	      // Re-set this, in case some other handler touched the
	      // selection in the meantime.
	      display.selForContextMenu = cm.doc.sel
	    }
	  }
	  function rehide() {
	    input.contextMenuPending = false
	    input.wrapper.style.cssText = oldWrapperCSS
	    te.style.cssText = oldCSS
	    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

	    // Try to detect the user choosing select-all
	    if (te.selectionStart != null) {
	      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
	      var i = 0, poll = function () {
	        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	            te.selectionEnd > 0 && input.prevInput == "\u200b")
	          { operation(cm, selectAll)(cm) }
	        else if (i++ < 10) { display.detectingSelectAll = setTimeout(poll, 500) }
	        else { display.input.reset() }
	      }
	      display.detectingSelectAll = setTimeout(poll, 200)
	    }
	  }

	  if (ie && ie_version >= 9) { prepareSelectAllHack() }
	  if (captureRightClick) {
	    e_stop(e)
	    var mouseup = function () {
	      off(window, "mouseup", mouseup)
	      setTimeout(rehide, 20)
	    }
	    on(window, "mouseup", mouseup)
	  } else {
	    setTimeout(rehide, 50)
	  }
	};

	TextareaInput.prototype.readOnlyChanged = function (val) {
	  if (!val) { this.reset() }
	};

	TextareaInput.prototype.setUneditable = function () {};

	TextareaInput.prototype.needsContentAttribute = false

	function fromTextArea(textarea, options) {
	  options = options ? copyObj(options) : {}
	  options.value = textarea.value
	  if (!options.tabindex && textarea.tabIndex)
	    { options.tabindex = textarea.tabIndex }
	  if (!options.placeholder && textarea.placeholder)
	    { options.placeholder = textarea.placeholder }
	  // Set autofocus to true if this textarea is focused, or if it has
	  // autofocus and no other element is focused.
	  if (options.autofocus == null) {
	    var hasFocus = activeElt()
	    options.autofocus = hasFocus == textarea ||
	      textarea.getAttribute("autofocus") != null && hasFocus == document.body
	  }

	  function save() {textarea.value = cm.getValue()}

	  var realSubmit
	  if (textarea.form) {
	    on(textarea.form, "submit", save)
	    // Deplorable hack to make the submit method do the right thing.
	    if (!options.leaveSubmitMethodAlone) {
	      var form = textarea.form
	      realSubmit = form.submit
	      try {
	        var wrappedSubmit = form.submit = function () {
	          save()
	          form.submit = realSubmit
	          form.submit()
	          form.submit = wrappedSubmit
	        }
	      } catch(e) {}
	    }
	  }

	  options.finishInit = function (cm) {
	    cm.save = save
	    cm.getTextArea = function () { return textarea; }
	    cm.toTextArea = function () {
	      cm.toTextArea = isNaN // Prevent this from being ran twice
	      save()
	      textarea.parentNode.removeChild(cm.getWrapperElement())
	      textarea.style.display = ""
	      if (textarea.form) {
	        off(textarea.form, "submit", save)
	        if (typeof textarea.form.submit == "function")
	          { textarea.form.submit = realSubmit }
	      }
	    }
	  }

	  textarea.style.display = "none"
	  var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
	    options)
	  return cm
	}

	function addLegacyProps(CodeMirror) {
	  CodeMirror.off = off
	  CodeMirror.on = on
	  CodeMirror.wheelEventPixels = wheelEventPixels
	  CodeMirror.Doc = Doc
	  CodeMirror.splitLines = splitLinesAuto
	  CodeMirror.countColumn = countColumn
	  CodeMirror.findColumn = findColumn
	  CodeMirror.isWordChar = isWordCharBasic
	  CodeMirror.Pass = Pass
	  CodeMirror.signal = signal
	  CodeMirror.Line = Line
	  CodeMirror.changeEnd = changeEnd
	  CodeMirror.scrollbarModel = scrollbarModel
	  CodeMirror.Pos = Pos
	  CodeMirror.cmpPos = cmp
	  CodeMirror.modes = modes
	  CodeMirror.mimeModes = mimeModes
	  CodeMirror.resolveMode = resolveMode
	  CodeMirror.getMode = getMode
	  CodeMirror.modeExtensions = modeExtensions
	  CodeMirror.extendMode = extendMode
	  CodeMirror.copyState = copyState
	  CodeMirror.startState = startState
	  CodeMirror.innerMode = innerMode
	  CodeMirror.commands = commands
	  CodeMirror.keyMap = keyMap
	  CodeMirror.keyName = keyName
	  CodeMirror.isModifierKey = isModifierKey
	  CodeMirror.lookupKey = lookupKey
	  CodeMirror.normalizeKeyMap = normalizeKeyMap
	  CodeMirror.StringStream = StringStream
	  CodeMirror.SharedTextMarker = SharedTextMarker
	  CodeMirror.TextMarker = TextMarker
	  CodeMirror.LineWidget = LineWidget
	  CodeMirror.e_preventDefault = e_preventDefault
	  CodeMirror.e_stopPropagation = e_stopPropagation
	  CodeMirror.e_stop = e_stop
	  CodeMirror.addClass = addClass
	  CodeMirror.contains = contains
	  CodeMirror.rmClass = rmClass
	  CodeMirror.keyNames = keyNames
	}

	// EDITOR CONSTRUCTOR

	defineOptions(CodeMirror)

	addEditorMethods(CodeMirror)

	// Set up methods on CodeMirror's prototype to redirect to the editor's document.
	var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
	for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	  { CodeMirror.prototype[prop] = (function(method) {
	    return function() {return method.apply(this.doc, arguments)}
	  })(Doc.prototype[prop]) } }

	eventMixin(Doc)

	// INPUT HANDLING

	CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

	// MODE DEFINITION AND QUERYING

	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	CodeMirror.defineMode = function(name/*, mode, …*/) {
	  if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name }
	  defineMode.apply(this, arguments)
	}

	CodeMirror.defineMIME = defineMIME

	// Minimal default mode.
	CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
	CodeMirror.defineMIME("text/plain", "null")

	// EXTENSIONS

	CodeMirror.defineExtension = function (name, func) {
	  CodeMirror.prototype[name] = func
	}
	CodeMirror.defineDocExtension = function (name, func) {
	  Doc.prototype[name] = func
	}

	CodeMirror.fromTextArea = fromTextArea

	addLegacyProps(CodeMirror)

	CodeMirror.version = "5.22.2"

	return CodeMirror;

	})));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }
/******/ ]);