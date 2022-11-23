import { sum, sottrazione, molti, divisione } from "./calc.js";
import { q, c, GET, DELETE } from "./utils.js";

import url from "url";
import http from "http";

const container = c("div");

const createBtn = (res) => {
  const nav = c("div");
  const home = c("button");
  const btnSomma = c("button");
  const btnSottra = c("button");
  const btnMolti = c("button");
  const btnDiv = c("button");

  nav.append(home, btnSomma, btnSottra, btnMolti, btnDiv);
  container.append(nav);
};

//-- CREATE CARD--
