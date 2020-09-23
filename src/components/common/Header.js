import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Header.css';

function Header() {
  return (
    <Grid id="header">
      <img src="" alt="logo" id="logo"/>
      <Container>
        <Button className="button">Donate</Button>
        <Button className="button">Đăng kí mộ</Button>
      </Container>
    </Grid>
  );
}

export default Header