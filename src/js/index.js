import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties


// user interface module > imports other modules to divide UI into components
import header from "./header";

document.body.appendChild(header());

// buttons: All Tasks, Today, Next 7 Days, Important
// buttons container needs to respond and wrap for mobile view

let div = document.createElement("div");



// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
