import React, { useState } from 'react';
import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch';
import ButtonSearch from '../atoms/ButtonSearch';
import { createSearchParams, useNavigate } from 'react-router-dom';

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

function SearchBar() {
	const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();

	const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

	const searchButton = () => {
		navigate({
			pathname: "/blog",
			search: createSearchParams({
				search: searchValue
			}).toString()
		})
	}

  return (
    <SearchContainer>
        <SearchTitle>Search the site</SearchTitle>
        <SearchContent>
            <InputSearch onChange={handleSearchValueChange}/>
            <ButtonSearch searchButton={searchButton}/>
        </SearchContent>
    </SearchContainer>
  );
}

export default SearchBar;