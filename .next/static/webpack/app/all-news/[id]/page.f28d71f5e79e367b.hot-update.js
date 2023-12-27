"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/all-news/[id]/page",{

/***/ "(app-pages-browser)/./app/all-news/[id]/page.tsx":
/*!************************************!*\
  !*** ./app/all-news/[id]/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_UI_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/UI/Loader */ \"(app-pages-browser)/./app/components/UI/Loader.tsx\");\n/* harmony import */ var _app_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const { newsList, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.news);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_3__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    const currentNews = newsList.filter((news)=>news._id === id)[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: status === \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_UI_Loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: currentNews === null || currentNews === void 0 ? void 0 : currentNews.title\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: currentNews === null || currentNews === void 0 ? void 0 : currentNews.description\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: (currentNews === null || currentNews === void 0 ? void 0 : currentNews.isTop) ? \"Top\" : \"Usual\"\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: currentNews === null || currentNews === void 0 ? void 0 : currentNews.date\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 6\n                }, undefined),\n                currentNews === null || currentNews === void 0 ? void 0 : currentNews.textEditor,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: id\n                }, void 0, false, {\n                    fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_s(page, \"xF/i3R6qk592cUMvLz1vxFyhEj0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbGwtbmV3cy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0M7QUFDTjtBQUVzQjtBQUNuQjtBQUNVO0FBUXRELE1BQU1PLE9BQTBCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsRUFBRTs7SUFDbEQsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdOLHdEQUFXQSxDQUM5QyxDQUFDTyxRQUFxQkEsTUFBTUMsSUFBSTtJQUdqQyxNQUFNQyxXQUFXVix3REFBV0E7SUFFNUJELGdEQUFTQSxDQUFDO1FBQ1QsSUFBSU8sV0FBVyxRQUFRO1lBQ3RCSSxTQUFTYixnRUFBU0E7UUFDbkI7SUFDRCxHQUFHO1FBQUNTO1FBQVFJO0tBQVM7SUFFckIsTUFBTUMsY0FBY04sU0FBU08sTUFBTSxDQUFDSCxDQUFBQSxPQUFRQSxLQUFLSSxHQUFHLEtBQUtULEdBQUcsQ0FBQyxFQUFFO0lBRS9ELHFCQUNDLDhEQUFDUiwyREFBTUE7a0JBQ0xVLFdBQVcsMEJBQ1gsOERBQUNYLGlFQUFNQTs7OztzQ0FFUDs7OEJBQ0MsOERBQUNtQjs4QkFBSUgsd0JBQUFBLGtDQUFBQSxZQUFhSSxLQUFLOzs7Ozs7OEJBQ3ZCLDhEQUFDQzs4QkFBSUwsd0JBQUFBLGtDQUFBQSxZQUFhTSxXQUFXOzs7Ozs7OEJBQzdCLDhEQUFDQzs4QkFBSVAsQ0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFhUSxLQUFLLElBQUcsUUFBUTs7Ozs7OzhCQUNsQyw4REFBQ0M7OEJBQUlULHdCQUFBQSxrQ0FBQUEsWUFBYVUsSUFBSTs7Ozs7O2dCQUNyQlYsd0JBQUFBLGtDQUFBQSxZQUFhVyxVQUFVOzhCQUN4Qiw4REFBQ0M7OEJBQUduQjs7Ozs7Ozs7Ozs7OztBQUtUO0dBL0JNRjs7UUFDK0JELG9EQUFXQTtRQUk5QkQsb0RBQVdBOzs7QUE0QjdCLCtEQUFlRSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hbGwtbmV3cy9baWRdL3BhZ2UudHN4P2QxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVUkvTG9hZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICdAL2FwcC9sYXlvdXRzL0xheW91dCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvYXBwL3R5cGVzJ1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIGZldGNoTmV3cyB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbnR5cGUgTmV3c1BhZ2VQcm9wcyA9IHtcblx0cGFyYW1zOiB7XG5cdFx0aWQ6IHN0cmluZ1xuXHR9XG59XG5cbmNvbnN0IHBhZ2U6IEZDPE5ld3NQYWdlUHJvcHM+ID0gKHsgcGFyYW1zOiB7IGlkIH0gfSkgPT4ge1xuXHRjb25zdCB7IG5ld3NMaXN0LCBzdGF0dXMsIGVycm9yIH0gPSB1c2VTZWxlY3Rvcihcblx0XHQoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3c1xuXHQpXG5cblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG5cdFx0XHRkaXNwYXRjaChmZXRjaE5ld3MoKSlcblx0XHR9XG5cdH0sIFtzdGF0dXMsIGRpc3BhdGNoXSlcblxuXHRjb25zdCBjdXJyZW50TmV3cyA9IG5ld3NMaXN0LmZpbHRlcihuZXdzID0+IG5ld3MuX2lkID09PSBpZClbMF1cblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHR7c3RhdHVzID09PSAnbG9hZGluZycgPyAoXG5cdFx0XHRcdDxMb2FkZXIgLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGgxPntjdXJyZW50TmV3cz8udGl0bGV9PC9oMT5cblx0XHRcdFx0XHQ8aDI+e2N1cnJlbnROZXdzPy5kZXNjcmlwdGlvbn08L2gyPlxuXHRcdFx0XHRcdDxoMz57Y3VycmVudE5ld3M/LmlzVG9wID8gJ1RvcCcgOiAnVXN1YWwnfTwvaDM+XG5cdFx0XHRcdFx0PGg0PntjdXJyZW50TmV3cz8uZGF0ZX08L2g0PlxuXHRcdFx0XHRcdHtjdXJyZW50TmV3cz8udGV4dEVkaXRvcn1cblx0XHRcdFx0XHQ8cD57aWR9PC9wPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9MYXlvdXQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbIkxvYWRlciIsIkxheW91dCIsImZldGNoTmV3cyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInBhZ2UiLCJwYXJhbXMiLCJpZCIsIm5ld3NMaXN0Iiwic3RhdHVzIiwiZXJyb3IiLCJzdGF0ZSIsIm5ld3MiLCJkaXNwYXRjaCIsImN1cnJlbnROZXdzIiwiZmlsdGVyIiwiX2lkIiwiaDEiLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJoMyIsImlzVG9wIiwiaDQiLCJkYXRlIiwidGV4dEVkaXRvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/all-news/[id]/page.tsx\n"));

/***/ })

});