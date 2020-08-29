import React, { useEffect } from 'react';
import './ImageContainer.css';
import { Container } from '@material-ui/core';

const Image = () => {
  return (
    <Container className="image">
      <img src="" />
    </Container>
  );
}

function ImageContainer () {
  const container = []

  for (let i=0; i<5; i++) {
    container.push(<Image />)
  }
  
  return (
    <Container id="image-container">{container}</Container>
  )
}


export default ImageContainer