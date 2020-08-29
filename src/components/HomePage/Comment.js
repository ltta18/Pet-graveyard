import React from 'react';
import './Comment.css';
import { Container, Box, TextField } from '@material-ui/core';

function Comment() {
  return (
    <Container id="comment-section">
      <Container>Comment</Container>
      <Box id="comment-box">
        <Box>A: Chào buổi sáng mọi người</Box>
        <Box>B: Chào buổi sáng mọi người</Box>
        <TextField
          id="text-input"
          placeholder="Nhập comment tại đây"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </Box>
    </Container>
  );
}

export default Comment