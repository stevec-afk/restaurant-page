import { $content, createHtmlElement } from "../index.js";
import {renderLogo} from "./menu.js";

// createHtmlElement("type", "content", [classes], "id")

function renderContact() {
    $content.innerHTML = ""; // Clear content div
    renderLogo();

    const $contact = createHtmlElement("div", undefined, undefined, "contact-container");

    const $section1 = createHtmlElement("section", undefined, ["contact"]);
    $section1.appendChild(createHtmlElement("h1", "ADDRESS"));
    $section1.appendChild(createHtmlElement("p", "1234 Younge street"));
    $section1.appendChild(createHtmlElement("p", "Toronto, Ontario, Canada"));
    $section1.appendChild(createHtmlElement("button", "BOOK A TABLE"));
    $contact.appendChild($section1);

    const $section2 = createHtmlElement("section", undefined, ["contact"]);
    $section2.appendChild(createHtmlElement("h1", "CONTACT US"));
    $section2.appendChild(createHtmlElement("p", "Phone: +1 (905) 555-0123"));
    $section2.appendChild(createHtmlElement("p", "Email: info@stevescatering.com"));
    $section2.appendChild(createHtmlElement("button", "CONTACT FORM"));
    $contact.appendChild($section2);

    $content.appendChild($contact);
}

export {renderContact};