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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _news_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/NewsItem/NewsItem */ \"(app-pages-browser)/./app/news/NewsItem/NewsItem.tsx\");\n/* harmony import */ var _all_news_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-news.module.css */ \"(app-pages-browser)/./app/all-news/all-news.module.css\");\n/* harmony import */ var _all_news_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_all_news_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const { newsList, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.news);\n    // const dispatch = useDispatch<AppDispatch>()\n    // useEffect(() => {\n    // \tif (status === 'idle') {\n    // \t\tdispatch(fetchNews())\n    // \t}\n    // }, [status, dispatch])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_all_news_module_css__WEBPACK_IMPORTED_MODULE_5___default().page),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Все новости\"\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_all_news_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n                    children: newsList.map((news)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            item: news\n                        }, news._id, false, {\n                            fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/all-news/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/all-news/page.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/all-news/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n};\n_s(page, \"3VUAQEb6XJcFidPmz41KDa4gOes=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbGwtbmV3cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3QztBQUNGO0FBQ2dCO0FBRU47QUFHTjtBQUUxQyxNQUFNSyxPQUFPOztJQUNaLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHTix3REFBV0EsQ0FDOUMsQ0FBQ08sUUFBcUJBLE1BQU1DLElBQUk7SUFHakMsOENBQThDO0lBRTlDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCx5QkFBeUI7SUFFekIscUJBQ0MsOERBQUNULHVEQUFNQTtrQkFDTiw0RUFBQ1U7WUFBSUMsV0FBV1Isa0VBQVc7OzhCQUMxQiw4REFBQ1M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Y7b0JBQUlDLFdBQVdSLHFFQUFjOzhCQUM1QkUsU0FBU1MsR0FBRyxDQUFDTCxDQUFBQSxxQkFDYiw4REFBQ1AsK0RBQVFBOzRCQUFDYSxNQUFNTjsyQkFBV0EsS0FBS08sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBekJNWjs7UUFDK0JILG9EQUFXQTs7O0FBMEJoRCwrREFBZUcsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWxsLW5ld3MvcGFnZS50c3g/MWYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgTmV3c0l0ZW0gZnJvbSAnLi4vbmV3cy9OZXdzSXRlbS9OZXdzSXRlbSdcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBmZXRjaE5ld3MgfSBmcm9tICdAL2xpYi9zbGljZXMvbmV3c1NsaWNlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYWxsLW5ld3MubW9kdWxlLmNzcydcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcblx0Y29uc3QgeyBuZXdzTGlzdCwgc3RhdHVzLCBlcnJvciB9ID0gdXNlU2VsZWN0b3IoXG5cdFx0KHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm5ld3Ncblx0KVxuXG5cdC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcblxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xuXHQvLyBcdGlmIChzdGF0dXMgPT09ICdpZGxlJykge1xuXHQvLyBcdFx0ZGlzcGF0Y2goZmV0Y2hOZXdzKCkpXG5cdC8vIFx0fVxuXHQvLyB9LCBbc3RhdHVzLCBkaXNwYXRjaF0pXG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cblx0XHRcdFx0PGgyPtCS0YHQtSDQvdC+0LLQvtGB0YLQuDwvaDI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG5cdFx0XHRcdFx0e25ld3NMaXN0Lm1hcChuZXdzID0+IChcblx0XHRcdFx0XHRcdDxOZXdzSXRlbSBpdGVtPXtuZXdzfSBrZXk9e25ld3MuX2lkfSAvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsInVzZVNlbGVjdG9yIiwiTmV3c0l0ZW0iLCJzdHlsZXMiLCJwYWdlIiwibmV3c0xpc3QiLCJzdGF0dXMiLCJlcnJvciIsInN0YXRlIiwibmV3cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwid3JhcHBlciIsIm1hcCIsIml0ZW0iLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/all-news/page.tsx\n"));

/***/ })

});