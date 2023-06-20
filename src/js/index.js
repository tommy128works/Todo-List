import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties
import storageAvailable from "./dataStorage";
import createToDo from "./createToDo";
import createProject from "./createProject";

// user interface module > imports other modules to divide UI into components
import { header, addToggleSidebarEventHandler } from "./header";
import navigationToDos from "./navigationToDos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";

document.body.appendChild(header());
let mainContainer = document.createElement("div");
let sideBarContainer = document.createElement("div");
sideBarContainer.classList.add("sidebar-section");
sideBarContainer.setAttribute("id", "sidebar");
sideBarContainer.appendChild(navigationToDos());
sideBarContainer.appendChild(navigationProjects());

mainContainer.classList.add("main-container");
mainContainer.appendChild(sideBarContainer);
mainContainer.appendChild(contentSection());
document.body.appendChild(mainContainer);

addToggleSidebarEventHandler();

// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
