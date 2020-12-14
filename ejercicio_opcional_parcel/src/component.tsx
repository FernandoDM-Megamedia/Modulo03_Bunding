import React from "react";
const LogoImg = require("./content/logo_1.png");
const classes = require("./mystyles.scss");

export const HelloComponent: React.FC = () => {
    return (
        <div className={classes.content}>
            {/* { getEntono()} */}
            <h1 className={classes.title}>Hello Parcel</h1>
            <h2 className={classes.title}>- optional -</h2>
            <img className={classes.img_logo} src={ LogoImg } />
        </div>
    );
};