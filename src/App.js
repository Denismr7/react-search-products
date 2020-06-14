import React from 'react';
import './App.css';
import Search from './components/Search'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Details from './components/Details'
import SignIn from './components/SignIn'
import { StateProvider } from './context'

function App() {
    return (
      <StateProvider>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/signin" component={SignIn}></Route>
        </Switch>
      </div>
      </StateProvider>
    )
}

export default App;
