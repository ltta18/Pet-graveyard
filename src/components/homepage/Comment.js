import React from "react";
import { Container } from "@material-ui/core";
import "./Comment.css";

function Comment() {
  return (
    <Container id="comment-section">
      <div style={{ marginLeft: 40, width: '100%' }}>
          <h2 style={{ margin: 0, marginBottom: 10, textAlign: 'center' }}>
            TRÒ CHUYỆN
          </h2>
    </div>
    </Container>
  );
}

export default Comment;
