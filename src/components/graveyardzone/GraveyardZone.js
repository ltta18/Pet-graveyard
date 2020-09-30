import {
  Container,
  Modal,
  Typography
} from "@material-ui/core";
import React from "react";
import Headstone from "./Headstone";
import "./GraveyardZone.css";

function GraveyardZone(props) {
  const { zoneName, handleClose, open } = props;

  const indexArr = [...Array(30).keys()];

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <Container id="graveyard-zone" maxWidth={false}>
        <Container className="graveyard-body">
          <Container className="header">
            <Typography className="zone-name">{zoneName}</Typography>
            <button className="x-icon" onClick={handleClose}></button>
          </Container>
          <Container className="headstone-list">
            {indexArr.map(index => <Headstone name={`${zoneName}${index+1}`} img={require("../../img/book.jpg")} key={index}/>)}
          </Container>
        </Container>
      </Container>
    </Modal>
  );
}

export default GraveyardZone;
