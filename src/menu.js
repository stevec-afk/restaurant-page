import { $content, createHtmlElement } from "./index.js";

function render() {
    $content.innerHTML = "";
    return;
}

export {render as renderMenu};