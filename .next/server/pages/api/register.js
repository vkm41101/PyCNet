"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userID: String,\n    firstName: String,\n    lastName: String,\n    emailID: String,\n    password: String,\n    codechefID: String,\n    codeforcesID: String,\n    questionsSolved: [\n        String\n    ]\n});\nconst userObject = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) ? (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) : mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userObject);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ25DRyxRQUFRQztJQUNSQyxXQUFXRDtJQUNYRSxVQUFVRjtJQUNWRyxTQUFTSDtJQUNUSSxVQUFVSjtJQUNWSyxZQUFZTDtJQUNaTSxjQUFjTjtJQUNkTyxpQkFBaUI7UUFBQ1A7S0FBTztBQUM3QjtBQUVBLE1BQU1RLGFBQVcsOERBQXNCLEdBQUtaLDhEQUFxQixHQUFLQSxxREFBYyxDQUFDLFNBQVNDLFdBQVk7QUFFMUcsaUVBQWVXLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXJJRDogU3RyaW5nLFxyXG4gICAgZmlyc3ROYW1lOiBTdHJpbmcsXHJcbiAgICBsYXN0TmFtZTogU3RyaW5nLFxyXG4gICAgZW1haWxJRDogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIGNvZGVjaGVmSUQ6IFN0cmluZyxcclxuICAgIGNvZGVmb3JjZXNJRDogU3RyaW5nLFxyXG4gICAgcXVlc3Rpb25zU29sdmVkOiBbU3RyaW5nXVxyXG59KVxyXG5cclxuY29uc3QgdXNlck9iamVjdD0obW9uZ29vc2UubW9kZWxzLnVzZXJzKSA/IChtb25nb29zZS5tb2RlbHMudXNlcnMpIDogKG1vbmdvb3NlLm1vZGVsKCd1c2VycycsIHVzZXJTY2hlbWEpKTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyT2JqZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySUQiLCJTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsSUQiLCJwYXNzd29yZCIsImNvZGVjaGVmSUQiLCJjb2RlZm9yY2VzSUQiLCJxdWVzdGlvbnNTb2x2ZWQiLCJ1c2VyT2JqZWN0IiwibW9kZWxzIiwidXNlcnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ respond)\n/* harmony export */ });\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n\nconst { createHash  } = __webpack_require__(/*! crypto */ \"crypto\");\n\n(async ()=>{\n    await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})();\nasync function respond(req, res) {\n    if (req.method === \"POST\") {\n        console.log(req.body);\n        let data = req.body;\n        _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            emailID: data.emailID\n        }).then(async (dataf)=>{\n            if (dataf != null) {\n                let response = {\n                    statusCode: 400,\n                    message: \"User Already Exists\"\n                };\n                res.status(400).end(JSON.stringify(response));\n                foundUser = true;\n            } else {\n                let userid = new Date().getTime().toString(16);\n                let user = new _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                    userID: userid,\n                    firstName: data.firstName,\n                    lastName: data.lastName,\n                    emailID: data.emailID,\n                    password: ((string)=>{\n                        return createHash(\"sha256\").update(string).digest(\"hex\");\n                    })(data.password),\n                    codechefID: data.codechefID,\n                    codeforcesID: data.codeforcesID,\n                    questionsSolved: []\n                });\n                console.log(user);\n                await user.save();\n                let response = {\n                    statusCode: 200,\n                    message: \"Registration Succesful\"\n                };\n                res.status(200).end(JSON.stringify(response));\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQzFDLE1BQU0sRUFBQ0MsV0FBVSxFQUFDLEdBQUdDLG1CQUFPQSxDQUFDO0FBQ3VCO0FBRW5ELFdBQVU7SUFBQyxNQUFNQywrREFBWUE7QUFBRTtBQUVqQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFDOUM7SUFDSSxJQUFHRCxJQUFJRSxNQUFNLEtBQUcsUUFDaEI7UUFDSUMsUUFBUUMsR0FBRyxDQUFDSixJQUFJSyxJQUFJO1FBQ3BCLElBQUlDLE9BQUtOLElBQUlLLElBQUk7UUFDakJWLDREQUFrQixDQUFDO1lBQUNhLFNBQVNGLEtBQUtFLE9BQU87UUFBQSxHQUFHQyxJQUFJLENBQUMsT0FBT0MsUUFBUTtZQUM1RCxJQUFJQSxTQUFPLElBQUksRUFDZjtnQkFDSSxJQUFJQyxXQUFXO29CQUNYQyxZQUFZO29CQUNaQyxTQUFTO2dCQUNiO2dCQUNBWixJQUFJYSxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNOO2dCQUNuQ08sWUFBVSxJQUFJO1lBQ2xCLE9BRUE7Z0JBQ0ksSUFBSUMsU0FBUyxJQUFJQyxPQUFPQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQztnQkFDM0MsSUFBSUMsT0FBTyxJQUFJNUIsb0RBQVVBLENBQUM7b0JBQ3RCNkIsUUFBUUw7b0JBQ1JNLFdBQVduQixLQUFLbUIsU0FBUztvQkFDekJDLFVBQVVwQixLQUFLb0IsUUFBUTtvQkFDdkJsQixTQUFTRixLQUFLRSxPQUFPO29CQUNyQm1CLFVBQVUsQ0FBQyxDQUFDQyxTQUFXO3dCQUFFLE9BQU9oQyxXQUFXLFVBQVVpQyxNQUFNLENBQUNELFFBQVFFLE1BQU0sQ0FBQztvQkFBTyxHQUFHeEIsS0FBS3FCLFFBQVE7b0JBQ2xHSSxZQUFZekIsS0FBS3lCLFVBQVU7b0JBQzNCQyxjQUFjMUIsS0FBSzBCLFlBQVk7b0JBQy9CQyxpQkFBaUIsRUFBRTtnQkFDdkI7Z0JBQ0E5QixRQUFRQyxHQUFHLENBQUNtQjtnQkFDWixNQUFNQSxLQUFLVyxJQUFJO2dCQUNmLElBQUl2QixXQUFXO29CQUNYQyxZQUFZO29CQUNaQyxTQUFTO2dCQUNiO2dCQUNBWixJQUFJYSxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNOO1lBQ3ZDLENBQUM7UUFDTDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzPzE3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJPYmplY3QgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInXHJcbmNvbnN0IHtjcmVhdGVIYXNofSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJy4uLy4uL3V0aWxzL2Nvbm5lY3RNb25nbyc7XHJcblxyXG4oYXN5bmMgKCk9Pnthd2FpdCBjb25uZWN0TW9uZ28oKX0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXNwb25kKHJlcSwgcmVzKVxyXG57XHJcbiAgICBpZihyZXEubWV0aG9kPT09J1BPU1QnKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgICAgICBsZXQgZGF0YT1yZXEuYm9keTtcclxuICAgICAgICB1c2VyT2JqZWN0LmZpbmRPbmUoe2VtYWlsSUQ6IGRhdGEuZW1haWxJRH0pLnRoZW4oYXN5bmMgKGRhdGFmKT0+e1xyXG4gICAgICAgICAgICBpZiAoZGF0YWYhPW51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIEFscmVhZHkgRXhpc3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgIGZvdW5kVXNlcj10cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IHVzZXJPYmplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxJRDogZGF0YS5lbWFpbElELFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAoKHN0cmluZykgPT4geyByZXR1cm4gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHN0cmluZykuZGlnZXN0KCdoZXgnKSB9KShkYXRhLnBhc3N3b3JkKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2RlY2hlZklEOiBkYXRhLmNvZGVjaGVmSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZWZvcmNlc0lEOiBkYXRhLmNvZGVmb3JjZXNJRCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnNTb2x2ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gU3VjY2VzZnVsXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZXJPYmplY3QiLCJjcmVhdGVIYXNoIiwicmVxdWlyZSIsImNvbm5lY3RNb25nbyIsInJlc3BvbmQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImRhdGEiLCJmaW5kT25lIiwiZW1haWxJRCIsInRoZW4iLCJkYXRhZiIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm91bmRVc2VyIiwidXNlcmlkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInVzZXIiLCJ1c2VySUQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBhc3N3b3JkIiwic3RyaW5nIiwidXBkYXRlIiwiZGlnZXN0IiwiY29kZWNoZWZJRCIsImNvZGVmb3JjZXNJRCIsInF1ZXN0aW9uc1NvbHZlZCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongo.js":
/*!*******************************!*\
  !*** ./utils/connectMongo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGVBQWUsVUFBWTtJQUM3QixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2hEO0FBRUEsaUVBQWVKLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0TW9uZ28uanM/ODY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ28gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbzsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ28iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();