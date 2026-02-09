import { $content, createHtmlElement } from "../index.js";

// createHtmlElement("type", "content", [classes], "id")

function renderLogo(small) {
    const $logo = createHtmlElement("div", undefined, undefined, "logo");
    const $h2 = createHtmlElement("h2", "Steve's");
    const $h1 = createHtmlElement("h1", "Catering");
    const $tagline = createHtmlElement("p", "Great food, locally sourced.");

    $logo.appendChild($h2);
    $logo.appendChild($h1);
    $logo.appendChild($tagline);
    $content.appendChild($logo);

    // If 'true' is passed to the function, use CSS to render the smaller version of the logo
    if (small) {
        $h2.classList.add("small")
        $h1.classList.add("small")
        $tagline.style.display = "none";
    }
}

export { renderLogo };