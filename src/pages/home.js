import { $content, createHtmlElement } from "../index.js";

// createHtmlElement("type", "content", [classes], "id")

function renderHome() {
    const $home = createHtmlElement("div", undefined, undefined, "logo");
    const $h2 = createHtmlElement("h2", "Steve's");
    const $h1 = createHtmlElement("h1", "Catering");
    const $tagline = createHtmlElement("p", "Great food, locally sourced.");
    
    $content.innerText = "";
    $home.appendChild($h2);
    $home.appendChild($h1);
    $home.appendChild($tagline);
    $content.appendChild($home);
}

export {renderHome};