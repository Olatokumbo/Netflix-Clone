import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img className={style.logo} src={Logo} alt="" />
      </div>
      <div className={style.right}>
        <div className={style.menu}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>Home</Typography>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>About</Typography>
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>Works</Typography>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-40}
            smooth={true}
            duration={500}
          >
            <Typography>Skills</Typography>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>Contact</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
