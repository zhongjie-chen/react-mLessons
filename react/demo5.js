/**
  this.props.children表示组件的所有子节点
  这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；
  如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。
  React 提供一个工具方法 React.Children 来处理 this.props.children 。
  我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。
*/
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class NodeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ol>
        {
          React.Children.map(this.props.children, (child) => {
            return <li>{child}</li>;
          })
        }
        </ol>
      </div>
    );
  }
}

ReactDOM.render(
  <NodeList>
    <span>hello</span>
    <span>world</span>
  </NodeList>,
  document.getElementById('app')
);
