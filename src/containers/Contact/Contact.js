import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container}>
      <Typography className={style.header}>Contact Me</Typography>
      <div className={style.contactMain}>
        <div className={style.contactLeft}></div>
        <div className={style.contactRight}>
          <div className={style.info}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              className={style.input}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              className={style.input}
            />
          </div>
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            rows={8}
            // rowsMax={4}
            variant="outlined"
            className={style.contactMessage}
          />
          <Button variant="contained" color="primary">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
