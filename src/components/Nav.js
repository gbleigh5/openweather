import React from 'react';
// Link is a URL router for different paths defined
// IndexLink is used to specify the root path

import {NavLink} from 'react-router-dom';

let Nav = (props) => {
    return (
      <nav>
        <h3 className="scr-text">Nav Component</h3>
        <NavLink to="/" className="nav-link">Get Weather</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/examples" className="nav-link">Example</NavLink>
      </nav>
    );
}

export default Nav;
