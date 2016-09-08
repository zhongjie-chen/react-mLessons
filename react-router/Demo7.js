import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import './Demo2.css';

const Page = (props) =>
  <div>
    <h1>{props.location.query.message || 'Hello'}</h1>
  </div>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Page} />
      </Router>
    );
  }
}

export default App;
