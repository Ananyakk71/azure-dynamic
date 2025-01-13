export function loadDropContent(data) {
  const dropItems = data.insideContent.dropItems;
  const stickyNav = document.querySelector(".sticky-nav");

  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const ul = document.createElement("ul");

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
    cardIcon.className = "icon";
    const cardIconIn = document.createElement("div");
    cardIconIn.className = "icon-in before";
    cardIcon.addEventListener("click", () => {
      window.open("http://127.0.0.1:5500/index.html");
    });
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
           heading.addEventListener("click",()=> {
             const allcontent2 = document.querySelectorAll(".content2");
             allcontent2.forEach((content2)=>{
               content2.innerHTML = "";
             })
             const content2 = document.querySelectorAll(".content2")[idx];
              if(content2){
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
   col2Btn.addEventListener("click",()=>{
     window.open("http://127.0.0.1:5500/index.html");
   })
   col2link.className = "link";
   col2link.innerHTML = " View all solutions (40+)";
   col2.appendChild(col2Btn);
   col2.appendChild(col2link);

   const images3 = data.dropContent.third.images;

   const sectionImg3 = document.querySelector(".section-img.third");
   images3.forEach((image, index)=> {
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
  //  const items3 = document.querySelector(".items3");

   const tabButtons3 = data.dropContent.third.button;

   tabButtons3.forEach((item, index)=> {
    const tabButton = document.createElement("button");
    const spanButton = document.createElement("span");
    spanButton.textContent = item;

    dropTab3.appendChild(tabButton);
    tabButton.appendChild(spanButton);

    tabButton.addEventListener("click",()=> {
      const allButtons = dropTab3.querySelectorAll("button");
      allButtons.forEach((btn)=> {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      })
      tabButton.style.backgroundColor = "#005597";
      tabButton.style.color = "#fff";

       let sectionData;
       switch(index){
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
      if (sectionData){
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
         button.addEventListener("click",()=>{
          window.open("http://127.0.0.1:5500/index.html");
         })

         const signs = document.querySelectorAll(".sign");
         const contents = document.querySelectorAll(".firstcontent-in");
         const contentLinks = document.querySelectorAll(".contentlink");
         sectionData.items.forEach((item, index)=>{
          if (signs) {
            signs[index].innerHTML = "";
            const img = document.createElement("img");
            img.src = item.sign;

            signs[index].appendChild(img);
          }
          if(contents){
            contents[index].innerHTML = "";
            const h4 = document.createElement("h4");
            h4.textContent = item.heading;

            const text3 = document.createElement("div");
            text3.className = "text3";
            text3.textContent = item.text;

            contents[index].appendChild(h4)
            contents[index].appendChild(text3)
          }
          if(contentLinks){
            contentLinks[index].innerHTML = "";
            const a = document.createElement("a");
            a.className = "link";
            a.textContent = item.link;

            contentLinks[index].appendChild(a)
            a.addEventListener("click",()=>{
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
   spanbtn.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/index.html");
   })

  
  
}


