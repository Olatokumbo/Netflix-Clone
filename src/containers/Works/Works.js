import React from "react";
import { Typography } from "@material-ui/core";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/covid.png";
import style from "./Works.module.css";
const Works = () => {
  return (
    <div className={style.container} id="works">
      <Typography className={style.title}>Some of My Works</Typography>
      <div className={style.projectGrid}>
        <div className={style.gridItem}>
          <img className={style.project} src={Image1} alt="" />
          <a href="http://life-naturals.web.app" target="blank" className={style.overlay}>
            <Typography className={style.text}>Life Naturals</Typography>
          </a>
        </div>
        <div className={style.gridItem}>
          <img className={style.project} src={Image2} alt="" />
          <a href="https://github.com/Olatokumbo/Weather-App" target="blank" className={style.overlay}>
            <Typography className={style.text}>Weather App</Typography>
          </a>
        </div>
        <div className={style.gridItem}>
          <img className={style.project} src={Image3} alt="" />
          <a href="https://thumbshare-2020.web.app" target="blank" className={style.overlay}>
            <Typography className={style.text}>ThumbShare</Typography>
          </a>
        </div>
        <div className={style.gridItem}>
          <img className={style.project} src={Image4} alt="" />
          <a href="https://covid-19-tracers.web.app" target="blank" className={style.overlay}>
            <Typography className={style.text}>COVID-19 Tracker</Typography>
          </a>
        </div>
      </div>
      <Typography variant="body2" color="textSecondary">
        Check out more of my Projects at my GitHub profile&nbsp;
        <a href="https://github.com/Olatokumbo" target="blank">
          Here
        </a>
      </Typography>
    </div>
  );
};

export default Works;
