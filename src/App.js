import React from 'react';
import { config } from './config/config';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={config.images.home.logo} className="App-logo" alt="logo" />
        <p>
          {config.strings.home.header}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
