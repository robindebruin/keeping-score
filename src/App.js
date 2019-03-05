import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreList from './components/score-list/score-list';
import AddScoreEntry from './components/add-score-entry/add-score-entry';



const highScoreList = [{name: 'Robin', score: 22},{name: 'Piet', score: 1}, {name: 'Gert', score: 100000}, {name: 'Sjaak', score: 999}];


class App extends Component {

// constructor(){}


  render() {
    return (

     
      <div className="App container">
       {/* <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" ></link>
      </head> */}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    
        <ScoreList scores={highScoreList}></ScoreList>

        <br/>
        <AddScoreEntry></AddScoreEntry>
      </div>
    );
  }
}

export default App;
