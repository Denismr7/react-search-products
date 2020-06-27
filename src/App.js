import React from 'react';
import './App.css';
import Search from './components/Search'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Details from './components/Details'
import SignIn from './components/SignIn'
import { StateProvider } from './context'
import { LoginProvider } from './loginContext'
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
    return (
      <StateProvider>
      <LoginProvider>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </div>
      </LoginProvider>
      </StateProvider>
    )
}

export default App;
