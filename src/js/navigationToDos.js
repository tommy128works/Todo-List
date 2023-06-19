const createButton = (title, symbol) => {
  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = symbol;
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("sidebar-text");
  span.textContent = title;
  btn.appendChild(span);

  return btn;
}

const navigationToDos = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");

  container.appendChild(createButton("All Tasks", "inbox"));
  container.appendChild(createButton("Today", "today"));
  container.appendChild(createButton("Next 7 Days", "date_range"));

  return container;
};

export default navigationToDos;
