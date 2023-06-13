const header = () => {
  let header = document.createElement("header");
  header.classList.add("navbar", "bg-dark", "large-font");
  header.setAttribute("data-bs-theme", "dark");
  let div = document.createElement("div");
  div.classList.add("container-fluid");

  let btn = document.createElement("btn");
  let span = document.createElement("span");
  span.classList.add("navbar-toggler-icon");
  btn.appendChild(span);
  div.appendChild(btn);

  span = document.createElement("span");
  span.classList.add("navbar-brand", "large-font");
  span.textContent = "Todo List";
  div.appendChild(span);

  header.appendChild(div);
  return header;
};

export default header;
