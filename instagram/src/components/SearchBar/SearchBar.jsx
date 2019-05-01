import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {

  const handleOnSearch = (event) => {
    event.preventDefault();
    props.handleOnSearch();
  }

  const handleOnChange = (event) => {
    props.handleSearchInput(event.target.value);
  }

  return (
    <header className="SearchBar">
      <section className="navigation">
        <div className="logo">
          <span className="logo__icon"></span>
          <div className="logo__separator"></div>
          <span className="logo__name"></span>
        </div>
        <div className="search">
          <form onSubmit={handleOnSearch}>
            <input
              onChange={handleOnChange}
              className="search__input"
              type="text"
              placeholder="search"
              autoCapitalize="none"
              value={props.search}
          />
          </form>
        </div>
        <div className="nav">
          <span className="nav__discover"></span>
          <span className="nav__activity"></span>
          <span className="nav__profile" onClick={props.handleLogOut}></span>
        </div>
      </section>
    </header>
  );
}
 
export default SearchBar;
