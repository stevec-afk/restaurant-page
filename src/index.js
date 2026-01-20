import "./styles.css";
import { renderHome } from "./pages/home.js";
import { renderAboutus } from "./pages/about-us.js";
import { renderContact } from "./pages/contact.js";
import { renderMenu } from "./pages/menu.js";


const $content = document.getElementById("content");
const $navbar = document.getElementById("navbar");

// Funciton to create HTML elements easier
function createHtmlElement (type, content, classes, id){ 
    const element = document.createElement(type);
    if (content) element.innerText = content;
    if (id) element.id = id;
    if (classes) classes.forEach((myClass) => element.classList.add(myClass));
    
    return element;
}

// Event listner handler to see which menu item was clicked
$navbar.addEventListener("click", (e) => {
    const target = e.target.innerText;

    switch (target) {
        case "HOME": 
            renderHome();
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