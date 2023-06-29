import createToDo from "./createToDo";
import createProject from "./createProject";
import { updateStorage, retrieveStorage } from "./dataStorage";

let projectsArray = [];

const storeSampleData = () => {
  projectsArray.push(createProject("School"));
  projectsArray[0].addToDo(createToDo("Assignment"));
  projectsArray[0].addToDo(createToDo("Study for Test"));
  projectsArray[0].addToDo(createToDo("Project"));

  projectsArray.push(createProject("Entertainment"));
  projectsArray[1].addToDo(createToDo("TV"));
  projectsArray[1].addToDo(createToDo("Movies"));
  projectsArray[1].addToDo(createToDo("Books"));
  
  // for testing only
  console.log(projectsArray);

  updateStorage(projectsArray);

  // retrieve localStorage and store in projectsArray
  let retrievedProjectsArray = [];
  let retrievedData = retrieveStorage();
  for (let i = 0; i < retrievedData.length; i++) {
    retrievedProjectsArray[i] = createProject(retrievedData[i].title);
    retrievedProjectsArray[i].addToDos(retrievedData[i].toDos);
  }
  console.log(retrievedProjectsArray);
}


const checkDuplicates = (array, string) => {
  let arrayTitles = array.map((element) => element.title);
  return arrayTitles.includes(string);
}

const addAddProjectFormEventListeners = () => {
  let addBtn = document.getElementById("add-project-button");
  let submitBtn = document.getElementById("submit-project-button");
  let cancelBtn = document.getElementById("cancel-project-button");
  let form = document.getElementById("project-form");
  let projectName = document.getElementById("project_name");

  addBtn.addEventListener("click", (event) => {
    form.style.display = "block";
    addBtn.style.display = "none";
    projectName.focus();
  });

  submitBtn.addEventListener("click", (event) => {
    if (projectName.value === "") {
      alert("Project name cannot be empty!");
    } else if (checkDuplicates(projectsArray, projectName.value)) {
      alert("Project names must be different");
    } else {
      projectsArray.push(createProject(projectName.value));
      updateStorage(projectsArray);

      // // for testing only
      // console.log(displayStorage());
      // console.log(projectsArray);

      form.style.display = "none";
      addBtn.style.display = "flex";
      projectName.value = "";
    }
  });

  cancelBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
    projectName.value = "";
  });

  form.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
        document.getElementById("submit-project-button").click();
        break;
      case "Escape":
        document.getElementById("cancel-project-button").click();
        break;
    }
  });
};

const addAddTaskFormEventListeners = () => {
  let addBtn = document.getElementById("add-task-button");
  let submitBtn = document.getElementById("submit-task-button");
  let cancelBtn = document.getElementById("cancel-task-button");
  let form = document.getElementById("task-form");
  let taskTitle = document.getElementById("task_title");
  let taskDetails = document.getElementById("task_details");
  let taskDate = document.getElementById("task_date");

  addBtn.addEventListener("click", (event) => {
    form.style.display = "flex";
    addBtn.style.display = "none";
    taskTitle.focus();
  });

  submitBtn.addEventListener("click", (event) => {
    if (taskTitle.value === "") {
      alert("Task title cannot be empty!");
    } 
    // Need to assume project context which depends on what page the user is currently on
    
    // else if (checkDuplicates(projectsArray, projectName.value)) {
    //   alert("Project names must be different");
    // }
     else {
      // need to call projectsArray[index].addToDo();
      // testProject.addToDo(createToDo(taskTitle.value));


      form.style.display = "none";
      addBtn.style.display = "flex";
      taskTitle.value = "";
      taskDetails.value = "";
      taskDate.value = "";
    }
  });

  cancelBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
    taskTitle.value = "";
    taskDetails.value = "";
    taskDate.value = "";
  });

  form.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
        document.getElementById("submit-task-button").click();
        break;
      case "Escape":
        document.getElementById("cancel-task-button").click();
        break;
    }
  });
};

export { storeSampleData, addAddProjectFormEventListeners, addAddTaskFormEventListeners };
