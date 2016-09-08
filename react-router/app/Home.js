import React, {PropTypes} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import NotFound from './NotFound'
import One from './One'
import Two from './Two'
import Three from './Three'
import Detail from './Detail'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={One}  />
        <Route path="/two(/:id)(/:name)" component={Two} />
        <Route path="/three" component={Three} />
        <Route path="/detail(/:id)(/:name)" component={Detail} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

Home.propTypes = {
};
