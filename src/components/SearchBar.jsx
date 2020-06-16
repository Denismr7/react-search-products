import React from 'react'
import {StyledSearcContainer, StyledSearchBar} from './styles/StyledSearcBar'

function SearchBar(props) {
    return (
        <StyledSearcContainer>
            <h1>¿Qué es lo que buscas?</h1>
            <StyledSearchBar type="text" name="search"
            value={props.search} onChange={props.handleChange}
            placeholder="i.e iPhone 11" />
        </StyledSearcContainer>
    )
}

export default SearchBar