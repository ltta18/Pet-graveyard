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
  article {
    margin-bottom: 20px;
  }
`

const Comments = ({ comments, slug }) => {


  return (
    <div>
            <h2>Join the discussion</h2>
            
            <CommentList>
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
