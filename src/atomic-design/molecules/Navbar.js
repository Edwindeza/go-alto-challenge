import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
`;
const NavItemLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  transition: 0.5s;
  :hover{
    color: rgb(209, 92, 0);
  }
  &.active{
    color: rgb(209, 92, 0);
  }
`

function Navbar(props) {
  return (
    <>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavList>
        <NavItem>
          <NavItemLink
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            to="/">Home</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            to="/about">About</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            to="/blog">Blog</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            to="/contact">Contact</NavItemLink>
        </NavItem>
      </NavList>
    </>
  );
}

export default Navbar;