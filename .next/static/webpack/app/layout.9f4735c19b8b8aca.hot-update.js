"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/slices/sportCategorySlice.ts":
/*!******************************************!*\
  !*** ./lib/slices/sportCategorySlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    category: \"Soccer\"\n};\nconst sportCategorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"sport\",\n    initialState,\n    reducers: {\n        setCategory: (state, action)=>{\n            state.category = action.payload;\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (sportCategorySlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9zbGljZXMvc3BvcnRDYXRlZ29yeVNsaWNlLnRzIiwibWFwcGluZ3MiOiI7O0FBQThDO0FBRzlDLE1BQU1DLGVBQWU7SUFDcEJDLFVBQVU7QUFDWDtBQUVBLE1BQU1DLHFCQUFxQkgsNkRBQVdBLENBQUM7SUFDdENJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNUQyxhQUFhLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNTCxRQUFRLEdBQUdNLE9BQU9DLE9BQU87UUFDaEM7SUFDRDtBQUNEO0FBRUEsK0RBQWVOLG1CQUFtQk8sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvc2xpY2VzL3Nwb3J0Q2F0ZWdvcnlTbGljZS50cz8zYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRjYXRlZ29yeTogJ1NvY2NlcicsXG59XG5cbmNvbnN0IHNwb3J0Q2F0ZWdvcnlTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Nwb3J0Jyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldENhdGVnb3J5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuY2F0ZWdvcnkgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBzcG9ydENhdGVnb3J5U2xpY2UucmVkdWNlclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2hcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhdGVnb3J5Iiwic3BvcnRDYXRlZ29yeVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0Q2F0ZWdvcnkiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/slices/sportCategorySlice.ts\n"));

/***/ })

});