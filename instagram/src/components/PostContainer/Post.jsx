import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailUrl: props.thumbnailUrl,
      username: props.username,
      imageUrl: props.imageUrl,
      likes: props.likes,
      timestamp: props.timestamp,
      comments: props.comments,
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1, // TODO: This will need to be refactored to handle removing your like
    })
  }

  render() { 
    return (
      <article className="Post">
        <header className="user">
          <span className="user__thumbnail">
            <img src={this.state.thumbnailUrl} alt={this.state.username}/>
          </span>
          <span className="user__name">{this.state.username}</span>
        </header>
        <div className="image">
          <img src={this.state.imageUrl} alt={`by ${this.state.username}`} />
        </div>
        <div className="like-box">
          <div className="icons">
            <span className="icons__heart" onClick={this.handleLike}></span>
            <span className="icons__comment"></span>
          </div>
          <span className="likes">{`${this.state.likes} likes`}</span>
        </div>
        <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} />
      </article>
    );
  }
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
}
 
export default Post;
