import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Characters from './components/characters'
import SingleCharacter from './components/singleCharacter';
import './App.css';
import logo from './img/logo.png'

function App() {
  return (
    <Router>
      <div className="app">
        <img src={logo} className="logo"/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Characters} />
            <Route path="/:id" exact component={SingleCharacter} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
