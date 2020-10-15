
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { firestore } from "../../firebase.js"
import { Button } from "@material-ui/core"

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
    width: 100%;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum";
  }
  textarea:focus, input[type="text"]:focus {
    outline: none;
  }
  input[type="text"] {
    width: 100%;
  }
  label {
    display: block;
    width: 100%;
    margin-top: 10px;
    text-align: left;
    overflow:hidden;
  }
  button {
    padding: 10px; 
    background-color: ${props => props.isCemetery ? '#ede6d9' : '#fff'};
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    text-transform: uppercase;
    width: 20%;
    height: 150px;
    margin-left: 10px;
    cursor: pointer;
  }
`


const CommentForm = ({ parentId, slug }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const isCemetery = window.location.href.split('/')[3] === 'cemetery' ? true : false;
  
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
  }

  return (
    <CommentBox isCemetery={isCemetery}>
      <form style={{ display: 'flex', alignItems: 'flex-end' }} onSubmit={e => handleCommentSubmission(e)}>
        {/* <div style=> */}
        <div style={{ width: '100%' }}>
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
              rows="3"
            ></textarea>
          </label>
          
        </div>
        {/* </div> */}
        {/* <button type="submit" className="btn">
          Submit
        </button> */}
        {/* {!isCemetery && <button type="submit" className="btn">Submit</button>} */}
          <button type="submit">
            {isCemetery && <img src={require("../../img/incense.svg")} width="30px" height="30px" />}
            <div>{isCemetery ? 'Thắp hương' : 'Submit'}</div>
          </button>
        
      </form>
    </CommentBox>
  )
}
export default CommentForm