import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';

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
    <div className="CommentSection">
      {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}
 
export default CommentSection;
