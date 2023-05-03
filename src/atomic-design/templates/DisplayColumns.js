import React from 'react';
import styled from 'styled-components';
import { device } from '../../data/devices';


const StyledContainer = styled.div`
  display:flex;
  width: 100%;
  flex: ${props => props.flex || 'auto'};
  flex-wrap:  ${props => props.flexWrap || 'no-wrap'};
  align-items: center;
  max-width: '100%';
  padding: ${props => props.padding || '0'};
  flex-direction: ${props => props.orderM || 'row'};

  @media ${device.mobileL} {
    flex-direction: ${props => props.orderML || 'row'};
  }

  @media ${device.tablet} {
    flex-direction: ${props => props.orderT || 'row'};
  }

  @media ${device.laptop} {
    flex-direction: ${props => props.orderL || 'row'};
  }

  @media ${device.desktop} {
    flex-direction: ${props => props.orderD || 'row'};
  }
`

function DisplayColumns(props) {

  return (
    <StyledContainer orderM={props.orderM} orderML={props.orderML} orderT={props.orderT} orderL={props.orderL} orderD={props.orderD} maxWidth={props.maxWidth} flex={props.flex} padding={props.padding}>
      {props.children}
    </StyledContainer>
  );
}

export default DisplayColumns;