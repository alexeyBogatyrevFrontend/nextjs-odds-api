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

/***/ "(app-pages-browser)/./app/all-news/page.tsx":
/*!*******************************!*\
  !*** ./app/all-news/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _news_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/NewsItem/NewsItem */ \"(app-pages-browser)/./app/news/NewsItem/NewsItem.tsx\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var _all_news_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-news.module.css */ \"(app-pages-browser)/./app/all-news/all-news.module.css\");\n/* harmony import */ var _all_news_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_all_news_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const { newsList, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.news);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_all_news_module_css__WEBPACK_IMPORTED_MODULE_6___default().page),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Все новости\"\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_all_news_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n                    children: newsList.map((news)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            item: news\n                        }, news._id, false, {\n                            fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/page.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n};\n_s(page, \"xF/i3R6qk592cUMvLz1vxFyhEj0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbGwtbmV3cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0M7QUFDRjtBQUNnQjtBQUVOO0FBQ2U7QUFFckI7QUFFMUMsTUFBTVEsT0FBTzs7SUFDWixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Asd0RBQVdBLENBQzlDLENBQUNRLFFBQXFCQSxNQUFNQyxJQUFJO0lBR2pDLE1BQU1DLFdBQVdYLHdEQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUM7UUFDVCxJQUFJUyxXQUFXLFFBQVE7WUFDdEJJLFNBQVNSLGdFQUFTQTtRQUNuQjtJQUNELEdBQUc7UUFBQ0k7UUFBUUk7S0FBUztJQUVyQixxQkFDQyw4REFBQ1osdURBQU1BO2tCQUNOLDRFQUFDYTtZQUFJQyxXQUFXVCxrRUFBVzs7OEJBQzFCLDhEQUFDVTs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDRjtvQkFBSUMsV0FBV1QscUVBQWM7OEJBQzVCRSxTQUFTVSxHQUFHLENBQUNOLENBQUFBLHFCQUNiLDhEQUFDUiwrREFBUUE7NEJBQUNlLE1BQU1QOzJCQUFXQSxLQUFLUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0F6Qk1iOztRQUMrQkosb0RBQVdBO1FBSTlCRCxvREFBV0E7OztBQXNCN0IsK0RBQWVLLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FsbC1uZXdzL3BhZ2UudHN4PzFmMDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IE5ld3NJdGVtIGZyb20gJy4uL25ld3MvTmV3c0l0ZW0vTmV3c0l0ZW0nXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgZmV0Y2hOZXdzIH0gZnJvbSAnQC9saWIvc2xpY2VzL25ld3NTbGljZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FsbC1uZXdzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHsgbmV3c0xpc3QsIHN0YXR1cywgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKFxuXHRcdChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzXG5cdClcblxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcblx0XHRcdGRpc3BhdGNoKGZldGNoTmV3cygpKVxuXHRcdH1cblx0fSwgW3N0YXR1cywgZGlzcGF0Y2hdKVxuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG5cdFx0XHRcdDxoMj7QktGB0LUg0L3QvtCy0L7RgdGC0Lg8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuXHRcdFx0XHRcdHtuZXdzTGlzdC5tYXAobmV3cyA9PiAoXG5cdFx0XHRcdFx0XHQ8TmV3c0l0ZW0gaXRlbT17bmV3c30ga2V5PXtuZXdzLl9pZH0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTmV3c0l0ZW0iLCJmZXRjaE5ld3MiLCJzdHlsZXMiLCJwYWdlIiwibmV3c0xpc3QiLCJzdGF0dXMiLCJlcnJvciIsInN0YXRlIiwibmV3cyIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ3cmFwcGVyIiwibWFwIiwiaXRlbSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/all-news/page.tsx\n"));

/***/ })

});