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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/js/random.js\");\n\r\n\r\n\r\n\r\nconst animationController = () => {\r\n\r\n    // CIRCLE BG ANIMATION\r\n    (0,_random__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    \r\n    // HOME BASIC ANIMATIONS\r\n    let clickStatus = false;\r\n    if(document.querySelector(\".discover\")){\r\n\r\n        document.querySelector(\".discover\").addEventListener(\"click\", () => {\r\n\r\n            clickStatus = true;\r\n            document.getElementById('home-nav').scrollIntoView();\r\n\r\n        })\r\n\r\n        setTimeout(() => {\r\n            if(!clickStatus){\r\n                    \r\n                document.getElementById('home-nav').scrollIntoView();\r\n           \r\n             }  \r\n        }, 10000)\r\n    }\r\n\r\n    // ABOUT ANIMATIONS\r\n\r\n    if(document.querySelector(\".dot-circle\")){\r\n\r\n        document.querySelector(\".dot-circle\").addEventListener(\"mouseover\", (e)=> {\r\n\r\n            document.querySelector(\".dot-circle\").style.width = \"130px\";\r\n            document.querySelector(\".dot-circle\").style.height = \"130px\";\r\n\r\n            document.querySelector(\".outer-circle\").style.width = \"120px\";\r\n            document.querySelector(\".outer-circle\").style.height = \"120px\";\r\n            document.querySelector(\".outer-circle\").style.margin = \"-61px 0px 0px -61px\"\r\n\r\n       })\r\n\r\n       document.querySelector(\".dot-circle\").addEventListener(\"mouseleave\", (e)=> {\r\n\r\n        document.querySelector(\".dot-circle\").style.width = \"150px\";\r\n        document.querySelector(\".dot-circle\").style.height = \"150px\";\r\n\r\n        document.querySelector(\".outer-circle\").style.width = \"110px\";\r\n        document.querySelector(\".outer-circle\").style.height = \"110px\";\r\n        document.querySelector(\".outer-circle\").style.margin = \"-57px 0px 0px -57px\"\r\n\r\n   })\r\n\r\n    }\r\n}\r\n\r\nanimationController()\n\n//# sourceURL=webpack://my-portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/random.js":
/*!**************************!*\
  !*** ./src/js/random.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomDiv = () => {\r\n  const container = document.getElementById(\"background\");\r\n\r\n  const createDiv = () => {\r\n    let randomX = Math.floor(Math.random() * document.body.scrollWidth - 80) + 80;\r\n    let randomY = Math.floor(Math.random() * document.body.scrollHeight - 80);\r\n    let randomNum = Math.floor(Math.random() * 10);\r\n    let color;\r\n\r\n    if (randomNum % 2 == 0) {\r\n      color = \"grey\";\r\n    } else {\r\n      color = \"red\";\r\n    }\r\n\r\n    container.insertAdjacentHTML(\r\n      \"afterbegin\",\r\n      `<div class=\"box\" style='right: ${randomX}px; top: ${randomY}px;'>\r\n                                                        <div class='dot ${color}' style='transform: scale(0.${randomNum});'></div>\r\n                                                    </div>`\r\n    );\r\n  };\r\n\r\n\r\n  const moveOnMouseEnter = () => {\r\n    let dots = document.querySelectorAll(\".box\");\r\n\r\n\r\n\r\n    const moveCircleAway = (mouse, object) => {\r\n      let boundingDimensions = object.getBoundingClientRect();\r\n      let mouseX = mouse.x;\r\n      let mouseY = mouse.y;\r\n      let circleDimensions = object.children[0].getBoundingClientRect();\r\n\r\n\r\n\r\n      const statementHelperY = (\r\n        circleCoordinate,\r\n        mouseCoordinate,\r\n        position\r\n      ) => {\r\n        let step;\r\n\r\n        if (circleCoordinate > mouseCoordinate) {\r\n\r\n          step = circleCoordinate - mouseCoordinate;\r\n\r\n          if (parseInt(object.style[position].replace(\"px\", \"\")) + step * 5 < document.body.scrollHeight - 80) {\r\n\r\n            object.style[position] = `${\r\n              parseInt(object.style[position].replace(\"px\", \"\")) + step * 5 \r\n            }px`;\r\n\r\n          }\r\n        }\r\n        if (circleCoordinate < mouseCoordinate) {\r\n          step = mouseCoordinate - circleCoordinate;\r\n          if (\r\n            parseInt(object.style[position].replace(\"px\", \"\")) - step * 5  < document.body.scrollHeight - 80) {\r\n\r\n            object.style[position] = `${\r\n              parseInt(object.style[position].replace(\"px\", \"\")) - step * 5 \r\n            }px`;\r\n\r\n          }\r\n        }\r\n        // Don't do anything if the coordinates are same\r\n      };\r\n\r\n\r\n\r\n\r\n      \r\n\r\n      const statementHelperX = (\r\n        circleCoordinate,\r\n        mouseCoordinate,\r\n        position\r\n      ) => {\r\n        let step;\r\n\r\n\r\n        if (circleCoordinate > mouseCoordinate) {\r\n          step = circleCoordinate - mouseCoordinate;\r\n          \r\n          if (parseInt(object.style[position].replace(\"px\", \"\")) - step * 5  < document.body.scrollWidth - 80) {\r\n\r\n            object.style[position] = `${\r\n              parseInt(object.style[position].replace(\"px\", \"\")) - step * 5 \r\n            }px`;\r\n\r\n          }\r\n        }\r\n        if (circleCoordinate < mouseCoordinate) {\r\n          step = mouseCoordinate - circleCoordinate;\r\n          if (\r\n            parseInt(object.style[position].replace(\"px\", \"\")) + step * 5  < document.body.scrollWidth - 80) {\r\n\r\n            object.style[position] = `${\r\n              parseInt(object.style[position].replace(\"px\", \"\")) + step * 5  \r\n            }px`;\r\n\r\n          }\r\n        }\r\n        // Don't do anything if the coordinates are same\r\n      };\r\n\r\n\r\n\r\n      statementHelperX(circleDimensions.x, mouseX, \"right\");\r\n      statementHelperY(circleDimensions.y, mouseY, \"top\");\r\n    };\r\n\r\n    \r\n\r\n    dots.forEach((e) => {\r\n      e.addEventListener(\"mouseenter\", (mouse) => {\r\n        moveCircleAway(mouse, e);\r\n      });\r\n\r\n\r\n    });\r\n  };\r\n\r\n  for (let i = 0; i <= document.body.scrollHeight / 50; i++) {\r\n    createDiv();\r\n  }\r\n  \r\n  if(window.innerWidth >= 1000){\r\n    \r\n    for (let i = 0; i <= document.body.scrollHeight / 15; i++) {\r\n      createDiv();\r\n    }\r\n    moveOnMouseEnter();\r\n\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomDiv);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/js/random.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;