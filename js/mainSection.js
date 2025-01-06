export function loadMainSection(data) {
    const img1 = document.getElementById("background-img-1");
    img1.src = data.mainSection.backgroundImage[0];

    const img2 = document.getElementById("background-img-2");
    img2.src = data.mainSection.backgroundImage[1];

    const columLayout = document.querySelector(".layout-col");
    const topHead = document.createElement("div");
    topHead.id = "top-head";
    topHead.textContent = data.mainSection.themeContent.topHead;

    const themeHead = document.createElement("div");
    themeHead.id = "theme-head";
    themeHead.textContent = data.mainSection.themeContent.themeHead;

    const themePara = document.createElement("div");
    themePara.id = "theme-para";
    themePara.textContent = data.mainSection.themeContent.themePara;

    columLayout.appendChild(topHead);
    columLayout.appendChild(themeHead);
    columLayout.appendChild(themePara);

    const themeButton = document.createElement('div');
    themeButton.className = "theme-btn";

    const themeButtons = document.createElement('div');
    themeButtons.className = "theme-btns";

    const getBtn1 = document.createElement('a');
    getBtn1.className = 'getBtn';
    getBtn1.textContent = data.mainSection.themeButton.getBtn1;

    const getBtn2 = document.createElement('a');
    getBtn2.className = 'getBtn';
    getBtn2.textContent = data.mainSection.themeButton.getBtn2;

    themeButtons.appendChild(getBtn1);
    themeButtons.appendChild(getBtn2);

    themeButton.appendChild(themeButtons);


    columLayout.appendChild(themeButton);

    getBtn1.addEventListener('click', function() {
        window.open("http://127.0.0.1:5500/index.html")
    })
    getBtn2.addEventListener('click', function() {
        window.open("http://127.0.0.1:5500/index.html")
    })

    // const btnText = data.mainSection.themeButton;
    
    // themeButtons.forEach(function(btn){
    //     const getBtn = document.createElement('a');
    //     getBtn.className = "getBtn"
    //     getBtn.textContent =btnText;
    //     themeButtons.appendChild(getBtn);
    // })

 }
 

 