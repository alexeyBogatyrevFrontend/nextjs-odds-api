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

/***/ "(app-pages-browser)/./app/news/NewsList/NewsList.tsx":
/*!****************************************!*\
  !*** ./app/news/NewsList/NewsList.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NewsItem/NewsItem */ \"(app-pages-browser)/./app/news/NewsItem/NewsItem.tsx\");\n/* harmony import */ var _NewsList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsList.module.css */ \"(app-pages-browser)/./app/news/NewsList/NewsList.module.css\");\n/* harmony import */ var _NewsList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewsList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_components_UI_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/UI/Loader */ \"(app-pages-browser)/./app/components/UI/Loader.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NewsList = ()=>{\n    _s();\n    const { newsList, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.news);\n    const usualNews = newsList.filter((news)=>!news.isTop);\n    const displayedNews = usualNews.slice(0, 6);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NewsList_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_NewsList_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Новости\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/news\",\n                        className: (_NewsList_module_css__WEBPACK_IMPORTED_MODULE_5___default().subTitle),\n                        children: [\n                            \"Все новости \",\n                            \">\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NewsList_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n                children: status === \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_UI_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 6\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: displayedNews.length ? displayedNews.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 10\n                        }, undefined)) : \"Новости появятся позже\"\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/news/NewsList/NewsList.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n};\n_s(NewsList, \"3VUAQEb6XJcFidPmz41KDa4gOes=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = NewsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uZXdzL05ld3NMaXN0L05ld3NMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNFO0FBQ0Q7QUFFSztBQUNuQjtBQUU1QixNQUFNSyxXQUFXOztJQUNoQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Isd0RBQVdBLENBQzlDLENBQUNTLFFBQXFCQSxNQUFNQyxJQUFJO0lBR2pDLE1BQU1DLFlBQVlMLFNBQVNNLE1BQU0sQ0FBQ0YsQ0FBQUEsT0FBUSxDQUFDQSxLQUFLRyxLQUFLO0lBQ3JELE1BQU1DLGdCQUFnQkgsVUFBVUksS0FBSyxDQUFDLEdBQUc7SUFFekMscUJBQ0MsOERBQUNDO1FBQUlDLE9BQU87WUFBRUMsT0FBTztRQUFPOzswQkFDM0IsOERBQUNGO2dCQUFJRyxXQUFXakIsb0VBQWE7O2tDQUM1Qiw4REFBQ21CO3dCQUFHRixXQUFXakIsbUVBQVk7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUNFLGtEQUFJQTt3QkFBQ21CLE1BQUs7d0JBQVFKLFdBQVdqQixzRUFBZTs7NEJBQUU7NEJBQ2pDOzs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDYztnQkFBSUcsV0FBV2pCLHFFQUFjOzBCQUM1QkssV0FBVywwQkFDWCw4REFBQ0osaUVBQU1BOzs7OzhDQUVQOzhCQUNFVyxjQUFjWSxNQUFNLEdBQ2xCWixjQUFjYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3pCLDhEQUFDNUIsMERBQVFBOzRCQUFDMkIsTUFBTUE7MkJBQVdDOzs7O3lDQUUzQjs7Ozs7Ozs7Ozs7OztBQU1UO0dBaENNeEI7O1FBQytCTCxvREFBV0E7OztLQUQxQ0s7QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25ld3MvTmV3c0xpc3QvTmV3c0xpc3QudHN4P2EyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBOZXdzSXRlbSBmcm9tICcuLi9OZXdzSXRlbS9OZXdzSXRlbSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdzTGlzdC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQC9hcHAvdHlwZXMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVUkvTG9hZGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBOZXdzTGlzdCA9ICgpID0+IHtcblx0Y29uc3QgeyBuZXdzTGlzdCwgc3RhdHVzLCBlcnJvciB9ID0gdXNlU2VsZWN0b3IoXG5cdFx0KHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm5ld3Ncblx0KVxuXG5cdGNvbnN0IHVzdWFsTmV3cyA9IG5ld3NMaXN0LmZpbHRlcihuZXdzID0+ICFuZXdzLmlzVG9wKVxuXHRjb25zdCBkaXNwbGF5ZWROZXdzID0gdXN1YWxOZXdzLnNsaWNlKDAsIDYpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+0J3QvtCy0L7RgdGC0Lg8L2gyPlxuXHRcdFx0XHQ8TGluayBocmVmPScvbmV3cycgY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGl0bGV9PlxuXHRcdFx0XHRcdNCS0YHQtSDQvdC+0LLQvtGB0YLQuCB7Jz4nfVxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cblx0XHRcdFx0e3N0YXR1cyA9PT0gJ2xvYWRpbmcnID8gKFxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0e2Rpc3BsYXllZE5ld3MubGVuZ3RoXG5cdFx0XHRcdFx0XHRcdD8gZGlzcGxheWVkTmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmV3c0l0ZW0gaXRlbT17aXRlbX0ga2V5PXtpbmRleH0gLz5cblx0XHRcdFx0XHRcdFx0ICApKVxuXHRcdFx0XHRcdFx0XHQ6ICfQndC+0LLQvtGB0YLQuCDQv9C+0Y/QstGP0YLRgdGPINC/0L7Qt9C20LUnfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpc3RcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIk5ld3NJdGVtIiwic3R5bGVzIiwiTG9hZGVyIiwiTGluayIsIk5ld3NMaXN0IiwibmV3c0xpc3QiLCJzdGF0dXMiLCJlcnJvciIsInN0YXRlIiwibmV3cyIsInVzdWFsTmV3cyIsImZpbHRlciIsImlzVG9wIiwiZGlzcGxheWVkTmV3cyIsInNsaWNlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImhlYWRlciIsImgyIiwidGl0bGUiLCJocmVmIiwic3ViVGl0bGUiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/news/NewsList/NewsList.tsx\n"));

/***/ })

});