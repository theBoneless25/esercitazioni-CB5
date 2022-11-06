const bodyEl = document.querySelector("body");
import players from "./players.js";

//--players.map((players) => console.log(players));

const darkToggle = document.querySelector("#darkMode");

//---NAVBAR---
const navEl = document.createElement("nav");
navEl.className = "navbar";
bodyEl.append(navEl);

const navListEl = document.createElement("ul");
navEl.appendChild(navListEl);

const btn = document.createElement("button");
btn.textContent = "Buy Fifa 23";
btn.classList.add("btn");

const fNavItemEl = document.createElement("li");
const sNavItemEl = document.createElement("li");
const tNavItemEl = document.createElement("li");
const foNavItemEl = document.createElement("li");

navListEl.append(fNavItemEl, sNavItemEl, tNavItemEl, foNavItemEl, btn);

const linkNavEl = document.createElement("a");
linkNavEl.setAttribute("href", "");
linkNavEl.textContent = "Home";
fNavItemEl.appendChild(linkNavEl);

const secondLinkNavEl = document.createElement("a");
secondLinkNavEl.setAttribute("href", "https://www.futbin.com/");
secondLinkNavEl.textContent = "Database";
sNavItemEl.appendChild(secondLinkNavEl);

const thirdLinkNavEl = document.createElement("a");
thirdLinkNavEl.setAttribute(
  "href",
  "https://www.amazon.it/FIFA-23-Standard-PS4-Italiano/dp/B0B6CKCTXH/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1DHOFUGIY86CE&keywords=fifa+23&qid=1667488564&qu=eyJxc2MiOiIyLjIxIiwicXNhIjoiMS41NCIsInFzcCI6IjEuMzUifQ%3D%3D&sprefix=fifa+2%2Caps%2C123&sr=8-1"
);
thirdLinkNavEl.textContent = "Compralo ora";
tNavItemEl.appendChild(thirdLinkNavEl);

const fourLinkNavEl = document.createElement("a");
fourLinkNavEl.setAttribute("href", "");
fourLinkNavEl.textContent = "Iscriviti";
foNavItemEl.appendChild(fourLinkNavEl);

//---CREAZIONE HERO----

const heroEl = document.createElement("div");
heroEl.className = "hero";
bodyEl.append(heroEl);

const heroTitleEl = document.createElement("h1");
heroTitleEl.textContent = "COMPRA FIFA 23!";
heroEl.appendChild(heroTitleEl);

const imgFifa = document.createElement("img");
imgFifa.className = "play";
imgFifa.setAttribute("src", "./images/play.png");
imgFifa.setAttribute("alt", "img fifa");
heroEl.appendChild(imgFifa);

const imgFifaO = document.createElement("img");
imgFifaO.className = "play";
imgFifaO.setAttribute("src", "./images/origin-logo.png");
imgFifaO.setAttribute("alt", "img origin");
heroEl.appendChild(imgFifaO);

const imgFifaX = document.createElement("img");
imgFifaX.className = "play";
imgFifaX.setAttribute("src", "./images/xbox.png");
imgFifaX.setAttribute("alt", "img xbox");
heroEl.appendChild(imgFifaX);

const heroTextEl = document.createElement("h5");
heroTextEl.textContent =
  "Disponibile su PS5, PS4, Xbox Series X|S, Xbox One, Stadia, e PC. ";
heroEl.appendChild(heroTextEl);

//----CREAZIONI CARD

const cardDiv = document.createElement("div");
cardDiv.className = "div_card";
bodyEl.appendChild(cardDiv);

const cardText = document.createElement("h1");
cardText.className = "text_card";
cardText.textContent = "COSTRUISCI LA TUA PRIMA SQUADRA SU FUT:";
bodyEl.appendChild(cardText);

const cardTextGk = document.createElement("h3");
cardTextGk.className = "gktext_card";
cardTextGk.textContent = "PORTIERI:";

bodyEl.appendChild(cardTextGk);
const cardGk = document.createElement("div");
cardGk.className = "gk_card";
bodyEl.appendChild(cardGk);

const createCard1 = (data, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardImgEl = document.createElement("img");
  cardImgEl.className = "image";

  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);

  cardEl.append(cardImgEl);
  parent.appendChild(cardEl);
};

const goalkeeperEl = document.querySelector(".gk_card");

players
  .filter((player) => player.role === "Goalkeeper")
  .map((player) => {
    createCard1(player, goalkeeperEl);
  });

const cardGkHr = document.createElement("hr");
cardGkHr.className = "hr_card";
bodyEl.appendChild(cardGkHr);

const cardTextDf = document.createElement("h3");
cardTextDf.className = "dftext_card";
cardTextDf.textContent = "DIFENSORI:";
bodyEl.appendChild(cardTextDf);

const cardDf = document.createElement("div");
cardDf.className = "df_card";
bodyEl.appendChild(cardDf);

const createCard2 = (data, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardImgEl = document.createElement("img");
  cardImgEl.className = "image";

  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);

  cardEl.append(cardImgEl);
  parent.appendChild(cardEl);
};

const defenderEl = document.querySelector(".df_card");

players
  .filter((player) => player.role === "Defender")
  .map((player) => {
    createCard2(player, defenderEl);
  });

const cardDfHr = document.createElement("hr");
cardDfHr.className = "hr_card";
bodyEl.appendChild(cardDfHr);

const cardTextMid = document.createElement("h3");
cardTextMid.className = "midtext_card";
cardTextMid.textContent = "CENTROCAMPISTI:";
bodyEl.appendChild(cardTextMid);

const cardMid = document.createElement("div");
cardMid.className = "mid_card";
bodyEl.appendChild(cardMid);

const createCard3 = (data, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardImgEl = document.createElement("img");
  cardImgEl.className = "image";

  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);

  cardEl.append(cardImgEl);
  parent.appendChild(cardEl);
};

const midfielderEl = document.querySelector(".mid_card");

players
  .filter((player) => player.role === "Midfielder")
  .map((player) => {
    createCard3(player, midfielderEl);
  });

const cardMidHr = document.createElement("hr");
cardMidHr.className = "hr_card";
bodyEl.appendChild(cardMidHr);

const cardTextForw = document.createElement("h3");
cardTextForw.className = "forwtext_card";
cardTextForw.textContent = "ATTACCANTI:";
bodyEl.appendChild(cardTextForw);

const cardForw = document.createElement("div");
cardForw.className = "forw_card";
bodyEl.appendChild(cardForw);

const createCard4 = (data, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardImgEl = document.createElement("img");
  cardImgEl.className = "image";

  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);

  cardEl.append(cardImgEl);
  parent.appendChild(cardEl);
};

const forwardEl = document.querySelector(".forw_card");

players
  .filter((player) => player.role === "Forward")
  .map((player) => {
    createCard4(player, forwardEl);
  });

const cardForHr = document.createElement("hr");
cardForHr.className = "hr_card";
bodyEl.appendChild(cardForHr);

//-- SECTION P.FOOTER

const preFooter = document.createElement("section");
preFooter.className = "pre_footer";
bodyEl.appendChild(preFooter);

const textPreFooter = document.createElement("h3");
textPreFooter.textContent = "INIZIA SCARICANDO LA WEB APP!!";
preFooter.appendChild(textPreFooter);

const imgPreFooter = document.createElement("img");
imgPreFooter.className = "img_footer";
imgPreFooter.setAttribute("src", "./images/header.png");
imgPreFooter.setAttribute("alt", "img heroes");
preFooter.appendChild(imgPreFooter);

const btnFooter = document.createElement("button");
btnFooter.textContent = "Buy Fifa 23";
btnFooter.classList.add("btn");
preFooter.appendChild(btnFooter);

//--CREAZIONE FOOTER

const createFooter = document.createElement("footer");
createFooter.className = "footers";
const footerText = document.createElement("h1");
footerText.textContent = "PLAY FIFA 23 TODAY";

const footerTextSecond = document.createElement("h6");
footerTextSecond.textContent = "Made with ⚽ by Sebastiano Occhipinti";

const imgFooter = document.createElement("img");
imgFooter.className = "fifa";
imgFooter.setAttribute("src", "./images/fifa1.png");
imgFooter.setAttribute("alt", "img xbox");

footerText.append(footerTextSecond);
createFooter.append(footerText);
footerTextSecond.appendChild(imgFooter);
bodyEl.append(createFooter);
