import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer posts={data} />
    </div>
  );
}

export default App;
