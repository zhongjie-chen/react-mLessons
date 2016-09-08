//JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员
import React from 'react';
import ReactDOM from 'react-dom';

let arr = [
  <h1>hi~</h1>,
  <h1>hello react</h1>
];

ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('app')
);
