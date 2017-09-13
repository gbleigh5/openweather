import React from 'react';
import Nav from './Nav.js';

let Main = (props) => {
    return (
      <section className="wrap">
        <Nav />
        <h1 className="scr-text">Main Component</h1>
        {props.children}
      </section>
    );
}

export default Main;
