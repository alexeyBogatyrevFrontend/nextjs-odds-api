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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var _news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/TopNewsList/TopNewsList */ \"(app-pages-browser)/./app/news/TopNewsList/TopNewsList.tsx\");\n/* harmony import */ var _news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../news/NewsList/NewsList */ \"(app-pages-browser)/./app/news/NewsList/NewsList.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./app/components/Footer/Footer.tsx\");\n/* harmony import */ var _odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../odds/sportsCategory/SportsCategoryList/SportsCategoryList */ \"(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryList/SportsCategoryList.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var _lib_slices_sportCategorySlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/slices/sportCategorySlice */ \"(app-pages-browser)/./lib/slices/sportCategorySlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { category } = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.sport);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__.fetchNews)());\n    }, [\n        dispatch\n    ]);\n    const setSport = ()=>{\n        dispatch((0,_lib_slices_sportCategorySlice__WEBPACK_IMPORTED_MODULE_8__.setCategory)(category));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main__wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    children,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Layout, \"dvMIupvYzeOhmPtYdfl9gwWOc9c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUU7QUFDeEI7QUFFZ0I7QUFDVDtBQUNBO0FBQzZDO0FBQ3ZDO0FBQ1M7QUFFRjtBQWU3RCxNQUFNVyxTQUF5QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDM0MsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0wsd0RBQVdBLENBQUMsQ0FBQ00sUUFBc0JBLE1BQU1DLEtBQUs7SUFDbkUsTUFBTUMsV0FBV1Qsd0RBQVdBO0lBRTVCTixnREFBU0EsQ0FBQztRQUNUZSxTQUFTUCxnRUFBU0E7SUFDbkIsR0FBRztRQUFDTztLQUFTO0lBRWIsTUFBTUMsV0FBVztRQUNoQkQsU0FBU04sMkVBQVdBLENBQUNHO0lBQ3RCO0lBQ0EscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDakIsMERBQU1BOzs7OzswQkFDUCw4REFBQ2tCO2dCQUFLRCxXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDZCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNiLGtHQUFrQkE7Ozs7O2tEQUNuQiw4REFBQ0gscUVBQVdBOzs7Ozs7Ozs7OzswQ0FFYiw4REFBQ2U7Z0NBQUlDLFdBQVU7O29DQUNiUDtrREFDRCw4REFBQ1IsK0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2IsOERBQUNDLGlFQUFNQTs7Ozs7Ozs7Ozs7QUFHVjtHQS9CTU07O1FBQ2dCSCxvREFBV0E7UUFDZkQsb0RBQVdBOzs7S0FGdkJJO0FBaUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3g/MDM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCBUb3BOZXdzTGlzdCBmcm9tICcuLi9uZXdzL1RvcE5ld3NMaXN0L1RvcE5ld3NMaXN0J1xuaW1wb3J0IE5ld3NMaXN0IGZyb20gJy4uL25ld3MvTmV3c0xpc3QvTmV3c0xpc3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBTcG9ydHNDYXRlZ29yeUxpc3QgZnJvbSAnLi4vb2Rkcy9zcG9ydHNDYXRlZ29yeS9TcG9ydHNDYXRlZ29yeUxpc3QvU3BvcnRzQ2F0ZWdvcnlMaXN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgZmV0Y2hOZXdzIH0gZnJvbSAnQC9saWIvc2xpY2VzL25ld3NTbGljZSdcbmltcG9ydCB7IHNwb3J0U3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNldENhdGVnb3J5IH0gZnJvbSAnQC9saWIvc2xpY2VzL3Nwb3J0Q2F0ZWdvcnlTbGljZSdcblxuZXhwb3J0IHR5cGUgRXZlbnRUeXBlID0ge1xuXHRrZXk6IHN0cmluZ1xuXHRncm91cDogc3RyaW5nXG5cdHRpdGxlOiBzdHJpbmdcblx0ZGVzY3JpcHRpb246IHN0cmluZ1xuXHRhY3RpdmU6IGJvb2xlYW5cblx0aGFzX291dHJpZ2h0czogYm9vbGVhblxufVxuXG50eXBlIExheW91dFR5cGUgPSB7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuY29uc3QgTGF5b3V0OiBGQzxMYXlvdXRUeXBlPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgeyBjYXRlZ29yeSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBzcG9ydFN0YXRlKSA9PiBzdGF0ZS5zcG9ydClcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goZmV0Y2hOZXdzKCkpXG5cdH0sIFtkaXNwYXRjaF0pXG5cblx0Y29uc3Qgc2V0U3BvcnQgPSAoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpKVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW5XcmFwcGVyJz5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluX193cmFwcGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cblx0XHRcdFx0XHRcdFx0PFNwb3J0c0NhdGVnb3J5TGlzdCAvPlxuXHRcdFx0XHRcdFx0XHQ8VG9wTmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8TmV3c0xpc3QgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWRlciIsIlRvcE5ld3NMaXN0IiwiTmV3c0xpc3QiLCJGb290ZXIiLCJTcG9ydHNDYXRlZ29yeUxpc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hOZXdzIiwic2V0Q2F0ZWdvcnkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNhdGVnb3J5Iiwic3RhdGUiLCJzcG9ydCIsImRpc3BhdGNoIiwic2V0U3BvcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layouts/Layout.tsx\n"));

/***/ })

});