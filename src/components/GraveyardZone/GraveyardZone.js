import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./GraveyardZone.css";
import Headstone from "./Headstone";

function GraveyardZone(props) {
  const { zoneName, handleClose } = props;

  return (
    <Container id="graveyard-zone" style={{ display: "none" }}>
      <Container className="graveyard-body">
        <Container className="header">
          <Typography className="zone-name">{zoneName}</Typography>
          <button className="x-icon" onClick={handleClose}></button>
        </Container>
        <Container className="headstone-list">
          <Headstone name="A1" img={require("../../img/book.jpg")} />
          <Headstone name="A2" img={require("../../img/book.jpg")} />
          <Headstone name="A3" img={require("../../img/book.jpg")} />
          <Headstone name="A4" img={require("../../img/book.jpg")} />
          <Headstone name="A5" img={require("../../img/book.jpg")} />
          <Headstone name="A6" img={require("../../img/book.jpg")} />
          <Headstone name="A7" img={require("../../img/book.jpg")} />
          <Headstone name="A8" img={require("../../img/book.jpg")} />
          <Headstone name="A9" img={require("../../img/book.jpg")} />
          <Headstone name="A10" img={require("../../img/book.jpg")} />
        </Container>
      </Container>
    </Container>
  );
}

export default GraveyardZone;
