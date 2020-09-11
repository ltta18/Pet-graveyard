import React from 'react';
import './Graveyard.css';
import { Box, Grid, Typography } from '@material-ui/core';

function Graveyard(props) {
  const { handleClickGrave } = props

  const Grave = () => {
    return (
      <div className="grave" onClick={handleClickGrave}>
        <Typography>Khu A</Typography>
      </div>
    )
  }

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