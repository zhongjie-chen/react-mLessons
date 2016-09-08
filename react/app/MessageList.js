import React, {PropTypes} from 'react';
import MessageBody from './MessageBody'
import {PageHeader} from 'react-bootstrap';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  getMessages(){
    let messages = this.props.messages.map(((message, i) => {
      return(
        <MessageBody key={i} message={{title: message.title, content: message.content}}/>
      );
    }));
    return messages;
  }

  render() {
    return (
      <div>
        {this.getMessages()}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};
