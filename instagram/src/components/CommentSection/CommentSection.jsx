import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.scss';

const CommentSection = (props) => {
  return (
    <div className="CommentSection">
      <div className="Comments">
        {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </div>
      <div className="timestamp">
        <Moment parse="MMMM Do YYYY, hh:mm:ss a" fromNow>{props.timestamp}</Moment>
      </div>
      <input className="comment-box" type="text" placeholder="Add a comment..." />
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string,
    })
  )
}
 
export default CommentSection;
