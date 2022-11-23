const http = require("http");
const server = http.createServer((req, res) => {
  const my_url = req.url;
  switch (my_url) {
    case "/home":
      res.write("benvenuto sul sito");
      break;
    case "/calcolatrice":
      res.write("benvenuto nella mia calcolatrice");
      break;
    case "/sum":
      const primo_addendo = req.params.add_1;
      const result = mia_calc.sum();
      res.write("il risultato è  " + result);
    default:
      res.write("<h1>ERRORE</h1><p>La pagina non esiste torna alla home</p>");
  }
  res.end();
});

server.listen(3000);
console.log("Salve Mondo");
