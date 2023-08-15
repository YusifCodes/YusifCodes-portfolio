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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\nconst startupAnimation = () => {\r\n    const blcont = document.querySelector(\".black-container\")\r\n    const logo = document.querySelector(\".logo\")\r\n    const pages = document.querySelector(\".pages\")\r\n    const arrDown = document.querySelector(\".a-down\")\r\n\r\n    // WAIT FOR LOADER THEN START BY SLIDING OUT BLACK CONTAINER\r\n    blcont.classList.add(\"slideoutblcont\")\r\n    // SET A TIMEOUT AND START SHOWING CONTENT\r\n    setTimeout(() => {\r\n        logo.classList.remove(\"invisible\")\r\n        pages.classList.remove(\"invisible\")\r\n    },500)\r\n    setTimeout(()=>{\r\n        ;(0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        arrDown.classList.remove(\"invisible\")\r\n    },1250)\r\n\r\n}\r\n\r\nconst loader = () => {\r\n    const loader = document.querySelector(\".loader\")\r\n    const loaderLogo = document.querySelector(\".loader-logo\")\r\n    setTimeout(()=>{\r\n        loaderLogo.classList.add(\"invisible\")\r\n    },500)\r\n    setTimeout(()=>{\r\n        loader.classList.add(\"hidden\")\r\n        startupAnimation()\r\n    }, 2000)\r\n    \r\n}\r\n\r\nconst FontLoad = async ( fonts=[] , callback=()=>{loader()} ) => {\r\n    await document.fonts;\r\n    for (const font of fonts) {\r\n      document.fonts.check(`80px ${font}`)\r\n      ? document.fonts.load(`80px ${font}`).then( () => { console.log( `Font: ${font} loaded` ) } )\r\n      : console.log( `Font: ${font} not found` )\r\n    }\r\n    console.log(document.fonts.ready)\r\n    document.fonts.ready.then(() => { console.log(\"Ready\"); callback() })\r\n}\r\n\r\n\r\nconst animations = () => {\r\n    FontLoad([\"Clash Display\"])\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animations);\n\n//# sourceURL=webpack://portfolio-2023/./src/animations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ \"./src/animations.js\");\n\r\n\r\n(0,_animations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://portfolio-2023/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _retype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retype */ \"./src/retype.js\");\n\r\n\r\nlet active = false;\r\nconst paginationObject = {\r\n  about: { up: \"about\", down: \"work\" },\r\n  work: { up: \"about\", down: \"projects\" },\r\n  projects: { up: \"work\", down: \"say hello\" },\r\n  \"say hello\": { up: \"projects\", down: \"say hello\" },\r\n};\r\n\r\nconst getModule = (module) => {\r\n  switch (module) {\r\n    case \"about\":\r\n      return [\r\n        `<div class=\"centered-content\">\r\n                    <section class=\"about-content\">\r\n                        <span class=\"sentence s1\">\r\n                            my name is <span class=\"white-box\">Yusif Malikov</span>\r\n                        </span>\r\n                        <br/>\r\n                        <span class=\"sentence s2\">\r\n                            i Am a web developer\r\n                        </span>\r\n                        <br/>\r\n                        <span class=\"sentence s3\">\r\n                            based in <span class=\"white-box\">Baku, Azerbaijan</span>\r\n                        </span>\r\n                            <br/>\r\n                        <span class=\"sentence s4\">\r\n                            I <span class=\"white-box\">de<span class=\"retype\">sign</span></span>\r\n                        </span>                        \r\n                            <br/>\r\n                        <span class=\"sentence s5\">\r\n                            applications and websites\r\n                        </span>\r\n                        </section>\r\n                </div>\r\n            `,\r\n        `<div class=\"black-box\">about</div>\r\n            `,\r\n        1,\r\n      ];\r\n    case \"work\":\r\n      return [\r\n        `\r\n            <div class=\"entry-container\">\r\n\r\n                <div class=\"title\">employment history</div>\r\n                \r\n                \r\n                <ul class=\"entry-list\">\r\n                    <li class=\"entry\">\r\n                        <ul class=\"entry-content-list e1 work\">\r\n                            <li>2023 - 2023</li>\r\n                            <li>Software engineering intern</li>\r\n                            <li>Tech for good inc.</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"entry\">\r\n                        <ul class=\"entry-content-list e2 work\">\r\n                            <li>2021 - current</li>\r\n                            <li>freelance web developer and student</li>\r\n                            <li>baku, azerbaijan</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"entry\">\r\n                        <ul class=\"entry-content-list e3 work\">\r\n                            <li>2020 - 2021</li>\r\n                            <li>it help desk and web developer</li>\r\n                            <li>Norma systems</li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            \r\n            </div>`,\r\n        `<div class=\"black-box\">work</div>`,\r\n        2,\r\n      ];\r\n    case \"projects\":\r\n      return [\r\n        `\r\n            <div class=\"entry-container\">\r\n\r\n                <div class=\"title\">project history</div>\r\n                \r\n                \r\n                <ul class=\"entry-list\">\r\n                    <li class=\"entry\">\r\n                    <ul class=\"entry-content-list e1 project\">\r\n                        <li>2022</li>\r\n                        <li>qiymet limani</li>\r\n                        <li>azerbaijani tech store price aggregator</li>\r\n                        <li><a class=\"a-button\" target=\"_blank\" href=\"https://qlfront.herokuapp.com/\">visit project</a></li>\r\n                    </ul>\r\n                    </li>\r\n                    <li class=\"entry\">\r\n                    <ul class=\"entry-content-list e2 project\">\r\n                        <li>2023</li>\r\n                        <li>eleena coaching</li>\r\n                        <li>life coaching business website</li>\r\n                        <li><a class=\"a-button\" target=\"_blank\" href=\"https://eleena-coaching.com/\">visit project</a></li>\r\n                    </ul>\r\n                    </li>\r\n                </ul>\r\n            \r\n            </div>\r\n        `,\r\n        `<div class=\"black-box\">projects</div>`,\r\n        3,\r\n      ];\r\n    case \"say hello\":\r\n      return [\r\n        `<div class=\"contact-positioning\">\r\n            <div class=\"contact-hero\">\r\n                <span class=\"sentence s1\">got a <span class=\"white-box\">project</span> ?</span>\r\n                <br/>\r\n                <span class=\"sentence s2\">hit me up.</span>\r\n            </div>\r\n\r\n\r\n            <ul class=\"contact-list\">\r\n\r\n                <li>\r\n                    <p class=\"contact-title\">contact</p>\r\n                    <p class=\"contact-link\">malikovyusif1@gmail.com</p>\r\n                </li>\r\n\r\n                <li>\r\n                    <p class=\"contact-title\">social</p>\r\n                    <p target=\"_blank\" class=\"contact-link\"><a href=\"https://www.linkedin.com/in/yusif-malikov-b99647272/\">linkedin</a></p>\r\n                    <p class=\"contact-link\"><a target=\"_blank\" href=\"https://www.instagram.com/malikov.bandit/\">instagram</a></p>\r\n                    <p target=\"_blank\" class=\"contact-link\"><a href=\"https://github.com/YusifCodes\">github</a></p>\r\n                </li>\r\n\r\n            </ul>\r\n\r\n        </div>`,\r\n        `<div class=\"black-box\">say hello</div>`,\r\n        4,\r\n      ];\r\n  }\r\n};\r\n\r\nconst setArrowVisibility = () => {\r\n  const currentPage = document.querySelector(\".black-box\").textContent;\r\n  const arrUp = document.querySelector(\".a-up\");\r\n  const arrDown = document.querySelector(\".a-down\");\r\n  if (currentPage === \"about\") {\r\n    arrUp.classList.add(\"hidden\");\r\n  }\r\n  if (currentPage === \"say hello\") {\r\n    arrDown.classList.add(\"hidden\");\r\n  } else if (currentPage === \"work\" || currentPage === \"projects\") {\r\n    arrUp.classList.remove(\"hidden\");\r\n    arrDown.classList.remove(\"hidden\");\r\n  }\r\n};\r\n\r\nconst render = (module, direction) => {\r\n  setTimeout(() => {\r\n    active = true;\r\n  }, 2000);\r\n\r\n  const whiteContainer = document.querySelector(\".white-container\");\r\n  const mainContainer = document.querySelector(\".dynamic-content-container\");\r\n  const pages = document.querySelector(\".pages\");\r\n\r\n  mainContainer.innerHTML = \"\";\r\n  whiteContainer.innerHTML = \"\";\r\n\r\n  module = getModule(module);\r\n\r\n  mainContainer.insertAdjacentHTML(\"afterbegin\", module[0]);\r\n  whiteContainer.insertAdjacentHTML(\"afterbegin\", module[1]);\r\n  if (module[1].indexOf(\"about\") != 1) {\r\n    (0,_retype__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n  pages.textContent = `0${module[2]} / 04`;\r\n\r\n  const blackBox = document.querySelector(\".black-box\");\r\n  blackBox.classList.add(\"slideinblackbox\" + direction);\r\n\r\n  setArrowVisibility();\r\n};\r\n\r\nconst pageUp = () => {\r\n  active = false;\r\n\r\n  const blackBox = document.querySelector(\".black-box\");\r\n  const dcc = document\r\n    .querySelector(\".dynamic-content-container\")\r\n    .querySelector(\"*\");\r\n\r\n  blackBox.classList.add(\"slideoutblackboxdown\");\r\n  dcc.classList.add(\"slide-out-to-invisible\");\r\n\r\n  setTimeout(() => {\r\n    render(\r\n      paginationObject[document.querySelector(\".black-box\").textContent][\"up\"],\r\n      \"up\"\r\n    );\r\n    dcc.classList.remove(\"slide-out-to-invisible\");\r\n  }, 1000);\r\n};\r\n\r\nconst pageDown = () => {\r\n  active = false;\r\n\r\n  const blackBox = document.querySelector(\".black-box\");\r\n  const dcc = document\r\n    .querySelector(\".dynamic-content-container\")\r\n    .querySelector(\"*\");\r\n\r\n  blackBox.classList.add(\"slideoutblackboxup\");\r\n  dcc.classList.add(\"slide-out-to-invisible\");\r\n\r\n  setTimeout(() => {\r\n    dcc.classList.remove(\"slide-out-to-invisible\");\r\n    render(\r\n      paginationObject[document.querySelector(\".black-box\").textContent][\r\n        \"down\"\r\n      ],\r\n      \"down\"\r\n    );\r\n  }, 1000);\r\n};\r\n\r\nconst manageScroll = (e) => {\r\n  if (active && window.innerWidth >= 1280) {\r\n    e.wheelDelta < 0 ? pageDown() : pageUp();\r\n\r\n    active = false;\r\n  }\r\n};\r\n\r\nconst reRenderListeners = () => {\r\n  const arrUp = document.querySelector(\".a-up\");\r\n  const arrDown = document.querySelector(\".a-down\");\r\n\r\n  if (arrUp) {\r\n    arrUp.addEventListener(\"click\", () => {\r\n      if (active) {\r\n        pageUp();\r\n      }\r\n    });\r\n  }\r\n  if (arrDown) {\r\n    arrDown.addEventListener(\"click\", () => {\r\n      if (active) {\r\n        pageDown();\r\n      }\r\n    });\r\n  }\r\n\r\n  document.addEventListener(\"wheel\", manageScroll);\r\n};\r\n\r\nconst renderController = () => {\r\n  // INTIAL RENDER\r\n  render(\"about\", \"down\");\r\n\r\n  // LISTENER FOR RERENDER\r\n  reRenderListeners();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderController);\r\n\n\n//# sourceURL=webpack://portfolio-2023/./src/render.js?");

/***/ }),

/***/ "./src/retype.js":
/*!***********************!*\
  !*** ./src/retype.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeRetypingAnimation = () => {\r\n\r\n    const wordContainer = [\"sign\", \"velop\", \"ploy\"]\r\n    const currentWord = document.querySelector(\".retype\")\r\n    let nextIndex = 1\r\n    let i = 0\r\n\r\n    const popLetter = () => {\r\n\r\n        if(currentWord.textContent === \"\"){\r\n            pushLetter(nextIndex, i)\r\n            return\r\n        }\r\n\r\n        currentWord.textContent = currentWord.textContent.slice(0, -1)\r\n        setTimeout(()=>{popLetter()}, Math.random() * (150 - 100) + 100)\r\n\r\n    }\r\n\r\n    const pushLetter = () => {\r\n        \r\n        if(i > wordContainer[nextIndex].length || i > 10){\r\n                \r\n            nextIndex = nextIndex != 2 ? nextIndex += 1 : 0\r\n            i = 0  \r\n\r\n            return \r\n        }\r\n        \r\n        currentWord.textContent = wordContainer[nextIndex].slice(0,i)\r\n        i++\r\n        setTimeout(()=>{\r\n            pushLetter()\r\n        }, Math.random() * (225 - 175) + 175)\r\n        \r\n    }\r\n\r\n    if(currentWord){\r\n        popLetter()\r\n    }\r\n\r\n    setInterval(()=>{\r\n        if(currentWord){\r\n            popLetter()\r\n        }\r\n    }, 3000)\r\n    \r\n    \r\n\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeRetypingAnimation);\n\n//# sourceURL=webpack://portfolio-2023/./src/retype.js?");

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