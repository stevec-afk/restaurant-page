import "./styles.css";
import { renderLogo } from "./pages/home.js"
import { renderAboutus } from "./pages/about-us.js";
import { renderContact } from "./pages/contact.js";
import { renderMenu } from "./pages/menu.js";

const $content = document.getElementById("content");
const $navbar = document.getElementById("navbar");

// Helper funciton to create HTML elements easier
function createHtmlElement (type, content, classes, id){ 
    const element = document.createElement(type);
    if (content) element.innerText = content;
    if (id) element.id = id;
    if (classes) classes.forEach((myClass) => element.className = myClass);
    
    return element;
}

// Event handler to check which menu item was clicked
$navbar.addEventListener("click", (e) => {
    $content.innerHTML = ""; // Clear content div

    const target = e.target.innerText;

    switch (target) {
        case "HOME": 
            renderLogo();
            break;
        case "MENU": 
            renderMenu();
            break;
        case "ABOUT US": 
            renderAboutus();
            break;
        case "CONTACT": 
            renderContact();
            break;
        default: break;
    } 
});

export { createHtmlElement, $content };