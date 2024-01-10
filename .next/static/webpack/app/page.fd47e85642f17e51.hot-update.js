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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SportItem/SportItem */ \"(app-pages-browser)/./app/components/SportItem/SportItem.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UI/Loader */ \"(app-pages-browser)/./app/components/UI/Loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst API_KEY = \"zfme0kbYPxejRvJvTdv5gs0LfaadXMSF\";\nconst Page = ()=>{\n    _s();\n    const { status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.news);\n    const { category: sport } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.sport);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async (sport)=>{\n        setEvent([]);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://api.apilayer.com/odds/sports?all=false\", {\n                headers: {\n                    apikey: API_KEY\n                }\n            });\n            const result = response.data;\n            result.forEach((item)=>{\n                if (item.group === sport) setEvent((prev)=>[\n                        ...prev,\n                        item\n                    ]);\n            });\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{}\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storageSport = localStorage.getItem(\"sport\");\n        if (storageSport) {\n            fetchData(storageSport);\n        }\n    }, [\n        sport\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Категории спорта\"\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, undefined),\n            !event.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 22\n            }, undefined),\n            event.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                event: event\n            }, void 0, false, {\n                fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Page, \"uyqx7kToI9CmdEHQII6FKPNc244=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUN6QjtBQUMrQjtBQUNiO0FBQ1c7QUFFUztBQUMxQjtBQUVNO0FBRTNDLE1BQU1XLFVBQVVDLGtDQUFvQztBQVdwRCxNQUFNRyxPQUFPOztJQUNaLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdULHdEQUFXQSxDQUFDLENBQUNVLFFBQXFCQSxNQUFNQyxJQUFJO0lBQy9ELE1BQU0sRUFBRUMsVUFBVUMsS0FBSyxFQUFFLEdBQUdiLHdEQUFXQSxDQUFDLENBQUNVLFFBQXNCQSxNQUFNRyxLQUFLO0lBRTFFLE1BQU1DLFdBQVdmLHdEQUFXQTtJQUU1QkwsZ0RBQVNBLENBQUM7UUFDVCxJQUFJZSxXQUFXLFFBQVE7WUFDdEJLLFNBQVNiLGdFQUFTQTtRQUNuQjtJQUNELEdBQUc7UUFBQ1E7UUFBUUs7S0FBUztJQUVyQixNQUFNQyxTQUFTakIsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFjLEVBQUU7SUFFbEQsTUFBTXVCLFlBQVksT0FBT0w7UUFDeEJJLFNBQVMsRUFBRTtRQUVYLElBQUk7WUFDSCxNQUFNRSxXQUFXLE1BQU12Qiw2Q0FBS0EsQ0FBQ3dCLEdBQUcsQ0FDL0Isa0RBQ0E7Z0JBQ0NDLFNBQVM7b0JBQ1JDLFFBQVFsQjtnQkFDVDtZQUNEO1lBR0QsTUFBTW1CLFNBQXNCSixTQUFTSyxJQUFJO1lBRXpDRCxPQUFPRSxPQUFPLENBQUNDLENBQUFBO2dCQUNkLElBQUlBLEtBQUtDLEtBQUssS0FBS2QsT0FDbEJJLFNBQVMsQ0FBQ1csT0FBc0I7MkJBQUlBO3dCQUFNRjtxQkFBSztZQUNqRDtRQUNELEVBQUUsT0FBT0csT0FBTztZQUNmQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN2QyxTQUFVLENBQ1Y7SUFDRDtJQUVBbkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNcUMsZUFBZUMsYUFBYUMsT0FBTyxDQUFDO1FBRTFDLElBQUlGLGNBQWM7WUFDakJiLFVBQVVhO1FBQ1g7SUFDRCxHQUFHO1FBQUNsQjtLQUFNO0lBRVYscUJBQ0MsOERBQUNYLHVEQUFNQTs7MEJBQ04sOERBQUNnQzswQkFBRzs7Ozs7O1lBQ0gsQ0FBQ2xCLE1BQU1tQixNQUFNLGtCQUFJLDhEQUFDaEMsNkRBQU1BOzs7OztZQUN4QmEsTUFBTW1CLE1BQU0sR0FBRyxtQkFBSyw4REFBQ3RDLHVFQUFTQTtnQkFBQ21CLE9BQU9BOzs7Ozs7Ozs7Ozs7QUFHMUM7R0F4RE1SOztRQUNjUixvREFBV0E7UUFDRkEsb0RBQVdBO1FBRXRCRCxvREFBV0E7UUFRYkQsc0RBQVNBOzs7S0FabkJVO0FBMEROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFNwb3J0SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvU3BvcnRJdGVtL1Nwb3J0SXRlbSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBzcG9ydFN0YXRlIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBmZXRjaE5ld3MgfSBmcm9tICdAL2xpYi9zbGljZXMvbmV3c1NsaWNlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dHMvTGF5b3V0J1xuaW1wb3J0IGhhbmRsZXIgZnJvbSAnQC9saWIvb3BlbmFpJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvVUkvTG9hZGVyJ1xuXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT0REU19BUElfS0VZXG5cbmV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9IHtcblx0a2V5OiBzdHJpbmdcblx0Z3JvdXA6IHN0cmluZ1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0YWN0aXZlOiBib29sZWFuXG5cdGhhc19vdXRyaWdodHM6IGJvb2xlYW5cbn1cblxuY29uc3QgUGFnZSA9ICgpID0+IHtcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzKVxuXHRjb25zdCB7IGNhdGVnb3J5OiBzcG9ydCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBzcG9ydFN0YXRlKSA9PiBzdGF0ZS5zcG9ydClcblxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcblx0XHRcdGRpc3BhdGNoKGZldGNoTmV3cygpKVxuXHRcdH1cblx0fSwgW3N0YXR1cywgZGlzcGF0Y2hdKVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3QgW2V2ZW50LCBzZXRFdmVudF0gPSB1c2VTdGF0ZTxFdmVudFR5cGVbXT4oW10pXG5cblx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHNwb3J0OiBzdHJpbmcpID0+IHtcblx0XHRzZXRFdmVudChbXSlcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcblx0XHRcdFx0J2h0dHBzOi8vYXBpLmFwaWxheWVyLmNvbS9vZGRzL3Nwb3J0cz9hbGw9ZmFsc2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdClcblxuXHRcdFx0Y29uc3QgcmVzdWx0OiBFdmVudFR5cGVbXSA9IHJlc3BvbnNlLmRhdGFcblxuXHRcdFx0cmVzdWx0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLmdyb3VwID09PSBzcG9ydClcblx0XHRcdFx0XHRzZXRFdmVudCgocHJldjogRXZlbnRUeXBlW10pID0+IFsuLi5wcmV2LCBpdGVtXSlcblx0XHRcdH0pXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHN0b3JhZ2VTcG9ydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzcG9ydCcpXG5cblx0XHRpZiAoc3RvcmFnZVNwb3J0KSB7XG5cdFx0XHRmZXRjaERhdGEoc3RvcmFnZVNwb3J0KVxuXHRcdH1cblx0fSwgW3Nwb3J0XSlcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8aDI+0JrQsNGC0LXQs9C+0YDQuNC4INGB0L/QvtGA0YLQsDwvaDI+XG5cdFx0XHR7IWV2ZW50Lmxlbmd0aCAmJiA8TG9hZGVyIC8+fVxuXHRcdFx0e2V2ZW50Lmxlbmd0aCA+IDAgJiYgPFNwb3J0SXRlbSBldmVudD17ZXZlbnR9IC8+fVxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTcG9ydEl0ZW0iLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hOZXdzIiwiTGF5b3V0IiwiTG9hZGVyIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19PRERTX0FQSV9LRVkiLCJQYWdlIiwic3RhdHVzIiwic3RhdGUiLCJuZXdzIiwiY2F0ZWdvcnkiLCJzcG9ydCIsImRpc3BhdGNoIiwicm91dGVyIiwiZXZlbnQiLCJzZXRFdmVudCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsImFwaWtleSIsInJlc3VsdCIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImdyb3VwIiwicHJldiIsImVycm9yIiwiY29uc29sZSIsInN0b3JhZ2VTcG9ydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoMiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});