import { useState, useEffect } from "react";
import "./index.css";

const NavBar = () => {
  return (
    <div class="header__content">
      <a class="header__logo" href="#">
        <strong>POPULAR CITIES</strong>
      </a>
      <ul class="header__menu">
        <li>
          <a href="#hero" class="underline">
            Home
          </a>
        </li>
        <li>
          <a href="#Cerca" class="underline">
            About
          </a>
        </li>
        <li>
          <a href="#" class="underline">
            Aiuto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
