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


/** 

        
        const buttonClick = document.createElement("button");
        buttonClick.className = `${item.class} btn dec`;
        const span = document.createElement("span");
        span.textContent = item.text;
        wrapper.appendChild(buttonClick);
        buttonClick.appendChild(span)
        buttonClick.addEventListener("click",()=>{
            window.open("https://account.bbc.com/auth/register/email?ab=o13&action=register&clientId=Account&context=international&isCasso=false&nonce=5EhE1Iyd-2hZUXq-BZxjGOLDFJxP3jcisGzw&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&realm=%2F&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&sequenceId=d870a50b-4fb1-4f87-99de-706f138577e7&service=IdRegisterService&userOrigin=BBCS_BBC")
        }) 
            
        
        
         */