"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/all-news/page",{

/***/ "(app-pages-browser)/./app/topnews/TopNewsItem/TopNewsItem.tsx":
/*!*************************************************!*\
  !*** ./app/topnews/TopNewsItem/TopNewsItem.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopNewsItem.module.css */ \"(app-pages-browser)/./app/topnews/TopNewsItem/TopNewsItem.module.css\");\n/* harmony import */ var _TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_utils_arrayBufferToBase64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/arrayBufferToBase64 */ \"(app-pages-browser)/./app/utils/arrayBufferToBase64.ts\");\n\n\n\n\n\n\nconst TopNewsItem = (param)=>{\n    let { item } = param;\n    // @ts-expect-error I use here Buffer not file\n    const base64Encoded = item.image ? (0,_app_utils_arrayBufferToBase64__WEBPACK_IMPORTED_MODULE_4__.arrayBufferToBase64)(item.image.data) : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/all-news\",\n        className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"data:image/jpeg;base64,\".concat(base64Encoded),\n                        width: 73,\n                        height: 73,\n                        alt: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopNewsItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().block__bottom),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/topnews/TopNewsItem/TopNewsItem.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = TopNewsItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNewsItem);\nvar _c;\n$RefreshReg$(_c, \"TopNewsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90b3BuZXdzL1RvcE5ld3NJdGVtL1RvcE5ld3NJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFFWTtBQUNqQjtBQUNFO0FBRXVDO0FBTXJFLE1BQU1LLGNBQW9DO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ2xELDhDQUE4QztJQUM5QyxNQUFNQyxnQkFBZ0JELEtBQUtFLEtBQUssR0FBR0osbUZBQW1CQSxDQUFDRSxLQUFLRSxLQUFLLENBQUNDLElBQUksSUFBSTtJQUUxRSxxQkFDQyw4REFBQ1Asa0RBQUlBO1FBQUNRLE1BQUs7UUFBWUMsV0FBV1Ysc0VBQVk7OzBCQUM3Qyw4REFBQ1k7Z0JBQUlGLFdBQVdWLG9FQUFVOztvQkFDeEI7a0NBQ0QsOERBQUNFLG1EQUFLQTt3QkFDTFksS0FBSywwQkFBd0MsT0FBZFI7d0JBQy9CUyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFLWixLQUFLYSxLQUFLOzs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDTjtnQkFBSUYsV0FBV1YsOEVBQW9COztrQ0FDbkMsOERBQUNvQjtrQ0FBSWYsS0FBS2EsS0FBSzs7Ozs7O2tDQUNmLDhEQUFDRztrQ0FBTWhCLEtBQUtpQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0F0Qk1sQjtBQXdCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdG9wbmV3cy9Ub3BOZXdzSXRlbS9Ub3BOZXdzSXRlbS50c3g/MmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RvcE5ld3NJdGVtLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IG5ld3NUeXBlIH0gZnJvbSAnQC9hcHAvdHlwZXMnXG5pbXBvcnQgeyBhcnJheUJ1ZmZlclRvQmFzZTY0IH0gZnJvbSAnQC9hcHAvdXRpbHMvYXJyYXlCdWZmZXJUb0Jhc2U2NCdcblxudHlwZSBUb3BOZXdzSXRlbVByb3BzID0ge1xuXHRpdGVtOiBuZXdzVHlwZVxufVxuXG5jb25zdCBUb3BOZXdzSXRlbTogRkM8VG9wTmV3c0l0ZW1Qcm9wcz4gPSAoeyBpdGVtIH0pID0+IHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBJIHVzZSBoZXJlIEJ1ZmZlciBub3QgZmlsZVxuXHRjb25zdCBiYXNlNjRFbmNvZGVkID0gaXRlbS5pbWFnZSA/IGFycmF5QnVmZmVyVG9CYXNlNjQoaXRlbS5pbWFnZS5kYXRhKSA6ICcnXG5cblx0cmV0dXJuIChcblx0XHQ8TGluayBocmVmPScvYWxsLW5ld3MnIGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfT5cblx0XHRcdFx0eycgJ31cblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0c3JjPXtgZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwke2Jhc2U2NEVuY29kZWR9YH1cblx0XHRcdFx0XHR3aWR0aD17NzN9XG5cdFx0XHRcdFx0aGVpZ2h0PXs3M31cblx0XHRcdFx0XHRhbHQ9e2l0ZW0udGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja19fYm90dG9tfT5cblx0XHRcdFx0PGgzPntpdGVtLnRpdGxlfTwvaDM+XG5cdFx0XHRcdDxzcGFuPntpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BOZXdzSXRlbVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTGluayIsIkltYWdlIiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsIlRvcE5ld3NJdGVtIiwiaXRlbSIsImJhc2U2NEVuY29kZWQiLCJpbWFnZSIsImRhdGEiLCJocmVmIiwiY2xhc3NOYW1lIiwiYmxvY2siLCJkaXYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInRpdGxlIiwiYmxvY2tfX2JvdHRvbSIsImgzIiwic3BhbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/topnews/TopNewsItem/TopNewsItem.tsx\n"));

/***/ })

});