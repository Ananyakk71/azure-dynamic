export function loadDropContent(data) {
  const dropItems = data.insideContent.dropItems;
  const stickyNav = document.querySelector(".sticky-nav");

  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const ul = document.createElement("ul");

  dropItems.forEach(function (item,index) {
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

      const dropAll = document.querySelectorAll(".drop");
      if(dropAll[index]){
        dropAll[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }

      });

      if (indicator.style.display === "none") {
        indicator.style.display = "block";
      } else {
        indicator.style.display = "none";
      }
    });

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
    window.open("http://127.0.0.1:5500/index.html");
  });

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
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.className = `img${index + 1}`;
    sectionImg.appendChild(img);
  });
  const dropHead1 = document.getElementById("drophead-first");

  const dropHeadCol = document.createElement("div");
  dropHeadCol.className = "drop-head-col";

  const dropSpan = document.createElement("span");
  dropSpan.textContent = data.dropContent.first.section[0];

  const droph2 = document.createElement("h2");
  droph2.textContent = data.dropContent.first.section[1];

  dropHead1.appendChild(dropHeadCol);
  dropHeadCol.appendChild(dropSpan);
  dropHeadCol.appendChild(droph2);

  const cardContents = data.dropContent.first.cardContents;
  const dropContentCol1 = document.getElementById("col-first")
  const columns = document.createElement("div");
  columns.className = "columns";

  cardContents.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.id = "card"
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
    feature.className = "feature";
    feature.textContent = card.feature;
    const cardMore = document.createElement("div");
    cardMore.className = "card-more";
    const cardLink = document.createElement("a");
    cardLink.className = "card-link";
    const cardIcon = document.createElement("span");
    cardIcon.className = "btn before";
    cardIcon.addEventListener("click", () => {
      window.open("http://127.0.0.1:5500/index.html");
    });
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
  });

  dropContentCol1.appendChild(columns);

  const dropHead2 = document.getElementById("drophead-second");
  const dropHeadCol2 = document.createElement("div");
  dropHeadCol2.className = "drop-head-col";
  const dropSpan2 = document.createElement("span");
  dropSpan2.textContent = data.dropContent.second.section[0];
  const droph2Second = document.createElement("h2");
  droph2Second.textContent = data.dropContent.second.section[1];

  dropHead2.appendChild(dropHeadCol2);
  dropHeadCol2.appendChild(dropSpan2);
  dropHeadCol2.appendChild(droph2Second);

  const dropTab = document.querySelector(".drop-tab");
  const tabButtons = data.dropContent.second.button;

  tabButtons.forEach((item, index) => {
    const tabButton = document.createElement("button");
    const spanButton = document.createElement("span");
    spanButton.textContent = item;

    dropTab.appendChild(tabButton);
    tabButton.appendChild(spanButton);

    tabButton.addEventListener("click", () => {
      const allButtons = dropTab.querySelectorAll("button");
      allButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });
      tabButton.style.backgroundColor = "#005597";
      tabButton.style.color = "#fff";

      const contentList = document.querySelector(".left");
      contentList.querySelectorAll(".button h3")
        .forEach((heading) => heading.remove());

      let sectionData;

      switch (index) {
        case 0:
          sectionData = data.dropContent.second.Featuredsolutions.items;
          break;
        case 1:
          sectionData = data.dropContent.second.Cloudmigration.items;
          break;
        case 2:
          sectionData = data.dropContent.second.Datatransformation.items;
          break;
        case 3:
          sectionData = data.dropContent.second.Appdevelopment.items;
          break;
        case 4:
          sectionData = data.dropContent.second.AI.items;
          break;
        default:
          sectionData = data.dropContent.second.Featuredsolutions.items;
      }
      if (sectionData) {
        sectionData.forEach((content, idx) => {
          const button = contentList.querySelectorAll(".button")[idx];
          const heading = document.createElement("h3");
          heading.textContent = content.heading;
          heading.addEventListener("click", () => {
            const allcontent2 = document.querySelectorAll(".content2");
            allcontent2.forEach((content2) => {
              content2.innerHTML = "";
            })
            const content2 = document.querySelectorAll(".content2")[idx];
            if (content2) {
              const text = document.createElement("div");
              const link = document.createElement("a");
              const rightImage = document.createElement("div");
              const image = document.createElement("img");
              text.className = "text";
              text.textContent = content.text;
              link.className = "link";
              link.textContent = content.link;
              rightImage.className = "right-img";
              image.src = content.img;
              content2.appendChild(text);
              content2.appendChild(link);
              content2.appendChild(rightImage);
              rightImage.appendChild(image);
            }

          })
          button.appendChild(heading);
        });
      }
    });
  });
  const col2 = document.querySelector(".col2");
  const col2Btn = document.createElement("span");
  const col2link = document.createElement("span");
  col2Btn.className = "btn before";
  col2Btn.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/index.html");
  })
  col2link.className = "link";
  col2link.innerHTML = " View all solutions (40+)";
  col2.appendChild(col2Btn);
  col2.appendChild(col2link);

  const images3 = data.dropContent.third.images;

  const sectionImg3 = document.querySelector(".section-img.third");
  images3.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.className = `img${index + 1}`;
    sectionImg3.appendChild(img);
  })

  const dropHead3 = document.getElementById("drophead-third");
  const dropHeadCol3 = document.createElement("div");
  dropHeadCol3.className = "drop-head-col";
  const dropSpan3 = document.createElement("span");
  dropSpan3.textContent = data.dropContent.third.section[0];
  const droph2Third = document.createElement("h2");
  droph2Third.textContent = data.dropContent.third.section[1];

  dropHead3.appendChild(dropHeadCol3);
  dropHeadCol3.appendChild(dropSpan3);
  dropHeadCol3.appendChild(droph2Third);

  const dropTab3 = document.querySelector(".drop-tab.third");
  const thirdMedia = document.querySelector(".thirdimg-media");
  const thirdItems = document.querySelector(".thirditems");

  const tabButtons3 = data.dropContent.third.button;

  tabButtons3.forEach((item, index) => {
    const tabButton = document.createElement("button");
    const spanButton = document.createElement("span");
    spanButton.textContent = item;

    dropTab3.appendChild(tabButton);
    tabButton.appendChild(spanButton);

    tabButton.addEventListener("click", () => {
      const allButtons = dropTab3.querySelectorAll("button");
      allButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      })
      tabButton.style.backgroundColor = "#005597";
      tabButton.style.color = "#fff";

      let sectionData;
      switch (index) {
        case 0:
          sectionData = data.dropContent.third.Featured;
          break;
        case 1:
          sectionData = data.dropContent.third.AI;
          break;
        case 2:
          sectionData = data.dropContent.third.Compute;
          break;
        case 3:
          sectionData = data.dropContent.third.Container;
          break;
        case 4:
          sectionData = data.dropContent.third.Hybrid;
          break;
        case 5:
          sectionData = data.dropContent.third.IoT;
          break;
        default:
          sectionData = data.dropContent.third.Featured;
      }
      if (sectionData) {
        thirdMedia.innerHTML = "";
        const imgSrc = sectionData.rightside.imgs
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Section Image";
        thirdMedia.appendChild(img);

        thirdItems.innerHTML = "";

        const mainHeading = sectionData.rightside.heading;
        const mainh3 = document.createElement("h3");
        mainh3.textContent = mainHeading;
        thirdItems.appendChild(mainh3);

        const items3 = document.createElement("div");
        items3.className = "items3";

        const para = sectionData.rightside.para;
        const thirdText = document.createElement("div");
        thirdText.className = "thirdtext";
        thirdText.textContent = para;
        items3.appendChild(thirdText);

        const buttonText = sectionData.rightside.button;
        const button = document.createElement("a");
        button.className = "button";
        const span = document.createElement("span");
        span.textContent = buttonText;
        button.appendChild(span);
        items3.appendChild(button);
        thirdItems.appendChild(items3);
        button.addEventListener("click", () => {
          window.open("http://127.0.0.1:5500/index.html");
        })

        const signs = document.querySelectorAll(".sign");
        const contents = document.querySelectorAll(".firstcontent-in");
        const contentLinks = document.querySelectorAll(".contentlink");
        sectionData.items.forEach((item, index) => {
          if (signs) {
            signs[index].innerHTML = "";
            const img = document.createElement("img");
            img.src = item.sign;

            signs[index].appendChild(img);
          }
          if (contents) {
            contents[index].innerHTML = "";
            const h4 = document.createElement("h4");
            h4.textContent = item.heading;

            const text3 = document.createElement("div");
            text3.className = "text3";
            text3.textContent = item.text;

            contents[index].appendChild(h4)
            contents[index].appendChild(text3)
          }
          if (contentLinks) {
            contentLinks[index].innerHTML = "";
            const a = document.createElement("a");
            a.className = "link";
            a.textContent = item.link;

            contentLinks[index].appendChild(a)
            a.addEventListener("click", () => {
              window.open("http://127.0.0.1:5500/index.html");
            })
          }
        })
      }
    })
  })
  const dropSecCol = document.getElementById("third-col");
  const collink = document.createElement("a");
  collink.className = "col2";
  const spanbtn = document.createElement("span");
  spanbtn.className = "btn before";
  const spanText = document.createElement("span");
  spanText.className = "text";
  spanText.innerHTML = "See all products (200+)";

  dropSecCol.appendChild(collink);
  collink.appendChild(spanbtn);
  collink.appendChild(spanText);
  spanbtn.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/index.html");
  })

  const fourthCol = document.querySelector(".fourth-col");
  const spanfourth = document.createElement("span");
  spanfourth.textContent = data.dropContent.fourth.section[0];
  const h2Fourth = document.createElement("h2");
  h2Fourth.textContent = data.dropContent.fourth.section[1];

  fourthCol.appendChild(spanfourth);
  fourthCol.appendChild(h2Fourth);

  const dropSecTabs = document.querySelectorAll(".dropsec-tab");
  const tabButton4 = data.dropContent.fourth.button;

  tabButton4.forEach((item, index) => {
    const dropSecTab = dropSecTabs[index];
    const itemTab = document.createElement("div")
    itemTab.className = "item";
    const text = document.createElement("div");
    text.className = "text";
    const span = document.createElement("span");
    span.textContent = item;
    dropSecTab.appendChild(itemTab);
    itemTab.appendChild(text);
    text.appendChild(span);

    const textCenter = document.querySelector(".text-center");
    const fifthMedia = document.querySelector(".media");

    dropSecTab.addEventListener("click", () => {
      const allIndicators = document.querySelectorAll(".indicator");
      allIndicators.forEach(indicator => indicator.remove());
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      itemTab.appendChild(indicator);

      let sectionData = data.dropContent.fourth.IT;
      switch (index) {
        case 0:
          sectionData = data.dropContent.fourth.IT;
          break;
        case 1:
          sectionData = data.dropContent.fourth.Developer;
          break;
        case 2:
          sectionData = data.dropContent.fourth.DataAnalyst;
          break;
        case 3:
          sectionData = data.dropContent.fourth.Businessleader;
          break;
        case 4:
          sectionData = data.dropContent.fourth.startup;
          break;
        case 5:
          sectionData = data.dropContent.fourth.students;
          break;
        default:
          sectionData = data.dropContent.fourth.IT;
      }
      if (sectionData) {
        textCenter.innerHTML = "";
        const h3Fifth = document.createElement("h3");
        h3Fifth.textContent = sectionData.heading;

        const Explore = document.createElement("a");
        Explore.className = "explore";
        const btnFifth = document.createElement("span");
        btnFifth.className = "btn";
        const linkFifth = document.createElement("span");
        linkFifth.textContent = sectionData.link;

        textCenter.appendChild(h3Fifth);
        textCenter.appendChild(Explore);
        Explore.appendChild(btnFifth);
        Explore.appendChild(linkFifth);

        fifthMedia.innerHTML = "";
        const image5 = document.createElement("div");
        image5.className = "image";
        const img5 = document.createElement("img");
        img5.src = sectionData.img;

        fifthMedia.appendChild(image5);
        image5.appendChild(img5);
        btnFifth.addEventListener("click", () => {
          window.open("https://azure.microsoft.com/en-in/resources/students/?activetab=pivot:githubtab")
        })

      }
    })
  })

  const bgGlobal = document.getElementById("bg-glob");
  bgGlobal.innerHTML = `<img src="assets/img/sixthbg.avif">`
  // const globalImg = document.createElement("img");
  // globalImg.src = data.dropContent.global.image;
  const globalLayout = document.querySelector(".glob-layout");
  globalLayout.innerHTML = `<h2>Azure global infrastructure</h2>
  <div class="text">Go beyond the limits of on-premises datacenters with more regions than any other provider. </div>`
  // const headGlobal = document.createElement("h2");
  // headGlobal.textContent = data.dropContent.global.heading;
  // const textGlobal = document.createElement("div");
  // textGlobal.className = "text";
  // textGlobal.textContent = data.dropContent.global.text;
  const buttonGlobal = document.createElement("div");
  buttonGlobal.className = "button";
  buttonGlobal.innerHTML = `<a class="get">Explore the globe </a>`
  // const get = document.createElement("a");
  // get.className = "get";
  // get.textContent = data.dropContent.global.button;

  // bgGlobal.appendChild(globalImg);
  // globalLayout.appendChild(headGlobal);
  // globalLayout.appendChild(textGlobal);
  globalLayout.appendChild(buttonGlobal);
  // buttonGlobal.appendChild(get);

  const customerBg = document.getElementById("bg-customer");
  const bgImg = document.createElement("img");
  bgImg.src = data.dropContent.fifth.background;
  customerBg.appendChild(bgImg);

const customerHead = document.getElementById("head-customer");
const customerSpan = document.createElement("span");
customerSpan.textContent = data.dropContent.fifth.section[0]; // "CUSTOMER STORIES"
customerHead.appendChild(customerSpan);
const customerPara = document.createElement("h2");
customerPara.textContent = data.dropContent.fifth.section[1]; // "See how customers are innovating with Azure"
customerHead.appendChild(customerPara);

const controlBtns = document.querySelectorAll("#control-btn");
const btnImgs = data.dropContent.fifth.button;

btnImgs.forEach((item, index)=> {
  const controlBtn = controlBtns[index];
  const itemcontrol = document.createElement("div");
  itemcontrol.className = "item";
  const controlMedia = document.createElement("div");
  controlMedia.className = "media";
  const itemcontrolIn = document.createElement("div");
  itemcontrolIn.className = "item-in";
  const imgControl = document.createElement("img");
  imgControl.src = item;
  controlBtn.appendChild(itemcontrol);
  itemcontrol.appendChild(controlMedia);
  controlMedia.appendChild(itemcontrolIn);
  itemcontrolIn.appendChild(imgControl);
  controlBtn.addEventListener("click",()=>{
  const allIndicators = document.querySelectorAll(".indicator");
  allIndicators.forEach(indicator => indicator.remove());
  const indicator = document.createElement("div");
  indicator.className = "indicator";
  controlBtn.appendChild(indicator);

  const windowLayouts = document.querySelectorAll(".window-layout");
  if (windowLayouts[index]) {
    windowLayouts[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  })
});
const windowContainer = document.querySelector(".window-container");
const windowCards = data.dropContent.fifth.cards;
windowCards.forEach((item)=>{
  const windowLayout = document.createElement("div");
  windowLayout.className = "window-layout";
  windowContainer.appendChild(windowLayout);

  const windowCard = document.createElement("div");
  windowCard.className = "window-card";
  windowLayout.appendChild(windowCard);

  const windowCardMedia = document.createElement("div");
  windowCardMedia.className = "windowcard-media";
  windowCard.appendChild(windowCardMedia);
  
  const windowImg = document.createElement("img");
  windowImg.src = item.image;
  windowCardMedia.appendChild(windowImg);

  const windowContent = document.createElement("div");
  windowContent.className = "window-content";
  windowCard.appendChild(windowContent);

  const contentFirst = document.createElement("div");
  contentFirst.className = "content-first";
  windowContent.appendChild(contentFirst);

  const logo = document.createElement("div");
  logo.className = "logo";
  contentFirst.appendChild(logo);

  const logoImg = document.createElement("img");
  logoImg.src = item.logo;
  logo.appendChild(logoImg);
  const span = document.createElement("span");
  span.textContent = item.para;
  contentFirst.appendChild(span);

  const contentSecond = document.createElement("div");
  contentSecond.className = "content-second";
  windowContent.appendChild(contentSecond);
  const products = document.createElement("div");
  products.className = "products";
  contentSecond.appendChild(products);

  const h3 = document.createElement("h3");
  h3.textContent = item.heading;
  products.appendChild(h3);

  const productCards = document.createElement("div");
  productCards.className = "product-cards";
  products.appendChild(productCards);

  const ul = document.createElement("ul");
  productCards.appendChild(ul);
  const others = item.others;
  others.forEach((other)=>{
    const li = document.createElement("li");
    ul.appendChild(li);
    const liImage = document.createElement("img");
    liImage.src = other.link;
    const liText = document.createElement("a");
    liText.className = "text";
    liText.textContent = other.text;
    li.appendChild(liImage);
    li.appendChild(liText);
  });
});

}


