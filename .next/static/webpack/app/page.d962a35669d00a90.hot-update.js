"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/layouts/Layout.tsx":
/*!********************************!*\
  !*** ./app/layouts/Layout.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var _news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/TopNewsList/TopNewsList */ \"(app-pages-browser)/./app/news/TopNewsList/TopNewsList.tsx\");\n/* harmony import */ var _news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../news/NewsList/NewsList */ \"(app-pages-browser)/./app/news/NewsList/NewsList.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./app/components/Footer/Footer.tsx\");\n/* harmony import */ var _odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../odds/sportsCategory/SportsCategoryList/SportsCategoryList */ \"(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryList/SportsCategoryList.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { sport } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.sport);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__.fetchNews)());\n    }, [\n        dispatch\n    ]);\n    const setSport = ()=>{\n        dispatch(setCategory(sport));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main__wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        setSport: setSport\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    children,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Layout, \"EHm8vUXpzdeTHXnKpuefcp8qHlA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVpRTtBQUN4QjtBQUVnQjtBQUNUO0FBQ0E7QUFDNkM7QUFDdkM7QUFDUztBQWdCL0QsTUFBTVUsU0FBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDLENBQUNLLFFBQXNCQSxNQUFNRCxLQUFLO0lBQ2hFLE1BQU1FLFdBQVdQLHdEQUFXQTtJQUU1Qk4sZ0RBQVNBLENBQUM7UUFDVGEsU0FBU0wsZ0VBQVNBO0lBQ25CLEdBQUc7UUFBQ0s7S0FBUztJQUViLE1BQU1DLFdBQVc7UUFDaEJELFNBQVNFLFlBQVlKO0lBQ3RCO0lBQ0EscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDaEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ2lCO2dCQUFLRCxXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDZCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNaLGtHQUFrQkE7d0NBQUNTLFVBQVVBOzs7Ozs7a0RBQzlCLDhEQUFDWixxRUFBV0E7Ozs7Ozs7Ozs7OzBDQUViLDhEQUFDYztnQ0FBSUMsV0FBVTs7b0NBQ2JQO2tEQUNELDhEQUFDUCwrREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLYiw4REFBQ0MsaUVBQU1BOzs7Ozs7Ozs7OztBQUdWO0dBL0JNSzs7UUFDYUYsb0RBQVdBO1FBQ1pELG9EQUFXQTs7O0tBRnZCRztBQWlDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0cy9MYXlvdXQudHN4PzAzNDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5pbXBvcnQgVG9wTmV3c0xpc3QgZnJvbSAnLi4vbmV3cy9Ub3BOZXdzTGlzdC9Ub3BOZXdzTGlzdCdcbmltcG9ydCBOZXdzTGlzdCBmcm9tICcuLi9uZXdzL05ld3NMaXN0L05ld3NMaXN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXG5pbXBvcnQgU3BvcnRzQ2F0ZWdvcnlMaXN0IGZyb20gJy4uL29kZHMvc3BvcnRzQ2F0ZWdvcnkvU3BvcnRzQ2F0ZWdvcnlMaXN0L1Nwb3J0c0NhdGVnb3J5TGlzdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIGZldGNoTmV3cyB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5pbXBvcnQgeyBzcG9ydFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9IHtcblx0a2V5OiBzdHJpbmdcblx0Z3JvdXA6IHN0cmluZ1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0YWN0aXZlOiBib29sZWFuXG5cdGhhc19vdXRyaWdodHM6IGJvb2xlYW5cbn1cblxudHlwZSBMYXlvdXRUeXBlID0ge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IExheW91dDogRkM8TGF5b3V0VHlwZT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHsgc3BvcnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogc3BvcnRTdGF0ZSkgPT4gc3RhdGUuc3BvcnQpXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRpc3BhdGNoKGZldGNoTmV3cygpKVxuXHR9LCBbZGlzcGF0Y2hdKVxuXG5cdGNvbnN0IHNldFNwb3J0ID0gKCkgPT4ge1xuXHRcdGRpc3BhdGNoKHNldENhdGVnb3J5KHNwb3J0KSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluV3JhcHBlcic+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9J21haW4nPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbl9fd3JhcHBlcic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGVmdCc+XG5cdFx0XHRcdFx0XHRcdDxTcG9ydHNDYXRlZ29yeUxpc3Qgc2V0U3BvcnQ9e3NldFNwb3J0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8VG9wTmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8TmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWRlciIsIlRvcE5ld3NMaXN0IiwiTmV3c0xpc3QiLCJGb290ZXIiLCJTcG9ydHNDYXRlZ29yeUxpc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hOZXdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzcG9ydCIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRTcG9ydCIsInNldENhdGVnb3J5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layouts/Layout.tsx\n"));

/***/ })

});