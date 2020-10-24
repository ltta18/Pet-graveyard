import React, { useState } from "react";
import ImageContainer from "../../components/homepage/ImageContainer";
import Graveyard from "../../components/homepage/Graveyard";
import SearchSection from "../../components/homepage/SearchSection";
import GraveyardZone from "../../components/graveyardzone/GraveyardZone";
import Comments from "../../components/Comments";
import { Container } from "@material-ui/core";
import "./index.css";

function HomePage() {
  const [zoneName, setZoneName] = useState('A');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickGrave = zoneName => {
    handleOpen();
    setZoneName(zoneName);
  };

  return (
    <Container maxWidth={false}>
      <Container id="intro" maxWidth={false}>
        <ImageContainer />
        <Comments />
      </Container>
      <Container id="body" maxWidth={false}>
        <SearchSection />
        <Graveyard handleClickGrave={handleClickGrave} />
      </Container>
      <GraveyardZone zoneName={`Khu ${zoneName}`} handleClose={handleClose} open={open}/>
    </Container>
  );
}

export default HomePage;
