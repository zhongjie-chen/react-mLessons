import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import './Demo2.css';

const HomeHeader = () => <h1>HomeHeader</h1>
const HomeBody = () => <h1>HomeBody</h1>
const AboutHeader = () => <h1>AboutHeader</h1>
const AboutBody = () => <h1>AboutBody</h1>

const Container = (props) =>
  <div>
    {props.header}
    {props.body}
    <Links />
  </div>

const Links = () =>
  <nav>
    <Link to="/">Hello</Link>
    <Link to="/about">About</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute components={{ header:HomeHeader, body:HomeBody }} />
          <Route path="about" components={{ header:AboutHeader, body:AboutBody }} />
        </Route>
      </Router>
    );
  }
}

export default App;
