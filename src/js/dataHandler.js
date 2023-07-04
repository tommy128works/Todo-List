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

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const storeSampleData = () => {
  projectsArray.push(createProject("School"));
  projectsArray[0].addToDo(createToDo("Assignment", null, "2023-07-08", true));
  projectsArray[0].addToDo(
    createToDo("Study for Test", null, "2023-07-01", false, true)
  );
  projectsArray[0].addToDo(
    createToDo("Project", null, "2023-07-02", true, true)
  );

  projectsArray.push(createProject("Entertainment"));
  projectsArray[1].addToDo(createToDo("TV", null, "2023-07-09"));
  projectsArray[1].addToDo(createToDo("Movies", null, "2023-07-04"));
  projectsArray[1].addToDo(createToDo("Books", null, "2023-06-30"));

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

  let tasksList = [];
  let count = 0;
  switch (currentPage) {
    case "All Tasks":
      for (let i = 0; i < projectsArray.length; i++) {
        for (let x = 0; x < projectsArray[i].toDos.length; x++) {
          tasksList.push(projectsArray[i].toDos[x]);
          tasksList[count].project = projectsArray[i].title;
          count++;
        }
      }
      break;

    case "Today":
      let dateTemp2 = new Date();
      let dateToday = dateTemp2.addDays(-1);

      for (let i = 0; i < projectsArray.length; i++) {
        for (let x = 0; x < projectsArray[i].toDos.length; x++) {
          let dateTask = new Date(projectsArray[i].toDos[x].dueDate);

          if (dateTask.toDateString() === dateToday.toDateString()) {
            tasksList.push(projectsArray[i].toDos[x]);
            tasksList[count].project = projectsArray[i].title;
            count++;
          }
        }
      }
      break;

    case "Next 7 Days":
      let dateTemp = new Date();
      dateTemp.setHours(0, 0, 0, 0);
      let date2Days = dateTemp.addDays(-2);
      let date7Days = dateTemp.addDays(7);
      date7Days.setHours(0, 0, 0, 0);

      for (let i = 0; i < projectsArray.length; i++) {
        for (let x = 0; x < projectsArray[i].toDos.length; x++) {
          let dateTask = new Date(projectsArray[i].toDos[x].dueDate);
          dateTask.setHours(0, 0, 0, 0);

          if (dateTask < date7Days && dateTask > date2Days) {
            tasksList.push(projectsArray[i].toDos[x]);
            tasksList[count].project = projectsArray[i].title;
            count++;
          }
        }
      }

      break;

    default:
      let projectIndex = projectsArray.findIndex(
        (project) => project.title === currentPage
      );
      for (let i = 0; i < projectsArray[projectIndex].toDos.length; i++) {
        tasksList.push(projectsArray[projectIndex].toDos[i]);
        tasksList[count].project = projectsArray[projectIndex].title;
        count++;
      }
  }
  tasksList.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

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
  addIsCompleteIconEventListeners();
  addFavouriteIconEventListeners();
};

const onStartUp = () => {
  checkStorageAvailability();

  // for development purpose only
  // storeSampleData();

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
      loadPage(projectName.value);

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
        submitBtn.click();
        break;
      case "Escape":
        cancelBtn.click();
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
      loadPage(currentProject);

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
        submitBtn.click();
        break;
      case "Escape":
        cancelBtn.click();
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

const addIsCompleteIconEventListeners = () => {
  let icons = document.querySelectorAll(".is-complete-icon");

  icons.forEach((element) => {
    let projectIndex = projectsArray.findIndex(
      (project) => project.title === element.parentElement.dataset.project
    );
    let taskIndex = projectsArray[projectIndex].toDos.findIndex(
      (task) => task.title === element.parentElement.dataset.task
    );

    if (projectsArray[projectIndex].toDos[taskIndex].isComplete === true) {
      element.textContent = "check_circle";
      element.nextSibling.style.textDecoration = "line-through";
    } else {
      element.textContent = "radio_button_unchecked";
    }

    element.addEventListener("click", (event) => {
      projectsArray[projectIndex].toDos[taskIndex].isComplete =
        !projectsArray[projectIndex].toDos[taskIndex].isComplete;
      updateStorage(projectsArray);

      if (element.textContent === "check_circle") {
        element.textContent = "radio_button_unchecked";
        element.nextSibling.style.textDecoration = "";
      } else {
        element.textContent = "check_circle";
        element.nextSibling.style.textDecoration = "line-through";
      }
    });
  });
};

const addFavouriteIconEventListeners = () => {
  let icons = document.querySelectorAll(".favourite-icon");

  icons.forEach((element) => {
    let projectIndex = projectsArray.findIndex(
      (project) => project.title === element.parentElement.dataset.project
    );
    let taskIndex = projectsArray[projectIndex].toDos.findIndex(
      (task) => task.title === element.parentElement.dataset.task
    );

    if (projectsArray[projectIndex].toDos[taskIndex].favourite === true) {
      element.textContent = "stars";
    } else {
      element.textContent = "star";
    }

    element.addEventListener("click", (event) => {
      projectsArray[projectIndex].toDos[taskIndex].favourite =
        !projectsArray[projectIndex].toDos[taskIndex].favourite;
      updateStorage(projectsArray);

      if (element.textContent === "stars") {
        element.textContent = "star";
      } else {
        element.textContent = "stars";
      }
    });
  });
};

export { onStartUp };
