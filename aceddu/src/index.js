import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layout/mainLayout";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainLayout>
    <App />
  </MainLayout>
);
