const bodyEl = document.querySelector("body");
import players from "./players.js";

//--players.map((players) => console.log(players));

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

const createCard = (data, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardImgEl = document.createElement("img");
  cardImgEl.className = "image";
  const cardTitleEl = document.createElement("h2");
  const cardNationEl = document.createElement("h3");
  const cardLeagueEl = document.createElement("h3");
  const cardParagEl = document.createElement("p");

  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);
  cardTitleEl.textContent = data.title;
  cardNationEl.textContent = data.nationality;
  cardLeagueEl.textContent = data.league;
  cardParagEl.textContent = data.rating;

  cardEl.append(
    cardImgEl,
    cardTitleEl,
    cardNationEl,
    cardLeagueEl,
    cardParagEl
  );
  parent.appendChild(cardEl);
};

players
  .filter((el) => el.league === "Premier League")
  .map((players) => createCard(players, bodyEl));

players
  .filter((el) => el.league === "Ligue 1")
  .map((players) => createCard(players, bodyEl));

players
  .filter((el) => el.league === "Liga")
  .map((players) => createCard(players, bodyEl));

const createFooter = document.createElement("footer");
createFooter.className = "footers";
const footerText = document.createElement("h1");
footerText.textContent = "PLAY FIFA 23 TODAY";

const footerTextSecond = document.createElement("h6");
footerTextSecond.textContent =
  "EA Play Pro members have instant access to premium versions of our brand-new games as well.";

const imgFooter = document.createElement("img");
imgFooter.className = "fifa";
imgFooter.setAttribute("src", "./images/fifa1.png");
imgFooter.setAttribute("alt", "img xbox");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const button = document.createElement("input");
    button.type = "button";
    button.id = "submit";
    button.value = "Submit";
    button.className = "btn";

    button.onclick = function () {
      // …
    };

    const container = document.createElement("container");
    container.appendChild(button);
  },
  false
);

footerText.append(footerTextSecond);
createFooter.append(footerText);
footerTextSecond.appendChild(imgFooter);
bodyEl.append(createFooter);
