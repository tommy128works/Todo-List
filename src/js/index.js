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
let div = document.createElement("div");
div.classList.add("header");

// buttons adjacent to header section
// buttons container needs to respond and wrap for mobile view
let button = document.createElement("button");
button.textContent = "Home";
button.setAttribute("id", "home-btn");
div.appendChild(button);

button = document.createElement("button");
button.textContent = "Shop";
button.setAttribute("id", "shop-btn");
div.appendChild(button);

// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
