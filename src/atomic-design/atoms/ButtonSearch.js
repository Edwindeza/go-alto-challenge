import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #D15C00;
    color: white;
    height: 54px;
    border: 0px;
    margin-left:1px;
    font-weight: bold;
    cursor:pointer;
`

function ButtonSearch({searchButton}) {
  return (
    <Button onClick={searchButton}>
        SEARCH
    </Button>
  );
}

export default ButtonSearch;