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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./components/ProductCard.jsx\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _styles_ProductsPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ProductsPage.css */ \"(app-pages-browser)/./styles/ProductsPage.css\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBar */ \"(app-pages-browser)/./components/SideBar.jsx\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmark_react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmark!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isSidebarVisible, setSidebarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sortVisible, setSortVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedSort, setSelectedSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"RECOMMENDED\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://fakestoreapi.com/products\");\n                setProducts(response.data);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const sortValues = [\n        \"RECOMMENDED\",\n        \"NEWEST FIRST\",\n        \"POPULAR\",\n        \"PRICE:HIGH TO LOW\",\n        \"PRICE:LOW TO HIGH\"\n    ];\n    const handleToggleSidebar = ()=>{\n        setSidebarVisible(!isSidebarVisible);\n    };\n    const handleSortToggle = ()=>{\n        setSortVisible(!sortVisible);\n    };\n    const handleSortSelection = (data)=>{\n        setSelectedSort(data);\n        setSortVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productsPage \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"filterHeader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex md:w-3/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: \"3555 ITEMS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex mx-4\",\n                                onClick: handleToggleSidebar,\n                                children: [\n                                    isSidebarVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowBack, {\n                                        className: \"mt-1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {\n                                        className: \"mt-1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: isSidebarVisible ? \"HIDE FILTER\" : \"SHOW FILTER\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden w-3/6 text-center border-r border-gray-400\",\n                        onClick: handleToggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-bold\",\n                            children: \"FILTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: handleSortToggle,\n                                className: \"text-sm md:text-base font-bold\",\n                                children: selectedSort\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {\n                                className: \"mt-1\",\n                                onClick: handleSortToggle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            sortVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow rounded-sm bg-white h-52 w-44 lg:mr-12\",\n                style: {\n                    position: \"absolute\",\n                    right: 10,\n                    top: \"5vw\",\n                    zIndex: 5\n                },\n                children: sortValues.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex m-2 my-4 text-sm justify-end items-end\",\n                        onClick: ()=>handleSortSelection(data),\n                        children: [\n                            selectedSort === data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmark_react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoCheckmark, {\n                                className: \"w-4 h-4 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-auto\",\n                                style: {\n                                    fontWeight: selectedSort === data ? \"bold\" : \"normal\"\n                                },\n                                children: data\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 77,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex w-full h-full\",\n                children: [\n                    isSidebarVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-2/6 h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-\".concat(isSidebarVisible ? \"4/6\" : \"full\", \" flex flex-wrap justify-between\"),\n                        children: products.length > 0 && products.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MOHAM\\\\AppscripMachineTask\\\\frontend\\\\components\\\\Products.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"hhzS4IodG0iJXUevgylT33Yi/DM=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n{}var _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4QztBQUNQO0FBQ3dDO0FBQ3REO0FBQ1U7QUFDSjtBQUNZO0FBRTNDLFNBQVNVOztJQUVMLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3hDLE1BQU0sQ0FBQ1csa0JBQWlCQyxrQkFBa0IsR0FBQ1osK0NBQVFBLENBQUM7SUFDcEQsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUNkLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUNoQiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0IsWUFBVTtZQUNaLElBQUc7Z0JBQ0MsTUFBTUMsV0FBUyxNQUFNYiw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFDO2dCQUMvQlQsWUFBWVEsU0FBU0UsSUFBSTtZQUM3QixFQUFDLE9BQU1DLE9BQU07Z0JBQ1RDLFFBQVFELEtBQUssQ0FBQyw0QkFBMkJBO1lBQzdDO1FBQ0o7UUFDQUo7SUFDSixHQUFFLEVBQUU7SUFFSixNQUFNTSxhQUFXO1FBQ2I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBRUQsTUFBTUMsc0JBQW9CO1FBQ3RCWixrQkFBa0IsQ0FBQ0Q7SUFDdkI7SUFFQSxNQUFNYyxtQkFBaUI7UUFDbkJYLGVBQWUsQ0FBQ0Q7SUFDcEI7SUFFQSxNQUFNYSxzQkFBb0IsQ0FBQ047UUFDdkJKLGdCQUFnQkk7UUFDaEJOLGVBQWU7SUFDbkI7SUFDRixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1YsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBRUQsV0FBVTswQ0FBWTs7Ozs7OzBDQUN6Qiw4REFBQ0U7Z0NBQU9GLFdBQVU7Z0NBQVlHLFNBQVNQOztvQ0FDdENiLGlDQUNHLDhEQUFDVCxpSUFBY0E7d0NBQUMwQixXQUFVOzs7Ozs2REFFMUIsOERBQUN4QixvSUFBaUJBO3dDQUFDd0IsV0FBVTs7Ozs7O2tEQUVqQyw4REFBQ0k7a0RBQU1yQixtQkFBaUIsZ0JBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLMUMsOERBQUNnQjt3QkFBSUMsV0FBVTt3QkFBdURHLFNBQVNQO2tDQUMzRSw0RUFBQ0s7NEJBQUVELFdBQVU7c0NBQW9COzs7Ozs7Ozs7OztrQ0FFckMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUVFLFNBQVNOO2dDQUFrQkcsV0FBVTswQ0FBa0NiOzs7Ozs7MENBQzFFLDhEQUFDWixpSUFBY0E7Z0NBQUN5QixXQUFVO2dDQUFPRyxTQUFTTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS2hEWiw2QkFDQSw4REFBQ2M7Z0JBQUlDLFdBQVU7Z0JBQWdESyxPQUFPO29CQUFDQyxVQUFTO29CQUFXQyxPQUFNO29CQUFHQyxLQUFJO29CQUFPQyxRQUFPO2dCQUFDOzBCQUN0SGQsV0FBV2UsR0FBRyxDQUFDLENBQUNsQixNQUFLbUIsc0JBQ3BCLDhEQUFDWjt3QkFBSUMsV0FBVTt3QkFBOENHLFNBQVMsSUFBSUwsb0JBQW9CTjs7NEJBQ3pGTCxpQkFBZUssc0JBQ1osOERBQUNiLDJGQUFXQTtnQ0FBQ3FCLFdBQVU7Ozs7OzswQ0FFM0IsOERBQUNDO2dDQUFFRCxXQUFVO2dDQUFVSyxPQUFPO29DQUFDTyxZQUFXekIsaUJBQWVLLE9BQUssU0FBTztnQ0FBUTswQ0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszRiw4REFBQ087Z0JBQUlDLFdBQVU7O29CQUVaakIsa0NBQ0csOERBQUNnQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3RCLGdEQUFPQTs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNxQjt3QkFBSUMsV0FBVyxRQUFzQyxPQUE5QmpCLG1CQUFpQixRQUFNLFFBQU87a0NBRW5ERixTQUFTZ0MsTUFBTSxHQUFDLEtBQUtoQyxTQUFTNkIsR0FBRyxDQUFDLENBQUNsQixNQUFLbUIsc0JBQ3ZDLDhEQUFDdEMsb0RBQVdBO2dDQUFhbUIsTUFBTUE7K0JBQWJtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QjtHQTlGUy9CO0tBQUFBO0FBZ0dULCtEQUFlQSxRQUFRQSxFQUFBO0FBR3BCLENBWWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanN4PzhmYzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4vUHJvZHVjdENhcmQnXHJcbmltcG9ydCB7SW9Jb3NBcnJvd0JhY2ssIElvSW9zQXJyb3dEb3duLElvSW9zQXJyb3dGb3J3YXJkfSBmcm9tICdyZWFjdC1pY29ucy9pbydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvUHJvZHVjdHNQYWdlLmNzc1wiXHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhcidcclxuaW1wb3J0IHtJb0NoZWNrbWFya30gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHMsc2V0UHJvZHVjdHNdPXVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lzU2lkZWJhclZpc2libGUsc2V0U2lkZWJhclZpc2libGVdPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3NvcnRWaXNpYmxlLCBzZXRTb3J0VmlzaWJsZV09dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRTb3J0LCBzZXRTZWxlY3RlZFNvcnRdPXVzZVN0YXRlKFwiUkVDT01NRU5ERURcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBmZXRjaERhdGE9YXN5bmMoKT0+e1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZT1hd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIilcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6XCIsZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgc29ydFZhbHVlcz1bXHJcbiAgICAgICAgXCJSRUNPTU1FTkRFRFwiLFxyXG4gICAgICAgIFwiTkVXRVNUIEZJUlNUXCIsXHJcbiAgICAgICAgXCJQT1BVTEFSXCIsXHJcbiAgICAgICAgXCJQUklDRTpISUdIIFRPIExPV1wiLFxyXG4gICAgICAgIFwiUFJJQ0U6TE9XIFRPIEhJR0hcIixcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVTaWRlYmFyPSgpPT57XHJcbiAgICAgICAgc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU29ydFRvZ2dsZT0oKT0+e1xyXG4gICAgICAgIHNldFNvcnRWaXNpYmxlKCFzb3J0VmlzaWJsZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTb3J0U2VsZWN0aW9uPShkYXRhKT0+e1xyXG4gICAgICAgIHNldFNlbGVjdGVkU29ydChkYXRhKVxyXG4gICAgICAgIHNldFNvcnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNQYWdlICc+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJIZWFkZXInPlxyXG4gICAgICAgICAgICB7LyogZmlsdGVyIGJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IG1kOnctMy82Jz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkJz4zNTU1IElURU1TPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggbXgtNCcgb25DbGljaz17aGFuZGxlVG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICB7aXNTaWRlYmFyVmlzaWJsZT8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93QmFjayBjbGFzc05hbWU9J210LTEnLz5cclxuICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBjbGFzc05hbWU9J210LTEnLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXNTaWRlYmFyVmlzaWJsZT9cIkhJREUgRklMVEVSXCI6XCJTSE9XIEZJTFRFUlwifTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBtb2JpbGUgdmlldyBmaWx0ZXIgYnV0dG9uICAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmhpZGRlbiB3LTMvNiB0ZXh0LWNlbnRlciBib3JkZXItciBib3JkZXItZ3JheS00MDAnIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtYm9sZCc+RklMVEVSPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPHAgb25DbGljaz17aGFuZGxlU29ydFRvZ2dsZX0gY2xhc3NOYW1lPSd0ZXh0LXNtIG1kOnRleHQtYmFzZSBmb250LWJvbGQnPntzZWxlY3RlZFNvcnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIGNsYXNzTmFtZT0nbXQtMScgb25DbGljaz17aGFuZGxlU29ydFRvZ2dsZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICB7Lyogc29ydCBkcm9wIGRvd24gICovfVxyXG4gICAgICAgICB7c29ydFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyByb3VuZGVkLXNtIGJnLXdoaXRlIGgtNTIgdy00NCBsZzptci0xMicgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLHJpZ2h0OjEwLHRvcDpcIjV2d1wiLCB6SW5kZXg6NX19PiBcclxuICAgICAgICAgIHtzb3J0VmFsdWVzLm1hcCgoZGF0YSxpbmRleCk9PihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbS0yIG15LTQgdGV4dC1zbSBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnIG9uQ2xpY2s9eygpPT5oYW5kbGVTb3J0U2VsZWN0aW9uKGRhdGEpfT5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNvcnQ9PT1kYXRhICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0NoZWNrbWFyayBjbGFzc05hbWU9J3ctNCBoLTQgZm9udC1ib2xkJyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtYXV0bycgc3R5bGU9e3tmb250V2VpZ2h0OnNlbGVjdGVkU29ydD09PWRhdGE/XCJib2xkXCI6XCJub3JtYWxcIn19PntkYXRhfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICB7Lyogc2lkZSBiYXIgdmlzaWJsZSAgKi99XHJcbiAgICAgICAge2lzU2lkZWJhclZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi82IGgtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZDp3LSR7aXNTaWRlYmFyVmlzaWJsZT9cIjQvNlwiOlwiZnVsbFwifSBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW5gfT5cclxuICAgICAgICB7LyogcHJvZHVjdCBsaXN0aW5nICAqL31cclxuICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGg+MCAmJiBwcm9kdWN0cy5tYXAoKGRhdGEsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e2luZGV4fSBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXHJcblxyXG5cclxuICAgey8qIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+XHJcbiAgICA8UHJvZHVjdENhcmQvPlxyXG4gICAgPFByb2R1Y3RDYXJkLz5cclxuICAgIDxQcm9kdWN0Q2FyZC8+ICovfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdENhcmQiLCJJb0lvc0Fycm93QmFjayIsIklvSW9zQXJyb3dEb3duIiwiSW9Jb3NBcnJvd0ZvcndhcmQiLCJheGlvcyIsIlNpZGVCYXIiLCJJb0NoZWNrbWFyayIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImlzU2lkZWJhclZpc2libGUiLCJzZXRTaWRlYmFyVmlzaWJsZSIsInNvcnRWaXNpYmxlIiwic2V0U29ydFZpc2libGUiLCJzZWxlY3RlZFNvcnQiLCJzZXRTZWxlY3RlZFNvcnQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJzb3J0VmFsdWVzIiwiaGFuZGxlVG9nZ2xlU2lkZWJhciIsImhhbmRsZVNvcnRUb2dnbGUiLCJoYW5kbGVTb3J0U2VsZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic3R5bGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiekluZGV4IiwibWFwIiwiaW5kZXgiLCJmb250V2VpZ2h0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Products.jsx\n"));

/***/ })

});