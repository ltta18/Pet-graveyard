import React, { useEffect, useState } from "react";

import {
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import { DiscussionEmbed } from "disqus-react";
import CustomSlide from "../../components/common/CustomSlide";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {firestore} from '../../firebase.js'
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"

const CommentList = styled.div`
  background: #EDE6D9;
  height: 150px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  overflow: auto;

  article {
    padding: 0;
    border: none;
  }
`

const Comments = ({ comments, slug }) => {
  return (
    <div style={{ marginLeft: 40, width: '100%' }}>
          <h2 style={{ margin: 0, marginBottom: 10 }}>TRÒ CHUYỆN</h2>
            
          <CommentList id="comment-list">
              {comments.length > 0 &&
                  comments
                      .filter(comment => !comment.pId)
                      .map(comment => {
                          let child
                          if (comment.id) {
                              child = comments.find(c => comment.id === c.pId)
                          }
                          return (
                              <Comment
                                  key={comment.id}
                                  child={child}
                                  comment={comment}
                                  slug={slug}
                              />
                          )
                      })}
          </CommentList>
          <CommentForm slug={slug} />
    </div>
  );
};

export default Comments;
