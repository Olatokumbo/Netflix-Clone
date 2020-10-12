import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >=20)
    setNavbar(true)
    else
    setNavbar(false)
  }
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? style.containerActive : style.container }>
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
            offset={-20}
            smooth={true}
            duration={500}
          >
            <Typography>About</Typography>
          </Link>
          <Link
            activeClass="active"
            to="works"
            offset={-80}
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
            offset={-80}
            smooth={true}
            duration={500}
          >
            <Typography>Skills</Typography>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-80}
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
