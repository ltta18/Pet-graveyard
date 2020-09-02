import React from 'react';
// import './Comment.css';
import { Container } from '@material-ui/core';
import Header from '../components/common/Header';
import Comment from '../components/HomePage/Comment';
import './HomePage.css';
import ImageContainer from '../components/HomePage/ImageContainer';
import Graveyard from '../components/HomePage/Graveyard';
import SearchSection from '../components/HomePage/SearchSection';

function HomePage() {
  return (
    <Container>
      <Header />
      <Container id="intro">
        <ImageContainer />
        <Comment />
      </Container>
      <Container id="body">
        <SearchSection />
        <Graveyard />
      </Container>
    </Container>
  );
}

export default HomePage