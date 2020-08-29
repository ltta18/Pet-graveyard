import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import './Header.css';

function Header() {
  return (
    <Grid id="header" alignContent='space-between'>
      <img src="" alt="logo" id="logo"/>
      <Button className="button">Donate</Button>
    </Grid>
  );
}

export default Header