import React, { useEffect } from "react";
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"

const CommentList = styled.div`
  background: #EDE6D9;
  max-height: 200px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  overflow: auto;
  border-radius: 3px;
  padding-bottom: 25px;
  article {
    padding: 0;
    border: none;
  }
`

const Comments = ({ comments, slug }) => {
  const isCemetery = window.location.href.split('/')[3] === 'cemetery' ? true : false;

  useEffect(() => {
    var objDiv = document.getElementById("comment-list");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [comments])

  return (
    <div style={{ marginLeft: 40, width: '100%' }}>
          <h2 style={{ margin: 0, marginBottom: 10, textAlign: 'center' }}>
            {isCemetery ? 'LỜI NHẮN GỬI' : 'TRÒ CHUYỆN'}
          </h2>
            
          <CommentList id="comment-list">
              {comments.length > 0 &&
                  comments
                      .filter(comment => !comment.pId)
                      .sort(function(a,b) {return a.time - b.time})
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
