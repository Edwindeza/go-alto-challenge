import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li``;

function Navbar(props) {
  return (
    <Nav>
      <Link to="/">
        <Logo src={props.logoSrc} alt={props.logoAlt} />
      </Link>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;