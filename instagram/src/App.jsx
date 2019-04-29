import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

function App() {
  return (
    <div className="App">
      <SearchBar />

      {/* Map over posts and generate PostContainer */}
      {data.map(post => <PostContainer {...post} key={post.id} />)}
    </div>
  );
}

export default App;
