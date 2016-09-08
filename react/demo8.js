/**生命周期 & ajax
组件的数据来源，通常是通过 Ajax 请求从服务器获取，可以使用 componentDidMount 方法设置 Ajax 请求，等到请求成功，再用 this.setState 方法重新渲染 UI
*/
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const URL = 'demo8.json';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    }
  }

  componentDidMount(){
    $.get(URL, numbers => {
      this.setState({numbers: numbers})
    })
  }

  render() {
    return (
      <div>
      {
        this.state.numbers.map(number => {
          return <h1>{number}</h1>
        })
      }
      </div>
    );
  }
}

ReactDOM.render(
  <Movie />,
  document.getElementById('app')
);
