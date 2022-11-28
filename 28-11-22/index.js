const express = require("express");

const mod_calc = require("./src/modulo_calc");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000!");
}); //--get usando sendfile per il documento html
app.get("/calc", function (req, res) {
  res.sendFile("calcolatrice.html", { root: __dirname + "/src" });
});

app.get("/somma", function (req, res) {
  const par1 = req.query.param1;
  const par2 = req.query.param2; //---get somma con due param richiamando mod_calc(modulo_calc.js)
  const risultato = mod_calc.somma(par1, par2);
  console.log("Il Risultato è: " + risultato);
  res.status(200).send(risultato + "");
});

app.get("/sottrazione", function (req, res) {
  const par1 = req.query.param1;
  const par2 = req.query.param2; //---get sottrazione con due param richiamando mod_calc(modulo_calc.js)
  const risultato = mod_calc.sottrazione(par1, par2);
  console.log("Il Risultato è : " + risultato);
  res.status(200).send(risultato + "");
});

app.get("/moltiplicazione", function (req, res) {
  const par1 = req.query.param1;
  const par2 = req.query.param2;
  const risultato = mod_calc.moltiplicazione(par1, par2); //---get moltiplicazione con due param richiamando mod_calc(modulo_calc.js)
  console.log("Il Risultato è :  " + risultato);
  res.status(200).send(risultato + "");
});

app.get("/divisione", function (req, res) {
  const par1 = req.query.param1; //---get divisione con due param richiamando mod_calc(modulo_calc.js)
  const par2 = req.query.param2;
  const risultato = mod_calc.divisione(par1, par2);
  console.log("Il Risultato è : " + risultato);
  res.status(200).send(risultato + "");
});
