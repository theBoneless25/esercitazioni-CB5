const express = require("express");
const { readFileSync, writeFileSync } = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000!");
});

app.get("/home", function (req, res) {
  res.sendFile("homepage.html", { root: __dirname + "/public" });
});

app.get("/attori", function (req, res) {
  const attoriText = readFileSync("./src/attori.json", "utf-8");
  const attori = JSON.parse(attoriText);

  const arr_attori = attori.map((att) => {
    const { id, nome, cognome } = att;
    return { id, nome, cognome };
  });
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  // per il singolo attore
  const attoreId = parseInt(req.query.id);
  if (isNaN(attoreId)) {
    res.status(400).send("Parametro mancante!");
  }

  const attoriText = readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attoriText);

  const attr = attori.find((attore) => {
    return attore.id == attoreId;
  });

  if (typeof attr === "undefined") {
    res.status(200).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro NOME mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro COGNOME mancante!");
  }

  const newAttore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  //console.log("il mio parametro: " + req.body.id);

  const attoriText = readFileSync("./src/attori.json", "utf-8");
  const attori = JSON.parse(attoriText);

  const index = Number(newAttore.id) - 1;
  console.log("NUOVO ATTORE: " + index);
  attori[index] = newAttore;

  console.log(attori);
  writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).send("Attore creato");
});
