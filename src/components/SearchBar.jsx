import React from 'react'
import {StyledSearchContainer, StyledSearchBar} from './styles/StyledSearchBar'

function SearchBar(props) {
    return (
        <StyledSearchContainer>
            <h1>¿Qué es lo que buscas?</h1>
            <StyledSearchBar type="text" name="search"
            value={props.search} onChange={props.handleChange}
            placeholder="i.e iPhone 11" />
        </StyledSearchContainer>
    )
}

export default SearchBar