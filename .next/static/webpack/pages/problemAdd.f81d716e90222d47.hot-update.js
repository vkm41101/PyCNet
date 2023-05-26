"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/problemAdd",{

/***/ "./pages/problemAdd.js":
/*!*****************************!*\
  !*** ./pages/problemAdd.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/Header/Header */ \"./pages/utilities/Header/Header.js\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Heading(param) {\n    let { value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"mx-10 font-bold text-[#555555] text-2xl\",\n        children: value\n    }, void 0, false, {\n        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n        lineNumber: 7,\n        columnNumber: 13\n    }, this);\n}\n_c = Heading;\nfunction main() {\n    _s();\n    let editorArr = [\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null)\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"1. Problem Statement\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 20,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[0].current = editor;\n                        },\n                        id: \"problemStatement\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"2. Constraints\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 28,\n                        columnNumber: 51\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[1].current = editor;\n                        },\n                        id: \"Constraints\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"3. Input Format\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 36,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[2].current = editor;\n                        },\n                        id: \"inputFormat\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"4. Output Format\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 44,\n                        columnNumber: 53\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[3].current = editor;\n                        },\n                        id: \"outputFormat\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 float-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                                        value: \"5. Sample Input\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 60\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                        className: \"h-60 mx-10 my-3 rounded-md\",\n                                        theme: \"vs-dark\",\n                                        defaultValue: \"//Add Text\",\n                                        onMount: (editor, monaco)=>{\n                                            editorArr[4].current = editor;\n                                        },\n                                        id: \"sampleInput\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 float-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                                        value: \"6. Sample Output\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 61\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                        className: \"h-60 mx-10 my-3 rounded-md\",\n                                        theme: \"vs-dark\",\n                                        defaultValue: \"//Add Text\",\n                                        onMount: (editor, monaco)=>{\n                                            editorArr[5].current = editor;\n                                        },\n                                        id: \"sampleOutput\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"rounded-full p-3 mx-auto my-3 block bg-[#000000] hover:bg-[#bbbbbb] active:bg-[#444444] text-[#ffffff] hover:text-[#000000] font-bold\",\n                            onClick: console.log(\"Hi\"),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(main, \"x5HyPNxUedNnsb08elo0zVrqybQ=\");\nvar _c;\n$RefreshReg$(_c, \"Heading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUMsR0FBRyxDQUFDO3NDQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQixDQUFDO0dBeEV1QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmxlbUFkZC5qcz8wZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vdXRpbGl0aWVzL0hlYWRlci9IZWFkZXJcIlxyXG5pbXBvcnQgbW9uYWNvLHsgRWRpdG9yLCBEaWZmRWRpdG9yLCB1c2VNb25hY28sIGxvYWRlciB9IGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRpbmcoe3ZhbHVlfSlcclxue1xyXG4gICAgcmV0dXJuICg8dGV4dCBjbGFzc05hbWU9XCJteC0xMCBmb250LWJvbGQgdGV4dC1bIzU1NTU1NV0gdGV4dC0yeGxcIj57dmFsdWV9PC90ZXh0Pik7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpXHJcbntcclxuICAgIGxldCBlZGl0b3JBcnIgPSBbdXNlUmVmKG51bGwpLCB1c2VSZWYobnVsbCksIHVzZVJlZihudWxsKSwgdXNlUmVmKG51bGwpLCB1c2VSZWYobnVsbCksIHVzZVJlZihudWxsKV07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjEuIFByb2JsZW0gU3RhdGVtZW50XCIvPjxici8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgbXgtMTAgbXQtMyByb3VuZGVkLW1kXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pPT57ZWRpdG9yQXJyWzBdLmN1cnJlbnQ9ZWRpdG9yfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cInByb2JsZW1TdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhbHVlPVwiMi4gQ29uc3RyYWludHNcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgbXgtMTAgbXQtMyByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIi8vQWRkIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4geyBlZGl0b3JBcnJbMV0uY3VycmVudCA9IGVkaXRvciB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiQ29uc3RyYWludHNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhbHVlPVwiMy4gSW5wdXQgRm9ybWF0XCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG14LTEwIG10LTMgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pID0+IHsgZWRpdG9yQXJyWzJdLmN1cnJlbnQgPSBlZGl0b3IgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0Rm9ybWF0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjQuIE91dHB1dCBGb3JtYXRcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgbXgtMTAgbXQtMyByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIi8vQWRkIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4geyBlZGl0b3JBcnJbM10uY3VycmVudCA9IGVkaXRvciB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0cHV0Rm9ybWF0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhbHVlPVwiNS4gU2FtcGxlIElucHV0XCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02MCBteC0xMCBteS0zIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIi8vQWRkIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VudD17KGVkaXRvciwgbW9uYWNvKSA9PiB7IGVkaXRvckFycls0XS5jdXJyZW50ID0gZWRpdG9yIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNhbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhbHVlPVwiNi4gU2FtcGxlIE91dHB1dFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgbXgtMTAgbXktMyByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4geyBlZGl0b3JBcnJbNV0uY3VycmVudCA9IGVkaXRvciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzYW1wbGVPdXRwdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0zIG14LWF1dG8gbXktMyBibG9jayBiZy1bIzAwMDAwMF0gaG92ZXI6YmctWyNiYmJiYmJdIGFjdGl2ZTpiZy1bIzQ0NDQ0NF0gdGV4dC1bI2ZmZmZmZl0gaG92ZXI6dGV4dC1bIzAwMDAwMF0gZm9udC1ib2xkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnNvbGUubG9nKFwiSGlcIil9XHJcbiAgICAgICAgICAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkhlYWRlciIsIm1vbmFjbyIsIkVkaXRvciIsIkRpZmZFZGl0b3IiLCJ1c2VNb25hY28iLCJsb2FkZXIiLCJSZWFjdCIsInVzZVJlZiIsIkhlYWRpbmciLCJ2YWx1ZSIsInRleHQiLCJjbGFzc05hbWUiLCJtYWluIiwiZWRpdG9yQXJyIiwiZGl2IiwiYnIiLCJ0aGVtZSIsImRlZmF1bHRWYWx1ZSIsIm9uTW91bnQiLCJlZGl0b3IiLCJjdXJyZW50IiwiaWQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/problemAdd.js\n"));

/***/ })

});