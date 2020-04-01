import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config/config';

const AppHeader = () => (
    <header className="App-header">
        <img src={config.images.home.logo} className="App-logo" alt="logo" />
        <span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </span>
    </header>
);

export default AppHeader;