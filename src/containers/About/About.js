import React from "react";
import { Typography } from "@material-ui/core";
import Quotes from "../../assets/quotes.png";
import Fade from "react-reveal/Fade";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container} id="about">
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Typography>About Me</Typography>
        </div>
        <div className={style.headerRight}>
          <div className={style.box}></div>
        </div>
      </div>
      <div className={style.mainContent}>
        <Fade left>
          <div className={style.leftContent}>
            <img className={style.mark} src={Quotes} alt="" />
            <div className={style.wisdom}>
              <Typography className={style.quotes} component="p">
                Learning and innovation go hand in hand. The arrogance of
                success is to think that what you did yesterday will be
                sufficient for tomorrow.
              </Typography>
              <Typography className={style.author}>WILLIAM POLLARD</Typography>
              <img className={style.mark2} src={Quotes} alt="" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={style.rightContent}>
            <Typography className={style.about} component="p">
              As a start, I grew up in a small town in the Philippines. Ever
              since I was young, I have always been so fascinated with
              technology. It has always been a goal of mine to actually develop
              something useful that would at some point reach various people all
              over the world. Furthermore, I gotta say that this goal really
              fueled my interests in the field of software engineering because
              nowadays almost everything that we actually interact with on a
              daily basis is running on some sort of software. However, I
              decided to focus my attention in the area of web development
              because that was something that I have always been so fascinated
              about. So now as a self-taught web developer with over 2 years
              experience, it has always been a great privilege for me to work
              with clients on varying projects knowing that my projects are
              being used by others.
            </Typography>
            <Typography
              className={style.about}
              component="p"
              style={{ marginTop: "1rem" }}
            >
              As a developer, I always try my absolute best to keep myself
              updated on the latest software trends or frameworks; I would
              say that this has really helped me to become better software
              developer.
            </Typography>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
