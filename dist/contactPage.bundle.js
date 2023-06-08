"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contactPage"],{

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactPage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // title
  let div = document.createElement("div");
  div.textContent = "Contact Us";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // contact 1
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent = "Mr. Oak";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Deciduous Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5554";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "realEmail@real.com";
  div.appendChild(p);

  element.appendChild(div);

  // contact 2
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Mrs. Palm";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Tropical Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5555";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "trueEmail@true.com";
  div.appendChild(p);

  element.appendChild(div);

  // contact 3
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Mr. Pine";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Evergreen Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5556";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "email@email.com";
  div.appendChild(p);

  element.appendChild(div);

  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contactPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuXG4gIC8vIHRpdGxlXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ3b29kXCIsIFwidGl0bGVcIik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAvLyBjb250YWN0IDFcbiAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ3b29kXCIsIFwiaW5mb1wiLCBcImFsaWduXCIpO1xuXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiTXIuIE9ha1wiO1xuICBwLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkRlY2lkdW91cyBNYW5hZ2VyXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiNTU1LTU1NS01NTU0XCI7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwicmVhbEVtYWlsQHJlYWwuY29tXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgLy8gY29udGFjdCAyXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwid29vZFwiLCBcImluZm9cIiwgXCJhbGlnblwiKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiTXJzLiBQYWxtXCI7XG4gIHAuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiVHJvcGljYWwgTWFuYWdlclwiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIjU1NS01NTUtNTU1NVwiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcInRydWVFbWFpbEB0cnVlLmNvbVwiO1xuICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIC8vIGNvbnRhY3QgM1xuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIndvb2RcIiwgXCJpbmZvXCIsIFwiYWxpZ25cIik7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIk1yLiBQaW5lXCI7XG4gIHAuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiRXZlcmdyZWVuIE1hbmFnZXJcIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwLnRleHRDb250ZW50ID0gXCI1NTUtNTU1LTU1NTZcIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwLnRleHRDb250ZW50ID0gXCJlbWFpbEBlbWFpbC5jb21cIjtcbiAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9