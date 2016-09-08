//ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <div><h1>Hello world</h1></div>,
  document.getElementById('app')
);
