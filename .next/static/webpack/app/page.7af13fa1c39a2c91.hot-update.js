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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SportItem/SportItem */ \"(app-pages-browser)/./app/components/SportItem/SportItem.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst API_KEY = \"zfme0kbYPxejRvJvTdv5gs0LfaadXMSF\";\nconst Page = ()=>{\n    _s();\n    const { status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.news);\n    // const dispatch = useDispatch<AppDispatch>()\n    // useEffect(() => {\n    // \tif (status === 'idle') {\n    // \t\tdispatch(fetchNews())\n    // \t}\n    // }, [status, dispatch])\n    // const router = useRouter()\n    // const searchParams = useSearchParams()\n    // const category = searchParams.get('category')\n    // const [sport, setSport] = useState(category ?? 'Soccer')\n    const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const fetchData = async (sport: string) => {\n    // \tsetEvent([])\n    // \tsetIsLoading(true)\n    // \ttry {\n    // \t\tconst response = await axios.get(\n    // \t\t\t'https://api.apilayer.com/odds/sports?all=false',\n    // \t\t\t{\n    // \t\t\t\theaders: {\n    // \t\t\t\t\tapikey: API_KEY,\n    // \t\t\t\t},\n    // \t\t\t}\n    // \t\t)\n    // \t\tconst result: EventType[] = response.data\n    // \t\tresult.forEach(item => {\n    // \t\t\tif (item.group === sport)\n    // \t\t\t\tsetEvent((prev: EventType[]) => [...prev, item])\n    // \t\t})\n    // \t} catch (error) {\n    // \t\tconsole.error('Error fetching data:', error)\n    // \t} finally {\n    // \t\tsetIsLoading(false)\n    // \t}\n    // }\n    // useEffect(() => {\n    // \tif (!sport) {\n    // \t\trouter.push('/?category=Soccer')\n    // \t}\n    // \tif (sport) {\n    // \t\tfetchData(sport)\n    // \t}\n    // }, [sport])\n    return(// <div className='mainWrapper'>\n    // \t<Header />\n    // \t<main className='main'>\n    // \t\t<div className='container'>\n    // \t\t\t<div className='main__wrapper'>\n    // \t\t\t\t<div className='left'>\n    // \t\t\t\t\t<SportsCategoryList setSport={setSport} />\n    // \t\t\t\t\t<TopNewsList />\n    // \t\t\t\t</div>\n    // \t\t\t\t<div className='right'>\n    // \t\t\t\t\t{isLoading && <Loader />}\n    // \t\t\t\t\t{event.length > 0 && <SportItem event={event} />}\n    // \t\t\t\t\t<NewsList />\n    // \t\t\t\t</div>\n    // \t\t\t</div>\n    // \t\t</div>\n    // \t</main>\n    // \t<Footer />\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: event.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            event: event\n        }, void 0, false, {\n            fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n            lineNumber: 105,\n            columnNumber: 32\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n        lineNumber: 105,\n        columnNumber: 3\n    }, undefined));\n};\n_s(Page, \"5qIDCwAwa/2DZUEd4BVf6NL9LnY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFNTTtBQUtGO0FBR2pCO0FBRXJDLE1BQU1LLFVBQVU7QUFXaEIsTUFBTUMsT0FBTzs7SUFDWixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFxQkEsTUFBTUMsSUFBSTtJQUMvRCw4Q0FBOEM7SUFFOUMsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLHlCQUF5QjtJQUV6Qiw2QkFBNkI7SUFFN0IseUNBQXlDO0lBQ3pDLGdEQUFnRDtJQUVoRCwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFjLEVBQUU7SUFDbEQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBRXRCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsdURBQXVEO0lBQ3ZELE9BQU87SUFDUCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsTUFBTTtJQUVOLDhDQUE4QztJQUU5Qyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHVEQUF1RDtJQUN2RCxPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLEtBQUs7SUFDTCxJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsS0FBSztJQUNMLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsS0FBSztJQUNMLGNBQWM7SUFFZCxPQUNDLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMseURBQXlEO0lBQ3pELG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLFNBQVM7a0JBQ1QsOERBQUNHLHVEQUFNQTtrQkFBRU0sTUFBTUksTUFBTSxHQUFHLG1CQUFLLDhEQUFDWix1RUFBU0E7WUFBQ1EsT0FBT0E7Ozs7Ozs7Ozs7O0FBRWpEO0dBN0VNSjs7UUFDY0gsb0RBQVdBOzs7S0FEekJHO0FBK0VOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvVUkvTG9hZGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBTcG9ydHNDYXRlZ29yeUxpc3QgZnJvbSAnLi9vZGRzL3Nwb3J0c0NhdGVnb3J5L1Nwb3J0c0NhdGVnb3J5TGlzdC9TcG9ydHNDYXRlZ29yeUxpc3QnXG5pbXBvcnQgU3BvcnRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9TcG9ydEl0ZW0vU3BvcnRJdGVtJ1xuaW1wb3J0IFRvcE5ld3NMaXN0IGZyb20gJy4vbmV3cy9Ub3BOZXdzTGlzdC9Ub3BOZXdzTGlzdCdcbmltcG9ydCBOZXdzTGlzdCBmcm9tICcuL25ld3MvTmV3c0xpc3QvTmV3c0xpc3QnXG5cbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIGZldGNoTmV3cyB9IGZyb20gJ0AvbGliL3NsaWNlcy9uZXdzU2xpY2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0cy9MYXlvdXQnXG5cbmNvbnN0IEFQSV9LRVkgPSAnemZtZTBrYllQeGVqUnZKdlRkdjVnczBMZmFhZFhNU0YnXG5cbmV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9IHtcblx0a2V5OiBzdHJpbmdcblx0Z3JvdXA6IHN0cmluZ1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0YWN0aXZlOiBib29sZWFuXG5cdGhhc19vdXRyaWdodHM6IGJvb2xlYW5cbn1cblxuY29uc3QgUGFnZSA9ICgpID0+IHtcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5uZXdzKVxuXHQvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXG5cblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcblx0Ly8gXHRpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcblx0Ly8gXHRcdGRpc3BhdGNoKGZldGNoTmV3cygpKVxuXHQvLyBcdH1cblx0Ly8gfSwgW3N0YXR1cywgZGlzcGF0Y2hdKVxuXG5cdC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Ly8gY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblx0Ly8gY29uc3QgY2F0ZWdvcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjYXRlZ29yeScpXG5cblx0Ly8gY29uc3QgW3Nwb3J0LCBzZXRTcG9ydF0gPSB1c2VTdGF0ZShjYXRlZ29yeSA/PyAnU29jY2VyJylcblx0Y29uc3QgW2V2ZW50LCBzZXRFdmVudF0gPSB1c2VTdGF0ZTxFdmVudFR5cGVbXT4oW10pXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHQvLyBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoc3BvcnQ6IHN0cmluZykgPT4ge1xuXHQvLyBcdHNldEV2ZW50KFtdKVxuXHQvLyBcdHNldElzTG9hZGluZyh0cnVlKVxuXG5cdC8vIFx0dHJ5IHtcblx0Ly8gXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuXHQvLyBcdFx0XHQnaHR0cHM6Ly9hcGkuYXBpbGF5ZXIuY29tL29kZHMvc3BvcnRzP2FsbD1mYWxzZScsXG5cdC8vIFx0XHRcdHtcblx0Ly8gXHRcdFx0XHRoZWFkZXJzOiB7XG5cdC8vIFx0XHRcdFx0XHRhcGlrZXk6IEFQSV9LRVksXG5cdC8vIFx0XHRcdFx0fSxcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0KVxuXG5cdC8vIFx0XHRjb25zdCByZXN1bHQ6IEV2ZW50VHlwZVtdID0gcmVzcG9uc2UuZGF0YVxuXG5cdC8vIFx0XHRyZXN1bHQuZm9yRWFjaChpdGVtID0+IHtcblx0Ly8gXHRcdFx0aWYgKGl0ZW0uZ3JvdXAgPT09IHNwb3J0KVxuXHQvLyBcdFx0XHRcdHNldEV2ZW50KChwcmV2OiBFdmVudFR5cGVbXSkgPT4gWy4uLnByZXYsIGl0ZW1dKVxuXHQvLyBcdFx0fSlcblx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xuXHQvLyBcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcilcblx0Ly8gXHR9IGZpbmFsbHkge1xuXHQvLyBcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vIFx0aWYgKCFzcG9ydCkge1xuXHQvLyBcdFx0cm91dGVyLnB1c2goJy8/Y2F0ZWdvcnk9U29jY2VyJylcblx0Ly8gXHR9XG5cdC8vIFx0aWYgKHNwb3J0KSB7XG5cdC8vIFx0XHRmZXRjaERhdGEoc3BvcnQpXG5cdC8vIFx0fVxuXHQvLyB9LCBbc3BvcnRdKVxuXG5cdHJldHVybiAoXG5cdFx0Ly8gPGRpdiBjbGFzc05hbWU9J21haW5XcmFwcGVyJz5cblx0XHQvLyBcdDxIZWFkZXIgLz5cblx0XHQvLyBcdDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG5cdFx0Ly8gXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdC8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluX193cmFwcGVyJz5cblx0XHQvLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cblx0XHQvLyBcdFx0XHRcdFx0PFNwb3J0c0NhdGVnb3J5TGlzdCBzZXRTcG9ydD17c2V0U3BvcnR9IC8+XG5cdFx0Ly8gXHRcdFx0XHRcdDxUb3BOZXdzTGlzdCAvPlxuXHRcdC8vIFx0XHRcdFx0PC9kaXY+XG5cdFx0Ly8gXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmlnaHQnPlxuXHRcdC8vIFx0XHRcdFx0XHR7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG5cdFx0Ly8gXHRcdFx0XHRcdHtldmVudC5sZW5ndGggPiAwICYmIDxTcG9ydEl0ZW0gZXZlbnQ9e2V2ZW50fSAvPn1cblx0XHQvLyBcdFx0XHRcdFx0PE5ld3NMaXN0IC8+XG5cdFx0Ly8gXHRcdFx0XHQ8L2Rpdj5cblx0XHQvLyBcdFx0XHQ8L2Rpdj5cblx0XHQvLyBcdFx0PC9kaXY+XG5cdFx0Ly8gXHQ8L21haW4+XG5cdFx0Ly8gXHQ8Rm9vdGVyIC8+XG5cdFx0Ly8gPC9kaXY+XG5cdFx0PExheW91dD57ZXZlbnQubGVuZ3RoID4gMCAmJiA8U3BvcnRJdGVtIGV2ZW50PXtldmVudH0gLz59PC9MYXlvdXQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTcG9ydEl0ZW0iLCJ1c2VTZWxlY3RvciIsIkxheW91dCIsIkFQSV9LRVkiLCJQYWdlIiwic3RhdHVzIiwic3RhdGUiLCJuZXdzIiwiZXZlbnQiLCJzZXRFdmVudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});