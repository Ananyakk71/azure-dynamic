fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function (data) {
    const logoUrl = data.head.logo;
    const name = data.head.name;
    const menu = data.head.menu;
    const menuInside = {
      Products: data.head.Products,
      Solutions: data.head.Solutions,
      Pricing: data.head.Pricing,
      Partners: data.head.Partners,
      Resources: data.head.Resources,
    }

    const logoImg = document.createElement("img");
    logoImg.src = logoUrl;
    logoImg.className = "logo-img"

    logoImg.addEventListener("click", function() {
        window.open("https://www.microsoft.com/en-in/")
    })

    const logoContainer = document.getElementById("logo-container");
    logoContainer.appendChild(logoImg);
    

    const nameText = document.createElement("a");
    nameText.textContent = name;
    nameText.className = "name-text hov";

    nameText.addEventListener("click", function() {
        window.open("http://127.0.0.1:5500/index.html")
    })

    const nameContainer = document.getElementById("name-container");
    nameContainer.appendChild(nameText);

    const menuContainer = document.getElementById("menu-container");

    menu.forEach(function(item, index) {
        const menuItem = document.createElement("li");
        menuItem.className = "menu-item"
        menuItem.style.overflowX = "visible";
        const  menuWrapper = document.createElement("div");
        menuWrapper.className = "menu-wrapper";
        menuWrapper.style.overflowX = "visible";

        if(index === 0) {
            const menulink = document.createElement("a");
            menulink.textContent = item;
            menulink.classList = "menu-link link hov"
            menuItem.appendChild(menulink);
        } else {
            const menuButton = document.createElement("button");
            menuButton.textContent = item;
            menuButton.className = "link hov";
            menuButton.id = "menu-button";  
            menuButton.style.overflowX = "visible";

            const submenu = document.createElement("ul");
            submenu.className = "submenu";
            submenu.style.display = "none";

            menuInside[item].forEach(function (subItem){
                const subMenuItem = document.createElement("li");
                subMenuItem.textContent = subItem;
                subMenuItem.className = "submenu-item";
                submenu.appendChild(subMenuItem);
            });

            menuButton.addEventListener("click", function () {
                const submenus = document.querySelectorAll(".submenu");
                submenus.forEach((ul) => {
                    if(ul !== submenu) {
                        ul.style.display = "none"
                    }
                });

                 submenu.style.display = (submenu.style.display === "none" ? "flex" : "none");
              });

         
            menuWrapper.appendChild(menuButton);
            menuWrapper.appendChild(submenu);
        }
        menuItem.appendChild(menuWrapper);
        menuContainer.appendChild(menuItem);
    
    });

    const searchButton = document.querySelector('.searchBtn');

    searchButton.addEventListener('mouseenter', function() {
        const spanButton = document.createElement("span")
        spanButton.className = "search-tool";
        spanButton.style.overflowX = "visible";
        spanButton.textContent = 'show search input'; 
        searchButton.appendChild(spanButton)
    })

    searchButton.addEventListener('mouseleave', function() {
        const spanButton = searchButton.querySelector('.search-tool');  
        if (spanButton) {
            searchButton.removeChild(spanButton);  
        }
    });

    const headMenu = data.head.headMenu;

    const headMenuContainer = document.querySelector('.headMenu-container')
    headMenu.forEach((headMenuItem) => {
        const li = document.createElement("li");
        const headmenus = document.createElement("a");
        headmenus.className = "menu hov";
        headmenus.textContent = headMenuItem;

        headmenus.addEventListener('click', () => {
            window.open("http://127.0.0.1:5500/index.html")
        });

        li.appendChild(headmenus);
        headMenuContainer.appendChild(li)
    })
});
