import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">pomo</h1>
        </header>
        <div className="contents">
          <Timer />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
