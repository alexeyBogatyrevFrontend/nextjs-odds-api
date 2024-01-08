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

/***/ "(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx":
/*!***************************************************************************!*\
  !*** ./app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SportsCategoryItem_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SportsCategoryItem.module.css */ \"(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.module.css\");\n/* harmony import */ var _SportsCategoryItem_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SportsCategoryItem_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_sportCategorySlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/slices/sportCategorySlice */ \"(app-pages-browser)/./lib/slices/sportCategorySlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SportsCategoryItem = (param)=>{\n    let { item, active, setActive } = param;\n    _s();\n    const { category: sport } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.sport);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const clickHandler = (e)=>{\n        e.preventDefault();\n        setActive(item.category);\n        dispatch((0,_lib_slices_sportCategorySlice__WEBPACK_IMPORTED_MODULE_5__.setCategory)(item.category));\n        localStorage.setItem(\"sport\", item.category);\n        router.push(\"/?category=\".concat(item.category));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        className: \"\".concat((_SportsCategoryItem_module_css__WEBPACK_IMPORTED_MODULE_7___default().block), \" \").concat(active === item.category ? (_SportsCategoryItem_module_css__WEBPACK_IMPORTED_MODULE_7___default().active) : \"\"),\n        onClick: clickHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/icons/\".concat(active === item.category ? \"white-\" + item.img : item.img, \".svg\"),\n                alt: item.img,\n                width: 24,\n                height: 24\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: item.title\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SportsCategoryItem, \"VX0lTetfZ2w7Z0qzrA6YdUKSOPE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SportsCategoryItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SportsCategoryItem);\nvar _c;\n$RefreshReg$(_c, \"SportsCategoryItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9vZGRzL3Nwb3J0c0NhdGVnb3J5L1Nwb3J0c0NhdGVnb3J5SXRlbS9TcG9ydHNDYXRlZ29yeUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDbkI7QUFFeEI7QUFDRTtBQUNhO0FBQ1c7QUFHTztBQVM3RCxNQUFNUSxxQkFBa0Q7UUFBQyxFQUN4REMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLFNBQVMsRUFDVDs7SUFDQSxNQUFNLEVBQUVDLFVBQVVDLEtBQUssRUFBRSxHQUFHUCx3REFBV0EsQ0FBQyxDQUFDUSxRQUFzQkEsTUFBTUQsS0FBSztJQUMxRSxNQUFNRSxXQUFXVix3REFBV0E7SUFFNUIsTUFBTVcsU0FBU1osMERBQVNBO0lBRXhCLE1BQU1hLGVBQWUsQ0FBQ0M7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEJSLFVBQVVGLEtBQUtHLFFBQVE7UUFDdkJHLFNBQVNSLDJFQUFXQSxDQUFDRSxLQUFLRyxRQUFRO1FBQ2xDUSxhQUFhQyxPQUFPLENBQUMsU0FBU1osS0FBS0csUUFBUTtRQUUzQ0ksT0FBT00sSUFBSSxDQUFDLGNBQTRCLE9BQWRiLEtBQUtHLFFBQVE7SUFDeEM7SUFFQSxxQkFDQyw4REFBQ1Ysa0RBQUlBO1FBQ0pxQixNQUFLO1FBQ0xDLFdBQVcsR0FDVmQsT0FEYVQsNkVBQVksRUFBQyxLQUUxQixPQURBUyxXQUFXRCxLQUFLRyxRQUFRLEdBQUdYLDhFQUFhLEdBQUc7UUFFNUN5QixTQUFTVDs7MEJBRVQsOERBQUNkLG1EQUFLQTtnQkFDTHdCLEtBQUssVUFFSixPQURBakIsV0FBV0QsS0FBS0csUUFBUSxHQUFHLFdBQVdILEtBQUttQixHQUFHLEdBQUduQixLQUFLbUIsR0FBRyxFQUN6RDtnQkFDREMsS0FBS3BCLEtBQUttQixHQUFHO2dCQUNiRSxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7MEJBRVQsOERBQUNDOzBCQUFNdkIsS0FBS3dCLEtBQUs7Ozs7Ozs7Ozs7OztBQUdwQjtHQXRDTXpCOztRQUt1QkYsb0RBQVdBO1FBQ3RCRCxvREFBV0E7UUFFYkQsc0RBQVNBOzs7S0FSbkJJO0FBd0NOLCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL29kZHMvc3BvcnRzQ2F0ZWdvcnkvU3BvcnRzQ2F0ZWdvcnlJdGVtL1Nwb3J0c0NhdGVnb3J5SXRlbS50c3g/MjZlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIEZDLCBNb3VzZUV2ZW50LCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Nwb3J0c0NhdGVnb3J5SXRlbS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgc3BvcnRzQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vU3BvcnRzQ2F0ZWdvcnlMaXN0L1Nwb3J0c0NhdGVnb3J5TGlzdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzcG9ydFN0YXRlIH0gZnJvbSAnQC9hcHAvdHlwZXMnXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5pbXBvcnQgeyBzZXRDYXRlZ29yeSB9IGZyb20gJ0AvbGliL3NsaWNlcy9zcG9ydENhdGVnb3J5U2xpY2UnXG5cbnR5cGUgU3BvcnRzQ2F0ZWdvcnlJdGVtUHJvcHMgPSB7XG5cdGl0ZW06IHNwb3J0c0NhdGVnb3J5VHlwZVxuXHRzZXRTcG9ydD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PlxuXHRhY3RpdmU6IHN0cmluZyB8IG51bGxcblx0c2V0QWN0aXZlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj5cbn1cblxuY29uc3QgU3BvcnRzQ2F0ZWdvcnlJdGVtOiBGQzxTcG9ydHNDYXRlZ29yeUl0ZW1Qcm9wcz4gPSAoe1xuXHRpdGVtLFxuXHRhY3RpdmUsXG5cdHNldEFjdGl2ZSxcbn0pID0+IHtcblx0Y29uc3QgeyBjYXRlZ29yeTogc3BvcnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogc3BvcnRTdGF0ZSkgPT4gc3RhdGUuc3BvcnQpXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGNvbnN0IGNsaWNrSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldEFjdGl2ZShpdGVtLmNhdGVnb3J5KVxuXHRcdGRpc3BhdGNoKHNldENhdGVnb3J5KGl0ZW0uY2F0ZWdvcnkpKVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzcG9ydCcsIGl0ZW0uY2F0ZWdvcnkpXG5cblx0XHRyb3V0ZXIucHVzaChgLz9jYXRlZ29yeT0ke2l0ZW0uY2F0ZWdvcnl9YClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdGhyZWY9Jy8nXG5cdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5ibG9ja30gJHtcblx0XHRcdFx0YWN0aXZlID09PSBpdGVtLmNhdGVnb3J5ID8gc3R5bGVzLmFjdGl2ZSA6ICcnXG5cdFx0XHR9YH1cblx0XHRcdG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cblx0XHQ+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0c3JjPXtgL2ljb25zLyR7XG5cdFx0XHRcdFx0YWN0aXZlID09PSBpdGVtLmNhdGVnb3J5ID8gJ3doaXRlLScgKyBpdGVtLmltZyA6IGl0ZW0uaW1nXG5cdFx0XHRcdH0uc3ZnYH1cblx0XHRcdFx0YWx0PXtpdGVtLmltZ31cblx0XHRcdFx0d2lkdGg9ezI0fVxuXHRcdFx0XHRoZWlnaHQ9ezI0fVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cblx0XHQ8L0xpbms+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BvcnRzQ2F0ZWdvcnlJdGVtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0Q2F0ZWdvcnkiLCJTcG9ydHNDYXRlZ29yeUl0ZW0iLCJpdGVtIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2F0ZWdvcnkiLCJzcG9ydCIsInN0YXRlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImhyZWYiLCJjbGFzc05hbWUiLCJibG9jayIsIm9uQ2xpY2siLCJzcmMiLCJpbWciLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/odds/sportsCategory/SportsCategoryItem/SportsCategoryItem.tsx\n"));

/***/ })

});