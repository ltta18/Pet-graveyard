import React from "react";
import ImageContainer from "../../components/homepage/ImageContainer";
import Graveyard from "../../components/homepage/Graveyard";
import SearchSection from "../../components/homepage/SearchSection";
import Comment from "../../components/homepage/Comment";
import GraveyardZone from "../../components/graveyardzone/GraveyardZone";
import { Container } from "@material-ui/core";
import "./index.css";

function HomePage() {
  const handleClickGrave = () => {
    let filter = document.getElementById("black-filter");
    let graveyard = document.getElementById("graveyard-zone");
    filter.style.display = "";
    graveyard.style.display = "";
  };

  const handleClose = () => {
    let filter = document.getElementById("black-filter");
    let graveyard = document.getElementById("graveyard-zone");
    filter.style.display = "none";
    graveyard.style.display = "none";
  };

  return (
    <Container>
      <Container id="intro">
        <ImageContainer />
        <Comment />
      </Container>
      <Container id="body">
        <SearchSection />
        <Graveyard handleClickGrave={handleClickGrave} />
      </Container>
      <GraveyardZone zoneName="Khu A" handleClose={handleClose} />
      <Container id="black-filter" style={{ display: "none" }}></Container>
    </Container>
  );
}

export default HomePage;
