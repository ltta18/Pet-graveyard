import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TextField,
} from '@material-ui/core';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Link } from 'react-router-dom';
import './SearchSection.css';

export const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
export const SHEET_ID = process.env.REACT_APP_SHEET_ID;
export const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
export const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
let rawData = [];

function SearchSection() {
  const [data, setData] = useState(rawData);
  const [searchInput, setSearchInput] = useState('');
    
  const handleSearchChange = e => {
    setSearchInput(e.target.value);
  };


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
      rawData = rows;
    }

    getData();
  }, []);

  useEffect(() => {
    let filteredData  = rawData.filter(item => {
      if(item["Tên thú cưng"].toLowerCase().includes(searchInput.toLowerCase()) ) {
        return item["Tên thú cưng"];
      }
    })
    setData(filteredData);
  },[searchInput])

  return (
    <Container id="search-section">
      <h2 style={{ margin: 0, marginBottom: 10, textAlign: 'center' }}>Tìm kiếm thú cưng</h2>
      <Container className="input-field">
        <TextField style={{ padding: "10px 15px", width: '90%' }}placeholder="Nhập tên thú cưng" value={searchInput}
            onChange={handleSearchChange} />
      </Container>
      <Box className="result">
        {data.map((obj, index) => (
              <Link className="result-pet" to={{ pathname: `cemetery/${obj._rowNumber}` }}>
                <h3>
                  {obj["Tên thú cưng"]} - {obj["Tuổi thú cưng"]} tuổi ({obj["Ngày mất"]})
                </h3>
              </Link>
            ))}
      </Box>
    </Container>
  );
}

export default SearchSection