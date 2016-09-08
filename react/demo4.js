/**
  组件
  React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.Component就用于生成一个组件类.
  1 所有组件类都必须有自己的 render 方法，用于输出组件。
  2 组件类只能包含一个顶层标签，否则会报错。
  3 组件的用法与原生的 HTML 标签完全一致，可以任意加入属性，比如 <Hello name="Jason"> ，就是 Hello 组件加入一个 name 属性，值为 Jason
  组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取。
  4 添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
*/
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Hello {this.props.name}</div>);
  }
}

/**
组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。
组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
*/
Hello.propTypes = {
  name: PropTypes.string.isRequired
};



ReactDOM.render(
  <Hello name="Jason" />,
  document.getElementById('app')
);
