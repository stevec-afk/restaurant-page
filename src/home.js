import { $content, createHtmlElement } from "./index.js";

// (type, content, classes, id)

function render() {
    const $home = createHtmlElement("div", undefined, undefined, "home");
    const $h2 = createHtmlElement("h2", "Steve's");
    const $h1 = createHtmlElement("h1", "Catering");
    const $tagline = createHtmlElement("p", "Great food, locally sourced");
    
    $content.appendChild($home);
    $content.appendChild($h2);
    $content.appendChild($h1);
    $content.appendChild($tagline);

}

export {render as renderHome};