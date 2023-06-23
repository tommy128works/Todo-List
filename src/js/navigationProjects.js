// for now, add Project heading and 1 dummy project for UI
// maybe dummy project is default project

const createButton = (title) => {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "drag_indicator";
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("sidebar-text");
  span.textContent = title;
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "more_vert";
  btn.appendChild(span);

  return btn;
};

const createAddButton = () => {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "add-project-button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);

  span = document.createElement("span");
  span.textContent = "Add Project";
  btn.appendChild(span);

  return btn;
};

const createAddProjectForm = () => {
  let form = document.createElement("form");
  form.setAttribute("id", "project-form");
  form.classList.add("project-form");

  let label = document.createElement("label");
  label.setAttribute("for", "project_name");
  label.textContent = "*Project Name:";
  form.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "project_name");
  input.setAttribute("id", "project_name");
  input.required = true;
  form.appendChild(input);

  let btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  let submitBtn = document.createElement("button");
  // "submit" submits the form and refreshes page, but this specific application may not need to submit to a real database
  // if no real database, you can set type = "button" to stop refreshes
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit-project-button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("btn", "btn-success");
  btnsContainer.appendChild(submitBtn);

  let cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("id", "cancel-project-button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("btn", "btn-danger");
  btnsContainer.appendChild(cancelBtn);

  form.appendChild(btnsContainer);

  return form;
};

const navigationProjects = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");

  let heading = document.createElement("h1");
  heading.classList.add("medium-font", "sidebar-heading");
  heading.textContent = "Projects";
  container.appendChild(heading);

  // dummy project to be removed in the future
  container.appendChild(createButton("Project ONE"));

  container.appendChild(createAddButton());
  container.appendChild(createAddProjectForm());

  return container;
};

export default navigationProjects;
