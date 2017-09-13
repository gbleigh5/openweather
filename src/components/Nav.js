import React from 'react';
// Link is a URL router for different paths defined
// IndexLink is used to specify the root path
import {Link, IndexLink} from 'react-router-dom';

let Nav = (props) => {
    return (
      <nav>
        <h3 className="scr-text">Nav Component</h3>
        <IndexLink to="/" activeClassName="active" className="nav-link">Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" className="nav-link">About</Link>
        <Link to="/examples" activeClassName="active" className="nav-link">Example</Link>
      </nav>
    );
}

export default Nav;
