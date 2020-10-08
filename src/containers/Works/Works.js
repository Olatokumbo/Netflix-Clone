import React from "react";
import { Typography } from "@material-ui/core";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png"; 
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import style from "./Works.module.css";
const Works = () => {
  return (
    <div className={style.container}>
      <Typography className={style.title}>My Works</Typography>
      <div className={style.projectGrid}>
      <img className={style.project} src={Image1} alt=""/>
      <img className={style.project} src={Image2} alt=""/>
      <img className={style.project} src={Image3} alt=""/>
      <img className={style.project} src={Image4} alt=""/>
      </div>
      <Typography variant="body2" color="textSecondary">Check out more of my Projects at my GitHub profile Here</Typography>
    </div>
  );
};

export default Works;
