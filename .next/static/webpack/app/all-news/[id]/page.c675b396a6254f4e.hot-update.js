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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const { newsList, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.news);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_1__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    const currentNews = newsList.filter((news)=>news._id === id)[0];\n    console.log(currentNews);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2023/December/odds/nextjs-odds-api/app/all-news/[id]/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_s(page, \"xF/i3R6qk592cUMvLz1vxFyhEj0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbGwtbmV3cy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRStEO0FBQ25CO0FBQ1U7QUFRdEQsTUFBTUssT0FBMEI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLEVBQUUsRUFBRSxFQUFFOztJQUNsRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR04sd0RBQVdBLENBQzlDLENBQUNPLFFBQXFCQSxNQUFNQyxJQUFJO0lBR2pDLE1BQU1DLFdBQVdWLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDVCxJQUFJTyxXQUFXLFFBQVE7WUFDdEJJLFNBQVNiLGdFQUFTQTtRQUNuQjtJQUNELEdBQUc7UUFBQ1M7UUFBUUk7S0FBUztJQUVyQixNQUFNQyxjQUFjTixTQUFTTyxNQUFNLENBQUNILENBQUFBLE9BQVFBLEtBQUtJLEdBQUcsS0FBS1QsR0FBRyxDQUFDLEVBQUU7SUFFL0RVLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixxQkFDQyw4REFBQ0s7OzBCQUNBLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDOzBCQUFHZDs7Ozs7Ozs7Ozs7O0FBR1A7R0F2Qk1GOztRQUMrQkQsb0RBQVdBO1FBSTlCRCxvREFBV0E7OztBQW9CN0IsK0RBQWVFLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FsbC1uZXdzL1tpZF0vcGFnZS50c3g/ZDEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvYXBwL3R5cGVzJ1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIGZldGNoTmV3cyB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbnR5cGUgTmV3c1BhZ2VQcm9wcyA9IHtcblx0cGFyYW1zOiB7XG5cdFx0aWQ6IHN0cmluZ1xuXHR9XG59XG5cbmNvbnN0IHBhZ2U6IEZDPE5ld3NQYWdlUHJvcHM+ID0gKHsgcGFyYW1zOiB7IGlkIH0gfSkgPT4ge1xuXHRjb25zdCB7IG5ld3NMaXN0LCBzdGF0dXMsIGVycm9yIH0gPSB1c2VTZWxlY3Rvcihcblx0XHQoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3c1xuXHQpXG5cblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG5cdFx0XHRkaXNwYXRjaChmZXRjaE5ld3MoKSlcblx0XHR9XG5cdH0sIFtzdGF0dXMsIGRpc3BhdGNoXSlcblxuXHRjb25zdCBjdXJyZW50TmV3cyA9IG5ld3NMaXN0LmZpbHRlcihuZXdzID0+IG5ld3MuX2lkID09PSBpZClbMF1cblxuXHRjb25zb2xlLmxvZyhjdXJyZW50TmV3cylcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+e308L2gxPlxuXHRcdFx0PHA+e2lkfTwvcD5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlXG4iXSwibmFtZXMiOlsiZmV0Y2hOZXdzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwicGFnZSIsInBhcmFtcyIsImlkIiwibmV3c0xpc3QiLCJzdGF0dXMiLCJlcnJvciIsInN0YXRlIiwibmV3cyIsImRpc3BhdGNoIiwiY3VycmVudE5ld3MiLCJmaWx0ZXIiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/all-news/[id]/page.tsx\n"));

/***/ })

});