import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
import {
  addAddProjectFormEventListeners,
  addAddTaskFormEventListeners, onStartUp,
} from "./dataHandler";

// UI modules
import { header, addToggleSidebarEventListener } from "./header";
import navigationToDos from "./navigationToDos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";
import footer from "./footer";

const loadPage = () => {
  let mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";

  let sideBarContainer = document.createElement("div");
  sideBarContainer.classList.add("sidebar-section");
  sideBarContainer.setAttribute("id", "sidebar");
  sideBarContainer.appendChild(navigationToDos());
  sideBarContainer.appendChild(navigationProjects());
  mainContainer.appendChild(sideBarContainer);
  mainContainer.appendChild(contentSection());
  
  addToggleSidebarEventListener();
  addAddProjectFormEventListeners();
  addAddTaskFormEventListeners();
}

// let copyProjectsArray = [];
// console.log(copyProjectsArray);
// onStartUp();

document.body.appendChild(header());

let mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);

document.body.appendChild(footer());



loadPage();



