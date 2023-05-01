import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #130000;
    color: white; 
    height:54px;
    border: 0;
    mi-width: 120px;
    padding-left:10px;
    padding-right:10px;
    box-sizing: border-box;
    outline: none;
    
`

function InputSearch(props) {
  return (
    <Input type='text' placeholder='Search value' />
  );
}

export default InputSearch;