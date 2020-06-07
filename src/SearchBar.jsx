import React from 'react'

function SearchBar(props) {
    console.log(props)
    return (
        <div className="searchBar_cont">
            <h1>¿Qué es lo que buscas?</h1>
            <input className="searchBar" type="text" name="search"
            value={props.state.search} onChange={props.handleChange}
            placeholder="i.e iPhone 11"/>
        </div>
    )
}

export default SearchBar