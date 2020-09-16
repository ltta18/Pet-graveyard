import React from 'react';
import { Container, Box, TextField, Typography } from '@material-ui/core';
import './Comment.css';

function Comment() {
  return (
    <Container id="comment-section">
      <Typography>Comment</Typography>
      <Box id="comment-box">
        <Typography>A: Chào buổi sáng mọi người</Typography>
        <Typography>B: Chào buổi sáng mọi người</Typography>
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