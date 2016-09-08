import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import './tab.css'
import '../Demo2.css';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav style={{position: 'fixed', bottom: 0,width:'100%'}}>
        <Link className="item" activeClassName="active" to="/">One</Link>
        <Link className="item" activeClassName="active" to="/two">Two</Link>
        <Link className="item" activeClassName="active" to="/three">Three</Link>
      </nav>
    );
  }
}

Tab.propTypes = {
};
