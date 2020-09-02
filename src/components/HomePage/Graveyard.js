import React from 'react';
import './Graveyard.css';
import { Container, Box, TextField, Grid } from '@material-ui/core';

const Grave = () => {
  return (
    <Box className="grave">
      <Box>Khu A</Box>
    </Box>
  )
}

function Graveyard() {
  const graveyard = []


  for (let i=0; i<9; i++) {
    graveyard.push(<Grave />)
  }

  return (
    <Grid container justify="space-between" id="graveyard">
      {graveyard}
    </Grid>
  );
}

export default Graveyard