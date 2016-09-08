/**
  一个简单的留言板 学习react 组件化等
  引用react-bootstrap的组件
*/
import React, {PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';
import MessageList from './MessageList';
import messages from './messages';
import MessageForm from './MessageForm';

export default class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages
    }
  }

  onSubmitCallback(message){
    let newMessages = this.state.messages;
    newMessages.unshift(message);
    this.setState({
      messages: newMessages
    });
  }

  render() {
    return (
      <div>
        <PageHeader><span className='text'>留言版</span> <small>主人寄语：这是我的留言板，欢迎大家留言</small></PageHeader>
        <MessageForm onSubmitCallback={this.onSubmitCallback.bind(this)}></MessageForm>
        <MessageList messages={this.state.messages}></MessageList>
      </div>
    );
  }
}
