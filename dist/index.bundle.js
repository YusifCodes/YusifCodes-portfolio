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

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\nconst startupAnimation = () => {\n  const blcont = document.querySelector(\".black-container\");\n  const logo = document.querySelector(\".logo\");\n  const pages = document.querySelector(\".pages\");\n  const arrDown = document.querySelector(\".a-down\");\n\n  // WAIT FOR LOADER THEN START BY SLIDING OUT BLACK CONTAINER\n  blcont.classList.add(\"slideoutblcont\");\n  // SET A TIMEOUT AND START SHOWING CONTENT\n  setTimeout(() => {\n    logo.classList.remove(\"invisible\");\n    pages.classList.remove(\"invisible\");\n  }, 500);\n  setTimeout(() => {\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    arrDown.classList.remove(\"invisible\");\n  }, 1250);\n};\nconst loader = () => {\n  const loader = document.querySelector(\".loader\");\n  const loaderLogo = document.querySelector(\".loader-logo\");\n  setTimeout(() => {\n    loaderLogo.classList.add(\"invisible\");\n  }, 500);\n  setTimeout(() => {\n    loader.classList.add(\"hidden\");\n    startupAnimation();\n  }, 2000);\n};\nconst FontLoad = async (fonts = [], callback = () => {\n  loader();\n}) => {\n  await document.fonts;\n  for (const font of fonts) {\n    document.fonts.check(`80px ${font}`) ? document.fonts.load(`80px ${font}`).then(() => {\n      console.log(`Font: ${font} loaded`);\n    }) : console.log(`Font: ${font} not found`);\n  }\n  console.log(document.fonts.ready);\n  document.fonts.ready.then(() => {\n    console.log(\"Ready\");\n    callback();\n  });\n};\nconst animations = () => {\n  FontLoad([\"Clash Display\"]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animations);\n\n//# sourceURL=webpack://portfolio-2023/./src/animations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ \"./src/animations.js\");\n\n(0,_animations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://portfolio-2023/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _retype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retype */ \"./src/retype.js\");\n\nlet active = false;\nconst paginationObject = {\n  \"about\": {\n    \"up\": \"about\",\n    \"down\": \"work\"\n  },\n  \"work\": {\n    \"up\": \"about\",\n    \"down\": \"projects\"\n  },\n  \"projects\": {\n    \"up\": \"work\",\n    \"down\": \"say hello\"\n  },\n  \"say hello\": {\n    \"up\": \"projects\",\n    \"down\": \"say hello\"\n  }\n};\nconst getModule = module => {\n  switch (module) {\n    case \"about\":\n      return [`<div class=\"centered-content\">\n                    <section class=\"about-content\">\n                        <span class=\"sentence s1\">\n                            my name is <span class=\"white-box\">Yusif Malikov</span>\n                        </span>\n                        <br/>\n                        <span class=\"sentence s2\">\n                            i Am a web developer\n                        </span>\n                        <br/>\n                        <span class=\"sentence s3\">\n                            based in <span class=\"white-box\">Baku, Azerbaijan</span>\n                        </span>\n                            <br/>\n                        <span class=\"sentence s4\">\n                            I <span class=\"white-box\">de<span class=\"retype\">sign</span></span>\n                        </span>                        \n                            <br/>\n                        <span class=\"sentence s5\">\n                            applications and websites\n                        </span>\n                        </section>\n                </div>\n            `, `<div class=\"black-box\">about</div>\n            `, 1];\n    case \"work\":\n      return [`\n            <div class=\"entry-container\">\n\n                <div class=\"title\">employment history</div>\n                \n                \n                <ul class=\"entry-list\">\n                    <li class=\"entry\">\n                        <ul class=\"entry-content-list e1 work\">\n                            <li>2021 - current</li>\n                            <li>freelance web developer and student</li>\n                            <li>baku, azerbaijan</li>\n                        </ul>\n                    </li>\n                    <li class=\"entry\">\n                        <ul class=\"entry-content-list e2 work\">\n                            <li>2020 - 2021</li>\n                            <li>it help desk and web developer</li>\n                            <li>Norma systems</li>\n                        </ul>\n                    </li>\n                </ul>\n            \n            </div>`, `<div class=\"black-box\">work</div>`, 2];\n    case \"projects\":\n      return [`\n            <div class=\"entry-container\">\n\n                <div class=\"title\">project history</div>\n                \n                \n                <ul class=\"entry-list\">\n                    <li class=\"entry\">\n                        <ul class=\"entry-content-list e1 project\">\n                            <li>2022</li>\n                            <li><a target=\"_blank\" href=\"https://qlfront.herokuapp.com/\">qiymet limani</a></li>\n                            <li>azerbaijani tech store price aggregator</li>\n                        </ul>\n                    </li>\n                    <li class=\"entry\">\n                        <ul class=\"entry-content-list e2 project\">\n                            <li>2023</li>\n                            <li><a target=\"_blank\" href=\"https://eleena-coaching.com/\">eleena coaching</a></li>\n                            <li>life coaching business website</li>\n                        </ul>\n                    </li>\n                </ul>\n            \n            </div>\n        `, `<div class=\"black-box\">projects</div>`, 3];\n    case \"say hello\":\n      return [`<div class=\"contact-positioning\">\n            <div class=\"contact-hero\">\n                <span class=\"sentence s1\">got a <span class=\"white-box\">project</span> ?</span>\n                <br/>\n                <span class=\"sentence s2\">hit me up.</span>\n            </div>\n\n\n            <ul class=\"contact-list\">\n\n                <li>\n                    <p class=\"contact-title\">contact</p>\n                    <p class=\"contact-link\">malikovyusif1@gmail.com</p>\n                </li>\n\n                <li>\n                    <p class=\"contact-title\">social</p>\n                    <p class=\"contact-link\">instagram</p>\n                    <p class=\"contact-link\">github</p>\n                </li>\n\n            </ul>\n\n        </div>`, `<div class=\"black-box\">say hello</div>`, 4];\n  }\n};\nconst setArrowVisibility = () => {\n  const currentPage = document.querySelector(\".black-box\").textContent;\n  const arrUp = document.querySelector(\".a-up\");\n  const arrDown = document.querySelector(\".a-down\");\n  if (currentPage === \"about\") {\n    arrUp.classList.add(\"hidden\");\n  }\n  if (currentPage === \"say hello\") {\n    arrDown.classList.add(\"hidden\");\n  } else if (currentPage === \"work\" || currentPage === \"projects\") {\n    arrUp.classList.remove(\"hidden\");\n    arrDown.classList.remove(\"hidden\");\n  }\n};\nconst render = (module, direction) => {\n  setTimeout(() => {\n    active = true;\n  }, 2000);\n  const whiteContainer = document.querySelector(\".white-container\");\n  const mainContainer = document.querySelector(\".dynamic-content-container\");\n  const pages = document.querySelector(\".pages\");\n  mainContainer.innerHTML = \"\";\n  whiteContainer.innerHTML = \"\";\n  module = getModule(module);\n  mainContainer.insertAdjacentHTML(\"afterbegin\", module[0]);\n  whiteContainer.insertAdjacentHTML(\"afterbegin\", module[1]);\n  if (module[1].indexOf(\"about\") != 1) {\n    (0,_retype__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n  pages.textContent = `0${module[2]} / 04`;\n  const blackBox = document.querySelector(\".black-box\");\n  blackBox.classList.add(\"slideinblackbox\" + direction);\n  setArrowVisibility();\n};\nconst pageUp = () => {\n  active = false;\n  const blackBox = document.querySelector(\".black-box\");\n  const dcc = document.querySelector(\".dynamic-content-container\").querySelector(\"*\");\n  blackBox.classList.add(\"slideoutblackboxdown\");\n  dcc.classList.add(\"slide-out-to-invisible\");\n  setTimeout(() => {\n    render(paginationObject[document.querySelector(\".black-box\").textContent][\"up\"], \"up\");\n    dcc.classList.remove(\"slide-out-to-invisible\");\n  }, 1000);\n};\nconst pageDown = () => {\n  active = false;\n  const blackBox = document.querySelector(\".black-box\");\n  const dcc = document.querySelector(\".dynamic-content-container\").querySelector(\"*\");\n  blackBox.classList.add(\"slideoutblackboxup\");\n  dcc.classList.add(\"slide-out-to-invisible\");\n  setTimeout(() => {\n    dcc.classList.remove(\"slide-out-to-invisible\");\n    render(paginationObject[document.querySelector(\".black-box\").textContent][\"down\"], \"down\");\n  }, 1000);\n};\nconst manageScroll = e => {\n  if (active && window.innerWidth >= 1280) {\n    e.wheelDelta < 0 ? pageDown() : pageUp();\n    active = false;\n  }\n};\nconst reRenderListeners = () => {\n  const arrUp = document.querySelector(\".a-up\");\n  const arrDown = document.querySelector(\".a-down\");\n  if (arrUp) {\n    arrUp.addEventListener(\"click\", () => {\n      if (active) {\n        pageUp();\n      }\n    });\n  }\n  if (arrDown) {\n    arrDown.addEventListener(\"click\", () => {\n      if (active) {\n        pageDown();\n      }\n    });\n  }\n  document.addEventListener(\"wheel\", manageScroll);\n};\nconst renderController = () => {\n  // INTIAL RENDER\n  render(\"about\", \"down\");\n\n  // LISTENER FOR RERENDER\n  reRenderListeners();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderController);\n\n//# sourceURL=webpack://portfolio-2023/./src/render.js?");

/***/ }),

/***/ "./src/retype.js":
/*!***********************!*\
  !*** ./src/retype.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeRetypingAnimation = () => {\n  const wordContainer = [\"sign\", \"velop\", \"ploy\"];\n  const currentWord = document.querySelector(\".retype\");\n  let nextIndex = 1;\n  let i = 0;\n  const popLetter = () => {\n    if (currentWord.textContent === \"\") {\n      pushLetter(nextIndex, i);\n      return;\n    }\n    currentWord.textContent = currentWord.textContent.slice(0, -1);\n    setTimeout(() => {\n      popLetter();\n    }, Math.random() * (150 - 100) + 100);\n  };\n  const pushLetter = () => {\n    if (i > wordContainer[nextIndex].length || i > 10) {\n      nextIndex = nextIndex != 2 ? nextIndex += 1 : 0;\n      i = 0;\n      return;\n    }\n    currentWord.textContent = wordContainer[nextIndex].slice(0, i);\n    i++;\n    setTimeout(() => {\n      pushLetter();\n    }, Math.random() * (225 - 175) + 175);\n  };\n  if (currentWord) {\n    popLetter();\n  }\n  setInterval(() => {\n    if (currentWord) {\n      popLetter();\n    }\n  }, 3000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeRetypingAnimation);\n\n//# sourceURL=webpack://portfolio-2023/./src/retype.js?");

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