import "./styles.css";
import { renderHome } from "./home.js";
import { renderAboutus } from "./about-us.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";


const $content = document.getElementById("content");

// Funciton to create HTML elements easier
function createHtmlElement (type, content, classes, id){ 
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classes) classes.foreach((myClass) => element.classList.add(myClass));
    if (content) element.innerText = content;

    return element;
}

// Event listner handler to see which menu item was clicked
document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    $content.innerHTML = "";
    switch (target) {
        case "HOME": renderHome();
        case "MENU": renderAboutus();
        case "ABOUT US": renderContact();
        case "CONTACT": renderMenu();
    } 
});

export { createHtmlElement, $content };