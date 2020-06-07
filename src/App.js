import React from 'react';
import './App.css';
import SearchBar from './SearchBar'
import ListItems from './ListItems'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ListItems />
      </div>
    )
  }
}

export default App;
