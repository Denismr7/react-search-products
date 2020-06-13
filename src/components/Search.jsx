import React from 'react'
import SearchBar from './SearchBar'
import ListItems from './ListItems'

export default function Search() {
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    const {value} = event.target
    setSearch(value)
  }
    return (
        <div>
          <SearchBar search={search} handleChange={handleChange}/>
          <ListItems search={search}/>
        </div>
      )
}