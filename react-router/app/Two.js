import React, {PropTypes} from 'react';
import Tab from './Tab'
export default class Two extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Two <Tab></Tab></div>);
  }
}

Two.propTypes = {
};
