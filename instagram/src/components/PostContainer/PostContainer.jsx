import React from 'react';
import Post from './Post';
import './PostContainer.scss';

const PostContainer = (props) => {
  return (
    <div className="PostContainer">
      {props.posts.map(post => <Post {...post} key={post.id} />)}
    </div>
  );
}
 
export default PostContainer;
