/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Jokes/Jokes.ts":
/*!***************************************!*\
  !*** ./src/components/Jokes/Jokes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeJoke\": () => (/* binding */ AttributeJoke),\n/* harmony export */   \"default\": () => (/* binding */ Joke)\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.ts\");\n\nvar AttributeJoke;\n(function (AttributeJoke) {\n    AttributeJoke[\"but_t\"] = \"but_t\";\n})(AttributeJoke || (AttributeJoke = {}));\nclass Joke extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            but_t: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.but_t = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const container = this.ownerDocument.createElement('section');\n        const button = this.ownerDocument.createElement('app-button');\n        button.setAttribute(_button_button__WEBPACK_IMPORTED_MODULE_0__.AttributeButton.but_t, this.but_t);\n        container.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('app-joke', Joke);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Jokes/Jokes.ts?");

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeButton\": () => (/* binding */ AttributeButton),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nvar AttributeButton;\n(function (AttributeButton) {\n    AttributeButton[\"but_t\"] = \"but_t\";\n})(AttributeButton || (AttributeButton = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const act = {\n            but_t: null,\n        };\n        return Object.keys(act);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const button = this.ownerDocument.createElement('button');\n        button.innerText = `${this.but_t}`;\n        button.addEventListener('Yes Joke', () => {\n            button.innerText = \"not Joke\";\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n    }\n}\ncustomElements.define('app-button', Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Joke\": () => (/* reexport safe */ _Jokes_Jokes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _Jokes_Jokes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jokes/Jokes */ \"./src/components/Jokes/Jokes.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;