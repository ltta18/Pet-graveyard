import React from 'react';
import ImageContainer from '../components/HomePage/ImageContainer';
import Graveyard from '../components/HomePage/Graveyard';
import SearchSection from '../components/HomePage/SearchSection';
import Header from '../components/common/Header';
import Comment from '../components/HomePage/Comment';
import { Container } from '@material-ui/core';
import './HomePage.css';
import GraveyardZone from '../components/GraveyardZone/GraveyardZone';


function HomePage() {
  const handleClickGrave = () => {
    let filter = document.getElementById('black-filter')
    let graveyard = document.getElementById('graveyard-zone')
    filter.style.display = ''
    graveyard.style.display = ''
  }

  const handleClose = () => {
    let filter = document.getElementById('black-filter')
    let graveyard = document.getElementById('graveyard-zone')
    filter.style.display = 'none'
    graveyard.style.display = 'none'
  }

  return (
    <Container>
      <Header />
      <Container id="intro">
        <ImageContainer />
        <Comment />
      </Container>
      <Container id="body">
        <SearchSection />
        <Graveyard handleClickGrave={() => handleClickGrave()}/>
      </Container>
      <GraveyardZone zoneName='Khu A' handleClose={() => handleClose()} />
      <Container id="black-filter" style={{display: 'none'}}></Container>
    </Container>
  );
}

export default HomePage