import React, { Component } from 'react';
import './App.scss';
import withAuthenticate from './components/authentication/withAuthenticate';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

const ComponentFromWithAuthenticate = withAuthenticate(PostContainer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      filter: '',
    }
  }

  componentDidMount() {
    // Set our data here (timeout to simulate api call)
    setTimeout(() => {
      this.setState({
        ...this.state,
        posts: data,
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

  render() { 
    return (
      <div className="App">
        <SearchBar
          handleOnSearch={this.handleOnSearch}
          handleSearchInput={this.handleSearchInput}
          search={this.state.search}
        />
        { this.state.filter
          && <span
              className="reset-search"
              onClick={this.handleResetSearch}>showing results for: {this.state.filter}</span>
        }
        {/* <PostContainer posts={this.state.posts} filter={this.state.filter} /> */}
        <ComponentFromWithAuthenticate posts={this.state.posts} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
