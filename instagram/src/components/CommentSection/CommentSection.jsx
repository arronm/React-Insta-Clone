import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.scss';

const StyledCommentSection = styled.div`
display: flex;
  flex-direction: column;
`;

const Comments = styled.div`
position: relative;
    padding: 16px;
`;

const Timestamp = styled.div`
margin-left: 16px;
`;

const CommentBox = styled.input`
border: none;
    border-top: solid 1px #dbdbdb;
    background: #fcfcfc;
    color: #262626;
    outline: 0;
    padding: 3px 10px 3px 15px;
    z-index: 2;
    height: 60px;
    margin: 10px 16px;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      username: this.props.user,
      input: '',
    }
  }

  addNewComment =  (event) => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length + 10, // TODO: Probably want a unique hash here
          username: this.state.username,
          text: this.state.input,
        }
      ],
      input: '',
    });
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() { 
    return (
      <StyledCommentSection>
        <Comments>
          {
            this.state.comments.length
            ? this.state.comments.map(comment => <Comment key={comment.id} {...comment} />)
            : null
          }
        </Comments>
        <Timestamp>
          <Moment parse="MMMM Do YYYY, hh:mm:ss a" fromNow>{this.props.timestamp}</Moment>
        </Timestamp>
        <form onSubmit={this.addNewComment}>
          <CommentBox
            type="text"
            placeholder="Add a comment..."
            value={this.state.value}
            onChange={this.handleOnChange}
            name="input"
          />
        </form>
      </StyledCommentSection>
    );
  }
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
