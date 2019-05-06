import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from './Post';
import './PostContainer.scss';

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  padding-top: 60px;
`;

const PostContainer = (props) => {
  return (
    <StyledPostContainer>
      { // If we need all posts
        props.posts.length > 0 && !props.filter
        ? props.posts.map(post => (
          <Link to={`/${post.id}`}>
            <Post {...post} key={post.id} user={props.user} />
          </Link>
        ))
        : null
      }
      { // If we need filtered posts
        props.posts.length > 0 && props.filter
        ? props.posts
            .filter(post => post.username === props.filter)
            .map(post => <Post {...post} key={post.id} />)
        : null
      }
    </StyledPostContainer>
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
