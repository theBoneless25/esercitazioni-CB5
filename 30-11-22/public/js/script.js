const container = document.querySelector(".container");
const form = document.forms.actor.elements;
const element = form.addBtn;

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const url_actor = `http://localhost:3000/attori`;

const createCard = (data) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("div");
  const nameEl = document.createElement("h2");
  const cognomeEl = document.createElement("h2");
  const dataEl = document.createElement("h4");
  const delEl = document.createElement("button");
  const idEl = document.createElement("h5");

  cardEl.className = "cardActor";
  imgEl.className = "imageActor";
  nameEl.className = "nameActor";
  cognomeEl.className = "surnameActor";
  dataEl.className = "dataActor";
  delEl.className = "btnDel";
  idEl.className = "id";

  nameEl.textContent = data.nome;
  cognomeEl.textContent = data.cognome;
  dataEl.textContent = data.data_nascita;
  delEl.textContent = "Delete";
  idEl.textContent = data.id;

  cardEl.append(imgEl, idEl, nameEl, cognomeEl, dataEl, delEl);
  container.appendChild(cardEl);

  const DELETE = async (url, id) => {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ id: id }),
    });
    return await res.json();
  };

  delEl.addEventListener("click", (e) => {
    const url = `http://localhost:3000/attore`;
    const id = data.id;
    DELETE(url, id).then(() => location.reload());
  });
};

const POST = async (url, body_message) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return await res.json();
};

function createActor(body_message) {
  const url = `http://localhost:3000/attore`;

  return POST(url, body_message);
}

const actorName = document.querySelector(".nameAct");
const actorSurname = document.querySelector(".surnameAct");
const actorData = document.querySelector(".dataAct");
const addBtn = document.querySelector(".btnAddActor");

addBtn.addEventListener("click", () => {
  const actor = {
    nome: form[0].value,
    cognome: form[1].value,
    data_nascita: form[2].value,
  };

  createActor(actor).then((message) => {
    console.log("Creazione andata bene!");
  });
});

window.onload = GET(url_actor).then((res) =>
  res.map((actor) => createCard(actor))
);
