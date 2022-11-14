import { q, GET } from "./utils.js"; /// IMPORTO LE UTILS

const postId = q(".info_id");
const postTitle = q(".title_post");
const postBody = q(".body_post");
const btnPrevious = q(".btn_prev"); //// MI RICHIAMO LA STRUTTURA HTML
const btnNext = q(".btn_next");

const url = "https://jsonplaceholder.typicode.com/posts";
let index = 1;
let execute;

btnPrevious.addEventListener("click", (el) => {
  execute = el.target.textContent;
  GET(`${url}/${index}`).then((res) => {
    postId.textContent = ` ${res?.id}`;
    postTitle.textContent = `${res?.title}`; /// CREO GLI EVENTI DEI BOTTONI
    postBody.textContent = `${res?.body}`;
    getPost(execute);
    previousBtn(index);
  });
});

btnNext.addEventListener("click", (el) => {
  execute = el.target.textContent;
  GET(`${url}/${index}`).then((res) => {
    console.log(res);
    postId.textContent = ` ${res?.id}`;
    postTitle.textContent = `${res?.title}`;
    postBody.textContent = `${res?.body}`;
    getPost(execute);
  });
  nextBtn(index);
});

const getPost = (execute) => {
  if (!execute) {
    execute = 1;
  } else {
    execute = execute.toLowerCase();
  } // COSTANTE CHE SI INCREMENTA O DECREMENTA
  switch (execute) {
    case "prev":
      index--;
      break;
    case "next":
      index++;
  }
};

const nextBtn = (i) => {
  if (i >= 10) btnNext.disabled = true;
  if (i === 1) btnPrevious.disabled = true;
  else btnPrevious.disabled = false; // COSTANTE CHE DISABILITA E ABILITA IL BOTTONE AL RAGG DEL LIMITE
};

const previousBtn = (i) => {
  if (i <= 0) btnPrevious.disabled = true;
  btnNext.disabled = false;
};

const loader = q(".lds-hourglass");
const cardContainer = q(".container");
