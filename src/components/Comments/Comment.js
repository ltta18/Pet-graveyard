import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CommentForm from "./CommentForm"
import moment from "moment"

const CommentBox = styled.article`
  border: 1px solid #ddd;
  margin: 25px 0 0 ${props => (props.child ? "20px" : "0")};
  padding: 35px;
  .flex-container {
    display: flex;
    align-items: flex-start;
    .flex + .flex {
      margin-left: 10px;
    }
  }
  .comment-author {
    font-size: 18px;
    text-align: left;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 700;
    span {
      text-transform: none;
      font-weight: 400;
      font-style: italic;
    }
  }
  .comment-content {
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const SingleComment = ({ comment }) => (
  <div>
    <div style={{ display: 'flex' }}>
      {/* <div className="flex">
        <img
          src="https://api.adorable.io/avatars/65/abott@adorable.png"
          alt="Avatar"
        />
      </div> */}
      <div className="flex">
        <p className="comment-author">
          {comment.name} <span>says</span>
        </p>
        {comment.time && (<time style={{ fontSize: 12 }}>{moment(comment.time.toDate()).calendar()}</time>)}
      </div>
      <p className="comment-content">{comment.content}</p>
    </div>
  </div>
)

const Comment = ({ comment, child, slug }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)
  return (
    <CommentBox>
      <SingleComment comment={comment} />
      {child && (
        <CommentBox child className="comment-reply">
          <SingleComment comment={child} />
        </CommentBox>
      )}
      {/* {!child && (
        <div>
          <CommentForm parentId={comment.id} slug={slug} />
          {showReplyBox ? (
            <div>
              <button
                className="btn bare"
                onClick={() => setShowReplyBox(false)}
              >
                Cancel Reply
              </button>
              <CommentForm parentId={comment.id} slug={slug} />
            </div>
          ) : (
            <button className="btn bare" onClick={() => setShowReplyBox(true)}>
              Reply
            </button>
          )}
        </div>
      )} */}
    </CommentBox>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  child: PropTypes.object
}

export default Comment