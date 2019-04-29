import React from 'react';
import Comment from './Comment';

/*

  comments: [
    {
      username: "philzcoffee",
      text:
        "We've got more than just delicious coffees to offer at our shops!"
    },
    {
      username: "biancasaurus",
      text: "Looks delicious!"
    },
    {
      username: "martinseludo",
      text: "Can't wait to try it!"
    }
  ]

*/

const CommentSection = (props) => {
  return (
    <div>
      <h1>CommentSection</h1>
      {/* Render a new comment for all props.comment */}
      {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}
 
export default CommentSection;
