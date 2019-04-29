import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <header className="SearchBar">
      <section className="navigation">
        <div className="logo">
          <span className="logo__icon"></span>
          <div className="logo__separator"></div>
          <span className="logo__name"></span>
        </div>
        <div className="search">
          <input className="search__input" type="text" placeholder="search" autoCapitalize="none"/>
        </div>
        <div className="nav">
          <span className="nav__discover"></span>
          <span className="nav__activity"></span>
          <span className="nav__profile"></span>
        </div>
      </section>
    </header>
  );
}
 
export default SearchBar;
