import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import './Graveyard.css';

function Graveyard(props) {
  const { handleClickGrave } = props

  const Grave = ({ index }) => {
    const zoneName = String.fromCharCode(65+index)

    return (
      <Container className="grave" onClick={() => handleClickGrave(zoneName)}>
        <Typography component="div">Khu {zoneName}</Typography>
      </Container>
    )
  }

  const indexArr = [...Array(16).keys()];

  return (
    <Grid container justify="space-between" id="graveyard">
      {indexArr.map(index => <Grave index={index} key={index} />)}
    </Grid>
  );
}

export default Graveyard