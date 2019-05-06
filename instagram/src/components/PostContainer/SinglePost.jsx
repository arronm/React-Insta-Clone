import React from 'react';
import Post from './Post';

const SinglePost = (props) => {
  console.log(props);
  return (
    <>
      <Post {...props.post} />
    </>
  );
}
 
export default SinglePost;