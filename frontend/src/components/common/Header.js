import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./Header.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Header() {
  return (
    <Grid id="header">
      <h1>
        <Link to="/">Pet Graveyard</Link>
      </h1>

      {/* <img src="" alt="logo" id="logo" /> */}
      <Grid>
        <Button className="button">Donate</Button>
        <Button className="button">Đăng kí mộ</Button>
      </Grid>
    </Grid>
  );
}

export default Header;
