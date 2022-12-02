const express = require("express");

const app = express();

const middlewareProva = (req, res, next) => {
  console.log(1);
  console.log("Richiesta ricevuta.");
  next();
};

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000");
});

app.get("/home", middlewareProva, function (req, res) {
  res.sendFile("homepage.html", { root: __dirname + "/src" });
});

const { readFileSync, writeFileSync } = require("fs");

app.get("/registi", function (req, res) {
  const registi = JSON.parse(readFileSync("./src/registi.json", "utf8"));

  const array_registi = registi.map((att) => {
    const { id, nome, cognome, data_nascita } = att;
    return { id, nome, cognome, data_nascita };
  });
  res.json(array_registi);
});

app.get("/regista", function (req, res) {
  const id_regista = parseInt(req.query.id);

  if (isNaN(id_regista)) {
    res.status(400).send("Parametro mancante!");
  }

  const registi = JSON.parse(readFileSync("./src/registi.json", "utf8"));

  const regista = registi.find((regista) => {
    return regista.id == id_regista;
  });

  if (regista === undefined) {
    res.status(200).send("Attore non trovato!");
  } else {
    res.json(regista);
  }
});

app.post("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome non trovato!");
  }

  const registi = JSON.parse(readFileSync("./src/registi.json", "utf8"));

  const nuovo_regista = {
    id: registi.length == 0 ? 1 : registi[registi.length - 1].id + 1,
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

  const arr_map = registi.map((regista) => regista.id);
  const id_max = Math.max(...arr_map);
  nuovo_regista.id = id_max + 1;

  const index = registi.length;
  registi[index] = nuovo_regista;
  writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json(registi);
});

app.put("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome non trovato!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome non trovato!");
  }

  const nuovo_regista = {
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

  const registi = JSON.parse(readFileSync("./src/registi.json", "utf8"));

  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_regista);

    writeFileSync("./src/attori.json", JSON.stringify(registi));
    res.status(200).send("Attore aggiornato!!");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

app.delete("/regista", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send(" il Parametro è mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non di tipo numerico!");
  }

  const id_da_cancellare = req.body.id;

  const registi = JSON.parse(readFileSync("./src/registi.json", "utf8"));

  const regista = registi.filter((regista) => {
    return regista.id == id_da_cancellare;
  });

  if (regista.length > 0) {
    const array_deleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });

    writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
    res.status(200).send(array_deleted);
  } else {
    res.status(200).send(array_deleted);
  }
});
