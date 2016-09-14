import React, {PropTypes} from 'react';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>评论！！</p>
        <div>
          <textarea ref="content" placeholder="评论写得屌一点，人生才够完美！" />
        </div>
        <input ref="nickname" type="text" placeholder="昵称" />
        <button type="button" onClick={() => this.props.onSubmit(this.refs.content.value, this.refs.nickname.value)}>提交</button>
      </div>
    );
  }
}

Comment.propTypes = {
  onSubmit: PropTypes.func
};
