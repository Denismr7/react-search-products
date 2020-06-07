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

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <SearchBar state={this.state} handleChange={this.handleChange}/>
        <ListItems state={this.state}/>
      </div>
    )
  }
}

export default App;
