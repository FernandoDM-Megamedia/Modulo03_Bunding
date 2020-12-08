import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/logo_1.png";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <img src={logoImg} />
  </div>,
  document.getElementById("root")
);