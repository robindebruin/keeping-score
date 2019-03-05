import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scores from './components/Scores/Scores';
import Axios from 'axios';


class App extends Component {
  render() {
    return (
      <div>
         <Scores/>
      </div>
    );
  }
}

export default App;
