const container = document.querySelector(".container");
const form = document.forms.regista.elements;
const element = form.addBtn;

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const url_registi = `http://localhost:3000/registi`;

const createCard = (data) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("div");
  const nameEl = document.createElement("h2");
  const cognomeEl = document.createElement("h2");
  const dataEl = document.createElement("h4");
  const delEl = document.createElement("button");
  const idEl = document.createElement("h5");

  cardEl.className = "cardRegista";
  imgEl.className = "imageRegista";
  nameEl.className = "nameRegista";
  cognomeEl.className = "surnameRegista";
  dataEl.className = "dataRegista";
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
    const url = `http://localhost:3000/regista`;
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

function createRegista(body_message) {
  const url = `http://localhost:3000/regista`;

  return POST(url, body_message);
}

const registaName = document.querySelector(".nameReg");
const registaSurname = document.querySelector(".surnameReg");
const registaData = document.querySelector(".dataReg");
const addBtn = document.querySelector(".btnAddRegista");

addBtn.addEventListener("click", () => {
  const regista = {
    nome: form[0].value,
    cognome: form[1].value,
    data_nascita: form[2].value,
  };

  createRegista(regista).then((message) => {
    console.log("Creazione andata bene!");
  });
});

window.onload = GET(url_registi).then((res) =>
  res.map((regista) => createCard(regista))
);
