import { Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import style from "./Home.module.css";
const App = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.header}>
        <Typography className={style.name} >I'm David Odesola</Typography>
        <Typography className={style.info}component="p">
          I’m a passionate Full-Stack Web developer, music producer, and a tech
          enthusiast. Personally, I believe that anything is achievable as long
          as you put your mind into it. Start scrolling and get to know much
          more about me.
        </Typography>
        <div className={style.socials}>
        <img src={Linkedin} alt=""/>
        <img src={Github} alt=""/>
        <img src={Facebook} alt=""/>
        <img src={Instagram} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default App;
