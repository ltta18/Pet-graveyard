import React, { useState } from "react";
import ImageContainer from "../../components/homepage/ImageContainer";
import Graveyard from "../../components/homepage/Graveyard";
import SearchSection from "../../components/homepage/SearchSection";
import GraveyardZone from "../../components/graveyardzone/GraveyardZone";
import Comments from "../../components/Comments";
import { Container, Grid } from "@material-ui/core";
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
      <Grid container id="intro" alignItems="center" justify="space-between" spacing={5}>
        <Grid item xs={12} md={7}>
          <ImageContainer />
        </Grid>
        <Grid item xs={12} md={5}>
          <Comments />
        </Grid>
      </Grid>
      <Grid container id="body" direction="row" spacing={5}>
        <Grid item xs={12} md={6}>
          <SearchSection />
        </Grid>
        <Grid item xs={12} md={6}>
          <Graveyard handleClickGrave={handleClickGrave} />
        </Grid>
      </Grid>
      <GraveyardZone zoneName={`Khu ${zoneName}`} handleClose={handleClose} open={open}/>
    </Container>
  );
}

export default HomePage;
