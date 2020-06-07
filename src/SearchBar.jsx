import React from 'react'

function SearchBar(props) {
    return (
        <div className="searchBar_cont">
            <h1>¿Qué es lo que buscas?</h1>
            <input className="searchBar" type="text" name="search" placeholder="i.e Apple Iphone 11"/>
        </div>
    )
}

export default SearchBar