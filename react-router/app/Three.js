import React, {PropTypes} from 'react';
import Tab from './Tab'
export default class Three extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Three <Tab></Tab></div>);
  }
}

Three.propTypes = {
};
