import React, { useEffect } from 'react';
import './ImageContainer.css';
import { Container, Grid } from '@material-ui/core';

const Image = () => {
  return (
    <Grid item className="image" spacing={1}>
      <img src="" />
    </Grid>
  );
}

function ImageContainer () {
  const container = []

  for (let i=0; i<5; i++) {
    container.push(<Image />)
  }
  
  return (
    <Grid direction='row' alignItems='center' spacing={5} id="image-container">{container}</Grid>
  )
}


export default ImageContainer