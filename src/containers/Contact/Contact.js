import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container} id="contact">
      <Typography className={style.header}>Contact Me</Typography>
      <div className={style.contactMain}>
        <div className={style.contactLeft}></div>
        <form className={style.contactRight}>
          <div className={style.info}>
            <TextField
              type="text"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              required
              className={style.input}
            />
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              required
              className={style.input}
            />
          </div>
          <TextField
            type="text"
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            rows={8}
            // rowsMax={4}
            variant="outlined"
            required
            className={style.contactMessage}
          />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
