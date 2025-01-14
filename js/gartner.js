export function loadGartner(data) {
    const bgImgdiv = document.getElementById("gartnerbg"); 
    const bgImg = document.createElement("img");
    bgImg.src = "assets/img/sectionfour1400.avif";
    bgImgdiv.appendChild(bgImg);

    const gartnerMedia = document.querySelector(".gartner-media");
    const gartnerImg = document.createElement("img");
    gartnerImg.src = "assets/img/gartner.avif";
    gartnerMedia.appendChild(gartnerImg);
 
    const gartnerContent = document.querySelector(".gartner-content");
    const div = document.createElement("div");

    const gartnerItems = document.createElement("div");
    gartnerItems.className = "gartner-items";

    const h2 = document.createElement("h2");
    h2.innerHTML = "See why Gartner named Microsoft a Leader";

    const text = document.createElement("div");
    text.className = "text"
    text.innerHTML = "Discover why Microsoft was named a Leader and positioned furthest to the right for Completeness of Vision in the 2023 Gartner® Magic Quadrant™ for Strategic Cloud Platform Services (SCPS). ";

    const gartnerButton = document.createElement("div");
    gartnerButton.className = "gartner-button";

    const button = document.createElement("button");
    button.className = "button";

    const span = document.createElement("span");
    span.innerHTML = "Read the blog";


    gartnerContent.appendChild(div);
    gartnerContent.appendChild(gartnerItems);
    gartnerItems.appendChild(h2);
    gartnerItems.appendChild(text);
    gartnerContent.appendChild(gartnerButton);
    gartnerButton.appendChild(button);
    button.appendChild(span);
}