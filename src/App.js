import React from 'react';
import { config } from './config/config';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={config.images.home.logo} className="App-logo" alt="logo" />
        <p>{config.strings.home.header}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="App-footer">
        <span className="footer-text">
          {'This website template was made with React by '}
          <a className="App-link" href="https://www.brodyjohnstone.com">
            {'Brody Johnstone'}
          </a>
          {' and '}
          <a className="App-link" href="https://www.brandonmanuel.com">
            {'Brandon Manuel'}
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
