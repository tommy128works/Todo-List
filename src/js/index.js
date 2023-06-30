import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
import {
  onStartUp,
} from "./dataHandler";

// UI modules
import { header } from "./header";

import footer from "./footer";



// let copyProjectsArray = [];
// console.log(copyProjectsArray);


document.body.appendChild(header());

let mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);

document.body.appendChild(footer());

onStartUp();




