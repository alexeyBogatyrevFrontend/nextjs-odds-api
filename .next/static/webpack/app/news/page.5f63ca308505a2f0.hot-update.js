"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/news/page",{

/***/ "(app-pages-browser)/./app/layouts/Layout.tsx":
/*!********************************!*\
  !*** ./app/layouts/Layout.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var _news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/TopNewsList/TopNewsList */ \"(app-pages-browser)/./app/news/TopNewsList/TopNewsList.tsx\");\n/* harmony import */ var _news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../news/NewsList/NewsList */ \"(app-pages-browser)/./app/news/NewsList/NewsList.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./app/components/Footer/Footer.tsx\");\n/* harmony import */ var _odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../odds/sportsCategory/SportsCategoryList/SportsCategoryList */ \"(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryList/SportsCategoryList.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.news);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    console.log(123);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"123\");\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main__wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    children,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Layout, \"UKDS4wT7E0gpvnDKqGO+WlWavdM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVpRTtBQUN4QjtBQUVnQjtBQUNUO0FBQ0E7QUFDNkM7QUFDdkM7QUFFUztBQWUvRCxNQUFNVSxTQUF5QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDM0MsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osd0RBQVdBLENBQUMsQ0FBQ0ssUUFBcUJBLE1BQU1DLElBQUk7SUFDL0QsTUFBTUMsV0FBV1Isd0RBQVdBO0lBQzVCUyxRQUFRQyxHQUFHLENBQUM7SUFFWmhCLGdEQUFTQSxDQUFDO1FBQ1RlLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUlMLFdBQVcsUUFBUTtZQUN0QkcsU0FBU04sZ0VBQVNBO1FBQ25CO0lBQ0QsR0FBRztRQUFDRztRQUFRRztLQUFTO0lBRXJCLHFCQUNDLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ2pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNrQjtnQkFBS0QsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2QsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDYixrR0FBa0JBOzs7OztrREFDbkIsOERBQUNILHFFQUFXQTs7Ozs7Ozs7Ozs7MENBRWIsOERBQUNlO2dDQUFJQyxXQUFVOztvQ0FDYlI7a0RBQ0QsOERBQUNQLCtEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDQyxpRUFBTUE7Ozs7Ozs7Ozs7O0FBR1Y7R0FqQ01LOztRQUNjRixvREFBV0E7UUFDYkQsb0RBQVdBOzs7S0FGdkJHO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3g/MDM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCBUb3BOZXdzTGlzdCBmcm9tICcuLi9uZXdzL1RvcE5ld3NMaXN0L1RvcE5ld3NMaXN0J1xuaW1wb3J0IE5ld3NMaXN0IGZyb20gJy4uL25ld3MvTmV3c0xpc3QvTmV3c0xpc3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBTcG9ydHNDYXRlZ29yeUxpc3QgZnJvbSAnLi4vb2Rkcy9zcG9ydHNDYXRlZ29yeS9TcG9ydHNDYXRlZ29yeUxpc3QvU3BvcnRzQ2F0ZWdvcnlMaXN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBmZXRjaE5ld3MgfSBmcm9tICdAL2xpYi9zbGljZXMvbmV3c1NsaWNlJ1xuXG5leHBvcnQgdHlwZSBFdmVudFR5cGUgPSB7XG5cdGtleTogc3RyaW5nXG5cdGdyb3VwOiBzdHJpbmdcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGFjdGl2ZTogYm9vbGVhblxuXHRoYXNfb3V0cmlnaHRzOiBib29sZWFuXG59XG5cbnR5cGUgTGF5b3V0VHlwZSA9IHtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBMYXlvdXQ6IEZDPExheW91dFR5cGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm5ld3MpXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcblx0Y29uc29sZS5sb2coMTIzKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJzEyMycpXG5cblx0XHRpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcblx0XHRcdGRpc3BhdGNoKGZldGNoTmV3cygpKVxuXHRcdH1cblx0fSwgW3N0YXR1cywgZGlzcGF0Y2hdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW5XcmFwcGVyJz5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluX193cmFwcGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cblx0XHRcdFx0XHRcdFx0PFNwb3J0c0NhdGVnb3J5TGlzdCAvPlxuXHRcdFx0XHRcdFx0XHQ8VG9wTmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8TmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWRlciIsIlRvcE5ld3NMaXN0IiwiTmV3c0xpc3QiLCJGb290ZXIiLCJTcG9ydHNDYXRlZ29yeUxpc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hOZXdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJzdGF0ZSIsIm5ld3MiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layouts/Layout.tsx\n"));

/***/ })

});