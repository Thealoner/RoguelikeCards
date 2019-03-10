import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './scenes/Home/Home';
import Playboard from './scenes/Playboard/Playboard';
import Nav from './components/Nav/Nav';
import './reset.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Nav />
            <Route path="/" exact component={Home}></Route>
            <Route path="/playboard" component={Playboard}></Route>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
