// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties

// user interface module > imports other modules to divide UI into components

// pages modules > displays all todos based on page context
// import homePage from "./homePage";
// import shopPage from "./shopPage";
// import contactPage from "./contactPage";

// header with title
let nav = document.createElement("nav");
nav.classList.add("navbar", "bg-dark", "large-font");
nav.setAttribute("data-bs-theme", "dark");
let div = document.createElement("div");
div.classList.add("container-fluid");

let btn = document.createElement("btn");
let span = document.createElement("span");
span.classList.add("navbar-toggler-icon");
btn.appendChild(span);
div.appendChild(btn);

span = document.createElement("span");
span.classList.add("navbar-brand", "large-font");
span.textContent = "Todo List";
div.appendChild(span);

nav.appendChild(div);
document.body.appendChild(nav);




// buttons adjacent to header section
// buttons container needs to respond and wrap for mobile view


// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
