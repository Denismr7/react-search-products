import React from 'react';
import './App.css';
import Search from './components/Search'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Details from './components/Details'

function App() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/details" component={Details}></Route>
        </Switch>
      </div>
    )
}

export default App;
