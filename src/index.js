import "./styles.css";
import { renderHome } from "./home.js";
import { renderAboutus } from "./about-us.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";


const $content = document.getElementById("content");
const $navbar = document.getElementById("navbar");

// Funciton to create HTML elements easier
function createHtmlElement (type, content, classes, id){ 
    const element = document.createElement(type);
    if (content) element.innerText = content;
    if (id) element.id = id;
    if (classes) classes.foreach((myClass) => element.classList.add(myClass));
    
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