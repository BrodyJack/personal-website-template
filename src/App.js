import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import AppHeader from './components/AppHeader';
import AppRouter from './components/AppRouter';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <AppRouter />
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
