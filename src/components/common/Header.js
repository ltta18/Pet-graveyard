import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Header.css';
import { Box, Fab, Menu, MenuItem } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid id="header" container direction="row" justify="space-between" alignItems="center">
      <img src="" alt="logo" id="logo"/>
      <Box display={{ xs: 'block', sm: 'none' }}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Fab color="primary" aria-label="add">
            <DehazeIcon />
          </Fab>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Đăng kí mộ</MenuItem>
          <MenuItem>Donate</MenuItem>
        </Menu>
      </Box>
      <Box display={{ xs: 'none', sm: 'block' }}>
        <Button className="button">Đăng kí mộ</Button>
        <Button className="button">Donate</Button>
      </Box>
    </Grid>
  );
}

export default Header