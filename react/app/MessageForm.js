import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, Col, ControlLabel, horizontal, FormControl, Checkbox, Button} from 'react-bootstrap';

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  getFormControl(ref){
    return ReactDOM.findDOMNode(ref).value
  }

  onSubmitHandler(event){
    let title = this.getFormControl(this.refs.title);
    let content = this.getFormControl(this.refs.content);
    let submitMessage = {title: title, content: content};
    this.props.onSubmitCallback(submitMessage);
  }

  render() {
    return (
        <Form horizontal>
          <FormGroup controlId="formHorizontalTitle">
            <Col componentClass={ControlLabel} sm={2}>
              标题
            </Col>
            <Col sm={10}>
              <FormControl ref="title" type="text" placeholder="请输入标题" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalContent">
            <Col componentClass={ControlLabel} sm={2}>
              内容
            </Col>
            <Col sm={10}>
              <FormControl ref="content" type="text" placeholder="请输入内容" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.onSubmitHandler.bind(this)}>
                发表留言
              </Button>
            </Col>
          </FormGroup>
        </Form>
    );
  }
}
