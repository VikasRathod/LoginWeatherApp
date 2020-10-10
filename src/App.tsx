import React from 'react';
import Login from './containers/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route path="/homePage" component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
