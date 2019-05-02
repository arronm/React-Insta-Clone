import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import './App.scss';
import withAuthenticate from './components/authentication/withAuthenticate';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';
import Login from './components/Login/Login';
import SinglePost from './components/PostContainer/SinglePost';

const PostContainerFromWithAuthenticate = withAuthenticate(PostContainer)(Login);
const SinglePostFromWithAuthenticate = withAuthenticate(SinglePost)(Login);

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  min-height: 100vh;  
`;

const ResetSearch = styled.span`
  font-size: 10px;
  width: 100%;
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "×";
    font-size: 20px;
    line-height: 14px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '', // controlled input value
      filter: '', // on submit, set this === search
      user: '',
    }
  }

  componentDidMount() {
    // Set our data here (timeout to simulate api call)
    setTimeout(() => {
      this.setState({
        ...this.state,
        posts: data,
        user: window.localStorage.getItem('user') || '',
      });
    }, 300);
  }

  handleOnSearch = () => {
    this.setState({
      filter: this.state.search,
      search: '',
    });
  }

  handleSearchInput = (value) => {
    this.setState({
      search: value,
    });
  }

  handleResetSearch = () => {
    this.setState({
      filter: '',
    });
  }

  handleLogOut = () => {
    window.localStorage.removeItem('user');
    this.setState({
      ...this.state,
      user: '',
    });
  }

  handleLogin = (user) => {
    window.localStorage.setItem('user', user);
    this.setState({
      ...this.state,
      user: user,
    });
  }

  render() { 
    return (
      <StyledApp>
        <SearchBar
          handleOnSearch={this.handleOnSearch}
          handleSearchInput={this.handleSearchInput}
          search={this.state.search}
          handleLogOut={this.handleLogOut}
        />
        { this.state.filter
          && <ResetSearch onClick={this.handleResetSearch}>showing results for: {this.state.filter}</ResetSearch>
        }
        <Router>
          <Route path="/"
            exact
            render={(props) => (
              <PostContainerFromWithAuthenticate
              posts={this.state.posts}
              filter={this.state.filter}
              user={this.state.user}
              handleLogin={this.handleLogin}
            />
            )} />
          <Route path="/:id"
            render={(props) => (
              <SinglePostFromWithAuthenticate
                user={this.state.user}
                handleLogin={this.handleLogin}
                post={
                  this.state.posts.filter(post => post.id === props.match.params.id)[0]
                }
              />
            )}
          />
        </Router>
      </StyledApp>
    );
  }
}

export default App;
