import React, {PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

export default class MessageBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Panel header={this.props.message.title} bsStyle="primary">
          <div>{this.props.message.content}</div>
        </Panel>
      </div>
    );
  }
}

MessageBody.propTypes = {
  message: PropTypes.object.isRequired
};
