import React from 'react';
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
      {/* Render comment section with props.comments */}
      <CommentSection comments={props.comments} />
    </article>
  );
}
 
export default Post;