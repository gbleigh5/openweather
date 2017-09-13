import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, HashRouter } from 'react-router-dom';
import Main from './components/Main.js';
import Weather from './components/Weather.js';
import About from './components/About.js';
import Example from './components/Example.js';


// hashHistory: tells React that the # in the URL is used to maintain Routes
// IndexRoute is the route used in the /
// Can create a child Route component in a Route component for another path
 // under a defined route, good way for making sub pages
ReactDOM.render(
  <HashRouter>
    <Route path='/' component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Example} />
      <IndexRoute component={Weather} />
    </Route>
  </HashRouter>,
  document.getElementById('root')
);
