import React from 'react';
import './ImageContainer.css';
import { Grid } from '@material-ui/core';

function ImageContainer () {
  const Image = () => {
    return (
      <Grid item className="image" spacing={1}>
        <img src="" />
      </Grid>
    );
  }
  
  return (
    <Grid container direction='row' alignItems='center' spacing={5} id="image-container">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </Grid>
  )
}


export default ImageContainer