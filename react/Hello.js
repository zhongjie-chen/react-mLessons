import React, {PropTypes} from 'react';
import { Button, Popover, OverlayTrigger, Jumbotron } from 'react-bootstrap';

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );
  }
}

Hello.propTypes = {
};
