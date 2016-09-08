import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import './Demo2.css';

const Message = (props) =>
  <div>
    <h1>{props.params.message || 'Hello'}</h1>
    <Links />
  </div>

const Links = () =>
  <nav>
    <Link to="/">Hello</Link>
    <Link to="/yong">Yong</Link>
    <Link to="/feng">Feng</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/(:message)" component={Message} />
      </Router>
    );
  }
}

export default App;
