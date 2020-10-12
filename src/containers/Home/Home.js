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
    <div className={style.container} id="home">
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
        <a href="https://www.linkedin.com/in/david-odesola/" target="blank"><img src={Linkedin} alt=""/></a>
        <a href="https://www.github.com/Olatokumbo" target="blank"><img src={Github} alt=""/></a>
        <a href="https://www.facebook.com/profile.php?id=100005963777682" target="blank"><img src={Facebook} alt=""/></a>
        <a href="https://www.instagram.com/diaviid0/" target="blank"><img src={Instagram} alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default App;
