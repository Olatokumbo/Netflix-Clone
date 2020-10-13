import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Slide from 'react-reveal/Slide';
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <Slide top cascade>
        <div className={style.socials}>
          <IconButton color="primary" onClick={() => window.open('https://www.linkedin.com/in/david-odesola/')}><LinkedInIcon/></IconButton>
          <IconButton color="primary" onClick={() => window.open('https://www.github.com/Olatokumbo')}><GitHubIcon/></IconButton>
          <IconButton color="primary" onClick={() => window.open('https://www.facebook.com/profile.php?id=100005963777682')}><FacebookIcon/></IconButton>
          <IconButton color="primary" onClick={() => window.open('https://www.instagram.com/diaviid0/')}><InstagramIcon/></IconButton>
      </div>
      </Slide>
      <Typography className={style.copyRight}>
        Copyright © 2020 All Rights Reserved
      </Typography>
    </div>
  );
};

export default Footer;
