import React, { Component } from 'react';
import './App.css';
import Avengers from './components/AvengerList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>This is a header</h1>
        </header>
        <Avengers />
      </div>
    );
  }
}

export default App;
