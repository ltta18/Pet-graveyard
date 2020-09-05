import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Header.css';

function Header() {
  return (
    <Grid id="header">
      <img src="" alt="logo" id="logo"/>
      <Button className="button">Donate</Button>
    </Grid>
  );
}

export default Header