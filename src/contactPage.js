const contactPage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // title
  let div = document.createElement("div");
  div.textContent = "Contact Us";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // contact 1
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent = "Mr. Oak";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Deciduous Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5554";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "realEmail@real.com";
  div.appendChild(p);

  element.appendChild(div);

  // contact 2
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Mrs. Palm";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Tropical Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5555";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "trueEmail@true.com";
  div.appendChild(p);

  element.appendChild(div);

  // contact 3
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Mr. Pine";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Evergreen Manager";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "555-555-5556";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "email@email.com";
  div.appendChild(p);

  element.appendChild(div);

  return element;
};

export default contactPage;
