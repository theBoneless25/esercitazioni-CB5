const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000");
});

app.get("/home", function (req, res) {
  res.sendFile("homepage.html", { root: __dirname + "/src" });
});

const { readFileSync, writeFileSync } = require("fs");

app.get("/attori", function (req, res) {
  const attori = JSON.parse(readFileSync("./src/attori.json", "utf8"));

  const array_attori = attori.map((att) => {
    const { id, nome, cognome, data_nascita } = att;
    return { id, nome, cognome, data_nascita };
  });
  res.json(array_attori);
});

app.get("/attore", function (req, res) {
  const id_attore = parseInt(req.query.id);

  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }

  const attori = JSON.parse(readFileSync("./src/attori.json", "utf8"));

  const attore = attori.find((attore) => {
    return attore.id == id_attore;
  });

  if (attore === undefined) {
    res.status(200).send("Attore non trovato!");
  } else {
    res.json(attore);
  }
});

app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome non trovato!");
  }

  const attori = JSON.parse(readFileSync("./src/attori.json", "utf8"));

  const nuovo_attore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
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
  attori.push(nuovo_attore);

  writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json(attori);
});

app.put("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome non trovato!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome non trovato!");
  }

  const nuovo_attore = {
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

  const attori = JSON.parse(readFileSync("./src/attori.json", "utf8"));

  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato!!");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

app.delete("/attore", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send(" il Parametro è mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non di tipo numerico!");
  }

  const id_da_cancellare = req.body.id;

  const attori = JSON.parse(readFileSync("./src/attori.json", "utf8"));

  const attore = attori.filter((attore) => {
    return attore.id == id_da_cancellare;
  });

  if (attore.length > 0) {
    const array_deleted = attori.filter((attore) => {
      return attore.id != id_da_cancellare;
    });

    writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
    res.status(200).send(array_deleted);
  } else {
    res.status(200).send(array_deleted);
  }
});
