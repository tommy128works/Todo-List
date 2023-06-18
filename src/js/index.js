import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties
import storageAvailable from "./dataStorage";
import createToDo from "./createToDo";
import createProject from "./createProject";

// user interface module > imports other modules to divide UI into components
import header from "./header";
import navigationTodos from "./navigationTodos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";

document.body.appendChild(header());
document.body.appendChild(navigationTodos());
document.body.appendChild(navigationProjects());
document.body.appendChild(contentSection());

// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
