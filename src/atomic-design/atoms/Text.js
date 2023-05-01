import React from 'react';
import styled from 'styled-components';
import { type_texts } from '../../data/types_text';


const TitleText = styled.h2`
	font-size: 14px;
	font-weight:bold;
	margin:0px;
`;

const BitDescription = styled.p`
	font-size:14px;
	margin: 0px;	
`
const Description = styled.p`
	font-size:14px;
	margin: 0px;	
`

function DefaultImage(props) {
	switch(props.type){
		case type_texts[title]:
			return (<TitleText> { props.text } </TitleText>);
		case type_texts[bit_description]:
			return (<BitDescription> { props.text } </BitDescription>);
			break;
		default:
			return (<Description> { props.text } </Description>);
	}
	return (    
		<StyledImg src={img} alt={logoAlt} ></StyledImg>
	);
}

export default DefaultImage;