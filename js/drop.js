export function loadDropContent(data) {
    const dropItems = data.insideContent.dropItems;
    const stickyNav = document.querySelector('.sticky-nav');

    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const ul = document.createElement('ul');

    dropItems.forEach(function (item) {

        const dropContent = document.createElement("li");
        dropContent.className = "drop-content";

        const dropMenu = document.createElement("a");
        dropMenu.className = "drop-menu";

        const indicator = document.createElement("div");
        indicator.className = "indicator";
        indicator.style.display = "none";
        dropMenu.addEventListener("click", function () {
            const allIndicators = document.querySelectorAll(".indicator");
            allIndicators.forEach(function (ind) {
                ind.style.display = "none";
            });

            if (indicator.style.display === "none") {
                indicator.style.display = "block";
            } else {
                indicator.style.display = "none";
            }
        })

        const listMenu = document.createElement("span");
        listMenu.className = "list-menu";
        listMenu.textContent = item;

        dropMenu.appendChild(indicator);
        dropMenu.appendChild(listMenu);
        ul.appendChild(dropContent);

        dropContent.appendChild(dropMenu);

    });

    const stickyButton = document.createElement("div");
    stickyButton.className = "sticky-button";
    stickyButton.addEventListener("click", () => {
        window.open("http://127.0.0.1:5500/index.html")
    })

    const a = document.createElement("a");
    a.className = "sticky-buttonin";

    const span = document.createElement("span");
    span.textContent = data.mainSection.themeButton.getBtn1;

    stickyNav.appendChild(dropdown);
    dropdown.appendChild(ul);
    stickyNav.appendChild(stickyButton);
    stickyButton.appendChild(a);
    a.appendChild(span);

    const images = data.dropContent.first.images;

    const sectionImg = document.querySelector(".section-img");
    images.forEach((image, index)=> {
        const img = document.createElement("img");
        img.src = image;
        img.className = `img${index + 1}`;
        sectionImg.appendChild(img);

    })
    const dropHead1 = document.getElementById("drophead-first");

        const dropHeadCol = document.createElement('div');
        dropHeadCol.className = "drop-head-col";

        const dropSpan = document.createElement("span");
        dropSpan.textContent = data.dropContent.first.section[0];

        const droph2 = document.createElement("h2")
        droph2.textContent = data.dropContent.first.section[1];

        dropHead1.appendChild(dropHeadCol);
        dropHeadCol.appendChild(dropSpan);
        dropHeadCol.appendChild(droph2);
        
        const cardContents = data.dropContent.first.cardContents;
        const dropContentCol1 = document.getElementById("col-first");

        const columns = document.createElement("div");
        columns.className = "columns";

        cardContents.forEach((card)=> {
            const cardDiv = document.createElement("div");
            cardDiv.className = "card";

            const cardMedia = document.createElement("div");
            cardMedia.className = "card-media";

            const cardImage = document.createElement("img");
            cardImage.src = card.image;

            const cardContents = document.createElement("div");
            cardContents.className = "card-contents";

            const cardHead = document.createElement("div");
            cardHead.className = "card-contents";

            const cardTitle = document.createElement("h3");
            cardTitle.textContent = card.title;

            const feature = document.createElement("div");
            feature.className = "feature"
            feature.textContent = card.feature;

            const cardMore = document.createElement("div");
            cardMore.className = "card-more";

            const cardLink = document.createElement("a");
            cardLink.className = "card-link";

            const cardIcon = document.createElement("span");
            cardIcon.className = "icon";
            const cardIconIn = document.createElement("div");
            cardIconIn.className = "icon-in";
            cardIcon.addEventListener('click',()=>{
                window.open("http://127.0.0.1:5500/index.html")
            })
            cardIcon.appendChild(cardIconIn);
            cardLink.appendChild(cardIcon);

            const cardText = document.createElement("span");
            cardText.className = "card-text";
            cardText.textContent = card.cardText;
            cardLink.appendChild(cardText);

            columns.appendChild(cardDiv);
            cardDiv.appendChild(cardMedia);
            cardMedia.appendChild(cardImage);
            cardDiv.appendChild(cardContents);
            cardContents.appendChild(cardHead);
            cardHead.appendChild(cardTitle);
            cardHead.appendChild(feature);
            cardContents.appendChild(cardMore);
            cardMore.appendChild(cardLink);
            
        })

        dropContentCol1.appendChild(columns);

        const dropHead2 = document.getElementById("drophead-second");

        dropHeadCol.className = "drop-head-col";

        dropSpan.textContent = data.dropContent.second.section[0];

        droph2.textContent = data.dropContent.second.section[1];

        dropHead2.appendChild(dropHeadCol);
        dropHeadCol.appendChild(dropSpan);
        dropHeadCol.appendChild(droph2);

        const dropTab = document.querySelector(".drop-tab");
        const tabButtons = data.dropContent.second.button;
        tabButtons.forEach((item)=> {
            const tabButton = document.createElement("button");
            const spanButton = document.createElement("span");
            spanButton.textContent = item;

            dropTab.appendChild(tabButton);
            tabButton.appendChild(spanButton)

            tabButton.addEventListener("click",() => {
            const allButtons = dropTab.querySelectorAll("button");
            allButtons.forEach((btn) => {
            btn.style.backgroundColor = ""; 
            btn.style.color = ""; 
        });
                tabButton.style.backgroundColor = "#005597"
                tabButton.style.color = "#fff"
            })
        })

}
