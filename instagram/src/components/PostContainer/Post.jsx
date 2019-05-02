import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const StyledPost = styled.article`
  background: #fcfcfc;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  margin-bottom: 60px;
`;

const User = styled.header`
  display: flex;
  align-items: center;
  font-weight: 600;
  padding: 30px;
`;

const UserThumbnail = styled.img`
  height: 34px;
  width: 34px;
  margin-right: 10px;
`;
const UserName = styled.span`

`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;
const LikeBox = styled.div`
  margin-left: 16px;
  display: block;
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.span`
background-image: url('/static/media/insta-sprites.2950dbd4.png');
  background-repeat: no-repeat;
  display: block;
  width: 24px;
  height: 24px;
  display: block;
  margin: 8px;
  background-size: 282px 273px;
`;
const HeartIcon = styled(Icon)`
  background-position: -50px -199px;
`;
const CommentIcon = styled(Icon)`
  background-position: -183px -50px;
`;
const Likes = styled.span`
  font-weight: 600;
`;

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
      <StyledPost>
        <User>
          <span>
            <UserThumbnail src={this.state.thumbnailUrl} alt={this.state.username}/>
          </span>
          <span>{this.state.username}</span>
        </User>
        <div>
          <PostImage src={this.state.imageUrl} alt={`by ${this.state.username}`} />
        </div>
        <LikeBox>
          <Icons>
            <HeartIcon onClick={this.handleLike} />
            <CommentIcon />
          </Icons>
          <Likes>{`${this.state.likes} likes`}</Likes>
        </LikeBox>
        <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} user={this.props.user} />
      </StyledPost>
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
