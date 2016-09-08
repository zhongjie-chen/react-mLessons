import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import './Demo2.css';

const Page = (props) =>
  <div>
    <h1>{props.location.query.messages && props.location.query.messages.map(e => <div key={e}>{2 + e}</div>) || 'Hello'}</h1>
    <Links />
  </div>

const Links = () =>
  <nav>
    <Link to={{ pathname: "/", query: {messages: [1, 2, 3]} }}>links</Link>
  </nav>

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
