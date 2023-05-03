import React from 'react';
import styled from 'styled-components';
import { type_texts } from '../../data/types_text';
import { device } from '../../data/devices';

const commonStyles = `
	font-size: 14px;
	margin:0px;
	flex-direction: width:100%;
	text-align: justify;
`

const TitleText = styled.h2`
	${commonStyles}
	font-weight:bold;
	color: ${props => props.color || 'normal'};
	padding: ${props => props.padding || 'normal'};
`;

const BitDescription = styled.p`
	${commonStyles}
	color: ${props => props.color || 'normal'};
	padding: ${props => props.padding || 'normal'};
`
const Description = styled.p`
	${commonStyles}
	padding: ${props => props.padding || 'normal'};
	color: ${props => props.color || 'normal'};
  @media ${device.tablet} {
		max-width: ${props => props.maxWidth || '100%'};
  }
`

function Text(props) {
	switch(props.type){
		case type_texts['title']:
			return (<TitleText color={props.color} padding={props.padding}> { props.text } </TitleText>);
		case type_texts['bit_description']:
			return (<BitDescription color={props.color} padding={props.padding}> { props.text } </BitDescription>);
		default:
			return (<Description maxWidth={props.maxWidth} color={props.color} padding={props.padding}> { props.text } </Description>);
	}
}

export default Text;