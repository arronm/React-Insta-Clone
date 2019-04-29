import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const Post = (props) => {
  return (
    <article className="Post">
      <header className="user">
        <span className="user__thumbnail">
          <img src={props.thumbnailUrl} alt={props.username}/>
        </span>
        <span className="user__name">{props.username}</span>
      </header>
      <div className="image">
        <img src={props.imageUrl} alt={`by ${props.username}`} />
      </div>
      <div className="like-box">
        <div className="icons">
          <span className="icons__heart"></span>
          <span className="icons__comment"></span>
        </div>
        <span className="likes">{`${props.likes} likes`}</span>
      </div>
      <CommentSection comments={props.comments} timestamp={props.timestamp} />
    </article>
  );
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
}
 
export default Post;