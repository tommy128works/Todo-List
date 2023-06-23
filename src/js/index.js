import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties
import storageAvailable from "./dataStorage";
import createToDo from "./createToDo";
import createProject from "./createProject";

// user interface module > imports other modules to divide UI into components
import { header, addToggleSidebarEventListener } from "./header";
import navigationToDos from "./navigationToDos";
import {
  navigationProjects,
  addAddProjectFormEventListeners,
} from "./navigationProjects";
import { contentSection, addAddTaskFormEventListeners } from "./contentSection";
import footer from "./footer";

document.body.appendChild(header());

let mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

let sideBarContainer = document.createElement("div");
sideBarContainer.classList.add("sidebar-section");
sideBarContainer.setAttribute("id", "sidebar");
sideBarContainer.appendChild(navigationToDos());
sideBarContainer.appendChild(navigationProjects());
mainContainer.appendChild(sideBarContainer);
mainContainer.appendChild(contentSection());
document.body.appendChild(mainContainer);

addToggleSidebarEventListener();
addAddProjectFormEventListeners();
addAddTaskFormEventListeners();

document.body.appendChild(footer());

// project form input
// eventlistener added to "add project" button located in navigationProjects
// cancel = close and reset form without submitting
// add = submit and reset form
