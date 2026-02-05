import { $content, createHtmlElement } from "../index.js";

function render() {
    const $logo = createHtmlElement("div", undefined, undefined, "logo");
    const $h2 = createHtmlElement("h2", "Steve's", ["small"]);
    const $h1 = createHtmlElement("h1", "Catering", ["small"]);
    const $menu = createHtmlElement("div", undefined, undefined, "menu")

    $content.innerHTML = ""; // Clear content div
    $logo.appendChild($h2);
    $logo.appendChild($h1);
    $content.appendChild($logo);
}

export {render as renderAboutus};