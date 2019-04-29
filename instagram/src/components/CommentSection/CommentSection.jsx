import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';

const CommentSection = (props) => {
  return (
    <div className="CommentSection">
      <div className="Comments">
        {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </div>
      <div className="timestamp">{ props.timestamp }</div>
      <input className="comment-box" type="text" placeholder="Add a comment..." />
    </div>
  );
}
 
export default CommentSection;
