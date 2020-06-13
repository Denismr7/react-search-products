import React from 'react'

function SearchBar(props) {
    return (
        <div className="searchBar_cont">
            <h1>¿Qué es lo que buscas?</h1>
            <input className="searchBar" type="text" name="search"
            value={props.search} onChange={props.handleChange}
            placeholder="i.e iPhone 11"/>
        </div>
    )
}

export default SearchBar