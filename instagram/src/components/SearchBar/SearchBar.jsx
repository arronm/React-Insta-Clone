import React from 'react';
import styled from 'styled-components';
import './SearchBar.scss';

const SearchBar = (props) => {

  const handleOnSearch = (event) => {
    event.preventDefault();
    props.handleOnSearch();
  }

  const handleOnChange = (event) => {
    props.handleSearchInput(event.target.value);
  }

  const Header = styled.header`
    display: flex;
    justify-content: center;
    background: #fcfcfc;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  `;

  const Navigation = styled.section`
    display: flex;
    align-items: center;
    max-width: 1010px;
    justify-content: space-between;
    width: 100%;
    height: 75px;
  `;

  const Logo = styled.div`
    display: flex;
  `;

  const Icon = styled.span`
    background-image: url('/static/media/insta-sprites.2950dbd4.png');
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    background-size: 282px 273px;
    `;
    
  const LogoIcon = styled(Icon)`
    background-position: 0 -174px;
  `;

  const LogoName = styled(Icon)`
    height: 29px;
    width: 103px;
    background-position: 0 -144px;
  `;

  const LogoSeparator = styled.div`
    background-color: #262626;
    height: 28px;
    margin: 0 16px;
    width: 1px;
  `;

  const InputSearch = styled.input`
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 3px 10px 3px 15px;
    z-index: 2;
  `;

  const Nav = styled.nav`
    display: flex;
    padding-left: 24px;
  `;

  const DiscoverIcon = styled(Icon)`
    background-position: -258px 0;
  `;

  const ActivityIcon = styled(Icon)`
    background-position: -50px -200px;
    margin-left: 30px;
  `;

  const ProfileIcon = styled(Icon)`
    background-position: -208px -75px;
    margin-left: 30px;
    cursor: pointer;
  `;

  return (
    <Header>
      <Navigation>
        <Logo>
          <LogoIcon />
          <LogoSeparator />
          <LogoName />
        </Logo>
        <div>
          <form onSubmit={handleOnSearch}>
            <InputSearch
              onChange={handleOnChange}
              className="search__input"
              type="text"
              placeholder="search"
              autoCapitalize="none"
              value={props.search}
          />
          </form>
        </div>
        <Nav>
          <DiscoverIcon />
          <ActivityIcon />
          <ProfileIcon onClick={props.handleLogOut}></ProfileIcon>
        </Nav>
      </Navigation>
    </Header>
  );
}
 
export default SearchBar;
