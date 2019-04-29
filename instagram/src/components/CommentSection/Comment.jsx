import React from 'react';
import './CommentSection.scss';

const Comment = (props) => {
  return (
    <span className="Comment">
      <span className="Comment__name">{props.username}</span>
      <span className="Comment__text">{props.text}</span>
    </span>
  );
}
 
export default Comment;