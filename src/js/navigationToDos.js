const createButton = (title) => {
  let btn = document.createElement("btn");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "inbox";
  btn.appendChild(span);

  span = document.createElement("span");
  span.textContent = title;
  btn.appendChild(span);

  return btn;
}

const navigationToDos = () => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");

  container.appendChild(createButton("All Tasks"));
  container.appendChild(createButton("Today"));
  container.appendChild(createButton("Next 7 Days"));

  return container;
};

export default navigationToDos;
