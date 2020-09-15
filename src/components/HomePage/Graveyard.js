import React from 'react';
import './Graveyard.css';
import { Container, Grid, Typography } from '@material-ui/core';

function Graveyard(props) {
  const { handleClickGrave } = props

  const Grave = () => {
    return (
      <Container className="grave" onClick={handleClickGrave}>
        <Typography component="div">Khu A</Typography>
      </Container>
    )
  }

  const graveyard = []

  for (let i=0; i<9; i++) {
    graveyard.push(<Grave key={i} />)
  }

  return (
    <Grid container justify="space-between" id="graveyard">
      {graveyard}
    </Grid>
  );
}

export default Graveyard