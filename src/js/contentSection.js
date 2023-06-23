// make dummy Title amd dummy task for now

const createTitle = () => {
  let div = document.createElement("div");
  div.classList.add("large-font");
  div.textContent = "All Tasks"; // This title changes based on page

  return div;
};

const createTaskItem = (title, description, date, priority) => {
  let container = document.createElement("div");
  container.classList.add("task-item");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "radio_button_unchecked";
  container.appendChild(span);

  let textContainer = document.createElement("div");
  textContainer.classList.add("task-item-text");

  let taskTitle = document.createElement("div");
  taskTitle.classList.add("small-font");
  taskTitle.textContent = title;
  textContainer.appendChild(taskTitle);
  let taskDescription = document.createElement("div");
  taskDescription.classList.add("smallest-font");
  taskDescription.textContent = description;
  textContainer.appendChild(taskDescription);
  container.appendChild(textContainer);

  let div = document.createElement("div");
  div.classList.add("small-font");
  div.textContent = date;
  container.appendChild(div);

  // I plan to add priority inside fancy icon and add margin
  div = document.createElement("div");
  div.classList.add("small-font");
  div.textContent = priority;
  container.appendChild(div);

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
  label.textContent = "Title:";
  form.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task_title");
  input.setAttribute("id", "task_title");
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
  input.setAttribute("type", "text");
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

const contentSection = () => {
  let container = document.createElement("div");
  container.classList.add("content-section");

  container.appendChild(createTitle());
  container.appendChild(
    createTaskItem("tempTitle", "tempDescription", "date format undecided", 5)
  );
  container.appendChild(createAddTaskButton());

  container.appendChild(createAddTaskForm());

  return container;
};

export { contentSection, addAddTaskFormEventListeners };
