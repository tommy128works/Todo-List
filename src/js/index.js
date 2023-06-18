import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// modules
// module for todos that contains all properties
import storageAvailable from "./dataStorage";
import createToDo from "./createToDo";

// user interface module > imports other modules to divide UI into components
import header from "./header";
import navigationTodos from "./navigationTodos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";

document.body.appendChild(header());
document.body.appendChild(navigationTodos());
document.body.appendChild(navigationProjects());
document.body.appendChild(contentSection());

// check web storage api availability on browser
// if no, display a warning indicating data will not be saved because..
if (storageAvailable("localStorage")) {
  console.log("It is working");
} else {
  console.log("it is not working");
}

// TESTING = create todo and console.log it for now
let testTodo = createToDo("Assignment");
console.log(testTodo);

localStorage.clear();
localStorage.setItem(testTodo.title, JSON.stringify(testTodo));
let retrievedData = JSON.parse(localStorage.getItem("Assignment"));
console.log(retrievedData);

// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
