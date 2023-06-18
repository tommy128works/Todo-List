const navigationTodos = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");
  container.setAttribute("role", "group");
  container.setAttribute("aria-label", "Vertical button group");

  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "inbox";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("project-name");
  span.textContent = "All Tasks";
  btn.appendChild(span);
  container.appendChild(btn);

  btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "today";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("project-name");
  span.textContent = "Today";
  btn.appendChild(span);
  container.appendChild(btn);

  btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "project");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "date_range";
  btn.appendChild(span);
  span = document.createElement("span");
  span.classList.add("project-name");
  span.textContent = "Next 7 Days";
  btn.appendChild(span);
  container.appendChild(btn);

  return container;
};

export default navigationTodos;
