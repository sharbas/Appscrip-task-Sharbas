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

/***/ "(app-pages-browser)/./components/Products.jsx":
/*!*********************************!*\
  !*** ./components/Products.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./components/ProductCard.jsx\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _styles_ProductsPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ProductsPage.css */ \"(app-pages-browser)/./styles/ProductsPage.css\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBar */ \"(app-pages-browser)/./components/SideBar.jsx\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmark_react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmark!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isSidebarVisible, setSidebarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sortVisible, setSortVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedSort, setSelectedSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"RECOMMENDED\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://fakestoreapi.com/products\");\n                setProducts(response.data);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const sortValues = [\n        \"RECOMMENDED\",\n        \"NEWEST FIRST\",\n        \"POPULAR\",\n        \"PRICE:HIGH TO LOW\",\n        \"PRICE:LOW TO HIGH\"\n    ];\n    const handleToggleSidebar = ()=>{\n        setSidebarVisible(!isSidebarVisible);\n    };\n    const handleSortToggle = ()=>{\n        setSortVisible(!sortVisible);\n    };\n    const handleSortSelection = (data)=>{\n        setSelectedSort(data);\n        setSortVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productsPage text-slate-900\",\n        st: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"filterHeader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex md:w-3/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: \"3555 ITEMS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex mx-4\",\n                                onClick: handleToggleSidebar,\n                                children: [\n                                    isSidebarVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowBack, {\n                                        className: \"mt-1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {\n                                        className: \"mt-1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: isSidebarVisible ? \"HIDE FILTER\" : \"SHOW FILTER\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden w-3/6 text-center border-r border-gray-400\",\n                        onClick: handleToggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-bold\",\n                            children: \"FILTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: handleSortToggle,\n                                className: \"text-sm md:text-base font-bold\",\n                                children: selectedSort\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {\n                                className: \"mt-1\",\n                                onClick: handleSortToggle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            sortVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow rounded-sm bg-white h-52 w-44 lg:mr-12\",\n                style: {\n                    position: \"absolute\",\n                    right: 10,\n                    top: \"5vw\",\n                    zIndex: 5\n                },\n                children: sortValues.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex m-2 my-4 text-sm justify-end items-end\",\n                        onClick: ()=>handleSortSelection(data),\n                        children: [\n                            selectedSort === data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmark_react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoCheckmark, {\n                                className: \"w-4 h-4 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-auto\",\n                                style: {\n                                    fontWeight: selectedSort === data ? \"bold\" : \"normal\"\n                                },\n                                children: data\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 77,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex w-full h-full\",\n                children: [\n                    isSidebarVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-2/6 h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-\".concat(isSidebarVisible ? \"4/6\" : \"full\", \" flex flex-wrap justify-between\"),\n                        children: products.length > 0 && products.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"hhzS4IodG0iJXUevgylT33Yi/DM=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n{}var _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4QztBQUNQO0FBQ3dDO0FBQ3REO0FBQ1U7QUFDSjtBQUNZO0FBRTNDLFNBQVNVOztJQUVMLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3hDLE1BQU0sQ0FBQ1csa0JBQWlCQyxrQkFBa0IsR0FBQ1osK0NBQVFBLENBQUM7SUFDcEQsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUNkLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUNoQiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0IsWUFBVTtZQUNaLElBQUc7Z0JBQ0MsTUFBTUMsV0FBUyxNQUFNYiw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFDO2dCQUMvQlQsWUFBWVEsU0FBU0UsSUFBSTtZQUM3QixFQUFDLE9BQU1DLE9BQU07Z0JBQ1RDLFFBQVFELEtBQUssQ0FBQyw0QkFBMkJBO1lBQzdDO1FBQ0o7UUFDQUo7SUFDSixHQUFFLEVBQUU7SUFFSixNQUFNTSxhQUFXO1FBQ2I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBRUQsTUFBTUMsc0JBQW9CO1FBQ3RCWixrQkFBa0IsQ0FBQ0Q7SUFDdkI7SUFFQSxNQUFNYyxtQkFBaUI7UUFDbkJYLGVBQWUsQ0FBQ0Q7SUFDcEI7SUFFQSxNQUFNYSxzQkFBb0IsQ0FBQ047UUFDdkJKLGdCQUFnQkk7UUFDaEJOLGVBQWU7SUFDbkI7SUFDRixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtRQUE4QkMsRUFBRTs7MEJBQzFDLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBRVosOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQVk7Ozs7OzswQ0FDekIsOERBQUNHO2dDQUFPSCxXQUFVO2dDQUFZSSxTQUFTUjs7b0NBQ3RDYixpQ0FDRyw4REFBQ1QsaUlBQWNBO3dDQUFDMEIsV0FBVTs7Ozs7NkRBRTFCLDhEQUFDeEIsb0lBQWlCQTt3Q0FBQ3dCLFdBQVU7Ozs7OztrREFFakMsOERBQUNLO2tEQUFNdEIsbUJBQWlCLGdCQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzFDLDhEQUFDZ0I7d0JBQUlDLFdBQVU7d0JBQXVESSxTQUFTUjtrQ0FDM0UsNEVBQUNNOzRCQUFFRixXQUFVO3NDQUFvQjs7Ozs7Ozs7Ozs7a0NBRXJDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNFO2dDQUFFRSxTQUFTUDtnQ0FBa0JHLFdBQVU7MENBQWtDYjs7Ozs7OzBDQUMxRSw4REFBQ1osaUlBQWNBO2dDQUFDeUIsV0FBVTtnQ0FBT0ksU0FBU1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtoRFosNkJBQ0EsOERBQUNjO2dCQUFJQyxXQUFVO2dCQUFnRE0sT0FBTztvQkFBQ0MsVUFBUztvQkFBV0MsT0FBTTtvQkFBR0MsS0FBSTtvQkFBT0MsUUFBTztnQkFBQzswQkFDdEhmLFdBQVdnQixHQUFHLENBQUMsQ0FBQ25CLE1BQUtvQixzQkFDcEIsOERBQUNiO3dCQUFJQyxXQUFVO3dCQUE4Q0ksU0FBUyxJQUFJTixvQkFBb0JOOzs0QkFDekZMLGlCQUFlSyxzQkFDWiw4REFBQ2IsMkZBQVdBO2dDQUFDcUIsV0FBVTs7Ozs7OzBDQUUzQiw4REFBQ0U7Z0NBQUVGLFdBQVU7Z0NBQVVNLE9BQU87b0NBQUNPLFlBQVcxQixpQkFBZUssT0FBSyxTQUFPO2dDQUFROzBDQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNGLDhEQUFDTztnQkFBSUMsV0FBVTs7b0JBRVpqQixrQ0FDRyw4REFBQ2dCO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDdEIsZ0RBQU9BOzs7Ozs7Ozs7O2tDQUdoQiw4REFBQ3FCO3dCQUFJQyxXQUFXLFFBQXNDLE9BQTlCakIsbUJBQWlCLFFBQU0sUUFBTztrQ0FFbkRGLFNBQVNpQyxNQUFNLEdBQUMsS0FBS2pDLFNBQVM4QixHQUFHLENBQUMsQ0FBQ25CLE1BQUtvQixzQkFDdkMsOERBQUN2QyxvREFBV0E7Z0NBQWFtQixNQUFNQTsrQkFBYm9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0dBOUZTaEM7S0FBQUE7QUFnR1QsK0RBQWVBLFFBQVFBLEVBQUE7QUFHcEIsQ0FZa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qc3g/OGZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZCdcclxuaW1wb3J0IHtJb0lvc0Fycm93QmFjaywgSW9Jb3NBcnJvd0Rvd24sSW9Jb3NBcnJvd0ZvcndhcmR9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9Qcm9kdWN0c1BhZ2UuY3NzXCJcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9TaWRlQmFyJ1xyXG5pbXBvcnQge0lvQ2hlY2ttYXJrfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCJcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0cyxzZXRQcm9kdWN0c109dXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaXNTaWRlYmFyVmlzaWJsZSxzZXRTaWRlYmFyVmlzaWJsZV09dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc29ydFZpc2libGUsIHNldFNvcnRWaXNpYmxlXT11c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZFNvcnQsIHNldFNlbGVjdGVkU29ydF09dXNlU3RhdGUoXCJSRUNPTU1FTkRFRFwiKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YT1hc3luYygpPT57XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKVxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0czpcIixlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBzb3J0VmFsdWVzPVtcclxuICAgICAgICBcIlJFQ09NTUVOREVEXCIsXHJcbiAgICAgICAgXCJORVdFU1QgRklSU1RcIixcclxuICAgICAgICBcIlBPUFVMQVJcIixcclxuICAgICAgICBcIlBSSUNFOkhJR0ggVE8gTE9XXCIsXHJcbiAgICAgICAgXCJQUklDRTpMT1cgVE8gSElHSFwiLFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZVNpZGViYXI9KCk9PntcclxuICAgICAgICBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTb3J0VG9nZ2xlPSgpPT57XHJcbiAgICAgICAgc2V0U29ydFZpc2libGUoIXNvcnRWaXNpYmxlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNvcnRTZWxlY3Rpb249KGRhdGEpPT57XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRTb3J0KGRhdGEpXHJcbiAgICAgICAgc2V0U29ydFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0c1BhZ2UgdGV4dC1zbGF0ZS05MDAnIHN0PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVySGVhZGVyJz5cclxuICAgICAgICAgICAgey8qIGZpbHRlciBidXR0b24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCBtZDp3LTMvNic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+MzU1NSBJVEVNUzwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IG14LTQnIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAge2lzU2lkZWJhclZpc2libGU/IChcclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0JhY2sgY2xhc3NOYW1lPSdtdC0xJy8+XHJcbiAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgY2xhc3NOYW1lPSdtdC0xJy8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2lzU2lkZWJhclZpc2libGU/XCJISURFIEZJTFRFUlwiOlwiU0hPVyBGSUxURVJcIn08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogbW9iaWxlIHZpZXcgZmlsdGVyIGJ1dHRvbiAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpoaWRkZW4gdy0zLzYgdGV4dC1jZW50ZXIgYm9yZGVyLXIgYm9yZGVyLWdyYXktNDAwJyBvbkNsaWNrPXtoYW5kbGVUb2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LWJvbGQnPkZJTFRFUjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZVNvcnRUb2dnbGV9IGNsYXNzTmFtZT0ndGV4dC1zbSBtZDp0ZXh0LWJhc2UgZm9udC1ib2xkJz57c2VsZWN0ZWRTb3J0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biBjbGFzc05hbWU9J210LTEnIG9uQ2xpY2s9e2hhbmRsZVNvcnRUb2dnbGV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgey8qIHNvcnQgZHJvcCBkb3duICAqL31cclxuICAgICAgICAge3NvcnRWaXNpYmxlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3cgcm91bmRlZC1zbSBiZy13aGl0ZSBoLTUyIHctNDQgbGc6bXItMTInIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxyaWdodDoxMCx0b3A6XCI1dndcIiwgekluZGV4OjV9fT4gXHJcbiAgICAgICAgICB7c29ydFZhbHVlcy5tYXAoKGRhdGEsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG0tMiBteS00IHRleHQtc20ganVzdGlmeS1lbmQgaXRlbXMtZW5kJyBvbkNsaWNrPXsoKT0+aGFuZGxlU29ydFNlbGVjdGlvbihkYXRhKX0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTb3J0PT09ZGF0YSAmJihcclxuICAgICAgICAgICAgICAgICAgICA8SW9DaGVja21hcmsgY2xhc3NOYW1lPSd3LTQgaC00IGZvbnQtYm9sZCcgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21sLWF1dG8nIHN0eWxlPXt7Zm9udFdlaWdodDpzZWxlY3RlZFNvcnQ9PT1kYXRhP1wiYm9sZFwiOlwibm9ybWFsXCJ9fT57ZGF0YX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXggdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgey8qIHNpZGUgYmFyIHZpc2libGUgICovfVxyXG4gICAgICAgIHtpc1NpZGViYXJWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNiBoLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWQ6dy0ke2lzU2lkZWJhclZpc2libGU/XCI0LzZcIjpcImZ1bGxcIn0gZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuYH0+XHJcbiAgICAgICAgey8qIHByb2R1Y3QgbGlzdGluZyAgKi99XHJcbiAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoPjAgJiYgcHJvZHVjdHMubWFwKChkYXRhLGluZGV4KT0+KFxyXG4gICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtpbmRleH0gZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xyXG5cclxuXHJcbiAgIHsvKiA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPiAqL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RDYXJkIiwiSW9Jb3NBcnJvd0JhY2siLCJJb0lvc0Fycm93RG93biIsIklvSW9zQXJyb3dGb3J3YXJkIiwiYXhpb3MiLCJTaWRlQmFyIiwiSW9DaGVja21hcmsiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJzb3J0VmlzaWJsZSIsInNldFNvcnRWaXNpYmxlIiwic2VsZWN0ZWRTb3J0Iiwic2V0U2VsZWN0ZWRTb3J0IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwic29ydFZhbHVlcyIsImhhbmRsZVRvZ2dsZVNpZGViYXIiLCJoYW5kbGVTb3J0VG9nZ2xlIiwiaGFuZGxlU29ydFNlbGVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic3R5bGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiekluZGV4IiwibWFwIiwiaW5kZXgiLCJmb250V2VpZ2h0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Products.jsx\n"));

/***/ })

});