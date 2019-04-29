import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const Comment = (props) => {
  return (
    <span className="Comment">
      <span className="Comment__name">{props.username}</span>
      <span className="Comment__text">{props.text}</span>
    </span>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
 
export default Comment;