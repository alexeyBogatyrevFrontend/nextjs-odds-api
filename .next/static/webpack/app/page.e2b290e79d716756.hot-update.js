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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var _news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/TopNewsList/TopNewsList */ \"(app-pages-browser)/./app/news/TopNewsList/TopNewsList.tsx\");\n/* harmony import */ var _news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../news/NewsList/NewsList */ \"(app-pages-browser)/./app/news/NewsList/NewsList.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./app/components/Footer/Footer.tsx\");\n/* harmony import */ var _odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../odds/sportsCategory/SportsCategoryList/SportsCategoryList */ \"(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryList/SportsCategoryList.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const router = useRouter();\n    const searchParams = useSearchParams();\n    const category = searchParams.get(\"category\");\n    const [sport, setSport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(category !== null && category !== void 0 ? category : \"Soccer\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    const fetchData = async (sport)=>{\n        setEvent([]);\n        setIsLoading(true);\n        try {\n            const response = await axios.get(\"https://api.apilayer.com/odds/sports?all=false\", {\n                headers: {\n                    apikey: API_KEY\n                }\n            });\n            const result = response.data;\n            result.forEach((item)=>{\n                if (item.group === sport) setEvent((prev)=>[\n                        ...prev,\n                        item\n                    ]);\n            });\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!sport) {\n            router.push(\"/?category=Soccer\");\n        }\n        if (sport) {\n            fetchData(sport);\n        }\n    }, [\n        sport\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_7__.fetchNews)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main__wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_odds_sportsCategory_SportsCategoryList_SportsCategoryList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        setSport: setSport\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_TopNewsList_TopNewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    children,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_news_NewsList_NewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n                lineNumber: 91,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/layouts/Layout.tsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Layout, \"Q2O4mmyAHgLRCMasIrLGtp1bY+8=\", true, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVpRTtBQUN4QjtBQUVnQjtBQUNUO0FBQ0E7QUFDNkM7QUFDcEQ7QUFDc0I7QUFlL0QsTUFBTVUsU0FBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNDLE1BQU1DLFNBQVNDO0lBRWYsTUFBTUMsZUFBZUM7SUFDckIsTUFBTUMsV0FBV0YsYUFBYUcsR0FBRyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUNjLHFCQUFBQSxzQkFBQUEsV0FBWTtJQUUvQyxNQUFNSSxXQUFXWix3REFBV0E7SUFFNUIsTUFBTWEsWUFBWSxPQUFPSDtRQUN4QkksU0FBUyxFQUFFO1FBQ1hDLGFBQWE7UUFFYixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNUixHQUFHLENBQy9CLGtEQUNBO2dCQUNDUyxTQUFTO29CQUNSQyxRQUFRQztnQkFDVDtZQUNEO1lBR0QsTUFBTUMsU0FBc0JMLFNBQVNNLElBQUk7WUFFekNELE9BQU9FLE9BQU8sQ0FBQ0MsQ0FBQUE7Z0JBQ2QsSUFBSUEsS0FBS0MsS0FBSyxLQUFLZixPQUNsQkksU0FBUyxDQUFDWSxPQUFzQjsyQkFBSUE7d0JBQU1GO3FCQUFLO1lBQ2pEO1FBQ0QsRUFBRSxPQUFPRyxPQUFPO1lBQ2ZDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3ZDLFNBQVU7WUFDVFosYUFBYTtRQUNkO0lBQ0Q7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ1QsSUFBSSxDQUFDaUIsT0FBTztZQUNYTixPQUFPeUIsSUFBSSxDQUFDO1FBQ2I7UUFDQSxJQUFJbkIsT0FBTztZQUNWRyxVQUFVSDtRQUNYO0lBQ0QsR0FBRztRQUFDQTtLQUFNO0lBRVZqQixnREFBU0EsQ0FBQztRQUNUbUIsU0FBU1gsZ0VBQVNBO0lBQ25CLEdBQUc7UUFBQ1c7S0FBUztJQUNiLHFCQUNDLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNwQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDcUM7Z0JBQUtELFdBQVU7MEJBQ2YsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNkLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ2hDLGtHQUFrQkE7d0NBQUNZLFVBQVVBOzs7Ozs7a0RBQzlCLDhEQUFDZixxRUFBV0E7Ozs7Ozs7Ozs7OzBDQUViLDhEQUFDa0M7Z0NBQUlDLFdBQVU7O29DQUNiNUI7a0RBQ0QsOERBQUNOLCtEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDQyxpRUFBTUE7Ozs7Ozs7Ozs7O0FBR1Y7R0FwRU1JOztRQU9ZRixvREFBV0E7OztLQVB2QkU7QUFzRU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xheW91dHMvTGF5b3V0LnRzeD8wMzQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IFRvcE5ld3NMaXN0IGZyb20gJy4uL25ld3MvVG9wTmV3c0xpc3QvVG9wTmV3c0xpc3QnXG5pbXBvcnQgTmV3c0xpc3QgZnJvbSAnLi4vbmV3cy9OZXdzTGlzdC9OZXdzTGlzdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IFNwb3J0c0NhdGVnb3J5TGlzdCBmcm9tICcuLi9vZGRzL3Nwb3J0c0NhdGVnb3J5L1Nwb3J0c0NhdGVnb3J5TGlzdC9TcG9ydHNDYXRlZ29yeUxpc3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIGZldGNoTmV3cyB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5cbmV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9IHtcblx0a2V5OiBzdHJpbmdcblx0Z3JvdXA6IHN0cmluZ1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0YWN0aXZlOiBib29sZWFuXG5cdGhhc19vdXRyaWdodHM6IGJvb2xlYW5cbn1cblxudHlwZSBMYXlvdXRUeXBlID0ge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IExheW91dDogRkM8TGF5b3V0VHlwZT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblx0Y29uc3QgY2F0ZWdvcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjYXRlZ29yeScpXG5cdGNvbnN0IFtzcG9ydCwgc2V0U3BvcnRdID0gdXNlU3RhdGUoY2F0ZWdvcnkgPz8gJ1NvY2NlcicpXG5cblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuXG5cdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChzcG9ydDogc3RyaW5nKSA9PiB7XG5cdFx0c2V0RXZlbnQoW10pXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpXG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG5cdFx0XHRcdCdodHRwczovL2FwaS5hcGlsYXllci5jb20vb2Rkcy9zcG9ydHM/YWxsPWZhbHNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdGFwaWtleTogQVBJX0tFWSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cblx0XHRcdGNvbnN0IHJlc3VsdDogRXZlbnRUeXBlW10gPSByZXNwb25zZS5kYXRhXG5cblx0XHRcdHJlc3VsdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaXRlbS5ncm91cCA9PT0gc3BvcnQpXG5cdFx0XHRcdFx0c2V0RXZlbnQoKHByZXY6IEV2ZW50VHlwZVtdKSA9PiBbLi4ucHJldiwgaXRlbV0pXG5cdFx0XHR9KVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIXNwb3J0KSB7XG5cdFx0XHRyb3V0ZXIucHVzaCgnLz9jYXRlZ29yeT1Tb2NjZXInKVxuXHRcdH1cblx0XHRpZiAoc3BvcnQpIHtcblx0XHRcdGZldGNoRGF0YShzcG9ydClcblx0XHR9XG5cdH0sIFtzcG9ydF0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkaXNwYXRjaChmZXRjaE5ld3MoKSlcblx0fSwgW2Rpc3BhdGNoXSlcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbldyYXBwZXInPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPSdtYWluJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW5fX3dyYXBwZXInPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xlZnQnPlxuXHRcdFx0XHRcdFx0XHQ8U3BvcnRzQ2F0ZWdvcnlMaXN0IHNldFNwb3J0PXtzZXRTcG9ydH0gLz5cblx0XHRcdFx0XHRcdFx0PFRvcE5ld3NMaXN0IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyaWdodCc+XG5cdFx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0PE5ld3NMaXN0IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIlRvcE5ld3NMaXN0IiwiTmV3c0xpc3QiLCJGb290ZXIiLCJTcG9ydHNDYXRlZ29yeUxpc3QiLCJ1c2VEaXNwYXRjaCIsImZldGNoTmV3cyIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiY2F0ZWdvcnkiLCJnZXQiLCJzcG9ydCIsInNldFNwb3J0IiwiZGlzcGF0Y2giLCJmZXRjaERhdGEiLCJzZXRFdmVudCIsInNldElzTG9hZGluZyIsInJlc3BvbnNlIiwiYXhpb3MiLCJoZWFkZXJzIiwiYXBpa2V5IiwiQVBJX0tFWSIsInJlc3VsdCIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImdyb3VwIiwicHJldiIsImVycm9yIiwiY29uc29sZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layouts/Layout.tsx\n"));

/***/ })

});