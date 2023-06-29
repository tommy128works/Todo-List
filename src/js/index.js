import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
import { checkStorageAvailability } from "./dataStorage";
import {
  addAddProjectFormEventListeners,
  addAddTaskFormEventListeners, storeSampleData
} from "./dataHandler";

// UI modules
import { header, addToggleSidebarEventListener } from "./header";
import navigationToDos from "./navigationToDos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";
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

storeSampleData();