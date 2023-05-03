import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: ${props => props.maxWidth || '100%'};
  filter: grayscale(${props => props.grayscale || '0'});
`;

function DefaultImage(props) {
  return (
    <StyledImg src={props.srcImg} alt={props.altImg} grayscale={props.grayscale} maxWidth={props.maxWidth} />
  );
}

export default DefaultImage;