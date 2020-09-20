import React from "react";
import { Container, Box, TextField, Typography } from "@material-ui/core";
import "./Comment.css";
import { DiscussionEmbed } from "disqus-react";

function Comment() {
  const disqusShortName = "pet-graveyard-com";
  const disqusConfig = {
    identifier: "69", // you can define anything as "identifier" for each blog post
    title: "Home",
    url: window.location.href,
  };

  return (
    <Container id="comment-section">
      <Typography>Comment</Typography>
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      {/* <Box id="comment-box">
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
      </Box> */}
    </Container>
  );
}

export default Comment;
