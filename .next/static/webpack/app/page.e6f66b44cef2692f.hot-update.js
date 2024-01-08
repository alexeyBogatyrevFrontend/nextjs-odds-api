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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SportItem/SportItem */ \"(app-pages-browser)/./app/components/SportItem/SportItem.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/slices/newsSlice */ \"(app-pages-browser)/./lib/slices/newsSlice.ts\");\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/Layout */ \"(app-pages-browser)/./app/layouts/Layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst API_KEY = \"zfme0kbYPxejRvJvTdv5gs0LfaadXMSF\";\nconst Page = ()=>{\n    _s();\n    const { status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.news);\n    const { category: sport } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.sport);\n    console.log(sport);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"idle\") {\n            dispatch((0,_lib_slices_newsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchNews)());\n        }\n    }, [\n        status,\n        dispatch\n    ]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const category = searchParams.get(\"category\");\n    // const [sport, setSport] = useState(category ?? 'Soccer')\n    const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchData = async (sport)=>{\n        setEvent([]);\n        setIsLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://api.apilayer.com/odds/sports?all=false\", {\n                headers: {\n                    apikey: API_KEY\n                }\n            });\n            const result = response.data;\n            result.forEach((item)=>{\n                if (item.group === sport) setEvent((prev)=>[\n                        ...prev,\n                        item\n                    ]);\n            });\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!sport) {\n            router.push(\"/?category=Soccer\");\n        }\n        if (sport) {\n            fetchData(sport);\n        }\n    }, [\n        sport\n    ]);\n    return(// <div className='mainWrapper'>\n    // \t<Header />\n    // \t<main className='main'>\n    // \t\t<div className='container'>\n    // \t\t\t<div className='main__wrapper'>\n    // \t\t\t\t<div className='left'>\n    // \t\t\t\t\t<SportsCategoryList setSport={setSport} />\n    // \t\t\t\t\t<TopNewsList />\n    // \t\t\t\t</div>\n    // \t\t\t\t<div className='right'>\n    // \t\t\t\t\t{isLoading && <Loader />}\n    // \t\t\t\t\t{event.length > 0 && <SportItem event={event} />}\n    // \t\t\t\t\t<NewsList />\n    // \t\t\t\t</div>\n    // \t\t\t</div>\n    // \t\t</div>\n    // \t</main>\n    // \t<Footer />\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: event.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SportItem_SportItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            event: event\n        }, void 0, false, {\n            fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n            lineNumber: 111,\n            columnNumber: 32\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bogatyrev/pc/work/web/2024/big/odds/nextjs-odds-api/app/page.tsx\",\n        lineNumber: 111,\n        columnNumber: 3\n    }, undefined));\n};\n_s(Page, \"C5nYNy++KeNLX0tg30+O92/Jal0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ3pCO0FBTytCO0FBSUk7QUFDTjtBQUVTO0FBQzFCO0FBRXJDLE1BQU1XLFVBQVU7QUFXaEIsTUFBTUMsT0FBTzs7SUFDWixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFxQkEsTUFBTUMsSUFBSTtJQUMvRCxNQUFNLEVBQUVDLFVBQVVDLEtBQUssRUFBRSxHQUFHVCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFzQkEsTUFBTUcsS0FBSztJQUUxRUMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLE1BQU1HLFdBQVdiLHdEQUFXQTtJQUU1Qk4sZ0RBQVNBLENBQUM7UUFDVCxJQUFJWSxXQUFXLFFBQVE7WUFDdEJPLFNBQVNYLGdFQUFTQTtRQUNuQjtJQUNELEdBQUc7UUFBQ0k7UUFBUU87S0FBUztJQUVyQixNQUFNQyxTQUFTaEIsMERBQVNBO0lBRXhCLE1BQU1pQixlQUFlaEIsZ0VBQWVBO0lBQ3BDLE1BQU1VLFdBQVdNLGFBQWFDLEdBQUcsQ0FBQztJQUVsQywyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xELE1BQU0sQ0FBQ3dCLFdBQVdDLGFBQWEsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0wQixZQUFZLE9BQU9YO1FBQ3hCUSxTQUFTLEVBQUU7UUFDWEUsYUFBYTtRQUViLElBQUk7WUFDSCxNQUFNRSxXQUFXLE1BQU0xQiw2Q0FBS0EsQ0FBQ29CLEdBQUcsQ0FDL0Isa0RBQ0E7Z0JBQ0NPLFNBQVM7b0JBQ1JDLFFBQVFwQjtnQkFDVDtZQUNEO1lBR0QsTUFBTXFCLFNBQXNCSCxTQUFTSSxJQUFJO1lBRXpDRCxPQUFPRSxPQUFPLENBQUNDLENBQUFBO2dCQUNkLElBQUlBLEtBQUtDLEtBQUssS0FBS25CLE9BQ2xCUSxTQUFTLENBQUNZLE9BQXNCOzJCQUFJQTt3QkFBTUY7cUJBQUs7WUFDakQ7UUFDRCxFQUFFLE9BQU9HLE9BQU87WUFDZnBCLFFBQVFvQixLQUFLLENBQUMsd0JBQXdCQTtRQUN2QyxTQUFVO1lBQ1RYLGFBQWE7UUFDZDtJQUNEO0lBRUExQixnREFBU0EsQ0FBQztRQUNULElBQUksQ0FBQ2dCLE9BQU87WUFDWEksT0FBT2tCLElBQUksQ0FBQztRQUNiO1FBQ0EsSUFBSXRCLE9BQU87WUFDVlcsVUFBVVg7UUFDWDtJQUNELEdBQUc7UUFBQ0E7S0FBTTtJQUVWLE9BQ0MsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0Isa0RBQWtEO0lBQ2xELHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyx5REFBeUQ7SUFDekQsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsU0FBUztrQkFDVCw4REFBQ1AsdURBQU1BO2tCQUFFYyxNQUFNZ0IsTUFBTSxHQUFHLG1CQUFLLDhEQUFDcEMsdUVBQVNBO1lBQUNvQixPQUFPQTs7Ozs7Ozs7Ozs7QUFFakQ7R0FqRk1aOztRQUNjSixvREFBV0E7UUFDRkEsb0RBQVdBO1FBSXRCRCxvREFBV0E7UUFRYkYsc0RBQVNBO1FBRUhDLDREQUFlQTs7O0tBaEIvQk07QUFtRk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9VSS9Mb2FkZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IFNwb3J0c0NhdGVnb3J5TGlzdCwge1xuXHRzcG9ydHNDYXRlZ29yeVR5cGUsXG59IGZyb20gJy4vb2Rkcy9zcG9ydHNDYXRlZ29yeS9TcG9ydHNDYXRlZ29yeUxpc3QvU3BvcnRzQ2F0ZWdvcnlMaXN0J1xuaW1wb3J0IFNwb3J0SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvU3BvcnRJdGVtL1Nwb3J0SXRlbSdcbmltcG9ydCBUb3BOZXdzTGlzdCBmcm9tICcuL25ld3MvVG9wTmV3c0xpc3QvVG9wTmV3c0xpc3QnXG5pbXBvcnQgTmV3c0xpc3QgZnJvbSAnLi9uZXdzL05ld3NMaXN0L05ld3NMaXN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBzcG9ydFN0YXRlIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBmZXRjaE5ld3MgfSBmcm9tICdAL2xpYi9zbGljZXMvbmV3c1NsaWNlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dHMvTGF5b3V0J1xuXG5jb25zdCBBUElfS0VZID0gJ3pmbWUwa2JZUHhlalJ2SnZUZHY1Z3MwTGZhYWRYTVNGJ1xuXG5leHBvcnQgdHlwZSBFdmVudFR5cGUgPSB7XG5cdGtleTogc3RyaW5nXG5cdGdyb3VwOiBzdHJpbmdcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGFjdGl2ZTogYm9vbGVhblxuXHRoYXNfb3V0cmlnaHRzOiBib29sZWFuXG59XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUubmV3cylcblx0Y29uc3QgeyBjYXRlZ29yeTogc3BvcnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogc3BvcnRTdGF0ZSkgPT4gc3RhdGUuc3BvcnQpXG5cblx0Y29uc29sZS5sb2coc3BvcnQpXG5cblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG5cdFx0XHRkaXNwYXRjaChmZXRjaE5ld3MoKSlcblx0XHR9XG5cdH0sIFtzdGF0dXMsIGRpc3BhdGNoXSlcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG5cdGNvbnN0IGNhdGVnb3J5ID0gc2VhcmNoUGFyYW1zLmdldCgnY2F0ZWdvcnknKVxuXG5cdC8vIGNvbnN0IFtzcG9ydCwgc2V0U3BvcnRdID0gdXNlU3RhdGUoY2F0ZWdvcnkgPz8gJ1NvY2NlcicpXG5cdGNvbnN0IFtldmVudCwgc2V0RXZlbnRdID0gdXNlU3RhdGU8RXZlbnRUeXBlW10+KFtdKVxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHNwb3J0OiBzdHJpbmcpID0+IHtcblx0XHRzZXRFdmVudChbXSlcblx0XHRzZXRJc0xvYWRpbmcodHJ1ZSlcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcblx0XHRcdFx0J2h0dHBzOi8vYXBpLmFwaWxheWVyLmNvbS9vZGRzL3Nwb3J0cz9hbGw9ZmFsc2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdClcblxuXHRcdFx0Y29uc3QgcmVzdWx0OiBFdmVudFR5cGVbXSA9IHJlc3BvbnNlLmRhdGFcblxuXHRcdFx0cmVzdWx0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLmdyb3VwID09PSBzcG9ydClcblx0XHRcdFx0XHRzZXRFdmVudCgocHJldjogRXZlbnRUeXBlW10pID0+IFsuLi5wcmV2LCBpdGVtXSlcblx0XHRcdH0pXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldElzTG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghc3BvcnQpIHtcblx0XHRcdHJvdXRlci5wdXNoKCcvP2NhdGVnb3J5PVNvY2NlcicpXG5cdFx0fVxuXHRcdGlmIChzcG9ydCkge1xuXHRcdFx0ZmV0Y2hEYXRhKHNwb3J0KVxuXHRcdH1cblx0fSwgW3Nwb3J0XSlcblxuXHRyZXR1cm4gKFxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lPSdtYWluV3JhcHBlcic+XG5cdFx0Ly8gXHQ8SGVhZGVyIC8+XG5cdFx0Ly8gXHQ8bWFpbiBjbGFzc05hbWU9J21haW4nPlxuXHRcdC8vIFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cblx0XHQvLyBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbl9fd3JhcHBlcic+XG5cdFx0Ly8gXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGVmdCc+XG5cdFx0Ly8gXHRcdFx0XHRcdDxTcG9ydHNDYXRlZ29yeUxpc3Qgc2V0U3BvcnQ9e3NldFNwb3J0fSAvPlxuXHRcdC8vIFx0XHRcdFx0XHQ8VG9wTmV3c0xpc3QgLz5cblx0XHQvLyBcdFx0XHRcdDwvZGl2PlxuXHRcdC8vIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cblx0XHQvLyBcdFx0XHRcdFx0e2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuXHRcdC8vIFx0XHRcdFx0XHR7ZXZlbnQubGVuZ3RoID4gMCAmJiA8U3BvcnRJdGVtIGV2ZW50PXtldmVudH0gLz59XG5cdFx0Ly8gXHRcdFx0XHRcdDxOZXdzTGlzdCAvPlxuXHRcdC8vIFx0XHRcdFx0PC9kaXY+XG5cdFx0Ly8gXHRcdFx0PC9kaXY+XG5cdFx0Ly8gXHRcdDwvZGl2PlxuXHRcdC8vIFx0PC9tYWluPlxuXHRcdC8vIFx0PEZvb3RlciAvPlxuXHRcdC8vIDwvZGl2PlxuXHRcdDxMYXlvdXQ+e2V2ZW50Lmxlbmd0aCA+IDAgJiYgPFNwb3J0SXRlbSBldmVudD17ZXZlbnR9IC8+fTwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTcG9ydEl0ZW0iLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hOZXdzIiwiTGF5b3V0IiwiQVBJX0tFWSIsIlBhZ2UiLCJzdGF0dXMiLCJzdGF0ZSIsIm5ld3MiLCJjYXRlZ29yeSIsInNwb3J0IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZXZlbnQiLCJzZXRFdmVudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiaGVhZGVycyIsImFwaWtleSIsInJlc3VsdCIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImdyb3VwIiwicHJldiIsImVycm9yIiwicHVzaCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});