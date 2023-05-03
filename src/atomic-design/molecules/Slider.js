import React from 'react';
import styled from 'styled-components';
import DefaultImage from '../atoms/DefaultImage';
import { type_texts } from '../../data/types_text';
import Text from '../atoms/Text'

const altImg = 'Slider Img';
const srcImg = `https://lmaasturias.com/wp-content/uploads/2017/02/fondo-slider-paisaje-asturiano.jpg`


const SliderContainer = styled.div`
	display:flex;
	flex-direction: column;
	position: relative;
`
const TextContainer = styled.div`
	position: absolute;
	right: 70px;
	bottom: 60px;
	position: absolute;
	width:fit-content;
	background-color: rgb(209, 92, 0);
	padding: 5px 10px;
	opacity:0.9;
	transition: 0.5s;
`

function Slider(props) {
  return (
    <SliderContainer>
			<DefaultImage srcImg={srcImg} altImg={altImg}/>
			<TextContainer>
				<Text
					text='This is a title'
					type={type_texts['title']}
					color="white"/>
				<Text
					text='This is a bit description'
					type={type_texts['bit_description']}
					color="white"/>
			</TextContainer>
    </SliderContainer>
  );
}

export default Slider;