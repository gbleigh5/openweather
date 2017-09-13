import React from 'react';
// Link is a URL router for different paths defined
// IndexLink is used to specify the root path
import {Link} from 'react-router-dom';

let Nav = (props) => {
    return (
      <nav>
        <h3 className="scr-text">Nav Component</h3>
        <Link to="/" className="nav-link">Get Weather</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/examples" className="nav-link">Example</Link>
      </nav>
    );
}

export default Nav;
