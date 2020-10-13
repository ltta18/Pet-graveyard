import React, { useState, useEffect } from "react";
import ImageContainer from "../../components/homepage/ImageContainer";
import Graveyard from "../../components/homepage/Graveyard";
import SearchSection from "../../components/homepage/SearchSection";
import Comment from "../../components/homepage/Comment";
import GraveyardZone from "../../components/graveyardzone/GraveyardZone";
import { Container } from "@material-ui/core";
import "./index.css";
import Comments from "../../components/Comments";
import { firestore } from '../../firebase.js'

function HomePage() {
  const [zoneName, setZoneName] = useState('A');
  const [open, setOpen] = React.useState(false);
  const [comments, setComments] = useState([{name: "Elon", content: "Hello, I also went there.", pId: null, time: null}])
  const id = "0"
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

  useEffect(() => {
    firestore
      .collection(`comments`)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs
        .filter(doc => doc.data().slug === id)
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setComments(posts)
      })
}, [id])

  return (
    <Container maxWidth={false}>
      <Container id="intro" maxWidth={false}>
        <ImageContainer />
        <Comments comments={comments} slug={id} />
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
