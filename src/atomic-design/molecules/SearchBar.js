import React from 'react';
import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch';
import ButtonSearch from '../atoms/ButtonSearch';

const SearchContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const SearchTitle = styled.h2`
    font-size: 14px;
    margin:0px;
`

const SearchContent = styled.div`
    display:flex;
`

function SearchBar(props) {
  return (
    <SearchContainer>
        <SearchTitle>Search the site</SearchTitle>
        <SearchContent>
            <InputSearch/>
            <ButtonSearch/>
        </SearchContent>
    </SearchContainer>
  );
}

export default SearchBar;