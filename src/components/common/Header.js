import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {    
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid id="header">
      <h1>
        <Link to="/"><img src={require('../../img/logo.jpg')} height={100} alt="logo" id="logo" /></Link>
      </h1>
      
      {window.innerWidth > 870 && 
      <div>
        <Button className="button">Donate</Button>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSccrmh_nMr2Clpm6JlpgISpucRkunI4hNGKCNjrwILF9CTfLw/viewform">
          <Button className="button">
                  Đăng kí mộ
          </Button>
        </a>
      </div>
      }
      {window.innerWidth <= 870 &&
      <div>
        <IconButton edge="start" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Donate</MenuItem>
          <MenuItem onClick={handleClose}>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSccrmh_nMr2Clpm6JlpgISpucRkunI4hNGKCNjrwILF9CTfLw/viewform">
              Đăng kí mộ
            </a>
          </MenuItem>
        </Menu>
    </div>
    }
    </Grid>
  );
}

export default Header;
