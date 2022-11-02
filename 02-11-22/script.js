const bodyEl = document.querySelector("body");

const heroEl = document.createElement("div");
heroEl.class = "hero";
bodyEl.append(heroEl);

const heroFirstEl = document.createElement("h1");
heroFirstEl.textContent = "Clothes";
heroEl.appendChild(heroFirstEl);

const heroSecondEl = document.createElement("h2");
heroSecondEl.textContent = "Le migliori Offerte";
heroEl.appendChild(heroSecondEl);

const createCard = (title, imgUrl, description, category, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  if (category === "jewelery") {
    cardEl.classList.add("special-card");
  }

  // title
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", category);

  // paragraph
  const parEl = document.createElement("p");
  parEl.textContent = description;

  cardEl.append(titleEl, imgEl, parEl);
  parent.appendChild(cardEl);
};

import products from "./products.js";

const mostpopularEl = document.querySelector(".most-popular");
const bestSellerEl = document.querySelector(".best-seller");

const headerMostPop = document.createElement("h1");
const headerBestSell = document.createElement("h1");

// headerMostPop.style = "color: red; border: 2px solid red;";
headerMostPop.textContent = "Most popular";
headerBestSell.textContent = "Best seller";

mostpopularEl.appendChild(headerMostPop);
bestSellerEl.appendChild(headerBestSell);

products
  .filter((product) => product.price <= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });

products
  .filter((product) => product.price >= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      bestSellerEl
    );
  });
