
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { firestore } from "../../firebase.js"

const CommentBox = styled.div`
  input,
  textarea {
    display: block;
    background-color: #fff;
    border: 2px solid #ddd;
    font-size: 16px;
    font-family: "Hind", sans-serif;
    font-weight: 400;
    padding: 10px 12px 8px;
    width: 80%;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum";
  }
  input[type="text"] {
    width: 80%;
  }
  label {
    display: block;
    width: 100%;
    margin-top: 10px;
    text-align: left;
  }
  button {
    padding: 10px; 
    height: 40px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
`


const CommentForm = ({ parentId, slug }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const handleCommentSubmission = async e => {
    e.preventDefault()
    let comment = {
      name: name,
      content: content,
      pId: parentId || null,
      slug: slug,
      time: new Date(),
    }
    firestore
    .collection(`comments`)
    .add(comment)
    .catch(err => {
        console.error('error adding comment: ', err)
    })
    setName("")
    setContent("")
    console.log(comment)
    
    var objDiv = document.getElementById("comment-list");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  return (
    <CommentBox>
      <form style={{display: 'flex', alignItems: 'flex-end'}} onSubmit={e => handleCommentSubmission(e)}>
        {/* <div style=> */}
          <label htmlFor="name">
            Tên
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="comment">
            Lời muốn nói
            <textarea
              id="comment"
              onChange={e => setContent(e.target.value)}
              value={content}
              name="comment"
              required="required"
              cols="45"
              rows="1"
            ></textarea>
          </label>
        {/* </div> */}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </CommentBox>
  )
}
export default CommentForm