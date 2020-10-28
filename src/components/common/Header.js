import React, { useEffect, useState } from "react";
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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    console.log(width)
    width < 870 ? setMobile(true) : setMobile(false)
  }, [])
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid id="header">
      <h1>
        <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>MỘ THÚ CƯNG</Link>
      </h1>

      {/* <img src="" alt="logo" id="logo" /> */}
      {!mobile && 
      <div>
        <Button className="button">Donate</Button>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSccrmh_nMr2Clpm6JlpgISpucRkunI4hNGKCNjrwILF9CTfLw/viewform">
          <Button className="button">
                  Đăng kí mộ
          </Button>
        </a>
      </div>
      }
      {mobile &&
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
