import { $content, createHtmlElement } from "./index.js";

// (type, content, classes, id)

function render() {
    const $home = createHtmlElement("div", undefined, undefined, "logo");
    const $h2 = createHtmlElement("h2", "Steve's", ["small"]);
    const $h1 = createHtmlElement("h1", "Catering", ["small"]);

    $content.innerHTML = "";
    $home.appendChild($h2);
    $home.appendChild($h1);
    $content.appendChild($home);
}

export {render as renderMenu};