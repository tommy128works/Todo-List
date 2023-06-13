import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties

// user interface module > imports other modules to divide UI into components
import header from "./header";
import navigationTodos from "./navigationTodos";

document.body.appendChild(header());
document.body.appendChild(navigationTodos());

// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
