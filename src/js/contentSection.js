const createTitle = (currentPage) => {
  let div = document.createElement("div");
  div.classList.add("large-font");
  div.setAttribute("id", "content-title");
  div.textContent = currentPage;

  return div;
};

// need to add current page for project but still work with task filters
const createTaskItem = (title, description, dueDate, project) => {
  let container = document.createElement("span");
  container.classList.add("task-item");
  container.setAttribute("data-project", project);
  container.setAttribute("data-task", title);

  // intended for isComplete
  let span = document.createElement("span");
  span.classList.add(
    "material-symbols-outlined",
    "is-complete-icon",
    "prevent-select"
  );
  container.appendChild(span);

  let textContainer = document.createElement("div");
  textContainer.classList.add("task-item-text");

  // intended for title and description
  let taskTitle = document.createElement("div");
  taskTitle.classList.add("small-font");
  taskTitle.textContent = title;
  textContainer.appendChild(taskTitle);
  let taskDescription = document.createElement("div");
  taskDescription.classList.add("smallest-font");
  taskDescription.textContent = description;
  textContainer.appendChild(taskDescription);
  container.appendChild(textContainer);

  // intended for dueDate
  let div = document.createElement("div");
  div.classList.add("small-font");
  div.textContent = dueDate;
  container.appendChild(div);

  // intended for favourite
  div = document.createElement("div");
  div.classList.add("small-font");
  // div.textContent = favourite;
  container.appendChild(div);

  // intended for editing
  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "more_vert";
  container.appendChild(span);

  return container;
};

const createAddTaskButton = () => {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary", "add-task-button");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "add-task-button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("project-title");
  span.textContent = "Add New Task";
  btn.appendChild(span);

  return btn;
};

const createAddTaskForm = () => {
  let form = document.createElement("form");
  form.setAttribute("id", "task-form");
  form.classList.add("task-form");

  let label = document.createElement("label");
  label.setAttribute("for", "task_title");
  label.textContent = "*Title:";
  form.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task_title");
  input.setAttribute("id", "task_title");
  input.required = true;
  form.appendChild(input);

  label = document.createElement("label");
  label.setAttribute("for", "task_details");
  label.textContent = "Details:";
  form.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task_details");
  input.setAttribute("id", "task_details");
  form.appendChild(input);

  label = document.createElement("label");
  label.setAttribute("for", "task_date");
  label.textContent = "Date:";
  form.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "task_date");
  input.setAttribute("id", "task_date");
  form.appendChild(input);

  let btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  let submitBtn = document.createElement("button");
  // "submit" submits the form and refreshes page, but this specific application may not need to submit to a real database
  // if no real database, you can set type = "button" to stop refreshes
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit-task-button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("btn", "btn-success");
  btnsContainer.appendChild(submitBtn);

  let cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("id", "cancel-task-button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("btn", "btn-danger");
  btnsContainer.appendChild(cancelBtn);

  form.appendChild(btnsContainer);

  return form;
};

const contentSection = (currentPage, tasksList) => {
  let container = document.createElement("div");
  container.classList.add("content-section");

  container.appendChild(createTitle(currentPage));

  for (let i = 0; i < tasksList.length; i++) {
    container.appendChild(
      createTaskItem(
        tasksList[i].title,
        tasksList[i].description,
        tasksList[i].dueDate,
        tasksList[i].project
      )
    );
  }

  if (
    !(
      currentPage === "All Tasks" ||
      currentPage === "Today" ||
      currentPage === "Next 7 Days"
    )
  ) {
    container.appendChild(createAddTaskButton());
    container.appendChild(createAddTaskForm());
  }

  return container;
};

export default contentSection;
