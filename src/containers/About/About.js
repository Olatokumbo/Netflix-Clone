import React from "react";
import { Typography } from "@material-ui/core";
import Quotes from "../../assets/quotes.png";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Typography>About Me</Typography>
        </div>
        <div className={style.headerRight}>
          <div className={style.box}></div>
        </div>
      </div>
      <div className={style.mainContent}>
        <div className={style.leftContent}>
          <img className={style.mark} src={Quotes} alt="" />
          <div className={style.wisdom}>
            <Typography className={style.quotes} component="p">
              Learning and innovation go hand in hand. The arrogance of success
              is to think that what you did yesterday will be sufficient for
              tomorrow.
            </Typography>
            <Typography className={style.author}>WILLIAM POLLARD</Typography>
            <img className={style.mark2} src={Quotes} alt="" />
          </div>
        </div>
        <div className={style.rightContent}>
          <Typography className={style.about} component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            eleifend lobortis metus. Sed luctus faucibus fringilla. Maecenas
            libero lectus, ultrices eu fringilla sit amet, consequat a odio.
            Etiam convallis risus molestie arcu pulvinar, et lobortis diam
            auctor. Donec in dui magna. Donec vitae leo consectetur, fringilla
            metus et, accumsan mauris. In venenatis mollis arcu, vel semper
            purus laoreet nec. Morbi pellentesque sem at dapibus tempor. Ut
            massa nibh, euismod vel scelerisque et, accumsan ut nibh. Maecenas
            finibus blandit nibh ac bibendum. Nullam massa lectus, fermentum
            viverra felis nec, condimentum porttitor ligula. Donec finibus nec
            tortor ac imperdiet. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Mauris quis diam vitae
            odio euismod elementum at at justo.
          </Typography>
          <Typography
            className={style.about}
            component="p"
            style={{ marginTop: "1rem" }}
          >
            Cras iaculis leo vel augue molestie, pretium vestibulum odio
            accumsan. Vivamus a eros sed est laoreet laoreet. Proin cursus
            volutpat magna nec accumsan. Cras tristique dignissim pretium.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
