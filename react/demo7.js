/**组件状态
组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI
*/
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  handleClick(event){
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div>
        <p onClick={this.handleClick.bind(this)}>
          You {text} this. Click to toggle.
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('app')
);
/**
上面代码是一个 LikeButton 组件，它的 构造函数中this.state=用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。
当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，
就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。
*/
