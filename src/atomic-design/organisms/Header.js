import React from 'react';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';
import SearchBar from '../molecules/SearchBar';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

function Header(props) {
  return (
    <Nav>
      <Navbar/>
      <SearchBar/>
    </Nav>
  );
}

export default Header;