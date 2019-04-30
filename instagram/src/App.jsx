import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

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

  render() { 
    return (
      <div className="App">
        <SearchBar
          handleOnSearch={this.handleOnSearch}
          handleSearchInput={this.handleSearchInput}
          search={this.state.search}
        />
        <PostContainer posts={this.state.posts} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
