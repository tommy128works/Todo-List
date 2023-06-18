// make dummy Title
// make one dummy Task
const contentSection = () => {
  let container = document.createElement("div");
  container.classList.add("large-font");
  container.textContent = "All Tasks";

  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "drag_indicator";
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

export default contentSection;
