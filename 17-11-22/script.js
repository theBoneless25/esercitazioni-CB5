import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
  productsList = data.filter((i) => i.id <= 10);
  productsList.map((i) => createCardEl(i, cardList));
});

inputEl.addEventListener("input", (e) => {
  console.log(productsList);
  const searchString = e.target.value;

  cardList.replaceChildren();
  productsList
    .filter((prod) => prod?.title.includes(searchString))
    .map((product) => createCardEl(product, cardList));

  console.log(productsList);
  //
});
