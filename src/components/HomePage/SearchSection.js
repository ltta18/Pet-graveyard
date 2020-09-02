import React from 'react';
import './SearchSection.css';
import { Container, Box, TextField, Input } from '@material-ui/core';

function SearchSection() {
  return (
    <Container id="search-section">
      <Box>Tìm kiếm</Box>
      <Container className="input-field">
        <Input placeholder="Nhập nội dung tìm kiếm" type="text"/>
      </Container>
      <Box className="result"></Box>
    </Container>
  );
}

export default SearchSection