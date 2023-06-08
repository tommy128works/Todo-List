"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["shopPage"],{

/***/ "./src/shopPage.js":
/*!*************************!*\
  !*** ./src/shopPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cherry_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cherry.jpg */ "./src/cherry.jpg");
/* harmony import */ var _crabapple_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crabapple.jpg */ "./src/crabapple.jpg");
/* harmony import */ var _maple_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maple.jpg */ "./src/maple.jpg");




const shopPage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // shop title
  let div = document.createElement("div");
  div.textContent = "Shop";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // Installation fee
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent = "Optional Installation Service";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$50 per tree sapling";
  div.appendChild(p);

  element.appendChild(div);

  // cherry blossom
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Cherry Blossom";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$120 per tree sapling";
  div.appendChild(p);

  let myImage = new Image();
  myImage.src = _cherry_jpg__WEBPACK_IMPORTED_MODULE_0__;
  div.appendChild(myImage);

  element.appendChild(div);

  // crabapple
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Crabapple";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$60 per tree sapling";
  div.appendChild(p);

  myImage = new Image();
  myImage.src = _crabapple_jpg__WEBPACK_IMPORTED_MODULE_1__;
  div.appendChild(myImage);

  element.appendChild(div);

  // item 4
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Maple";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$80 per tree sapling";
  div.appendChild(p);

  myImage = new Image();
  myImage.src = _maple_jpg__WEBPACK_IMPORTED_MODULE_2__;
  div.appendChild(myImage);

  element.appendChild(div);

  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopPage);


/***/ }),

/***/ "./src/cherry.jpg":
/*!************************!*\
  !*** ./src/cherry.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49ad4ce55a379d200d20.jpg";

/***/ }),

/***/ "./src/crabapple.jpg":
/*!***************************!*\
  !*** ./src/crabapple.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee366c5f11eec614d3c5.jpg";

/***/ }),

/***/ "./src/maple.jpg":
/*!***********************!*\
  !*** ./src/maple.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f840632bf5256d51359.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/shopPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDTTtBQUNSOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0NBQU07QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyQ0FBUztBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVDQUFLO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Nob3BQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVycnkgZnJvbSBcIi4vY2hlcnJ5LmpwZ1wiO1xuaW1wb3J0IGNyYWJhcHBsZSBmcm9tIFwiLi9jcmFiYXBwbGUuanBnXCI7XG5pbXBvcnQgbWFwbGUgZnJvbSBcIi4vbWFwbGUuanBnXCI7XG5cbmNvbnN0IHNob3BQYWdlID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG5cbiAgLy8gc2hvcCB0aXRsZVxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnRleHRDb250ZW50ID0gXCJTaG9wXCI7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcInRpdGxlXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gSW5zdGFsbGF0aW9uIGZlZVxuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIndvb2RcIiwgXCJpbmZvXCIsIFwiYWxpZ25cIik7XG5cbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwLnRleHRDb250ZW50ID0gXCJPcHRpb25hbCBJbnN0YWxsYXRpb24gU2VydmljZVwiO1xuICBwLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIiQ1MCBwZXIgdHJlZSBzYXBsaW5nXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gY2hlcnJ5IGJsb3Nzb21cbiAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ3b29kXCIsIFwiaW5mb1wiLCBcImFsaWduXCIpO1xuXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwLnRleHRDb250ZW50ID0gXCJDaGVycnkgQmxvc3NvbVwiO1xuICBwLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIiQxMjAgcGVyIHRyZWUgc2FwbGluZ1wiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgbGV0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbWFnZS5zcmMgPSBjaGVycnk7XG4gIGRpdi5hcHBlbmRDaGlsZChteUltYWdlKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gY3JhYmFwcGxlXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcImluZm9cIiwgXCJhbGlnblwiKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiQ3JhYmFwcGxlXCI7XG4gIHAuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiJDYwIHBlciB0cmVlIHNhcGxpbmdcIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbWFnZS5zcmMgPSBjcmFiYXBwbGU7XG4gIGRpdi5hcHBlbmRDaGlsZChteUltYWdlKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gaXRlbSA0XG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcImluZm9cIiwgXCJhbGlnblwiKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiTWFwbGVcIjtcbiAgcC5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwLnRleHRDb250ZW50ID0gXCIkODAgcGVyIHRyZWUgc2FwbGluZ1wiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBteUltYWdlLnNyYyA9IG1hcGxlO1xuICBkaXYuYXBwZW5kQ2hpbGQobXlJbWFnZSk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvcFBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=