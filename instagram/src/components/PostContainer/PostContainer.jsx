import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostContainer.scss';

const PostContainer = (props) => {
  return (
    <div className="PostContainer">
      {
        props.posts.length > 0
        ? props.posts.map(post => <Post {...post} key={post.id} />)
        : null
      }
    </div>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array,
    })
  )
}
 
export default PostContainer;
