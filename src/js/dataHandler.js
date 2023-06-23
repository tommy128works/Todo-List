import createToDo from "./createToDo";
import createProject from "./createProject";
import { updateStorage, displayStorage } from "./dataStorage";

let projectsArray = [];

const checkProjectsDuplicates = (projectsArray, string) => {
  let projectTitles = projectsArray.map((project) => project.title);
  return projectTitles.includes(string);
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
    } else if (checkProjectsDuplicates(projectsArray, projectName.value)) {
      alert("Project names must be different");
    } else {
      projectsArray.push(createProject(projectName.value));
      updateStorage(projectsArray);

      // // for testing only
      // console.log(displayStorage());
      // console.log(projectsArray);

      // needs to send input value to createProject() and projectsArray
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

  addBtn.addEventListener("click", (event) => {
    form.style.display = "flex";
    addBtn.style.display = "none";
    taskTitle.focus();
  });

  submitBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
  });

  cancelBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
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

export { addAddProjectFormEventListeners, addAddTaskFormEventListeners };
