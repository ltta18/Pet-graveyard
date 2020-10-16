import React from "react";
import { Container } from "@material-ui/core";
import { DiscussionEmbed } from "disqus-react";
import "./Comment.css";

function Comment() {
  const disqusShortName = "pet-graveyard-com";
  const disqusConfig = {
    identifier: "69", // you can define anything as "identifier" for each blog post
    title: "Home",
    url: window.location.href,
  };

  return (
    <Container id="comment-section">
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </Container>
  );
}

export default Comment;
