import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Grid id="header">
      <h1>
        <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>MỘ THÚ CƯNG</Link>
      </h1>

      {/* <img src="" alt="logo" id="logo" /> */}
      <Grid>
        <Button className="button">Donate</Button>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSccrmh_nMr2Clpm6JlpgISpucRkunI4hNGKCNjrwILF9CTfLw/viewform">
          <Button className="button">
                  Đăng kí mộ
          </Button>
        </a>
      </Grid>
    </Grid>
  );
}

export default Header;
