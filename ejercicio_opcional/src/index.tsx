import React from "react";
import ReactDOM from "react-dom";
import { getEntono } from "./entorno"
const LogoImg = require("./content/logo_1.png");
// const classes = require("./mystyles.scss");  // aqui no funciona ???
import classes from "./mystyles.scss";  // duda por que da error y lo esta usando ???

ReactDOM.render(

  <div className={ classes.content }>
    { getEntono() }
    <h1 className={ classes.title }>Hello World</h1>
    <h2 className={ classes.title }>- optional -</h2>
    <img className={ classes.img_logo } src={ LogoImg } />
  </div>,
  document.getElementById("root")
);