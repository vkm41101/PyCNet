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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/Header/Header */ \"./pages/utilities/Header/Header.js\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Heading(param) {\n    let { value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        className: \"mx-10 font-bold text-[#555555] text-2xl\",\n        children: value\n    }, void 0, false, {\n        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n        lineNumber: 7,\n        columnNumber: 13\n    }, this);\n}\n_c = Heading;\nfunction main() {\n    _s();\n    let editorArr = [\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null)\n    ];\n    async function tryat() {\n        alert(editorArr[6].current.getValue());\n        let problem = {\n            problemName: editorArr[6].current.getValue(),\n            problemStatement: editorArr[0].current.getValue(),\n            problemInputFormat: editorArr[2].current.getValue(),\n            problemOutputFormat: editorArr[3].current.getValue(),\n            problemConstraint: editorArr[1].current.getValue(),\n            timeLimit: 1,\n            sampleTestCase: {\n                input: editorArr[4].current.getValue(),\n                output: editorArr[5].current.getValue()\n            },\n            author: [\n                \"\"\n            ],\n            tags: []\n        };\n        let response = await fetch(\"http://localhost:3000/api/problem\", {\n            method: \"POST\",\n            mode: \"cors\",\n            body: JSON.stringify(problem)\n        });\n        console.log(response);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"Problem Name: \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 44,\n                        columnNumber: 51\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-8 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[6].current = editor;\n                        },\n                        id: \"problemStatement\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"1. Problem Statement\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 52,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[0].current = editor;\n                        },\n                        id: \"problemStatement\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"2. Constraints\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 60,\n                        columnNumber: 51\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[1].current = editor;\n                        },\n                        id: \"Constraints\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"3. Input Format\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 68,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[2].current = editor;\n                        },\n                        id: \"inputFormat\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        value: \"4. Output Format\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 76,\n                        columnNumber: 53\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                        className: \"h-60 mx-10 mt-3 rounded-md\",\n                        theme: \"vs-dark\",\n                        defaultValue: \"//Add Text\",\n                        onMount: (editor, monaco)=>{\n                            editorArr[3].current = editor;\n                        },\n                        id: \"outputFormat\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 float-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                                        value: \"5. Sample Input\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 60\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                        className: \"h-60 mx-10 my-3 rounded-md\",\n                                        theme: \"vs-dark\",\n                                        defaultValue: \"//Add Text\",\n                                        onMount: (editor, monaco)=>{\n                                            editorArr[4].current = editor;\n                                        },\n                                        id: \"sampleInput\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2 float-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                                        value: \"6. Sample Output\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 61\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                        className: \"h-60 mx-10 my-3 rounded-md\",\n                                        theme: \"vs-dark\",\n                                        defaultValue: \"//Add Text\",\n                                        onMount: (editor, monaco)=>{\n                                            editorArr[5].current = editor;\n                                        },\n                                        id: \"sampleOutput\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                                lineNumber: 95,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"rounded-full p-3 mx-auto my-3 block bg-[#000000] hover:bg-[#bbbbbb] active:bg-[#444444] text-[#ffffff] hover:text-[#000000] font-bold\",\n                            onClick: tryat,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\PersonalSet\\\\PyCNet\\\\pages\\\\problemAdd.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(main, \"sA3vo6LVy/dqj9kqvsaMy5LSsf4=\");\nvar _c;\n$RefreshReg$(_c, \"Heading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQixDQUFDO0dBeEd1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmxlbUFkZC5qcz8wZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vdXRpbGl0aWVzL0hlYWRlci9IZWFkZXJcIlxyXG5pbXBvcnQgbW9uYWNvLHsgRWRpdG9yLCBEaWZmRWRpdG9yLCB1c2VNb25hY28sIGxvYWRlciB9IGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRpbmcoe3ZhbHVlfSlcclxue1xyXG4gICAgcmV0dXJuICg8dGV4dCBjbGFzc05hbWU9XCJteC0xMCBmb250LWJvbGQgdGV4dC1bIzU1NTU1NV0gdGV4dC0yeGxcIj57dmFsdWV9PC90ZXh0Pik7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpXHJcbntcclxuICAgIGxldCBlZGl0b3JBcnIgPSBbdXNlUmVmKG51bGwpLCB1c2VSZWYobnVsbCksIHVzZVJlZihudWxsKSwgdXNlUmVmKG51bGwpLCB1c2VSZWYobnVsbCksIHVzZVJlZihudWxsKSwgdXNlUmVmKG51bGwpXTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyeWF0KClcclxuICAgIHtcclxuICAgICAgICBhbGVydChlZGl0b3JBcnJbNl0uY3VycmVudC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICBsZXQgcHJvYmxlbSA9IHtcclxuICAgICAgICAgICAgcHJvYmxlbU5hbWU6IGVkaXRvckFycls2XS5jdXJyZW50LmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgIHByb2JsZW1TdGF0ZW1lbnQ6IGVkaXRvckFyclswXS5jdXJyZW50LmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgIHByb2JsZW1JbnB1dEZvcm1hdDogZWRpdG9yQXJyWzJdLmN1cnJlbnQuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgcHJvYmxlbU91dHB1dEZvcm1hdDogZWRpdG9yQXJyWzNdLmN1cnJlbnQuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgcHJvYmxlbUNvbnN0cmFpbnQ6IGVkaXRvckFyclsxXS5jdXJyZW50LmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgIHRpbWVMaW1pdDogMSxcclxuICAgICAgICAgICAgc2FtcGxlVGVzdENhc2U6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiBlZGl0b3JBcnJbNF0uY3VycmVudC5nZXRWYWx1ZSgpLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBlZGl0b3JBcnJbNV0uY3VycmVudC5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF1dGhvcjogW1wiXCJdLFxyXG4gICAgICAgICAgICB0YWdzOiBbXVxyXG4gICAgICAgIH07IFxyXG5cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvYmxlbVwiLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShwcm9ibGVtKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIlByb2JsZW0gTmFtZTogXCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggbXgtMTAgbXQtMyByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIi8vQWRkIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4geyBlZGl0b3JBcnJbNl0uY3VycmVudCA9IGVkaXRvciB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicHJvYmxlbVN0YXRlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFsdWU9XCIxLiBQcm9ibGVtIFN0YXRlbWVudFwiLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG14LTEwIG10LTMgcm91bmRlZC1tZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiLy9BZGQgVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VudD17KGVkaXRvciwgbW9uYWNvKT0+e2VkaXRvckFyclswXS5jdXJyZW50PWVkaXRvcn19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9ibGVtU3RhdGVtZW50XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjIuIENvbnN0cmFpbnRzXCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG14LTEwIG10LTMgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pID0+IHsgZWRpdG9yQXJyWzFdLmN1cnJlbnQgPSBlZGl0b3IgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cIkNvbnN0cmFpbnRzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjMuIElucHV0IEZvcm1hdFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02MCBteC0xMCBtdC0zIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiLy9BZGQgVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VudD17KGVkaXRvciwgbW9uYWNvKSA9PiB7IGVkaXRvckFyclsyXS5jdXJyZW50ID0gZWRpdG9yIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dEZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFsdWU9XCI0LiBPdXRwdXQgRm9ybWF0XCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG14LTEwIG10LTMgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pID0+IHsgZWRpdG9yQXJyWzNdLmN1cnJlbnQgPSBlZGl0b3IgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dHB1dEZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjUuIFNhbXBsZSBJbnB1dFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgbXgtMTAgbXktMyByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIvL0FkZCBUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4geyBlZGl0b3JBcnJbNF0uY3VycmVudCA9IGVkaXRvciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzYW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YWx1ZT1cIjYuIFNhbXBsZSBPdXRwdXRcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG14LTEwIG15LTMgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiLy9BZGQgVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pID0+IHsgZWRpdG9yQXJyWzVdLmN1cnJlbnQgPSBlZGl0b3IgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2FtcGxlT3V0cHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMyBteC1hdXRvIG15LTMgYmxvY2sgYmctWyMwMDAwMDBdIGhvdmVyOmJnLVsjYmJiYmJiXSBhY3RpdmU6YmctWyM0NDQ0NDRdIHRleHQtWyNmZmZmZmZdIGhvdmVyOnRleHQtWyMwMDAwMDBdIGZvbnQtYm9sZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0cnlhdH1cclxuICAgICAgICAgICAgICAgICA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZGVyIiwibW9uYWNvIiwiRWRpdG9yIiwiRGlmZkVkaXRvciIsInVzZU1vbmFjbyIsImxvYWRlciIsIlJlYWN0IiwidXNlUmVmIiwiSGVhZGluZyIsInZhbHVlIiwidGV4dCIsImNsYXNzTmFtZSIsIm1haW4iLCJlZGl0b3JBcnIiLCJ0cnlhdCIsImFsZXJ0IiwiY3VycmVudCIsImdldFZhbHVlIiwicHJvYmxlbSIsInByb2JsZW1OYW1lIiwicHJvYmxlbVN0YXRlbWVudCIsInByb2JsZW1JbnB1dEZvcm1hdCIsInByb2JsZW1PdXRwdXRGb3JtYXQiLCJwcm9ibGVtQ29uc3RyYWludCIsInRpbWVMaW1pdCIsInNhbXBsZVRlc3RDYXNlIiwiaW5wdXQiLCJvdXRwdXQiLCJhdXRob3IiLCJ0YWdzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJiciIsInRoZW1lIiwiZGVmYXVsdFZhbHVlIiwib25Nb3VudCIsImVkaXRvciIsImlkIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/problemAdd.js\n"));

/***/ })

});