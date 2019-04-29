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
      {console.log(data)}
      {data.map(data => <PostContainer {...data} key={data.id} />)}
    </div>
  );
}

export default App;
