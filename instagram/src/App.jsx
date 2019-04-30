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

  render() { 
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
