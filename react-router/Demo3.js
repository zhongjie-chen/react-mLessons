import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

import './Demo2.css';

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <Links />
    {props.children}
  </div>

const About = (props) =>
  <div>
    <h1>About</h1>
    {props.children}
  </div>

const Contact = () =>
  <div>
    <h1>Contact</h1>
  </div>

const Links = () =>
  <nav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/about">About</Link>
    <Link activeClassName="active" to="/about/contact">Contact</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="about" component={About}>
            <Route path="contact" component={Contact} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
