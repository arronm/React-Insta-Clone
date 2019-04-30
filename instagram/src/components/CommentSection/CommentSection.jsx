import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.scss';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      username: 'arronm',
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
      <div className="CommentSection">
        <div className="Comments">
          {
            this.state.comments.length
            ? this.state.comments.map(comment => <Comment key={comment.id} {...comment} />)
            : null
          }
        </div>
        <div className="timestamp">
          <Moment parse="MMMM Do YYYY, hh:mm:ss a" fromNow>{this.props.timestamp}</Moment>
        </div>
        <form onSubmit={this.addNewComment}>
          <input
            className="comment-box"
            type="text"
            placeholder="Add a comment..."
            value={this.state.value}
            onChange={this.handleOnChange}
            name="input"
          />
        </form>
      </div>
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
