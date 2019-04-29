import React from 'react';

const Comment = (props) => {
  return (
    <span className="Comment">
      {props.username}
      {props.text}
    </span>
  );
}
 
export default Comment;