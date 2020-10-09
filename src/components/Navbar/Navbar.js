import React from "react";
import {Typography} from "@material-ui/core";
import Logo from "../../assets/logo.png";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
      <img className={style.logo} src={Logo} alt=""/>
      </div>
      <div className={style.right}>
        <div className={style.menu}>
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Works</Typography>
        <Typography>Skills</Typography>
        <Typography>Contact</Typography>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
