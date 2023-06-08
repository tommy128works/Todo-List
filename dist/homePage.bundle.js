"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["homePage"],{

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homePage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // shop title
  let div = document.createElement("div");
  div.textContent = "The Cabin";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // customer review
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent =
    "The Cabin has the highest quality tree saplings! The Cabin's tree installation service was fast and easy! The staff provided amazing customer service. They were willing to answer any questions or concerns that I had.";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Mandelorian";
  p.classList.add("heading");
  div.appendChild(p);

  element.appendChild(div);

  // hours
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Hours";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Weekdays: 8AM - 8PM";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Weekends: 9AM - 9PM";
  div.appendChild(p);

  element.appendChild(div);

  // location
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Location";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "123 Wood Drive, Woodville, Foreston";
  div.appendChild(p);

  element.appendChild(div);

  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuXG4gIC8vIHNob3AgdGl0bGVcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9IFwiVGhlIENhYmluXCI7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcInRpdGxlXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gY3VzdG9tZXIgcmV2aWV3XG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcImluZm9cIiwgXCJhbGlnblwiKTtcblxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPVxuICAgIFwiVGhlIENhYmluIGhhcyB0aGUgaGlnaGVzdCBxdWFsaXR5IHRyZWUgc2FwbGluZ3MhIFRoZSBDYWJpbidzIHRyZWUgaW5zdGFsbGF0aW9uIHNlcnZpY2Ugd2FzIGZhc3QgYW5kIGVhc3khIFRoZSBzdGFmZiBwcm92aWRlZCBhbWF6aW5nIGN1c3RvbWVyIHNlcnZpY2UuIFRoZXkgd2VyZSB3aWxsaW5nIHRvIGFuc3dlciBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zIHRoYXQgSSBoYWQuXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiTWFuZGVsb3JpYW5cIjtcbiAgcC5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAvLyBob3Vyc1xuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIndvb2RcIiwgXCJpbmZvXCIsIFwiYWxpZ25cIik7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIHAuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiV2Vla2RheXM6IDhBTSAtIDhQTVwiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIldlZWtlbmRzOiA5QU0gLSA5UE1cIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAvLyBsb2NhdGlvblxuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIndvb2RcIiwgXCJpbmZvXCIsIFwiYWxpZ25cIik7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIHAuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiMTIzIFdvb2QgRHJpdmUsIFdvb2R2aWxsZSwgRm9yZXN0b25cIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9