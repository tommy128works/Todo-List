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

// check web storage api availability on browser
// if no, display a warning indicating data will not be saved because..
if (storageAvailable("localStorage")) {
  console.log("It is working");
} else {
  console.log("it is not working");
}

// // TESTING = create todo and console.log it for now
// let testTodo = createToDo("Assignment");
// console.log(testTodo);

// localStorage.clear();
// localStorage.setItem(testTodo.title, JSON.stringify(testTodo));
// let retrievedData = JSON.parse(localStorage.getItem("Assignment"));
// console.log(retrievedData);



// // TESTING = create project and console.log it for now
// let testProject = createProject("Physics");
// let toDo1 = createToDo("Assignment");
// let toDo2 = createToDo("Study for Test");
// let toDo3 = createToDo("Project");
// let toDo4 = createToDo("NEW");
// testProject.addToDo(toDo1);
// testProject.addToDo(toDo2);
// testProject.addToDo(toDo3);

// console.log(toDo1);
// console.log(testProject);

// localStorage.clear();
// localStorage.setItem(testProject.title, JSON.stringify(testProject));
// let retrievedData = JSON.parse(localStorage.getItem(testProject.title));

// let retrievedProject = createProject(retrievedData.title);
// retrievedProject.addToDos(retrievedData.toDos);
// retrievedProject.addToDo(toDo4);
// console.log(retrievedProject);









// create eventHandlers to load different filters
// create module for each page

// create form inputs required > add project, add todo, edit todo (same as add)
