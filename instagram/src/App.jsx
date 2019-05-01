import React, { Component } from 'react';
import './App.scss';
import withAuthenticate from './components/authentication/withAuthenticate';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostContainer)(Login);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      filter: '',
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
      console.log('this.state :', this.state);
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
    console.log('log this mf out');
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
      <div className="App">
        <SearchBar
          handleOnSearch={this.handleOnSearch}
          handleSearchInput={this.handleSearchInput}
          search={this.state.search}
          handleLogOut={this.handleLogOut}
        />
        { this.state.filter
          && <span
              className="reset-search"
              onClick={this.handleResetSearch}>showing results for: {this.state.filter}</span>
        }
        {/* <PostContainer posts={this.state.posts} filter={this.state.filter} /> */}
        <ComponentFromWithAuthenticate
          posts={this.state.posts}
          filter={this.state.filter}
          user={this.state.user}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default App;
