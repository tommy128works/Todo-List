const shopPage = () => {
  const element = document.createElement("div");
  element.classList.add("align");

  // shop title
  let div = document.createElement("div");
  div.textContent = "Shop";
  div.classList.add("wood", "title");
  element.appendChild(div);

  // Installation fee
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  let p = document.createElement("div");
  p.textContent = "Optional Installation Service";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$50 per tree sapling";
  div.appendChild(p);

  element.appendChild(div);

  // cherry blossom
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Cherry Blossom";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$120 per tree sapling";
  div.appendChild(p);

  let myImage = new Image();
  myImage.src = cherry;
  div.appendChild(myImage);

  element.appendChild(div);

  // crabapple
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Crabapple";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$60 per tree sapling";
  div.appendChild(p);

  myImage = new Image();
  myImage.src = crabapple;
  div.appendChild(myImage);

  element.appendChild(div);

  // item 4
  div = document.createElement("div");
  div.classList.add("wood", "info", "align");

  p = document.createElement("div");
  p.textContent = "Maple";
  p.classList.add("heading");
  div.appendChild(p);

  p = document.createElement("div");
  p.textContent = "$80 per tree sapling";
  div.appendChild(p);

  myImage = new Image();
  myImage.src = maple;
  div.appendChild(myImage);

  element.appendChild(div);

  return element;
};

export default shopPage;
