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

/***/ "./src/components/AbstractComponent/index.js":
/*!***************************************************!*\
  !*** ./src/components/AbstractComponent/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Базовый класс для всех компонентов, имеет 2 свойства:\r\n * elem - хранит родительский для компонента HTMLElement\r\n * props - объект с данными, которые необходимы для отрисовки компонента\r\n */\r\nclass AbstractComponent {\r\n    /**\r\n     * @param {HTMLElement} elem\r\n     * @param {Object} props\r\n     */\r\n    constructor(elem, props) {\r\n        this.elem = elem\r\n        this.props = props\r\n    }\r\n\r\n    /**\r\n     * Метод служит для отрисовки HTML на странице\r\n     */\r\n    render() {}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/AbstractComponent/index.js?");

/***/ }),

/***/ "./src/components/AppEntryComponent/index.js":
/*!***************************************************!*\
  !*** ./src/components/AppEntryComponent/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ \"./src/components/AbstractComponent/index.js\");\n/* harmony import */ var _TasksContainerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TasksContainerComponent */ \"./src/components/TasksContainerComponent/index.js\");\n\r\n\r\n\r\n/**\r\n * Главный компонент приложения, точка входа\r\n */\r\nclass AppEntryComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    render() {\r\n        /**\r\n         * Создается новый объект TasksContainerComponent, ему передается elem в который этот компонент будет\r\n         * встраивать HTML\r\n         * Затем, у компонента вызывается метод render для его отрисовки\r\n         */\r\n        new _TasksContainerComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.elem, {}).render()\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppEntryComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/AppEntryComponent/index.js?");

/***/ }),

/***/ "./src/components/TaskComponent/index.js":
/*!***********************************************!*\
  !*** ./src/components/TaskComponent/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ \"./src/components/AbstractComponent/index.js\");\n\r\n\r\nclass TaskComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    render() {\r\n        const task = document.createElement('li')\r\n        task.className = 'task'\r\n        task.innerHTML = `\r\n            <p>${this.props.name}</p>\r\n            <p class=\"delete\" style=\"color: firebrick\">удалить</p>\r\n            `\r\n\r\n        task.querySelector('.delete')\r\n            .addEventListener('click', this.props.onClick)\r\n\r\n        this.elem.appendChild(task)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/TaskComponent/index.js?");

/***/ }),

/***/ "./src/components/TasksContainerComponent/index.js":
/*!*********************************************************!*\
  !*** ./src/components/TasksContainerComponent/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ \"./src/components/AbstractComponent/index.js\");\n/* harmony import */ var _TaskComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TaskComponent */ \"./src/components/TaskComponent/index.js\");\n\r\n\r\n\r\n/**\r\n * Контейнер для задач\r\n */\r\nclass TasksContainerComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    _tasks = [\r\n        'Hello World',\r\n        'My Task',\r\n        'Do Something',\r\n        'Я не знаю'\r\n    ]\r\n\r\n    render() {\r\n        const container = document.createElement('div')\r\n        container.className = 'tasks_container'\r\n        container.innerHTML = '<ul></ul>'\r\n\r\n        const ul = container.querySelector('ul')\r\n\r\n        for (const task of this._tasks) {\r\n            new _TaskComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ul, {\r\n                name: task,\r\n                onClick: () => this.deleteTask(task)\r\n            })\r\n                .render()\r\n        }\r\n\r\n        this.elem.innerHTML = ''\r\n        this.elem.appendChild(container)\r\n    }\r\n\r\n    deleteTask(name) {\r\n        this._tasks = this._tasks.filter(value => value !== name)\r\n\r\n        this.render()\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksContainerComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/TasksContainerComponent/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppEntryComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppEntryComponent */ \"./src/components/AppEntryComponent/index.js\");\n\r\n\r\nfunction runApp() {\r\n    const root = document.querySelector('#app')\r\n\r\n    new _components_AppEntryComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root, {}).render()\r\n}\r\n\r\nrunApp()\n\n//# sourceURL=webpack://kanban-board/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;