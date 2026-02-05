import { $content, createHtmlElement } from "../index.js";
import {renderLogo} from "./menu.js";

// createHtmlElement("type", "content", [classes], "id")

function renderAboutus() {
    const $bio = createHtmlElement("div", undefined, undefined, "menu")
    // const p1 = "";
    // const p2;
    // const p3;


    $content.innerHTML = ""; // Clear content div
    renderLogo();    



    $content.appendChild($bio);
}

export {renderAboutus};