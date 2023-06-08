// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import "./style.scss";
import homePage from "./homePage";
import shopPage from "./shopPage";
import contactPage from "./contactPage";

// create header tabs
let div = document.createElement("div");
div.classList.add("header");

let button = document.createElement("button");
button.textContent = "Home";
button.setAttribute("id", "home-btn");
div.appendChild(button);

button = document.createElement("button");
button.textContent = "Shop";
button.setAttribute("id", "shop-btn");
div.appendChild(button);

button = document.createElement("button");
button.textContent = "Contact";
button.setAttribute("id", "contact-btn");
div.appendChild(button);

document.body.appendChild(div);

div = document.createElement("div");
div.setAttribute("id", "content");
document.body.appendChild(div);
const content = document.getElementById("content");
content.appendChild(homePage());

const delContent = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  delContent();
  content.appendChild(homePage());
});

const shopBtn = document.getElementById("shop-btn");
shopBtn.addEventListener("click", () => {
  delContent();
  content.appendChild(shopPage());
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  delContent();
  content.appendChild(contactPage());
});
