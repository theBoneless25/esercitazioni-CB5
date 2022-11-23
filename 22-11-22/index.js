"use strict";
import { sum, sottrazione, molti, divisione } from "./calc.js";
import http from "http";
import url from "url";
import fs from "fs";
//console.log(molti(3, 2));

// const os = require("node:os");
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.arch());

// const http = require();

const server = http.createServer((req, res) => {
  const parametri = url.parse(req.url, true).query;
  const myUrl = url.parse(req.url, true).pathname;
  const { params1, params2 } = parametri;
  console.log(params1, params2);
  switch (myUrl) {
    case "/home":
      res.write("Benvenuto nella mia home");
      break;
    case "/calcolatrice":
      const data = fs.readFileSync("./html/calc.html");
      res.write(data.toString());
      break;
    case "/sum":
      const somma = fs.readFileSync("./html/sum.html");
      res.write(somma.toString());
      res.write(`${sum(params1, params2)}`);
      break;
    case "/sub":
      const sottrai = fs.readFileSync("./html/sub.html");
      res.write(sottrai.toString());
      res.write(`${sottrazione(params1, params2)}`);
      break;
    case "/moltiplicazione":
      const moltiplicazione = fs.readFileSync("./html/molti.html");
      res.write(moltiplicazione.toString());
      res.write(`${molti(params1, params2)}`);
      break;
    case "/divisione":
      const dividi = fs.readFileSync("./html/div.html");
      res.write(dividi.toString());
      res.write(`${divisione(params1, params2)}`);
      break;
    default:
      res.write(
        "<h1>SPIAZE</h1><p>La pagina non funziona clicca su <a href='/home'>home<a></p>"
      );
  }

  res.end();
});

server.listen(3000);
