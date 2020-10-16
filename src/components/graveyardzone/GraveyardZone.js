import React, { useEffect, useState } from "react";
import Headstone from "./Headstone";
import {
  Container,
  Modal,
  Typography
} from "@material-ui/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import "./GraveyardZone.css";

export const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
export const SHEET_ID = process.env.REACT_APP_SHEET_ID;
export const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
export const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

function GraveyardZone(props) {
  const { zoneName, handleClose, open } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      setData(rows);
    }

    getData();
  }, []);

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
            {data.map((obj, index) => (
              <Headstone
                name={`${zoneName}${index}`}
                img={`https://drive.google.com/uc?export=view&${obj["Link ảnh"].split(',')[0].split('?')[1]}`}
                id={obj._rowNumber}
                key={index}
              />
            ))}
          </Container>
        </Container>
      </Container>
    </Modal>
  );
}

export default GraveyardZone;
