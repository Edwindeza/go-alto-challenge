import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const logoAlt = 'My Blog';


const StyledImg = styled.img`
  height: 100px;
`;

function Logo(props) {
  return (
    <div className="logo">
      <StyledImg src={logo} alt={logoAlt} ></StyledImg>
    </div>
  );
}

export default Logo;