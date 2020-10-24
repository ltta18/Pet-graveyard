import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
  time {
    font-size: 12px;
    font-style: italic;
    margin-top: auto;
    margin-bottom: 6px;
    margin-left: 4px;
  }
`

const SingleComment = ({ comment }) => (
  <div>
    <div>
      {/* <div className="flex">
        <img
          src="https://api.adorable.io/avatars/65/abott@adorable.png"
          alt="Avatar"
        />
      </div> */}
      <div className="flex" style={{ display: 'flex', flexShrink: 0 }}>
        <p className="comment-author">
          {comment.name}
        </p>
        {comment.time && (<time>{moment(comment.time.toDate()).calendar()}</time>)}
        
      </div>
      <p className="comment-content" style={{ textAlign: 'left' }}>{comment.content}</p>
    </div>
  </div>
)

const Comment = ({ comment }) => {
  return (
    <CommentBox>
      <SingleComment comment={comment} />
    </CommentBox>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  child: PropTypes.object
}

export default Comment