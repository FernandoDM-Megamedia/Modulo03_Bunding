import React from "react";
import ReactDOM from "react-dom";

const LogoImg = require("./content/logo_1.png");  
import classes from "./mystyles.scss";  // para que typescript entienda el SCSS hay que crear un fichero .- declaration.d.ts

ReactDOM.render(
  <div className={ classes.content }>
    <h1 className={ classes.title }>Hello World</h1>
    <img className={ classes.img_logo } src={ LogoImg } />
  </div>,
  document.getElementById("root")
);