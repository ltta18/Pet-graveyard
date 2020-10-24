import React, { useEffect, useState } from "react";
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"
import moment from "moment"

const RUNNING_TEXT = [
  {
    name: 'Tuấn',
    time: moment('2020-10-10'),
    content: 'Chia buồn cùng gia đình!'
  },
  {
    name: 'Nam',
    time: moment('2020-10-10'),
    content: 'Thương em quá!'
  },
  {
    name: 'ccc',
    time: moment('2020-10-10'),
    content: 'Em mèo đáng yêu ghê!'
  },
  {
    name: 'Hằng',
    time: moment('2020-10-10'),
    content: 'Ôi chị nhớ em quá!'
  },
  {
    name: 'Bảo',
    time: moment('2020-10-10'),
    content: 'Chia buồn cùng gia quyến!'
  },
  {
    name: 'Quang',
    time: moment('2020-10-10'),
    content: 'Ôi chao ôi em Miu của anh!'
  }
]

const CommentList = styled.div`
  background: #EDE6D9;
  max-height: 210px;
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
  var [curRunningId, setCurRunningId] = useState(0)

  useEffect(() => {
    var objDiv = document.getElementById("comment-list");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [comments])

  const runningText = () => {
    const totalLength = RUNNING_TEXT.length
    if (curRunningId+3 > totalLength) setCurRunningId(0)
    else setCurRunningId(curRunningId++)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      runningText()
    }, 2000)
    return () => clearInterval(interval)
  })


  return (
    <div style={{ marginLeft: 40, width: isCemetery ? 'auto' : '100%' }}>
          <h2 style={{ margin: 0, marginBottom: 10, textAlign: 'center' }}>
            {isCemetery ? 'LỜI NHẮN GỬI' : 'TRÒ CHUYỆN'}
          </h2>
            
          <CommentList id="comment-list">
              {!isCemetery && [0,1,2].map((i) => <Comment key={i} comment={RUNNING_TEXT[curRunningId+i]} />)}
              {isCemetery && comments.length > 0 &&
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
          {isCemetery && <CommentForm slug={slug} />}
    </div>
  );
};

export default Comments;
