// for now, add Project heading and 1 dummy project for UI
// maybe dummy project is default project

const navigationProjects = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");
  container.setAttribute("role", "group");
  container.setAttribute("aria-label", "Vertical button group");

  let heading = document.createElement("h1");
  heading.classList.add("medium-font", "underline");
  heading.textContent = "Projects";
  container.appendChild(heading);

  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "menu";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("project-title");
  span.textContent = "Project ONE";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "more_vert";
  btn.appendChild(span);
  container.appendChild(btn);

  btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("project-title");
  span.textContent = "Add Project";
  btn.appendChild(span);
  container.appendChild(btn);
  
  return container;
};

export default navigationProjects;
