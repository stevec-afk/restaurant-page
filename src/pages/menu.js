import { $content, createHtmlElement } from "../index.js";
import {renderLogo} from "./home.js";

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
        const $hr = createHtmlElement("hr", undefined, ["breakline"]);

        $div.appendChild($name);
        $div.appendChild($description);
        $div.appendChild($hr);
        $menu.appendChild($div);
    });

    $content.appendChild($menu);

}

export { renderMenu };