import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const StyledComment = styled.span`
  display: block;
  margin: 10px 0;
`;

const CommentName = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const Comment = (props) => {
  return (
    <StyledComment>
      <CommentName>{props.username}</CommentName>
      <span>{props.text}</span>
    </StyledComment>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
 
export default Comment;