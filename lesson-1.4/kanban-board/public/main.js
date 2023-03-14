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

/***/ "./src/components/appEntryComponent.js":
/*!*********************************************!*\
  !*** ./src/components/appEntryComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/components/component.js\");\n/* harmony import */ var _tasksContainerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksContainerComponent */ \"./src/components/tasksContainerComponent.js\");\n/* harmony import */ var _model_tasksInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/tasksInfo */ \"./src/model/tasksInfo.js\");\n\r\n\r\n\r\n\r\n/**\r\n * Главный компонент приложения, точка входа\r\n */\r\nclass AppEntryComponent extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    render() {\r\n        const tasksInfo = new _model_tasksInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n\r\n        /**\r\n         * Создается новый объект TasksContainerComponent, ему передается elem в который этот компонент будет\r\n         * встраивать HTML\r\n         * Затем, у компонента вызывается метод render для его отрисовки\r\n         */\r\n        new _tasksContainerComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.elem, {}, tasksInfo).render()\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppEntryComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/appEntryComponent.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Базовый класс для всех компонентов, имеет 2 свойства:\r\n * elem - хранит родительский для компонента HTMLElement\r\n * props - объект с данными, которые необходимы для отрисовки компонента\r\n */\r\nclass Component {\r\n    /**\r\n     * @param {HTMLElement} elem\r\n     * @param {Object} props\r\n     */\r\n    constructor(elem, props) {\r\n        this.elem = elem\r\n        this.props = props\r\n    }\r\n\r\n    /**\r\n     * Метод служит для отрисовки HTML на странице\r\n     */\r\n    render() {}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n\n//# sourceURL=webpack://kanban-board/./src/components/component.js?");

/***/ }),

/***/ "./src/components/taskComponent.js":
/*!*****************************************!*\
  !*** ./src/components/taskComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/components/component.js\");\n\r\n\r\n/**\r\n * Компонент для отрисовки одной задачи\r\n */\r\nclass TaskComponent extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    render() {\r\n        const task = document.createElement('li')\r\n        task.className = 'task'\r\n        task.innerHTML = `\r\n            <p>${this.props.name}</p>\r\n            <p class=\"delete\" style=\"color: firebrick\">удалить</p>\r\n            `\r\n\r\n        /**\r\n         * Регистрации функции которая была переданна из компонента TasksContainerComponent на клик по <p class=\"delete\"...\r\n         */\r\n        task.querySelector('.delete')\r\n            .addEventListener('click', this.props.onClick)\r\n\r\n        this.elem.appendChild(task)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/taskComponent.js?");

/***/ }),

/***/ "./src/components/tasksContainerComponent.js":
/*!***************************************************!*\
  !*** ./src/components/tasksContainerComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/components/component.js\");\n/* harmony import */ var _taskComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskComponent */ \"./src/components/taskComponent.js\");\n/* harmony import */ var _model_tasksInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/tasksInfo */ \"./src/model/tasksInfo.js\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Контейнер для задач, служит для работы с бизнес логикой задач\r\n */\r\nclass TasksContainerComponent extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /**\r\n     * @param {HTMLElement} elem\r\n     * @param {Object} props\r\n     * @param {TasksInfo} tasksInfo\r\n     */\r\n    constructor(elem, props, tasksInfo) {\r\n        super(elem, props)\r\n\r\n        this._tasksInfo = tasksInfo\r\n    }\r\n\r\n    /**\r\n     * Метод получает список задач и для каждой создает компонент TaskComponent, а затем отрисовывает его\r\n     */\r\n    render() {\r\n        const container = document.createElement('div');\r\n        const todo = document.createElement('div');\r\n        const done = document.createElement('div');\r\n\r\n        todo.className = 'tasks_todo';\r\n        done.className = 'tasks_done';\r\n        container.className = 'tasks_container';\r\n\r\n        container.appendChild(todo, done);\r\n\r\n        done.innerHTML = '<ul></ul>';\r\n        todo.innerHTML = '<ul></ul>';\r\n\r\n        const ulTodo = todo.querySelector('ul');\r\n        const ulDone = done.querySelector('ul');\r\n\r\n        for (const task of this._tasksInfo.getTasks()) {\r\n            /**\r\n             * Создание и отрисовка нового компонента TaskComponent\r\n             * В качестве родительского элемента компонента передает созданный элемент ul\r\n             */\r\n            if (task.isTodo()) {\r\n                new _taskComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ulTodo, {\r\n                    name: task.name,\r\n\r\n                    onClick: () => {\r\n                        this._tasksInfo.removeTask(task.id)\r\n                        this.render()\r\n                    }\r\n                }) .render();\r\n            } else if (task.isDone()) {\r\n                new _taskComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ulDone, {\r\n                    name: task.name,\r\n\r\n                    onClick: () => {\r\n                        this._tasksInfo.removeTask(task.id)\r\n                        this.render()\r\n                    }\r\n                }) .render();\r\n            }\r\n\r\n            // new TaskComponent(ul, {\r\n            //     /** В качестве имени передает имя задачи из текущей итерации */\r\n            //     name: task.name,\r\n            //     /**\r\n            //      * Передает функцию которая была замкнута с id задачи из текущей итерации\r\n            //      * При вызове функции из onClick вызовется функция removeTask из TasksInfo\r\n            //      * которой в качестве аргумента передастся замкнутый id задачи,\r\n            //      * затем, снова вызовиться метод render текущего компонента для обновления списка задач\r\n            //      */\r\n            //     onClick: () => {\r\n            //         this._tasksInfo.removeTask(task.id)\r\n            //         this.render()\r\n            //     }\r\n            //  })\r\n        }\r\n\r\n        /** Отчищает родительский элемент от HTML для того, чтобы обновить его */\r\n        this.elem.innerHTML = ''\r\n        this.elem.appendChild(container)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksContainerComponent);\n\n//# sourceURL=webpack://kanban-board/./src/components/tasksContainerComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_appEntryComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appEntryComponent */ \"./src/components/appEntryComponent.js\");\n\r\n\r\nfunction runApp() {\r\n    /** В качестве корнегого элемента получаем элемент с id app */\r\n    const root = document.querySelector('#app')\r\n\r\n    new _components_appEntryComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root, {}).render()\r\n}\r\n\r\nrunApp()\n\n//# sourceURL=webpack://kanban-board/./src/index.js?");

/***/ }),

/***/ "./src/model/task.js":
/*!***************************!*\
  !*** ./src/model/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n    /**\r\n     * @param {number} id\r\n     * @param {string} name\r\n     * @param {string} status\r\n     */\r\n    constructor(id, name, status) {\r\n        this.id = id\r\n        this.name = name\r\n        this.status = status\r\n    }\r\n\r\n    isTodo() {\r\n        return this.status === 'ToDo';\r\n    }\r\n\r\n    isDone() {\r\n        return this.status === 'Done';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://kanban-board/./src/model/task.js?");

/***/ }),

/***/ "./src/model/tasksInfo.js":
/*!********************************!*\
  !*** ./src/model/tasksInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/model/task.js\");\n\r\n\r\nclass TasksInfo {\r\n    _tasks = [\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 'Some Task', 'ToDo'),\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 'Mine more ninada😎', 'Done'),\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 'Do something', 'ToDo'),\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 'Finished😎', 'Done'),\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 'Update something', 'ToDo')\r\n    ]\r\n\r\n    /**\r\n     * @return {Task[]}\r\n     */\r\n    getTasks() {\r\n        return this._tasks\r\n    }\r\n\r\n    /**\r\n     * Удаление задачи по id\r\n     * @param {number} id\r\n     */\r\n    removeTask(id) {\r\n        this._tasks = this._tasks.filter(task => task.id !== id)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksInfo);\n\n//# sourceURL=webpack://kanban-board/./src/model/tasksInfo.js?");

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