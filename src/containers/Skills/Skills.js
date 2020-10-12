import React from "react";
import { Typography } from "@material-ui/core";
import BarGraph from "../../components/BarGraph/BarGraph";
import style from "./Skills.module.css";
const Skills = () => {
  return (
    <div className={style.container} id="skills">
      <div className={style.divider}>
        <span></span>
        <span>
          <Typography variant="h1" className={style.header}>
            Skills
          </Typography>
        </span>
        <span></span>
      </div>
      <Typography className={style.subtitle}>Here's some of the technologies that I use most of the time </Typography>
      <BarGraph />
    </div>
  );
};

export default Skills;
