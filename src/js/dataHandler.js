import createProject from "./createProject";
import { updateStorage } from "./dataStorage";
import projectsArray from "./index";

const addAddProjectFormEventListeners = () => {
  let addBtn = document.getElementById("add-project-button");
  let submitBtn = document.getElementById("submit-project-button");
  let cancelBtn = document.getElementById("cancel-project-button");
  let form = document.getElementById("project-form");
  let projectName = document.getElementById("project_name");

  addBtn.addEventListener("click", (event) => {
    form.style.display = "block";
    addBtn.style.display = "none";
  });

  submitBtn.addEventListener("click", (event) => {
    if (projectName.value === "") {
      alert("Project name cannot be empty!");
    } else {
      // let newProject = createProject(projectName.value);
      // projectsArray.push(newProject);
      // updateStorage(projectsArray);

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
};

const addAddTaskFormEventListeners = () => {
  let addBtn = document.getElementById("add-task-button");
  let submitBtn = document.getElementById("submit-task-button");
  let cancelBtn = document.getElementById("cancel-task-button");
  let form = document.getElementById("task-form");

  addBtn.addEventListener("click", (event) => {
    form.style.display = "flex";
    addBtn.style.display = "none";
  });

  submitBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
  });

  cancelBtn.addEventListener("click", (event) => {
    form.style.display = "none";
    addBtn.style.display = "flex";
  });
};

export { addAddProjectFormEventListeners, addAddTaskFormEventListeners };
