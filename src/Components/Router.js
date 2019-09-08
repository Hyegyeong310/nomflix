import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Route/Home';
import TV from 'Route/TV';
import Search from 'Route/Search';

export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search" component={Search} />
  </Router>
);
