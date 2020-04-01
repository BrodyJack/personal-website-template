import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const AppRouter = () => (
    <div className="App-body">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </div>
);

export default AppRouter;