import React from 'react';
import './SearchSection.css';
import { Container, Box, TextField, Typography } from '@material-ui/core';

function SearchSection() {
  return (
    <Container id="search-section">
      <Typography>Tìm kiếm</Typography>
      <Container className="input-field">
        <TextField placeholder="Nhập nội dung tìm kiếm" />
      </Container>
      <Box className="result"></Box>
    </Container>
  );
}

export default SearchSection