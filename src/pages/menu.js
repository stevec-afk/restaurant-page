import { $content, createHtmlElement } from "../index.js";
import {renderLogo} from "./home.js";

// createHtmlElement("type", "content", [classes], "id")

// function renderLogo() { 
//     const $logo = createHtmlElement("div", undefined, undefined, "logo");
//     const $h2 = createHtmlElement("h2", "Steve's", ["small"]);
//     const $h1 = createHtmlElement("h1", "Catering", ["small"]);

//     $logo.appendChild($h2);
//     $logo.appendChild($h1);
//     $content.appendChild($logo);
// }

function renderMenu() {
    renderLogo(true); 

    const menu = [
        {
            name: "Breakfast platter  -  $20",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada fringilla lorem, eget lobortis lectus consequat ut."
        },
        {
            name: "Lunch platter  -  $20",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada fringilla lorem, eget lobortis lectus consequat ut."
        },
        {
            name: "Dinner platter  -  $20",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada fringilla lorem."
        }
    ];

    const $menu = createHtmlElement("div", undefined, undefined, "menu")

    menu.forEach((item) => {
        const $div = createHtmlElement("div", undefined, ["menu-item"]);
        const $name = createHtmlElement("h1", item.name);
        const $description = createHtmlElement("p", item.description);
        // const $price = createHtmlElement("h2", item.price);
        const $hr = createHtmlElement("hr", undefined, ["breakline"]);

        $div.appendChild($name);
        $div.appendChild($description);
        // $div.appendChild($price);
        $div.appendChild($hr);
        $menu.appendChild($div);
    });

    $content.appendChild($menu);

}

export { renderMenu };