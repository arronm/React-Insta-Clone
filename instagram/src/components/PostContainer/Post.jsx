import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = (props) => {
  return (
    <div className="Post">
      <div className="user">
        <span className="user__thumbnail">
          <img src={props.thumbnailUrl} alt={props.username}/>
        </span>
        <span className="user__name">{props.username}</span>
      </div>
      <div className="image">
        <img src={props.imageUrl} alt={`by ${props.username}`} />
      </div>
      {/* Render comment section with props.comments */}
      <CommentSection comments={props.comments} />
    </div>
  );
}
 
export default Post;