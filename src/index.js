import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav.js';
import Weather from './components/Weather.js';
import About from './components/About.js';
import Example from './components/Example.js';


// hashHistory: tells React that the # in the URL is used to maintain Routes
// IndexRoute is the route used in the /
// Can create a child Route component in a Route component for another path
 // under a defined route, good way for making sub pages
ReactDOM.render(
  <BrowserRouter>
    <section className="wrap">
      <Nav />
      <Route exact path='/' component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Example} />
      
    </section>
  </BrowserRouter>,
  document.getElementById('root')
);
