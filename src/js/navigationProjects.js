// for now, add Project heading and 1 dummy project for UI
// maybe dummy project is default project

const createButton = (title) => {
  let btn = document.createElement("btn");
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
  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);

  span = document.createElement("span");
  span.textContent = "Add Project";
  btn.appendChild(span);

  return btn;
};

const navigationProjects = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");

  let heading = document.createElement("h1");
  heading.classList.add("medium-font", "sidebar-heading");
  heading.textContent = "Projects";
  container.appendChild(heading);

  container.appendChild(createButton("Project ONE"));

  container.appendChild(createAddButton());

  return container;
};

export default navigationProjects;
