import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul className="topics-nav">
      <li>
        <NavLink activeClassName="selected" to={`${match.url}/rendering`}>
          Rendering with React
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={`${match.url}/components`}>
          Components
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={`${match.url}/props-v-state`}>
          Props v. State
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <p>Please select a topic.</p>
    )}/>
  </div>
)

const Example = () => (
  <Router>
    <div className="example-wrap">
      <ul className="nav">
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink className="nav-link" to="/topics">Topics</NavLink></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default Example;
