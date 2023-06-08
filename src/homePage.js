const homePage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // shop title
  let div = document.createElement("div");
  div.textContent = "The Cabin";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // customer review
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent =
    "The Cabin has the highest quality tree saplings! The Cabin's tree installation service was fast and easy! The staff provided amazing customer service. They were willing to answer any questions or concerns that I had.";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Mandelorian";
  p.classList.add("heading");
  div.appendChild(p);

  element.appendChild(div);

  // hours
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Hours";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Weekdays: 8AM - 8PM";
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "Weekends: 9AM - 9PM";
  div.appendChild(p);

  element.appendChild(div);

  // location
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Location";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "123 Wood Drive, Woodville, Foreston";
  div.appendChild(p);

  element.appendChild(div);

  return element;
};

export default homePage;
