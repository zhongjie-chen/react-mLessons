import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import './Demo2.css';

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <Links />
    {props.children}
  </div>

const About = () =>
  <div>
    <h1>About</h1>
  </div>

const Contact = () =>
  <div>
    <h1>Contact</h1>
  </div>

const Settings = () =>
  <div>
    <h1>Settings</h1>
  </div>

const Links = () =>
  <nav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/contact">Contact</Link>
    <Link activeClassName="active" to="/settings">Settings</Link>

  </nav>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={About} />
          <Route path="contact" component={Contact} />
          <Route path="settings" component={Settings} />
        </Route>
      </Router>
    );
  }
}

export default App;
