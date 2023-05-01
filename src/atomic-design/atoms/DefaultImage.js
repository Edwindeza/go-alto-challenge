import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 100%;
`;

function DefaultImage(props) {
  return (    
    <StyledImg src={props.srcImg} alt={props.altImg} ></StyledImg>
  );
}

export default DefaultImage;