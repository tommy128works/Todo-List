const navigationTodos = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");
  container.setAttribute("role", "group");
  container.setAttribute("aria-label", "Vertical button group");

  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.textContent = "All Tasks";
  container.appendChild(btn);

  btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.textContent = "Today";
  container.appendChild(btn);

  btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.textContent = "Next 7 Days";
  container.appendChild(btn);
  
  return container;
};

export default navigationTodos;
