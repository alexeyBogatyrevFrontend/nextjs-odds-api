"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/news/[id]/page",{

/***/ "(app-pages-browser)/./app/news/TopNewsItem/TopNewsItem.tsx":
/*!**********************************************!*\
  !*** ./app/news/TopNewsItem/TopNewsItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopNewsItem.module.css */ \"(app-pages-browser)/./app/news/TopNewsItem/TopNewsItem.module.css\");\n/* harmony import */ var _TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_utils_arrayBufferToBase64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/arrayBufferToBase64 */ \"(app-pages-browser)/./app/utils/arrayBufferToBase64.ts\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst TopNewsItem = (param)=>{\n    let { item } = param;\n    const formattedDate = (item === null || item === void 0 ? void 0 : item.date) ? dayjs__WEBPACK_IMPORTED_MODULE_5___default()(item === null || item === void 0 ? void 0 : item.date).format(\"MMMM DD, YYYY HH:mm\") : \"Дата не была установлена\";\n    // @ts-expect-error I use here Buffer not file\n    const base64Encoded = item.image ? (0,_app_utils_arrayBufferToBase64__WEBPACK_IMPORTED_MODULE_4__.arrayBufferToBase64)(item.image.data) : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/news/\".concat(item._id),\n        className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \"data:image/jpeg;base64,\".concat(base64Encoded),\n                    width: 73,\n                    height: 73,\n                    alt: item.title\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().block__bottom),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.h1\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: formattedDate\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().top),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \"/top-fire.svg\",\n                    width: 24,\n                    height: 24,\n                    alt: \"fire\"\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/TopNewsItem/TopNewsItem.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c = TopNewsItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNewsItem);\nvar _c;\n$RefreshReg$(_c, \"TopNewsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uZXdzL1RvcE5ld3NJdGVtL1RvcE5ld3NJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVZO0FBQ2pCO0FBQ0U7QUFFdUM7QUFDNUM7QUFNekIsTUFBTU0sY0FBb0M7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDbEQsTUFBTUMsZ0JBQWdCRCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1FLElBQUksSUFDN0JKLDRDQUFLQSxDQUFDRSxpQkFBQUEsMkJBQUFBLEtBQU1FLElBQUksRUFBRUMsTUFBTSxDQUFDLHlCQUN6QjtJQUNILDhDQUE4QztJQUM5QyxNQUFNQyxnQkFBZ0JKLEtBQUtLLEtBQUssR0FBR1IsbUZBQW1CQSxDQUFDRyxLQUFLSyxLQUFLLENBQUNDLElBQUksSUFBSTtJQUUxRSxxQkFDQyw4REFBQ1gsa0RBQUlBO1FBQUNZLE1BQU0sU0FBa0IsT0FBVFAsS0FBS1EsR0FBRztRQUFJQyxXQUFXZixzRUFBWTs7MEJBQ3ZELDhEQUFDaUI7Z0JBQUlGLFdBQVdmLG9FQUFVOzBCQUN6Qiw0RUFBQ0UsbURBQUtBO29CQUNMaUIsS0FBSywwQkFBd0MsT0FBZFQ7b0JBQy9CVSxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLaEIsS0FBS2lCLEtBQUs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ047Z0JBQUlGLFdBQVdmLDhFQUFvQjs7a0NBQ25DLDhEQUFDeUI7a0NBQUluQixLQUFLb0IsRUFBRTs7Ozs7O2tDQUNaLDhEQUFDQztrQ0FBTXBCOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNVO2dCQUFJRixXQUFXZixvRUFBVTswQkFDekIsNEVBQUNFLG1EQUFLQTtvQkFBQ2lCLEtBQUk7b0JBQWdCQyxPQUFPO29CQUFJQyxRQUFRO29CQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRDtLQTVCTWpCO0FBOEJOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9uZXdzL1RvcE5ld3NJdGVtL1RvcE5ld3NJdGVtLnRzeD81MDBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9wTmV3c0l0ZW0ubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbmV3c1R5cGUgfSBmcm9tICdAL2FwcC90eXBlcydcbmltcG9ydCB7IGFycmF5QnVmZmVyVG9CYXNlNjQgfSBmcm9tICdAL2FwcC91dGlscy9hcnJheUJ1ZmZlclRvQmFzZTY0J1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuXG50eXBlIFRvcE5ld3NJdGVtUHJvcHMgPSB7XG5cdGl0ZW06IG5ld3NUeXBlXG59XG5cbmNvbnN0IFRvcE5ld3NJdGVtOiBGQzxUb3BOZXdzSXRlbVByb3BzPiA9ICh7IGl0ZW0gfSkgPT4ge1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlID0gaXRlbT8uZGF0ZVxuXHRcdD8gZGF5anMoaXRlbT8uZGF0ZSkuZm9ybWF0KCdNTU1NIERELCBZWVlZIEhIOm1tJylcblx0XHQ6ICfQlNCw0YLQsCDQvdC1INCx0YvQu9CwINGD0YHRgtCw0L3QvtCy0LvQtdC90LAnXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgSSB1c2UgaGVyZSBCdWZmZXIgbm90IGZpbGVcblx0Y29uc3QgYmFzZTY0RW5jb2RlZCA9IGl0ZW0uaW1hZ2UgPyBhcnJheUJ1ZmZlclRvQmFzZTY0KGl0ZW0uaW1hZ2UuZGF0YSkgOiAnJ1xuXG5cdHJldHVybiAoXG5cdFx0PExpbmsgaHJlZj17YC9uZXdzLyR7aXRlbS5faWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e2BkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7YmFzZTY0RW5jb2RlZH1gfVxuXHRcdFx0XHRcdHdpZHRoPXs3M31cblx0XHRcdFx0XHRoZWlnaHQ9ezczfVxuXHRcdFx0XHRcdGFsdD17aXRlbS50aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrX19ib3R0b219PlxuXHRcdFx0XHQ8aDM+e2l0ZW0uaDF9PC9oMz5cblx0XHRcdFx0PHNwYW4+e2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cblx0XHRcdFx0PEltYWdlIHNyYz0nL3RvcC1maXJlLnN2Zycgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9J2ZpcmUnIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wTmV3c0l0ZW1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkxpbmsiLCJJbWFnZSIsImFycmF5QnVmZmVyVG9CYXNlNjQiLCJkYXlqcyIsIlRvcE5ld3NJdGVtIiwiaXRlbSIsImZvcm1hdHRlZERhdGUiLCJkYXRlIiwiZm9ybWF0IiwiYmFzZTY0RW5jb2RlZCIsImltYWdlIiwiZGF0YSIsImhyZWYiLCJfaWQiLCJjbGFzc05hbWUiLCJibG9jayIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidGl0bGUiLCJibG9ja19fYm90dG9tIiwiaDMiLCJoMSIsInNwYW4iLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/news/TopNewsItem/TopNewsItem.tsx\n"));

/***/ })

});