import createToDo from "./createToDo";
import createProject from "./createProject";
import {
  checkStorageAvailability,
  updateStorage,
  retrieveStorage,
} from "./dataStorage";
import navigationToDos from "./navigationToDos";
import navigationProjects from "./navigationProjects";
import contentSection from "./contentSection";
import { addToggleSidebarEventListener } from "./header";

let projectsArray = [];

const storeSampleData = () => {
  projectsArray.push(createProject("School"));
  projectsArray[0].addToDo(createToDo("Assignment", null, "2023-07-08"));
  projectsArray[0].addToDo(createToDo("Study for Test", null, "2023-07-01"));
  projectsArray[0].addToDo(createToDo("Project", null, "2023-07-02"));

  projectsArray.push(createProject("Entertainment"));
  projectsArray[1].addToDo(createToDo("TV", null, "2023-07-06"));
  projectsArray[1].addToDo(createToDo("Movies", null, "2023-07-04"));
  projectsArray[1].addToDo(createToDo("Books", null, "2023-07-05"));

  updateStorage(projectsArray);
};

const retrieveProjectsArrayFromStorage = () => {
  let retrievedProjectsArray = [];
  let retrievedData = retrieveStorage();
  for (let i = 0; i < retrievedData.length; i++) {
    retrievedProjectsArray[i] = createProject(retrievedData[i].title);
    retrievedProjectsArray[i].addToDos(retrievedData[i].toDos);
  }

  return retrievedProjectsArray;
};

const loadPage = (currentPage) => {
  let projectsTitles = [];
  for (let i = 0; i < projectsArray.length; i++) {
    projectsTitles.push(projectsArray[i].title);
  }

  // need to make cases to populate the tasks that meet the criteria
  // need to filter tasks while retaining properties
  let tasksList = [];

  switch (currentPage) {
    case "All Tasks":
      for (let i = 0; i < projectsArray.length; i++) {
        for (let x = 0; x < projectsArray[i].toDos.length; x++) {
          tasksList.push(projectsArray[i].toDos[x]);
        }
      }
      break;

    case "Today":
      break;

    case "Next 7 Days":
      break;

    default:
    // for specific projects
    // what if empty?
  }
  tasksList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  })

  let mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";

  let sideBarContainer = document.createElement("div");
  sideBarContainer.classList.add("sidebar-section");
  sideBarContainer.setAttribute("id", "sidebar");
  sideBarContainer.appendChild(navigationToDos());
  sideBarContainer.appendChild(navigationProjects(projectsTitles));
  mainContainer.appendChild(sideBarContainer);
  mainContainer.appendChild(contentSection(currentPage, tasksList));

  if (
    !(
      currentPage === "All Tasks" ||
      currentPage === "Today" ||
      currentPage === "Next 7 Days"
    )
  ) {
    addAddTaskFormEventListeners();
  }

  addToggleSidebarEventListener();
  addAddProjectFormEventListeners();
  addNavigationButtonsEventListeners();
};

const onStartUp = () => {
  checkStorageAvailability();

  // for development purpose only
  storeSampleData();

  if (Object.keys(localStorage).length > 0) {
    projectsArray = retrieveProjectsArrayFromStorage();
  }

  loadPage("All Tasks", projectsArray);
};

const checkDuplicates = (array, string) => {
  let arrayTitles = array.map((element) => element.title);
  return arrayTitles.includes(string);
};

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
    let currentProject = document.getElementById("content-title").textContent;
    let projectIndex = projectsArray.findIndex(
      (project) => project.title === currentProject
    );

    if (taskTitle.value === "") {
      alert("Task title cannot be empty!");
    } else if (
      checkDuplicates(projectsArray[projectIndex].toDos, taskTitle.value)
    ) {
      alert("Task names must be different");
    } else {
      projectsArray[projectIndex].addToDo(
        createToDo(taskTitle.value, taskDetails.value, taskDate.value)
      );
      updateStorage(projectsArray);

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

const addNavigationButtonsEventListeners = () => {
  let navigationButtons = document.querySelectorAll(".navigation-button");

  navigationButtons.forEach((element) => {
    element.addEventListener("click", (event) => {
      loadPage(element.dataset.title);
    });
  });
};

export {
  storeSampleData,
  retrieveProjectsArrayFromStorage,
  onStartUp,
  addAddProjectFormEventListeners,
  addAddTaskFormEventListeners,
};
