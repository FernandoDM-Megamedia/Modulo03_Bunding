import React from "react";
import ReactDOM from "react-dom";
import { getEntono } from "./entorno"

const LogoImg = require("./content/logo_1.png");  
import classes from "./mystyles.scss";  // para que typescript entienda el SCSS hay que crear un fichero .- declaration.d.ts

ReactDOM.render(

  <div className={ classes.content }>
    { getEntono() }
    <h1 className={ classes.title }>Hello World</h1>
    <h2 className={ classes.title }>- optional -</h2>
    <img className={ classes.img_logo } src={ LogoImg } />
  </div>,
  document.getElementById("root")
);