import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/logo_1.png"; // <--- duda por que me marca error ¿?
import classes from "./mystyles.scss";

ReactDOM.render(
  <div className={ classes.content }>
    <h1 className={ classes.title }>Hello World</h1>
    <img className={ classes.img_logo } src={logoImg} />
  </div>,
  document.getElementById("root")
);