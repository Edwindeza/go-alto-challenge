import React from 'react';
import styled from 'styled-components';
import DefaultImage from '../atoms/DefaultImage';
import { type_texts } from '../../data/types_text';


const altImg = 'Slider Img';
const srcImg = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwowslider.com%2Fresponsive-slideshow-chess-blinds-demo.html&psig=AOvVaw1K52rJvu-aZBCE64FVL1Ki&ust=1682980453257000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDpxIvV0v4CFQAAAAAdAAAAABAE`


const SliderContainer = styled.div`
	display:flex;
	flex-direction: column;
`
const TextContainer = styled.div`
	position: absolute;
	right: 10%;
	bottom: 10%
`

function Slider(props) {
  return (
    <SliderContainer>
			<DefaultImage srcImg={srcImg} altImg={altImg}/>       
			<TextContainer>
				<Text
					text='This is a title'
					type={type_texts[title]}/>
				<Text
					text='This is a bit description'
					type={type_texts[bit_description]}/>
			</TextContainer>
			
    </SliderContainer>
  );
}

export default Slider;