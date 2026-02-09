import { $content, createHtmlElement } from "../index.js";
import {renderLogo} from "./menu.js";

// createHtmlElement("type", "content", [classes], "id")

function renderAboutus() {    
    $content.innerHTML = ""; // Clear content div
    renderLogo();    

    const h1text = "Hi, I'm Steve!"
    const p1HTML = `I'm not a professional chef, but I am an \
    ✨<span class='rainbow-text'>aspiring web developer</span>✨! \
    This may not be a real catering business, \
    but I do cook up cool websites like this one! \
    This restaurant page was made with just basic HTML, \
    CSS & javascript as an exercise for \
    <a target="_blank" rel="noopener noreferrer" href="https://www.theodinproject.com"> \
    The Odin Project</a>, a free online course that teaches web development.` 
    const p2text = `The purpose of this project was to practice DOM manipulation \
    by generating the pages in javascript rather than the \
    standard way of just using static HTML. \
    Ironically this 'about us' page was the most complicated one \
    to render using only javascript!`
    const p3text = `Here's a few links to some of my other stuff:`
    const listHTML = 
        `<li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevec-afk/restaurant-page">
            The source code for this project</a>
        </li>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevec-afk">
            My github profile</a>
        </li>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="https://stevec-afk.github.io/library">
            A library app</a>
        </li>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="https://stevec-afk.github.io/rock-paper-scissors">
            A cool RPS game I made early on</a>
        </li>
        <li>
            <a href="https://stevec-afk.github.io/calculator">
            A calculator</a>
        </li>`

    const $bio = createHtmlElement("div", undefined, undefined, "bio");
    const $h1 = createHtmlElement("h1", h1text);
    const $p1 = createHtmlElement("p");
    const $p2 = createHtmlElement("p", p2text); // These two elements don't contain any HTML
    const $p3 = createHtmlElement("p", p3text);
    const $list = createHtmlElement("ul");

    // This use of .innerHTML only safe because we are using static content (no user input)
    $p1.innerHTML = p1HTML;
    $list.innerHTML = listHTML;

    $bio.appendChild($h1);
    $bio.appendChild($p1);
    $bio.appendChild($p2);
    $bio.appendChild($p3);
    $bio.appendChild($list);
    $content.appendChild($bio);
}

export {renderAboutus};